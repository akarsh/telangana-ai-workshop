# Lab 5 explanation — why the bug happens and why the fix works

## The bug

```js
return hasLaptop && sharedComputerAssigned && setupComplete;
```

This reads as "ready only if the participant has a laptop **and** a shared computer **and** setup is complete." In practice almost nobody has both a personal laptop *and* a shared lab computer assigned to them — those are two different, mutually exclusive paths to having a device. Requiring both means the function reports almost everyone as not ready, even people who are genuinely set up.

The two failing tests each represent one of the valid paths:

- `hasLaptop: true, sharedComputerAssigned: false, setupComplete: true` → a laptop-only participant, should be ready.
- `hasLaptop: false, sharedComputerAssigned: true, setupComplete: true` → a shared-computer-only participant, should be ready.

Both fail under the buggy code because each is missing the *other* device path, and `&&` demands all three conditions.

## The fix

```js
return (hasLaptop || sharedComputerAssigned) && setupComplete;
```

This groups the two device paths with `||` — either one satisfies "has a device" — and only *then* applies `&&` with `setupComplete`. That matches the actual rule from the brief: **(laptop OR shared computer) AND setup complete.**

## Why this matters beyond this one bug

`&&` and `||` don't compose the way plain English "and"/"or" sometimes suggests. When a requirement has the shape "either of these two things, plus this other thing," you almost always need parentheses to group the "either" part first — `a && b && c` and `(a || b) && c` look similar but produce very different truth tables. The tests catching this (rather than someone eyeballing the code) is the actual lesson of the lab: a logic error like this is easy to write and easy to miss on a read-through, but a boundary test (one device true, the other false) catches it immediately.

## Why "explain before fix" was part of the brief

If you ask an AI tool to "just fix the bug," it can patch the symptom without you understanding the failure mode — you'd pass the lab without being able to spot the same mistake next time. Asking for the explanation first, and checking it against this reasoning, is what makes the fix something you learned rather than something that happened to your codebase.
