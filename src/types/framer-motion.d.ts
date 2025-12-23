declare module 'framer-motion' {
  // Minimal shim to avoid TS "Cannot find module" diagnostics in environments
  // where dependency typings aren't available to the language server.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const motion: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const AnimatePresence: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const other: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export default other
}

