import { useEffect, useMemo, useState } from "react";

const defaultArticles = [
  {
    id: "morning-routine",
    title: "A Quiet Morning Routine",
    difficulty: "Easy",
    topic: "Life",
    minutes: 5,
    color: "#5d7f6f",
    summary:
      "A gentle article about starting the day slowly and noticing ordinary details.",
    paragraphs: [
      "Every morning, Lena opens the kitchen window before she checks her phone. The street below is still quiet, and the air feels cool against her face.",
      "She makes a cup of tea, waters the small basil plant on the table, and writes down one thing she wants to notice during the day.",
      "The routine only takes ten minutes, but it changes the shape of her morning. Instead of rushing into noise, she begins with attention."
    ]
  },
  {
    id: "corner-bookshop",
    title: "The Bookshop at the Corner",
    difficulty: "Easy",
    topic: "Culture",
    minutes: 6,
    color: "#c96f56",
    summary:
      "A short story about a small bookshop and the comfort of familiar places.",
    paragraphs: [
      "There was a tiny bookshop at the corner of Maple Street. Its doorbell made a soft silver sound whenever someone entered.",
      "The owner, Mr. Bell, remembered what his regular customers liked. He put travel books near the window for Anna and old mysteries on the wooden table for James.",
      "One rainy afternoon, a new student walked in and asked for something easy to read. Mr. Bell smiled and chose a thin novel with warm pages and a blue cover."
    ]
  },
  {
    id: "slow-reading",
    title: "The Value of Slow Reading",
    difficulty: "Medium",
    topic: "Culture",
    minutes: 7,
    color: "#d7a84f",
    summary:
      "An essay about why reading slowly can deepen attention and memory.",
    paragraphs: [
      "Many people read quickly because the internet rewards speed. We scan headlines, jump between tabs, and collect information before we have time to understand it.",
      "Slow reading asks for a different habit. It invites the reader to stay with one paragraph, return to a difficult sentence, and notice how an idea is built.",
      "This kind of reading may feel inefficient at first, but it often leaves a deeper mark. What we read slowly is more likely to become part of our thinking."
    ]
  },
  {
    id: "notifications-attention",
    title: "How Notifications Shape Our Attention",
    difficulty: "Medium",
    topic: "Technology",
    minutes: 8,
    color: "#5b7fa6",
    summary:
      "A practical article about how small digital interruptions influence daily focus.",
    paragraphs: [
      "A notification looks small, but it can change the direction of a whole afternoon. One bright sound pulls the mind away from a book, a conversation, or a quiet thought.",
      "The problem is not that messages exist. The problem is that many apps treat every update as urgent, even when the user is trying to focus.",
      "A healthier relationship with technology begins with simple choices: turning off unnecessary alerts, checking messages at planned times, and protecting moments of deep attention."
    ]
  },
  {
    id: "place-home",
    title: "What Makes a Place Feel Like Home",
    difficulty: "Hard",
    topic: "Life",
    minutes: 10,
    color: "#8b6f47",
    summary:
      "A reflective essay about memory, belonging, and the emotional meaning of places.",
    paragraphs: [
      "A place does not become home only because we sleep there. It becomes home through repeated gestures: the cup left beside the sink, the path from the door to the desk, the familiar sound of footsteps in the hall.",
      "Home is also built by memory. A room may seem ordinary to a visitor, but to the person who lives there, each corner can hold a small history of meals, phone calls, arguments, and quiet recoveries.",
      "This is why leaving a home can feel strangely difficult. We are not only leaving walls and furniture. We are leaving a version of ourselves that learned how to belong there."
    ]
  },
  {
    id: "deep-reading-future",
    title: "The Future of Deep Reading",
    difficulty: "Hard",
    topic: "Culture",
    minutes: 11,
    color: "#6f7d9a",
    summary:
      "A thoughtful article about whether deep reading can survive in a distracted digital culture.",
    paragraphs: [
      "Deep reading is more than understanding the meaning of words. It is the slow process of entering another mind, following an argument, and allowing uncertainty to remain long enough for insight to appear.",
      "In a culture of constant updates, this process can feel almost old-fashioned. Yet the ability to read deeply may become more important, not less, because it trains patience, interpretation, and independent judgment.",
      "The future of deep reading will not depend only on books. It will depend on whether readers can protect spaces of attention inside a world designed to divide it."
    ]
  }
];

const dictionary = {
  wander: "漫步；徘徊",
  gentle: "温和的；轻柔的",
  private: "私密的；个人的",
  noticed: "注意到",
  conversations: "谈话；交谈",
  familiar: "熟悉的",
  observe: "观察",
  convenient: "方便的",
  entire: "全部的；整个的",
  physical: "实体的；物理的",
  rhythm: "节奏",
  presence: "存在；在场",
  efficiency: "效率",
  invite: "邀请；引发",
  patience: "耐心",
  aggressively: "强烈地；咄咄逼人地",
  notifications: "通知",
  exhausting: "令人疲惫的",
  principle: "原则",
  interrupt: "打断",
  restraint: "克制",
  interface: "界面",
  intentions: "意图；打算",
  friction: "摩擦；阻力",
  clarity: "清晰",
  routine: "惯例；日常安排",
  basil: "罗勒",
  rushing: "匆忙行动",
  corner: "角落；街角",
  doorbell: "门铃",
  regular: "常来的；固定的",
  mysteries: "悬疑小说；谜团",
  novel: "小说",
  rewards: "奖励；回报",
  scan: "快速浏览",
  inefficient: "效率低的",
  notification: "通知",
  urgent: "紧急的",
  alerts: "提醒；警报",
  unnecessary: "不必要的",
  gestures: "动作；姿态",
  recoveries: "恢复；复原",
  belong: "属于；适应",
  uncertainty: "不确定性",
  insight: "洞见",
  interpretation: "解读；阐释",
  judgment: "判断力",
  distracted: "分心的"
};

const phraseDictionary = {
  "a quiet moment of reflection": "一段安静的反思时刻",
  "pay attention to small details": "留意细节",
  "make familiar places feel new": "让熟悉的地方显得新鲜",
  "slow down enough to notice": "慢下来，足以留意周围",
  "a different kind of attention": "另一种注意力",
  "create a slower rhythm": "创造一种更慢的节奏",
  "a personal relationship with reading": "与阅读之间的个人联结",
  "not efficiency but patience": "不是效率，而是耐心",
  "compete for attention": "争夺注意力",
  "remain available when needed": "在需要时保持可用",
  "return to their own intentions": "回到自己的意图",
  "with less friction and more clarity": "减少阻力并增加清晰感",
  "the main idea of the text": "文本的主要观点",
  "one detail that stands out": "一个突出的细节",
  "the author suggests that": "作者暗示 / 提出",
  "this passage made me think about": "这段文字让我想到",
  "begin with attention": "以专注开始",
  "the shape of her morning": "她早晨的状态 / 节奏",
  "a small act of noticing": "一个小小的观察动作",
  "a familiar place of comfort": "一个熟悉而舒适的地方",
  "regular customers": "老顾客；常客",
  "a thin novel with warm pages": "一本页色温暖的薄小说",
  "reward speed": "奖励速度",
  "return to a difficult sentence": "回到一个难句",
  "leave a deeper mark": "留下更深的印记",
  "change the direction of attention": "改变注意力的方向",
  "treat every update as urgent": "把每次更新都当作紧急事件",
  "protect moments of deep attention": "保护深度专注的时刻",
  "repeated gestures": "重复的日常动作",
  "hold a small history": "承载一小段历史",
  "learn how to belong": "学会如何产生归属感",
  "entering another mind": "进入另一个人的思想",
  "allowing uncertainty to remain": "允许不确定性停留",
  "protect spaces of attention": "保护注意力空间"
};

const aiPhraseBank = {
  "morning-routine": [
    "begin with attention",
    "the shape of her morning",
    "a small act of noticing",
    "slow down enough to notice"
  ],
  "corner-bookshop": [
    "a familiar place of comfort",
    "regular customers",
    "a thin novel with warm pages",
    "one detail that stands out"
  ],
  "slow-reading": [
    "reward speed",
    "return to a difficult sentence",
    "leave a deeper mark",
    "a different kind of attention"
  ],
  "notifications-attention": [
    "change the direction of attention",
    "treat every update as urgent",
    "protect moments of deep attention",
    "compete for attention"
  ],
  "place-home": [
    "repeated gestures",
    "hold a small history",
    "learn how to belong",
    "a familiar place of comfort"
  ],
  "deep-reading-future": [
    "entering another mind",
    "allowing uncertainty to remain",
    "protect spaces of attention",
    "independent judgment"
  ]
};

const aiRevisionTemplates = {
  "morning-routine":
    "This article describes how Lena begins her morning with a quiet routine. By making tea, caring for a plant, and choosing one thing to notice, she creates a calmer start to the day. The main idea is that small habits can help us begin with attention instead of noise.",
  "corner-bookshop":
    "This story is about a small bookshop that gives people a sense of comfort. Mr. Bell remembers his customers and chooses books for them with care. The article shows how a familiar place can make reading feel personal and welcoming.",
  "slow-reading":
    "This article explains the value of slow reading in a fast digital world. Instead of scanning quickly, slow reading asks us to stay with difficult sentences and notice how ideas are built. The main idea is that slower reading can leave a deeper mark on our thinking.",
  "notifications-attention":
    "This article discusses how notifications shape our attention. Small alerts can pull us away from books, conversations, and quiet thoughts. The writer suggests that we can protect deep attention by turning off unnecessary alerts and checking messages at planned times.",
  "place-home":
    "This essay reflects on what makes a place feel like home. Home is created through repeated gestures, familiar sounds, and memories held in ordinary rooms. The article suggests that leaving home is difficult because we also leave a version of ourselves behind.",
  "deep-reading-future":
    "This article explores the future of deep reading in a distracted digital culture. Deep reading requires patience, uncertainty, and the ability to follow another mind. The main idea is that readers must protect spaces of attention if deep reading is going to survive."
};

function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function normalizeWord(word) {
  return word.toLowerCase().replace(/[^a-z']/g, "");
}

function estimateMeaning(word) {
  return dictionary[word] || phraseDictionary[word] || "暂未收录释义，可以先按自己的查询结果记忆";
}

function sentenceForWord(article, word) {
  const sentences = article.paragraphs.flatMap(
    (paragraph) => paragraph.match(/[^.!?]+[.!?]/g) || [paragraph]
  );
  return (
    sentences.find((sentence) => sentence.toLowerCase().includes(word.toLowerCase())) ||
    article.paragraphs[0]
  ).trim();
}

function sentenceZh(sentence) {
  const known = {
    "Every morning, Lena opens the kitchen window before she checks her phone.":
      "每天早晨，Lena 在查看手机之前会先打开厨房窗户。",
    "The street below is still quiet, and the air feels cool against her face.":
      "楼下的街道仍然很安静，空气拂过她的脸，感觉很凉爽。",
    "She makes a cup of tea, waters the small basil plant on the table, and writes down one thing she wants to notice during the day.":
      "她泡一杯茶，给桌上的小罗勒浇水，并写下一件她当天想要留意的事情。",
    "The routine only takes ten minutes, but it changes the shape of her morning.":
      "这个日常安排只花十分钟，却改变了她早晨的状态。",
    "Instead of rushing into noise, she begins with attention.":
      "她不是匆忙进入喧闹，而是以专注开始一天。",
    "There was a tiny bookshop at the corner of Maple Street.":
      "Maple Street 的街角有一家很小的书店。",
    "Its doorbell made a soft silver sound whenever someone entered.":
      "每当有人进门时，门铃都会发出轻柔清亮的声音。",
    "Slow reading asks for a different habit.":
      "慢阅读需要一种不同的习惯。",
    "A notification looks small, but it can change the direction of a whole afternoon.":
      "一条通知看起来很小，却可能改变整个下午的注意力方向。",
    "Deep reading is more than understanding the meaning of words.":
      "深度阅读不只是理解词语的意思。"
  };

  if (known[sentence]) return known[sentence];
  const normalized = sentence.replace(/\s+/g, " ").trim();
  return `参考译文：${normalized}`;
}

function grammarExplanation(sentence) {
  const trimmed = sentence.trim();
  const explanations = [];

  if (/, and /.test(trimmed)) {
    explanations.push("并列结构：句中使用 and 连接两个动作或分句，用来表达连续发生或并列的信息。");
  }
  if (/\bbefore\b/i.test(trimmed)) {
    explanations.push("时间状语从句：before 引导从句，说明主句动作发生的时间顺序。");
  }
  if (/\bbut\b/i.test(trimmed)) {
    explanations.push("转折结构：but 连接前后两个意思形成对比，后半句通常是作者想强调的信息。");
  }
  if (/\bwhenever\b/i.test(trimmed)) {
    explanations.push("时间状语从句：whenever 表示“每当……”，强调动作反复发生。");
  }
  if (/\bthat\b/i.test(trimmed)) {
    explanations.push("从句结构：that 可能引导名词性从句或定语从句，需要结合前面的名词或动词理解。");
  }
  if (/\bnot only\b|\bmore than\b/i.test(trimmed)) {
    explanations.push("强调结构：not only / more than 用来扩展或强化句子的核心观点。");
  }
  if (/\bto\s+[a-z]+/i.test(trimmed)) {
    explanations.push("不定式结构：to + 动词原形常表示目的、结果或后置修饰。");
  }

  if (explanations.length === 0) {
    explanations.push("基础句型：可以先找主语、谓语和宾语，再看介词短语或副词短语补充了什么信息。");
  }

  return explanations;
}

function cleanPdfString(value) {
  return value
    .replace(/\\\)/g, ")")
    .replace(/\\\(/g, "(")
    .replace(/\\n/g, " ")
    .replace(/\\r/g, " ")
    .replace(/\\t/g, " ")
    .replace(/\\\\/g, "\\")
    .replace(/\s+/g, " ")
    .trim();
}

function extractPdfText(buffer) {
  const raw = new TextDecoder("latin1").decode(buffer);
  const chunks = [];
  const tjPattern = /\(([^()]|\\[()nrtbf\\]){2,}\)\s*Tj/g;
  const tjArrayPattern = /\[((?:\s*\((?:[^()]|\\[()nrtbf\\])+\)\s*-?\d*)+)\]\s*TJ/g;

  for (const match of raw.matchAll(tjPattern)) {
    chunks.push(cleanPdfString(match[0].replace(/\)\s*Tj$/, "").slice(1)));
  }

  for (const match of raw.matchAll(tjArrayPattern)) {
    const textParts = [];
    for (const part of match[1].matchAll(/\(([^()]|\\[()nrtbf\\])+\)/g)) {
      textParts.push(cleanPdfString(part[0].slice(1, -1)));
    }
    if (textParts.length) chunks.push(textParts.join(""));
  }

  return chunks
    .join(" ")
    .replace(/[^\x20-\x7E\s.,!?;:'"()-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function paragraphsFromText(text, fileName) {
  if (text.length < 80) {
    return [
      `${fileName} has been imported as a reading item.`,
      "This MVP uses lightweight local PDF parsing. If the PDF is scanned or heavily compressed, the text may not be fully extracted yet.",
      "You can still use this item to plan the reading flow, and a later version can connect a full PDF parser for richer import."
    ];
  }

  const sentences = text.slice(0, 18000).match(/[^.!?]+[.!?]+/g) || [text.slice(0, 18000)];
  const paragraphs = [];
  for (let index = 0; index < sentences.length; index += 4) {
    const paragraph = sentences.slice(index, index + 4).join(" ").replace(/\s+/g, " ").trim();
    if (paragraph.length > 40) paragraphs.push(paragraph);
  }
  return paragraphs.slice(0, 18);
}

function colorForFileName(fileName) {
  const palette = ["#5d7f6f", "#c96f56", "#5b7fa6", "#8b6f47", "#6f7d9a"];
  const sum = Array.from(fileName).reduce((total, char) => total + char.charCodeAt(0), 0);
  return palette[sum % palette.length];
}

function buildAiSuggestion(summary, article) {
  const phrases = aiPhraseBank[article.id] || [
    "the main idea of the text",
    "one detail that stands out",
    "the author suggests that",
    "this passage made me think about"
  ];
  const revisedText =
    aiRevisionTemplates[article.id] ||
    `This text mainly discusses ${article.title}. One detail that stands out is connected to the reader's understanding of the topic. The passage made me think more carefully about the main idea of the text.`;

  return {
    revisedText,
    note: summary.trim()
      ? "这版把表达压缩得更清楚，并加入了几个适合复用的短语。"
      : "你还没有输入 summary，下面先给出一版参考写法。",
    phrases: phrases.map((text) => ({ text, meaningZh: estimateMeaning(text) }))
  };
}

function wrapSvgText(text, maxChars = 54) {
  const words = text.replace(/\s+/g, " ").trim().split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const nextLine = `${line} ${word}`.trim();
    if (nextLine.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = nextLine;
    }
  });
  if (line) lines.push(line);
  return lines.slice(0, 4);
}

function memoryTheme(text) {
  const normalized = text.toLowerCase();
  if (/city|street|walk|cafe|window|apartment/.test(normalized)) {
    return { name: "City Walk", bg: "#e9f1ec", accent: "#c96f56", second: "#5d7f6f", object: "city" };
  }
  if (/book|paper|library|reader|page|shelf/.test(normalized)) {
    return { name: "Reading Desk", bg: "#f4efe6", accent: "#d7a84f", second: "#33564a", object: "book" };
  }
  if (/technology|digital|tool|screen|interface|notification/.test(normalized)) {
    return { name: "Quiet Technology", bg: "#eaf0f7", accent: "#5b7fa6", second: "#5d7f6f", object: "tech" };
  }
  return { name: "Memory Scene", bg: "#eef4f1", accent: "#5d7f6f", second: "#c96f56", object: "idea" };
}

function objectSvg(theme) {
  if (theme.object === "city") {
    return `<rect x="70" y="150" width="70" height="150" rx="6" fill="${theme.second}" opacity="0.92"/><rect x="158" y="115" width="95" height="185" rx="8" fill="${theme.accent}" opacity="0.88"/><rect x="270" y="170" width="72" height="130" rx="6" fill="#ffffff" opacity="0.9"/><circle cx="440" cy="162" r="38" fill="#f6d78d"/><path d="M62 314 C180 286 318 348 538 304" fill="none" stroke="${theme.second}" stroke-width="12" stroke-linecap="round" opacity="0.48"/>`;
  }
  if (theme.object === "book") {
    return `<rect x="100" y="166" width="180" height="114" rx="10" fill="#ffffff" stroke="${theme.second}" stroke-width="5"/><rect x="280" y="166" width="180" height="114" rx="10" fill="#ffffff" stroke="${theme.second}" stroke-width="5"/><path d="M280 168 L280 282" stroke="${theme.second}" stroke-width="5"/><path d="M130 198 H248 M130 224 H238 M312 198 H428 M312 224 H408" stroke="${theme.accent}" stroke-width="6" stroke-linecap="round"/><circle cx="488" cy="132" r="30" fill="${theme.accent}" opacity="0.72"/>`;
  }
  if (theme.object === "tech") {
    return `<rect x="120" y="130" width="300" height="170" rx="18" fill="#ffffff" stroke="${theme.second}" stroke-width="6"/><rect x="150" y="166" width="112" height="18" rx="9" fill="${theme.accent}" opacity="0.74"/><rect x="150" y="205" width="210" height="16" rx="8" fill="${theme.second}" opacity="0.28"/><rect x="150" y="238" width="168" height="16" rx="8" fill="${theme.second}" opacity="0.28"/><circle cx="456" cy="144" r="24" fill="${theme.accent}" opacity="0.5"/>`;
  }
  return `<circle cx="260" cy="206" r="82" fill="${theme.accent}" opacity="0.72"/><circle cx="342" cy="168" r="48" fill="${theme.second}" opacity="0.52"/><path d="M194 304 C250 252 352 252 424 304" fill="none" stroke="${theme.second}" stroke-width="12" stroke-linecap="round" opacity="0.55"/>`;
}

function generateMemoryImage(item) {
  const theme = memoryTheme(`${item.word} ${item.sentence}`);
  const lines = wrapSvgText(item.sentence, 56);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420">
      <rect width="640" height="420" rx="24" fill="${theme.bg}"/>
      <circle cx="560" cy="76" r="70" fill="${theme.accent}" opacity="0.18"/>
      <circle cx="92" cy="78" r="46" fill="${theme.second}" opacity="0.16"/>
      ${objectSvg(theme)}
      <rect x="44" y="34" width="552" height="84" rx="16" fill="#ffffff" opacity="0.9"/>
      <text x="68" y="68" fill="#1f2933" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700">${item.type === "phrase" ? "Phrase Scene" : "Word Scene"} / ${theme.name}</text>
      <text x="68" y="100" fill="${theme.second}" font-family="Georgia, serif" font-size="30" font-weight="700">${item.word}</text>
      <text x="390" y="98" fill="#667085" font-family="Inter, Arial, sans-serif" font-size="17">${item.meaningZh}</text>
      <rect x="44" y="322" width="552" height="64" rx="16" fill="#ffffff" opacity="0.92"/>
      ${lines.map((line, index) => `<text x="68" y="${348 + index * 18}" fill="#334155" font-family="Inter, Arial, sans-serif" font-size="14">${line}</text>`).join("")}
    </svg>`;
  return {
    src: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    prompt: `Imagine "${item.word}" through this sentence: ${item.sentence}`,
    createdAt: new Date().toISOString()
  };
}

function App() {
  const [view, setView] = useState("library");
  const [importedArticles, setImportedArticles] = useState(() => readStorage("readBridgeImportedArticles", []));
  const [words, setWords] = useState(() => readStorage("readBridgeWords", []));
  const [summaries, setSummaries] = useState(() => readStorage("readBridgeSummaries", []));
  const [records, setRecords] = useState(() => readStorage("readBridgeRecords", []));
  const [selectedArticleId, setSelectedArticleId] = useState(defaultArticles[0].id);
  const [difficulty, setDifficulty] = useState("All");
  const [topic, setTopic] = useState("All");
  const [summaryText, setSummaryText] = useState("");
  const [aiSuggestion, setAiSuggestion] = useState(null);
  const [reviewFilter, setReviewFilter] = useState("All");
  const [activeParagraph, setActiveParagraph] = useState(0);
  const [audioScope, setAudioScope] = useState("article");
  const [speechRate, setSpeechRate] = useState(0.95);
  const [voices, setVoices] = useState([]);
  const [voiceIndex, setVoiceIndex] = useState("");
  const [audioStatus, setAudioStatus] = useState("选择播放后，浏览器会朗读当前文章。");
  const [importStatus, setImportStatus] = useState("");
  const [wordLookup, setWordLookup] = useState(null);
  const [sentenceLookup, setSentenceLookup] = useState(null);

  const articles = useMemo(() => [...defaultArticles, ...importedArticles], [importedArticles]);
  const selectedArticle = articles.find((article) => article.id === selectedArticleId) || articles[0];
  const filteredArticles = articles.filter((article) => {
    const difficultyMatch = difficulty === "All" || article.difficulty === difficulty;
    const topicMatch = topic === "All" || article.topic === topic;
    return difficultyMatch && topicMatch;
  });
  const currentWords = words.filter((item) => item.articleId === selectedArticle.id);
  const savedWordSet = new Set(currentWords.map((item) => item.word));
  const reviewWords = words.filter((item) => reviewFilter === "All" || item.articleId === reviewFilter);

  useEffect(() => localStorage.setItem("readBridgeImportedArticles", JSON.stringify(importedArticles)), [importedArticles]);
  useEffect(() => localStorage.setItem("readBridgeWords", JSON.stringify(words)), [words]);
  useEffect(() => localStorage.setItem("readBridgeSummaries", JSON.stringify(summaries)), [summaries]);
  useEffect(() => localStorage.setItem("readBridgeRecords", JSON.stringify(records)), [records]);

  useEffect(() => {
    const savedSummary = summaries.find((item) => item.articleId === selectedArticle.id);
    setSummaryText(savedSummary?.content || "");
    setAiSuggestion(null);
    setActiveParagraph(0);
    setWordLookup(null);
    setSentenceLookup(null);
    stopAudio();
    setAudioStatus("选择播放后，浏览器会朗读当前文章。");
  }, [selectedArticle.id]);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    const loadVoices = () => {
      const available = window.speechSynthesis.getVoices();
      const english = available.filter((voice) => voice.lang.toLowerCase().startsWith("en"));
      setVoices(english.length ? english : available);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection?.();
      const selectedText = selection?.toString().replace(/\s+/g, " ").trim();
      if (!selectedText || selectedText.length < 8) return;

      const anchorNode = selection.anchorNode;
      const anchorElement = anchorNode?.nodeType === Node.TEXT_NODE ? anchorNode.parentElement : anchorNode;
      if (!anchorElement?.closest?.(".article-content")) return;

      setSentenceLookup({
        sentence: selectedText,
        meaningZh: sentenceZh(selectedText),
        grammar: grammarExplanation(selectedText)
      });
    };

    document.addEventListener("mouseup", handleSelection);
    document.addEventListener("keyup", handleSelection);
    return () => {
      document.removeEventListener("mouseup", handleSelection);
      document.removeEventListener("keyup", handleSelection);
    };
  }, [selectedArticle.id]);

  function stopAudio() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }

  function playAudio() {
    if (!("speechSynthesis" in window)) {
      setAudioStatus("当前浏览器不支持本地朗读。");
      return;
    }
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setAudioStatus("正在继续朗读。");
      return;
    }
    stopAudio();
    const text = audioScope === "paragraph" ? selectedArticle.paragraphs[activeParagraph] : selectedArticle.paragraphs.join(" ");
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices[Number(voiceIndex)];
    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.lang = selectedVoice?.lang || "en-US";
    utterance.rate = Number(speechRate);
    utterance.onstart = () => setAudioStatus(audioScope === "paragraph" ? `正在朗读第 ${activeParagraph + 1} 段。` : `正在朗读 ${selectedArticle.title}。`);
    utterance.onend = () => setAudioStatus("朗读结束。");
    utterance.onerror = () => setAudioStatus("朗读被中断，可以重新点击播放。");
    window.speechSynthesis.speak(utterance);
  }

  function pauseAudio() {
    if ("speechSynthesis" in window && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setAudioStatus("已暂停朗读。");
    }
  }

  function addWord(word) {
    if (words.some((item) => item.articleId === selectedArticle.id && item.word === word)) return;
    setWords((items) => [
      ...items,
      {
        id: `${selectedArticle.id}-${word}-${Date.now()}`,
        word,
        meaningZh: estimateMeaning(word),
        sentence: sentenceForWord(selectedArticle, word),
        articleId: selectedArticle.id,
        articleTitle: selectedArticle.title,
        reviewed: false,
        createdAt: new Date().toISOString()
      }
    ]);
  }

  function showWordLookup(word, sentence) {
    setWordLookup({
      word,
      meaningZh: estimateMeaning(word),
      sentence,
      alreadySaved: words.some((item) => item.articleId === selectedArticle.id && item.word === word)
    });
  }

  function analyzeSelectedSentence(fallbackSentence) {
    const selectedText = window.getSelection?.().toString().replace(/\s+/g, " ").trim();
    const sentence = selectedText || fallbackSentence;
    if (!sentence || sentence.length < 8) return;
    setSentenceLookup({
      sentence,
      meaningZh: sentenceZh(sentence),
      grammar: grammarExplanation(sentence)
    });
  }

  function saveSummary() {
    const content = summaryText.trim();
    if (!content) return;
    setSummaries((items) => {
      const existing = items.find((item) => item.articleId === selectedArticle.id);
      if (existing) {
        return items.map((item) =>
          item.articleId === selectedArticle.id
            ? { ...item, content, updatedAt: new Date().toISOString() }
            : item
        );
      }
      return [
        ...items,
        {
          id: `${selectedArticle.id}-summary-${Date.now()}`,
          articleId: selectedArticle.id,
          articleTitle: selectedArticle.title,
          content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];
    });
  }

  function markRead() {
    if (records.some((record) => record.articleId === selectedArticle.id)) return;
    setRecords((items) => [
      ...items,
      {
        id: `${selectedArticle.id}-record-${Date.now()}`,
        articleId: selectedArticle.id,
        articleTitle: selectedArticle.title,
        completed: true,
        completedAt: new Date().toISOString()
      }
    ]);
  }

  function addPhrase(phrase) {
    if (!aiSuggestion || words.some((item) => item.articleId === selectedArticle.id && item.word === phrase.text)) return;
    setWords((items) => [
      ...items,
      {
        id: `${selectedArticle.id}-phrase-${Date.now()}`,
        word: phrase.text,
        meaningZh: phrase.meaningZh,
        sentence: aiSuggestion.revisedText,
        articleId: selectedArticle.id,
        articleTitle: `${selectedArticle.title} / AI 修改稿`,
        reviewed: false,
        type: "phrase",
        createdAt: new Date().toISOString()
      }
    ]);
  }

  async function importPdf(file) {
    if (!file || !file.name.toLowerCase().endsWith(".pdf")) {
      setImportStatus("请选择 PDF 文件。");
      return;
    }
    setImportStatus(`正在导入 ${file.name}...`);
    const buffer = await file.arrayBuffer();
    const text = extractPdfText(buffer);
    const title = file.name.replace(/\.pdf$/i, "");
    const paragraphs = paragraphsFromText(text, file.name);
    const article = {
      id: `pdf-${Date.now()}`,
      title,
      difficulty: "Imported",
      topic: "My PDF",
      minutes: Math.max(3, Math.ceil(paragraphs.join(" ").split(/\s+/).length / 180)),
      color: colorForFileName(file.name),
      summary: text.length >= 80 ? `Imported from ${file.name}.` : `Imported from ${file.name}. Text extraction is limited in this prototype.`,
      paragraphs,
      source: "PDF",
      fileName: file.name,
      importedAt: new Date().toISOString()
    };
    setImportedArticles((items) => [article, ...items]);
    setSelectedArticleId(article.id);
    setDifficulty("All");
    setTopic("All");
    setImportStatus(text.length >= 80 ? `已导入 ${file.name}，并提取出可阅读文本。` : `已导入 ${file.name}。这个 PDF 可能是扫描版，当前只能生成阅读占位内容。`);
  }

  function updateMemoryImage(id) {
    setWords((items) =>
      items.map((item) => (item.id === id ? { ...item, memoryImage: generateMemoryImage(item) } : item))
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">R</div>
          <div>
            <div className="brand-name">ReadBridge</div>
            <div className="brand-subtitle">兴趣阅读助手</div>
          </div>
        </div>
        <nav className="nav" aria-label="主导航">
          {[
            ["library", "文章"],
            ["review", "生词本"],
            ["records", "阅读记录"]
          ].map(([key, label]) => (
            <button key={key} className={`nav-item ${view === key ? "active" : ""}`} onClick={() => setView(key)} type="button">
              {label}
            </button>
          ))}
        </nav>
        <section className="sidebar-panel">
          <h2>阅读闭环</h2>
          <ol>
            <li>选择一篇文章</li>
            <li>点击生词收藏</li>
            <li>写 3-5 句 summary</li>
            <li>带着语境复习</li>
          </ol>
        </section>
      </aside>

      <main className="main">
        <section className="topbar">
          <div>
            <p className="eyebrow">MVP Prototype</p>
            <h1>在阅读里自然积累英语</h1>
          </div>
          <div className="stats-strip" aria-label="学习统计">
            <div><strong>{records.length}</strong><span>已读文章</span></div>
            <div><strong>{words.length}</strong><span>收藏生词</span></div>
            <div><strong>{summaries.length}</strong><span>Summary</span></div>
          </div>
        </section>

        {view === "library" && (
          <section className="view view-active">
            <div className="library-layout">
              <section className="article-browser">
                <label
                  className="pdf-dropzone"
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => {
                    event.preventDefault();
                    importPdf(event.dataTransfer.files?.[0]);
                  }}
                >
                  <input type="file" accept="application/pdf,.pdf" hidden onChange={(event) => importPdf(event.target.files?.[0])} />
                  <div>
                    <strong>导入自己的 PDF</strong>
                    <p>拖入 PDF，或点击选择文件。导入后会出现在文章列表里。</p>
                  </div>
                  <span className="secondary-button small">选择 PDF</span>
                </label>
                <div className="import-status">{importStatus}</div>

                <div className="filters" aria-label="文章筛选">
                  <FilterGroup label="难度" value={difficulty} setValue={setDifficulty} options={["All", "Easy", "Medium", "Hard", "Imported"]} />
                  <FilterGroup label="主题" value={topic} setValue={setTopic} options={["All", "Life", "Culture", "Technology", "My PDF"]} />
                </div>

                <div className="article-list">
                  {filteredArticles.map((article) => (
                    <button
                      key={article.id}
                      className={`article-card ${article.id === selectedArticle.id ? "active" : ""}`}
                      onClick={() => setSelectedArticleId(article.id)}
                      type="button"
                    >
                      <span className="cover" style={{ "--cover-color": article.color }} />
                      <span>
                        <h3>{article.title}</h3>
                        <p>{article.summary}</p>
                        <span className="meta-row">
                          <span className="tag">{article.difficulty}</span>
                          <span className="tag">{article.topic}</span>
                          <span className="tag">{article.minutes} min</span>
                          {article.source && <span className="tag">{article.source}</span>}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              <article className="reader-panel">
                <div className="reader-visual" aria-hidden="true">
                  <div className="book-stack"><span /><span /><span /></div>
                  <div className="reading-line" />
                </div>
                <div className="reader-header">
                  <div>
                    <p className="eyebrow">{selectedArticle.difficulty} / {selectedArticle.topic} / {selectedArticle.minutes} min</p>
                    <h2>{selectedArticle.title}</h2>
                  </div>
                  <button className="primary-button" onClick={markRead} type="button">标记已读</button>
                </div>
                <p className="article-summary">{selectedArticle.summary}</p>

                <section className="audio-panel" aria-label="文章朗读">
                  <div className="section-heading">
                    <div><p className="eyebrow">Audio Reading</p><h3>听读这篇文章</h3></div>
                    <div className="audio-actions">
                      <button className="primary-button small" onClick={playAudio} type="button">播放</button>
                      <button className="secondary-button small" onClick={pauseAudio} type="button">暂停</button>
                      <button className="secondary-button small" onClick={() => { stopAudio(); setAudioStatus("已停止朗读。"); }} type="button">停止</button>
                    </div>
                  </div>
                  <div className="audio-controls">
                    <label>范围
                      <select value={audioScope} onChange={(event) => setAudioScope(event.target.value)}>
                        <option value="article">整篇文章</option>
                        <option value="paragraph">当前段落</option>
                      </select>
                    </label>
                    <label>声音
                      <select value={voiceIndex} onChange={(event) => setVoiceIndex(event.target.value)}>
                        <option value="">Default voice</option>
                        {voices.map((voice, index) => <option key={`${voice.name}-${voice.lang}`} value={index}>{voice.name} ({voice.lang})</option>)}
                      </select>
                    </label>
                    <label>语速
                      <input type="range" min="0.7" max="1.2" value={speechRate} step="0.05" onChange={(event) => setSpeechRate(event.target.value)} />
                      <span>{Number(speechRate).toFixed(2)}x</span>
                    </label>
                  </div>
                  <p className="audio-status">{audioStatus}</p>
                </section>

                <div className="article-content" aria-label="英文文章正文">
                  {selectedArticle.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={`${selectedArticle.id}-${paragraphIndex}`}
                      className={`readable-paragraph ${activeParagraph === paragraphIndex ? "active" : ""}`}
                      onClick={() => {
                        setActiveParagraph(paragraphIndex);
                        if (audioScope === "paragraph") setAudioStatus(`已选择第 ${paragraphIndex + 1} 段。`);
                      }}
                      onMouseUp={() => analyzeSelectedSentence("")}
                    >
                      {paragraph.split(/(\s+)/).map((token, index) => {
                        const word = normalizeWord(token);
                        if (!word) return token;
                        const tokenSentence = sentenceForWord(selectedArticle, word);
                        return (
                          <span
                            key={`${word}-${index}`}
                            className={`word-token ${savedWordSet.has(word) ? "saved" : ""}`}
                            onClick={(event) => {
                              event.stopPropagation();
                              showWordLookup(word, tokenSentence);
                            }}
                          >
                            {token}
                          </span>
                        );
                      })}
                    </p>
                  ))}
                </div>

              </article>

              <aside className="context-panel">
                <section className="lookup-panel">
                  <div className="section-heading compact">
                    <h3>单词查询</h3>
                    {wordLookup && <span>{wordLookup.alreadySaved ? "已存" : "可存"}</span>}
                  </div>
                  {!wordLookup ? (
                    <p className="muted-text">点击正文中的单词，可以查看释义并选择是否加入生词本。</p>
                  ) : (
                    <div className="lookup-content">
                      <strong>{wordLookup.word}</strong>
                      <p>{wordLookup.meaningZh}</p>
                      <p className="sentence">"{wordLookup.sentence}"</p>
                      <button
                        className="primary-button small"
                        disabled={wordLookup.alreadySaved}
                        onClick={() => {
                          addWord(wordLookup.word);
                          setWordLookup((item) => item ? { ...item, alreadySaved: true } : item);
                        }}
                        type="button"
                      >
                        {wordLookup.alreadySaved ? "已加入生词本" : "加入生词本"}
                      </button>
                    </div>
                  )}
                </section>

                <section className="lookup-panel">
                  <div className="section-heading compact">
                    <h3>句子理解</h3>
                    <span>语法</span>
                  </div>
                  {!sentenceLookup ? (
                    <p className="muted-text">选中一句英文，可以查看中文参考和语法结构说明。</p>
                  ) : (
                    <div className="lookup-content">
                      <p className="sentence">"{sentenceLookup.sentence}"</p>
                      <strong>中文参考</strong>
                      <p>{sentenceLookup.meaningZh}</p>
                      <strong>语法结构</strong>
                      <ul className="grammar-list">
                        {sentenceLookup.grammar.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>

                <section className="summary-box side-summary">
                  <div className="section-heading">
                    <div><p className="eyebrow">After Reading</p><h3>写 summary</h3></div>
                    <button className="secondary-button small" onClick={saveSummary} type="button">保存</button>
                  </div>
                  <div className="prompt-row">
                    <span>Main idea?</span>
                    <span>One detail?</span>
                    <span>Your thought?</span>
                  </div>
                  <textarea value={summaryText} onChange={(event) => setSummaryText(event.target.value)} rows="6" placeholder="Write 3-5 sentences in English..." />
                  <div className="ai-helper">
                    <div className="section-heading">
                      <div><p className="eyebrow">Prototype AI Helper</p><h3>修改示例</h3></div>
                      <button className="primary-button small" onClick={() => setAiSuggestion(buildAiSuggestion(summaryText, selectedArticle))} type="button">查看示例</button>
                    </div>
                    <div className="ai-result">
                      {!aiSuggestion ? (
                        <p>当前为原型模拟。正式版本会根据你的 summary 实时生成修改建议，并提取可收藏的短语或句型。</p>
                      ) : (
                        <>
                          <div className="revision-card">
                            <div className="revision-label">原型修改示例</div>
                            <p>{aiSuggestion.revisedText}</p>
                            <button className="secondary-button small" onClick={() => setSummaryText(aiSuggestion.revisedText)} type="button">使用修改稿</button>
                          </div>
                          <p className="ai-note">{aiSuggestion.note}</p>
                          <div className="phrase-bank">
                            {aiSuggestion.phrases.map((phrase) => (
                              <button className="phrase-chip" key={phrase.text} onClick={() => addPhrase(phrase)} type="button">
                                <span>{phrase.text}</span>
                                <small>{phrase.meaningZh}</small>
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </section>

                <section>
                  <div className="section-heading compact"><h3>本文生词</h3><span>{currentWords.length}</span></div>
                  <div className="word-list">
                    {currentWords.length === 0 ? <div className="empty-state">还没有收藏本文生词。</div> : currentWords.map((item) => (
                      <div className="word-item" key={item.id}>
                        <strong>{item.word}</strong>
                        <p>{item.meaningZh}</p>
                        {item.type === "phrase" && <p>{item.sentence}</p>}
                      </div>
                    ))}
                  </div>
                </section>
                <section className="hint-panel">
                  <h3>阅读小提示</h3>
                  <p>点击正文里的英文单词即可收藏。系统会保存单词、释义、原句和来源文章。</p>
                </section>
              </aside>
            </div>
          </section>
        )}

        {view === "review" && (
          <section className="view view-active">
            <div className="page-header">
              <div><p className="eyebrow">Review</p><h2>带着原句复习生词</h2></div>
              <select value={reviewFilter} onChange={(event) => setReviewFilter(event.target.value)} aria-label="按文章筛选生词">
                <option value="All">全部文章</option>
                {articles.map((article) => <option key={article.id} value={article.id}>{article.title}</option>)}
              </select>
            </div>
            <div className="review-grid">
              {reviewWords.length === 0 ? <div className="empty-state">生词本还是空的。回到文章里点击单词试试看。</div> : reviewWords.map((item) => (
                <article className="review-card" key={item.id}>
                  <h3>{item.word}</h3>
                  <p>{item.meaningZh}</p>
                  <p className="sentence">"{item.sentence}"</p>
                  {item.memoryImage && (
                    <figure className="memory-scene">
                      <img src={item.memoryImage.src} alt={`${item.word} memory scene`} />
                      <figcaption>{item.memoryImage.prompt}</figcaption>
                    </figure>
                  )}
                  <div className="memory-actions">
                    <button className="secondary-button small" onClick={() => updateMemoryImage(item.id)} type="button">
                      {item.memoryImage ? "重新生成画面" : "生成画面"}
                    </button>
                    {item.memoryImage && <a className="download-link" href={item.memoryImage.src} download={`${item.word}-memory-scene.svg`}>下载图片</a>}
                  </div>
                  <footer>
                    <span className="tag">{item.articleTitle}</span>
                    <button className="secondary-button small" onClick={() => setWords((items) => items.map((word) => word.id === item.id ? { ...word, reviewed: !word.reviewed } : word))} type="button">
                      {item.reviewed ? "取消已复习" : "标记已复习"}
                    </button>
                  </footer>
                  {item.type === "phrase" && <p className="reviewed">短语 / 句型</p>}
                  {item.reviewed && <p className="reviewed">已复习</p>}
                </article>
              ))}
            </div>
          </section>
        )}

        {view === "records" && (
          <section className="view view-active">
            <div className="page-header"><div><p className="eyebrow">Records</p><h2>你的阅读足迹</h2></div></div>
            <div className="record-layout">
              <section className="record-panel">
                <h3>最近阅读</h3>
                {records.length === 0 ? <div className="empty-state">还没有完成阅读记录。</div> : (
                  <div className="record-stack">{records.slice().reverse().map((record) => (
                    <div className="record-item" key={record.id}><strong>{record.articleTitle}</strong><p>{new Date(record.completedAt).toLocaleString()}</p></div>
                  ))}</div>
                )}
              </section>
              <section className="record-panel">
                <h3>最近 Summary</h3>
                {summaries.length === 0 ? <div className="empty-state">还没有保存 summary。</div> : (
                  <div className="record-stack">{summaries.slice().reverse().map((summary) => (
                    <div className="record-item" key={summary.id}><strong>{summary.articleTitle}</strong><p>{summary.content}</p></div>
                  ))}</div>
                )}
              </section>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function FilterGroup({ label, value, setValue, options }) {
  return (
    <div className="filter-group">
      <span>{label}</span>
      {options.map((option) => (
        <button key={option} className={`chip ${value === option ? "active" : ""}`} onClick={() => setValue(option)} type="button">
          {option === "All" ? "全部" : option}
        </button>
      ))}
    </div>
  );
}

export default App;
