export const CHECKOUT_PROGRAM_SLUGS = ['semaglutide', 'tirzepatide'] as const

export type CheckoutProgramSlug = (typeof CHECKOUT_PROGRAM_SLUGS)[number]

export function isCheckoutProgramSlug(value: unknown): value is CheckoutProgramSlug {
  return CHECKOUT_PROGRAM_SLUGS.includes(value as CheckoutProgramSlug)
}
