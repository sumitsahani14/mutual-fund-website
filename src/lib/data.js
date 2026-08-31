import {
  LineChart, PiggyBank, Briefcase, Target, Sunset, Landmark,
  Rocket, ShieldCheck, HeartPulse, GraduationCap, Gem, Wallet, Compass,
} from 'lucide-react';

export const IMAGES = {
  hero: 'https://images.hostinger.com/a74b535b-8542-4d09-b7eb-6991c291ebca.png',
  founder: 'https://images.hostinger.com/45400256-2e88-4b1a-b989-a1c3ea51854f.png',
  market: 'https://images.hostinger.com/6398e9e4-9302-4854-a9f9-4a507153701d.png',
  couple: 'https://images.hostinger.com/db085cf3-fa02-40c4-9a67-05080e578420.png',
  retire: 'https://images.hostinger.com/a887e786-8599-4c6c-bf7f-7e289d7cabc4.png',
  pattern: 'https://images.hostinger.com/8b576636-3a12-48f2-ba2f-2df22eafae75.png',
};

export const CONTACT = {
  phone: '+91 98200 12345',
  phoneRaw: '919820012345',
  email: 'hello@babyinvestments.in',
  address: '702, Trade Horizon Tower, Bandra Kurla Complex, Mumbai 400051',
  hours: 'Mon – Sat: 9:30 AM – 7:00 PM',
};

export const SERVICES = [
  { slug: 'mutual-funds', icon: LineChart, title: 'Mutual Funds', tag: 'Investing',
    short: 'Curated equity, debt and hybrid funds matched to your goals and risk profile.',
    what: 'Mutual funds pool money from many investors and are managed by professional fund managers who invest across equity, debt and hybrid instruments. We help you select schemes that fit your goals rather than chasing last year\'s top performers.',
    who: 'Anyone who wants professionally managed, diversified exposure to markets without tracking individual stocks daily.' },
  { slug: 'sip-planning', icon: PiggyBank, title: 'SIP Planning', tag: 'Investing',
    short: 'Invest a fixed amount every month and let disciplined compounding do the heavy lifting.',
    what: 'A Systematic Investment Plan lets you invest a fixed sum at regular intervals. It removes the need to time the market and turns everyday saving into long-term wealth through rupee-cost averaging and compounding.',
    who: 'Salaried professionals and first-time investors who want to build wealth steadily from monthly income.' },
  { slug: 'portfolio-management', icon: Briefcase, title: 'Portfolio Management Services', tag: 'Wealth',
    short: 'Personalised, actively managed portfolios for serious wealth creators.',
    what: 'PMS offers a tailored, actively managed portfolio of securities designed around your objectives, with detailed reporting and a dedicated relationship manager.',
    who: 'High-net-worth individuals seeking a bespoke, higher-touch investment approach.' },
  { slug: 'financial-planning', icon: Compass, title: 'Financial Planning', tag: 'Advisory',
    short: 'A complete roadmap covering goals, cash-flow, protection and investments.',
    what: 'We map your income, expenses, goals and risks into a single written plan, so every rupee has a job and every goal has a funding path.',
    who: 'Individuals and families who want clarity and a structured path instead of scattered investments.' },
  { slug: 'retirement-planning', icon: Sunset, title: 'Retirement Planning', tag: 'Advisory',
    short: 'Build a corpus that keeps paying you long after your salary stops.',
    what: 'We estimate your future expenses adjusted for inflation and design an investment path so your retirement is comfortable and independent.',
    who: 'Anyone who wants to maintain their lifestyle without depending on others after they stop working.' },
  { slug: 'tax-saving', icon: Landmark, title: 'Tax Saving Investments', tag: 'Advisory',
    short: 'Save tax under Section 80C while building long-term wealth with ELSS.',
    what: 'We help you use tax-efficient instruments such as ELSS funds so you reduce your tax outgo and grow money at the same time.',
    who: 'Taxpayers who want to make their 80C investments actually work for their future.' },
  { slug: 'pre-ipo', icon: Rocket, title: 'Pre IPO Investments', tag: 'Wealth',
    short: 'Access curated opportunities in promising companies before they list.',
    what: 'Pre-IPO investing lets qualified investors buy into companies before a public listing. These are higher-risk, higher-potential opportunities we vet carefully.',
    who: 'Experienced, risk-aware investors looking to diversify beyond listed markets.' },
  { slug: 'term-insurance', icon: ShieldCheck, title: 'Term Insurance', tag: 'Protection',
    short: 'High cover at low cost to protect your family\'s future.',
    what: 'Term insurance provides a large life cover for a modest premium, ensuring your family stays financially secure if something happens to you.',
    who: 'Every earning member with dependents or loans.' },
  { slug: 'health-insurance', icon: HeartPulse, title: 'Health Insurance', tag: 'Protection',
    short: 'Protect your savings from rising medical costs.',
    what: 'The right health cover shields your investments from being drained by hospital bills and gives your family peace of mind.',
    who: 'Every individual and family, regardless of age or income.' },
  { slug: 'children-education', icon: GraduationCap, title: 'Children Education Planning', tag: 'Advisory',
    short: 'Fund your child\'s dreams without last-minute loans.',
    what: 'We calculate the future cost of your child\'s education and build a dedicated investment plan to reach it comfortably.',
    who: 'Parents who want to secure their child\'s higher education and milestones.' },
  { slug: 'wealth-management', icon: Gem, title: 'Wealth Management', tag: 'Wealth',
    short: 'A single, coordinated approach to growing and protecting your wealth.',
    what: 'Comprehensive management across investments, insurance, tax and estate — coordinated by one trusted advisory team.',
    who: 'Affluent families and business owners with complex, multi-goal finances.' },
  { slug: 'emergency-fund', icon: Wallet, title: 'Emergency Fund Planning', tag: 'Advisory',
    short: 'Build a safety net before you invest for growth.',
    what: 'We help you set aside 6–12 months of expenses in liquid instruments so market ups and downs never force you to sell at the wrong time.',
    who: 'Everyone — this is the foundation of a healthy financial life.' },
  { slug: 'goal-based-investing', icon: Target, title: 'Goal Based Investing', tag: 'Advisory',
    short: 'Attach every investment to a real-life goal with a clear deadline.',
    what: 'Instead of investing randomly, we tie each portfolio to a specific goal — a home, a car, education, retirement — with the right asset mix and timeline.',
    who: 'Anyone who wants their money to be purposeful and trackable.' },
];

export const WHY_CHOOSE = [
  { icon: Landmark, title: '15+ Years of Experience', text: 'Guiding investors across market cycles with steady, research-backed advice.' },
  { icon: Compass, title: 'Personalised Planning', text: 'No copy-paste portfolios — every plan is built around your life and goals.' },
  { icon: ShieldCheck, title: 'Transparent Advice', text: 'Clear reasoning, honest risk conversations and no hidden agendas.' },
  { icon: Target, title: 'Goal-Based Investing', text: 'Every rupee is mapped to a real milestone with a defined timeline.' },
  { icon: LineChart, title: 'Long-Term Wealth Creation', text: 'We focus on compounding and discipline, not short-term noise.' },
  { icon: Gem, title: 'Certified Professionals', text: 'AMFI-registered, qualified advisors committed to your best interest.' },
];

export const PROCESS = [
  { step: '01', title: 'Understand Goals', text: 'We listen first — your dreams, responsibilities, timelines and comfort with risk.' },
  { step: '02', title: 'Risk Analysis', text: 'A structured assessment to find the right balance of growth and safety for you.' },
  { step: '03', title: 'Investment Planning', text: 'A written, goal-linked plan detailing where, how much and why you invest.' },
  { step: '04', title: 'Portfolio Creation', text: 'We build your diversified portfolio across the right funds and asset classes.' },
  { step: '05', title: 'Regular Review', text: 'Periodic reviews and rebalancing keep you on track as life and markets change.' },
];

export const WHY_MF = [
  { icon: Briefcase, title: 'Professional Fund Management', text: 'Experienced managers handle research and decisions for you.' },
  { icon: Compass, title: 'Diversification', text: 'Spread risk across many companies and sectors in one investment.' },
  { icon: LineChart, title: 'Power of Compounding', text: 'Returns earn returns, accelerating growth over time.' },
  { icon: Wallet, title: 'Liquidity', text: 'Access your money when you need it (except lock-in schemes).' },
  { icon: Target, title: 'Goal-Based Investing', text: 'Choose funds that match each of your specific goals.' },
  { icon: Landmark, title: 'Tax Efficiency', text: 'Certain funds offer meaningful tax advantages.' },
];

export const STATS = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 1000, suffix: '+', label: 'Families Guided' },
  { value: 75, suffix: ' Cr+', label: 'Assets Advised' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export const VALUES = [
  { title: 'Integrity First', text: 'Advice that always puts your interest ahead of any commission.' },
  { title: 'Radical Transparency', text: 'You always know what you own, why you own it and what it costs.' },
  { title: 'Discipline over Drama', text: 'We ignore market noise and stay true to your long-term plan.' },
  { title: 'Lifelong Partnership', text: 'We grow with you — from your first SIP to your legacy planning.' },
];

export const TESTIMONIALS = [
  { name: 'Rohan Mehta', role: 'Software Engineer, Pune', text: 'I started my first SIP three years ago here. The clarity and honesty completely changed how I think about money. No jargon, just a plan I actually understand.' },
  { name: 'Priya & Arjun Nair', role: 'Young Family, Bengaluru', text: 'They helped us plan for our daughter\'s education and our own retirement in one go. For the first time our finances feel organised and calm.' },
  { name: 'Suresh Iyer', role: 'Retired Bank Manager, Chennai', text: 'My SWP is set up so beautifully that my retirement income is completely stress-free. Genuinely trustworthy people.' },
  { name: 'Kavita Deshmukh', role: 'Business Owner, Nagpur', text: 'As a busy entrepreneur I needed someone I could trust. Their portfolio reviews are sharp and always in my interest.' },
  { name: 'Aditya Sharma', role: 'Doctor, Delhi', text: 'Transparent, patient and knowledgeable. They never pushed products — they built a plan around my goals.' },
];

export const FAQS = [
  { q: 'What is a mutual fund?', a: 'A mutual fund pools money from many investors and is managed by a professional fund manager who invests it across stocks, bonds or other assets based on the scheme\'s objective.' },
  { q: 'How much money do I need to start investing?', a: 'You can start a SIP with as little as ₹500 per month. There is no need to wait for a large lumpsum — consistency matters more than the amount.' },
  { q: 'Is my money safe with mutual funds?', a: 'Mutual funds are regulated by SEBI and your money is held with a SEBI-registered custodian. However, returns are market-linked and not guaranteed. Investments are subject to market risks.' },
  { q: 'What is the difference between SIP and lumpsum?', a: 'A SIP invests a fixed amount regularly, averaging your cost over time. A lumpsum invests a large amount at once. SIPs suit regular income; lumpsums suit surplus funds.' },
  { q: 'Do you charge for financial advice?', a: 'Your first consultation is completely free. We are transparent about any costs before you invest a single rupee.' },
  { q: 'Can I withdraw my investment anytime?', a: 'Most open-ended funds allow withdrawal on any business day. Some schemes such as ELSS have a lock-in period (3 years for ELSS).' },
  { q: 'How do you decide which funds to recommend?', a: 'We assess your goals, time horizon and risk profile, then recommend funds based on research, consistency and suitability — never on commissions.' },
  { q: 'What returns can I expect?', a: 'Returns depend on the asset class, market conditions and duration. We never promise guaranteed returns. Historically, long-term equity investing has rewarded patient investors, but past performance does not guarantee future results.' },
  { q: 'What is an ELSS fund?', a: 'ELSS (Equity Linked Savings Scheme) is a tax-saving mutual fund eligible for deduction under Section 80C, with a 3-year lock-in and equity growth potential.' },
  { q: 'How often should I review my portfolio?', a: 'We recommend a structured review at least once or twice a year, and whenever a major life event occurs. We proactively schedule these reviews for you.' },
  { q: 'Are you SEBI/AMFI registered?', a: 'Yes, we operate as AMFI-registered mutual fund distributors and follow all regulatory guidelines and disclosures.' },
  { q: 'Is my personal and financial data confidential?', a: 'Absolutely. Client confidentiality is central to how we work. Your information is never shared without your consent.' },
  { q: 'Can NRIs invest through you?', a: 'Yes, NRIs can invest in most Indian mutual funds subject to regulations. We help you with the process and documentation.' },
  { q: 'What is a SWP?', a: 'A Systematic Withdrawal Plan lets you withdraw a fixed amount regularly from your investments — ideal for generating steady retirement income.' },
  { q: 'How do I get started?', a: 'Simply book a free consultation. We will understand your goals and guide you step by step — there is no obligation to invest.' },
];

export const CALCULATORS = [
  { slug: 'sip', name: 'SIP Calculator', desc: 'See how a monthly SIP can grow over time.' },
  { slug: 'lumpsum', name: 'Lumpsum Calculator', desc: 'Project the growth of a one-time investment.' },
  { slug: 'swp', name: 'SWP Calculator', desc: 'Plan a steady withdrawal income from your corpus.' },
  { slug: 'retirement', name: 'Retirement Calculator', desc: 'Find out how much you need to retire comfortably.' },
  { slug: 'emi', name: 'EMI Calculator', desc: 'Calculate your monthly loan instalment.' },
  { slug: 'goal', name: 'Goal Calculator', desc: 'Know the monthly SIP needed to reach a goal.' },
  { slug: 'stepup', name: 'Step Up SIP Calculator', desc: 'See the impact of increasing your SIP yearly.' },
  { slug: 'education', name: 'Education Planner', desc: 'Plan for your child\'s future education cost.' },
  { slug: 'homeloan', name: 'Home Loan EMI', desc: 'Estimate your home loan EMI and interest.' },
  { slug: 'compound', name: 'Compound Interest', desc: 'Visualise the power of compounding.' },
];

export const BLOG_CATEGORIES = ['Mutual Funds', 'SIP', 'Insurance', 'Retirement', 'Tax Saving', 'Market Updates', 'Personal Finance'];

export const BLOGS = [
  { slug: 'sip-vs-lumpsum', title: 'SIP vs Lumpsum: Which Is Right for You in 2025?', category: 'SIP', date: '12 Jan 2025', read: '6 min', img: IMAGES.market,
    excerpt: 'Both strategies build wealth, but the right choice depends on your cash-flow, risk appetite and market timing. Here is a simple framework.',
    body: ['Choosing between a SIP and a lumpsum is one of the most common questions new investors ask. The honest answer is: it depends on your situation, not on a universal rule.', 'A SIP works best when you invest from regular income. By investing a fixed amount every month, you buy more units when markets fall and fewer when they rise — this is called rupee-cost averaging, and it removes the pressure of timing the market.', 'A lumpsum can work well when you have a surplus and a long horizon, but it carries timing risk. A middle path — deploying a lumpsum gradually through an STP — often gives the best of both worlds.', 'Whatever you choose, the biggest driver of wealth is time in the market, not timing the market. Start early, stay consistent, and review periodically.'] },
  { slug: 'power-of-compounding', title: 'The Quiet Magic of Compounding Explained Simply', category: 'Personal Finance', date: '05 Jan 2025', read: '5 min', img: IMAGES.hero,
    excerpt: 'Albert Einstein reportedly called it the eighth wonder of the world. Here is why starting early matters more than investing large.',
    body: ['Compounding is simply your returns earning returns. In the early years the growth looks slow, almost boring. But given enough time, the curve bends sharply upward.', 'Consider two investors: one who starts at 25 and one who starts at 35, both investing the same monthly amount. The early starter often ends up with nearly double the corpus by retirement — purely because of the extra ten years of compounding.', 'The lesson is powerful and simple: the best time to start was yesterday; the second best time is today.'] },
  { slug: 'term-insurance-guide', title: 'Why Term Insurance Should Be Your First Investment', category: 'Insurance', date: '28 Dec 2024', read: '4 min', img: IMAGES.couple,
    excerpt: 'Before you chase returns, protect your family. A pure term plan offers the highest cover at the lowest cost.',
    body: ['Insurance and investment are two different jobs. Term insurance does one job exceptionally well: it protects your family financially if you are no longer around.', 'For a modest annual premium, a healthy 30-year-old can secure a cover of ₹1 crore or more. That protection is the foundation on which all other investing should sit.', 'Keep insurance and investment separate. Buy a pure term plan for protection, and invest the rest for growth.'] },
  { slug: 'retirement-early', title: 'How to Retire Comfortably: A Practical Roadmap', category: 'Retirement', date: '20 Dec 2024', read: '7 min', img: IMAGES.retire,
    excerpt: 'Retirement is not an age, it is a number. Here is how to estimate yours and build toward it with confidence.',
    body: ['A comfortable retirement starts with a clear target: how much annual income you will need, adjusted for inflation, when you stop working.', 'Once you know your required corpus, a disciplined mix of equity and debt — shifting gradually toward safety as you age — can get you there.', 'A SWP can then convert that corpus into a steady monthly income, giving you a salary-like cash-flow in retirement.'] },
  { slug: 'tax-saving-80c', title: 'Smart Tax Saving Under Section 80C Beyond FDs', category: 'Tax Saving', date: '15 Dec 2024', read: '5 min', img: IMAGES.market,
    excerpt: 'ELSS funds let you save tax and grow wealth together — with the shortest lock-in among 80C options.',
    body: ['Many taxpayers rush into low-return tax-saving instruments every March. There is a smarter way.', 'ELSS (Equity Linked Savings Schemes) offer a deduction under Section 80C with just a 3-year lock-in — the shortest among 80C options — plus the long-term growth potential of equity.', 'Start your tax-saving investments early in the financial year through a SIP, rather than a last-minute lumpsum, to average your cost and reduce stress.'] },
  { slug: 'market-volatility', title: 'Market Falling? Why Smart Investors Stay Calm', category: 'Market Updates', date: '08 Dec 2024', read: '4 min', img: IMAGES.hero,
    excerpt: 'Corrections are normal and healthy. The investors who panic-sell usually lock in losses. Here is a calmer perspective.',
    body: ['Market corrections are a feature of investing, not a bug. Historically, markets have recovered from every fall and gone on to new highs.', 'When markets fall, your SIP quietly buys more units at lower prices — which actually benefits you in the long run.', 'The key is to stay invested, stick to your plan, and avoid emotional decisions. Investments are subject to market risks; a long-term view is your best friend.'] },
];

export const RESOURCES = [
  { title: 'Beginner\'s Investing Guide', desc: 'Everything a first-time investor needs to start with confidence.', pages: '18 pages' },
  { title: 'Complete SIP Guide', desc: 'How SIPs work, benefits, and how to choose the right amount.', pages: '12 pages' },
  { title: 'Mutual Fund Basics', desc: 'Understand types of funds, risk levels and how to read a fact sheet.', pages: '16 pages' },
  { title: 'Tax Saving Guide', desc: 'Make the most of Section 80C and invest tax-efficiently.', pages: '10 pages' },
  { title: 'Investment Guide', desc: 'A framework for building a diversified, goal-based portfolio.', pages: '20 pages' },
  { title: 'Risk Profile Guide', desc: 'Discover your risk appetite and the right asset allocation for you.', pages: '8 pages' },
];

export const DISCLAIMER = 'Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. We are an AMFI-registered mutual fund distributor. We do not guarantee any returns. The information on this website is for educational purposes only and should not be construed as investment advice.';
