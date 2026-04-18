// ─── Personal Info ───────────────────────────────────────────────────────────
export const personalInfo = {
  name: 'Kevin J T',
  title: 'Software Test Engineer',
  tagline: 'I Find Bugs Before Users Do.',
  subtitle:
    'Entry-level QA Engineer with hands-on expertise in Selenium automation, manual testing, and API validation. Delivering release-ready software through precision test design, rigorous defect tracking, and real Agile team experience.',
  email: 'kevinjt2004@gmail.com',
  phone: '+91 8531013918',
  linkedin: 'https://linkedin.com/in/kevinjt2004',
  github: 'https://github.com/kevinjt2004',
  location: 'Tamil Nadu, India',
  currentlyLearning: 'Playwright',
  openToWork: true,
  stats: [
    { value: '75+', label: 'Automated Scripts' },
    { value: '100+', label: 'Manual Test Cases' },
    { value: '20+', label: 'Defects Identified' },
    { value: '3', label: 'Projects Delivered' },
  ],
};

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    category: 'Automation Testing',
    icon: 'bot',
    color: 'accent',
    skills: ['Selenium WebDriver', 'TestNG', 'Cypress', 'Cucumber', 'Page Object Model (POM)'],
  },
  {
    category: 'Programming & Query',
    icon: 'code',
    color: 'cyan',
    skills: ['Java', 'SQL'],
  },
  {
    category: 'API & Performance',
    icon: 'zap',
    color: 'amber',
    skills: ['Postman (REST API)', 'JMeter (Load & Stress)'],
  },
  {
    category: 'Manual Testing',
    icon: 'search',
    color: 'purple',
    skills: ['Functional Testing', 'Regression Testing', 'Cross-Browser Testing', 'Exploratory Testing'],
  },
  {
    category: 'Tools & Workflow',
    icon: 'wrench',
    color: 'green',
    skills: ['JIRA', 'Git / GitHub', 'Maven', 'Google Sheets (Defect Tracking)'],
  },
  {
    category: 'Concepts & Methodology',
    icon: 'layers',
    color: 'blue',
    skills: ['SDLC', 'STLC', 'Agile', 'Test Case Design', 'Defect Life Cycle'],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'SafeHands',
    subtitle: 'Disaster Relief Web Application',
    period: 'Feb 2026',
    type: 'Automation Testing',
    badgeColor: 'accent',
    description:
      'Comprehensive automation test suite for a disaster relief web platform, covering critical user workflows including login, admin operations, and disaster type management.',
    problem:
      'Manual testing cycles were slow and error-prone, with flaky results on dynamic UI elements like date pickers and alerts.',
    solution:
      'Built a robust Selenium + Java + POM automation framework with explicit waits and modular test design, reducing test flakiness to near-zero.',
    contributions: [
      'Developed 40+ automated test scripts covering login flows, alerts, checkboxes, date pickers, and multi-page navigation',
      'Applied WebDriverWait (Explicit Waits) to handle dynamic elements, eliminating intermittent test failures',
      'Organized test suite using TestNG annotations — @Test, @BeforeMethod, @AfterMethod for clean lifecycle management',
      'Validated UI messages, element visibility, and conditional navigation paths across user roles',
      'Logged all identified defects in Google Sheets with severity ratings and reproduction steps',
    ],
    techStack: ['Java', 'Selenium WebDriver', 'TestNG', 'Maven', 'POM', 'Git / GitHub'],
    testingTypes: ['Functional Testing', 'Regression Testing', 'UI Testing',],
    githubUrl: '#',
    metrics: [{ label: 'Test Scripts', value: '40+' }, { label: 'Defects Logged', value: '10+' }, { label: 'Coverage', value: 'Login → Navigation' }],
  },
  {
    id: 2,
    title: 'Online Exam Portal',
    subtitle: 'End-to-End Automation Suite',
    period: 'Nov 2025',
    type: 'Automation Testing',
    badgeColor: 'cyan',
    description:
      'Full E2E automation coverage for a student examination platform, testing the complete exam lifecycle from login through score calculation with boundary and edge-case validation.',
    problem:
      'Complex multi-step exam flows (timer edge cases, session timeouts, answer submission) required reliable, repeatable test coverage across boundary conditions.',
    solution:
      'Designed positive and negative test scenarios with full traceability, automating 20+ E2E flows using Selenium + TestNG.',
    contributions: [
      'Automated 20+ end-to-end scenarios: login → question navigation → answer submission → score calculation',
      'Designed positive and negative test cases for boundary conditions including timer edge cases, session timeouts, and input limits',
      'Maintained full test traceability in Google Sheets linking requirements to test outcomes',
      'Structured test execution order using TestNG for dependency management between test phases',
      'Identified and documented defects with steps to reproduce, expected vs actual behavior',
    ],
    techStack: ['Java', 'Selenium WebDriver', 'TestNG', 'Maven', 'POM', 'Git / GitHub'],
    testingTypes: ['E2E Testing', 'Boundary Value Testing', 'Regression Testing', 'Negative Testing'],
    githubUrl: '#',
    metrics: [{ label: 'E2E Scenarios', value: '20+' }, { label: 'Test Types', value: 'Positive + Negative' }, { label: 'Traceability', value: 'Full Coverage' }],
  },
  {
    id: 3,
    title: 'OrangeHRM',
    subtitle: 'Manual Testing — HR Management System',
    period: 'Sep 2025',
    type: 'Manual Testing',
    badgeColor: 'amber',
    description:
      'Comprehensive manual test effort for the OrangeHRM platform, validating Login, Admin, and Employee Management modules across multiple browsers.',
    problem:
      'Core HR modules lacked documented test cases, leaving significant functional defects undetected before user acceptance testing.',
    solution:
      'Authored a structured test case library with severity-rated defect reports, exposing 10+ critical and major bugs through systematic testing.',
    contributions: [
      'Authored 50+ test cases for Login, Admin, and Employee Management modules with expected vs actual outcomes',
      'Identified and documented 10+ defects with full reproduction steps, screenshots, and severity classification',
      'Performed cross-browser compatibility testing across Chrome, Firefox, and Edge',
      'Executed regression testing after each bug-fix cycle to validate resolutions and prevent regressions',
      'Maintained structured defect log with priority, severity, status, and assignee columns',
    ],
    techStack: ['Manual Testing', 'Google Sheets', 'Chrome', 'Firefox', 'Edge'],
    testingTypes: ['Functional Testing', 'Cross-Browser Testing', 'Regression Testing', 'Defect Reporting'],
    githubUrl: '#',
    metrics: [{ label: 'Test Cases', value: '50+' }, { label: 'Defects Found', value: '10+' }, { label: 'Browsers Tested', value: '3' }],
  },
];

// ─── Experience / Timeline ───────────────────────────────────────────────────
export const timeline = [
  {
    year: 'Mar 2026',
    title: 'Certified — Advanced Software Testing',
    org: 'IPCS Global, Trivandrum',
    type: 'certification',
    description: 'Completed intensive certification covering test design techniques, automation principles, Agile QA practices, and defect management.',
  },
  {
    year: 'Feb 2026',
    title: 'SafeHands Automation Project',
    org: 'Personal Project',
    type: 'project',
    description: 'Designed and executed 40+ automated test scripts for a disaster relief web app using Selenium WebDriver, Java, and TestNG with POM framework.',
  },
  {
    year: 'Nov 2025',
    title: 'Online Exam Portal — E2E Automation',
    org: 'Personal Project',
    type: 'project',
    description: 'Built end-to-end automation suite covering full exam lifecycle flows with boundary value testing and full requirements traceability.',
  },
  {
    year: 'Sep 2025',
    title: 'OrangeHRM Manual Testing Project',
    org: 'Personal Project',
    type: 'project',
    description: 'Executed 50+ manual test cases, uncovered 10+ defects, and validated cross-browser compatibility on a real-world HR management platform.',
  },
  {
    year: '2022–2025',
    title: 'Bachelor of Computer Science',
    org: 'Manonmaniam Sundaranar University, Tamil Nadu',
    type: 'education',
    description: 'Graduated with a B.Sc. in Computer Science, building strong foundations in programming, software engineering, and system design.',
  },
];

// ─── Certifications ──────────────────────────────────────────────────────────
export const certifications = [
  {
    title: 'Advanced Software Testing',
    issuer: 'IPCS Global',
    location: 'Trivandrum',
    year: 'Mar 2026',
    skills: ['Test Design', 'Automation Fundamentals', 'Agile QA', 'Defect Management'],
    color: 'accent',
    icon: 'shield-check',
  },
];

// ─── Currently Learning ──────────────────────────────────────────────────────
export const learningItems = [
  {
    tool: 'Playwright',
    reason: 'Faster, more stable browser automation with built-in auto-waits and multi-browser support.',
    status: 'In Progress',
    color: 'accent',
  },
  {
    tool: 'Cypress Advanced Patterns',
    reason: 'Component testing and API stubbing for comprehensive frontend test coverage.',
    status: 'Exploring',
    color: 'cyan',
  },
];
