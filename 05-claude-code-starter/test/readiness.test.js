import test from "node:test";
import assert from "node:assert/strict";
import { isReady } from "../src/readiness.js";

test("laptop and completed setup is ready", () => {
  assert.equal(isReady({ hasLaptop: true, sharedComputerAssigned: false, setupComplete: true }), true);
});

test("shared computer and completed setup is ready", () => {
  assert.equal(isReady({ hasLaptop: false, sharedComputerAssigned: true, setupComplete: true }), true);
});

test("a device without setup is not ready", () => {
  assert.equal(isReady({ hasLaptop: true, sharedComputerAssigned: false, setupComplete: false }), false);
});

