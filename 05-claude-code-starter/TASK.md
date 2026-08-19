# Lab 5 — Fix the readiness checker

You're going to find a real bug, fix it, and prove the fix works with a test — the same loop professional developers use every day. Any AI tool works here (Claude Code, or the free ChatGPT/Claude.ai web chat) — pick whichever one you have access to.

## Step 1 — See it fail

Run the checks first, before touching any code, so you know exactly what "fixed" looks like:

```bash
cd 05-claude-code-starter
npm test
```

You should see something like this:

```
✖ laptop and completed setup is ready
✖ shared computer and completed setup is ready
✔ a device without setup is not ready
```

Two tests fail. That's expected — the app has an intentional bug for you to find.

## Step 2 — Fix it

The rule the app should follow: **a participant is ready when they have a laptop OR a shared lab computer assigned, AND their setup is complete.**

### Option A — Claude Code

Give it this brief:

> Inspect the project and fix the readiness calculation. A participant is ready only when they have a laptop **or** a shared lab computer, and they have completed setup. Keep the public function name unchanged. Add one boundary test, run all tests, and summarize the diff. Do not add dependencies.

### Option B — Free ChatGPT or Claude.ai web chat

No paid plan needed — the free web chat can do this whole lab, you'll just copy/paste by hand instead of an agent editing files for you:

1. Open [src/readiness.js](src/readiness.js) and copy its contents into [claude.ai](https://claude.ai) or [chatgpt.com](https://chatgpt.com).
2. Paste in the failing test output from Step 1 and the rule above.
3. Ask it to explain the bug first, then propose a fix — explaining before fixing is part of the definition of done either way.
4. Copy the corrected code back into `src/readiness.js` yourself. Keep the function name `isReady` unchanged.
5. Ask it for one more test case that checks a boundary (e.g. both device options false). Add that test to [test/readiness.test.js](test/readiness.test.js) yourself.

## Step 3 — Verify

```bash
npm test
```

All three tests (plus your new one) should pass. If something still fails, paste the new output back into the chat and ask it to reconcile the diff with the failure — that's normal, not a setback.

## Stuck? Here's the solution

No shame in checking — this is a learning workshop, not an exam. The reference fix lives at [../solutions/05-claude-code-starter/readiness.js](../solutions/05-claude-code-starter/readiness.js), and a full walkthrough of *why* it works is at [../solutions/05-claude-code-starter/explanation.md](../solutions/05-claude-code-starter/explanation.md). Try it yourself first if you can, but if you're stuck, read the explanation, then come back and write the bug in your own words before moving on.

## Extension

Add an accessible status message to the browser UI. Keep the interface usable with a keyboard and preserve the existing visual structure.

## Definition of done

- [ ] All tests pass.
- [ ] You can explain the bug in one sentence, in your own words.
- [ ] No dependency was added.
- [ ] The diff contains only task-related changes.
