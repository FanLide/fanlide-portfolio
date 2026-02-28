export const translations = {
  en: {
    hero: {
      title: "Petter Fan Studio",
      subtitle: "Elite Full Stack Development Team",
      desc: "Bridging China & Japan tech ecosystems. Delivering enterprise-grade solutions with a team of senior experts.",
      cta_projects: "Our Services",
      cta_contact: "Start a Project"
    },
    sections: {
      experience: "Core Expertise",
      projects: "Selected Works",
      skills: "Tech Stack",
      partners: "The Team",
      contact: "Let's Build Something Great",
      contact_desc: "From complex enterprise systems to modern web applications, we bring ideas to life. Open for contract and full-time opportunities."
    },
    experience: {
      current: "Ongoing",
      role_fe: "Frontend Architecture",
      role_be: "Backend Systems",
      role_fs: "Full Stack Solutions",
    }
  },
  ja: {
    hero: {
      title: "Petter Fan Studio",
      subtitle: "精鋭フルスタック開発チーム",
      desc: "中国と日本の技術エコシステムを架橋する。シニアエキスパートチームによるエンタープライズ級のソリューション提供。",
      cta_projects: "サービス概要",
      cta_contact: "開発を依頼する"
    },
    sections: {
      experience: "コアスキル",
      projects: "開発実績",
      skills: "技術スタック",
      partners: "チームメンバー",
      contact: "開発のご相談はこちら",
      contact_desc: "大規模な基幹システムから最新のWebアプリまで、あらゆるソフトウェア開発に対応します。受託開発・業務委託のご相談を承ります。"
    },
    experience: {
      current: "継続中",
      role_fe: "フロントエンドアーキテクチャ",
      role_be: "バックエンドシステム",
      role_fs: "フルスタックソリューション",
    }
  },
  zh: {
    hero: {
      title: "樊氏工作室",
      subtitle: "精英全栈开发团队",
      desc: "连接中日技术生态。由资深专家组成的精锐团队，提供企业级软件解决方案。",
      cta_projects: "服务内容",
      cta_contact: "项目合作"
    },
    sections: {
      experience: "核心竞争力",
      projects: "精选案例",
      skills: "技术栈",
      partners: "核心团队",
      contact: "承接各类软件开发",
      contact_desc: "从复杂的企业级系统到现代 Web 应用，我们都能提供高质量的解决方案。欢迎咨询各类软件开发合作（兼职/外包/全职）。"
    },
    experience: {
      current: "进行中",
      role_fe: "前端架构",
      role_be: "后端系统",
      role_fs: "全栈解决方案",
    }
  }
};

export const experience = [
  {
    company: "Elite Team of Experts",
    company_ja: "シニアエキスパート集団",
    company_zh: "资深精英团队",
    role: "10+ Years Experience Per Member",
    period: "Team Power",
    description: {
      en: "Our team consists of industry veterans with over 10 years of hands-on experience each. We are not just coders; we are architects, strategists, and problem solvers who have delivered large-scale systems across diverse industries.",
      ja: "メンバー全員が10年以上の実務経験を持つ業界のベテランで構成されています。単なるコーダーではなく、アーキテクト、戦略家、問題解決者として、多様な業界で大規模システムを成功に導いてきました。",
      zh: "团队成员均为拥有10年以上实战经验的行业老兵。我们不仅是开发者，更是架构师和战略顾问。人均万小时的锤炼，确保为客户交付最专业、最稳健的技术成果。"
    },
    tech: ["Senior Experts", "10+ Years", "Full Stack", "Consulting"]
  },
  {
    company: "Enterprise Solutions (Japan)",
    company_ja: "エンタープライズソリューション (日本)",
    company_zh: "企业级解决方案 (日本)",
    role: "Full Lifecycle Development",
    period: "Ongoing",
    description: {
      en: "Delivering robust event management and legacy system modernization for Japanese enterprises. Focus on high reliability and scalability.",
      ja: "日本企業向けのイベント管理システム開発およびレガシーシステムのモダナイゼーション。高い信頼性と拡張性に重点を置いています。",
      zh: "为日本企业提供稳健的活动管理系统开发及遗留系统现代化改造。专注于高可用性与可扩展性。"
    },
    tech: ["React", "Java", "Spring Boot", "System Design"]
  },
  {
    company: "FinTech & Payments (Global)",
    company_ja: "FinTech & 決済システム (グローバル)",
    company_zh: "金融科技 & 支付系统 (全球)",
    role: "High-Concurrency Architecture",
    period: "Expertise",
    description: {
      en: "Deep expertise in building secure, high-volume payment gateways, digital wallets, and banking infrastructure. Proven track record in handling millions of transactions.",
      ja: "セキュアで大量のトランザクションを処理する決済ゲートウェイ、デジタルウォレット、銀行インフラの構築に関する深い専門知識。",
      zh: "在构建安全、高并发支付网关、数字钱包及银行基础设施方面拥有深厚积淀。具备处理亿级交易量的实战经验。"
    },
    tech: ["FinTech", "Payment Gateways", "Security", "Microservices"]
  }
];

export const projects = [
  {
    title: "Aurora 占卜",
    description: {
      en: "AI-powered fortune telling web app with omikuji, tarot, horoscope, name analysis & palm reading. Supports 7 languages.",
      ja: "AI搭載の占卜ウェブアプリ。おみくじ、タロット、星座占、姓名判断、手相占いをサポート。7言語対応。",
      zh: "AI驱动的占卜网页应用，支持求签、塔罗牌、星座、姓名判断、手相占卜。支持7种语言。"
    },
    status: "Live",
    tech: ["Next.js", "TypeScript", "Minimax AI", "Supabase", "PWA"],
    link: "https://aurora-virid-five.vercel.app/",
    image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "OrderApp (SaaS)",
    description: {
      en: "A B2B Online Ordering System connecting restaurants and suppliers. Full-stack implementation.",
      ja: "飲食店とサプライヤーを繋ぐB2Bオンライン発注システム。フルスタックで実装。",
      zh: "连接餐厅与供应商的 B2B 在线订货系统。全栈独立开发。"
    },
    status: "Beta",
    tech: ["NestJS", "Vue 3", "Prisma", "Redis", "Cloudflare R2"],
    link: "https://www.orderinjp.com",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Japan Market Monitor",
    description: {
      en: "Real-time market analysis tool automating data collection and alerts via Telegram.",
      ja: "リアルタイム市場分析ツール。データ収集とTelegram通知を自動化。",
      zh: "实时市场分析工具。自动化数据采集并通过 Telegram 发送警报。"
    },
    status: "MVP",
    tech: ["Node.js", "Playwright", "Telegram Bot"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Petter Fan Studio",
    description: {
      en: "Modern agency site showcasing our team's capabilities with high-performance static generation.",
      ja: "チームの技術力を示す、高性能な静的サイト生成を用いたモダンなエージェンシーサイト。",
      zh: "展示团队实力的现代工作室官网，基于高性能静态生成技术构建。"
    },
    status: "Live",
    tech: ["Astro", "React", "TailwindCSS"],
    link: "https://chihiroshoji.com",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  }
];

export const skills = {
  frontend: ["React", "Vue.js", "Angular", "TypeScript", "TailwindCSS", "Next.js"],
  backend: ["Node.js", "NestJS", "Java", "Spring Boot", "Go", "Redis"],
  tools: ["Git", "Docker", "AWS", "Cloudflare", "Kubernetes", "Figma"]
};

export const partners = [
  {
    name: "Petter Fan",
    name_zh: "樊 (Petter)",
    name_ja: "樊 (Petter)",
    role: {
      en: "Founder & Lead Developer",
      zh: "创始人 & 技术负责人",
      ja: "創業者 & リードデベロッパー"
    },
    bio: {
      en: "10+ years of full-stack experience. Expert in bridging business requirements with technical solutions. Specialized in frontend architecture and cross-border project management.",
      zh: "10年+ 全栈开发经验。擅长将业务需求转化为技术落地。专注于前端架构及跨国项目管理。连接中日技术生态的核心人物。",
      ja: "10年以上のフルスタック経験。ビジネス要件を技術ソリューションに落とし込む専門家。フロントエンドアーキテクチャとクロスボーダープロジェクト管理に強み。"
    },
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Petter&backgroundColor=e5e7eb",
    tech: ["Full Stack", "Management", "Architecture"]
  },
  {
    name: "Alex Wang",
    name_zh: "王先生",
    name_ja: "王氏",
    role: {
      en: "Senior Backend Architect",
      zh: "资深后端架构师",
      ja: "シニアバックエンドアーキテクト"
    },
    bio: {
      en: "12+ years of experience in high-concurrency systems. Expert in Java/Go microservices and large-scale financial platforms. Former Tech Lead at a top-tier fintech company.",
      zh: "12年+ 高并发系统开发经验。精通 Java/Go 微服务架构及大型金融平台构建。曾任一线金融科技公司技术主管，擅长处理亿级流量。",
      ja: "12年以上の高負荷システム開発経験。Java/Goマイクロサービスと大規模金融プラットフォームの専門家。大手Fintech企業の元テックリード。"
    },
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Alex&backgroundColor=b6e3f4",
    tech: ["Java", "Go", "Microservices"]
  },
  {
    name: "David Yang",
    name_zh: "杨先生",
    name_ja: "楊氏",
    role: {
      en: "Mobile Development Expert",
      zh: "资深移动端专家",
      ja: "モバイル開発エキスパート"
    },
    bio: {
      en: "10+ years specializing in iOS and Android development. Passionate about crafting buttery-smooth UI/UX and optimizing app performance for millions of users.",
      zh: "10年+ 移动端开发经验。深耕 iOS 与 Android 原生及跨平台开发。对极致交互体验有执着追求，擅长性能调优及复杂动画实现。",
      ja: "10年以上のiOS/Android開発経験。滑らかなUI/UXの構築とアプリのパフォーマンス最適化に情熱を注ぐ。数百万ユーザー規模のアプリ開発実績あり。"
    },
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=David&backgroundColor=c0aede",
    tech: ["iOS", "Android", "Flutter"]
  },
  {
    name: "Sarah Li",
    name_zh: "李小姐",
    name_ja: "李氏",
    role: {
      en: "Design Director",
      zh: "UI/UX 设计总监",
      ja: "デザインディレクター"
    },
    bio: {
      en: "Visionary designer transforming complex logic into elegant, user-centric interfaces. 8+ years of experience in SaaS and consumer apps.",
      zh: "视觉灵魂人物。擅长将复杂的业务逻辑转化为优雅、直观的用户界面。8年+ SaaS 及 C端产品设计经验，注重细节与情感化设计。",
      ja: "複雑なロジックをエレガントでユーザー中心のインターフェースに変えるビジョナリーデザイナー。SaaSおよびコンシューマー向けアプリで8年以上の経験。"
    },
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Sarah&backgroundColor=ffdfbf",
    tech: ["Figma", "UI/UX", "Branding"]
  },
  {
    name: "Mike Chen",
    name_zh: "陈先生",
    name_ja: "陳氏",
    role: {
      en: "QA & DevOps Lead",
      zh: "质量保障与运维专家",
      ja: "QA & DevOps リード"
    },
    bio: {
      en: "Ensuring rock-solid delivery through automated testing and CI/CD pipelines. Expert in cloud infrastructure and security compliance.",
      zh: "交付质量的守门员。通过自动化测试体系与 CI/CD 流水线确保系统稳如磐石。精通云基础设施运维及安全合规建设。",
      ja: "自動テストとCI/CDパイプラインを通じて堅牢なデリバリーを保証。クラウドインフラとセキュリティコンプライアンスの専門家。"
    },
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Mike&backgroundColor=d1d4f9",
    tech: ["DevOps", "CI/CD", "Automation"]
  }
];
