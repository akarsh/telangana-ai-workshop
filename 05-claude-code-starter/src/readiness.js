export function isReady({ hasLaptop, sharedComputerAssigned, setupComplete }) {
  // Intentional workshop bug: this wrongly requires both device paths.
  return hasLaptop && sharedComputerAssigned && setupComplete;
}

