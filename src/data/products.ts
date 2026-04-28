export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  features: string[];
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  badge?: 'Popular' | 'Best Value' | 'New' | 'Top Selling';
  icon: string;
  tags: string[];
  tier: 'budget' | 'mid' | 'premium';
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { name: 'Antivirus & Security', slug: 'antivirus-security', description: 'Protect your devices from viruses, malware, and cyber threats.', icon: '🛡️', color: 'from-red-500 to-rose-600' },
  { name: 'Productivity Tools', slug: 'productivity-tools', description: 'Office suites, PDF tools, and collaboration software.', icon: '⚡', color: 'from-indigo-500 to-violet-600' },
  { name: 'Developer Tools', slug: 'developer-tools', description: 'IDEs, API testers, DevOps tools for modern developers.', icon: '💻', color: 'from-sky-500 to-cyan-600' },
  { name: 'Business Software', slug: 'business-software', description: 'Invoicing, CRM, and accounting for growing businesses.', icon: '📈', color: 'from-emerald-500 to-teal-600' },
  { name: 'Operating Systems', slug: 'operating-systems', description: 'Genuine OS licenses for Windows and Linux.', icon: '🖥️', color: 'from-amber-500 to-orange-600' },
  { name: 'Utility Software', slug: 'utility-software', description: 'PC optimizers, backup tools, and system utilities.', icon: '⚙️', color: 'from-purple-500 to-pink-600' },
];

export const products: Product[] = [
  // ANTIVIRUS & SECURITY
  {
    id: 'qs-pro',
    name: 'QuickShield Pro',
    slug: 'quickshield-pro',
    category: 'Antivirus & Security',
    categorySlug: 'antivirus-security',
    shortDescription: 'Real-time AI-powered threat detection and 24/7 PC protection.',
    description: 'QuickShield Pro delivers enterprise-grade security for personal and small business use. With AI-powered threat detection and real-time monitoring, stay protected around the clock against viruses, ransomware, spyware, and phishing attacks.',
    features: [
      'Real-time malware & virus protection',
      'AI-powered zero-day threat detection',
      'Web browsing & phishing protection',
      'Email security filter',
      'Automatic silent updates',
      '1 PC License – 1 Year',
    ],
    price: 499,
    originalPrice: 999,
    rating: 4.5,
    reviewCount: 1243,
    badge: 'Popular',
    icon: '🛡️',
    tags: ['Antivirus', 'Security', 'PC Protection'],
    tier: 'budget',
  },
  {
    id: 'sg-ultimate',
    name: 'SecureGuard Ultimate',
    slug: 'secureguard-ultimate',
    category: 'Antivirus & Security',
    categorySlug: 'antivirus-security',
    shortDescription: 'Full-suite security with VPN, password manager & dark web monitoring.',
    description: 'SecureGuard Ultimate is an all-in-one security solution combining advanced firewall, unlimited VPN, and identity protection for professionals who demand the best.',
    features: [
      'Advanced firewall & intrusion detection',
      'Built-in VPN (unlimited bandwidth)',
      'Password manager (unlimited vaults)',
      'Dark web identity monitoring',
      '3 Device License – 1 Year',
      'Priority 24/7 customer support',
    ],
    price: 1499,
    originalPrice: 2499,
    rating: 4.7,
    reviewCount: 876,
    badge: 'Best Value',
    icon: '🔐',
    tags: ['VPN', 'Password Manager', 'Identity Protection'],
    tier: 'mid',
  },
  {
    id: 'np-enterprise',
    name: 'NetProtect Enterprise',
    slug: 'netprotect-enterprise',
    category: 'Antivirus & Security',
    categorySlug: 'antivirus-security',
    shortDescription: 'Centralized endpoint protection for businesses with compliance reporting.',
    description: 'NetProtect Enterprise offers centralized security management for businesses, with endpoint protection and detailed compliance reporting for ISO and SOC standards.',
    features: [
      'Centralized security management dashboard',
      'Endpoint protection for 10 devices',
      'Network traffic monitoring & DPI',
      'Compliance reporting (ISO 27001 / SOC 2)',
      'Dedicated account manager',
      '1 Year Enterprise License',
    ],
    price: 2999,
    originalPrice: 4999,
    rating: 4.8,
    reviewCount: 342,
    icon: '🏢',
    tags: ['Enterprise', 'Network Security', 'Compliance'],
    tier: 'premium',
  },

  // PRODUCTIVITY TOOLS
  {
    id: 'om-pro',
    name: 'OfficeMax Pro',
    slug: 'officemax-pro',
    category: 'Productivity Tools',
    categorySlug: 'productivity-tools',
    shortDescription: 'Complete office suite — Word, Spreadsheet, Presentation & PDF editor.',
    description: 'OfficeMax Pro is a full-featured office suite fully compatible with Microsoft Office formats. Designed for productivity, collaboration, and professional document creation.',
    features: [
      'Word processor with 200+ templates',
      'Advanced spreadsheet with pivot tables',
      'Presentation builder with animations',
      'Built-in PDF viewer & editor',
      'Cloud sync with 10GB storage',
      'Lifetime License – 1 PC',
    ],
    price: 799,
    originalPrice: 1299,
    rating: 4.6,
    reviewCount: 2156,
    badge: 'Popular',
    icon: '📄',
    tags: ['Office Suite', 'Word', 'Excel', 'Productivity'],
    tier: 'budget',
  },
  {
    id: 'pdf-master',
    name: 'PDF Master Suite',
    slug: 'pdf-master-suite',
    category: 'Productivity Tools',
    categorySlug: 'productivity-tools',
    shortDescription: 'Edit, convert, compress and e-sign PDFs — all in one tool.',
    description: 'PDF Master Suite gives you complete control over PDF files — edit text and images, convert to and from 15+ formats, merge, split, compress, and digitally sign.',
    features: [
      'Edit text & images directly in PDFs',
      'Convert PDF ↔ Word / Excel / PPT',
      'Merge, split & compress PDF files',
      'Digital signature & e-sign support',
      'Batch processing for multiple files',
      'Lifetime License – All Platforms',
    ],
    price: 399,
    originalPrice: 699,
    rating: 4.4,
    reviewCount: 987,
    icon: '📋',
    tags: ['PDF', 'Convert', 'Edit', 'Sign'],
    tier: 'budget',
  },
  {
    id: 'projectflow-pro',
    name: 'ProjectFlow Pro',
    slug: 'projectflow-pro',
    category: 'Productivity Tools',
    categorySlug: 'productivity-tools',
    shortDescription: 'Kanban, Gantt charts & team collaboration — all in one platform.',
    description: 'ProjectFlow Pro is a powerful project management suite for teams, combining real-time collaboration, task tracking, time logging, and executive analytics.',
    features: [
      'Kanban, list & Gantt chart views',
      'Real-time team collaboration & comments',
      'Time tracking with detailed reports',
      'Resource & workload management',
      'Integrations: Slack, Google Drive, Jira',
      '1 Year License – Up to 5 Users',
    ],
    price: 1999,
    originalPrice: 2999,
    rating: 4.7,
    reviewCount: 654,
    badge: 'Best Value',
    icon: '📊',
    tags: ['Project Management', 'Kanban', 'Team', 'Collaboration'],
    tier: 'mid',
  },

  // DEVELOPER TOOLS
  {
    id: 'code-editor-pro',
    name: 'CodeEditor Pro',
    slug: 'code-editor-pro',
    category: 'Developer Tools',
    categorySlug: 'developer-tools',
    shortDescription: 'Intelligent IDE with AI completion and support for 50+ languages.',
    description: 'CodeEditor Pro is a professional IDE built for speed and productivity. With AI-powered autocomplete, multi-cursor editing, and built-in Git, it handles everything from solo projects to large codebases.',
    features: [
      'AI-powered code completion & refactoring',
      '50+ programming language support',
      'Built-in Git integration & diff viewer',
      'Integrated terminal & multi-step debugger',
      'Extension marketplace (1,000+ plugins)',
      'Lifetime License – Unlimited Projects',
    ],
    price: 599,
    originalPrice: 999,
    rating: 4.8,
    reviewCount: 3421,
    badge: 'Top Selling',
    icon: '💻',
    tags: ['IDE', 'Code Editor', 'AI', 'Development'],
    tier: 'budget',
  },
  {
    id: 'devstack-premium',
    name: 'DevStack Premium',
    slug: 'devstack-premium',
    category: 'Developer Tools',
    categorySlug: 'developer-tools',
    shortDescription: 'Full DevOps suite — Docker, CI/CD, API testing & database GUI.',
    description: 'DevStack Premium bundles the entire modern developer toolchain: container management, CI/CD pipelines, API testing, database GUIs, and real-time monitoring in one powerful suite.',
    features: [
      'Docker & container management UI',
      'Visual CI/CD pipeline builder',
      'API testing & mock server',
      'Database GUI (MySQL, Postgres, MongoDB)',
      'Team workspace & project sharing',
      '1 Year License – Up to 3 Developers',
    ],
    price: 1799,
    originalPrice: 2999,
    rating: 4.9,
    reviewCount: 1876,
    badge: 'Popular',
    icon: '🚀',
    tags: ['Docker', 'CI/CD', 'API', 'Database', 'DevOps'],
    tier: 'mid',
  },
  {
    id: 'apitester-suite',
    name: 'APITester Suite',
    slug: 'apitester-suite',
    category: 'Developer Tools',
    categorySlug: 'developer-tools',
    shortDescription: 'Test, debug and document REST, GraphQL & WebSocket APIs visually.',
    description: 'APITester Suite is the go-to tool for API development — test endpoints, generate mock servers, auto-produce OpenAPI docs, and monitor APIs with a beautiful interface.',
    features: [
      'REST, GraphQL & WebSocket API testing',
      'Mock server generation from schemas',
      'Auto-generate OpenAPI documentation',
      'Team workspaces with version control',
      'Response diff & full request history',
      'Lifetime License – Unlimited APIs',
    ],
    price: 899,
    originalPrice: 1499,
    rating: 4.6,
    reviewCount: 2134,
    icon: '🔌',
    tags: ['API Testing', 'REST', 'GraphQL', 'Mock Server'],
    tier: 'budget',
  },

  // BUSINESS SOFTWARE
  {
    id: 'invoicepro',
    name: 'InvoicePro Business',
    slug: 'invoicepro-business',
    category: 'Business Software',
    categorySlug: 'business-software',
    shortDescription: 'GST-compliant invoicing, billing and expense tracking for Indian businesses.',
    description: 'InvoicePro Business is a complete billing and invoicing solution for Indian businesses — fully GST-compliant, with automated reminders, expense tracking, and one-click tax reports.',
    features: [
      'GST-compliant invoices & e-invoicing',
      'Expense tracking & categorization',
      'Client & vendor contact management',
      'Automated payment reminders via email/SMS',
      'GSTR-1 & GSTR-3B tax reports',
      '1 Year License – 1 Business Entity',
    ],
    price: 1299,
    originalPrice: 1999,
    rating: 4.5,
    reviewCount: 1567,
    badge: 'Popular',
    icon: '🧾',
    tags: ['Invoice', 'GST', 'Billing', 'Accounting'],
    tier: 'mid',
  },
  {
    id: 'crmflow-starter',
    name: 'CRMflow Starter',
    slug: 'crmflow-starter',
    category: 'Business Software',
    categorySlug: 'business-software',
    shortDescription: 'Lead management, sales pipeline & customer tracking for growing teams.',
    description: 'CRMflow Starter helps growing businesses manage leads, track deals through a visual pipeline, and maintain customer relationships — all without the complexity of enterprise CRMs.',
    features: [
      'Lead capture & visual pipeline management',
      'Deal tracking with revenue forecasting',
      'Email & SMS integration',
      'Full customer contact history',
      'Sales analytics & performance dashboards',
      '1 Year License – Up to 5 Users',
    ],
    price: 2499,
    originalPrice: 3999,
    rating: 4.6,
    reviewCount: 789,
    badge: 'Best Value',
    icon: '📈',
    tags: ['CRM', 'Sales', 'Leads', 'Pipeline'],
    tier: 'premium',
  },
  {
    id: 'accounting-pro',
    name: 'AccountingPro',
    slug: 'accounting-pro',
    category: 'Business Software',
    categorySlug: 'business-software',
    shortDescription: 'Full-featured accounting with P&L, balance sheet & GST return filing.',
    description: 'AccountingPro simplifies financial management with complete double-entry accounting, GST filing support, bank reconciliation, and real-time financial dashboards.',
    features: [
      'Double-entry accounting system',
      'Profit & loss, balance sheet reports',
      'GSTR-1, GSTR-3B filing support',
      'Bank statement reconciliation',
      'Multi-currency transactions',
      '1 Year License – Unlimited Transactions',
    ],
    price: 1599,
    originalPrice: 2499,
    rating: 4.4,
    reviewCount: 1023,
    icon: '💰',
    tags: ['Accounting', 'GST', 'Finance', 'Balance Sheet'],
    tier: 'mid',
  },

  // OPERATING SYSTEMS
  {
    id: 'winpro-11',
    name: 'Windows 11 Pro License',
    slug: 'windows-11-pro-license',
    category: 'Operating Systems',
    categorySlug: 'operating-systems',
    shortDescription: 'Genuine Windows 11 Pro OEM key — instant digital delivery.',
    description: 'Activate your PC with a genuine Microsoft Windows 11 Pro OEM key. Unlock full Pro features including BitLocker encryption, Remote Desktop, Hyper-V, and Windows Sandbox.',
    features: [
      'Genuine Microsoft Windows 11 Pro OEM',
      'BitLocker drive encryption',
      'Remote Desktop access',
      'Hyper-V virtualization support',
      'Windows Sandbox environment',
      'Lifetime Activation – 1 PC (Instant Delivery)',
    ],
    price: 3499,
    originalPrice: 5999,
    rating: 4.8,
    reviewCount: 5432,
    badge: 'Popular',
    icon: '🖥️',
    tags: ['Windows 11', 'OS', 'License Key', 'Microsoft'],
    tier: 'premium',
  },
  {
    id: 'linux-pro-workstation',
    name: 'LinuxPro Workstation',
    slug: 'linux-pro-workstation',
    category: 'Operating Systems',
    categorySlug: 'operating-systems',
    shortDescription: 'Professional Linux distro optimized for developers & power users.',
    description: 'LinuxPro Workstation is a premium Linux distribution with enterprise tooling, broad hardware compatibility, and 5 years of long-term professional support.',
    features: [
      'Performance-optimized kernel for workstations',
      '5 years long-term support (LTS)',
      'Pre-installed developer tool ecosystem',
      'Broad hardware driver compatibility',
      'Professional support portal access',
      '1 Year Support License',
    ],
    price: 799,
    originalPrice: 1299,
    rating: 4.3,
    reviewCount: 456,
    icon: '🐧',
    tags: ['Linux', 'OS', 'Developer', 'Workstation'],
    tier: 'budget',
  },

  // UTILITY SOFTWARE
  {
    id: 'cleanmaster-pro',
    name: 'CleanMaster Pro',
    slug: 'cleanmaster-pro',
    category: 'Utility Software',
    categorySlug: 'utility-software',
    shortDescription: 'One-click PC cleaner that removes junk and boosts system speed.',
    description: 'CleanMaster Pro keeps your PC running at peak performance by safely removing junk files, optimizing startup items, managing RAM, and finding duplicate files.',
    features: [
      'Deep junk file & temp folder cleaner',
      'RAM optimization & memory booster',
      'Startup program manager',
      'Duplicate file finder & remover',
      'Scheduled auto-cleaning',
      'Lifetime License – 1 PC',
    ],
    price: 299,
    originalPrice: 599,
    rating: 4.3,
    reviewCount: 3876,
    icon: '🧹',
    tags: ['PC Cleaner', 'Optimizer', 'Speed Boost'],
    tier: 'budget',
  },
  {
    id: 'diskoptimizer',
    name: 'DiskOptimizer Suite',
    slug: 'diskoptimizer-suite',
    category: 'Utility Software',
    categorySlug: 'utility-software',
    shortDescription: 'Defrag, partition, clone and recover disk data with one tool.',
    description: 'DiskOptimizer Suite is a comprehensive disk management toolkit for partitioning, cloning, defragmentation, health monitoring, and file recovery.',
    features: [
      'Smart SSD/HDD defragmentation',
      'Partition manager: create, resize, merge',
      'Disk cloning & image backup',
      'Deleted file & formatted partition recovery',
      'S.M.A.R.T. disk health monitoring',
      'Lifetime License – 1 PC',
    ],
    price: 499,
    originalPrice: 899,
    rating: 4.5,
    reviewCount: 1234,
    icon: '💾',
    tags: ['Disk Management', 'Partition', 'Recovery', 'Clone'],
    tier: 'budget',
  },
  {
    id: 'backupmaster-pro',
    name: 'BackupMaster Pro',
    slug: 'backupmaster-pro',
    category: 'Utility Software',
    categorySlug: 'utility-software',
    shortDescription: 'Automated encrypted backups to cloud, NAS, and external drives.',
    description: 'BackupMaster Pro gives you complete peace of mind with scheduled, AES-256 encrypted backups to multiple cloud providers, NAS, and external storage — with one-click restore.',
    features: [
      'Scheduled automatic incremental backups',
      'Cloud backup: Google Drive, Dropbox, OneDrive',
      'AES-256 end-to-end encryption',
      'File versioning (up to 30 restore points)',
      'One-click bare-metal restore',
      '1 Year License – Up to 3 PCs',
    ],
    price: 699,
    originalPrice: 1199,
    rating: 4.6,
    reviewCount: 892,
    badge: 'Top Selling',
    icon: '☁️',
    tags: ['Backup', 'Cloud', 'Recovery', 'Encrypted'],
    tier: 'budget',
  },
  {
    id: 'driverupdate-pro',
    name: 'DriverUpdate Pro',
    slug: 'driverupdate-pro',
    category: 'Utility Software',
    categorySlug: 'utility-software',
    shortDescription: 'Automatically detect and update outdated drivers for optimal performance.',
    description: 'DriverUpdate Pro scans your system, identifies outdated or broken drivers from its 15M+ driver database, and installs the latest official versions with one click.',
    features: [
      'Automatic driver detection & update',
      '15M+ verified driver database',
      'Driver backup before every update',
      'Scheduled scans & silent updates',
      'Game & GPU performance optimization',
      'Lifetime License – 1 PC',
    ],
    price: 349,
    originalPrice: 699,
    rating: 4.2,
    reviewCount: 2341,
    icon: '⚙️',
    tags: ['Driver Update', 'PC Optimization', 'Hardware'],
    tier: 'budget',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge);
}

export function getTopSellingProducts(): Product[] {
  return [...products].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 4);
}

export function getRelatedProducts(product: Product): Product[] {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
  );
}
