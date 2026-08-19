export function isReady({ hasLaptop, sharedComputerAssigned, setupComplete }) {
  return (hasLaptop || sharedComputerAssigned) && setupComplete;
}

