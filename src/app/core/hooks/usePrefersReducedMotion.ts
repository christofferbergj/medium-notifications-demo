import { useMedia } from 'react-use'

/**
 * Checks if the user prefers reduced motion through OS settings
 */
export function usePrefersReducedMotion() {
  return useMedia('(prefers-reduced-motion: reduce)')
}
