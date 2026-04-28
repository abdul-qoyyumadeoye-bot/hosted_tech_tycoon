// ============================================================================
// RESULTS PAGE
// ============================================================================

const TECH_SKILLS_FACTS = [
  "Communication: the ability to explain technical decisions clearly to non-technical colleagues and stakeholders is one of the most valued skills in any tech team.",
  "Problem-solving: employers consistently rank the ability to break a complex issue into smaller, testable steps as more important than knowing any specific programming language.",
  "Adaptability: technology changes faster than any degree programme can track — employers want people who treat learning as part of the job, not a one-time event.",
  "Collaboration: most tech products are built by cross-functional teams. The ability to work well with designers, product managers, engineers, and marketers is essential.",
  "Critical thinking: evaluating options with evidence, questioning assumptions, and making reasoned decisions under uncertainty is a skill that stands out in technical interviews.",
  "Project management: understanding how to plan work, set priorities, spot blockers, and deliver on time is valued at every level — not just for managers.",
  "Data literacy: being able to read, question, and draw conclusions from data — even without coding skills — is increasingly expected across all tech roles.",
  "Cybersecurity awareness: knowing the basics of secure design, common attack vectors, and data protection law helps teams build safer products from day one.",
  "Agile methodology: most UK tech companies use Agile or Scrum. Understanding sprints, standups, retrospectives, and iterative delivery is now a baseline expectation.",
  "User empathy: the best engineers and designers regularly speak to actual users. Understanding real needs — not assumed ones — is what separates good products from great ones.",
  "Ethics in technology: employers increasingly want candidates who can identify the social and ethical consequences of product decisions before those decisions ship.",
  "Version control: fluency in Git — committing, branching, merging, and reviewing code — is considered a foundational skill for any software engineering role.",
  "Cloud computing: familiarity with at least one cloud platform (AWS, Azure, or Google Cloud) is now expected for most backend, DevOps, and data engineering roles.",
  "API thinking: understanding how systems communicate through APIs — and how to design clean, predictable interfaces — is central to modern software development.",
  "Accessibility: designing and building products that work for users with disabilities is not just good ethics — it is a legal requirement in the UK under the Equality Act 2010.",
  "Product thinking: understanding why a feature exists, who it serves, and what success looks like is increasingly expected from engineers, not just product managers.",
  "Stakeholder management: knowing how to communicate progress, manage expectations, and align people with different priorities is a skill that accelerates careers at every level.",
  "Risk assessment: identifying what could go wrong — technically and commercially — before it happens is a skill that makes teams more resilient and projects more predictable.",
  "Automation: recognising repetitive, error-prone tasks and knowing when and how to automate them is one of the highest-leverage skills an engineer or analyst can have.",
  "Documentation: writing clear, concise technical documentation saves teams hours of confusion — and is consistently cited by engineering managers as underrated and undervalued.",
  "Leadership: taking ownership of a problem, driving it to resolution, and helping others grow around you is what separates senior contributors from those who remain stuck.",
  "Budget awareness: understanding the cost implications of technical decisions — cloud spend, contractor time, third-party licences — is expected of mid-level and above roles.",
  "A/B testing: running controlled experiments to validate product decisions with real user data is a core skill for product, growth, and data roles at tech companies.",
  "Inclusivity mindset: building products that work for a diverse range of users by default — rather than as an afterthought — is increasingly a hiring criterion at leading UK tech firms.",
  "Technical writing: producing clear specifications, post-mortems, and onboarding guides helps organisations move faster and makes individual contributors far more impactful.",
  "Privacy by design: embedding data protection into products from the start — rather than bolting it on later — is both best practice and a requirement under UK GDPR.",
  "Continuous learning: regularly reading industry blogs, attending meetups, completing short courses, and experimenting with new tools signals genuine curiosity to employers.",
  "Time management: delivering quality work within tight deadlines — and communicating early when timelines are at risk — is one of the most practical professional skills in tech.",
  "Systems thinking: understanding how a change in one part of a product affects everything else is what helps engineers avoid unexpected regressions and design robust architectures.",
  "Mentoring: actively sharing knowledge with junior colleagues builds stronger teams and is consistently cited by employers as a marker of seniority and readiness for leadership.",
  "Conflict resolution: navigating technical disagreements constructively — without ego — is a soft skill that engineering managers rank among the rarest and most valuable.",
  "Customer focus: the most effective technologists can connect every decision — no matter how small — back to the user or business outcome it is meant to serve.",
  "SQL and data querying: the ability to query a database directly to answer your own questions — without waiting for a data team — is a high-leverage skill across all tech disciplines.",
  "Machine learning literacy: understanding what AI models can and cannot do in production environments helps teams make better decisions about when to use them and when not to.",
  "DevOps awareness: understanding deployment pipelines, CI/CD processes, and infrastructure as code helps developers ship faster and with fewer incidents.",
  "Cross-cultural communication: UK tech teams are among the most internationally diverse in the world — working effectively across cultures, time zones, and communication styles is a real advantage.",
  "Open source contribution: contributing to public repositories demonstrates initiative, collaboration skills, and technical credibility to employers reviewing your profile.",
  "Financial literacy: understanding unit economics, burn rate, and the business model behind a product helps technologists make decisions that align with commercial reality.",
  "Negotiation: advocating for technical quality, realistic timelines, and necessary resources — without damaging relationships — is a skill that grows in value as your career progresses.",
  "Emotional intelligence: reading team dynamics, managing stress well, and responding thoughtfully to people under pressure are qualities that make strong individual contributors into great colleagues.",
  "Presentation skills: the ability to demo a product, pitch an idea, or walk through a technical decision to a mixed audience is a career accelerator that many technical people underinvest in.",
  "Networking: building genuine professional relationships — inside and outside your company — opens doors to opportunities that never appear on job boards.",
  "Testing and quality assurance: writing robust tests and understanding how to validate software behaviour systematically is what separates code that ships confidently from code that ships nervously.",
  "Debugging: methodically isolating and resolving bugs — rather than guessing — is a discipline that compounds over a career and makes engineers significantly faster and more reliable.",
  "Ownership mindset: taking full responsibility for the outcomes of your work — not just the tasks — is the single attitude most consistently associated with rapid career growth in tech.",
  "Strategic thinking: understanding the long-term direction of a product or company — and how your individual decisions connect to that direction — is what separates contributors from leaders.",
  "Resilience: working in tech often means shipping features that get cut, pitches that fail, and systems that break in the middle of the night. Handling setbacks without losing momentum is a genuine differentiator.",
  "Intellectual curiosity: employers repeatedly say they value people who seek to understand why things work — not just that they work. Asking better questions leads to better solutions.",
  "Attention to detail: catching edge cases, reviewing code carefully, and checking your own work before it goes out are habits that build the kind of trust that accelerates promotion.",
  "Cross-disciplinary thinking: understanding the basics of design, finance, or product alongside your core discipline allows you to communicate better and spot opportunities others miss.",
  "Entrepreneurial thinking: identifying problems worth solving, taking initiative without being asked, and proposing your own experiments are traits every fast-growing tech company values highly.",
  "Numerical literacy: understanding percentages, growth rates, statistical significance, and confidence intervals allows you to evaluate claims rigorously — a skill in high demand across every tech function.",
  "Scenario planning: thinking through what could go wrong before it does — and designing systems and plans that account for those scenarios — is a sign of engineering and product maturity.",
  "Writing clearly: being able to write a clear Slack message, a crisp design brief, or an unambiguous bug report is one of the most underrated but consistently high-leverage skills in a remote tech team.",
  "Regulatory awareness: knowing the basics of the laws that govern your sector — GDPR, the Online Safety Act, the Financial Conduct Authority rules — helps you build compliant products from the start.",
  "Talent spotting: recognising early potential in junior colleagues and advocating for them is a quality that engineering managers cite as one of the clearest signs of emerging leadership.",
  "Active listening: hearing what someone is really asking for — rather than what they literally said — saves teams hours of rework and is one of the hardest communication skills to develop.",
  "Iterative thinking: shipping something small, gathering feedback, and improving it — rather than trying to design the perfect solution in one go — is how the best tech products are built.",
  "Scope management: being able to say 'that is out of scope' clearly and confidently — and explaining why — is a key skill for both engineers and product managers under delivery pressure.",
  "Incident management: staying calm during a production outage, communicating clearly to stakeholders, and coordinating a structured response is one of the most valued operational skills in tech.",
  "Dependency management: identifying which parts of your work rely on others — and managing those dependencies proactively — is what keeps complex projects from stalling at the last moment.",
  "Performance optimisation: knowing how to identify bottlenecks, profile code, and improve system responsiveness is a skill that becomes more important as products scale.",
  "Growth mindset: treating every mistake as a learning opportunity — rather than evidence of inadequacy — is associated with measurably better career trajectories in tech.",
  "UX writing: crafting microcopy — the small text on buttons, error messages, and confirmations — that guides users clearly through a product is a specialist skill in growing demand.",
  "Competitive analysis: regularly assessing how rival products are evolving and what users are saying about them helps teams make faster, better-informed decisions about what to build next.",
  "Code review: giving and receiving thoughtful, specific, constructive feedback on code is a skill that raises team quality far beyond what any individual can achieve alone.",
  "Monitoring and alerting: designing systems that surface the right signals early — before they become crises — is a discipline that distinguishes mature engineering teams from reactive ones.",
  "Business case writing: being able to articulate why a piece of work is worth doing — in terms a finance director or CEO would understand — is what gets technical initiatives prioritised.",
  "Relationship building: investing time in genuine professional relationships — inside and outside your organisation — creates a network that delivers opportunities and support for decades.",
  "Failure analysis: running structured post-mortems after incidents — without blame, but with rigour — is a practice that the most reliable engineering teams treat as non-negotiable.",
  "Onboarding skills: being able to get a new colleague up to speed quickly — sharing context, tools, and norms without being condescending — is one of the clearest signs of a mature team contributor.",
  "Pair programming: working side-by-side with a colleague on the same code in real time transfers knowledge faster than any documentation and is used routinely at some of the UK's top tech teams.",
  "Mobile-first thinking: designing digital products for the smallest screen first — then expanding to desktop — is now standard practice and a baseline expectation at most product-led tech companies.",
  "Forecasting: building models to predict future user growth, cost, or performance allows teams to make proactive decisions rather than reactive ones.",
  "Translation skills: explaining a technical concept to a non-technical person without patronising them or losing accuracy is one of the hardest communication skills — and one of the most valued.",
  "Retrospectives: facilitating or participating in structured team reflection sessions helps teams improve their process continuously rather than repeating the same mistakes.",
  "Composability: building systems from small, well-defined, interchangeable components rather than monolithic blocks is a design philosophy that scales — and employers reward.",
  "Consent design: building user interfaces that make it genuinely easy for users to understand and control what data they share is both a legal requirement and a trust-building practice.",
  "Servant leadership: the best tech leads measure their success by how unblocked and empowered their team feels — not by how many decisions they personally made.",
  "OKR thinking: understanding how Objectives and Key Results work — and being able to write goals that are ambitious but measurable — is a framework increasingly adopted across UK tech companies.",
  "Platform thinking: understanding the difference between building a product and building a platform — and when each is appropriate — is a design maturity that senior technical leaders prize highly.",
  "Feedback-seeking: actively requesting honest assessments of your work — rather than waiting for an annual review — is one of the behaviours most consistently associated with rapid professional growth.",
  "Storytelling with data: turning raw numbers into a narrative that drives a decision is a skill in high demand across product, marketing, and leadership roles in tech.",
  "Accessibility testing: knowing how to use a screen reader, test keyboard navigation, and evaluate colour contrast is becoming a required technical skill rather than a specialist add-on.",
  "Security testing: knowing how to run basic penetration tests, read vulnerability reports, and fix common weaknesses in your own code is increasingly a core engineering skill rather than a specialist function.",
  "Community engagement: participating in industry events, online forums, and open discussions builds reputation and keeps you close to where technology is heading next.",
  "Backlog management: maintaining a prioritised, well-described list of future work — and being able to defend every item's placement — is a discipline that determines how coherently a team delivers over time.",
  "Chaos engineering: intentionally introducing failure into a system to discover how it responds — and where it breaks — is an advanced reliability practice adopted by the most sophisticated engineering teams.",
  "Knowledge management: capturing what your team knows — in wikis, runbooks, and diagrams — so that it does not live only in people's heads is a form of organisational resilience that leaders reward.",
  "Prototype thinking: knowing when to build a rough working demo rather than a production-quality feature — to test an idea before investing fully in it — is a speed and efficiency skill most tech organisations prize.",
  "Goal alignment: being able to connect your day-to-day work to the company's quarterly objectives and explain that connection to others demonstrates a kind of professional maturity that gets rewarded.",
  "Psychological safety: creating an environment where colleagues feel comfortable admitting mistakes, raising concerns, and proposing unconventional ideas is a team leadership skill with measurable effects on product quality.",
  "Schema design: thinking carefully about how data is structured before it is written to a database — because changing schema later is expensive — is a fundamental engineering discipline that saves teams months of pain.",
  "Infrastructure as code: managing cloud resources through version-controlled configuration files rather than manual console clicks makes infrastructure reproducible, reviewable, and far safer to change.",
  "Benchmarking: measuring system performance against defined baselines — rather than relying on intuition — allows engineering teams to make data-driven optimisation decisions with confidence.",
  "Peer recognition: actively acknowledging colleagues' contributions — publicly and specifically — builds psychological safety and team cohesion in ways that compound over time.",
  "Clarity under pressure: the ability to communicate clearly, make decisions quickly, and stay focused on priorities during a crisis is a leadership quality that distinguishes engineers who rise from those who plateau.",
  "Curiosity-driven exploration: setting aside regular time to experiment with tools, ideas, or approaches outside your immediate work is a habit that consistently produces new capabilities and unexpected breakthroughs.",
  "Hiring skills: writing clear job descriptions, designing fair interview processes, and evaluating candidates without bias are organisational skills that grow in importance as engineers move into leadership.",
  "Stack overflow literacy: knowing how to search effectively, evaluate the quality of an answer, and adapt code snippets safely is a practical meta-skill that every working software engineer uses daily.",
  "Latency thinking: understanding how and why systems slow down under load — and how to design against it from the start — is a performance engineering skill that grows in value at scale.",
  "Search engine optimisation basics: understanding how crawlers index content, what signals affect ranking, and how page structure influences discoverability helps engineers contribute to a product's organic growth.",
  "Reading financial statements: understanding a profit and loss account, a balance sheet, and a cash flow statement allows technical contributors to engage meaningfully in commercial strategy discussions.",
  "Impact mapping: working backwards from a desired business outcome to identify what changes in user behaviour would produce it — and what features might drive those changes — is a powerful product design technique.",
  "Revenue attribution: understanding which features, channels, or moments in the user journey actually drive revenue helps teams invest engineering time where it creates the most value.",
  "Cognitive load management: designing interfaces, APIs, and codebases that minimise the mental effort required to understand and use them is one of the highest-order engineering and design skills there is.",
  "Quarterly planning: being able to break down a long-term goal into a set of concrete, sequenced deliverables that fit a quarterly cycle is a planning skill increasingly expected from senior individual contributors.",
  "Energy efficiency: optimising software to consume less compute — and therefore emit fewer carbon emissions — is emerging as a genuine hiring criterion at climate-conscious tech organisations.",
  "Supply chain awareness: understanding where your software dependencies come from, who maintains them, and what the failure risks are is increasingly important after high-profile open source security incidents.",
  "Contract literacy: understanding the basics of a commercial agreement — liability, intellectual property, service-level commitments — helps technical leads engage as equals in commercial conversations.",
  "Pricing strategy: understanding how pricing decisions affect user acquisition, retention, and revenue allows engineers and product managers to contribute meaningfully to commercial decisions.",
  "Inclusive hiring: building a hiring process that reduces bias — through structured interviews, diverse panels, and blind screening — produces teams that make better decisions and build products for more people.",
  "Behaviour-driven development: writing software specifications in plain language that both technical and non-technical stakeholders can agree on before a line of code is written is a mature engineering practice.",
  "Brand awareness: understanding how external perceptions of your company affect recruitment, partnerships, and customer trust helps technical contributors make decisions with broader impact.",
  "Prompt literacy: knowing how to give AI tools clear context, constraints, examples, and checks helps tech workers move faster while still judging the output critically.",
  "Responsible AI awareness: understanding bias, hallucination, privacy risk, and human oversight helps teams use AI systems safely rather than treating them as magic answers.",
  "Experiment design: setting up small, measurable trials before committing major engineering time helps teams learn quickly and avoid building features nobody needs.",
  "Service design: mapping the full journey around a product, including support, onboarding, handoffs, and failure points, helps tech teams create experiences that work beyond the screen.",
  "Commercial prioritisation: weighing user value, delivery effort, risk, and revenue impact together helps candidates show they can make product decisions with business context.",
  "Change communication: explaining why a process, tool, or system is changing helps teams adopt improvements smoothly instead of treating every update as disruption."
];

const STARTUP_OWNER_SKILLS = [
  "Vision clarity: the ability to articulate what you are building, for whom, and why it matters — in a single sentence — is the most fundamental skill a startup founder needs to develop first.",
  "Resilience: most startups fail. The founders who survive are not those who avoid failure, but those who recover from it faster than they expected — and learn more than they wanted to.",
  "Customer obsession: the single most reliable predictor of startup success is how often the founder speaks directly to customers. The best founders treat every user conversation as a board meeting.",
  "Hiring judgment: your first ten hires will define your company's culture and capability more than any product decision. Learning to identify genuine talent quickly is one of the highest-leverage skills a founder can build.",
  "Financial discipline: understanding your burn rate, your runway, and your unit economics — and being honest with yourself when those numbers are bad — is what separates founders who survive from those who run out of time.",
  "Fundraising storytelling: investors fund narratives as much as they fund numbers. The ability to tell a compelling, honest, specific story about your market and your traction is a learnable skill that changes outcomes.",
  "Delegation: founders who cannot let go of execution tasks eventually become the bottleneck in their own companies. Learning what to delegate — and to whom — is a skill that unlocks growth.",
  "Prioritisation: every startup has infinite things it could work on and finite time and money. The discipline to say no to good ideas so you can focus on great ones is one of the rarest founder traits.",
  "Market sizing: understanding how large your addressable market really is — not how large you hope it is — allows you to make honest decisions about whether your business can ever be big enough.",
  "Competitive intelligence: knowing who else is solving your problem, how they are doing it, and what your genuine advantages are helps you position your product without being blindsided.",
  "Sales skills: every founder must be their company's first salesperson. The ability to listen, understand objections, and close a deal respectfully is not optional — it is existential in the early stages.",
  "Networking with intent: the right introduction at the right moment can unlock funding, a hire, or a partnership that would otherwise take years. Building and nurturing a purposeful network is a strategic activity, not a social one.",
  "Regulatory navigation: understanding the laws that govern your industry — data protection, financial regulation, employment law — before you inadvertently break them is far cheaper than the alternative.",
  "Negotiation: whether you are closing a customer contract, raising a funding round, or agreeing terms with a supplier, the ability to reach an agreement that is fair and durable is a skill that compounds throughout a founder's career.",
  "Technical literacy: founders who do not code but who cannot evaluate a technical proposal, understand a system architecture, or ask good questions of their engineering team are flying blind.",
  "Written communication: a founder's ability to write clearly — in investor updates, in job postings, in all-hands messages — is one of the primary channels through which company culture is transmitted.",
  "Decision-making under uncertainty: running a startup means making consequential decisions every day without enough information. The ability to move quickly, commit fully, and update beliefs when new evidence arrives is a discipline.",
  "Emotional regulation: founders carry enormous pressure. The ability to process stress privately, maintain composure publicly, and model calm in crisis keeps teams functional when things get difficult.",
  "User research: speaking to real users — before, during, and after building — is not a phase of product development. It is an ongoing practice that the best product founders treat as sacred.",
  "Iteration speed: the faster you can build, test, and learn — without sacrificing basic quality — the more bets you can place before your money runs out. Speed of learning is the startup's primary competitive advantage.",
  "Cofounder relationship management: more startups are destroyed by founder conflict than by bad markets. The ability to communicate openly, divide responsibility clearly, and resolve disagreements constructively is critical from day one.",
  "Talent retention: keeping your best people means understanding what motivates each of them individually — not just offering competitive salaries. Founders who make their team feel ownership and purpose keep talent far longer.",
  "Legal fluency: understanding how equity, intellectual property, employment contracts, and company structure work — even at a basic level — protects you from costly mistakes that lawyers warn about too late.",
  "Brand instinct: knowing what your company stands for visually, verbally, and in terms of tone — and being consistent about it from the first email you send — builds a kind of credibility that money cannot buy.",
  "Revenue model thinking: founders who cannot explain clearly how their company will make money — and when — rarely survive their first serious investor meeting. Understanding monetisation deeply is non-negotiable.",
  "Board management: as a company grows, founders must learn to work with a board productively — sharing the right information, managing expectations, and using board members as strategic assets rather than adversaries.",
  "Product intuition: the ability to feel, before the data confirms it, whether a feature or a design choice is right for your users is a skill that the best product founders develop through years of close user contact.",
  "Pitch feedback: the ability to receive criticism of your startup — from investors, customers, and advisors — without becoming defensive, and to separate signal from noise, accelerates the improvement of both product and founder.",
  "Runway management: most startup failures are predictable. Founders who monitor their runway, raise before they need to, and reduce burn proactively survive conditions that kill less-prepared teams.",
  "Managing advisors: getting value from an advisor means knowing what specific help you need, being direct in asking for it, and following up in ways that respect their time. Most founders waste advisor relationships through vagueness.",
  "Operating cadence: establishing a rhythm of weekly team meetings, monthly reviews, and quarterly planning sessions creates the structure that transforms a group of talented individuals into a functioning organisation.",
  "Crisis communication: when something goes wrong — a data breach, a product failure, a public complaint — the clarity, speed, and honesty of your response determines whether the crisis damages your company or strengthens it.",
  "Partnership strategy: identifying the right strategic partners — those who extend your reach, fill a product gap, or validate your category — and approaching them in the right way is a business development skill all founders need.",
  "Equity literacy: understanding dilution, option pools, pro-rata rights, and liquidation preferences before you sign a term sheet is the minimum founders need to protect the value they are building.",
  "Culture design: the values that shape how your team makes decisions under pressure are set — intentionally or accidentally — in the first few months. Founders who define culture deliberately build more coherent organisations.",
  "Gross margin awareness: not all revenue is created equal. Understanding how much it costs you to deliver each unit of your product or service determines whether your business model is fundamentally viable.",
  "Goal setting: establishing clear, measurable, time-bound targets for your team — and reviewing progress against them honestly — is the operating system on which high-performance startups run.",
  "Listening deeply: the founders who build the best products spend more time in conversations with customers, employees, and investors listening than talking. Deep listening surfaces the insights that shape winning companies.",
  "Press and media literacy: knowing which publications matter to your audience, how to write a press release, and how to maintain a relationship with a journalist is a PR capability all early-stage founders benefit from developing.",
  "Mental health awareness: building a startup is one of the most psychologically demanding things a person can do. Founders who invest in their own wellbeing — and model that investment for their teams — build more sustainable organisations.",
  "Technical roadmap thinking: even non-technical founders need to understand what their engineering team can realistically build, in what order, and at what cost — so that product and tech strategy stay aligned.",
  "Market entry strategy: deciding which customer segment to go after first — and which to leave for later — is one of the most consequential early decisions a startup makes and rarely gets enough deliberate attention.",
  "Exit awareness: understanding how acquisitions and public listings work — what acquirers look for, what makes a company IPO-ready — helps founders build the right kind of company from the start.",
  "Inclusive hiring: building a hiring process that reduces bias — through structured interviews, diverse panels, and blind screening — produces teams that make better decisions and build products for more people.",
  "Hypothesis testing: treating every major product and business decision as a testable hypothesis — and designing the minimum experiment to validate or reject it — is the scientific mindset that underpins the best startup cultures.",
  "Debt awareness: understanding the difference between good debt that funds growth and bad debt that delays reckoning — and how startup financing terms can create future obligations — is financial literacy that all founders must build.",
  "Investor relations: keeping your investors informed — with honest, regular, structured updates — builds trust, enables better advice, and makes future fundraising easier. Poor investor communication is a warning sign to every new investor.",
  "Competitive moat thinking: identifying what will be uniquely difficult for a well-funded competitor to replicate about your business — data, network effects, switching costs, brand — is what founders must build towards from day one.",
  "Content strategy: understanding how blog posts, case studies, social content, and webinars create sustained awareness and credibility for a startup — without a large marketing budget — is a channel all founders should understand.",
  "Community building: some of the most enduring tech startups grew by building genuine communities around shared values or problems before they built products. Founders who invest in community build defensible networks of advocates.",
  "Feedback loops: designing mechanisms by which your team continuously learns from users, data, and each other — and acts on that learning quickly — is what separates organisations that improve from those that stagnate.",
  "Unit economics mastery: knowing your customer acquisition cost, lifetime value, payback period, and churn rate — and how each one responds to different decisions — is the financial dashboard every founder must master.",
  "Operational resilience: building redundancy, clear ownership, and documented processes into your operations before you need them — not after a crisis reveals their absence — is what keeps companies running as they scale.",
  "Intellectual property strategy: knowing what to patent, what to trademark, what to protect as trade secrets, and what to open source is a strategic decision that shapes your competitive position for years.",
  "Time blocking: the most effective founders actively design their calendars — protecting time for deep work, customer conversations, and strategic thinking — rather than letting meetings fill every available slot.",
  "Advisor selection: choosing advisors who have built what you are trying to build — and who are willing to engage specifically, not just in principle — is far more valuable than accumulating impressive names on an advisory board.",
  "Growth mechanics: understanding how your product grows — through referrals, SEO, paid acquisition, content, or partnerships — and which channel is most capital-efficient for your specific business is a strategic capability all founders need.",
  "Team meeting design: knowing how to run a meeting so that it produces decisions rather than just discussion — with clear agendas, accountable owners, and written follow-ups — is a management skill that scales as your team does.",
  "Transparency calibration: founders must decide how much to share with their team — about fundraising challenges, competitive threats, and performance — and calibrating that transparency appropriately is a leadership judgment call that shapes trust.",
  "Systems thinking: understanding that decisions in product, culture, hiring, and finance interact with each other — and modelling the second-order effects of major choices before making them — is what distinguishes strategic founders.",
  "Customer success understanding: knowing how to ensure that customers achieve their desired outcomes with your product — not just that they signed up for it — is what drives retention, referrals, and sustainable revenue growth.",
  "Narrative coherence: being able to tell a consistent, compelling, and evolving story about your startup — to different audiences, in different formats, at different stages — is a capability that compounds its return over time.",
  "Problem prioritisation: startups surface more problems each week than they can possibly solve. The ability to distinguish between the fires you must fight today and the ones that will still be burning if you ignore them is a daily discipline.",
  "Talent community building: building relationships with potential future hires — through content, events, open source, and community — before you need them means you are not starting from zero when you need to grow fast.",
  "Risk management: identifying the key risks to your business — technical, regulatory, competitive, financial, reputational — and designing mitigation strategies for each is a discipline that makes founders far less surprised when things go wrong.",
  "Distribution thinking: having a great product matters. Having a strategy to get it in front of the right people at the right moment matters more. Distribution is the skill most technical founders underestimate most.",
  "Churn analysis: understanding exactly why customers leave — not assuming — and using those insights to improve your product and customer success motion is one of the highest-value analytical activities a founder can pursue.",
  "Conflict navigation: founders who can surface tension within their team before it becomes entrenched — by naming the issue, creating space to discuss it, and driving to resolution — build more cohesive cultures over time.",
  "Reference checking: taking the time to speak with people who have worked with a candidate before hiring them — and asking specific questions about how they perform under pressure — prevents the most costly hiring mistakes.",
  "Board composition: choosing board members for what they uniquely add — specific networks, operational experience, industry credibility — rather than for prestige is a governance skill that shapes board quality for years.",
  "Organisational design: thinking deliberately about how your company is structured — who reports to whom, which teams share goals, what decisions can be made locally — shapes how fast and coherently you can grow.",
  "Ecosystem awareness: understanding the investors, accelerators, advisors, journalists, and communities that shape your sector gives founders the map they need to navigate their industry effectively.",
  "Capital efficiency: doing more with less — finding creative ways to validate, build, and grow that do not require spending money — is a mindset that the best founders maintain even when money is plentiful.",
  "Stakeholder mapping: identifying everyone who has a stake in your company's success — investors, customers, employees, regulators, the public — and understanding their interests allows founders to make decisions with broader awareness.",
  "Employer brand building: the way your company is perceived as a place to work — through Glassdoor reviews, team content, and culture storytelling — directly affects the quality of talent you can attract at every stage.",
  "Technical debt awareness: founders who do not understand that poor early architectural decisions accumulate into compounding costs later are regularly surprised by how much of their engineering budget rebuilding old work consumes.",
  "Go-to-market execution: understanding the mechanics of launching a product — pricing, positioning, sales enablement, launch PR, community activation — and being able to lead that execution across a small team is a founder-level skill.",
  "Founder mode vs manager mode: knowing when to get deeply involved in execution details and when to step back and trust the system and the team is a calibration that the best founders continuously refine as the company grows.",
  "Scaling operations: the processes, tools, and norms that work for a five-person team break at twenty people. Founders who anticipate these inflection points — and design for them early — scale more smoothly.",
  "Ethical leadership: making product and business decisions that you would be comfortable defending publicly — to your customers, your team, and the press — is the only sustainable approach for founders who want to build lasting companies.",
  "Investor category knowledge: understanding the difference between angel investors, seed funds, Series A VCs, and strategic investors — what each looks for and what each brings — helps founders approach the right capital at the right stage.",
  "Sales cycle management: tracking where prospects are in your pipeline, what is needed to advance each one, and how to identify when a deal is stalling allows founders to convert more opportunities and predict revenue more accurately.",
  "Sustainability awareness: building a business that operates within environmental limits — minimising waste, reducing emissions, and designing products with their full lifecycle in mind — is increasingly both an ethical expectation and a commercial differentiator.",
  "First-principles thinking: stripping a problem back to its most basic elements — rather than inheriting the constraints and assumptions of existing solutions — is the reasoning mode from which the most disruptive startups are born.",
  "Data governance: deciding early how data will be collected, stored, accessed, and retired — and who is responsible for each — prevents the kind of compliance chaos that causes major startups to fail regulatory audits at the worst possible moments.",
  "Effective onboarding: designing a structured, welcoming, and informative first month for every new hire pays dividends in speed to productivity, retention, and cultural coherence that compound over time.",
  "Market feedback loops: creating formal mechanisms — customer advisory boards, regular surveys, user interviews, NPS tracking — through which the market continuously talks back to your product team is a structural advantage in competitive markets.",
  "Customer segmentation: understanding that not all customers are equally valuable — and designing your product, pricing, and support around the segment that drives the most sustainable value — is a strategic capability that shapes every major business decision.",
  "Trust building at scale: maintaining the trust of customers, employees, and investors as a company grows — when you can no longer speak to each of them personally — requires systems, rituals, and values that were designed deliberately from the start.",
  "Strategic patience: knowing when to push and when to wait — when to enter a market, when to hire ahead of revenue, when to launch a new product line — is a form of strategic judgment that differentiates great founders from merely competent ones.",
  "Founder health: the evidence is clear that founder burnout is one of the most common causes of startup failure. Treating your own energy, sleep, relationships, and mental health as operating assets — not luxuries — is a business decision.",
  "Commercial empathy: understanding what your customers are trying to achieve — commercially, not just functionally — allows you to position your product in terms of their goals rather than your features, which is how the best salespeople sell.",
  "Pitch deck design: knowing how to structure a story across a set of slides — problem, solution, market, traction, team, ask — in a way that moves an investor from curious to committed is a craft that every fundraising founder must develop.",
  "Organisational values: defining the three to five principles that guide how your team makes decisions — and testing every major hire, product choice, and cultural norm against them — creates alignment at scale without bureaucracy.",
  "Metrics selection: choosing the right key performance indicators — those that actually predict the health and trajectory of your business, rather than those that look impressive — is a strategic skill that shapes every conversation with investors and the board.",
  "Revenue diversification: building a startup that is excessively dependent on a single customer, a single channel, or a single market creates fragility that can destroy years of work. Founders who recognise this risk early and diversify intentionally build more resilient companies.",
  "Personal accountability: owning mistakes clearly, publicly, and without deflection — with your team, your investors, and your customers — is the founder behaviour that builds the deepest trust and the most resilient cultures.",
  "Mission coherence: ensuring that every major product, hiring, and commercial decision connects back to the founding mission — and retiring gracefully the things that do not — is what keeps companies focused as they grow and attract new voices.",
  "Remote team management: building a high-performing team that is distributed across time zones requires more deliberate communication, documentation, and trust-building than co-located work — and is a management skill increasingly required of all founders.",
  "Succession thinking: founders who build a company that is not entirely dependent on their own presence — by developing strong leaders, documenting decision frameworks, and establishing clear operating principles — create organisations that can survive and grow beyond them.",
  "Social proof creation: the ability to convert early customers into enthusiastic advocates — through exceptional experience, community, and recognition — is a marketing leverage that requires no budget and builds lasting credibility.",
  "Second-order thinking: understanding not just the immediate effect of a decision but the downstream consequences — what happens after what happens — is a form of strategic reasoning that the most effective founders apply to every major choice.",
  "Long-term orientation: making decisions that optimise for the long-term health of the company — even when they are painful in the short term — is a discipline that distinguishes founders who build enduring businesses from those who optimise for the next fundraising round.",
  "Regulatory strategy: some of the most valuable startups were built by understanding regulation better than incumbents and using that understanding to move faster. Founders who treat regulation as a design constraint rather than a barrier build more defensible businesses.",
  "Hiring for culture add: building a team that brings genuinely new perspectives, backgrounds, and ways of thinking — rather than simply reinforcing what already exists — is the hiring strategy that produces the most creative and resilient organisations.",
  "Executive communication: as a company grows, the founder must communicate more formally — in board updates, investor letters, company all-hands, and press releases. Developing this register early saves painful miscommunications at scale.",
  "Data-driven culture: instilling the habit of grounding every significant decision in evidence — user data, financial data, market data — rather than instinct alone is one of the most valuable cultural habits a founder can establish from the start.",
  "Intellectual honesty: the ability to look at your own company's data clearly, update your beliefs when the evidence demands it, and share difficult truths with your board and team is one of the rarest and most valuable founder qualities.",
  "Legacy thinking: the most impactful founders think not just about building a successful company but about what their company contributes to the world — the norms it sets, the talent it develops, the problems it solves — and use that perspective to make better decisions every day.",
  "Courage: starting a company requires accepting a level of uncertainty, vulnerability, and public scrutiny that most people actively avoid. The willingness to begin — and to keep going when the evidence for stopping seems overwhelming — is not a personality trait. It is a practice.",
  "Pricing power: understanding why some companies can charge more than competitors for similar products — and building the brand, network effects, or product quality that justifies a premium — is one of the highest-value strategic insights a founder can develop.",
  "Contract negotiation: knowing how to negotiate key commercial terms — payment terms, liability caps, IP ownership, exclusivity clauses — protects founders from agreements that look fine at signing and become dangerous at scale.",
  "Reference building: cultivating a group of customers, investors, and former colleagues who will speak enthusiastically and specifically about your work — and maintaining those relationships proactively — is a form of social capital that opens every door.",
  "Interviewing for values: asking candidates questions that reveal how they behave under pressure, how they handle disagreement, and what they genuinely care about is harder than technical interviewing — and more important for early-stage companies.",
  "Board meeting preparation: arriving at a board meeting with a well-structured pack, clear asks, and honest reporting of both wins and problems is a discipline that builds investor confidence and gets better decisions made in the room.",
  "Hypothesis invalidation: being willing to kill a strategy, a product line, or a market approach when the evidence says it is not working — rather than rationalising your way into continuing — is one of the most important and least practised founder skills.",
  "Product-market fit judgement: founders must learn to recognise the difference between polite interest and genuine demand, because customers who love an idea are not always customers who will pay for it.",
  "Early sales discipline: keeping track of every lead, follow-up, objection, and close date gives founders the evidence they need to improve their pitch and forecast revenue realistically.",
  "Culture setting: the founder's behaviour becomes the company's standard. How they handle pressure, feedback, mistakes, and disagreement teaches the team what is truly acceptable.",
  "Partnership building: identifying organisations that can expand distribution, credibility, or technical capability helps founders grow faster than they could by relying only on their own resources."
];

function showSkillsFact() {
  const el = document.getElementById('skills-fact');
  if (!el) return;

  const lastShown = JSON.parse(localStorage.getItem('tt-last-skills') ?? '[]');
  const available = TECH_SKILLS_FACTS.map((_, i) => i).filter(i => !lastShown.includes(i));

  const picks = [];
  const pool = [...available];
  while (picks.length < 3 && pool.length > 0) {
    const ri = Math.floor(Math.random() * pool.length);
    picks.push(pool.splice(ri, 1)[0]);
  }

  localStorage.setItem('tt-last-skills', JSON.stringify(picks));

  const list = el.querySelector('.skills-fact__list');
  if (list) list.innerHTML = picks.map(i => `<li>${TECH_SKILLS_FACTS[i]}</li>`).join('');
}

function showOwnerSkills() {
  const el = document.getElementById('owner-skills');
  if (!el) return;

  const lastShown = JSON.parse(localStorage.getItem('tt-last-owner-skills') ?? '[]');
  const available = STARTUP_OWNER_SKILLS.map((_, i) => i).filter(i => !lastShown.includes(i));

  const picks = [];
  const pool = [...available];
  while (picks.length < 3 && pool.length > 0) {
    const ri = Math.floor(Math.random() * pool.length);
    picks.push(pool.splice(ri, 1)[0]);
  }

  localStorage.setItem('tt-last-owner-skills', JSON.stringify(picks));

  const list = el.querySelector('.owner-skills__list');
  if (list) list.innerHTML = picks.map(i => `<li>${STARTUP_OWNER_SKILLS[i]}</li>`).join('');
}

function renderResults() {
  const problem = gameState.data.problem;
  if (!problem) {
    alert('Problem not found');
    return;
  }

  showSkillsFact();
  showOwnerSkills();

  const message = generateResultsMessage();
  document.getElementById('results-message').innerHTML = message;

  const reprimands = generateReprimands();
  if (reprimands.length > 0) {
    const reprimandHtml = '<div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 16px; margin-top: 16px; border-radius: 16px;"><strong style="color: #dc2626;">Areas of Concern</strong><ul style="margin-top: 8px; padding-left: 20px;">' + reprimands.map(r => `<li>${r}</li>`).join('') + '</ul></div>';
    document.getElementById('results-message').innerHTML += reprimandHtml;
  }

  const reflectionQuestions = generateReflectionQuestions();
  const questionsHtml = reflectionQuestions.map(q => `<li>${q}</li>`).join('');
  document.getElementById('reflection-questions').innerHTML = questionsHtml;

  renderAchievements();
  renderDecisionsSummary();
  animateFinalScores();
  revealResultBlocks();
}

function animateFinalScores() {
  const metrics = [
    { id: 'final-impact', value: gameState.data.scores.impact, currency: false },
    { id: 'final-inclusivity', value: gameState.data.scores.inclusivity, currency: false },
    { id: 'final-trust', value: gameState.data.scores.trust, currency: false },
    { id: 'final-budget', value: gameState.data.scores.budget, currency: true }
  ];

  metrics.forEach((metric) => {
    const el = document.getElementById(metric.id);
    if (!el) return;
    el.dataset.value = '0';
    window.TechTycoonUI?.animateValue(el, metric.value, {
      duration: metric.currency ? 0 : (window.TechTycoonUI?.reducedMotion() ? 0 : 700),
      formatter: metric.currency
        ? (value) => '£' + Math.round(value).toLocaleString()
        : (value) => `${String(Math.round(value))} /100`,
      pulseClass: metric.currency ? 'neutral' : 'positive'
    });
  });

  const baseEl = document.getElementById('final-budget-base');
  if (baseEl) {
    baseEl.textContent = `of £${(gameState.data.initialBudget || 0).toLocaleString()}`;
  }
}

function revealResultBlocks() {
  const blocks = document.querySelectorAll('.results-block');
  window.TechTycoonUI?.revealSequence(blocks, 120);
}

function renderAchievements() {
  const container = document.getElementById('results-badges');
  if (!container) return;

  const { impact, inclusivity, trust, budget } = gameState.data.scores;
  const badges = [];

  if (impact >= 70) badges.push('Impact Driver');
  if (inclusivity >= 70) badges.push('Inclusive Builder');
  if (trust >= 70) badges.push('Trust Keeper');
  if (budget > gameState.data.initialBudget * 0.35) badges.push('Runway Manager');
  if (gameState.data.gameStatus === 'complete') badges.push('Launch Ready');
  if (gameState.data.gameStatus === 'time-up') badges.push('Deadline Pressure');
  if (!badges.length) badges.push('Hard Lessons Learned');

  container.innerHTML = badges.map((badge) => `<div class="results-badge">${badge}</div>`).join('');
}

function getStageTitleById(stageId) {
  return gameState.data.problem?.stages?.find(stage => stage.id === stageId)?.title || 'a stage';
}

function generateResultsMessage() {
  const problem = gameState.data.problem;
  const { impact, inclusivity, trust, budget } = gameState.data.scores;
  const average = (impact + inclusivity + trust) / 3;
  const spent = (gameState.data.initialBudget || 0) - budget;
  const topExpense = gameState.data.choices.reduce((max, choice) => {
    const cost = Math.abs(choice.effects?.budget || 0);
    return cost > max.cost ? { cost, stageId: choice.stageId, text: choice.choiceText } : max;
  }, { cost: 0, stageId: null, text: '' });

  let message = '';

  if (gameState.data.gameStatus === 'time-up') {
    const totalDays = gameState.data.totalDays || (problem?.totalDays || 0);
    const currentDay = gameState.data.currentDay || 0;
    const overtime = Math.max(0, currentDay - totalDays);
    message = `<strong>Time Up: Project Closed</strong><br>
    Deadline was Day ${totalDays}${problem?.launchDeadline ? ` (${problem.launchDeadline})` : ''}. Your team reached Day ${currentDay}.${overtime > 0 ? ` You were ${overtime} day${overtime !== 1 ? 's' : ''} late.` : ''}<br>
    Final status: Impact ${impact}, Inclusivity ${inclusivity}, Trust ${trust}, Budget £${budget.toLocaleString()} of £${(gameState.data.initialBudget || 0).toLocaleString()}.<br>
    The launch window ended before you could continue. Your choices in ${getStageTitleById(topExpense.stageId)} used your runway quickly.`;
  } else if (gameState.data.gameStatus === 'incomplete') {
    message = `<strong>Project Incomplete:</strong> Your team ran out of budget before completing all planned work. You spent £${spent.toLocaleString()} and ended with £${budget.toLocaleString()} remaining. The decision in ${getStageTitleById(topExpense.stageId)} had the largest budget impact.`;
  } else if (average >= 75 && trust >= 70 && budget > 0) {
    message = `<strong>Excellent Leadership:</strong> Your team navigated this crisis with remarkable balance. You prioritised inclusive solutions (Inclusivity: ${inclusivity}), maintained strong stakeholder relationships (Trust: ${trust}), and delivered real impact (Impact: ${impact}). You finished with £${budget.toLocaleString()} remaining from £${(gameState.data.initialBudget || 0).toLocaleString()}.`;
  } else if (average >= 55 && trust >= 50 && budget > 0) {
    message = `<strong>Solid Crisis Management:</strong> You made reasonable trade-offs and kept your team together. Impact: ${impact}, Inclusivity: ${inclusivity}, Trust: ${trust}. After spending £${spent.toLocaleString()}, you still had £${budget.toLocaleString()} left. The biggest spend came during ${getStageTitleById(topExpense.stageId)}.`;
  } else {
    message = `<strong>Difficult Choices:</strong> Your scores (Impact: ${impact}, Inclusivity: ${inclusivity}, Trust: ${trust}) show the trade-offs you made. You finished with £${budget.toLocaleString()} remaining from £${(gameState.data.initialBudget || 0).toLocaleString()}. Reflect on the choice in ${getStageTitleById(topExpense.stageId)} and how it shifted your budget most dramatically.`;
  }

  return message;
}

function generateReprimands() {
  const { impact, inclusivity, trust } = gameState.data.scores;
  const reprimands = [];

  if (impact < 40) {
    reprimands.push('<strong>Low Impact:</strong> You failed to deliver meaningful solutions to the core problem. Whatever you attempted, it was not enough to create real change.');
  }

  if (inclusivity < 40) {
    reprimands.push('<strong>Low Inclusivity:</strong> Your approach excluded significant portions of your user base or stakeholder community.');
  }

  if (trust < 40) {
    reprimands.push('<strong>Low Trust:</strong> Your stakeholders do not believe in your leadership or your solutions.');
  }

  return reprimands;
}

function generateReflectionQuestions() {
  const { impact, inclusivity, trust, budget } = gameState.data.scores;
  const choices = gameState.data.choices || [];
  const questions = [];

  const budgetChanges = choices.map(choice => ({
    stageId: choice.stageId,
    text: choice.choiceText,
    change: choice.effects?.budget || 0
  }));
  const largestBudgetChange = budgetChanges.reduce((prev, current) => Math.abs(current.change) > Math.abs(prev.change) ? current : prev, { change: 0 });

  const metricChanges = choices.flatMap(choice => Object.entries(choice.effects || {}).filter(([metric]) => metric !== 'budget').map(([metric, value]) => ({
    stageId: choice.stageId,
    text: choice.choiceText,
    metric,
    change: value
  })));
  const largestMetricMove = metricChanges.reduce((prev, current) => Math.abs(current.change) > Math.abs(prev.change) ? current : prev, { change: 0 });

  if (choices.length) {
    questions.push(`In ${getStageTitleById(choices[0].stageId)}, you chose “${choices[0].choiceText}”. How did that early decision shape the rest of your run?`);
    if (largestBudgetChange.change !== 0) {
      questions.push(`Which decision had the biggest budget impact (${largestBudgetChange.change < 0 ? 'spent' : 'saved'} £${Math.abs(largestBudgetChange.change).toLocaleString()}) in ${getStageTitleById(largestBudgetChange.stageId)}? Could another choice have preserved more runway?`);
    }
    if (largestMetricMove.change !== 0) {
      const direction = largestMetricMove.change > 0 ? 'increased' : 'decreased';
      const metricName = largestMetricMove.metric.charAt(0).toUpperCase() + largestMetricMove.metric.slice(1);
      questions.push(`During ${getStageTitleById(largestMetricMove.stageId)}, your ${metricName} ${direction} by ${Math.abs(largestMetricMove.change)}. What drove that change, and would you make the same choice again?`);
    }
  }

  if (inclusivity < 50) {
    questions.push('Which choices made inclusivity harder to achieve? How might a different path have supported a broader group of users or students?');
  } else {
    questions.push('Which stage decisions most clearly boosted inclusivity? How did those choices affect your other goals?');
  }

  if (trust < 50) {
    questions.push('Which decision caused the biggest trust drop? How could you rebuild confidence with stakeholders after that stage?');
  } else {
    questions.push('Which decision helped preserve trust, and why was that especially important at that point?');
  }

  if (budget <= 0) {
    questions.push('What would you change if you had to keep the project alive without any budget left?');
  } else {
    questions.push(`You ended with £${budget.toLocaleString()} remaining. Which stage had the most influence on your remaining runway?`);
  }

  questions.push('Looking back across all stages, which one choice would you change to improve your final result?');

  return questions;
}

function renderDecisionsSummary() {
  const container = document.getElementById('decisions-summary');

  if (gameState.data.choices.length === 0) {
    container.innerHTML = '<p>No decisions recorded.</p>';
    return;
  }

  function fmtEffects(effects) {
    const budgetStr = window.TechTycoonUI?.formatCurrency(effects.budget)
      || ((effects.budget >= 0 ? '+' : '') + '£' + Math.abs(effects.budget).toLocaleString());
    return [
      `Impact: ${effects.impact > 0 ? '+' : ''}${effects.impact}`,
      `Inclusivity: ${effects.inclusivity > 0 ? '+' : ''}${effects.inclusivity}`,
      `Trust: ${effects.trust > 0 ? '+' : ''}${effects.trust}`,
      `Budget: ${budgetStr}`
    ].join(' &middot; ');
  }

  const html = '<ul style="list-style:none;padding:0;margin:0;">' + gameState.data.choices.map((choice, idx) => {
    const rawTitle = getStageTitleById(choice.stageId);
    const shortTitle = rawTitle.replace(/^Stage\s*\d+\s*[:\-]\s*/i, '');
    const stage = gameState.data.problem?.stages?.find(s => s.id === choice.stageId);
    const chosenIdx = choice.choiceIndex ?? 0;
    const otherIdx = stage?.choices?.length === 2 ? 1 - chosenIdx : null;
    const otherChoice = otherIdx !== null ? stage.choices[otherIdx] : null;

    return `
    <li class="results-block decision-item">
      <div class="decision-stage-label">Stage ${idx + 1} &mdash; ${shortTitle}</div>
      <div class="decision-options">
        <div class="decision-option decision-option--chosen">
          <div class="decision-option__text">${choice.choiceText}</div>
          <div class="decision-option__stats">${fmtEffects(choice.effects)}</div>
        </div>
        ${otherChoice ? `
        <div class="decision-option decision-option--rejected">
          <div class="decision-option__text">${otherChoice.text}</div>
          <div class="decision-option__stats">${fmtEffects(otherChoice.effects)}</div>
        </div>` : ''}
      </div>
    </li>`;
  }).join('') + '</ul>';

  container.innerHTML = html;
}

async function saveResults() {
  const data = {
    teamName: gameState.data.teamName,
    problemId: gameState.data.problemId,
    role: gameState.data.role,
    teamMembers: gameState.data.teamMembers,
    finalScores: gameState.data.scores,
    choices: gameState.data.choices,
    duration: gameState.getDuration(),
    timestamp: new Date().toISOString()
  };

  try {
    const response = await fetch('/api/game/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error('Save endpoint unavailable');
    const result = await response.json();
    if (result.success) {
      window.TechTycoonUI?.showNotification({ title: 'Results saved', message: 'Your run was saved successfully.', type: 'success' });
    } else {
      throw new Error('Save endpoint returned an error');
    }
  } catch (e) {
    console.warn('Save endpoint unavailable, downloading JSON instead:', e);
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `techtycoon-results-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
    window.TechTycoonUI?.showNotification({
      title: 'Saved locally',
      message: 'Downloaded a JSON copy because no server save endpoint was available.',
      type: 'info'
    });
  }
}

async function downloadResults() {
  try {
    const data = {
      teamName: gameState.data.teamName,
      problemId: gameState.data.problemId,
      finalScores: gameState.data.scores,
      choices: gameState.data.choices,
      duration: gameState.getDuration(),
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch(`/api/game/export/${data.timestamp}`, {
        method: 'GET'
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `techtycoon-results-${data.timestamp}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        return;
      }
    } catch (e) {
      console.log('Server export not available, using local CSV generation');
    }

    let csv = 'TechTycoon Game Results\n';
    csv += `Team Name,${data.teamName}\n`;
    csv += `Problem,${data.problemId}\n`;
    csv += `Duration,${data.duration} minutes\n`;
    csv += `Date,${new Date(data.timestamp).toLocaleString()}\n\n`;
    csv += 'Final Scores\n';
    csv += `Impact,${data.finalScores.impact}\n`;
    csv += `Inclusivity,${data.finalScores.inclusivity}\n`;
    csv += `Trust,${data.finalScores.trust}\n`;
    csv += `Budget Remaining,£${data.finalScores.budget}\n\n`;
    csv += 'Decisions\n';
    csv += 'Day,Decision,Impact,Inclusivity,Trust,Budget Change\n';
    data.choices.forEach((choice, idx) => {
      csv += `${idx + 1},"${choice.choiceText}",${choice.effects.impact},${choice.effects.inclusivity},${choice.effects.trust},£${choice.effects.budget}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `techtycoon-${gameState.data.teamName.replace(/\s+/g, '-')}-${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (e) {
    console.error('Error downloading results:', e);
    alert('Error downloading results');
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  if (!gameState.data.problemId) {
    window.TechTycoonUI?.navigate('select-problem.html');
    return;
  }

  if (gameState.data.gameStatus === 'in-progress') {
    gameState.endGame('complete');
  }

  renderResults();
});

