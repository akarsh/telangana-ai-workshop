# Lab 1 explanation — why the five-field brief works

## What was actually missing from the vague request

"Create a campaign for our college event" is missing every field a writer would need to actually start: who it's for, what channel it runs on, what facts are true, how long it should be, and how you'd know if it's good. Without those, the AI has to guess all of them — and it will guess confidently, not visibly, which is the real risk. A vague prompt doesn't produce a vague answer; it produces a *specific but invented* one.

## Why `[NEEDS INPUT]` matters more than it looks

The natural failure mode with an unconstrained prompt is that the model invents a date, a venue, or a prize to fill the gap, because a complete-sounding announcement is what it's optimizing for. Explicitly instructing it to mark unknowns is what converts "confident-sounding text" into "a draft you can trust the known parts of." This is the single highest-leverage instruction in the whole template — everything else improves quality, this one prevents a specific kind of harm (a false fact going out to real students).

## Why correctness comes before usefulness

If you polish the wording of a draft that contains an invented fact, you've just made the wrong information more persuasive. Fixing correctness first means every later improvement pass is safe to make — you're never at risk of making a false claim more convincing. This ordering is also why the scorecard weighs Correctness and Transparency independently from Usefulness and Format: a response can be beautifully formatted and still wrong.

## Why the scorecard exists at all

"Improve it" without a rubric tends to mean "make it sound better," which optimizes the wrong thing. Scoring five independent dimensions forces you to notice, for example, that a response can nail Format and Usefulness while still failing Audience fit — a gap that a purely subjective "does this look good?" read would likely miss, especially once you've read the response a few times and stopped noticing its actual audience.

## A common misconception worth flagging

A better prompt reduces how much correction you'll need to do later — it does not make the output true. Even a perfectly-specified brief can produce a subtly wrong fact if the AI doesn't actually know it (a date, a rule, a policy). The five-field brief and the scorecard both structure *how* you ask and *how* you check, but "treat model output as a draft until verified" (from the repo's ground rules) still applies to everything that comes out the other end.
