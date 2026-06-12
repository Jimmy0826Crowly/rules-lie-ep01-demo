const assets = {
  city: "./assets/city-overlook.png",
  street: "./assets/rule-street.png",
  corridor: "./assets/corridor.png",
  home: "./assets/home-interior.png",
  door: "./assets/door.png",
  guanyu: "./assets/zhu-guanyu.png",
  guanyuExpr: "./assets/zhu-guanyu-expr.png",
  xiaoman: "./assets/zhu-xiaoman.png",
  note: "./assets/note.png",
  hairTie: "./assets/hair-tie.png",
  candy: "./assets/candy.png",
  tanTian: "./assets/tan-tian.png",
  zhenHan: "./assets/zhen-han.png",
  maYiming: "./assets/ma-yiming.png",
};

const clueBook = [
  { id: "hairTie", name: "黄色发绳", desc: "小满留下的软肋。", img: assets.hairTie },
  { id: "note", name: "小满纸条", desc: "她知道今晚会发生。", img: assets.note },
  { id: "secondLine", name: "第二行", desc: "只有朱冠宇看得见。", img: assets.door },
  { id: "openRule", name: "开门者活", desc: "广播规则的反面。", img: assets.door },
  { id: "emptyCity", name: "空城", desc: "闭门者被收走。", img: assets.city },
  { id: "intactDoors", name: "完好大门", desc: "幸存本身成了罪证。", img: assets.corridor },
];

const scenes = [
  {
    id: 1,
    time: "0-4s",
    part: "Part A",
    title: "红字砸城",
    bg: "city",
    className: "crimson",
    speaker: "广播",
    tone: "失真平稳",
    line: "日落后，紧闭门窗。",
    sub: "半句「请勿相信第二——」被杂音掐断。",
    caption: "黄昏城市上空，巨型红字炸开，红光扫过楼群。",
    rule: "日落后，紧闭门窗。",
    danger: 12,
    hero: "未登场",
  },
  {
    id: 2,
    time: "4-9s",
    part: "Part A",
    title: "街道恐慌",
    bg: "street",
    className: "crimson",
    speaker: "路人甲",
    tone: "嘶喊",
    line: "跑啊——！",
    sub: "恐慌不需要理由。",
    caption: "人群仰头看红字，死寂一秒后炸开，购物袋和水果摔了一地。",
    danger: 18,
    hero: "未登场",
  },
  {
    id: 3,
    time: "9-14s",
    part: "Part A",
    title: "整楼闭门",
    bg: "corridor",
    speaker: "环境",
    tone: "连环关门声",
    line: "一扇扇门亮灯，又熄灭。",
    sub: "服从来得比理解快。",
    caption: "老居民楼像被掐住呼吸，防盗门接连砸响。",
    danger: 22,
    hero: "未登场",
  },
  {
    id: 4,
    time: "14-18s",
    part: "Part A",
    title: "先固守",
    bg: "home",
    speaker: "朱冠宇",
    tone: "低声自语",
    line: "先固守，再求援。",
    sub: "受过训练的人，恐慌也有章法。",
    caption: "朱家客厅，他背对镜头钉窗板，锤声稳定。",
    chars: ["guanyu"],
    danger: 25,
    hero: "专业警觉",
  },
  {
    id: 5,
    time: "18-23s",
    part: "Part A",
    title: "两副碗筷",
    bg: "home",
    speaker: "朱冠宇",
    tone: "日常",
    line: "小满？开饭了！",
    sub: "他还不知道，家里只剩他一个。",
    caption: "餐桌上两副碗筷，一副没动过；镜头推向虚掩的画室门。",
    chars: ["guanyu"],
    danger: 28,
    hero: "寻找妹妹",
  },
  {
    id: 6,
    time: "23-27s",
    part: "Part A",
    title: "画室空了",
    bg: "home",
    speaker: "朱冠宇",
    tone: "气音",
    line: "小满？",
    sub: "湿颜料说明她刚走不久。",
    caption: "画架上未完成的城市空景还湿着，画笔掉在地上。",
    chars: ["guanyu"],
    danger: 32,
    hero: "不安",
  },
  {
    id: 7,
    time: "27-31s",
    part: "Part A",
    title: "手背试温",
    bg: "door",
    speaker: "环境",
    tone: "楼道脚步逼近",
    line: "门外有不属于人类节奏的脚步。",
    sub: "消防员本能在说：门外有「火」。",
    caption: "他用手背贴上户门试温，又迅速贴耳听。",
    prop: "door",
    unlock: ["hairTie"],
    danger: 38,
    hero: "消防本能",
  },
  {
    id: 8,
    time: "31-37s",
    part: "Part A",
    title: "老王被拖走",
    bg: "corridor",
    className: "crimson",
    speaker: "老王",
    tone: "掐断",
    line: "救——",
    sub: "第一条规则不是吓唬人。",
    caption: "猫眼鱼眼畸变里，浓白的雾伸出半透明的手，拖鞋留在原地。",
    danger: 48,
    hero: "惊惧",
  },
  {
    id: 9,
    time: "37-42s",
    part: "Part A",
    title: "广播循环",
    bg: "home",
    speaker: "广播",
    tone: "毫无波澜",
    line: "不要回应任何敲门声。",
    sub: "广播的冷静比怪物更可怕。",
    caption: "朱冠宇背抵门板滑坐在地，墙上全家福压进画面。",
    chars: ["guanyu"],
    danger: 52,
    hero: "喘息",
  },
  {
    id: 10,
    time: "42-46s",
    part: "Part A",
    title: "伪小满",
    bg: "corridor",
    speaker: "门外",
    tone: "甜糯渐扭曲",
    line: "哥，开门呀。",
    sub: "规则会用你最爱的声音敲门。",
    caption: "猫眼外空无一人，雾贴着门缝游动。",
    danger: 58,
    hero: "动摇",
    choices: [
      { id: "remember", label: "想起小满的习惯", result: "小满怕黑，从不敲门。", kind: "safe" },
      { id: "answer", label: "回应门外声音", result: "门缝里的雾明显贴近了。", kind: "danger" },
    ],
  },
  {
    id: 11,
    time: "46-50s",
    part: "Part A",
    title: "黄发绳",
    bg: "door",
    speaker: "朱冠宇",
    tone: "牙缝里",
    line: "小满怕黑，从不敲门。",
    sub: "十二年兄妹，假声音骗不过细节。",
    caption: "他扑向门把手的手，被自己另一只手死死按住。",
    prop: "hairTie",
    danger: 56,
    hero: "理智压住冲动",
  },
  {
    id: 12,
    time: "50-56s",
    part: "Part A",
    title: "纸条飘落",
    bg: "home",
    speaker: "朱冠宇",
    tone: "一字一顿",
    line: "她知道会有今晚。",
    sub: "妹妹不是失踪，是提前知道。",
    caption: "纸条写着：哥，别出来找我。等天亮。——小满",
    prop: "note",
    unlock: ["note"],
    danger: 61,
    hero: "眼神变了",
  },
  {
    id: 13,
    time: "56-61s",
    part: "Part A",
    title: "暖色闪回",
    bg: "home",
    className: "warm",
    speaker: "小满",
    tone: "闪回画外",
    line: "哥，规则就是用来骗人的。",
    sub: "这句玩笑话是全剧题眼。",
    caption: "黄发绳、草莓奶糖、画架前回头笑，三段快切。",
    chars: ["xiaoman"],
    prop: "candy",
    danger: 48,
    hero: "被牵动",
  },
  {
    id: 14,
    time: "61-66s",
    part: "Part A",
    title: "红字渗出",
    bg: "door",
    className: "crimson",
    speaker: "环境",
    tone: "木纹渗血",
    line: "门板上，红字从木纹里渗出来。",
    sub: "规则找上门了。",
    caption: "像血珠聚成字，低音脉冲启动。",
    prop: "door",
    danger: 66,
    hero: "僵住",
  },
  {
    id: 15,
    time: "66-72s",
    part: "Part A",
    title: "第一行",
    bg: "door",
    className: "crimson",
    speaker: "朱冠宇",
    tone: "声音发紧",
    line: "紧闭、门窗。",
    sub: "到这一步还只是复述世界的规则。",
    caption: "第一行红字与全城广播一致，字迹官方、工整。",
    rule: "日落后，紧闭门窗。",
    prop: "door",
    danger: 70,
    hero: "判断中",
  },
  {
    id: 16,
    time: "72-79s",
    part: "Part A",
    title: "第二行",
    bg: "door",
    className: "crimson",
    speaker: "朱冠宇",
    tone: "气音",
    line: "……第二行？",
    sub: "全城只有他看得见的那一行。",
    caption: "红字下方，小字缓缓显形：开门者活。",
    rule: "开门者活。",
    prop: "door",
    unlock: ["secondLine"],
    danger: 78,
    hero: "看见例外",
    choices: [
      { id: "radio", label: "相信广播：不要开门", result: "广播越急，越像是在遮住第二行。", kind: "danger" },
      { id: "door", label: "相信门上的第二行", result: "第二行微微亮起，像是在回应。", kind: "safe" },
      { id: "note", label: "对照小满纸条", result: "纸条与红字之间，有一种不该出现的熟悉感。", kind: "safe" },
    ],
  },
  {
    id: 17,
    time: "79-84s",
    part: "Part A",
    title: "瞳孔倒影",
    bg: "door",
    className: "crimson",
    speaker: "朱冠宇",
    tone: "自语",
    line: "广播说闭门……门说开门。",
    sub: "信官方，还是信只有自己看见的？",
    caption: "红色的「开门者活」倒映在他的虹膜上。",
    rule: "开门者活。",
    chars: ["guanyu"],
    unlock: ["openRule"],
    danger: 82,
    hero: "分辨规则",
  },
  {
    id: 18,
    time: "84-90s",
    part: "Part A",
    title: "我去找你",
    bg: "home",
    speaker: "朱冠宇",
    tone: "低而稳",
    line: "我去找你。",
    sub: "决心下完，这个人立住了。",
    caption: "他把纸条塞进胸口口袋，抓起消防斧。",
    chars: ["guanyu"],
    prop: "note",
    danger: 76,
    hero: "决心",
  },
  {
    id: 19,
    time: "90-95s",
    part: "Part A",
    title: "最后警告",
    bg: "corridor",
    className: "crimson",
    speaker: "广播",
    tone: "近乎温柔",
    line: "最后警告。不要、开门。",
    sub: "连广播都急了——它在怕什么？",
    caption: "无数「巡夜」影子正在从楼梯口逐层上行。",
    danger: 86,
    hero: "覆上门锁",
  },
  {
    id: 20,
    time: "95-100s",
    part: "Part B",
    title: "隔门审判",
    bg: "corridor",
    speaker: "对门男",
    tone: "隔门嘶喊",
    line: "不要命了？！锁门！",
    sub: "群体的「正确」开始审判他。",
    caption: "对门猫眼后，一只眼睛死死盯着朱冠宇家门口。",
    danger: 88,
    hero: "被孤立",
  },
  {
    id: 21,
    time: "100-105s",
    part: "Part B",
    title: "两短一长",
    bg: "door",
    speaker: "环境",
    tone: "呼吸声特写",
    line: "两短，一长。",
    sub: "他不是不怕，是会处理怕。",
    caption: "他一根根掰开自己攥死的拳头。",
    chars: ["guanyu"],
    danger: 84,
    hero: "入火场呼吸",
  },
  {
    id: 22,
    time: "105-111s",
    part: "Part B",
    title: "开门确认",
    bg: "door",
    className: "crimson",
    speaker: "朱冠宇",
    tone: "平静",
    line: "我开门了。",
    sub: "与规则的第一次握手。",
    caption: "锁舌咔哒，门开一条缝，第二行亮度骤增。",
    rule: "开门者活。",
    prop: "door",
    danger: 92,
    hero: "开门者",
  },
  {
    id: 23,
    time: "111-118s",
    part: "Part B",
    title: "雾绕行",
    bg: "corridor",
    className: "crimson",
    speaker: "环境",
    tone: "深海雾流",
    line: "雾在他身体两侧分开。",
    sub: "开门者，雾不收。",
    caption: "无数半透明的手贴着无形的墙滑过。",
    chars: ["guanyu"],
    danger: 90,
    hero: "被规则承认",
  },
  {
    id: 24,
    time: "118-124s",
    part: "Part B",
    title: "闭门者收",
    bg: "corridor",
    className: "crimson",
    speaker: "雾中群声",
    tone: "呢喃叠加",
    line: "闭门者……收。",
    sub: "广播的规则是收割的诱饵。",
    caption: "雾灌入每一条门缝，紧闭的门下渗出红光。",
    rule: "闭门者……收。",
    danger: 96,
    hero: "震住",
  },
  {
    id: 25,
    time: "124-131s",
    part: "Part B",
    title: "救不了",
    bg: "door",
    speaker: "朱冠宇",
    tone: "嘶喊",
    line: "开门！快开门——！",
    sub: "他想救，但每扇门都替主人选了死。",
    caption: "对门猫眼红光熄灭，一只手的剪影缓缓滑下门板。",
    chars: ["guanyu"],
    danger: 94,
    hero: "愧疚",
  },
  {
    id: 26,
    time: "131-137s",
    part: "Part B",
    title: "为什么是我",
    bg: "corridor",
    speaker: "朱冠宇",
    tone: "哑声",
    line: "为什么是我……",
    sub: "幸存者愧疚，第一次直面「例外」身份。",
    caption: "长长的楼道只有他一个活人坐标。",
    chars: ["guanyu"],
    danger: 78,
    hero: "幸存者愧疚",
  },
  {
    id: 27,
    time: "137-143s",
    part: "Part B",
    title: "第一个清晨",
    bg: "corridor",
    className: "dawn",
    speaker: "环境",
    tone: "真空后鸟鸣",
    line: "天光渐亮，雾由浓转薄。",
    sub: "活下来的第一个清晨。",
    caption: "晨光从破窗斜切进来，打在他脸上。",
    chars: ["guanyu"],
    danger: 44,
    hero: "活下来",
  },
  {
    id: 28,
    time: "143-148s",
    part: "Part B",
    title: "空屋",
    bg: "home",
    speaker: "朱冠宇",
    tone: "苦笑",
    line: "就剩咱俩了？",
    sub: "用一只猫衡量一栋楼的死寂。",
    caption: "饭菜原样，电视雪花屏，人都不见了。",
    danger: 40,
    hero: "孤身",
  },
  {
    id: 29,
    time: "148-154s",
    part: "Part B",
    title: "天台望城",
    bg: "city",
    className: "dawn",
    speaker: "朱冠宇",
    tone: "望城",
    line: "小满，你在哪。",
    sub: "从「守住家」转为「走出去」。",
    caption: "街道空无一人，红色规则碑零星立在路口，像墓碑。",
    unlock: ["emptyCity"],
    danger: 42,
    hero: "准备出城",
  },
  {
    id: 30,
    time: "154-160s",
    part: "Part B",
    title: "同一只手",
    bg: "home",
    speaker: "环境",
    tone: "纸张摩擦",
    line: "纸条笔迹与第二行红字一模一样。",
    sub: "全剧最大伏笔，静悄悄埋下。",
    caption: "「别出来找我」的收锋方式，与门上第二行一致。",
    prop: "note",
    danger: 52,
    hero: "起疑",
  },
  {
    id: 31,
    time: "160-165s",
    part: "Part B",
    title: "幸存小队",
    bg: "corridor",
    speaker: "马一鸣",
    tone: "画外咋呼",
    line: "这楼昨晚红光最大！肯定全没了！",
    sub: "幸存者来「收尸」捡物资。",
    caption: "三个人影进入楼栋废墟，铁器拖地声逼近。",
    chars: ["survivors"],
    danger: 58,
    hero: "被发现",
  },
  {
    id: 32,
    time: "165-170s",
    part: "Part B",
    title: "楼道遭遇",
    bg: "corridor",
    speaker: "谭天",
    tone: "低喝",
    line: "站住！",
    sub: "昨晚的楼，在他们经验里不该有活人。",
    caption: "手电光柱打在朱冠宇脸上，三人瞬间僵住。",
    chars: ["survivors"],
    danger: 65,
    hero: "被围住",
  },
  {
    id: 33,
    time: "170-175s",
    part: "Part B",
    title: "门都是好的",
    bg: "corridor",
    speaker: "真涵",
    tone: "声音发颤",
    line: "门都是好的……他从里面活下来的。",
    sub: "专业的人最先意识到不可能。",
    caption: "她看见各户大门完好，没有破坏痕迹。",
    chars: ["survivors"],
    unlock: ["intactDoors"],
    danger: 72,
    hero: "成了疑点",
  },
  {
    id: 34,
    time: "175-181s",
    part: "Part B",
    title: "全城闭门",
    bg: "corridor",
    speaker: "谭天",
    tone: "一字一句",
    line: "昨晚全城闭门的都没了。",
    sub: "不止这栋楼，是全城。",
    caption: "撬棍横在身前逼近，楼道空气凝固。",
    chars: ["survivors"],
    danger: 80,
    hero: "无法解释",
  },
  {
    id: 35,
    time: "181-187s",
    part: "Part B",
    title: "枪口入画",
    bg: "corridor",
    className: "crimson",
    speaker: "谭天",
    tone: "扣住扳机",
    line: "全楼就你活着——",
    sub: "无法解释的活人最危险。",
    caption: "红色枪口对准朱冠宇眉心，门板红字还未褪尽。",
    chars: ["survivors"],
    danger: 90,
    hero: "被枪指着",
  },
  {
    id: 36,
    time: "187-191s",
    part: "Part B",
    title: "你是人是鬼",
    bg: "corridor",
    className: "blackout",
    speaker: "谭天",
    tone: "黑屏画外",
    line: "你是人是鬼？",
    sub: "他自己也不知道答案，这正是全剧的问题。",
    caption: "心跳一声，戛然而止，规则确认音再次响起。",
    rule: "你是人，是鬼？",
    danger: 100,
    hero: "悬念定格",
  },
];

const state = {
  index: 0,
  visited: new Set([0]),
  clues: new Set(),
  choices: {},
  autoTimer: null,
  muted: false,
};

const els = {
  app: document.querySelector(".app-shell"),
  stage: document.getElementById("storyStage"),
  sceneImage: document.getElementById("sceneImage"),
  sceneTime: document.getElementById("sceneTime"),
  sceneTitle: document.getElementById("sceneTitle"),
  sceneCounter: document.getElementById("sceneCounter"),
  ruleText: document.getElementById("ruleText"),
  characterLayer: document.getElementById("characterLayer"),
  propLayer: document.getElementById("propLayer"),
  stageCaption: document.getElementById("stageCaption"),
  speakerName: document.getElementById("speakerName"),
  speakerTone: document.getElementById("speakerTone"),
  dialogueLine: document.getElementById("dialogueLine"),
  subtext: document.getElementById("subtext"),
  choices: document.getElementById("choices"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  autoBtn: document.getElementById("autoBtn"),
  restartBtn: document.getElementById("restartBtn"),
  muteBtn: document.getElementById("muteBtn"),
  focusBtn: document.getElementById("focusBtn"),
  dangerLevel: document.getElementById("dangerLevel"),
  heroState: document.getElementById("heroState"),
  timeline: document.getElementById("timeline"),
  partLabel: document.getElementById("partLabel"),
  clues: document.getElementById("clues"),
  clueCount: document.getElementById("clueCount"),
  choiceLog: document.getElementById("choiceLog"),
};

function renderTimeline() {
  els.timeline.innerHTML = "";
  scenes.forEach((scene, idx) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = String(scene.id).padStart(2, "0");
    button.title = `${scene.time} ${scene.title}`;
    button.className = [
      idx === state.index ? "current" : "",
      state.visited.has(idx) ? "visited" : "",
    ]
      .filter(Boolean)
      .join(" ");
    button.addEventListener("click", () => goTo(idx));
    els.timeline.appendChild(button);
  });
}

function renderClues() {
  els.clues.innerHTML = "";
  clueBook.forEach((clue) => {
    const unlocked = state.clues.has(clue.id);
    const item = document.createElement("div");
    item.className = `clue ${unlocked ? "unlocked" : ""}`;
    item.innerHTML = `
      <img src="${clue.img}" alt="" />
      <div>
        <strong>${unlocked ? clue.name : "未解锁"}</strong>
        <span>${unlocked ? clue.desc : "继续推进剧情。"}</span>
      </div>
    `;
    els.clues.appendChild(item);
  });
  els.clueCount.textContent = `${state.clues.size} / ${clueBook.length}`;
}

function renderCharacters(scene) {
  els.characterLayer.innerHTML = "";
  if (!scene.chars) return;

  if (scene.chars.includes("guanyu")) {
    addCharacter(assets.guanyu, "guanyu");
  }
  if (scene.chars.includes("xiaoman")) {
    addCharacter(assets.xiaoman, "xiaoman");
  }
  if (scene.chars.includes("survivors")) {
    addCharacter(assets.tanTian, "survivor-a");
    addCharacter(assets.zhenHan, "survivor-b");
    addCharacter(assets.maYiming, "survivor-c");
  }
}

function addCharacter(src, className) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "";
  img.className = `character ${className}`;
  els.characterLayer.appendChild(img);
}

function renderProp(scene) {
  els.propLayer.innerHTML = "";
  if (!scene.prop) return;
  if (scene.prop === "door") return;

  const img = document.createElement("img");
  img.src = assets[scene.prop];
  img.alt = "";
  img.className = `prop ${scene.prop}`;
  els.propLayer.appendChild(img);
}

function renderChoices(scene) {
  els.choices.innerHTML = "";
  if (!scene.choices) return;

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = choice.label;
    if (state.choices[scene.id] === choice.id) {
      button.classList.add("selected");
    }
    button.addEventListener("click", () => {
      state.choices[scene.id] = choice.id;
      els.choiceLog.textContent = choice.result;
      if (choice.kind === "safe") {
        state.clues.add(scene.id === 16 ? "openRule" : "hairTie");
      }
      renderChoices(scene);
      renderClues();
    });
    els.choices.appendChild(button);
  });
}

function renderScene() {
  const scene = scenes[state.index];
  state.visited.add(state.index);
  if (scene.unlock) {
    scene.unlock.forEach((clue) => state.clues.add(clue));
  }

  els.stage.className = ["story-stage", scene.className || ""].filter(Boolean).join(" ");
  els.sceneImage.src = assets[scene.bg];
  els.sceneImage.alt = scene.title;
  els.sceneTime.textContent = scene.time;
  els.sceneTitle.textContent = scene.title;
  els.sceneCounter.textContent = `${String(scene.id).padStart(2, "0")} / ${scenes.length}`;
  els.speakerName.textContent = scene.speaker;
  els.speakerTone.textContent = scene.tone;
  els.dialogueLine.textContent = scene.line;
  els.subtext.textContent = scene.sub;
  els.stageCaption.textContent = scene.caption;
  els.dangerLevel.textContent = `${scene.danger}%`;
  els.heroState.textContent = scene.hero;
  els.partLabel.textContent = scene.part;

  if (scene.rule) {
    els.ruleText.textContent = scene.rule;
    els.ruleText.classList.add("visible");
  } else {
    els.ruleText.textContent = "";
    els.ruleText.classList.remove("visible");
  }

  els.prevBtn.disabled = state.index === 0;
  els.nextBtn.textContent = state.index === scenes.length - 1 ? "重看" : "继续";

  renderCharacters(scene);
  renderProp(scene);
  renderChoices(scene);
  renderTimeline();
  renderClues();
}

function goTo(index) {
  state.index = Math.max(0, Math.min(index, scenes.length - 1));
  renderScene();
}

function nextScene() {
  if (state.index === scenes.length - 1) {
    goTo(0);
    return;
  }
  goTo(state.index + 1);
}

function previousScene() {
  goTo(state.index - 1);
}

function toggleAuto() {
  if (state.autoTimer) {
    clearInterval(state.autoTimer);
    state.autoTimer = null;
    els.autoBtn.textContent = "自动";
    return;
  }
  state.autoTimer = window.setInterval(() => {
    if (state.index === scenes.length - 1) {
      toggleAuto();
      return;
    }
    nextScene();
  }, 3200);
  els.autoBtn.textContent = "暂停";
}

function restart() {
  if (state.autoTimer) toggleAuto();
  state.index = 0;
  state.visited = new Set([0]);
  state.clues = new Set();
  state.choices = {};
  els.choiceLog.textContent = "关键选择会记录在这里。";
  renderScene();
}

els.prevBtn.addEventListener("click", previousScene);
els.nextBtn.addEventListener("click", nextScene);
els.autoBtn.addEventListener("click", toggleAuto);
els.restartBtn.addEventListener("click", restart);
els.stage.addEventListener("click", nextScene);
els.muteBtn.addEventListener("click", () => {
  state.muted = !state.muted;
  els.muteBtn.textContent = state.muted ? "♪̸" : "♪";
});
els.focusBtn.addEventListener("click", () => {
  els.app.classList.toggle("focus");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    nextScene();
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    previousScene();
  }
});

renderScene();
