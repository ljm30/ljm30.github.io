// ─────────────────────────────────────────────────────────────────────────────
// config.js — 编辑这个文件即可更新主页内容，无需懂 HTML/CSS。
// 站点：Jianming Long (龙键铭) · 个人学术主页（Newspaper 报纸风主题）
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Jianming Long",          // 注意：保持与论文作者列表中的写法一致，会自动加粗
  nameZh:     "龙键铭",
  initials:   "JL",
  role:       "Undergraduate Researcher",
  university: "Tsinghua University",
  email:      "longjm23@mails.tsinghua.edu.cn",
  bio:        "I am an undergraduate at Tsinghua University (Zhili College), majoring in Information and Computing Science. I do research at THUIR on the trustworthiness, memory, and agent systems of large language models.",
  photo:      "images/profile.jpg",     // 复用仓库里已有的证件照
  updated:    "June 2026",              // 报头副标题显示的"最后更新"时间；改完内容顺手更新一下

  // 学术/社交链接（渲染在照片栏下方）
  links: {
    scholar: "https://scholar.google.com/citations?user=fb_8qCEAAAAJ&hl=en",
    github:  "https://github.com/ljm30",
    // cv:   "files/cv.pdf",            // 以后有英文 CV 时取消注释
  },

  // 研究方向（短标签，显示在头版右侧 RESEARCH 边栏）
  focusAreas: [
    "LLM Trustworthiness",
    "Memory & Continual Learning",
    "Agentic AI",
    "Evaluation & Benchmarking",
  ],

  // 论文：abstract 会作为报纸"导语"显示；links 的键名自动变按钮（arxiv/code/pdf/openreview…）
  publications: [
    {
      year:    2026,
      title:   "MemoryBench: A Benchmark for Memory and Continual Learning in LLM Systems",
      authors: "Qingyao Ai, Yichen Tang, Changyue Wang, Jianming Long, Weihang Su, Yiqun Liu",
      venue:   "ICML 2026 · Spotlight (top 2.2%)",
      abstract:"The first benchmark for memory and feedback-driven continual learning in LLM systems — 11 datasets, ~20k cases. Finds that state-of-the-art memory systems still fail to reliably beat a simple RAG baseline.",
      links:   { arxiv: "https://arxiv.org/abs/2510.17281", code: "https://github.com/THUIR/MemoryBench", project: "https://memorybench.thuir.cn/", data: "https://huggingface.co/datasets/THUIR/MemoryBench" },
    },
    {
      year:    2026,
      title:   "SurGE: A Benchmark and Evaluation Framework for Scientific Survey Generation",
      authors: "Weihang Su, Anzhe Xie, Qingyao Ai, Jianming Long, Xuanyi Chen, Jiaxin Mao, Ziyi Ye, Yiqun Liu",
      venue:   "SIGIR 2026 · Resource Track",
      abstract:"A benchmark and automatic evaluation framework for scientific survey generation, built on 205 expert surveys and a corpus of over one million papers, revealing a wide gap between machine- and expert-written surveys.",
      links:   { arxiv: "https://arxiv.org/abs/2508.15658", code: "https://github.com/oneal2000/SurGE", data: "https://drive.google.com/drive/folders/1ZZPeZvjexFcCmgFqxftKeCPn1vYeBR0Q?usp=drive_link" },
    },
    {
      year:    2026,
      title:   "Skill Retrieval Augmentation for Agentic AI",
      authors: "Weihang Su, Jianming Long, Qingyao Ai, Yichen Tang, Changyue Wang, Yiteng Tu, Yiqun Liu",
      venue:   "Preprint · arXiv:2604.24594",
      abstract:"Introduces the Skill Retrieval Augmentation (SRA) paradigm and the SR-Agents framework, letting agents dynamically retrieve and apply skills from a large corpus; ships SRA-Bench across six domains.",
      links:   { arxiv: "https://arxiv.org/abs/2604.24594", code: "https://github.com/oneal2000/SR-Agents", project: "https://sr-agents.github.io", data: "https://huggingface.co/datasets/WeihangSu/SRA-Bench" },
    },
    {
      year:    2025,
      title:   "Towards Unification of Hallucination Detection and Fact Verification for Large Language Models",
      authors: "Weihang Su, Jianming Long, Changyue Wang, Shiyu Lin, Jingyan Xu, Ziyi Ye, Qingyao Ai, Yiqun Liu",
      venue:   "Preprint · arXiv:2512.02772",
      abstract:"Bridges hallucination detection and fact verification under one unified evaluation framework (UniFact) and proposes a hybrid method that reaches state of the art across multiple datasets.",
      links:   { arxiv: "https://arxiv.org/abs/2512.02772", code: "https://github.com/oneal2000/UniFact" },
    },
  ],

  news: [
    { date: "2026.05", badge: "Spotlight", text: "MemoryBench was accepted to ICML 2026 as a Spotlight (top 2.2% of submissions)." },
    { date: "2026.04", badge: "Accepted",  text: "SurGE was accepted to SIGIR 2026 (Resource Track)." },
    { date: "2026.04", badge: "Preprint",  text: "Released Skill Retrieval Augmentation for Agentic AI." },
    { date: "2025.12", badge: "Preprint",  text: "Released Towards Unification of Hallucination Detection and Fact Verification for LLMs." },
  ],

  // 荣誉奖项（新增版块）
  honors: [
    { year: "2025",    title: "Dean's Nomination Award, 4th Zhili “Qingli Academic Festival”" },
    { year: "2024–25", title: "Tsinghua University Academic Excellence Scholarship (2023–24 & 2024–25)" },
    { year: "2024",    title: "First Prize, 40th National College Student Physics Competition (Non-physics Group A)" },
  ],

  education: [
    { period: "2023 – Present", degree: "B.S. in Information and Computing Science", institution: "Tsinghua University · Zhili College" },
  ],

  // ── 模板自带、当前用不到、保留备用（对应区块在 index.html 已注释）──
  experience: [],   // 实习/工作经历：以后有了再加，并取消 index.html 里 Experience 渲染
  projects: [],     // 项目：以后想展示在这里加，并取消 index.html 里 Projects 区块注释
};
