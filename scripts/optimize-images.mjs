import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const PHOTO_MAX = 1400;
const PRODUCT_MAX = 900;
const NAV_LOGO_MAX = 320;
const QUALITY = 72;

const jobs = [
  { rel: "public/team/doctor-1.png", maxWidth: PHOTO_MAX },
  { rel: "public/team/doctor-2.png", maxWidth: PHOTO_MAX },
  { rel: "public/team/doctor-3.png", maxWidth: PHOTO_MAX },
  { rel: "public/team/doctor-4.png", maxWidth: PHOTO_MAX },
  { rel: "public/about/vitalwell-dual-vials.png", maxWidth: PRODUCT_MAX },
  { rel: "public/about/vitalwell-patient-portal.png", maxWidth: PHOTO_MAX },
  { rel: "public/images/physician-1.png", maxWidth: PHOTO_MAX },
  { rel: "public/vial-semaglutide.png", maxWidth: PRODUCT_MAX },
  { rel: "public/vial-tirzepatide.png", maxWidth: PRODUCT_MAX },
  { rel: "public/cutout-duo-tirzepatide.png", maxWidth: PRODUCT_MAX },
  { rel: "public/cutout-duo-semaglutide.png", maxWidth: PRODUCT_MAX },
  { rel: "public/glp1-vials.png", maxWidth: PRODUCT_MAX },
  { rel: "public/newlogo.png", maxWidth: PRODUCT_MAX },
  { rel: "public/treatments/vial-semaglutide.png", maxWidth: PRODUCT_MAX },
  { rel: "public/treatments/vial-tirzepatide.png", maxWidth: PRODUCT_MAX },
  { rel: "public/treatments/cutout-duo-tirzepatide.png", maxWidth: PRODUCT_MAX },
  { rel: "public/images/cta-banner.png", maxWidth: PHOTO_MAX },
  { rel: "public/images/closing-cta-lifestyle.png", maxWidth: PHOTO_MAX },
];

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

async function convertOne(inputPath, outputPath, maxWidth) {
  const before = fs.statSync(inputPath).size;
  const image = sharp(inputPath);
  const meta = await image.metadata();
  const width = meta.width ?? maxWidth;
  const pipeline =
    width > maxWidth
      ? image.resize({ width: maxWidth, withoutEnlargement: true })
      : image;
  await pipeline.webp({ quality: QUALITY }).toFile(outputPath);
  const after = fs.statSync(outputPath).size;
  const pct = before ? (((before - after) / before) * 100).toFixed(1) : "0.0";
  console.log(
    `${path.relative(root, inputPath)} -> ${path.relative(root, outputPath)} | ${formatBytes(before)} -> ${formatBytes(after)} (${pct}% smaller)`
  );
  return { before, after };
}

async function main() {
  let totalBefore = 0;
  let totalAfter = 0;
  let converted = 0;
  let skipped = 0;

  for (const job of jobs) {
    const inputPath = path.join(root, job.rel);
    if (!fs.existsSync(inputPath)) {
      console.log(`SKIP (missing): ${job.rel}`);
      skipped += 1;
      continue;
    }
    const outputPath = inputPath.replace(/\.png$/i, ".webp");
    const { before, after } = await convertOne(inputPath, outputPath, job.maxWidth);
    totalBefore += before;
    totalAfter += after;
    converted += 1;
  }

  const logoPng = path.join(root, "public/newlogo.png");
  const logoNavWebp = path.join(root, "public/newlogo-nav.webp");
  if (!fs.existsSync(logoPng)) {
    console.log("SKIP (missing): public/newlogo.png (navbar logo)");
    skipped += 1;
  } else {
    console.log("--- navbar logo ---");
    const { before, after } = await convertOne(logoPng, logoNavWebp, NAV_LOGO_MAX);
    totalBefore += before;
    totalAfter += after;
    converted += 1;
  }

  console.log("---");
  console.log(
    `Done. Converted ${converted}, skipped ${skipped}. Total ${formatBytes(totalBefore)} -> ${formatBytes(totalAfter)}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
