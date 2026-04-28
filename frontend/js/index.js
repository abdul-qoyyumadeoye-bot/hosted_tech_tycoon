// ============================================================================
// INDEX PAGE (Welcome)
// ============================================================================

const UK_STARTUP_FACTS = [
  "The UK has more tech unicorns — companies valued at over $1 billion — than any other country in Europe.",
  "London is ranked the third-largest tech hub in the world, behind only Silicon Valley and New York City.",
  "DeepMind, now part of Google, was founded in London in 2010 and pioneered AI research that reshaped the industry.",
  "Arm Holdings, founded in Cambridge in 1990, designs the chip architecture used in over 95% of the world's smartphones.",
  "Revolut reached a valuation of $33 billion, making it one of Europe's most valuable private companies ever.",
  "The UK tech sector generates more than £150 billion in economic value every single year.",
  "Cambridge has been nicknamed 'Silicon Fen' due to its cluster of over 5,000 high-tech companies.",
  "Monzo grew from zero to 5 million UK customers in just four years — faster than any traditional bank had ever managed.",
  "The average UK tech startup raises its first funding round within 18 months of being founded.",
  "UK tech companies employ over 3 million people, with demand for digital skills growing faster than supply.",
  "Wise (formerly TransferWise), founded in London in 2011, now moves over $10 billion globally every month.",
  "The UK government's Seed Enterprise Investment Scheme lets early investors claim back up to 50% tax relief on startup funding.",
  "Edinburgh has one of the fastest-growing tech scenes in Europe, with a strong focus on fintech and data science.",
  "Darktrace, a Cambridge cybersecurity startup founded in 2013, uses AI modelled on the human immune system to detect cyber threats.",
  "Over 60% of UK startups say finding the right talent is their biggest day-to-day challenge.",
  "Bristol's tech cluster employs over 32,000 people and is one of the fastest-growing outside London.",
  "Skyscanner was founded in Edinburgh and sold for £1.4 billion — at the time the largest UK tech exit in history.",
  "In the UK, women-founded startups receive on average 23% less investment than male-founded startups at the same stage.",
  "Deliveroo, founded in London in 2013, now operates in over 800 cities worldwide.",
  "Over 700,000 new businesses are registered in the UK each year, many of them in the technology sector.",
  "UK startups can claim back up to 33p for every £1 spent on qualifying research and development through the R&D tax credit scheme.",
  "The UK fintech sector processes transactions worth more than £6 trillion every year.",
  "Ocado Group, founded in 2000, became the world's largest dedicated online grocery retailer and now licences its warehouse technology globally.",
  "Funding for UK tech startups broke records in 2021, with over £29 billion invested — more than the next five European countries combined.",
  "The average age of a UK tech startup founder is 37 — far older than the popular image of a student coding in a dorm room.",
  "Around 90% of UK startups do not survive beyond their fifth year — resilience and adaptation are the defining skills of those that do.",
  "Manchester is home to over 60,000 digital and tech workers, making it the largest tech hub outside London.",
  "The NHS Digital accelerator has helped over 100 health-tech startups get their products tested inside real hospitals.",
  "Babylon Health, a UK digital health startup, delivered AI-powered medical consultations to patients in over 50 countries.",
  "More than half of all UK venture capital investment flows into companies headquartered in London.",
  "King, the maker of Candy Crush, was founded in London in 2003 and sold to Activision Blizzard for $5.9 billion in 2016.",
  "Shazam, the music recognition app born in London, was acquired by Apple in 2018 for an estimated $400 million.",
  "The UK is home to over 2,000 fintech companies — more than any other country in Europe.",
  "Checkout.com, a London payments startup, reached a valuation of $40 billion in 2022, making it the UK's most valuable private tech company at the time.",
  "Raspberry Pi, designed in Cambridge and first released in 2012, has sold over 50 million units and is used in schools across more than 70 countries.",
  "Depop, the social shopping app founded in London in 2011, was acquired by Etsy for $1.6 billion in 2021.",
  "SwiftKey, the AI keyboard app developed in London, was acquired by Microsoft in 2016 for a reported $250 million.",
  "Multiverse, founded in London in 2016, offers degree apprenticeships at companies like Google and Morgan Stanley and was valued at over $1.7 billion in 2022.",
  "Wayve, a Cambridge autonomous vehicle startup, raised over $1 billion in 2024 — one of the largest funding rounds in UK tech history.",
  "Cazoo, the online used-car platform founded in 2018, reached unicorn status in just 18 months — the fastest in UK history at the time.",
  "Graphcore, a Bristol AI chip startup, was valued at nearly $3 billion in 2021 and builds processors purpose-built for machine learning workloads.",
  "OakNorth Bank used AI to approve business loans 50 times faster than traditional banks, with no loans going bad in its first four years of operation.",
  "Starling Bank, founded in London by Anne Boden in 2014, became the first UK digital bank to turn an annual profit.",
  "Funding Circle, a UK peer-to-peer lending startup, has lent over £15 billion to small businesses across the UK, US, and Germany.",
  "Cleo, a London AI-powered money app, serves over 7 million users and helps people manage their finances through a conversational chat interface.",
  "Hopin, a virtual events platform founded in London in 2019, raised $125 million within a year of launch and became one of the fastest UK unicorns ever.",
  "The Cambridge Science Park, established in 1970, was the first science park in the UK and remains one of the largest in Europe.",
  "The UK's Open Banking standard, launched in 2018, was the first of its kind in the world — allowing startups to access bank data with customer consent.",
  "Improbable, a UK gaming infrastructure startup, raised $502 million from SoftBank — one of the largest single funding rounds for a UK tech company at the time.",
  "Featurespace, a Cambridge machine learning company, detects financial fraud in real time and is used by HSBC, Worldpay, and other major institutions.",
  "CityMapper, the London transit app, is used by commuters in 40 cities worldwide and processes tens of millions of route decisions every day.",
  "Benevolent AI uses artificial intelligence to accelerate drug discovery and has secured research partnerships with AstraZeneca.",
  "Gousto, the UK recipe box company, grew over 100% year-on-year during the COVID-19 pandemic and reached unicorn status by 2021.",
  "Peak, a Manchester AI startup, counts Porsche and Nike among its clients and was valued at over $600 million in 2021.",
  "Unmind, a London workplace mental health startup, is used by the BBC, Nike, and British Airways to support employee wellbeing.",
  "Tractable uses computer vision to assess vehicle and property damage for insurers in seconds — a process that previously took human assessors days.",
  "Butternut Box, a UK pet food startup, grew to £50 million in revenue within four years of launching by delivering personalised fresh meals for dogs.",
  "Electric vehicle charging startup Pod Point, founded in London in 2009, was acquired by EDF for over £100 million as UK EV adoption accelerated.",
  "The UK spends over £1.7 billion a year on cybersecurity and the sector supports over 50,000 specialist jobs.",
  "Auto Trader began as a print magazine in 1977 before transforming into a tech platform worth over £5 billion on the London Stock Exchange.",
  "Autonomy, founded in Cambridge in 1996, became one of the UK's most valuable software companies before being acquired by HP for $11 billion.",
  "Thought Machine, a London cloud-native banking startup, counts Lloyds Banking Group among its investors and enterprise clients.",
  "Onfido, a London startup, uses AI to verify identities and has checked documents for people across more than 195 countries.",
  "The UK's game development sector employs over 25,000 people and generates more than £4 billion in annual revenues.",
  "Genomics England sequenced 100,000 human genomes to help the NHS personalise cancer and rare disease treatment — a world first.",
  "More UK startups are founded outside London today than at any point in the past decade, as remote work reshapes where talent chooses to live.",
  "Zoopla, the UK property portal, grew from a startup in 2007 to a company worth over £2 billion in less than a decade.",
  "Tandem Bank focuses on green finance and offers customers a carbon footprint tracker alongside everyday current account banking.",
  "The UK launched the world's first Digital Catapult centre in 2012 to help startups access emerging technologies and specialist expertise.",
  "The UK is one of only three countries — alongside the US and China — to have produced technology companies valued at over $100 billion.",
  "Behavox analyses billions of employee communications daily using AI to detect financial misconduct at major global banks.",
  "The UK's creative industries — including gaming, design, and media tech — contribute over £110 billion to the economy annually.",
  "Bulb Energy grew to 1.7 million customers in five years, becoming the fastest-growing energy startup in UK history before the 2021 energy crisis.",
  "Magic Pony Technology, a UK machine learning startup focused on visual computing, was acquired by Twitter for around $150 million just three years after founding.",
  "The UK Advanced Research and Invention Agency (ARIA), modelled on DARPA, was launched to fund high-risk, high-reward technology research with no strings attached.",
  "Babylon Health raised over $550 million before going public, making it one of the most heavily funded UK health-tech startups ever.",
  "UK tech startup investment grew every single year between 2013 and 2023, surviving two recessions and a global pandemic.",
  "Notion Capital, one of the UK's most active SaaS-focused venture funds, has backed companies including ComplyAdvantage and Paddle.",
  "London has more co-working and incubator spaces per square mile than any other city in Europe, making it easy for early-stage startups to find community.",
  "The UK's Enterprise Investment Scheme has backed over 32,000 companies since its launch in 1994, channelling billions into early-stage innovation.",
  "AI startups now account for over a third of all venture capital raised by UK tech companies each year.",
  "The number of tech jobs advertised in the UK doubled between 2016 and 2022, even accounting for the disruption caused by Brexit and the pandemic.",
  "FreeAgent, an Edinburgh-based accounting software startup, was acquired by the Royal Bank of Scotland Group for £53 million in 2018.",
  "Oxford has quietly become a leading hub for deep-tech and life-sciences startups, with companies like Vaccitech and QuantrolOx emerging from the university.",
  "Cleo AI was valued at over $500 million just five years after launching, built entirely around a chat-based interface that talks to users like a friend.",
  "Over 40% of all European AI research papers published in top journals have at least one UK-based co-author.",
  "The UK produces more engineering PhD graduates per year than Germany, France, or Italy — a key reason why deep-tech startups cluster here.",
  "Brent Hoberman and Martha Lane Fox co-founded Lastminute.com in 1998 and floated it on the London Stock Exchange for £800 million just two years later.",
  "BenevolentAI listed on the Amsterdam Euronext exchange in 2022, becoming one of the first AI drug discovery companies to go public anywhere in the world.",
  "Oxford Nanopore Technologies, which makes portable DNA sequencers the size of a USB stick, floated on the London Stock Exchange in 2021 at a valuation of £3.4 billion.",
  "Curve, the London-based fintech that lets users consolidate multiple bank cards into one, raised over $175 million and expanded to over 30 countries.",
  "The UK's Tech Nation visa allows exceptional global tech talent to fast-track visa applications — over 2,000 visas are granted every year.",
  "Elvie, a London femtech company, became a unicorn in 2021 — one of the first femtech companies anywhere in the world to reach that milestone in that sector.",
  "YuLife, a London insurtech startup, gamifies employee wellness and counts Lloyds Banking Group and Co-op among its corporate clients.",
  "Beamery, a London HR tech startup, uses AI to help companies like Amazon and Microsoft identify and retain diverse talent pipelines.",
  "The UK's National Cyber Security Centre supports over 1,400 startups in the cyber sector through dedicated accelerator programmes.",
  "Chip, a London savings and investment startup, uses AI to move money automatically into savings accounts without users having to think about it.",
  "Balderton Capital, one of Europe's leading early-stage VC funds, is based in London and has backed companies including Revolut and Darktrace.",
  "Appear Here, a London startup, created a marketplace for short-term retail space and helped over 12,000 brands find pop-up locations across three continents.",
  "Blue Prism, founded in Warrington in 2001, pioneered robotic process automation software and became one of the UK's most celebrated enterprise tech exits.",
  "Moneybox, a London savings app, grew to over 1 million users by letting people round up everyday purchases and invest the difference automatically.",
  "Tessian uses machine learning to stop misdirected emails before they leave the company and has processed over 70 million emails for its enterprise customers.",
  "Flock, a London insurtech startup, was one of the first in the world to price insurance policies in real time based on live risk data from connected vehicles.",
  "Arqit, a London quantum encryption startup, was listed on the Nasdaq through a SPAC merger in 2021 and counts BT and the UK government among its customers.",
  "Hadean, a London distributed computing startup, built infrastructure that powered an in-game event for 32,000 simultaneous players in one session.",
  "Paddle, a London SaaS payments startup, raised $200 million in 2022 at a $1.4 billion valuation, handling all billing and tax compliance for software companies globally.",
  "Secret Escapes, a London travel startup, curated exclusive hotel deals for over 50 million members across 20 countries.",
  "Simba Sleep, a London startup, used data science to design a mattress and grew from zero to over £100 million in annual revenue within four years of launch.",
  "Bought By Many disrupted the UK pet insurance market with highly specific policies and was valued at over £1.5 billion after a funding round in 2021.",
  "Zopa, the world's first peer-to-peer lending platform, was founded in London in 2005 and later converted into a fully licensed bank.",
  "The UK has produced over 150 unicorn companies since 2000 — more than France, Germany, and Sweden combined.",
  "Innovate UK distributes over £1 billion annually in grants to help startups develop and commercialise breakthrough technologies.",
  "The UK's Enterprise Investment Scheme has backed over 32,000 companies since its launch in 1994, channelling billions into early-stage innovation.",
  "Centrica Innovations backs energy tech startups through a dedicated venture arm, having invested in over 50 companies focused on decarbonising the grid.",
  "The UK's Open Banking standard, launched in 2018, was the first of its kind in the world — allowing startups to access bank data with customer consent.",
  "London has more co-working and incubator spaces per square mile than any other city in Europe, making it easy for early-stage startups to find community.",
  "Thread, a London fashion startup, used AI to offer personal styling recommendations and raised over $30 million before being acquired by Marks & Spencer.",
  "The number of tech jobs advertised in the UK doubled between 2016 and 2022, even accounting for the disruption caused by Brexit and the pandemic.",
  "Many UK accelerators now pair startups with mentors in finance, law, design, and technology because early founders need support across the whole business, not just the product.",
  "The most successful startup ecosystems connect universities, investors, customers, and experienced operators so new companies can test ideas faster and learn from people who have already scaled."
];

function showStartupFact() {
  const el = document.getElementById('startup-fact');
  if (!el) return;

  const lastShown = JSON.parse(localStorage.getItem('tt-last-facts') ?? '[]');
  const available = UK_STARTUP_FACTS.map((_, i) => i).filter(i => !lastShown.includes(i));

  const picks = [];
  const pool = [...available];
  while (picks.length < 3 && pool.length > 0) {
    const ri = Math.floor(Math.random() * pool.length);
    picks.push(pool.splice(ri, 1)[0]);
  }

  localStorage.setItem('tt-last-facts', JSON.stringify(picks));

  const list = el.querySelector('.startup-fact__list');
  if (!list) return;
  list.innerHTML = picks.map(i => `<li>${UK_STARTUP_FACTS[i]}</li>`).join('');
}

function validateTeamName(rawValue) {
  if (!rawValue || rawValue.trim().length === 0) {
    return 'Enter a team name.';
  }

  const teamName = rawValue.trim();

  if (teamName.length > 10) {
    return 'Team name must be 10 characters or fewer.';
  }

  if (!/[A-Za-z0-9]/.test(teamName)) {
    return 'Team name must include at least one letter or number.';
  }

  return '';
}

function showTeamNameError(message) {
  const teamNameInput = document.getElementById('team-name');
  const errorElement = document.getElementById('team-name-error');

  if (!teamNameInput || !errorElement) return;

  errorElement.textContent = message;
  teamNameInput.classList.toggle('input-invalid', Boolean(message));
  teamNameInput.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function startGame() {
  const teamNameInput = document.getElementById('team-name');
  if (!teamNameInput) return;

  const validationMessage = validateTeamName(teamNameInput.value);
  if (validationMessage) {
    showTeamNameError(validationMessage);
    teamNameInput.focus();
    return;
  }

  const teamName = teamNameInput.value.trim();
  
  gameState.reset();
  gameState.setTeamName(teamName);
  gameState.startGame();
  
  window.TechTycoonUI?.navigate('select-problem.html') || (window.location.href = 'select-problem.html');
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  showStartupFact();
  window.scrollTo(0, 0);

  const teamNameInput = document.getElementById('team-name');
  if (teamNameInput) {
    teamNameInput.focus({ preventScroll: true });
    teamNameInput.addEventListener('input', () => {
      showTeamNameError(validateTeamName(teamNameInput.value));
    });
    teamNameInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        startGame();
      }
    });
  }
});
