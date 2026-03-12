export const downloadUrl = "https://macbuddy.app/downloads/MacBuddy.dmg";

export const siteCopy = {
  en: {
    meta: {
      lang: "en",
      title: "Mac Buddy | A tiny buddy for your Mac.",
    },
    navigation: [
      { label: "Features", href: "#features" },
      { label: "Moods", href: "#moods" },
      { label: "How It Works", href: "#how-it-works" },
    ],
    hero: {
      brandTagline: "A tiny menu bar companion",
      languageLabel: "Language",
      builtFor: "Built for Mac users who like utilities with personality",
      headline: "A tiny buddy for your Mac.",
      primaryCta: "Download for macOS",
      secondaryCta: "View Features",
      highlights: [
        { title: "Live", description: "System signals that feel readable at a glance." },
        { title: "Cute", description: "Pet-like moods that make status less clinical." },
        { title: "Calm", description: "A menu bar utility designed to stay out of your way." },
      ],
      mockup: {
        appName: "Mac Buddy",
        moodLabel: "Menu bar mood",
        moodValue: "Excellent",
        noteLabel: "Buddy note",
        noteText: "I feel great. Everything is running smoothly.",
        currentMood: "Current mood",
        miniMoods: [
          { mood: "excellent", label: "Excellent" },
          { mood: "slightly-busy", label: "Slightly Busy" },
          { mood: "under-stress", label: "Under Stress" },
        ],
        overviewLabel: "System overview",
        overviewTitle: "Friendly, readable, immediate",
        stable: "Stable",
        metrics: [
          { label: "CPU", value: "18%", subtext: null, progress: "18%", color: "bg-sky-400" },
          { label: "Memory", value: "46%", subtext: null, progress: "46%", color: "bg-indigo-400" },
          { label: "Temp", value: "58°C", subtext: "Comfortable operating range", progress: null, color: "" },
          { label: "Network", value: "Quiet", subtext: "No unusual spikes detected", progress: null, color: "" },
        ],
        previewLabel: "Menu bar preview",
        previewTitle: "Feels native on macOS",
        previewBadge: "Always light",
        previewStatus: "Everything looks healthy",
        previewCpu: "CPU 18",
      },
    },
    featuresSection: {
      eyebrow: "Features",
      title: "Six views, one calm and readable system companion.",
      description:
        "This section follows the real product screens directly: mood overview first, then dedicated panels for CPU, memory, network, temperature, and disk activity.",
      cards: [
        {
          kind: "overview",
          label: "Overview",
          title: "Mood-first system summary",
          description:
            "Mac Buddy starts with a friendly emotional state, then explains it through the key health signals behind the mood.",
        },
        {
          kind: "cpu",
          label: "CPU",
          title: "Processor activity without a noisy monitor wall",
          description:
            "User load, system load, core split, and heavy processes stay visible in a panel that still feels light and calm.",
        },
        {
          kind: "memory",
          label: "Memory",
          title: "Pressure, usage, and heavy apps in one view",
          description:
            "Memory combines overall pressure with practical breakdowns so it is easy to see what is consuming resources.",
        },
        {
          kind: "network",
          label: "Network",
          title: "Bandwidth trends with cleaner presentation",
          description:
            "See download and upload behavior together with interface details in a layout that is easier to scan than a raw monitor.",
        },
        {
          kind: "temperature",
          label: "Temperature",
          title: "Thermals and frequency at a glance",
          description:
            "CPU, GPU, battery, and SSD temperatures live on one page alongside the frequency data that helps explain performance.",
        },
        {
          kind: "disk",
          label: "Disk",
          title: "Read, write, and process activity made simple",
          description:
            "Disk activity stays readable through peaks, available space, and process impact instead of dense technical tables.",
        },
      ],
    },
    moodSection: {
      eyebrow: "Mood States",
      title: "Your Mac stops looking technical and starts feeling understandable.",
      description:
        "Mac Buddy maps system conditions to simple emotional states, so you can read what's happening instantly without parsing numbers first.",
      items: [
        {
          image: "excellent",
          label: "Excellent",
          description: "I feel great. Everything is running smoothly.",
          accent: "from-sky-200/90 to-cyan-100/60",
        },
        {
          image: "slightly-busy",
          label: "Slightly Busy",
          description: "I'm a bit busy, but still comfortable.",
          accent: "from-amber-200/90 to-yellow-100/60",
        },
        {
          image: "under-stress",
          label: "Under Stress",
          description: "I'm feeling the pressure.",
          accent: "from-orange-200/90 to-rose-100/60",
        },
        {
          image: "critical",
          label: "Critical",
          description: "I'm overwhelmed.",
          accent: "from-rose-200/90 to-orange-100/60",
        },
        {
          image: "overheating",
          label: "Overheating",
          description: "I'm overheating. I need to cool down.",
          accent: "from-fuchsia-200/90 to-rose-100/60",
        },
      ],
    },
    howItWorksSection: {
      eyebrow: "How It Works",
      title: "Three steps from raw metrics to instant understanding.",
      description:
        "The experience is intentionally simple: read the Mac, translate the state, show you what matters.",
      steps: [
        {
          number: "01",
          title: "Mac Buddy reads system metrics",
          description:
            "It checks the signals that matter, including CPU load, memory pressure, temperature, and network activity.",
        },
        {
          number: "02",
          title: "It translates them into mood and status",
          description:
            "Instead of making you decode charts, it turns changing conditions into a simple emotional state.",
        },
        {
          number: "03",
          title: "You instantly understand how your Mac is doing",
          description:
            "A quick glance at the menu bar tells you whether your Mac feels relaxed, busy, or needs attention.",
        },
      ],
    },
    whySection: {
      eyebrow: "Why Mac Buddy",
      title: "A system monitor that feels more human.",
      description:
        "Traditional monitor apps can be powerful, but they often feel technical, dense, and slightly stressful. Mac Buddy takes a gentler route.",
      pointDescription:
        "Mac Buddy keeps the signal, removes the intimidation, and makes system awareness feel lighter.",
      points: [
        "More emotional than traditional system monitors",
        "Easier to understand than raw metrics alone",
        "Cleaner menu bar presence with less visual noise",
        "More delightful and less intimidating to use every day",
      ],
    },
    ctaSection: {
      eyebrow: "Ready to try it",
      title: "Let your Mac tell you how it feels.",
      description:
        "Download Mac Buddy for macOS and give your menu bar a more delightful way to understand system health.",
      primaryCta: "Download for macOS",
      secondaryCta: "Back to Top",
    },
    footer: {
      tagline:
        "A calm, friendly macOS menu bar companion that turns system status into moods you can understand instantly.",
      navTitle: "Navigation",
      downloadTitle: "Download",
      downloadLabel: "Download for macOS",
      copyright: "© 2026 Mac Buddy. Tiny companion, big clarity.",
    },
  },
  zh: {
    meta: {
      lang: "zh-CN",
      title: "Mac Buddy | 一位住在你 Mac 里的小伙伴",
    },
    navigation: [
      { label: "功能亮点", href: "#features" },
      { label: "情绪状态", href: "#moods" },
      { label: "工作方式", href: "#how-it-works" },
    ],
    hero: {
      brandTagline: "一个常驻菜单栏的小伙伴",
      languageLabel: "语言",
      builtFor: "为喜欢有性格工具的 Mac 用户而做",
      headline: "你的 Mac，需要一个小伙伴。",
      primaryCta: "下载 macOS 版本",
      secondaryCta: "查看功能",
      highlights: [
        { title: "实时", description: "系统信号一眼就能读懂。" },
        { title: "可爱", description: "用拟人情绪代替冰冷状态。" },
        { title: "安静", description: "安稳待在菜单栏，不打扰你。" },
      ],
      mockup: {
        appName: "Mac Buddy",
        moodLabel: "当前菜单栏情绪",
        moodValue: "状态极佳",
        noteLabel: "Buddy 提示",
        noteText: "我现在状态很好，一切都很顺畅。",
        currentMood: "当前情绪",
        miniMoods: [
          { mood: "excellent", label: "状态极佳" },
          { mood: "slightly-busy", label: "稍微有点忙" },
          { mood: "under-stress", label: "压力有点大" },
        ],
        overviewLabel: "系统概览",
        overviewTitle: "友好、直观、立刻可读",
        stable: "稳定",
        metrics: [
          { label: "CPU", value: "18%", subtext: null, progress: "18%", color: "bg-sky-400" },
          { label: "内存", value: "46%", subtext: null, progress: "46%", color: "bg-indigo-400" },
          { label: "温度", value: "58°C", subtext: "处于舒适工作区间", progress: null, color: "" },
          { label: "网络", value: "平稳", subtext: "没有出现异常波动", progress: null, color: "" },
        ],
        previewLabel: "菜单栏预览",
        previewTitle: "看起来就像原生 macOS",
        previewBadge: "始终明亮",
        previewStatus: "一切都很健康",
        previewCpu: "CPU 18",
      },
    },
    featuresSection: {
      eyebrow: "功能亮点",
      title: "六个核心视图，组成一个安静又清晰的系统伙伴。",
      description:
        "这一段直接跟着真实产品截图来写：先看情绪总览，再看 CPU、内存、网络、温度和磁盘这些独立视图。",
      cards: [
        {
          kind: "overview",
          label: "总览",
          title: "先看情绪，再看系统摘要",
          description:
            "Mac Buddy 先用一种更容易理解的情绪告诉你电脑状态，再把背后的关键健康信号展开给你看。",
        },
        {
          kind: "cpu",
          label: "CPU",
          title: "处理器活动清楚可见，但不会显得吵",
          description:
            "用户负载、系统负载、核心分布和高占用进程都能看到，但整体视觉仍然保持轻盈和安静。",
        },
        {
          kind: "memory",
          label: "内存",
          title: "压力、占用和重度应用放在同一页",
          description:
            "内存页把整体压力和具体构成放到一起，方便你快速看出到底是谁在消耗资源。",
        },
        {
          kind: "network",
          label: "网络",
          title: "带宽趋势更直观，展示也更干净",
          description:
            "下载上传趋势和接口状态一起呈现，比传统监控工具更容易扫读和理解。",
        },
        {
          kind: "temperature",
          label: "温度",
          title: "温度和频率一页看完",
          description:
            "CPU、GPU、电池、SSD 温度统一展示，同时保留频率信息，便于快速判断性能和热状态。",
        },
        {
          kind: "disk",
          label: "磁盘",
          title: "读写峰值和进程影响更容易理解",
          description:
            "磁盘页把可用空间、读写趋势、峰值和进程活动放在同一个清晰的界面里。",
        },
      ],
    },
    moodSection: {
      eyebrow: "情绪状态",
      title: "你的 Mac 不再只是技术指标，而是一个你看得懂的小情绪。",
      description:
        "Mac Buddy 会把系统状态映射成简单直观的情绪，让你不用先读数字，也能马上理解现在发生了什么。",
      items: [
        {
          image: "excellent",
          label: "状态极佳",
          description: "我感觉很好，一切运行顺畅。",
          accent: "from-sky-200/90 to-cyan-100/60",
        },
        {
          image: "slightly-busy",
          label: "稍微有点忙",
          description: "我有点忙，但还很从容。",
          accent: "from-amber-200/90 to-yellow-100/60",
        },
        {
          image: "under-stress",
          label: "压力有点大",
          description: "我开始感觉到压力了。",
          accent: "from-orange-200/90 to-rose-100/60",
        },
        {
          image: "critical",
          label: "接近极限",
          description: "我有点撑不住了。",
          accent: "from-rose-200/90 to-orange-100/60",
        },
        {
          image: "overheating",
          label: "过热了",
          description: "我太热了，需要降温。",
          accent: "from-fuchsia-200/90 to-rose-100/60",
        },
      ],
    },
    howItWorksSection: {
      eyebrow: "工作方式",
      title: "三步，把生硬指标变成一眼能懂的状态。",
      description: "整个体验非常简单：读取系统、翻译状态、让你马上看懂。",
      steps: [
        {
          number: "01",
          title: "Mac Buddy 读取系统指标",
          description: "它会关注 CPU、内存压力、温度和网络活动这些关键变化。",
        },
        {
          number: "02",
          title: "把它们翻译成情绪和状态",
          description: "你不用自己解读图表，它会直接把系统情况转成容易理解的情绪。",
        },
        {
          number: "03",
          title: "你立刻知道你的 Mac 现在如何",
          description: "只要瞄一眼菜单栏，就能知道它现在很轻松、正忙碌，还是需要你注意。",
        },
      ],
    },
    whySection: {
      eyebrow: "为什么是 Mac Buddy",
      title: "一个更有人味的系统监控工具。",
      description:
        "传统监控工具很强大，但也常常显得技术化、密集，甚至有点让人紧张。Mac Buddy 走的是更柔和的一条路。",
      pointDescription: "它保留有效信息，拿掉压迫感，让感知系统状态这件事变得更轻松。",
      points: [
        "比传统监控工具更有情绪表达",
        "比只看原始指标更容易理解",
        "菜单栏体验更干净，噪音更少",
        "更可爱，也没那么让人有压力",
      ],
    },
    ctaSection: {
      eyebrow: "准备试试看",
      title: "让你的 Mac 告诉你，它现在感觉怎么样。",
      description: "下载 Mac Buddy，让菜单栏用更轻松、更讨喜的方式告诉你系统健康状态。",
      primaryCta: "下载 macOS 版本",
      secondaryCta: "回到顶部",
    },
    footer: {
      tagline: "一个安静、友好的 macOS 菜单栏伙伴，把系统状态变成你一眼就懂的小情绪。",
      navTitle: "导航",
      downloadTitle: "下载",
      downloadLabel: "下载 macOS 版本",
      copyright: "© 2026 Mac Buddy. 小小伙伴，清晰很多。",
    },
  },
};
