const STORAGE_KEY = "moon-log-period-tracker-v2";
const ONBOARDING_KEY = "moon-log-onboarding-seen-v1";
const PARENT_UNLOCK_KEY = "moon-log-parent-unlocked-v1";
const PARENT_UNLOCK_EXPIRES_KEY = "moon-log-parent-unlock-expires-v1";
const NOTIFICATION_DAILY_KEY = "moon-log-notification-daily-v1";
const NOTIFICATION_ATTENTION_KEY = "moon-log-notification-attention-v1";
const DEFAULT_LANGUAGE = "zh-CN";
const VERSION = "1.2.0";
const MAX_PIN_ATTEMPTS = 3;
const TOAST_DURATION = 2200;
const SUPPORTED_LANGUAGES = [DEFAULT_LANGUAGE, "en"];
const I18N = {
  "zh-CN": {
    "app.name": "Eva的月亮",
    "hero.eyebrow": "Eva's Moon",
    "hero.text": "轻轻松松记下今天的身体感觉，也让家长更安心。",
    "hero.currentCycle": "当前周期",
    "actions.quickLog": "今天一键记录",
    "actions.recordNow": "立即记录",
    "actions.viewCalendar": "查看日历",
    "actions.install": "安装应用",
    "common.clearForm": "清空表单",
    "common.symptoms": "身体感觉",
    "common.notes": "备注",
    "common.date": "日期",
    "common.ok": "知道了",
    "common.close": "关闭",
    "periodForm.title": "新增生理期记录",
    "periodForm.startDate": "开始日期",
    "periodForm.endDate": "结束日期",
    "periodForm.flowLevel": "流量级别",
    "periodForm.painLevel": "疼痛程度",
    "periodForm.mood": "今天心情",
    "periodForm.notesPlaceholder": "例如：第一天腹痛明显、第三天量减少、服用了止痛药等",
    "periodForm.save": "保存记录",
    "dailyForm.title": "每日状态",
    "dailyForm.bleedingQuestion": "今天有没有出血",
    "dailyForm.painQuestion": "今天有多疼",
    "dailyForm.energyQuestion": "今天有没有精神",
    "dailyForm.moodQuestion": "今天心情怎么样",
    "dailyForm.alertFlags": "今天有没有这些情况",
    "dailyForm.tellParent": "告诉家长",
    "dailyForm.dailyNotes": "当日备注",
    "dailyForm.notesPlaceholder": "例如：睡眠不足、运动后疼痛减轻、出现点滴出血等",
    "dailyForm.save": "保存日报",
    "care.title": "给孩子的小提醒",
    "care.tip1": "<strong>卫生巾要常看看：</strong>湿了就换，不用等很久。",
    "care.tip2": "<strong>肚子疼先说出来：</strong>休息、喝温水、热敷都可以。",
    "care.tip3": "<strong>很不舒服就找大人：</strong>家长、老师、校医都可以帮忙。",
    "care.tip4": "<strong>这不是丢脸的事：</strong>记录身体变化是在照顾自己。",
    "help.title": "现在不舒服怎么办",
    "help.step1": "1. 先坐下休息，慢慢呼吸，不要硬撑。",
    "help.step2": "2. 喝几口温水，或者请大人帮忙热敷肚子。",
    "help.step3": "3. 如果很疼、头晕、想吐，马上告诉家长或老师。",
    "help.step4": "4. 如果弄脏衣服也没关系，先找大人帮忙处理。",
    "quickCheck.title": "今天要做什么",
    "quickCheck.step1": "1. 看看今天有没有来月经。",
    "quickCheck.step2": "2. 点一点心情和身体感觉。",
    "quickCheck.step3": "3. 如果难受，就记录并告诉家长。",
    "schoolBag.title": "上学小包清单",
    "schoolBag.item1": "□ 2 到 3 片卫生巾或护垫",
    "schoolBag.item2": "□ 一条干净内裤",
    "schoolBag.item3": "□ 深色外裤或外套",
    "schoolBag.item4": "□ 小袋子和纸巾",
    "schoolBag.item5": "□ 记得：不舒服时可以找老师帮忙。",
    "parentView.title": "家长查看",
    "parentGuide.title": "给家长的说明",
    "parentGuide.tip1": "<strong>初潮前后头一两年不一定很准：</strong>周期忽长忽短并不少见，先以稳定记录为主。",
    "parentGuide.tip2": "<strong>重点看三件事：</strong>疼痛是否影响上学、出血是否异常多、孩子情绪和精力有没有明显变化。",
    "parentGuide.tip3": "<strong>建议的陪伴方式：</strong>准备好卫生用品、热敷用品和替换衣物，帮助孩子建立“难受就说”的安全感。",
    "parentGuide.tip4": "<strong>尽快就医的情况：</strong>持续剧烈腹痛、头晕乏力明显、发烧、经量特别大，或长期不来月经。",
    "checklist.title": "家长观察清单",
    "checklist.print": "打印清单",
    "checklist.head1": "<strong>本月是否出现：</strong>",
    "checklist.item1": "□ 疼痛影响上学或睡眠",
    "checklist.item2": "□ 一小时内湿透一片卫生巾",
    "checklist.item3": "□ 头晕、乏力、脸色发白",
    "checklist.item4": "□ 发烧或明显不适",
    "checklist.item5": "□ 两次月经之间又出血",
    "checklist.item6": "□ 孩子情绪明显低落或焦虑",
    "checklist.head2": "<strong>照护物品检查：</strong>",
    "checklist.item7": "□ 卫生巾/护垫 □ 替换内裤 □ 深色裤子 □ 热敷用品 □ 温水杯",
    "trend.title": "周期观察",
    "reminders.title": "提醒中心",
    "reminderSettings.title": "提醒设置",
    "reminderSettings.enable": "浏览器提醒",
    "reminderSettings.enableHelp": "允许应用在需要时发送本地提醒。",
    "reminderSettings.daily": "今天还没记录时提醒",
    "reminderSettings.dailyHelp": "晚上会在打开应用时提醒补一条今天的日报。",
    "reminderSettings.attention": "需要告诉家长时提醒",
    "reminderSettings.attentionHelp": "出现高疼痛、出血多或异常标记时，会弹出提醒。",
    "reminderSettings.request": "开启通知权限",
    "reminderSettings.test": "发送测试提醒",
    "reminderSettings.save": "保存提醒设置",
    "reminderSettings.note": "浏览器提醒需要先允许通知权限。当前版本会在打开应用时检查今天是否还没记录，或是否出现需要告诉家长的情况。",
    "calendar.title": "月视图",
    "calendar.legendPeriod": "<i class=\"swatch swatch--period\"></i>已记录经期",
    "calendar.legendPredicted": "<i class=\"swatch swatch--predicted\"></i>预测经期",
    "calendar.legendFertile": "<i class=\"swatch swatch--fertile\"></i>易孕窗口",
    "calendar.legendLog": "<i class=\"swatch swatch--log\"></i>当日日报",
    "calendar.legendToday": "<i class=\"swatch swatch--today\"></i>今天",
    "security.title": "家长锁",
    "security.newPin": "新 PIN",
    "security.confirmPin": "确认 PIN",
    "security.savePin": "保存 PIN",
    "security.clearPin": "清除 PIN",
    "settings.title": "预测参数",
    "settings.manualCycleLength": "手动周期天数",
    "settings.manualPeriodLength": "手动经期天数",
    "settings.autoLock": "自动锁定时间",
    "settings.save": "保存参数",
    "settings.reset": "恢复自动计算",
    "settings.help": "如果你知道自己周期更稳定，可以手动输入天数覆盖平均值。",
    "history.title": "历史记录",
    "history.dailyFeed": "最近日报",
    "data.title": "备份与恢复",
    "data.tip1": "<strong>备份：</strong>可以导出原始数据，也可以导出给家长看的摘要。",
    "data.tip2": "<strong>恢复：</strong>如果之前保存过 JSON 文件，可以再导回来。",
    "data.tip3": "<strong>注意：</strong>清空全部数据后不能恢复，操作前先备份更安全。",
    "data.exportRaw": "备份原始数据",
    "data.exportSummary": "导出家长摘要",
    "data.restore": "恢复备份",
    "data.seed": "填充示例数据",
    "data.clear": "清空全部数据",
    "data.localOnly": "数据默认只保存在当前浏览器，不会自动上传。",
    "footer.changelog": "查看更新",
    "preferences.title": "偏好设置",
    "preferences.language": "界面语言",
    "preferences.simpleMode": "超简模式",
    "preferences.simpleModeHelp": "隐藏更多内容，只保留更简单的记录流程。",
    "preferences.save": "保存偏好",
    "preferences.replay": "重新查看引导",
    "settingsHub.title": "设置中心",
    "dialog.pinLabel": "4 位数字 PIN",
    "dialog.pinConfirm": "再输入一次 PIN",
    "welcome.title": "第一次使用看看这里",
    "welcome.tip1": "1. 孩子平时只用“每日状态”和“月视图”就够了。",
    "welcome.tip2": "2. 如果今天很不舒服，记录后要马上告诉家长或老师。",
    "welcome.tip3": "3. 家长模式可以设置 PIN，里面能看更完整的信息和观察清单。",
    "welcome.start": "开始使用",
    "updates.title": "最近更新",
    "updates.v110": "<strong>v1.2.0</strong> 新增中英双语切换，并让按钮、提示、日期和摘要内容跟随语言一起切换。",
    "updates.v100": "<strong>v1.0.0</strong> 儿童模式、家长模式、PIN 锁、自动锁定、打印摘要已齐备。",
  },
  en: {
    "app.name": "Eva's Moon",
    "hero.eyebrow": "Eva's Moon",
    "hero.text": "Track how the body feels today in a calm, simple way, and help parents stay informed.",
    "hero.currentCycle": "Current Cycle",
    "actions.quickLog": "Quick Log Today",
    "actions.recordNow": "Add Record",
    "actions.viewCalendar": "View Calendar",
    "actions.install": "Install App",
    "common.clearForm": "Clear Form",
    "common.symptoms": "Body Feelings",
    "common.notes": "Notes",
    "common.date": "Date",
    "common.ok": "OK",
    "common.close": "Close",
    "periodForm.title": "Add Period Record",
    "periodForm.startDate": "Start Date",
    "periodForm.endDate": "End Date",
    "periodForm.flowLevel": "Flow Level",
    "periodForm.painLevel": "Pain Level",
    "periodForm.mood": "Mood Today",
    "periodForm.notesPlaceholder": "Example: cramps were stronger on day 1, flow got lighter on day 3, took pain relief",
    "periodForm.save": "Save Record",
    "dailyForm.title": "Daily Check-in",
    "dailyForm.bleedingQuestion": "Any bleeding today?",
    "dailyForm.painQuestion": "How much does it hurt today?",
    "dailyForm.energyQuestion": "How is the energy today?",
    "dailyForm.moodQuestion": "How is the mood today?",
    "dailyForm.alertFlags": "Did any of these happen today?",
    "dailyForm.tellParent": "Tell a Parent",
    "dailyForm.dailyNotes": "Daily Notes",
    "dailyForm.notesPlaceholder": "Example: poor sleep, felt better after exercise, light spotting happened",
    "dailyForm.save": "Save Daily Log",
    "care.title": "Tips For Kids",
    "care.tip1": "<strong>Check pads often:</strong> change them when they feel wet.",
    "care.tip2": "<strong>Say it when it hurts:</strong> rest, warm water, and heat can help.",
    "care.tip3": "<strong>Ask an adult for help:</strong> a parent, teacher, or school nurse can help.",
    "care.tip4": "<strong>This is not embarrassing:</strong> tracking body changes is part of taking care of yourself.",
    "help.title": "What To Do If You Feel Unwell",
    "help.step1": "1. Sit down and rest. Take slow breaths and do not force yourself.",
    "help.step2": "2. Drink some warm water or ask an adult for a warm compress.",
    "help.step3": "3. If it hurts a lot, you feel dizzy, or want to throw up, tell a parent or teacher right away.",
    "help.step4": "4. If clothes get stained, that is okay. Ask an adult to help.",
    "quickCheck.title": "What To Do Today",
    "quickCheck.step1": "1. Check whether your period started today.",
    "quickCheck.step2": "2. Tap your mood and body feelings.",
    "quickCheck.step3": "3. If you feel bad, save it and tell a parent.",
    "schoolBag.title": "School Bag Checklist",
    "schoolBag.item1": "□ 2 to 3 pads or liners",
    "schoolBag.item2": "□ One clean pair of underwear",
    "schoolBag.item3": "□ Dark pants or a jacket",
    "schoolBag.item4": "□ A small pouch and tissues",
    "schoolBag.item5": "□ Remember: if you feel unwell, you can ask a teacher for help.",
    "parentView.title": "Parent View",
    "parentGuide.title": "Notes For Parents",
    "parentGuide.tip1": "<strong>The first 1 to 2 years after menarche may be irregular:</strong> tracking steadily matters more than precision.",
    "parentGuide.tip2": "<strong>Focus on three things:</strong> whether pain affects school, whether bleeding is unusually heavy, and whether mood or energy changes are obvious.",
    "parentGuide.tip3": "<strong>Helpful support:</strong> prepare hygiene products, warming items, and spare clothes, and make it safe for the child to speak up.",
    "parentGuide.tip4": "<strong>Seek medical advice soon if needed:</strong> severe ongoing pain, strong dizziness or fatigue, fever, very heavy bleeding, or no period for a long time.",
    "checklist.title": "Parent Checklist",
    "checklist.print": "Print Checklist",
    "checklist.head1": "<strong>Did any of these happen this month?</strong>",
    "checklist.item1": "□ Pain affected school or sleep",
    "checklist.item2": "□ One pad soaked within an hour",
    "checklist.item3": "□ Dizziness, fatigue, or pale face",
    "checklist.item4": "□ Fever or clear discomfort",
    "checklist.item5": "□ Bleeding between periods",
    "checklist.item6": "□ Strong low mood or anxiety",
    "checklist.head2": "<strong>Care items to check:</strong>",
    "checklist.item7": "□ Pads/liners □ Spare underwear □ Dark pants □ Heat pack □ Warm water cup",
    "trend.title": "Cycle Notes",
    "reminders.title": "Reminder Center",
    "reminderSettings.title": "Reminder Settings",
    "reminderSettings.enable": "Browser Notifications",
    "reminderSettings.enableHelp": "Allow the app to send local reminders when needed.",
    "reminderSettings.daily": "Remind if today is not logged",
    "reminderSettings.dailyHelp": "In the evening, the app can remind you to add today's daily log when it is opened.",
    "reminderSettings.attention": "Remind when a parent should be told",
    "reminderSettings.attentionHelp": "Show a notification when pain, bleeding, or alert flags need extra attention.",
    "reminderSettings.request": "Allow Notifications",
    "reminderSettings.test": "Send Test Reminder",
    "reminderSettings.save": "Save Reminder Settings",
    "reminderSettings.note": "Browser notifications need permission first. This version checks when the app is opened and can remind about missing today's log or records that should be shared with a parent.",
    "calendar.title": "Month View",
    "calendar.legendPeriod": "<i class=\"swatch swatch--period\"></i>Recorded period",
    "calendar.legendPredicted": "<i class=\"swatch swatch--predicted\"></i>Predicted period",
    "calendar.legendFertile": "<i class=\"swatch swatch--fertile\"></i>Fertile window",
    "calendar.legendLog": "<i class=\"swatch swatch--log\"></i>Daily log",
    "calendar.legendToday": "<i class=\"swatch swatch--today\"></i>Today",
    "security.title": "Parent Lock",
    "security.newPin": "New PIN",
    "security.confirmPin": "Confirm PIN",
    "security.savePin": "Save PIN",
    "security.clearPin": "Clear PIN",
    "settings.title": "Prediction Settings",
    "settings.manualCycleLength": "Manual Cycle Length",
    "settings.manualPeriodLength": "Manual Period Length",
    "settings.autoLock": "Auto Lock Time",
    "settings.save": "Save Settings",
    "settings.reset": "Use Auto Values",
    "settings.help": "If you know the cycle is more stable, you can enter manual values to override the average.",
    "history.title": "History",
    "history.dailyFeed": "Recent Daily Logs",
    "data.title": "Backup And Restore",
    "data.tip1": "<strong>Backup:</strong> export raw data or a parent-friendly summary.",
    "data.tip2": "<strong>Restore:</strong> import a saved JSON backup here.",
    "data.tip3": "<strong>Note:</strong> clearing all data cannot be undone. Back up first if needed.",
    "data.exportRaw": "Export Raw Data",
    "data.exportSummary": "Export Parent Summary",
    "data.restore": "Restore Backup",
    "data.seed": "Load Sample Data",
    "data.clear": "Clear All Data",
    "data.localOnly": "Data stays in this browser by default and is not uploaded automatically.",
    "footer.changelog": "View Updates",
    "preferences.title": "Preferences",
    "preferences.language": "Interface Language",
    "preferences.simpleMode": "Simple Mode",
    "preferences.simpleModeHelp": "Hide more content and keep a simpler logging flow.",
    "preferences.save": "Save Preferences",
    "preferences.replay": "Replay Guide",
    "settingsHub.title": "Settings Hub",
    "dialog.pinLabel": "4-digit PIN",
    "dialog.pinConfirm": "Enter PIN Again",
    "welcome.title": "First Time? Start Here",
    "welcome.tip1": "1. Kids usually only need Daily Check-in and Month View.",
    "welcome.tip2": "2. If today feels very uncomfortable, save a record and tell a parent or teacher right away.",
    "welcome.tip3": "3. Parent Mode can be protected by PIN and shows fuller details and checklists.",
    "welcome.start": "Start",
    "updates.title": "Recent Updates",
    "updates.v110": "<strong>v1.2.0</strong> Added Chinese and English switching, with buttons, messages, dates, and summaries updating together.",
    "updates.v100": "<strong>v1.0.0</strong> Child mode, parent mode, PIN lock, auto lock, and printable summaries are included.",
  },
};
const VALUE_LABELS = {
  symptoms: {
    "腹痛": { "zh-CN": "腹痛", en: "Cramps" },
    "腰酸": { "zh-CN": "腰酸", en: "Back pain" },
    "头痛": { "zh-CN": "头痛", en: "Headache" },
    "乳房胀痛": { "zh-CN": "乳房胀痛", en: "Breast tenderness" },
    "乏力": { "zh-CN": "乏力", en: "Low energy" },
    "失眠": { "zh-CN": "失眠", en: "Trouble sleeping" },
    "爆痘": { "zh-CN": "爆痘", en: "Breakouts" },
    "食欲变化": { "zh-CN": "食欲变化", en: "Appetite change" },
    "情绪波动": { "zh-CN": "情绪波动", en: "Mood swings" },
    "腹胀": { "zh-CN": "腹胀", en: "Bloating" },
  },
  alertFlags: {
    "痛得没法上课": { "zh-CN": "痛得没法上课", en: "Pain too strong for class" },
    "一小时湿透一片": { "zh-CN": "一小时湿透一片", en: "Soaked one pad in an hour" },
    "头晕想吐": { "zh-CN": "头晕想吐", en: "Dizzy or nauseous" },
    "发烧不舒服": { "zh-CN": "发烧不舒服", en: "Fever or feeling unwell" },
  },
  flow: {
    "轻": { "zh-CN": "轻", en: "Light" },
    "中": { "zh-CN": "中", en: "Medium" },
    "重": { "zh-CN": "重", en: "Heavy" },
    "不规则": { "zh-CN": "不规则", en: "Irregular" },
  },
  bleeding: {
    "无": { "zh-CN": "无", en: "None" },
    "点滴": { "zh-CN": "点滴", en: "Spotting" },
    "轻": { "zh-CN": "轻", en: "Light" },
    "中": { "zh-CN": "中", en: "Medium" },
    "重": { "zh-CN": "重", en: "Heavy" },
  },
  mood: {
    "平稳": { "zh-CN": "平稳", en: "Steady" },
    "轻松": { "zh-CN": "轻松", en: "Calm" },
    "疲惫": { "zh-CN": "疲惫", en: "Tired" },
    "烦躁": { "zh-CN": "烦躁", en: "Irritable" },
    "低落": { "zh-CN": "低落", en: "Low" },
  },
  painChoice: {
    "0": { "zh-CN": "不疼", en: "No pain" },
    "2": { "zh-CN": "普通", en: "Okay" },
    "3": { "zh-CN": "有一点", en: "A little" },
    "6": { "zh-CN": "比较疼", en: "Hurts" },
    "8": { "zh-CN": "很疼", en: "Very painful" },
  },
  energyChoice: {
    "1": { "zh-CN": "很累", en: "Very tired" },
    "2": { "zh-CN": "有点累", en: "A bit tired" },
    "3": { "zh-CN": "还行", en: "Okay" },
    "4": { "zh-CN": "不错", en: "Good" },
    "5": { "zh-CN": "很好", en: "Great" },
  },
  lockMinutes: {
    "5": { "zh-CN": "5 分钟", en: "5 min" },
    "10": { "zh-CN": "10 分钟", en: "10 min" },
    "30": { "zh-CN": "30 分钟", en: "30 min" },
    "60": { "zh-CN": "60 分钟", en: "60 min" },
  },
};
const SYMPTOMS = [
  "腹痛",
  "腰酸",
  "头痛",
  "乳房胀痛",
  "乏力",
  "失眠",
  "爆痘",
  "食欲变化",
  "情绪波动",
  "腹胀",
];
const ALERT_FLAGS = ["痛得没法上课", "一小时湿透一片", "头晕想吐", "发烧不舒服"];

const SAMPLE_DATA = {
  records: [
    {
      id: crypto.randomUUID(),
      startDate: "2026-01-10",
      endDate: "2026-01-14",
      flowLevel: "中",
      painLevel: 4,
      mood: "疲惫",
      symptoms: ["腹痛", "乏力"],
      notes: "前两天量较多，第三天开始减轻。",
    },
    {
      id: crypto.randomUUID(),
      startDate: "2026-02-07",
      endDate: "2026-02-11",
      flowLevel: "重",
      painLevel: 6,
      mood: "烦躁",
      symptoms: ["腹痛", "腰酸", "情绪波动"],
      notes: "第一天腹痛明显，使用了热敷。",
    },
    {
      id: crypto.randomUUID(),
      startDate: "2026-03-06",
      endDate: "2026-03-10",
      flowLevel: "中",
      painLevel: 3,
      mood: "平稳",
      symptoms: ["腹胀"],
      notes: "周期相对稳定。",
    },
  ],
  dailyLogs: [
    {
      id: crypto.randomUUID(),
      date: "2026-03-06",
      bleeding: "中",
      painLevel: 5,
      energyLevel: 2,
      mood: "疲惫",
      symptoms: ["腹痛", "腰酸"],
      notes: "上午状态较差，下午热敷后缓解。",
    },
    {
      id: crypto.randomUUID(),
      date: "2026-03-08",
      bleeding: "轻",
      painLevel: 2,
      energyLevel: 3,
      mood: "平稳",
      symptoms: ["腹胀"],
      notes: "睡眠正常，整体好转。",
    },
    {
      id: crypto.randomUUID(),
      date: "2026-03-20",
      bleeding: "无",
      painLevel: 1,
      energyLevel: 4,
      mood: "轻松",
      symptoms: [],
      notes: "训练后状态不错。",
    },
  ],
};

const state = {
  records: [],
  dailyLogs: [],
  settings: {
    manualCycleLength: "",
    manualPeriodLength: "",
    parentMode: false,
    parentPin: "",
    parentLockMinutes: "10",
    simpleMode: false,
    language: DEFAULT_LANGUAGE,
    notificationsEnabled: false,
    reminderDailyCheck: true,
    reminderAttention: true,
  },
  calendarDate: startOfMonth(new Date()),
  deferredInstallPrompt: null,
  pinDialogMode: "unlock",
  pinAttempts: 0,
};

const elements = {
  periodForm: document.querySelector("#period-form"),
  recordId: document.querySelector("#record-id"),
  startDate: document.querySelector("#start-date"),
  endDate: document.querySelector("#end-date"),
  flowLevel: document.querySelector("#flow-level"),
  painLevel: document.querySelector("#pain-level"),
  painOutput: document.querySelector("#pain-output"),
  mood: document.querySelector("#mood"),
  notes: document.querySelector("#notes"),
  symptomOptions: document.querySelector("#symptom-options"),
  formStatus: document.querySelector("#form-status"),
  resetFormBtn: document.querySelector("#reset-form-btn"),
  statsGrid: document.querySelector("#stats-grid"),
  statTemplate: document.querySelector("#stat-card-template"),
  predictionContent: document.querySelector("#prediction-content"),
  trendContent: document.querySelector("#trend-content"),
  reminderCenterContent: document.querySelector("#reminder-center-content"),
  reminderCenterPanel: document.querySelector("#reminder-center-panel"),
  reminderCenterBadge: document.querySelector("#reminder-center-badge"),
  recordList: document.querySelector("#record-list"),
  dailyLogList: document.querySelector("#daily-log-list"),
  cycleDay: document.querySelector("#cycle-day"),
  cycleSummary: document.querySelector("#cycle-summary"),
  heroPills: document.querySelector("#hero-pills"),
  calendarGrid: document.querySelector("#calendar-grid"),
  calendarTitle: document.querySelector("#calendar-title"),
  prevMonth: document.querySelector("#prev-month"),
  nextMonth: document.querySelector("#next-month"),
  exportBtn: document.querySelector("#export-btn"),
  exportSummaryBtn: document.querySelector("#export-summary-btn"),
  importInput: document.querySelector("#import-input"),
  clearBtn: document.querySelector("#clear-btn"),
  seedBtn: document.querySelector("#seed-btn"),
  jumpButtons: document.querySelectorAll("[data-jump]"),
  quickLogBtn: document.querySelector("#quick-log-btn"),
  simpleModeBtn: document.querySelector("#simple-mode-btn"),
  languageSelect: document.querySelector("#language-select"),
  preferencesForm: document.querySelector("#preferences-form"),
  preferencesLanguageSelect: document.querySelector("#preferences-language-select"),
  preferencesSimpleMode: document.querySelector("#preferences-simple-mode"),
  replayOnboardingBtn: document.querySelector("#replay-onboarding-btn"),
  notificationForm: document.querySelector("#notification-form"),
  notificationEnabled: document.querySelector("#notification-enabled"),
  notificationDailyCheck: document.querySelector("#notification-daily-check"),
  notificationAttention: document.querySelector("#notification-attention"),
  notificationStatus: document.querySelector("#notification-status"),
  requestNotificationBtn: document.querySelector("#request-notification-btn"),
  testNotificationBtn: document.querySelector("#test-notification-btn"),
  settingsTabs: document.querySelectorAll("#settings-tabs [data-tab-target]"),
  settingsTabPanels: document.querySelectorAll(".tab-panel"),
  settingsForm: document.querySelector("#settings-form"),
  manualCycleLength: document.querySelector("#manual-cycle-length"),
  manualPeriodLength: document.querySelector("#manual-period-length"),
  parentLockMinutes: document.querySelector("#parent-lock-minutes"),
  resetSettingsBtn: document.querySelector("#reset-settings-btn"),
  dailyForm: document.querySelector("#daily-form"),
  dailyLogId: document.querySelector("#daily-log-id"),
  dailyDate: document.querySelector("#daily-date"),
  dailyBleeding: document.querySelector("#daily-bleeding"),
  dailyPainLevel: document.querySelector("#daily-pain-level"),
  dailyPainOutput: document.querySelector("#daily-pain-output"),
  energyLevel: document.querySelector("#energy-level"),
  energyOutput: document.querySelector("#energy-output"),
  dailyMood: document.querySelector("#daily-mood"),
  dailyNotes: document.querySelector("#daily-notes"),
  dailySymptomOptions: document.querySelector("#daily-symptom-options"),
  dailyFormStatus: document.querySelector("#daily-form-status"),
  resetDailyFormBtn: document.querySelector("#reset-daily-form-btn"),
  installBtn: document.querySelector("#install-btn"),
  alertFlagOptions: document.querySelector("#alert-flag-options"),
  alertAdviceText: document.querySelector("#alert-advice-text"),
  parentModeBtn: document.querySelector("#parent-mode-btn"),
  parentOnlySections: document.querySelectorAll(".parent-only"),
  pinForm: document.querySelector("#pin-form"),
  parentPin: document.querySelector("#parent-pin"),
  confirmParentPin: document.querySelector("#confirm-parent-pin"),
  clearPinBtn: document.querySelector("#clear-pin-btn"),
  pinStatus: document.querySelector("#pin-status"),
  pinDialog: document.querySelector("#pin-dialog"),
  pinDialogTitle: document.querySelector("#pin-dialog-title"),
  pinDialogForm: document.querySelector("#pin-dialog-form"),
  pinDialogInput: document.querySelector("#pin-dialog-input"),
  pinDialogConfirmWrap: document.querySelector("#pin-dialog-confirm-wrap"),
  pinDialogConfirmInput: document.querySelector("#pin-dialog-confirm-input"),
  pinDialogStatus: document.querySelector("#pin-dialog-status"),
  pinDialogToggleVisibility: document.querySelector("#pin-dialog-toggle-visibility"),
  printChecklistBtn: document.querySelector("#print-checklist-btn"),
  welcomeDialog: document.querySelector("#welcome-dialog"),
  welcomeDialogForm: document.querySelector("#welcome-dialog-form"),
  changelogDialog: document.querySelector("#changelog-dialog"),
  showChangelogBtn: document.querySelector("#show-changelog-btn"),
  dailyDetailDialog: document.querySelector("#daily-detail-dialog"),
  dailyDetailDialogForm: document.querySelector("#daily-detail-dialog-form"),
  dailyDetailTitle: document.querySelector("#daily-detail-title"),
  dailyDetailContent: document.querySelector("#daily-detail-content"),
  dailyDetailEditBtn: document.querySelector("#daily-detail-edit-btn"),
  toast: document.querySelector("#toast"),
  footerVersion: document.querySelector("#footer-version"),
};

let toastTimer = null;

bootstrap();

function getLanguage() {
  return SUPPORTED_LANGUAGES.includes(state.settings.language) ? state.settings.language : DEFAULT_LANGUAGE;
}

function t(key, variables = {}) {
  const lang = getLanguage();
  const template = I18N[lang]?.[key] ?? I18N[DEFAULT_LANGUAGE]?.[key] ?? key;
  return Object.entries(variables).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    template,
  );
}

function labelFromCatalog(catalog, value) {
  return VALUE_LABELS[catalog]?.[String(value)]?.[getLanguage()] ?? String(value);
}

function bootstrap() {
  attachEvents();
  loadState();
  renderSymptomOptions(elements.symptomOptions, "period-symptoms");
  renderSymptomOptions(elements.dailySymptomOptions, "daily-symptoms");
  renderSymptomOptions(elements.alertFlagOptions, "alert-flags", ALERT_FLAGS);
  resetDailyForm();
  render();
  registerServiceWorker();
  maybeShowOnboarding();
}

function detectPreferredLanguage() {
  const browserLanguage = String(navigator.language || navigator.userLanguage || DEFAULT_LANGUAGE).toLowerCase();
  if (browserLanguage.startsWith("en")) return "en";
  if (browserLanguage.startsWith("zh")) return "zh-CN";
  return DEFAULT_LANGUAGE;
}

function attachEvents() {
  elements.painLevel.addEventListener("input", () => {
    elements.painOutput.textContent = elements.painLevel.value;
  });
  elements.dailyPainLevel.addEventListener("input", () => {
    elements.dailyPainOutput.textContent = elements.dailyPainLevel.value;
  });
  elements.energyLevel.addEventListener("input", () => {
    elements.energyOutput.textContent = elements.energyLevel.value;
  });
  elements.dailyForm.addEventListener("input", updateAlertAdvice);
  document.querySelectorAll(".choice-chip[data-target]").forEach((button) => {
    button.addEventListener("click", () => {
      setChoiceValue(button.dataset.target, button.dataset.value);
    });
  });

  elements.periodForm.addEventListener("submit", onSubmitPeriod);
  elements.dailyForm.addEventListener("submit", onSubmitDailyLog);
  elements.resetFormBtn.addEventListener("click", resetPeriodForm);
  elements.resetDailyFormBtn.addEventListener("click", resetDailyForm);

  elements.prevMonth.addEventListener("click", () => {
    state.calendarDate = addMonths(state.calendarDate, -1);
    renderCalendar(buildInsights());
  });
  elements.nextMonth.addEventListener("click", () => {
    state.calendarDate = addMonths(state.calendarDate, 1);
    renderCalendar(buildInsights());
  });

  elements.calendarGrid.addEventListener("click", (event) => {
    const day = event.target.closest("[data-date]");
    if (!day) return;
    fillDailyDate(day.dataset.date);
  });

  elements.exportBtn.addEventListener("click", exportData);
  elements.exportSummaryBtn.addEventListener("click", exportSummary);
  elements.importInput.addEventListener("change", importData);
  elements.clearBtn.addEventListener("click", clearAllData);
  elements.seedBtn.addEventListener("click", seedData);
  elements.preferencesForm?.addEventListener("submit", savePreferences);
  elements.replayOnboardingBtn?.addEventListener("click", replayOnboarding);
  elements.notificationForm?.addEventListener("submit", saveNotificationSettings);
  elements.requestNotificationBtn?.addEventListener("click", requestNotificationPermission);
  elements.testNotificationBtn?.addEventListener("click", sendTestNotification);
  elements.settingsTabs.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveSettingsTab(button.dataset.tabTarget);
    });
  });
  elements.settingsForm.addEventListener("submit", saveSettings);
  elements.resetSettingsBtn.addEventListener("click", resetSettings);
  elements.installBtn.addEventListener("click", installApp);
  elements.parentModeBtn.addEventListener("click", toggleParentMode);
  elements.quickLogBtn?.addEventListener("click", quickLogToday);
  elements.simpleModeBtn?.addEventListener("click", toggleSimpleMode);
  elements.languageSelect?.addEventListener("change", onLanguageChange);
  elements.pinForm.addEventListener("submit", savePin);
  elements.clearPinBtn.addEventListener("click", clearPin);
  elements.pinDialogForm.addEventListener("submit", handlePinDialogSubmit);
  elements.pinDialogToggleVisibility?.addEventListener("click", togglePinVisibility);
  elements.printChecklistBtn?.addEventListener("click", () => window.print());
  elements.welcomeDialogForm?.addEventListener("submit", closeOnboarding);
  elements.showChangelogBtn?.addEventListener("click", () => elements.changelogDialog?.showModal());
  elements.dailyDetailEditBtn?.addEventListener("click", openDetailLogEditor);

  elements.jumpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selector = button.dataset.jump;
      document.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.deferredInstallPrompt = event;
    elements.installBtn.classList.remove("is-hidden");
  });

  window.addEventListener("appinstalled", () => {
    state.deferredInstallPrompt = null;
    elements.installBtn.classList.add("is-hidden");
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      void evaluateNotificationTriggers(buildInsights());
    }
  });
}

function renderSymptomOptions(container, groupName, items = SYMPTOMS) {
  const catalog = groupName === "alert-flags" ? "alertFlags" : "symptoms";
  container.innerHTML = items.map(
    (symptom) => `
      <label class="tag-check">
        <input type="checkbox" name="${groupName}" value="${symptom}">
        <span>${labelFromCatalog(catalog, symptom)}</span>
      </label>
    `,
  ).join("");
}

function onSubmitPeriod(event) {
  event.preventDefault();

  const payload = {
    id: elements.recordId.value || crypto.randomUUID(),
    startDate: elements.startDate.value,
    endDate: elements.endDate.value,
    flowLevel: elements.flowLevel.value,
    painLevel: Number(elements.painLevel.value),
    mood: elements.mood.value,
    symptoms: getSelectedSymptoms("period-symptoms"),
    notes: elements.notes.value.trim(),
  };

  if (!payload.startDate || !payload.endDate) {
    setFormStatus(getLanguage() === "en" ? "Please fill in both start and end dates." : "请填写开始和结束日期。");
    return;
  }

  if (payload.endDate < payload.startDate) {
    setFormStatus(getLanguage() === "en" ? "End date cannot be earlier than start date." : "结束日期不能早于开始日期。");
    return;
  }

  const existsIndex = state.records.findIndex((record) => record.id === payload.id);
  const statusMessage = existsIndex >= 0
    ? (getLanguage() === "en" ? "Record updated." : "记录已更新。")
    : (getLanguage() === "en" ? "Record saved." : "记录已保存。");
  if (existsIndex >= 0) {
    state.records[existsIndex] = payload;
  } else {
    state.records.push(payload);
  }

  sortRecords();
  saveState();
  resetPeriodForm();
  render();
  setFormStatus(statusMessage);
  showToast(statusMessage);
}

function onSubmitDailyLog(event) {
  event.preventDefault();

  const payload = {
    id: elements.dailyLogId.value || crypto.randomUUID(),
    date: elements.dailyDate.value,
    bleeding: elements.dailyBleeding.value,
    painLevel: Number(elements.dailyPainLevel.value),
    energyLevel: Number(elements.energyLevel.value),
    mood: elements.dailyMood.value,
    symptoms: getSelectedSymptoms("daily-symptoms"),
    alertFlags: getSelectedSymptoms("alert-flags"),
    notes: elements.dailyNotes.value.trim(),
  };

  if (!payload.date) {
    setDailyFormStatus(getLanguage() === "en" ? "Please choose a date." : "请选择日期。");
    return;
  }

  const existsIndex = state.dailyLogs.findIndex((log) => log.id === payload.id);
  const statusMessage = existsIndex >= 0
    ? (getLanguage() === "en" ? "Daily log updated." : "日报已更新。")
    : (getLanguage() === "en" ? "Daily log saved." : "日报已保存。");
  if (existsIndex >= 0) {
    state.dailyLogs[existsIndex] = payload;
  } else {
    state.dailyLogs.push(payload);
  }

  sortDailyLogs();
  saveState();
  resetDailyForm();
  render();
  setDailyFormStatus(statusMessage);
  showToast(statusMessage);
}

function render() {
  const insights = buildInsights();
  document.body.classList.toggle("simple-mode", state.settings.simpleMode);
  applyTranslations();
  renderHero(insights);
  renderStats(insights);
  renderReminderCenter(insights);
  renderPrediction(insights);
  renderTrend(insights);
  renderCalendar(insights);
  renderRecords();
  renderDailyLogs();
  renderSettings();
  renderParentMode();
  renderPinSettings();
  updateAlertAdvice();
  void evaluateNotificationTriggers(insights);
}

function applyTranslations() {
  const lang = getLanguage();
  const periodSelected = getSelectedSymptoms("period-symptoms");
  const dailySelected = getSelectedSymptoms("daily-symptoms");
  const alertSelected = getSelectedSymptoms("alert-flags");
  document.documentElement.lang = lang;
  document.title = t("app.name");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    node.innerHTML = t(node.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  if (elements.languageSelect) {
    elements.languageSelect.value = lang;
  }
  if (elements.preferencesLanguageSelect) {
    elements.preferencesLanguageSelect.value = lang;
  }
  if (elements.footerVersion) {
    elements.footerVersion.textContent = `${t("app.name")} v${VERSION}`;
  }
  renderSymptomOptions(elements.symptomOptions, "period-symptoms");
  renderSymptomOptions(elements.dailySymptomOptions, "daily-symptoms");
  renderSymptomOptions(elements.alertFlagOptions, "alert-flags", ALERT_FLAGS);
  setCheckedSymptoms("period-symptoms", periodSelected);
  setCheckedSymptoms("daily-symptoms", dailySelected);
  setCheckedSymptoms("alert-flags", alertSelected);
  syncStaticOptions();
}

function syncStaticOptions() {
  document.querySelectorAll("#flow-level option").forEach((option) => {
    option.textContent = labelFromCatalog("flow", option.value);
  });
  document.querySelectorAll("#mood option, #daily-mood-choices .choice-chip").forEach((node) => {
    if (node.tagName === "OPTION") {
      node.textContent = labelFromCatalog("mood", node.value);
      return;
    }
    node.querySelector("span:last-child").textContent = labelFromCatalog("mood", node.dataset.value);
  });
  document.querySelectorAll("#daily-bleeding-choices .choice-chip").forEach((node) => {
    node.querySelector("span:last-child").textContent = labelFromCatalog("bleeding", node.dataset.value);
  });
  document.querySelectorAll("#daily-pain-choices .choice-chip").forEach((node) => {
    node.querySelector("span:last-child").textContent = labelFromCatalog("painChoice", node.dataset.value);
  });
  document.querySelectorAll("#energy-choices .choice-chip").forEach((node) => {
    node.querySelector("span:last-child").textContent = labelFromCatalog("energyChoice", node.dataset.value);
  });
  document.querySelectorAll("#parent-lock-minutes option").forEach((option) => {
    option.textContent = labelFromCatalog("lockMinutes", option.value);
  });
  document.querySelector("#parent-pin")?.setAttribute("placeholder", getLanguage() === "en" ? "4 digits" : "4 位数字");
  document.querySelector("#confirm-parent-pin")?.setAttribute("placeholder", getLanguage() === "en" ? "Enter again" : "再次输入");
  document.querySelector("#manual-cycle-length")?.setAttribute("placeholder", getLanguage() === "en" ? "Empty = auto" : "留空则自动计算");
  document.querySelector("#manual-period-length")?.setAttribute("placeholder", getLanguage() === "en" ? "Empty = auto" : "留空则自动计算");
  document.querySelector("#pin-dialog-input")?.setAttribute("placeholder", getLanguage() === "en" ? "Enter PIN" : "请输入 PIN");
  document.querySelector("#pin-dialog-confirm-input")?.setAttribute("placeholder", getLanguage() === "en" ? "Enter PIN again" : "再次输入 PIN");
}

function buildInsights() {
  const sorted = [...state.records].sort((a, b) => a.startDate.localeCompare(b.startDate));
  const sortedDailyLogs = [...state.dailyLogs].sort((a, b) => a.date.localeCompare(b.date));
  const cycleLengths = [];
  const periodLengths = sorted.map((record) => diffDays(record.startDate, record.endDate) + 1);

  for (let index = 1; index < sorted.length; index += 1) {
    cycleLengths.push(diffDays(sorted[index - 1].startDate, sorted[index].startDate));
  }

  const autoCycleLength = Math.round(average(cycleLengths) || 28);
  const autoPeriodLength = Math.round(average(periodLengths) || 5);
  const averageCycleLength = Number(state.settings.manualCycleLength) || autoCycleLength;
  const averagePeriodLength = Number(state.settings.manualPeriodLength) || autoPeriodLength;
  const lastRecord = sorted.at(-1) || null;
  const today = toDateInputValue(new Date());
  const symptomCounts = countSymptoms(sorted, sortedDailyLogs);
  const frequentSymptoms = Object.entries(symptomCounts)
    .sort((left, right) => right[1] - left[1])
    .slice(0, 4);
  const currentPeriodRecord = sorted.find((record) => today >= record.startDate && today <= record.endDate) || null;
  const todayLog = sortedDailyLogs.find((log) => log.date === today) || null;
  const lastDailyLog = sortedDailyLogs.at(-1) || null;

  let nextStartDate = null;
  let fertileWindow = null;
  let cycleDay = null;

  if (lastRecord) {
    nextStartDate = addDays(lastRecord.startDate, averageCycleLength);
    const ovulationDate = addDays(nextStartDate, -14);
    fertileWindow = {
      start: addDays(ovulationDate, -4),
      end: addDays(ovulationDate, 1),
      ovulation: ovulationDate,
    };
    cycleDay = diffDays(lastRecord.startDate, today) + 1;
  }

  const predictedPeriodRange = nextStartDate
    ? { start: nextStartDate, end: addDays(nextStartDate, averagePeriodLength - 1) }
    : null;

  const recentLogs = sortedDailyLogs.slice(-7);
  const averageRecentPain = average(recentLogs.map((log) => log.painLevel));
  const averageRecentEnergy = average(recentLogs.map((log) => log.energyLevel));
  const highPainCount = sortedDailyLogs.filter((log) => log.painLevel >= 7).length;
  const needsParentAttentionCount = sortedDailyLogs.filter((log) => shouldTellParent(log)).length;
  const attentionLogs = [...sortedDailyLogs]
    .filter((log) => shouldTellParent(log))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return {
    today,
    sorted,
    sortedDailyLogs,
    autoCycleLength,
    autoPeriodLength,
    averageCycleLength,
    averagePeriodLength,
    cycleLengths,
    cycleVariation: getRange(cycleLengths),
    frequentSymptoms,
    lastRecord,
    nextStartDate,
    fertileWindow,
    cycleDay,
    currentPeriodRecord,
    predictedPeriodRange,
    todayLog,
    lastDailyLog,
    averageRecentPain,
    averageRecentEnergy,
    highPainCount,
    needsParentAttentionCount,
    attentionLogs,
  };
}

function renderHero(insights) {
  elements.heroPills.innerHTML = "";

  if (!insights.lastRecord) {
    elements.cycleDay.textContent = getLanguage() === "en" ? "No data yet" : "尚无数据";
    elements.cycleSummary.textContent = getLanguage() === "en"
      ? "Add a few period records first. This area will then show cycle patterns for the child and parent to review together."
      : "先记录几次月经后，这里会显示周期变化，也方便孩子和家长一起观察。";
    return;
  }

  const statusText = insights.currentPeriodRecord
    ? (getLanguage() === "en" ? "On period" : "经期中")
    : (getLanguage() === "en" ? `Cycle day ${Math.max(insights.cycleDay, 1)}` : `周期第 ${Math.max(insights.cycleDay, 1)} 天`);
  elements.cycleDay.textContent = statusText;

  if (insights.currentPeriodRecord) {
    elements.cycleSummary.textContent = getLanguage() === "en"
      ? `This period started on ${formatDate(insights.currentPeriodRecord.startDate)} and is recorded to end on ${formatDate(insights.currentPeriodRecord.endDate)}.`
      : `本次经期开始于 ${formatDate(insights.currentPeriodRecord.startDate)}，结束日期记录为 ${formatDate(insights.currentPeriodRecord.endDate)}。`;
  } else if (state.settings.parentMode && insights.nextStartDate) {
    elements.cycleSummary.textContent = getLanguage() === "en"
      ? `Estimated next period: around ${formatDate(insights.nextStartDate)}. Adjust based on real records when needed.`
      : `预计下次来潮时间为 ${formatDate(insights.nextStartDate)}，可根据实际情况调整与修正。`;
  } else {
    elements.cycleSummary.textContent = getLanguage() === "en"
      ? "Keep logging. If anything feels wrong, remember to tell a parent."
      : "继续记录就好，看到不舒服的时候记得告诉家长。";
  }

  const pillTexts = [
    getLanguage() === "en" ? `${insights.sorted.length} records` : `已记录 ${insights.sorted.length} 次`,
    getLanguage() === "en"
      ? `Latest mood ${insights.todayLog ? labelFromCatalog("mood", insights.todayLog.mood) : "Not filled"}`
      : `最近状态 ${insights.todayLog ? labelFromCatalog("mood", insights.todayLog.mood) : "还没填"}`,
    insights.todayLog
      ? (getLanguage() === "en"
        ? `Today: ${labelFromCatalog("bleeding", insights.todayLog.bleeding)} / pain ${insights.todayLog.painLevel}`
        : `今日日报 ${labelFromCatalog("bleeding", insights.todayLog.bleeding)} / 疼痛 ${insights.todayLog.painLevel}`)
      : (getLanguage() === "en" ? "No daily log today" : "今天还没有日报"),
  ];

  pillTexts.forEach((text) => {
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = text;
    elements.heroPills.appendChild(pill);
  });
}

function renderStats(insights) {
  const stats = [
    {
      label: getLanguage() === "en" ? "Period Records" : "经期记录",
      value: getLanguage() === "en" ? `${insights.sorted.length}` : `${insights.sorted.length} 次`,
      note: insights.sorted.length
        ? (getLanguage() === "en" ? `Latest: ${formatDate(insights.lastRecord.startDate)}` : `最近一次：${formatDate(insights.lastRecord.startDate)}`)
        : (getLanguage() === "en" ? "Try to log at least 3 cycles." : "建议至少记录 3 个周期。"),
    },
    {
      label: getLanguage() === "en" ? "Tell Parent" : "需要告诉家长",
      value: getLanguage() === "en" ? `${insights.needsParentAttentionCount}` : `${insights.needsParentAttentionCount} 次`,
      note: insights.needsParentAttentionCount
        ? (getLanguage() === "en" ? "Some daily logs need extra attention." : "出现过比较需要留意的日报。")
        : (getLanguage() === "en" ? "No strong alerts right now." : "目前没有明显异常提醒。"),
    },
    {
      label: getLanguage() === "en" ? "Last 7 Days" : "最近 7 天状态",
      value: getLanguage() === "en"
        ? `Pain ${insights.averageRecentPain ? insights.averageRecentPain.toFixed(1) : "0.0"}`
        : `${insights.averageRecentPain ? insights.averageRecentPain.toFixed(1) : "0.0"} 疼痛`,
      note: getLanguage() === "en"
        ? `Avg energy ${insights.averageRecentEnergy ? insights.averageRecentEnergy.toFixed(1) : "0.0"}/5`
        : `平均精力 ${insights.averageRecentEnergy ? insights.averageRecentEnergy.toFixed(1) : "0.0"}/5`,
    },
  ];

  elements.statsGrid.innerHTML = "";
  stats.forEach((stat) => {
    const node = elements.statTemplate.content.cloneNode(true);
    node.querySelector(".card__label").textContent = stat.label;
    node.querySelector("h3").textContent = stat.value;
    node.querySelector(".muted").textContent = stat.note;
    elements.statsGrid.appendChild(node);
  });
}

function renderReminderCenter(insights) {
  const latestAttention = insights.attentionLogs[0] || null;
  const hasAttention = insights.needsParentAttentionCount > 0;
  const hasHighPain = insights.highPainCount > 0;
  const noLogs = !insights.sorted.length && !insights.sortedDailyLogs.length;
  const severity = getReminderSeverity(insights);

  if (elements.reminderCenterPanel) {
    elements.reminderCenterPanel.dataset.level = severity;
  }
  if (elements.reminderCenterBadge) {
    elements.reminderCenterBadge.textContent = getReminderSeverityLabel(severity);
  }

  if (noLogs) {
    elements.reminderCenterContent.innerHTML = `
      <p>${getLanguage() === "en" ? "No reminders yet. Start with one period record or one daily log." : "现在还没有提醒。先记一条经期或日报就可以。"}</p>
      <p>${getLanguage() === "en" ? "When there is pain, heavy bleeding, or anything unusual, this card will summarize it here." : "如果出现疼痛、出血多或其他需要留意的情况，这里会自动帮你汇总。"}</p>
    `;
    return;
  }

  const topMessage = hasAttention
    ? (getLanguage() === "en" ? "Some recent records should be shared with a parent." : "最近有一些记录建议告诉家长。")
    : (getLanguage() === "en" ? "No urgent alerts right now. Keep logging." : "现在没有明显的紧急提醒，继续记录就好。");
  const painMessage = hasHighPain
    ? (getLanguage() === "en" ? `${insights.highPainCount} high-pain log(s) were recorded recently.` : `最近记录到 ${insights.highPainCount} 次高疼痛日报。`)
    : (getLanguage() === "en" ? "No very high pain logs recently." : "最近没有很高疼痛的日报。");
  const latestMessage = latestAttention
    ? (getLanguage() === "en"
      ? `Latest alert: ${formatDate(latestAttention.date)}, ${labelFromCatalog("bleeding", latestAttention.bleeding)}, pain ${latestAttention.painLevel}/10.`
      : `最近一次提醒：${formatDate(latestAttention.date)}，出血 ${labelFromCatalog("bleeding", latestAttention.bleeding)}，疼痛 ${latestAttention.painLevel}/10。`)
    : (getLanguage() === "en" ? "No recent records need parent attention." : "最近没有需要告诉家长的记录。");
  const parentOnlyDetail = latestAttention && state.settings.parentMode
    ? (getLanguage() === "en"
      ? `Parent view: flags ${formatAlertFlags(latestAttention)}.`
      : `家长查看：提醒原因包括 ${formatAlertFlags(latestAttention)}。`)
    : "";
  const recentAlertList = insights.attentionLogs.length
    ? `
      <div class="reminder-list">
        ${insights.attentionLogs.map((log) => `
          <article class="reminder-item" data-level="${getLogSeverity(log)}" data-log-id="${log.id}" title="${getLanguage() === "en" ? "Open this daily log" : "打开这条日报"}">
            <div class="reminder-item__top">
              <strong>${formatDate(log.date)}</strong>
              <span class="status-pill">${getReminderSeverityLabel(getLogSeverity(log))}</span>
            </div>
            <p>${getLanguage() === "en"
              ? `${labelFromCatalog("bleeding", log.bleeding)}, pain ${log.painLevel}/10, ${formatAlertFlags(log) || "watch symptoms"}`
              : `出血 ${labelFromCatalog("bleeding", log.bleeding)}，疼痛 ${log.painLevel}/10，${formatAlertFlags(log) || "继续观察身体感觉"}`}</p>
          </article>
        `).join("")}
      </div>
    `
    : "";

  elements.reminderCenterContent.innerHTML = `
    <p><strong>${getLanguage() === "en" ? "Now:" : "现在："}</strong>${topMessage}</p>
    <p><strong>${getLanguage() === "en" ? "Pain:" : "疼痛："}</strong>${painMessage}</p>
    <p><strong>${getLanguage() === "en" ? "Latest alert:" : "最近提醒："}</strong>${latestMessage}</p>
    ${parentOnlyDetail ? `<p><strong>${getLanguage() === "en" ? "Why:" : "原因："}</strong>${parentOnlyDetail}</p>` : ""}
    ${recentAlertList}
  `;

  elements.reminderCenterContent.querySelectorAll("[data-log-id]").forEach((item) => {
    item.addEventListener("click", () => {
      openDailyLogDetail(item.dataset.logId);
    });
  });
}

function getReminderSeverity(insights) {
  const latestAttention = insights.attentionLogs[0] || null;
  if (!latestAttention) return "ok";
  const hasCriticalFlag = Array.isArray(latestAttention.alertFlags) && latestAttention.alertFlags.length > 0;
  if (hasCriticalFlag || latestAttention.bleeding === "重" || latestAttention.painLevel >= 8) {
    return "alert";
  }
  if (insights.highPainCount > 0 || insights.needsParentAttentionCount > 0) {
    return "watch";
  }
  return "ok";
}

function getLogSeverity(log) {
  const hasCriticalFlag = Array.isArray(log.alertFlags) && log.alertFlags.length > 0;
  if (hasCriticalFlag || log.bleeding === "重" || log.painLevel >= 8) {
    return "alert";
  }
  if (shouldTellParent(log)) {
    return "watch";
  }
  return "ok";
}

function getReminderSeverityLabel(level) {
  if (level === "alert") {
    return getLanguage() === "en" ? "Tell Parent Now" : "尽快告诉家长";
  }
  if (level === "watch") {
    return getLanguage() === "en" ? "Watch Closely" : "需要留意";
  }
  return getLanguage() === "en" ? "Normal Check" : "正常观察";
}

function renderPrediction(insights) {
  if (!state.settings.parentMode) {
    elements.predictionContent.innerHTML = `
      <p>${getLanguage() === "en" ? "This section is for parents." : "这里是家长查看区。"}</p>
      <p class="muted">${getLanguage() === "en" ? "Predictions and fertility details stay hidden by default so kids do not see unnecessary information." : "默认不会显示预测和易孕信息，避免给孩子增加不必要的困扰。"}</p>
    `;
    return;
  }

  if (!insights.lastRecord) {
    elements.predictionContent.innerHTML = `
      <p>${getLanguage() === "en" ? "Not enough data for predictions yet." : "暂无足够数据生成预测。"}</p>
      <p class="muted">${getLanguage() === "en" ? "Start with the latest period first. Predictions get better as more records are added." : "建议先录入最近一次月经，再慢慢补充前面的记录，后面的估算会更稳定。"}</p>
    `;
    return;
  }

  const nextText = insights.nextStartDate
    ? (getLanguage() === "en" ? `around ${formatDate(insights.nextStartDate)}` : `${formatDate(insights.nextStartDate)} 左右`)
    : (getLanguage() === "en" ? "waiting for more records" : "等待更多记录");
  const fertileText = insights.fertileWindow
    ? (getLanguage() === "en"
      ? `${formatDate(insights.fertileWindow.start)} to ${formatDate(insights.fertileWindow.end)}, estimated ovulation ${formatDate(insights.fertileWindow.ovulation)}`
      : `${formatDate(insights.fertileWindow.start)} 至 ${formatDate(insights.fertileWindow.end)}，排卵日估计为 ${formatDate(insights.fertileWindow.ovulation)}`)
    : (getLanguage() === "en" ? "none yet" : "暂无");

  elements.predictionContent.innerHTML = `
    <p><strong>${getLanguage() === "en" ? "Next period estimate:" : "下次来潮预测："}</strong>${nextText}</p>
    <p><strong>${getLanguage() === "en" ? "Fertile window:" : "易孕窗口："}</strong>${fertileText}</p>
    <p><strong>${getLanguage() === "en" ? "Source:" : "参数来源："}</strong>${
      Number(state.settings.manualCycleLength) || Number(state.settings.manualPeriodLength)
        ? (getLanguage() === "en" ? "Partly based on manual settings." : "当前部分使用手动输入参数。")
        : (getLanguage() === "en" ? "Fully based on historical averages." : "当前完全基于历史平均值。")
    }</p>
    <p><strong>${getLanguage() === "en" ? "Note:" : "说明："}</strong>${getLanguage() === "en" ? "These are estimates based on past records. They are only for observation. If there is long-lasting pain, unusual bleeding, or no period for a long time, talk with a parent and consider medical advice." : "这是按历史记录做出的估算，只是帮助观察变化。如果孩子长期疼痛明显、出血异常，或很久没有来月经，建议告诉家长并咨询医生。"}</p>
  `;
}

function renderTrend(insights) {
  if (!insights.sorted.length && !insights.sortedDailyLogs.length) {
    elements.trendContent.innerHTML = `
      <p>暂无趋势数据。</p>
      <p class="muted">随着记录数量增加，这里会总结周期波动、症状和最近状态。</p>
    `;
    return;
  }

  const irregularityText = insights.cycleLengths.length
    ? insights.cycleVariation <= 3
      ? (getLanguage() === "en" ? "Cycle variation is small and looks fairly stable." : "周期波动较小，整体比较稳定。")
      : insights.cycleVariation <= 7
        ? (getLanguage() === "en" ? "Cycle variation is mild. Keep watching." : "周期有轻微波动，建议继续观察。")
        : (getLanguage() === "en" ? "Cycle variation is more noticeable. Consider medical advice if it continues." : "周期波动较明显，如果长期持续可考虑就医咨询。")
    : (getLanguage() === "en" ? "At least two period records are needed to judge cycle variation." : "需要至少两次经期记录才能判断周期波动。");

  const symptomText = insights.frequentSymptoms.length
    ? insights.frequentSymptoms.map(([name, count]) => (
      getLanguage() === "en" ? `${labelFromCatalog("symptoms", name)} (${count})` : `${labelFromCatalog("symptoms", name)}（${count} 次）`
    )).join(getLanguage() === "en" ? ", " : "、")
    : (getLanguage() === "en" ? "No frequent symptom data yet." : "暂无高频症状数据。");

  elements.trendContent.innerHTML = `
    <p><strong>${getLanguage() === "en" ? "Recent status:" : "孩子近况："}</strong>${insights.lastDailyLog ? (getLanguage() === "en" ? "Recent logs are being kept consistently." : "最近有持续记录，可以继续保持。") : (getLanguage() === "en" ? "Start by logging the uncomfortable days first." : "先从不舒服的那几天开始记就可以。")}</p>
    <p><strong>${getLanguage() === "en" ? "Cycle variation:" : "周期波动："}</strong>${state.settings.parentMode ? irregularityText : (getLanguage() === "en" ? "Visible in Parent Mode." : "这部分放在家长模式里查看。")} </p>
    <p><strong>${getLanguage() === "en" ? "Variation range:" : "波动范围："}</strong>${state.settings.parentMode && insights.cycleLengths.length ? (getLanguage() === "en" ? `${insights.cycleVariation} days` : `${insights.cycleVariation} 天`) : (getLanguage() === "en" ? "Parent Mode only" : "家长模式可见")}</p>
    <p><strong>${getLanguage() === "en" ? "Frequent symptoms:" : "高频症状："}</strong>${symptomText}</p>
    <p><strong>${getLanguage() === "en" ? "High-pain logs:" : "高疼痛日报："}</strong>${getLanguage() === "en" ? `${insights.highPainCount}` : `${insights.highPainCount} 次`}${insights.highPainCount ? (getLanguage() === "en" ? ", watch for triggers and what helps." : "，可以单独留意诱因和缓解方式。") : ""}</p>
    <p><strong>${getLanguage() === "en" ? "Latest daily log:" : "最近日报："}</strong>${insights.lastDailyLog ? (getLanguage() === "en" ? `${formatDate(insights.lastDailyLog.date)}, energy ${insights.lastDailyLog.energyLevel}/5, pain ${insights.lastDailyLog.painLevel}/10.` : `${formatDate(insights.lastDailyLog.date)}，精力 ${insights.lastDailyLog.energyLevel}/5，疼痛 ${insights.lastDailyLog.painLevel}/10。`) : (getLanguage() === "en" ? "No daily log yet." : "还没有日报记录。")}</p>
  `;
}

function renderCalendar(insights) {
  const currentMonth = state.calendarDate;
  const monthStart = startOfMonth(currentMonth);
  const gridStart = addDays(toDateInputValue(monthStart), -monthStart.getDay());
  const weekdays = getLanguage() === "en" ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] : ["日", "一", "二", "三", "四", "五", "六"];
  const cells = [];

  elements.calendarTitle.textContent = new Intl.DateTimeFormat(
    getLanguage() === "en" ? "en-US" : "zh-CN",
    { year: "numeric", month: "long" },
  ).format(monthStart);
  elements.calendarGrid.innerHTML = weekdays.map((day) => `<div class="calendar__weekday">${day}</div>`).join("");

  for (let index = 0; index < 42; index += 1) {
    const date = addDays(gridStart, index);
    cells.push(buildDayCell(date, monthStart, insights));
  }

  elements.calendarGrid.insertAdjacentHTML("beforeend", cells.join(""));
}

function buildDayCell(date, monthStart, insights) {
  const isOtherMonth = new Date(date).getMonth() !== monthStart.getMonth();
  const tags = [];
  const states = [];
  const hasPeriod = isDateInRecord(date, insights.sorted);
  const hasPredicted =
    state.settings.parentMode && insights.predictedPeriodRange && date >= insights.predictedPeriodRange.start && date <= insights.predictedPeriodRange.end;
  const hasFertile =
    state.settings.parentMode && insights.fertileWindow && date >= insights.fertileWindow.start && date <= insights.fertileWindow.end;
  const dayLog = insights.sortedDailyLogs.find((log) => log.date === date) || null;

  if (hasPeriod) {
    tags.push(`<span>${getLanguage() === "en" ? "Period" : "经期"}</span>`);
    states.push("period");
  }
  if (hasPredicted) {
    tags.push(`<span>${getLanguage() === "en" ? "Predicted" : "预测"}</span>`);
    states.push("predicted");
  }
  if (hasFertile) {
    tags.push(`<span>${date === insights.fertileWindow.ovulation ? (getLanguage() === "en" ? "Ovulation" : "排卵") : (getLanguage() === "en" ? "Fertile" : "易孕")}</span>`);
    states.push("fertile");
  }
  if (dayLog) {
    tags.push(`<span class="day-tag--log">${getLanguage() === "en" ? "Log" : "日志"}</span>`);
  }

  const classes = ["calendar__day"];
  if (isOtherMonth) classes.push("is-other-month");
  if (date === insights.today) classes.push("is-today");

  return `
    <article class="${classes.join(" ")}" data-state="${states.join(" ")}" data-date="${date}" title="${getLanguage() === "en" ? `Tap to log ${formatDate(date)}` : `点击快速记录 ${formatDate(date)}`}">
      <div class="day-number">${new Date(date).getDate()}</div>
      <div class="day-tags">${tags.join("")}</div>
    </article>
  `;
}

function renderRecords() {
  if (!state.records.length) {
    elements.recordList.innerHTML = `<div class="empty-state">${getLanguage() === "en" ? "No period records yet. Start with the most recent one first. There is no need to add everything at once." : "还没有任何经期记录。先从最近一次月经开始记就可以，不用一次补很多。"}</div>`;
    return;
  }

  const markup = [...state.records]
    .sort((left, right) => right.startDate.localeCompare(left.startDate))
    .map((record) => {
      const duration = diffDays(record.startDate, record.endDate) + 1;
      return `
        <article class="record-item">
          <div class="record-item__top">
            <div>
              <strong>${formatDate(record.startDate)} - ${formatDate(record.endDate)}</strong>
              <div class="muted">${getLanguage() === "en" ? `${duration} days` : `${duration} 天`}</div>
            </div>
            <div class="record-item__actions">
              <button class="ghost-btn" type="button" data-action="edit-period" data-id="${record.id}">${getLanguage() === "en" ? "Edit" : "编辑"}</button>
              <button class="danger-btn" type="button" data-action="delete-period" data-id="${record.id}">${getLanguage() === "en" ? "Delete" : "删除"}</button>
            </div>
          </div>
          <div class="record-meta">
            <span>${getLanguage() === "en" ? "Flow" : "流量"}：${labelFromCatalog("flow", record.flowLevel)}</span>
            <span>${getLanguage() === "en" ? "Pain" : "疼痛"}：${record.painLevel}/10</span>
            <span>${getLanguage() === "en" ? "Mood" : "情绪"}：${labelFromCatalog("mood", record.mood)}</span>
            ${record.symptoms.map((symptom) => `<span>${labelFromCatalog("symptoms", symptom)}</span>`).join("")}
          </div>
          <p class="record-notes">${record.notes || (getLanguage() === "en" ? "No notes" : "无备注")}</p>
        </article>
      `;
    })
    .join("");

  elements.recordList.innerHTML = markup;
  bindRecordActions(elements.recordList, "period");
}

function renderDailyLogs() {
  if (!state.dailyLogs.length) {
    elements.dailyLogList.innerHTML = `<div class="empty-state">${getLanguage() === "en" ? "No daily logs yet. Starting with today is fine, and tapping any date on the calendar fills it in quickly." : "还没有日报。先记今天也可以；点日历上的任意一天，能快速带入日期。"}</div>`;
    return;
  }

  const markup = [...state.dailyLogs]
    .sort((left, right) => right.date.localeCompare(left.date))
    .slice(0, 8)
    .map((log) => `
      <article class="record-item">
        <div class="record-item__top">
          <div>
            <strong>${formatDate(log.date)}</strong>
            <div class="muted">${getLanguage() === "en" ? `Bleeding ${labelFromCatalog("bleeding", log.bleeding)}, energy ${log.energyLevel}/5${shouldTellParent(log) ? ", tell a parent" : ""}` : `出血 ${labelFromCatalog("bleeding", log.bleeding)}，精力 ${log.energyLevel}/5${shouldTellParent(log) ? "，建议告诉家长" : ""}`}</div>
          </div>
          <div class="record-item__actions">
            <button class="ghost-btn" type="button" data-action="edit-daily" data-id="${log.id}">${getLanguage() === "en" ? "Edit" : "编辑"}</button>
            <button class="danger-btn" type="button" data-action="delete-daily" data-id="${log.id}">${getLanguage() === "en" ? "Delete" : "删除"}</button>
          </div>
        </div>
        <div class="record-meta">
          <span>${getLanguage() === "en" ? "Pain" : "疼痛"}：${log.painLevel}/10</span>
          <span>${getLanguage() === "en" ? "Mood" : "情绪"}：${labelFromCatalog("mood", log.mood)}</span>
          ${log.symptoms.map((symptom) => `<span>${labelFromCatalog("symptoms", symptom)}</span>`).join("")}
        </div>
        <p class="record-notes">${log.notes || (getLanguage() === "en" ? "No notes" : "无备注")}</p>
      </article>
    `)
    .join("");

  elements.dailyLogList.innerHTML = markup;
  bindRecordActions(elements.dailyLogList, "daily");
}

function bindRecordActions(container, type) {
  container.querySelectorAll("[data-action]").forEach((button) => {
    const { action, id } = button.dataset;
    button.addEventListener("click", () => {
      if (type === "period" && action === "edit-period") editPeriodRecord(id);
      if (type === "period" && action === "delete-period") deletePeriodRecord(id);
      if (type === "daily" && action === "edit-daily") editDailyLog(id);
      if (type === "daily" && action === "delete-daily") deleteDailyLog(id);
    });
  });
}

function editPeriodRecord(recordId) {
  const record = state.records.find((item) => item.id === recordId);
  if (!record) return;

  elements.recordId.value = record.id;
  elements.startDate.value = record.startDate;
  elements.endDate.value = record.endDate;
  elements.flowLevel.value = record.flowLevel;
  elements.painLevel.value = record.painLevel;
  elements.painOutput.textContent = String(record.painLevel);
  elements.mood.value = record.mood;
  elements.notes.value = record.notes;
  setCheckedSymptoms("period-symptoms", record.symptoms);
  setFormStatus(getLanguage() === "en" ? "Period record loaded. Edit and save when ready." : "已载入经期记录，可直接修改后保存。");
  document.querySelector("#record-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function editDailyLog(logId) {
  const log = state.dailyLogs.find((item) => item.id === logId);
  if (!log) return;

  elements.dailyLogId.value = log.id;
  elements.dailyDate.value = log.date;
  setChoiceValue("daily-bleeding", log.bleeding);
  setChoiceValue("daily-pain-level", String(log.painLevel));
  setChoiceValue("energy-level", String(log.energyLevel));
  setChoiceValue("daily-mood", log.mood);
  elements.dailyNotes.value = log.notes;
  setCheckedSymptoms("daily-symptoms", log.symptoms);
  setCheckedSymptoms("alert-flags", log.alertFlags || []);
  setDailyFormStatus(getLanguage() === "en" ? "Daily log loaded. Edit and save when ready." : "已载入日报，可直接修改后保存。");
  elements.dailyForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openDailyLogDetail(logId) {
  const log = state.dailyLogs.find((item) => item.id === logId);
  if (!log || !elements.dailyDetailDialog) return;

  elements.dailyDetailTitle.textContent = getLanguage() === "en"
    ? `Daily Log: ${formatDate(log.date)}`
    : `日报详情：${formatDate(log.date)}`;
  elements.dailyDetailContent.innerHTML = `
    <p><strong>${getLanguage() === "en" ? "Bleeding:" : "出血："}</strong>${labelFromCatalog("bleeding", log.bleeding)}</p>
    <p><strong>${getLanguage() === "en" ? "Pain:" : "疼痛："}</strong>${log.painLevel}/10</p>
    <p><strong>${getLanguage() === "en" ? "Energy:" : "精力："}</strong>${log.energyLevel}/5</p>
    <p><strong>${getLanguage() === "en" ? "Mood:" : "心情："}</strong>${labelFromCatalog("mood", log.mood)}</p>
    <p><strong>${getLanguage() === "en" ? "Body feelings:" : "身体感觉："}</strong>${log.symptoms.length ? log.symptoms.map((symptom) => labelFromCatalog("symptoms", symptom)).join(getLanguage() === "en" ? ", " : "、") : (getLanguage() === "en" ? "None" : "无")}</p>
    <p><strong>${getLanguage() === "en" ? "Alert flags:" : "提醒原因："}</strong>${formatAlertFlags(log) || (getLanguage() === "en" ? "Normal observation" : "正常观察")}</p>
    <p><strong>${getLanguage() === "en" ? "Notes:" : "备注："}</strong>${log.notes || (getLanguage() === "en" ? "No notes" : "无备注")}</p>
  `;
  elements.dailyDetailEditBtn.dataset.logId = log.id;
  elements.dailyDetailEditBtn.textContent = getLanguage() === "en" ? "Edit This Log" : "编辑这条日报";
  elements.dailyDetailDialog.showModal();
}

function openDetailLogEditor() {
  const logId = elements.dailyDetailEditBtn?.dataset.logId;
  if (!logId) return;
  elements.dailyDetailDialog?.close();
  editDailyLog(logId);
}

function deletePeriodRecord(recordId) {
  const record = state.records.find((item) => item.id === recordId);
  if (!record) return;
  if (!window.confirm(`确认删除 ${formatDate(record.startDate)} 的经期记录吗？`)) return;

  state.records = state.records.filter((item) => item.id !== recordId);
  saveState();
  render();
}

function deleteDailyLog(logId) {
  const log = state.dailyLogs.find((item) => item.id === logId);
  if (!log) return;
  if (!window.confirm(`确认删除 ${formatDate(log.date)} 的日报吗？`)) return;

  state.dailyLogs = state.dailyLogs.filter((item) => item.id !== logId);
  saveState();
  render();
}

function resetPeriodForm() {
  elements.periodForm.reset();
  elements.recordId.value = "";
  elements.painLevel.value = "3";
  elements.painOutput.textContent = "3";
  setCheckedSymptoms("period-symptoms", []);
  setFormStatus("");
}

function resetDailyForm() {
  elements.dailyForm.reset();
  elements.dailyLogId.value = "";
  elements.dailyDate.value = toDateInputValue(new Date());
  setChoiceValue("daily-bleeding", "无");
  setChoiceValue("daily-pain-level", "2");
  setChoiceValue("energy-level", "3");
  setChoiceValue("daily-mood", "平稳");
  setCheckedSymptoms("daily-symptoms", []);
  setCheckedSymptoms("alert-flags", []);
  setDailyFormStatus("");
}

function fillDailyDate(date) {
  elements.dailyDate.value = date;
  setDailyFormStatus(getLanguage() === "en" ? `${formatDate(date)} selected. You can fill the daily log now.` : `已选中 ${formatDate(date)}，可直接填写日报。`);
  elements.dailyForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getSelectedSymptoms(groupName) {
  return [...document.querySelectorAll(`input[name='${groupName}']:checked`)].map((input) => input.value);
}

function setChoiceValue(targetId, value) {
  const input = document.querySelector(`#${targetId}`);
  if (!input) return;
  input.value = value;
  document.querySelectorAll(`.choice-chip[data-target='${targetId}']`).forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.value === value);
  });
  if (targetId === "daily-pain-level") elements.dailyPainOutput.textContent = value;
  if (targetId === "energy-level") elements.energyOutput.textContent = value;
  updateAlertAdvice();
}

function setCheckedSymptoms(groupName, selectedSymptoms) {
  document.querySelectorAll(`input[name='${groupName}']`).forEach((input) => {
    input.checked = selectedSymptoms.includes(input.value);
  });
}

function setFormStatus(message) {
  elements.formStatus.textContent = message;
}

function setDailyFormStatus(message) {
  elements.dailyFormStatus.textContent = message;
}

function sortRecords() {
  state.records.sort((left, right) => left.startDate.localeCompare(right.startDate));
}

function sortDailyLogs() {
  state.dailyLogs.sort((left, right) => left.date.localeCompare(right.date));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      state.settings = normalizeSettings({ language: detectPreferredLanguage() });
      return;
    }
    const parsed = JSON.parse(raw);
    state.records = Array.isArray(parsed.records) ? parsed.records.map(normalizeRecord).filter(Boolean) : [];
    state.dailyLogs = Array.isArray(parsed.dailyLogs) ? parsed.dailyLogs.map(normalizeDailyLog).filter(Boolean) : [];
    state.settings = normalizeSettings({
      ...parsed.settings,
      language: parsed.settings?.language || detectPreferredLanguage(),
    });
    sortRecords();
    sortDailyLogs();
  } catch (error) {
    console.error("Failed to load saved period tracker data", error);
    state.settings = normalizeSettings({ language: detectPreferredLanguage() });
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      records: state.records,
      dailyLogs: state.dailyLogs,
      settings: state.settings,
    }),
  );
}

function exportData() {
  const blob = new Blob(
    [
      JSON.stringify(
        {
          records: state.records,
          dailyLogs: state.dailyLogs,
          settings: state.settings,
        },
        null,
        2,
      ),
    ],
    { type: "application/json" },
  );
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${getLanguage() === "en" ? "eva-moon-data" : "period-tracker"}-${toDateInputValue(new Date())}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast(getLanguage() === "en" ? "Raw data exported." : "原始数据已导出。");
}

function exportSummary() {
  const insights = buildInsights();
  const recentLogs = [...state.dailyLogs]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5)
    .map(
      (log) => `
        <tr>
          <td>${formatDate(log.date)}</td>
          <td>${labelFromCatalog("bleeding", log.bleeding)}</td>
          <td>${log.painLevel}/10</td>
          <td>${log.energyLevel}/5</td>
          <td>${labelFromCatalog("mood", log.mood)}</td>
          <td>${shouldTellParent(log) ? (getLanguage() === "en" ? "Tell a parent" : "建议告诉家长") : (getLanguage() === "en" ? "Observe" : "正常观察")}</td>
        </tr>
      `,
    )
    .join("");

  const symptomMarkup = insights.frequentSymptoms.length
    ? insights.frequentSymptoms.map(([name, count]) => `<li>${labelFromCatalog("symptoms", name)}${getLanguage() === "en" ? `: ${count}` : `：${count} 次`}</li>`).join("")
    : `<li>${getLanguage() === "en" ? "None yet" : "暂无"}</li>`;

  const html = `<!DOCTYPE html>
  <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <title>${t("app.name")} - ${getLanguage() === "en" ? "Parent Summary" : "家长摘要"}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; padding: 24px; color: #3f2430; }
        h1, h2 { margin: 0 0 12px; }
        .card { border: 1px solid #e6d2d8; border-radius: 16px; padding: 16px; margin-bottom: 16px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #eadde1; padding: 8px; text-align: left; }
        th { background: #fff3f6; }
        ul { margin: 8px 0 0 20px; }
      </style>
    </head>
    <body>
      <h1>${t("app.name")} - ${getLanguage() === "en" ? "Parent Summary" : "家长摘要"}</h1>
      <p>${getLanguage() === "en" ? "Exported on:" : "导出日期："}${formatDate(toDateInputValue(new Date()))}</p>
      <section class="card">
        <h2>${getLanguage() === "en" ? "Overview" : "概况"}</h2>
        <p>${getLanguage() === "en" ? "Period records:" : "经期记录次数："}${state.records.length}</p>
        <p>${getLanguage() === "en" ? "Daily logs:" : "日报记录次数："}${state.dailyLogs.length}</p>
        <p>${getLanguage() === "en" ? "Average cycle:" : "平均周期："}${insights.averageCycleLength}${getLanguage() === "en" ? " days" : " 天"}</p>
        <p>${getLanguage() === "en" ? "Average period length:" : "平均经期："}${insights.averagePeriodLength}${getLanguage() === "en" ? " days" : " 天"}</p>
        <p>${getLanguage() === "en" ? "Latest period start:" : "最近一次月经开始："}${insights.lastRecord ? formatDate(insights.lastRecord.startDate) : (getLanguage() === "en" ? "None" : "暂无")}</p>
        <p>${getLanguage() === "en" ? "Logs needing parent attention:" : "需要告诉家长的日报次数："}${insights.needsParentAttentionCount}</p>
      </section>
      <section class="card">
        <h2>${getLanguage() === "en" ? "Frequent Body Feelings" : "高频身体感觉"}</h2>
        <ul>${symptomMarkup}</ul>
      </section>
      <section class="card">
        <h2>${getLanguage() === "en" ? "Latest 5 Daily Logs" : "最近 5 条日报"}</h2>
        <table>
          <thead>
            <tr><th>${getLanguage() === "en" ? "Date" : "日期"}</th><th>${getLanguage() === "en" ? "Bleeding" : "出血"}</th><th>${getLanguage() === "en" ? "Pain" : "疼痛"}</th><th>${getLanguage() === "en" ? "Energy" : "精力"}</th><th>${getLanguage() === "en" ? "Mood" : "心情"}</th><th>${getLanguage() === "en" ? "Alert" : "提醒"}</th></tr>
          </thead>
          <tbody>${recentLogs}</tbody>
        </table>
      </section>
      <script>window.print();</script>
    </body>
  </html>`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${getLanguage() === "en" ? "eva-moon-summary" : "eva-moon-summary"}-${toDateInputValue(new Date())}.html`;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast(getLanguage() === "en" ? "Parent summary exported." : "家长摘要已导出。");
}

function importData(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || ""));
      state.records = Array.isArray(parsed.records) ? parsed.records.map(normalizeRecord).filter(Boolean) : [];
      state.dailyLogs = Array.isArray(parsed.dailyLogs) ? parsed.dailyLogs.map(normalizeDailyLog).filter(Boolean) : [];
      state.settings = normalizeSettings(parsed.settings);
      sortRecords();
      sortDailyLogs();
      saveState();
      render();
      setFormStatus(getLanguage() === "en" ? "Data imported." : "数据已导入。");
      setDailyFormStatus(getLanguage() === "en" ? "Data imported." : "数据已导入。");
      showToast(getLanguage() === "en" ? "Backup restored." : "备份已恢复。");
    } catch (error) {
      window.alert(getLanguage() === "en" ? "Import failed: invalid JSON file format." : "导入失败：JSON 文件格式不正确。");
    } finally {
      elements.importInput.value = "";
    }
  };
  reader.readAsText(file);
}

function clearAllData() {
  if (!window.confirm(getLanguage() === "en" ? "Clear all records in this browser? This cannot be undone." : "确认清空当前浏览器中的全部记录吗？此操作无法撤销。")) return;

  state.records = [];
  state.dailyLogs = [];
  state.settings = normalizeSettings({ language: state.settings.language });
  localStorage.removeItem(STORAGE_KEY);
  resetPeriodForm();
  resetDailyForm();
  render();
  showToast(getLanguage() === "en" ? "All records in this browser were cleared." : "已清空当前浏览器里的记录。");
}

function seedData() {
  if (state.records.length || state.dailyLogs.length) {
    const confirmed = window.confirm(getLanguage() === "en" ? "Sample data will overwrite current data. Continue?" : "当前已有数据，填充示例数据会覆盖现有内容，是否继续？");
    if (!confirmed) return;
  }

  state.records = SAMPLE_DATA.records.map((record) => ({ ...record }));
  state.dailyLogs = SAMPLE_DATA.dailyLogs.map((log) => ({ ...log }));
  state.settings = normalizeSettings({ language: state.settings.language });
  saveState();
  render();
  showToast(getLanguage() === "en" ? "Sample data loaded." : "示例数据已填充。");
}

function saveSettings(event) {
  event.preventDefault();

  state.settings = normalizeSettings({
    manualCycleLength: elements.manualCycleLength.value,
    manualPeriodLength: elements.manualPeriodLength.value,
    parentLockMinutes: elements.parentLockMinutes.value,
    parentMode: state.settings.parentMode,
    parentPin: state.settings.parentPin,
    simpleMode: state.settings.simpleMode,
    language: state.settings.language,
  });
  saveState();
  render();
  setFormStatus(getLanguage() === "en" ? "Prediction settings updated." : "预测参数已更新。");
  showToast(getLanguage() === "en" ? "Parent settings updated." : "家长参数已更新。");
}

function resetSettings() {
  state.settings = normalizeSettings({
    parentMode: state.settings.parentMode,
    parentPin: state.settings.parentPin,
    simpleMode: state.settings.simpleMode,
    language: state.settings.language,
  });
  saveState();
  render();
  showToast(getLanguage() === "en" ? "Prediction settings reset to automatic values." : "预测参数已恢复自动计算。");
}

function renderSettings() {
  elements.manualCycleLength.value = state.settings.manualCycleLength;
  elements.manualPeriodLength.value = state.settings.manualPeriodLength;
  elements.parentLockMinutes.value = state.settings.parentLockMinutes;
  if (elements.preferencesLanguageSelect) {
    elements.preferencesLanguageSelect.value = state.settings.language;
  }
  if (elements.preferencesSimpleMode) {
    elements.preferencesSimpleMode.checked = state.settings.simpleMode;
  }
  renderNotificationSettings();
}

function savePreferences(event) {
  event.preventDefault();
  const nextLanguage = SUPPORTED_LANGUAGES.includes(elements.preferencesLanguageSelect?.value)
    ? elements.preferencesLanguageSelect.value
    : state.settings.language;
  state.settings = normalizeSettings({
    ...state.settings,
    language: nextLanguage,
    simpleMode: Boolean(elements.preferencesSimpleMode?.checked),
  });
  saveState();
  render();
  showToast(getLanguage() === "en" ? "Preferences saved." : "偏好设置已保存。");
}

function renderNotificationSettings() {
  if (elements.notificationEnabled) {
    elements.notificationEnabled.checked = state.settings.notificationsEnabled;
  }
  if (elements.notificationDailyCheck) {
    elements.notificationDailyCheck.checked = state.settings.reminderDailyCheck;
    elements.notificationDailyCheck.disabled = !state.settings.notificationsEnabled;
  }
  if (elements.notificationAttention) {
    elements.notificationAttention.checked = state.settings.reminderAttention;
    elements.notificationAttention.disabled = !state.settings.notificationsEnabled;
  }
  if (elements.requestNotificationBtn) {
    elements.requestNotificationBtn.disabled = !supportsNotifications() || getNotificationPermissionState() === "granted";
  }
  if (elements.testNotificationBtn) {
    elements.testNotificationBtn.disabled = !supportsNotifications() || getNotificationPermissionState() !== "granted";
  }
  if (elements.notificationStatus) {
    elements.notificationStatus.textContent = getNotificationStatusText();
  }
}

function saveNotificationSettings(event) {
  event.preventDefault();
  state.settings = normalizeSettings({
    ...state.settings,
    notificationsEnabled: Boolean(elements.notificationEnabled?.checked),
    reminderDailyCheck: Boolean(elements.notificationDailyCheck?.checked),
    reminderAttention: Boolean(elements.notificationAttention?.checked),
  });
  saveState();
  renderNotificationSettings();
  showToast(getLanguage() === "en" ? "Reminder settings saved." : "提醒设置已保存。");
  void evaluateNotificationTriggers(buildInsights());
}

function renderParentMode() {
  const isUnlockedInSession = isParentSessionUnlocked();
  if (state.settings.parentMode && !isUnlockedInSession) {
    state.settings.parentMode = false;
  }
  elements.parentModeBtn.textContent = state.settings.parentMode
    ? (getLanguage() === "en" ? "Close Parent Mode" : "关闭家长模式")
    : (getLanguage() === "en" ? "Open Parent Mode" : "打开家长模式");
  elements.simpleModeBtn.textContent = state.settings.simpleMode
    ? (getLanguage() === "en" ? "Close Simple Mode" : "关闭超简模式")
    : (getLanguage() === "en" ? "Open Simple Mode" : "打开超简模式");
  elements.parentModeBtn.classList.toggle("mode-active", state.settings.parentMode);
  elements.simpleModeBtn.classList.toggle("mode-active", state.settings.simpleMode);
  elements.parentOnlySections.forEach((node) => {
    node.classList.toggle("is-hidden-by-mode", !state.settings.parentMode);
  });
  if (!state.settings.parentMode) {
    const activeParentTab = document.querySelector(".tab-panel.parent-only.is-active");
    if (activeParentTab) {
      setActiveSettingsTab("preferences-panel");
    }
  }
}

function renderPinSettings() {
  elements.parentPin.value = "";
  elements.confirmParentPin.value = "";
  elements.pinStatus.textContent = state.settings.parentPin
    ? (getLanguage() === "en" ? "Parent PIN is set. It is only stored in this browser." : "已设置家长 PIN。PIN 只保存在当前浏览器。")
    : (getLanguage() === "en" ? "No PIN yet. Parents should set a 4-digit PIN first." : "还没有设置 PIN。建议家长先设置 4 位数字。");
}

function setActiveSettingsTab(panelId) {
  if (!panelId) return;
  const targetPanel = document.querySelector(`#${panelId}`);
  if (!targetPanel) return;
  if (targetPanel.classList.contains("parent-only") && !state.settings.parentMode) {
    panelId = "preferences-panel";
  }
  elements.settingsTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tabTarget === panelId);
  });
  elements.settingsTabPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === panelId);
  });
}

function normalizeRecord(record) {
  if (!record || !record.startDate || !record.endDate) return null;
  return {
    id: record.id || crypto.randomUUID(),
    startDate: record.startDate,
    endDate: record.endDate,
    flowLevel: record.flowLevel || "中",
    painLevel: Number(record.painLevel ?? 3),
    mood: record.mood || "平稳",
    symptoms: Array.isArray(record.symptoms) ? record.symptoms : [],
    notes: record.notes || "",
  };
}

function normalizeDailyLog(log) {
  if (!log || !log.date) return null;
  return {
    id: log.id || crypto.randomUUID(),
    date: log.date,
    bleeding: log.bleeding || "无",
    painLevel: Number(log.painLevel ?? 2),
    energyLevel: Number(log.energyLevel ?? 3),
    mood: log.mood || "平稳",
    symptoms: Array.isArray(log.symptoms) ? log.symptoms : [],
    alertFlags: Array.isArray(log.alertFlags) ? log.alertFlags : [],
    notes: log.notes || "",
  };
}

function normalizeSettings(settings = {}) {
  return {
    manualCycleLength: normalizeNumberWithinRange(settings.manualCycleLength, 15, 60),
    manualPeriodLength: normalizeNumberWithinRange(settings.manualPeriodLength, 2, 14),
    parentMode: Boolean(settings.parentMode),
    parentPin: normalizePin(settings.parentPin),
    parentLockMinutes: normalizeLockMinutes(settings.parentLockMinutes),
    simpleMode: Boolean(settings.simpleMode),
    language: SUPPORTED_LANGUAGES.includes(settings.language) ? settings.language : DEFAULT_LANGUAGE,
    notificationsEnabled: Boolean(settings.notificationsEnabled),
    reminderDailyCheck: settings.reminderDailyCheck !== false,
    reminderAttention: settings.reminderAttention !== false,
  };
}

function toggleParentMode() {
  if (state.settings.parentMode) {
    state.settings.parentMode = false;
    clearParentSessionUnlock();
    saveState();
    render();
    showToast(getLanguage() === "en" ? "Parent Mode closed." : "家长模式已关闭。");
    return;
  }

  if (!state.settings.parentPin) {
    openPinDialog("setup");
    return;
  }

  openPinDialog("unlock");
}

function updateAlertAdvice() {
  const draft = {
    bleeding: elements.dailyBleeding.value,
    painLevel: Number(elements.dailyPainLevel.value),
    alertFlags: getSelectedSymptoms("alert-flags"),
  };
  elements.alertAdviceText.textContent = shouldTellParent(draft)
    ? (getLanguage() === "en" ? "Tell a parent now, or ask a teacher to help contact one." : "今天建议马上告诉家长，或者让老师帮你联系家长。")
    : (getLanguage() === "en" ? "A normal record is enough for now. If it gets worse, tell a parent soon." : "今天先正常记录就可以，如果越来越不舒服，再及时告诉家长。");
}

function shouldTellParent(log) {
  return (
    Number(log.painLevel) >= 7 ||
    log.bleeding === "重" ||
    (Array.isArray(log.alertFlags) && log.alertFlags.length > 0)
  );
}

function formatAlertFlags(log) {
  const parts = [];
  if (Number(log.painLevel) >= 7) {
    parts.push(getLanguage() === "en" ? "high pain" : "疼痛较高");
  }
  if (log.bleeding === "重") {
    parts.push(getLanguage() === "en" ? "heavy bleeding" : "出血偏多");
  }
  if (Array.isArray(log.alertFlags) && log.alertFlags.length) {
    parts.push(log.alertFlags.map((flag) => labelFromCatalog("alertFlags", flag)).join(getLanguage() === "en" ? ", " : "、"));
  }
  return parts.join(getLanguage() === "en" ? ", " : "、");
}

function savePin(event) {
  event.preventDefault();
  const pin = normalizePin(elements.parentPin.value);
  const confirmPin = normalizePin(elements.confirmParentPin.value);

  if (!pin || pin.length !== 4) {
    elements.pinStatus.textContent = getLanguage() === "en" ? "PIN must be 4 digits." : "PIN 需要是 4 位数字。";
    return;
  }
  if (pin !== confirmPin) {
    elements.pinStatus.textContent = getLanguage() === "en" ? "The two PIN entries do not match." : "两次输入的 PIN 不一致。";
    return;
  }

  state.settings.parentPin = pin;
  saveState();
  renderPinSettings();
  elements.pinStatus.textContent = getLanguage() === "en" ? "Parent PIN saved." : "家长 PIN 已保存。";
  showToast(getLanguage() === "en" ? "Parent PIN saved." : "家长 PIN 已保存。");
}

function clearPin() {
  state.settings.parentPin = "";
  state.settings.parentMode = false;
  clearParentSessionUnlock();
  saveState();
  render();
  elements.pinStatus.textContent = getLanguage() === "en" ? "Parent PIN cleared." : "家长 PIN 已清除。";
  showToast(getLanguage() === "en" ? "Parent PIN cleared." : "家长 PIN 已清除。");
}

function handlePinDialogSubmit(event) {
  event.preventDefault();
  const submitter = event.submitter?.value;
  if (submitter === "cancel") {
    elements.pinDialog.close();
    return;
  }

  const inputPin = normalizePin(elements.pinDialogInput.value);

  if (state.pinDialogMode === "setup") {
    const confirmPin = normalizePin(elements.pinDialogConfirmInput.value);
    if (!inputPin || inputPin.length !== 4) {
      elements.pinDialogStatus.textContent = getLanguage() === "en" ? "PIN must be 4 digits." : "PIN 需要是 4 位数字。";
      return;
    }
    if (inputPin !== confirmPin) {
      elements.pinDialogStatus.textContent = getLanguage() === "en" ? "The two PIN entries do not match." : "两次输入的 PIN 不一致。";
      return;
    }

    state.settings.parentPin = inputPin;
    state.settings.parentMode = true;
    setParentSessionUnlock();
    saveState();
    render();
    elements.pinDialog.close();
    showToast(getLanguage() === "en" ? "Parent Mode opened." : "家长模式已开启。");
    return;
  }

  if (inputPin !== state.settings.parentPin) {
    state.pinAttempts += 1;
    const remaining = Math.max(MAX_PIN_ATTEMPTS - state.pinAttempts, 0);
    elements.pinDialogStatus.textContent =
      remaining > 0
        ? (getLanguage() === "en" ? `Wrong PIN. Try again. ${remaining} attempt(s) left.` : `PIN 不正确，请重试。还可以再试 ${remaining} 次。`)
        : (getLanguage() === "en" ? "Too many wrong PIN attempts. Close and try again." : "PIN 连续输错太多次，请关闭后再试。");
    if (remaining === 0) {
      elements.pinDialog.close();
      state.pinAttempts = 0;
    }
    return;
  }

  state.pinAttempts = 0;
  state.settings.parentMode = true;
  setParentSessionUnlock();
  saveState();
  render();
  elements.pinDialog.close();
  showToast(getLanguage() === "en" ? "Parent Mode opened." : "家长模式已开启。");
}

function normalizePin(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return digits.slice(0, 4);
}

function maybeShowOnboarding() {
  if (localStorage.getItem(ONBOARDING_KEY)) return;
  elements.welcomeDialog?.showModal();
}

function closeOnboarding() {
  localStorage.setItem(ONBOARDING_KEY, "1");
  elements.welcomeDialog?.close();
}

function replayOnboarding() {
  localStorage.removeItem(ONBOARDING_KEY);
  elements.welcomeDialog?.showModal();
  showToast(getLanguage() === "en" ? "Guide opened again." : "已重新打开首次引导。");
}

function openPinDialog(mode) {
  state.pinDialogMode = mode;
  state.pinAttempts = 0;
  elements.pinDialogInput.value = "";
  elements.pinDialogConfirmInput.value = "";
  setPinInputsVisibility(false);
  elements.pinDialogConfirmWrap.classList.toggle("is-hidden", mode !== "setup");
  elements.pinDialogTitle.textContent = mode === "setup"
    ? (getLanguage() === "en" ? "Set Parent PIN" : "设置家长 PIN")
    : (getLanguage() === "en" ? "Enter Parent PIN" : "输入家长 PIN");
  elements.pinDialogStatus.textContent =
    mode === "setup"
      ? (getLanguage() === "en" ? "First time in Parent Mode. Please set a 4-digit PIN." : "第一次使用家长模式，请先设置一个 4 位数字 PIN。")
      : (getLanguage() === "en" ? "Only a parent should know this PIN." : "只有家长知道这个 PIN。");
  elements.pinDialog.showModal();
}

function togglePinVisibility() {
  const shouldShow = elements.pinDialogInput.type === "password";
  setPinInputsVisibility(shouldShow);
}

function setPinInputsVisibility(visible) {
  const type = visible ? "text" : "password";
  elements.pinDialogInput.type = type;
  elements.pinDialogConfirmInput.type = type;
  elements.pinDialogToggleVisibility.textContent = visible
    ? (getLanguage() === "en" ? "Hide PIN" : "隐藏 PIN")
    : (getLanguage() === "en" ? "Show PIN" : "显示 PIN");
}

function normalizeNumberWithinRange(value, min, max) {
  const numeric = Number(value);
  if (!numeric) return "";
  if (numeric < min || numeric > max) return "";
  return String(Math.round(numeric));
}

function normalizeLockMinutes(value) {
  const allowed = ["5", "10", "30", "60"];
  return allowed.includes(String(value)) ? String(value) : "10";
}

function setParentSessionUnlock() {
  sessionStorage.setItem(PARENT_UNLOCK_KEY, "1");
  const expiresAt = Date.now() + Number(state.settings.parentLockMinutes || "10") * 60 * 1000;
  sessionStorage.setItem(PARENT_UNLOCK_EXPIRES_KEY, String(expiresAt));
}

function clearParentSessionUnlock() {
  sessionStorage.removeItem(PARENT_UNLOCK_KEY);
  sessionStorage.removeItem(PARENT_UNLOCK_EXPIRES_KEY);
}

function isParentSessionUnlocked() {
  const unlocked = sessionStorage.getItem(PARENT_UNLOCK_KEY) === "1";
  const expiresAt = Number(sessionStorage.getItem(PARENT_UNLOCK_EXPIRES_KEY) || 0);
  if (!unlocked) return false;
  if (!expiresAt || Date.now() > expiresAt) {
    clearParentSessionUnlock();
    return false;
  }
  return true;
}

function quickLogToday() {
  fillDailyDate(toDateInputValue(new Date()));
  showToast(getLanguage() === "en" ? "Today is selected. You can fill it in now." : "已帮你选中今天，可以直接填写。");
}

function toggleSimpleMode() {
  state.settings.simpleMode = !state.settings.simpleMode;
  saveState();
  render();
  showToast(state.settings.simpleMode
    ? (getLanguage() === "en" ? "Simple Mode is on." : "已打开超简模式。")
    : (getLanguage() === "en" ? "Simple Mode is off." : "已关闭超简模式。"));
}

function onLanguageChange(event) {
  const nextLanguage = SUPPORTED_LANGUAGES.includes(event.target.value) ? event.target.value : DEFAULT_LANGUAGE;
  state.settings.language = nextLanguage;
  saveState();
  render();
  showToast(getLanguage() === "en" ? "Language switched to English." : "语言已切换为中文。");
}

function installApp() {
  if (!state.deferredInstallPrompt) return;
  state.deferredInstallPrompt.prompt();
  state.deferredInstallPrompt.userChoice.finally(() => {
    state.deferredInstallPrompt = null;
    elements.installBtn.classList.add("is-hidden");
  });
}

function supportsNotifications() {
  return "Notification" in window;
}

function getNotificationPermissionState() {
  if (!supportsNotifications()) return "unsupported";
  return Notification.permission;
}

function getNotificationStatusText() {
  const permission = getNotificationPermissionState();
  if (permission === "granted") {
    return getLanguage() === "en"
      ? "Notification permission: allowed. Local reminders can appear in the browser or installed app."
      : "当前通知权限：已允许。本地提醒可以显示在浏览器或已安装应用中。";
  }
  if (permission === "denied") {
    return getLanguage() === "en"
      ? "Notification permission: blocked. Change it in the browser site settings if needed."
      : "当前通知权限：已拒绝。如需开启，请到浏览器站点权限里修改。";
  }
  if (permission === "unsupported") {
    return getLanguage() === "en"
      ? "Notifications are not supported in this browser."
      : "当前浏览器不支持通知提醒。";
  }
  return getLanguage() === "en"
    ? "Notification permission: not chosen yet."
    : "当前通知权限：还没有选择。";
}

async function requestNotificationPermission() {
  if (!supportsNotifications()) {
    showToast(getLanguage() === "en" ? "This browser does not support notifications." : "当前浏览器不支持通知提醒。");
    renderNotificationSettings();
    return;
  }
  if (Notification.permission === "denied") {
    showToast(getLanguage() === "en" ? "Notifications are blocked. Change browser site settings to allow them." : "通知已被拒绝，请到浏览器站点权限里手动开启。");
    renderNotificationSettings();
    return;
  }

  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    state.settings.notificationsEnabled = true;
    saveState();
    renderNotificationSettings();
    showToast(getLanguage() === "en" ? "Notifications are enabled." : "通知提醒已开启。");
    return;
  }

  renderNotificationSettings();
  showToast(getLanguage() === "en" ? "Notification permission was not granted." : "还没有获得通知权限。");
}

async function sendTestNotification() {
  const sent = await sendLocalNotification({
    title: getLanguage() === "en" ? "Eva's Moon Test" : "Eva的月亮测试提醒",
    body: getLanguage() === "en" ? "Notifications are working on this device." : "这台设备已经可以收到应用提醒了。",
    tag: "eva-moon-test",
  });
  if (sent) {
    showToast(getLanguage() === "en" ? "Test reminder sent." : "测试提醒已发送。");
    return;
  }
  showToast(getLanguage() === "en" ? "Notifications are not ready yet." : "通知暂时还不能使用。");
}

async function evaluateNotificationTriggers(insights) {
  if (document.visibilityState !== "visible") return;
  if (!state.settings.notificationsEnabled || getNotificationPermissionState() !== "granted") return;

  if (state.settings.reminderAttention) {
    const latestAttention = insights.attentionLogs[0] || null;
    if (latestAttention && latestAttention.date === insights.today) {
      const lastNotifiedAttentionId = localStorage.getItem(NOTIFICATION_ATTENTION_KEY);
      if (lastNotifiedAttentionId !== latestAttention.id) {
        const sent = await sendLocalNotification({
          title: getLanguage() === "en" ? "Tell A Parent Today" : "今天需要告诉家长",
          body: getLanguage() === "en"
            ? `${formatDate(latestAttention.date)}: pain ${latestAttention.painLevel}/10, ${formatAlertFlags(latestAttention) || "needs attention"}.`
            : `${formatDate(latestAttention.date)}：疼痛 ${latestAttention.painLevel}/10，${formatAlertFlags(latestAttention) || "需要留意"}。`,
          tag: `attention-${latestAttention.id}`,
        });
        if (sent) {
          localStorage.setItem(NOTIFICATION_ATTENTION_KEY, latestAttention.id);
          return;
        }
      }
    }
  }

  if (!state.settings.reminderDailyCheck || insights.todayLog || new Date().getHours() < 18) return;
  if (localStorage.getItem(NOTIFICATION_DAILY_KEY) === insights.today) return;

  const sent = await sendLocalNotification({
    title: getLanguage() === "en" ? "Remember Today's Check-in" : "记得补今天的记录",
    body: getLanguage() === "en"
      ? "There is no daily log for today yet. A quick check-in only takes a few taps."
      : "今天还没有日报。点几下就能记完今天的状态。",
    tag: `daily-check-${insights.today}`,
  });
  if (sent) {
    localStorage.setItem(NOTIFICATION_DAILY_KEY, insights.today);
  }
}

async function sendLocalNotification({ title, body, tag }) {
  if (getNotificationPermissionState() !== "granted") return false;

  const options = {
    body,
    tag,
    icon: "./icon.svg",
    badge: "./icon.svg",
  };

  try {
    if ("serviceWorker" in navigator) {
      const registration = await navigator.serviceWorker.getRegistration() || await navigator.serviceWorker.ready;
      if (registration?.showNotification) {
        await registration.showNotification(title, options);
        return true;
      }
    }
    new Notification(title, options);
    return true;
  } catch (error) {
    console.error("Failed to show local notification", error);
    return false;
  }
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Service worker registration failed", error);
    });
  });
}

function isDateInRecord(dateString, records) {
  return records.some((record) => dateString >= record.startDate && dateString <= record.endDate);
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getRange(values) {
  if (!values.length) return 0;
  return Math.max(...values) - Math.min(...values);
}

function countSymptoms(records, dailyLogs) {
  const accumulator = {};
  [...records, ...dailyLogs].forEach((entry) => {
    entry.symptoms.forEach((symptom) => {
      accumulator[symptom] = (accumulator[symptom] || 0) + 1;
    });
  });
  return accumulator;
}

function diffDays(start, end) {
  const startDate = new Date(`${start}T00:00:00`);
  const endDate = new Date(`${end}T00:00:00`);
  return Math.round((endDate.getTime() - startDate.getTime()) / 86400000);
}

function addDays(dateString, days) {
  const date = new Date(`${dateString}T00:00:00`);
  date.setDate(date.getDate() + days);
  return toDateInputValue(date);
}

function addMonths(date, count) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + count, 1);
  return startOfMonth(result);
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function toDateInputValue(date) {
  const adjusted = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return adjusted.toISOString().slice(0, 10);
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat(getLanguage() === "en" ? "en-US" : "zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${dateString}T00:00:00`));
}

function showToast(message) {
  if (!elements.toast || !message) return;
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, TOAST_DURATION);
}
