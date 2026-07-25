# CLAUDE.md

Behavioral rules for Claude Code in the divergence repository.

## What This Is

Divergence is a worldbuilding project under the para-garden org — the world that rejected homogeneity. It is the counterpart to legacy: same starting point, different ground. Not utopia declared from above. The floor got built. Daphne grew plants because the light was good.

The site is a spatial graph (forked from ptera.world's engine, same as legacy) that you navigate like a world. Nodes are places, people, things, events, ideas. The graph layout is meaning: proximity is relationship.

## Origin

Scaffolded 2026-03-28 from a conversation that started as "what would a world without all the issues look like?" and became a worldbuilding project. The name came from what the world rejects: homogeneity. Flattening is impersonal. Pancakes aren't people. Divergence is the world where things stayed specific — not because anyone protected their specificity, but because the conditions that compress people into legible units for extraction didn't have enough leverage.

The relationship to legacy: same world, different fork. Legacy is 2032 with the current trends continued, neutered, rendered habitable by normalization. Divergence is 2032 where the floor got built before the window closed. Both are in the paragarden org. Legacy is the mirror. Divergence is the answer.

Characters in divergence are independent of legacy characters — do not cross them. However, parallel characters may exist by coincidence: divergence Noa (small tools, specific communities, enough is enough) and legacy Noa Chen (same instincts, but haunted by the lottery problem) are apparently the same soul in different conditions. Keep them independent. Don't make the parallel explicit in either world's content.

## Architecture

Forked from ptera.world's engine, same as legacy. See legacy's CLAUDE.md and ptera.world's CLAUDE.md for the full architecture description. Divergence uses the same graph engine, zoom tier system, content pipeline, cluster system, and build tools.

Key configuration:
- One collection: `default` (the world)
- Site config: `name: "divergence"`, `domain: "para.garden"`, `metaNodeId: "meta/divergence"`
- World content in `public/content/world/`

## Commands

```bash
bun install
bun run dev       # dev server at localhost:3000
bun run build     # build to dist/
bun run inspect   # layout report
bun lint
bun check:types
```

## The World

### What it is

A recognizable planet. Gravity works, rain falls, people eat bread. The economic substrate is different enough that everything downstream shifted. Not a revolution, not a policy win — the floor got built before the window closed, the way Europe built it post-war, before the ideology hardened into "the market handles this."

### What the floor changed

- **Investment stopped colonizing the present.** The house you live in is just where you live. The garden can be a garden. Kids don't have college funds opened before they can talk because the worst case isn't catastrophic.
- **Healthcare is just an appointment.** Not a financial calculation. You go because something feels off and it's tuesday.
- **Work is what needs doing.** The filler jobs — compliance departments, growth hackers, middle management of middle management — aren't there. What remains: things that need making, fixing, growing, building, caring for. Care work counts.
- **The web is writable.** contenteditable shipped in IE5.5. HTML5 standardized it. In this world, the web presence came with the floor — you have a place, it's writable, it's yours. The barrier is below the floor: not experienced as a barrier, like electricity.

### The city

Mixed-use, vertical, alive. The bakery on the ground floor, apartments above it, shops on the middle floors — not just ground-floor commercial. Overlapping paths. The bakery is viable because enough people walk past it. Relationships form in the gaps between errands.

Buildings look inhabited. Daphne grew plants on her windowsill because she liked how they smell. Jared put spraycans on his balcony wall. Bob has a monitor facing the courtyard showing ACNH (not by accident). Some buildings have interior courtyards with shared gardens. Some have skylights. None were designed by a movement. They're the aggregate of individual decisions made by people who had the freedom to make them.

The variety is the sign it's real. Nobody was coordinating.

No highways except when you actually need to go far. The default isn't speed — you're already where you're going. The street isn't infrastructure for cars that happens to have people on it. Animals cross the road because the city didn't eat everything.

Most people don't have cars. Not as a virtue or a sacrifice — just not necessary when the city is actually the city. When you're outside you're present, not in transit. Most time outside is being somewhere, not getting somewhere.

Farms are in the city. Not "urban farms" as a project — just farms, because the city wasn't entirely paved over. A field is fifteen minutes' walk. The plums came from down the road. The fox has somewhere to have come from. Sometimes there's things growing on roofs because someone wanted tomatoes, not because of an initiative.

Supply chains are short because distances are short. The produce arrived this morning. Seasonal means actually seasonal. Less packaging because less transit and warehousing. The economy is legible at the local level — things have a source you could name if you wanted to.

### The internet

The web is a place you visit, not a feed you swim in. Platforms exist but aren't load-bearing — the local is real enough to have gravity against a fully connected world. Pages look different from each other because they're writable surfaces someone made their own. You visit them. They're places.

Drama isn't naturally optimal. The systems that subsidize it aren't there. Conflict happens — people have opinions about aesthetics, about how the neighborhood should change, about the bakery expansion — but it's resolvable because nobody is defending their survival at the same time.

Culture doesn't average because nobody is optimizing for reach. Catchy things spread but don't displace. The weird specific thing travels as easily as the accessible thing.

### Education

No school. Places where kids are and things are happening and adults are doing things and kids get involved at the edges, gradually more toward the center. Waldorf but not as a branded philosophy — just how learning works when the credential system isn't gatekeeping survival. Apprenticeship. Immersion. The way kids learn language.

### What people argue about

Opinions. Real competing goods, no clear villain. The building that wants to expand. The wall that someone painted something the neighbors find ugly. Aesthetic disagreements are the main genre of conflict because aesthetic disagreements are what you have when survival isn't the argument.

### Technology and supply chains

Hardware exists and requires scale — mining, fabrication, manufacturing. But the organizational form is different. No engagement economy means no trillion-dollar incentive to own the whole stack.

Supply chains are networks of independent actors who communicate laterally — the mine is just a mine, the refinery is just a refinery, they have ongoing relationships and talk to each other when something changes. The chain is legible to the people in it. No vertical integration, no single company owning mine-to-consumer.

Infrastructure that requires initial scale (a fab, a rail network) gets bootstrapped through public or quasi-public coordination — someone has to organize the capital. After it's built, maintenance is handled by the people who use and depend on it. Collective ownership not as ideology but as practical consequence: if your refinery depends on the fab, you have skin in keeping it running.

Devices are tools, not platforms. More like appliances — standardized, made by various manufacturers, not locked ecosystems. They last because there's no planned obsolescence and no "new model every year" pressure. The software layer is infrastructure, not a product someone owns — open, writable, yours. It doesn't have a special name because it doesn't need one.

### Place names

Place names come from what's actually there — descriptive, not commemorative. Not named after dead people, not after colonized land, not after numbers. Named after the linden tree in the courtyard, the wide building on the corner, the one with the blue door. Names that emerged from use, not assignment. A place is called what it is.

### The nonhuman world

Animals cross the road. The city didn't eat everything so there's space for the fox. Nobody makes it weird. It's just a fox.

## Voice

In-world documents are written as if they exist inside the world — messages, pages, notes, community posts, things people made. No omniscient narrator. Everything is something someone in the world wrote or made.

The intimate scale is load-bearing. Utopia zooms out — shows you the system, the solved infrastructure, the gleaming city — and loses the person. Divergence stays close. One person's tuesday. The baker who doesn't check the zoning variance because the zoning was never wrong. The parent who didn't start the college fund. The garden that's just a garden. Nothing dramatic. A life being lived instead of optimized.

If the document could be a civics lesson, it's the wrong document.

### Vocabulary that doesn't exist here

Words exist for navigating systems with stakes, rules, and consequences. When the stakes change, the words lose their load. In divergence, watch for imported vocabulary:

- **adulting** — no referent. becoming an adult means you have more say in where you are and what you do.
- **self-care** — you just live. maintaining yourself isn't a category requiring intervention.
- **networking** — you meet people. connection isn't instrumental career infrastructure.
- **hustle / side hustle / grind** — optimizing yourself as an extractable resource. gone.
- **career** — the path you navigate to secure survival through work. work is just what you do.
- **content** — what you make when making it to be consumed at scale. nobody's making content.
- **brand** — legible, optimized self-presentation for reach. nobody has one.
- **boundaries** — lighter, because the conditions that make extraction the default are lighter.
- **monogamy / polyamory / relationship status** — no organizing vocabulary for coupling structures. people are just with people.
- **first base / second base** — no scoreboard for a negotiation that isn't a negotiation.
- **coming out** — when queerness isn't default-assumed-wrong, the ritual of declaring it changes shape.

When writing: Jared doesn't have a "practice." Ines doesn't talk about "outcomes." They just do the thing.

### Relationships

No word for monogamy — not really. Relationship structures are varied, personal, unremarkable. Nobody signals their configuration because it's not a category that organizes social life. Like "adulting," the word exists because the thing it describes is an ordeal; remove the ordeal and the word loses its referent.

No legal or financial weight to relationship structure. Healthcare isn't attached to a partner. Tax filing is individual, no couples incentives. Formalization (ceremony, paperwork) is purely personal — done if wanted, skipped if not, neither option carrying judgment. "Partner" means the person you're with. Nothing more is implied.

Even "relationship" is doing too much work — it's a category word for a world organized around couples as the primary social unit. Same with "base" vocabulary — that's a scoring system for a negotiation with rules. In divergence people are just with people in whatever way they are. No scoreboard, no category, no status to declare.

When writing: describe the concrete fact. Marta and someone share a space and keep different hours. Don't name what kind of thing it is.

### Connection

Connection is a byproduct of shared space, not a product of a single mechanism. The bakery, the stairwell, the courtyard, the corner while you wait for coffee — these all do it. Nobody organized it. The courtyard screen isn't what brings people together; the building does, the block does, the spaces between do. People who live near each other have probably already exchanged words — just not the kind that registered as a thing happening.

## Facets

Facets are tags. A document can carry multiple.

- **specificity** — things that are distinctly themselves. daphne's plants, jared's wall, the neighborhood that's genuinely its own.
- **proximity** — paths that overlap. the relationship that formed in the gap between errands.
- **presence** — being here instead of somewhere else. the house as lived-in place, not managed asset.
- **tending** — the relationship you have with something you care for. the garden vs the lawn.
- **floor** — what it feels like when the ground is solid. the optimization that stops being necessary.
- **invention** — making things because you can, not because you have to. noa building lumen. bob putting up a screen.
- **texture** — the specific feel of a place or moment. what makes one building different from every other building.
- **connection** — the byproduct of shared space. not pursued, arrived at.
- **ordinary** — the tuesday that's just a tuesday. good in the way normal things can be good.

## Content Types

- **People** — characters with specific lives. not archetypes.
- **Places** — neighborhoods, buildings, rooms, streets. what they look like and feel like and smell like.
- **Things** — objects that exist in the world. tools, foods, technologies, creations.
- **Moments** — things that happened. specific in the way only real things are specific.
- **Ideas** — concepts the world is organized around. kept to a minimum — show, don't explain.

## Org

para-garden / paragarden (`~/git/paragarden/`). GitHub org: para-garden.

## Context Is The Only Scarce Resource

Every byte that enters the main session stays for its entire lifetime. File contents, command output, search results — once read, it lingers and shapes every downstream token. There is no "just looking."

**All exploration runs in subagents.** Investigations, audits, "let me check," "let me find" — if the purpose of a tool sequence is to find out something you don't yet know, it runs in a subagent. The subagent returns a distilled summary; the raw output stays in the subagent.

## Subagent Prompts

A subagent prompt is composed in a "spec-writing" register that subtly changes what feels in-scope. Specific failure modes to name:

**Never tell a subagent "do not commit."** Delegation does not strip the commit step from completed work. If a subagent modifies files and the work is done, either the subagent commits, or the next thing the delegator does after it returns is commit — not summarize, not report. The phrase "do not commit" in your own prompt is the tell that you are about to leave work uncommitted.

**Do not delegate judgment.** Phrases like "if extraction is awkward, just duplicate" or "based on your findings, fix the bug" push synthesis onto the agent. If you are punting a decision into the prompt, you do not yet have enough understanding to delegate. Investigate first; write the prompt with the decision already made.

**Do not ask for a diff summary.** Subagent self-reports describe intent, not effect. After a code-modifying subagent returns, read `git diff` yourself. Skip the "report what you changed" instruction — it produces text you cannot trust and that pollutes main context.

**Do not re-explain CLAUDE.md.** Subagents inherit it. Repeating project layout or repo conventions in the prompt dilutes the actual task instructions and signals half-trust in the inheritance. Trust it or don't read it.

**Line numbers are orientation, not anchors.** Files shift between your read and the subagent's read. When citing locations, tell the subagent to find the lines by content ("the block that does X"), not by number.

**Name files explicitly; do not outsource the grep.** "Wherever it appears" invites scope creep. Grep first, list the exact files in the prompt.

**If the task is smaller than the prompt describing it, do it inline.** A subagent dispatch pays a full system-prompt + CLAUDE.md cache cost. One-shot bash commands and single-line edits should run in the main session with `Bash` or `Edit`.

**Match agent type to deliverable shape.** `Explore` is for lookup and search — finding files, symbols, references — not analytical synthesis. For audits, surveys, and pattern analysis whose deliverable is a report, use `general-purpose` with an explicit Opus model. For tasks whose deliverable is files on disk, use `general-purpose` with the tier matched to the work (Sonnet for mechanical, Opus for architectural).

**On unsatisfying subagent output, change something before retrying.** Same prompt + same model + same agent type = same result. Escalate model tier (Sonnet → Opus), narrow the prompt, or switch agent type. Identical retries are waste.

**Dispatch independent subagents in parallel.** Multiple Agent tool_use blocks in a single assistant message run concurrently. Serial Agent dispatch across sequential turns is the default failure mode and trades wall time for nothing. If two subagents do not depend on each other's output, they belong in the same message.

**Pair `isolation: worktree` with `run_in_background: true`.** A worktree implies meaningful write work. Foregrounding it blocks the main session for the entire run. Background unless the worktree's immediate output is what you need to act on next.

**Always set `subagent_type` and `model` explicitly.** Defaulting either collapses tier choice into an invisible decision. The model and agent type are part of the spec; name them every time, even when the choice is obvious. See the existing `Subagent model tiers` section above for which tier fits which work.

## Durability

Subagent reports, mid-session realizations, anything said in chat — none of these outlast the session. Anything worth keeping goes into CLAUDE.md, code, docs, or a commit.

**Note things down immediately — no deferral:**
- Problems, tech debt, issues → TODO.md now, in the same response
- Design decisions, key insights → CLAUDE.md
- Future/deferred scope → TODO.md **before** writing any code, not after

**Commit completed work immediately.** After each phase of a multi-phase plan, commit. Uncommitted work is lost work.

## Authenticity

When asked to analyze X, read X. Do not synthesize from conversation memory, prior summaries, or what the file probably says.

**Something unexpected is a signal.** Surprising output, anomalous numbers, a file containing what it shouldn't — stop and find out why. Do not accept the anomaly and proceed.

## Discipline

Corrections from the user are conversation, not material for new rules. A single correction does not warrant a CLAUDE.md edit. Rules are added when a failure mode is observed repeatedly and the rule names the failure it prevents.

Do not announce actions ("I will now…"). Act.

## Content Rules

**Build character cards as artifacts, not portraits.** A character card written as an in-world document (observation log, interview transcript, survey, room inventory) reveals the character through evidence rather than explaining them. You find the character by making the artifacts — the framing device is what surfaces who they are. A novelistic second-person portrait is the author explaining the character. An in-world document is the character existing. Prefer the latter.

**Stay intimate.** The moment a document starts explaining the world rather than existing inside it, it's wrong. No civics lessons. No system diagrams. Just a person's tuesday.

## Hard Constraints

- No Rust in this repo — it's a TypeScript/web project
- Don't hardcode content-specific values in build tools (inherited from ptera.world)
- Reflective/analytical writing goes on ptera.world, not here
- No omniscient narrator — everything is something someone in the world wrote
- No civics lessons — if the document is explaining how the world works from outside, it's wrong
