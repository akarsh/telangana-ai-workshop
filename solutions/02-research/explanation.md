# Lab 2 explanation — why source-grounded answers look different

## Why the claim-source-confidence table comes before the recommendation

If you write the recommendation first and then go find sources to support it, you'll unconsciously cherry-pick evidence that fits the conclusion you already reached. Building the table first forces you to see what the source pack actually contains before you decide what it implies — the recommendation in the solution above (hands-on lab, shared desktops as baseline) falls directly out of the table, not the other way around.

## Why "not established" is a legitimate answer

The AI-output hallucination example from the workshop slides — *"because every participant has a laptop and a paid AI plan, the workshop can run entirely as individual exercises"* — sounds fluent and confident, but Source D directly contradicts the paid-plan half of it, and Source A never establishes that laptop ownership is universal. Fluent text is not the same as supported text. Writing "not established" instead of guessing is what keeps a plausible-sounding claim from becoming a load-bearing part of the recommendation.

## Why confidence levels aren't just High/Low

Notice the middle row: "device sharing will likely be required" is rated Medium, not High, because it depends on a number the source pack doesn't give (how many of the 72 registrants own laptops). A three-level confidence scale — High (directly stated), Medium (follows from combining sources, but with an unstated assumption), Not established (no source supports it) — is what lets a reader tell the difference between "this is a fact" and "this is a reasonable inference that could be wrong."

## Why the uncertainties section matters as much as the recommendation

A recommendation without stated uncertainties reads as more certain than it is. Naming "actual attendance vs. registration" and "power outlet coverage" up front means that if either turns out to be a problem on the day, it was anticipated — not a surprise that undermines the whole plan. This is the same discipline as Lab 3's "what can the dataset not tell us" question: good analysis states its own blind spots before someone else finds them.
