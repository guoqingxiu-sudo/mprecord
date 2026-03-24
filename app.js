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
const SUPPORTED_LANGUAGES = [DEFAULT_LANGUAGE, "en", "tr", "ru"];
const LANGUAGE_LOCALES = {
  "zh-CN": "zh-CN",
  en: "en-US",
  tr: "tr-TR",
  ru: "ru-RU",
};
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
  tr: {
    "app.name": "Eva'nin Ayi",
    "hero.eyebrow": "Eva's Moon",
    "hero.text": "Bugun bedeninin nasil hissettigini sakin ve kolay bir sekilde kaydet, anne babalar da durumu rahatca gorebilsin.",
    "hero.currentCycle": "Guncel Dongu",
    "actions.quickLog": "Bugunu Hizlica Kaydet",
    "actions.recordNow": "Kayit Ekle",
    "actions.viewCalendar": "Takvimi Ac",
    "actions.install": "Uygulamayi Yukle",
    "common.clearForm": "Formu Temizle",
    "common.symptoms": "Beden Hisleri",
    "common.notes": "Notlar",
    "common.date": "Tarih",
    "common.ok": "Tamam",
    "common.close": "Kapat",
    "periodForm.title": "Adet Kaydi Ekle",
    "periodForm.startDate": "Baslangic Tarihi",
    "periodForm.endDate": "Bitis Tarihi",
    "periodForm.flowLevel": "Kanama Duzeyi",
    "periodForm.painLevel": "Agri Duzeyi",
    "periodForm.mood": "Bugunku Ruh Hali",
    "periodForm.notesPlaceholder": "Ornek: 1. gun kramplar daha gucluydu, 3. gun akinti azaldi, agri kesici alindi",
    "periodForm.save": "Kaydi Kaydet",
    "dailyForm.title": "Gunluk Kontrol",
    "dailyForm.bleedingQuestion": "Bugun kanama var mi?",
    "dailyForm.painQuestion": "Bugun ne kadar agri var?",
    "dailyForm.energyQuestion": "Bugun enerjin nasil?",
    "dailyForm.moodQuestion": "Bugun ruh halin nasil?",
    "dailyForm.alertFlags": "Bugun bunlardan biri oldu mu?",
    "dailyForm.tellParent": "Anne Babaya Soyle",
    "dailyForm.dailyNotes": "Gunluk Notlar",
    "dailyForm.notesPlaceholder": "Ornek: az uyudum, egzersizden sonra daha iyi hissettim, hafif lekelenme oldu",
    "dailyForm.save": "Gunlugu Kaydet",
    "care.title": "Cocuklar Icin Kucuk Hatirlatmalar",
    "care.tip1": "<strong>Pedleri sik kontrol et:</strong> islaninca degistir.",
    "care.tip2": "<strong>Agriyinca soyle:</strong> dinlenmek, ilik su ve sicak kompres yardim edebilir.",
    "care.tip3": "<strong>Bir buyukten yardim iste:</strong> anne, baba, ogretmen ya da okul hemsiresi yardim edebilir.",
    "care.tip4": "<strong>Bu utanilacak bir sey degil:</strong> bedenindeki degisimleri izlemek kendine bakmanin bir parcasi.",
    "help.title": "Kendini Kotu Hissedersen Ne Yapmali",
    "help.step1": "1. Oturup dinlen. Yavas nefes al ve kendini zorlama.",
    "help.step2": "2. Biraz ilik su ic ya da bir buyukten sicak kompres iste.",
    "help.step3": "3. Cok agriyorsa, basin donuyorsa ya da miden bulaniyorsa hemen anne babana veya ogretmenine soyle.",
    "help.step4": "4. Kiyafetine leke olursa sorun degil. Bir buyukten yardim iste.",
    "quickCheck.title": "Bugun Ne Yapmali",
    "quickCheck.step1": "1. Bugun adetin basladi mi kontrol et.",
    "quickCheck.step2": "2. Ruh halini ve beden hislerini sec.",
    "quickCheck.step3": "3. Kendini kotu hissediyorsan kaydet ve anne babana soyle.",
    "schoolBag.title": "Okul Cantasi Listesi",
    "schoolBag.item1": "□ 2 veya 3 ped ya da gunluk ped",
    "schoolBag.item2": "□ Temiz bir ic camasiri",
    "schoolBag.item3": "□ Koyu renk pantolon veya hirka",
    "schoolBag.item4": "□ Kucuk bir canta ve pecete",
    "schoolBag.item5": "□ Unutma: kendini kotu hissedersen ogretmeninden yardim isteyebilirsin.",
    "parentView.title": "Ebeveyn Gorunumu",
    "parentGuide.title": "Ebeveynler Icin Notlar",
    "parentGuide.tip1": "<strong>Ilk 1 ila 2 yil duzensizlik olabilir:</strong> kesinlikten cok duzenli takip daha onemlidir.",
    "parentGuide.tip2": "<strong>Uc seye bakin:</strong> agri okul hayatini etkiliyor mu, kanama cok mu fazla, ruh hali veya enerji belirgin sekilde degisiyor mu.",
    "parentGuide.tip3": "<strong>Destekleyici yaklasim:</strong> hijyen urunleri, isinma urunleri ve yedek kiyafet hazirlayin; cocugun rahatca konusabilecegi bir ortam kurun.",
    "parentGuide.tip4": "<strong>Gerekirse yakinda tibbi destek alin:</strong> surekli siddetli agri, belirgin bas donmesi veya halsizlik, ates, cok yogun kanama ya da uzun sure adet olmamasi.",
    "checklist.title": "Ebeveyn Kontrol Listesi",
    "checklist.print": "Listeyi Yazdir",
    "checklist.head1": "<strong>Bu ay bunlardan biri oldu mu?</strong>",
    "checklist.item1": "□ Agri okul veya uyku duzenini etkiledi",
    "checklist.item2": "□ Bir ped bir saat icinde tamamen doldu",
    "checklist.item3": "□ Bas donmesi, halsizlik veya yuzde solukluk",
    "checklist.item4": "□ Ates veya belirgin rahatsizlik",
    "checklist.item5": "□ Adetler arasinda kanama",
    "checklist.item6": "□ Belirgin mutsuzluk veya kaygi",
    "checklist.head2": "<strong>Bakim esyalari kontrolu:</strong>",
    "checklist.item7": "□ Ped/gunluk ped □ Yedek ic camasiri □ Koyu renk pantolon □ Sicak kompres □ Ilik su bardagi",
    "trend.title": "Dongu Notlari",
    "reminders.title": "Hatirlatici Merkezi",
    "reminderSettings.title": "Hatirlatici Ayarlari",
    "reminderSettings.enable": "Tarayici Bildirimleri",
    "reminderSettings.enableHelp": "Gerektiginde uygulamanin yerel hatirlatici gondermesine izin ver.",
    "reminderSettings.daily": "Bugun kayit yoksa hatirlat",
    "reminderSettings.dailyHelp": "Aksam, uygulama acildiginda bugunun gunlugu eksikse hatirlatabilir.",
    "reminderSettings.attention": "Anne babaya soylenmesi gerekiyorsa hatirlat",
    "reminderSettings.attentionHelp": "Siddetli agri, fazla kanama veya uyari isaretlerinde bildirim gosterir.",
    "reminderSettings.request": "Bildirim Izni Ver",
    "reminderSettings.test": "Test Bildirimi Gonder",
    "reminderSettings.save": "Hatirlatici Ayarlarini Kaydet",
    "reminderSettings.note": "Tarayici bildirimleri once izin ister. Bu surum, uygulama acildiginda bugunun kaydi eksik mi veya anne babayla paylasilmasi gereken bir durum var mi diye kontrol eder.",
    "calendar.title": "Ay Gorunumu",
    "calendar.legendPeriod": "<i class=\"swatch swatch--period\"></i>Kayitli adet",
    "calendar.legendPredicted": "<i class=\"swatch swatch--predicted\"></i>Tahmini adet",
    "calendar.legendFertile": "<i class=\"swatch swatch--fertile\"></i>Dogurgan gunler",
    "calendar.legendLog": "<i class=\"swatch swatch--log\"></i>Gunluk kayit",
    "calendar.legendToday": "<i class=\"swatch swatch--today\"></i>Bugun",
    "security.title": "Ebeveyn Kilidi",
    "security.newPin": "Yeni PIN",
    "security.confirmPin": "PIN'i Onayla",
    "security.savePin": "PIN'i Kaydet",
    "security.clearPin": "PIN'i Temizle",
    "settings.title": "Tahmin Ayarlari",
    "settings.manualCycleLength": "Manuel Dongu Suresi",
    "settings.manualPeriodLength": "Manuel Adet Suresi",
    "settings.autoLock": "Otomatik Kilit Suresi",
    "settings.save": "Ayarlari Kaydet",
    "settings.reset": "Otomatik Degerlere Don",
    "settings.help": "Dongunun daha duzenli oldugunu biliyorsan ortalamayi gecersiz kilmak icin manuel sure girebilirsin.",
    "history.title": "Gecmis",
    "history.dailyFeed": "Son Gunluk Kayitlar",
    "data.title": "Yedekleme ve Geri Yukleme",
    "data.tip1": "<strong>Yedekleme:</strong> ham veriyi veya ebeveyn dostu ozeti disa aktarabilirsin.",
    "data.tip2": "<strong>Geri yukleme:</strong> daha once kaydedilmis JSON yedegini buradan ice aktar.",
    "data.tip3": "<strong>Not:</strong> tum verileri silmek geri alinamaz. Gerekirse once yedek al.",
    "data.exportRaw": "Ham Veriyi Disa Aktar",
    "data.exportSummary": "Ebeveyn Ozetini Disa Aktar",
    "data.restore": "Yedegi Geri Yukle",
    "data.seed": "Ornek Veri Yukle",
    "data.clear": "Tum Veriyi Temizle",
    "data.localOnly": "Veriler varsayilan olarak yalnizca bu tarayicida kalir ve otomatik yuklenmez.",
    "footer.changelog": "Guncellemeleri Goster",
    "preferences.title": "Tercihler",
    "preferences.language": "Arayuz Dili",
    "preferences.simpleMode": "Basit Mod",
    "preferences.simpleModeHelp": "Daha fazla icerigi gizler ve daha sade bir kayit akisi sunar.",
    "preferences.save": "Tercihleri Kaydet",
    "preferences.replay": "Rehberi Yeniden Goster",
    "settingsHub.title": "Ayar Merkezi",
    "dialog.pinLabel": "4 haneli PIN",
    "dialog.pinConfirm": "PIN'i Tekrar Gir",
    "welcome.title": "Ilk Kullanim? Buradan Basla",
    "welcome.tip1": "1. Cocuklar icin genelde yalnizca Gunluk Kontrol ve Ay Gorunumu yeterlidir.",
    "welcome.tip2": "2. Bugun kendini cok kotu hissediyorsan kayit gir ve hemen anne babana veya ogretmenine soyle.",
    "welcome.tip3": "3. Ebeveyn Modu PIN ile korunabilir ve daha ayrintili bilgi ile kontrol listeleri gosterir.",
    "welcome.start": "Basla",
    "updates.title": "Son Guncellemeler",
    "updates.v110": "<strong>v1.2.0</strong> Cince ve Ingilizce dil degisimi eklendi; dugmeler, mesajlar, tarihler ve ozetler dile gore birlikte guncelleniyor.",
    "updates.v100": "<strong>v1.0.0</strong> Cocuk modu, ebeveyn modu, PIN kilidi, otomatik kilit ve yazdirilabilir ozetler hazir.",
  },
  ru: {
    "app.name": "Luna Evy",
    "hero.eyebrow": "Eva's Moon",
    "hero.text": "Spokoino i prosto otmechai, kak segodnya chuvstvuet sebya telo, chtoby roditelyam tozhe bylo spokoino.",
    "hero.currentCycle": "Tekushchii Tsikl",
    "actions.quickLog": "Bystro Otnot Segodnya",
    "actions.recordNow": "Dobavit Zapis",
    "actions.viewCalendar": "Otkryt Kalendar",
    "actions.install": "Ustanovit Prilozhenie",
    "common.clearForm": "Ochistit Formu",
    "common.symptoms": "Oshchushcheniya v Tele",
    "common.notes": "Zametki",
    "common.date": "Data",
    "common.ok": "OK",
    "common.close": "Zakryt",
    "periodForm.title": "Dobavit Zapis o Menstruatsii",
    "periodForm.startDate": "Data Nachala",
    "periodForm.endDate": "Data Okonchaniya",
    "periodForm.flowLevel": "Uroven Vydelenii",
    "periodForm.painLevel": "Uroven Boli",
    "periodForm.mood": "Nastroenie Segodnya",
    "periodForm.notesPlaceholder": "Primer: v 1-i den spasmy byli silnee, k 3-mu dnyu vydeleniya umenshilis, prinimali obezbolivayushchee",
    "periodForm.save": "Sohranit Zapis",
    "dailyForm.title": "Ezhednevnaia Otmetka",
    "dailyForm.bleedingQuestion": "Segodnya est vydeleniya?",
    "dailyForm.painQuestion": "Naskolko bolit segodnya?",
    "dailyForm.energyQuestion": "Kak segodnya s energiiei?",
    "dailyForm.moodQuestion": "Kakoe segodnya nastroenie?",
    "dailyForm.alertFlags": "Bylo li segodnya chto-to iz etogo?",
    "dailyForm.tellParent": "Skazat Roditelyu",
    "dailyForm.dailyNotes": "Zametki za Den",
    "dailyForm.notesPlaceholder": "Primer: malo spala, posle uprazhnenii stalo legche, byla legkaya mazhushchaya krov",
    "dailyForm.save": "Sohranit Dnevnik",
    "care.title": "Podskazki Dlya Rebenka",
    "care.tip1": "<strong>Chashche proveriai prokladku:</strong> esli ona vlazhnaya, pominiai ee.",
    "care.tip2": "<strong>Govori, esli bolit:</strong> pomogaet otdyh, teplaya voda i grelka.",
    "care.tip3": "<strong>Prosi pomoshchi u vzroslogo:</strong> roditel, uchitel ili medsestra v shkole mogut pomoch.",
    "care.tip4": "<strong>V etom net nichego stydnogo:</strong> nablyudat za izmeneniyami tela eto zabota o sebe.",
    "help.title": "Chto Delat, Esli Ploho Sebya Chuvstvuesh",
    "help.step1": "1. Syad i otdohni. Dyshi spokoino i ne napryagaisya.",
    "help.step2": "2. Vypi nemnogo teploi vody ili poprosi vzroslogo pomoch s teplym kompressom.",
    "help.step3": "3. Esli ochen bolit, kruzhitsya golova ili toshnit, srazu skazhi roditelyu ili uchitelyu.",
    "help.step4": "4. Esli ispacalas odezhda, eto ne strashno. Poprosi vzroslogo pomoch.",
    "quickCheck.title": "Chto Sdelat Segodnya",
    "quickCheck.step1": "1. Prover, nachalas li segodnya menstruatsiya.",
    "quickCheck.step2": "2. Vyberi nastroenie i oshchushcheniya v tele.",
    "quickCheck.step3": "3. Esli chuvstvuesh sebya ploho, sohrani zapis i skazhi roditelyu.",
    "schoolBag.title": "Spisok v Shkolnuyu Sumku",
    "schoolBag.item1": "□ 2 ili 3 prokladki ili ezhednevnye prokladki",
    "schoolBag.item2": "□ Chistoe nizhnee belio",
    "schoolBag.item3": "□ Temnye bryuki ili kofta",
    "schoolBag.item4": "□ Malenkaya sumka i salfetki",
    "schoolBag.item5": "□ Pomni: esli ploho, mozhno obratitsya za pomoshchyu k uchitelyu.",
    "parentView.title": "Rezhim Dlya Roditelei",
    "parentGuide.title": "Zametki Dlya Roditelei",
    "parentGuide.tip1": "<strong>V pervye 1-2 goda tsikl mozhet byt neregulyarnym:</strong> vazhnee regulyarno nablyudat, chem dobitsya tochnosti.",
    "parentGuide.tip2": "<strong>Obrashchaite vnimanie na tri veshchi:</strong> meshaet li bol shkolnym zanyatiyam, ne slishkom li silnoe krovotechenie, i est li zametnye izmeneniya nastroeniya ili energii.",
    "parentGuide.tip3": "<strong>Kak podderzhat:</strong> podgotovte sredstva gigieny, teplye veshchi i smennuyu odezhdu, chtoby rebenok ne boyalsya govorit o samochuvstvii.",
    "parentGuide.tip4": "<strong>Stoit skoro obratitsya k vrachu, esli:</strong> bol silnaya i ne prohodit, est zametnaya slabost ili golovokruzhenie, temperatura, ochen obilnoe krovotechenie ili dlitelno net menstruatsii.",
    "checklist.title": "Spisok Dlya Roditelei",
    "checklist.print": "Raspechatat Spisok",
    "checklist.head1": "<strong>Bylo li v etom mesyatse chto-to iz etogo?</strong>",
    "checklist.item1": "□ Bol vliyala na shkolu ili son",
    "checklist.item2": "□ Odna prokladka polnostyu promokala za chas",
    "checklist.item3": "□ Golovokruzhenie, slabost ili blednost",
    "checklist.item4": "□ Temperatura ili yavnoe nedomoganie",
    "checklist.item5": "□ Krovyanistye vydeleniya mezhdu menstruatsiyami",
    "checklist.item6": "□ Zametnaya trevozhnost ili podavlennoe nastroenie",
    "checklist.head2": "<strong>Proverka nuzhnyh veshchei:</strong>",
    "checklist.item7": "□ Prokladki □ Smennoe belio □ Temnye shtany □ Grelka □ Chashka s teploi vodoi",
    "trend.title": "Zametki o Tsikle",
    "reminders.title": "Tsentr Napominanii",
    "reminderSettings.title": "Nastroiki Napominanii",
    "reminderSettings.enable": "Uvedomleniya Brauzera",
    "reminderSettings.enableHelp": "Razreshit prilozheniyu posylat lokalnye napominaniya, kogda eto nuzhno.",
    "reminderSettings.daily": "Napominat, esli segodnya eshche net zapisi",
    "reminderSettings.dailyHelp": "Vecherom pri otkrytii prilozheniya budet napominanie dobavit segodnyashnyuyu zapis.",
    "reminderSettings.attention": "Napominat, kogda nuzhno skazat roditelyu",
    "reminderSettings.attentionHelp": "Pokazyvaet uvedomlenie pri silnoi boli, obilnyh vydeleniyah ili vazhnyh flagah.",
    "reminderSettings.request": "Razreshit Uvedomleniya",
    "reminderSettings.test": "Otpravit Test",
    "reminderSettings.save": "Sohranit Nastroiki",
    "reminderSettings.note": "Dlya uvedomlenii snachala nuzhno dat razreshenie. Eta versiya proveriaet pri otkrytii prilozheniya, net li segodnya zapisi i est li povod skazat roditelyu.",
    "calendar.title": "Vid Mesyatsa",
    "calendar.legendPeriod": "<i class=\"swatch swatch--period\"></i>Zapisi o menstruatsii",
    "calendar.legendPredicted": "<i class=\"swatch swatch--predicted\"></i>Predpolagaemaya menstruatsiya",
    "calendar.legendFertile": "<i class=\"swatch swatch--fertile\"></i>Fertilnoe okno",
    "calendar.legendLog": "<i class=\"swatch swatch--log\"></i>Ezhednevnaya zapis",
    "calendar.legendToday": "<i class=\"swatch swatch--today\"></i>Segodnya",
    "security.title": "Roditelskii Zashchitnyi Kod",
    "security.newPin": "Novyi PIN",
    "security.confirmPin": "Podtverdi PIN",
    "security.savePin": "Sohranit PIN",
    "security.clearPin": "Ochistit PIN",
    "settings.title": "Nastroiki Prognoza",
    "settings.manualCycleLength": "Dlina Tsikla Vruchnuyu",
    "settings.manualPeriodLength": "Dlina Menstruatsii Vruchnuyu",
    "settings.autoLock": "Vremya Avtoblokirovki",
    "settings.save": "Sohranit Nastroiki",
    "settings.reset": "Vernut Avtoznacheniya",
    "settings.help": "Esli tsikl stalen, mozhno vruchnuyu zadat dlitelnost i perepisat srednie znacheniya.",
    "history.title": "Istoriya",
    "history.dailyFeed": "Poslednie Ezhednevnye Zapisi",
    "data.title": "Rezervnoe Kopirovanie i Vosstanovlenie",
    "data.tip1": "<strong>Rezervnoe kopirovanie:</strong> mozhno vygruzit ishodnye dannye ili udobnoe dlya roditelei rezyume.",
    "data.tip2": "<strong>Vosstanovlenie:</strong> zdes mozhno zagruzit sohranennyi JSON-backup.",
    "data.tip3": "<strong>Vnimanie:</strong> ochistka vseh dannyh neotmenyaema. Pri neobhodimosti snachala sdelay backup.",
    "data.exportRaw": "Eksport Ishodnyh Dannyh",
    "data.exportSummary": "Eksport Svodki Dlya Roditelei",
    "data.restore": "Vosstanovit Backup",
    "data.seed": "Zagruzit Primer Dannykh",
    "data.clear": "Ochistit Vse Dannye",
    "data.localOnly": "Po umolchaniyu dannye hranjatsya tolko v etom brauzere i ne zagruzhayutsya avtomaticheski.",
    "footer.changelog": "Posmotret Obnovleniya",
    "preferences.title": "Predpochteniya",
    "preferences.language": "Yazyk Interfeisa",
    "preferences.simpleMode": "Prostoi Rezhim",
    "preferences.simpleModeHelp": "Skryvaet bolshe razdelov i ostavlyaet bolee prostoi protsess zapolneniya.",
    "preferences.save": "Sohranit Predpochteniya",
    "preferences.replay": "Pokazat Gid Snova",
    "settingsHub.title": "Tsentr Nastroek",
    "dialog.pinLabel": "4-znachnyi PIN",
    "dialog.pinConfirm": "Vvedi PIN Eshche Raz",
    "welcome.title": "Pervyi Raz? Nachni Zdes",
    "welcome.tip1": "1. Rebenku obychno dostatochno razdelov Ezhednevnaya Otmetka i Vid Mesyatsa.",
    "welcome.tip2": "2. Esli segodnya ochen ploho, sohrani zapis i srazu skazhi roditelyu ili uchitelyu.",
    "welcome.tip3": "3. Rezhim dlya roditelei mozhno zashchitit PIN-kodom; tam bolshe podrobnostei i est kontrolnye spiski.",
    "welcome.start": "Nachat",
    "updates.title": "Poslednie Obnovleniya",
    "updates.v110": "<strong>v1.2.0</strong> Dobavleno pereklyuchenie mezhdu kitaiskim i angliiskim; knopki, soobshcheniya, daty i svodki menyayutsya vmeste s yazykom.",
    "updates.v100": "<strong>v1.0.0</strong> Uje est detskii rezhim, roditelskii rezhim, PIN-zamok, avtoblokirovka i pechatnye svodki.",
  },
};

const RUNTIME_TEXT = {
  periodDatesRequired: {
    "zh-CN": "请填写开始和结束日期。",
    en: "Please fill in both start and end dates.",
    tr: "Lutfen baslangic ve bitis tarihlerini doldurun.",
    ru: "Pozhaluista, ukazhite datu nachala i okonchaniya.",
  },
  periodEndBeforeStart: {
    "zh-CN": "结束日期不能早于开始日期。",
    en: "End date cannot be earlier than start date.",
    tr: "Bitis tarihi baslangic tarihinden once olamaz.",
    ru: "Data okonchaniya ne mozhet byt ranshe daty nachala.",
  },
  recordUpdated: {
    "zh-CN": "记录已更新。",
    en: "Record updated.",
    tr: "Kayit guncellendi.",
    ru: "Zapis obnovlena.",
  },
  recordSaved: {
    "zh-CN": "记录已保存。",
    en: "Record saved.",
    tr: "Kayit kaydedildi.",
    ru: "Zapis sohranena.",
  },
  dailyDateRequired: {
    "zh-CN": "请选择日期。",
    en: "Please choose a date.",
    tr: "Lutfen bir tarih secin.",
    ru: "Pozhaluista, vyberite datu.",
  },
  dailyUpdated: {
    "zh-CN": "日报已更新。",
    en: "Daily log updated.",
    tr: "Gunluk kayit guncellendi.",
    ru: "Ezhednevnaya zapis obnovlena.",
  },
  dailySaved: {
    "zh-CN": "日报已保存。",
    en: "Daily log saved.",
    tr: "Gunluk kayit kaydedildi.",
    ru: "Ezhednevnaya zapis sohranena.",
  },
  periodLoaded: {
    "zh-CN": "已载入经期记录，可直接修改后保存。",
    en: "Period record loaded. Edit and save when ready.",
    tr: "Adet kaydi yuklendi. Duzenleyip kaydedebilirsiniz.",
    ru: "Zapis o menstruatsii zagruzena. Mozhno izmenit i sohranit.",
  },
  dailyLoaded: {
    "zh-CN": "已载入日报，可直接修改后保存。",
    en: "Daily log loaded. Edit and save when ready.",
    tr: "Gunluk kayit yuklendi. Duzenleyip kaydedebilirsiniz.",
    ru: "Ezhednevnaya zapis zagruzhena. Mozhno izmenit i sohranit.",
  },
  dailySelected: {
    "zh-CN": "已选中 {date}，可直接填写日报。",
    en: "{date} selected. You can fill the daily log now.",
    tr: "{date} secildi. Gunluk kaydi simdi doldurabilirsiniz.",
    ru: "Vybrana data {date}. Teper mozhno zapolnit ezhednevnuyu zapis.",
  },
  rawExported: {
    "zh-CN": "原始数据已导出。",
    en: "Raw data exported.",
    tr: "Ham veri disa aktarıldi.",
    ru: "Ishodnye dannye eksportirovany.",
  },
  summaryExported: {
    "zh-CN": "家长摘要已导出。",
    en: "Parent summary exported.",
    tr: "Ebeveyn ozeti disa aktarildi.",
    ru: "Svodka dlya roditelei eksportirovana.",
  },
  dataImported: {
    "zh-CN": "数据已导入。",
    en: "Data imported.",
    tr: "Veriler ice aktarıldi.",
    ru: "Dannye importirovany.",
  },
  backupRestored: {
    "zh-CN": "备份已恢复。",
    en: "Backup restored.",
    tr: "Yedek geri yuklendi.",
    ru: "Rezervnaya kopiya vosstanovlena.",
  },
  importFailed: {
    "zh-CN": "导入失败：JSON 文件格式不正确。",
    en: "Import failed: invalid JSON file format.",
    tr: "Ice aktarma basarisiz: JSON dosya bicimi gecersiz.",
    ru: "Import ne udalsya: nevernyi format JSON-faila.",
  },
  clearAllConfirm: {
    "zh-CN": "确认清空当前浏览器中的全部记录吗？此操作无法撤销。",
    en: "Clear all records in this browser? This cannot be undone.",
    tr: "Bu tarayicidaki tum kayitlar temizlensin mi? Bu islem geri alinamaz.",
    ru: "Ochistit vse zapisi v etom brauzere? Eto deistvie nelzya otmenit.",
  },
  allCleared: {
    "zh-CN": "已清空当前浏览器里的记录。",
    en: "All records in this browser were cleared.",
    tr: "Bu tarayicidaki tum kayitlar temizlendi.",
    ru: "Vse zapisi v etom brauzere ochishcheny.",
  },
  seedConfirm: {
    "zh-CN": "当前已有数据，填充示例数据会覆盖现有内容，是否继续？",
    en: "Sample data will overwrite current data. Continue?",
    tr: "Ornek veri mevcut verilerin ustune yazacak. Devam edilsin mi?",
    ru: "Testovye dannye zamenyat tekushchie. Prodolzhit?",
  },
  sampleLoaded: {
    "zh-CN": "示例数据已填充。",
    en: "Sample data loaded.",
    tr: "Ornek veriler yuklendi.",
    ru: "Primer dannykh zagruzhen.",
  },
  settingsUpdated: {
    "zh-CN": "预测参数已更新。",
    en: "Prediction settings updated.",
    tr: "Tahmin ayarlari guncellendi.",
    ru: "Nastroiki prognoza obnovleny.",
  },
  parentSettingsUpdated: {
    "zh-CN": "家长参数已更新。",
    en: "Parent settings updated.",
    tr: "Ebeveyn ayarlari guncellendi.",
    ru: "Roditelskie nastroiki obnovleny.",
  },
  settingsReset: {
    "zh-CN": "预测参数已恢复自动计算。",
    en: "Prediction settings reset to automatic values.",
    tr: "Tahmin ayarlari otomatik degerlere donduruldu.",
    ru: "Nastroiki prognoza sbrosheny na avtomaticheskie znacheniya.",
  },
  preferencesSaved: {
    "zh-CN": "偏好设置已保存。",
    en: "Preferences saved.",
    tr: "Tercihler kaydedildi.",
    ru: "Predpochteniya sohraneny.",
  },
  reminderSettingsSaved: {
    "zh-CN": "提醒设置已保存。",
    en: "Reminder settings saved.",
    tr: "Hatirlatici ayarlari kaydedildi.",
    ru: "Nastroiki napominanii sohraneny.",
  },
  parentModeOpen: {
    "zh-CN": "打开家长模式",
    en: "Open Parent Mode",
    tr: "Ebeveyn Modunu Ac",
    ru: "Otkryt Rezhim Dlya Roditelei",
  },
  parentModeClose: {
    "zh-CN": "关闭家长模式",
    en: "Close Parent Mode",
    tr: "Ebeveyn Modunu Kapat",
    ru: "Zakryt Rezhim Dlya Roditelei",
  },
  simpleModeOpen: {
    "zh-CN": "打开超简模式",
    en: "Open Simple Mode",
    tr: "Basit Modu Ac",
    ru: "Vklyuchit Prostoi Rezhim",
  },
  simpleModeClose: {
    "zh-CN": "关闭超简模式",
    en: "Close Simple Mode",
    tr: "Basit Modu Kapat",
    ru: "Vyklyuchit Prostoi Rezhim",
  },
  pinSetStatus: {
    "zh-CN": "已设置家长 PIN。PIN 只保存在当前浏览器。",
    en: "Parent PIN is set. It is only stored in this browser.",
    tr: "Ebeveyn PIN'i ayarlandi. Yalnizca bu tarayicida saklanir.",
    ru: "Roditelskii PIN ustanovlen. On hranitsya tolko v etom brauzere.",
  },
  pinUnsetStatus: {
    "zh-CN": "还没有设置 PIN。建议家长先设置 4 位数字。",
    en: "No PIN yet. Parents should set a 4-digit PIN first.",
    tr: "Henuz PIN yok. Once ebeveynler 4 haneli bir PIN ayarlamali.",
    ru: "PIN poka net. Roditelyam stoit snachala zadat 4-znachnyi PIN.",
  },
  parentModeClosed: {
    "zh-CN": "家长模式已关闭。",
    en: "Parent Mode closed.",
    tr: "Ebeveyn Modu kapatildi.",
    ru: "Rezhim dlya roditelei zakryt.",
  },
  tellParentNow: {
    "zh-CN": "今天建议马上告诉家长，或者让老师帮你联系家长。",
    en: "Tell a parent now, or ask a teacher to help contact one.",
    tr: "Bugun hemen anne babana soyle ya da ogretmenden yardim iste.",
    ru: "Segodnya nuzhno srazu skazat roditelyu ili poprosit uchitelya pomoch svyazatsya.",
  },
  observeForNow: {
    "zh-CN": "今天先正常记录就可以，如果越来越不舒服，再及时告诉家长。",
    en: "A normal record is enough for now. If it gets worse, tell a parent soon.",
    tr: "Simdilik normal bir kayit yeterli. Kotuye giderse anne babana haber ver.",
    ru: "Poka dostatochno obychnoy zapisi. Esli stanet huzhe, skoro skazhi roditelyu.",
  },
  pinMustBe4: {
    "zh-CN": "PIN 需要是 4 位数字。",
    en: "PIN must be 4 digits.",
    tr: "PIN 4 rakam olmali.",
    ru: "PIN dolzhen soderzhat 4 cifry.",
  },
  pinMismatch: {
    "zh-CN": "两次输入的 PIN 不一致。",
    en: "The two PIN entries do not match.",
    tr: "Iki PIN girisi eslesmiyor.",
    ru: "Dva vvedennyh PIN ne sovpadayut.",
  },
  pinSaved: {
    "zh-CN": "家长 PIN 已保存。",
    en: "Parent PIN saved.",
    tr: "Ebeveyn PIN'i kaydedildi.",
    ru: "Roditelskii PIN sohranen.",
  },
  pinCleared: {
    "zh-CN": "家长 PIN 已清除。",
    en: "Parent PIN cleared.",
    tr: "Ebeveyn PIN'i temizlendi.",
    ru: "Roditelskii PIN ochishchen.",
  },
  parentModeOpened: {
    "zh-CN": "家长模式已开启。",
    en: "Parent Mode opened.",
    tr: "Ebeveyn Modu acildi.",
    ru: "Rezhim dlya roditelei otkryt.",
  },
  wrongPinAttempts: {
    "zh-CN": "PIN 不正确，请重试。还可以再试 {remaining} 次。",
    en: "Wrong PIN. Try again. {remaining} attempt(s) left.",
    tr: "PIN yanlis. Tekrar deneyin. {remaining} deneme hakki kaldi.",
    ru: "Nevernyi PIN. Poprobuyte snova. Ostalos {remaining} popytok.",
  },
  tooManyPinAttempts: {
    "zh-CN": "PIN 连续输错太多次，请关闭后再试。",
    en: "Too many wrong PIN attempts. Close and try again.",
    tr: "Cok fazla hatali PIN denemesi oldu. Kapatip tekrar deneyin.",
    ru: "Slishkom mnogo nevernyh popytok PIN. Zakroite i poprobuyte snova.",
  },
  guideOpened: {
    "zh-CN": "已重新打开首次引导。",
    en: "Guide opened again.",
    tr: "Rehber yeniden acildi.",
    ru: "Instruktsiya snova otkryta.",
  },
  setParentPinTitle: {
    "zh-CN": "设置家长 PIN",
    en: "Set Parent PIN",
    tr: "Ebeveyn PIN'i Ayarla",
    ru: "Ustanovit Roditelskii PIN",
  },
  enterParentPinTitle: {
    "zh-CN": "输入家长 PIN",
    en: "Enter Parent PIN",
    tr: "Ebeveyn PIN'ini Gir",
    ru: "Vvedite Roditelskii PIN",
  },
  setupPinHint: {
    "zh-CN": "第一次使用家长模式，请先设置一个 4 位数字 PIN。",
    en: "First time in Parent Mode. Please set a 4-digit PIN.",
    tr: "Ebeveyn Modunda ilk kez bulunuyorsunuz. Lutfen 4 haneli bir PIN ayarlayin.",
    ru: "Vy v rezhime dlya roditelei vpervye. Pozhaluista, ustanovite 4-znachnyi PIN.",
  },
  unlockPinHint: {
    "zh-CN": "只有家长知道这个 PIN。",
    en: "Only a parent should know this PIN.",
    tr: "Bu PIN'i sadece ebeveyn bilmelidir.",
    ru: "Etot PIN dolzhen znat tolko roditel.",
  },
  showPin: {
    "zh-CN": "显示 PIN",
    en: "Show PIN",
    tr: "PIN'i Goster",
    ru: "Pokazat PIN",
  },
  hidePin: {
    "zh-CN": "隐藏 PIN",
    en: "Hide PIN",
    tr: "PIN'i Gizle",
    ru: "Skryt PIN",
  },
  todaySelected: {
    "zh-CN": "已帮你选中今天，可以直接填写。",
    en: "Today is selected. You can fill it in now.",
    tr: "Bugun secildi. Simdi kaydi doldurabilirsiniz.",
    ru: "Segodnya uzhe vybrano. Mozhno srazu zapolnit.",
  },
  simpleOn: {
    "zh-CN": "已打开超简模式。",
    en: "Simple Mode is on.",
    tr: "Basit Mod acildi.",
    ru: "Prostoi rezhim vklyuchen.",
  },
  simpleOff: {
    "zh-CN": "已关闭超简模式。",
    en: "Simple Mode is off.",
    tr: "Basit Mod kapatildi.",
    ru: "Prostoi rezhim vyklyuchen.",
  },
  dailyDetailTitle: {
    "zh-CN": "日报详情：{date}",
    en: "Daily Log: {date}",
    tr: "Gunluk Kayit: {date}",
    ru: "Ezhednevnaya zapis: {date}",
  },
  editThisLog: {
    "zh-CN": "编辑这条日报",
    en: "Edit This Log",
    tr: "Bu Kaydi Duzenle",
    ru: "Izmenit Etu Zapis",
  },
};
const VALUE_LABELS = {
  symptoms: {
    "腹痛": { "zh-CN": "腹痛", en: "Cramps", tr: "Kramplar", ru: "Spazmy" },
    "腰酸": { "zh-CN": "腰酸", en: "Back pain", tr: "Bel agrisi", ru: "Bol v spine" },
    "头痛": { "zh-CN": "头痛", en: "Headache", tr: "Bas agrisi", ru: "Golovnaya bol" },
    "乳房胀痛": { "zh-CN": "乳房胀痛", en: "Breast tenderness", tr: "Gogus hassasiyeti", ru: "Chuvstvitelnost grudi" },
    "乏力": { "zh-CN": "乏力", en: "Low energy", tr: "Dusuk enerji", ru: "Malo sil" },
    "失眠": { "zh-CN": "失眠", en: "Trouble sleeping", tr: "Uyku sorunu", ru: "Problemy so snom" },
    "爆痘": { "zh-CN": "爆痘", en: "Breakouts", tr: "Sivilce", ru: "Vysypaniya" },
    "食欲变化": { "zh-CN": "食欲变化", en: "Appetite change", tr: "Istah degisikligi", ru: "Izmenenie appetita" },
    "情绪波动": { "zh-CN": "情绪波动", en: "Mood swings", tr: "Ruh hali dalgalanmasi", ru: "Perepady nastroeniya" },
    "腹胀": { "zh-CN": "腹胀", en: "Bloating", tr: "Sislik", ru: "Vzdu tie zhivota" },
  },
  alertFlags: {
    "痛得没法上课": { "zh-CN": "痛得没法上课", en: "Pain too strong for class", tr: "Agri derste duramayacak kadar guclu", ru: "Bol slishkom silnaya dlya zanyatii" },
    "一小时湿透一片": { "zh-CN": "一小时湿透一片", en: "Soaked one pad in an hour", tr: "Bir saatte bir ped tamamen doldu", ru: "Odna prokladka promokla za chas" },
    "头晕想吐": { "zh-CN": "头晕想吐", en: "Dizzy or nauseous", tr: "Bas donmesi veya mide bulantisi", ru: "Golovokruzhenie ili toshnota" },
    "发烧不舒服": { "zh-CN": "发烧不舒服", en: "Fever or feeling unwell", tr: "Ates veya kotu hissetme", ru: "Temperatura ili silnoe nedomoganie" },
  },
  flow: {
    "轻": { "zh-CN": "轻", en: "Light", tr: "Hafif", ru: "Slabyi" },
    "中": { "zh-CN": "中", en: "Medium", tr: "Orta", ru: "Srednii" },
    "重": { "zh-CN": "重", en: "Heavy", tr: "Yogun", ru: "Silnyi" },
    "不规则": { "zh-CN": "不规则", en: "Irregular", tr: "Duzensiz", ru: "Neregulyarnyi" },
  },
  bleeding: {
    "无": { "zh-CN": "无", en: "None", tr: "Yok", ru: "Net" },
    "点滴": { "zh-CN": "点滴", en: "Spotting", tr: "Lekelenme", ru: "Mazhushchie vydeleniya" },
    "轻": { "zh-CN": "轻", en: "Light", tr: "Hafif", ru: "Slabye" },
    "中": { "zh-CN": "中", en: "Medium", tr: "Orta", ru: "Srednie" },
    "重": { "zh-CN": "重", en: "Heavy", tr: "Yogun", ru: "Silnye" },
  },
  mood: {
    "平稳": { "zh-CN": "平稳", en: "Steady", tr: "Sakin", ru: "Spokoinoe" },
    "轻松": { "zh-CN": "轻松", en: "Calm", tr: "Rahat", ru: "Spokoinoe" },
    "疲惫": { "zh-CN": "疲惫", en: "Tired", tr: "Yorgun", ru: "Ustalost" },
    "烦躁": { "zh-CN": "烦躁", en: "Irritable", tr: "Sinirli", ru: "Razdrazhitelnost" },
    "低落": { "zh-CN": "低落", en: "Low", tr: "Modu dusuk", ru: "Podavlennoe" },
  },
  painChoice: {
    "0": { "zh-CN": "不疼", en: "No pain", tr: "Agri yok", ru: "Ne bolit" },
    "2": { "zh-CN": "普通", en: "Okay", tr: "Normal", ru: "Normalno" },
    "3": { "zh-CN": "有一点", en: "A little", tr: "Biraz", ru: "Nemnogo" },
    "6": { "zh-CN": "比较疼", en: "Hurts", tr: "Oldukca agriyor", ru: "Bolit" },
    "8": { "zh-CN": "很疼", en: "Very painful", tr: "Cok agriyor", ru: "Ochen bolit" },
  },
  energyChoice: {
    "1": { "zh-CN": "很累", en: "Very tired", tr: "Cok yorgun", ru: "Ochen ustala" },
    "2": { "zh-CN": "有点累", en: "A bit tired", tr: "Biraz yorgun", ru: "Nemnogo ustala" },
    "3": { "zh-CN": "还行", en: "Okay", tr: "Idare eder", ru: "Normalno" },
    "4": { "zh-CN": "不错", en: "Good", tr: "Iyi", ru: "Horosho" },
    "5": { "zh-CN": "很好", en: "Great", tr: "Harika", ru: "Otlichno" },
  },
  lockMinutes: {
    "5": { "zh-CN": "5 分钟", en: "5 min", tr: "5 dk", ru: "5 min" },
    "10": { "zh-CN": "10 分钟", en: "10 min", tr: "10 dk", ru: "10 min" },
    "30": { "zh-CN": "30 分钟", en: "30 min", tr: "30 dk", ru: "30 min" },
    "60": { "zh-CN": "60 分钟", en: "60 min", tr: "60 dk", ru: "60 min" },
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

function rt(key, variables = {}) {
  const lang = getLanguage();
  const template = RUNTIME_TEXT[key]?.[lang] ?? RUNTIME_TEXT[key]?.[DEFAULT_LANGUAGE] ?? key;
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
  if (browserLanguage.startsWith("tr")) return "tr";
  if (browserLanguage.startsWith("ru")) return "ru";
  if (browserLanguage.startsWith("zh")) return "zh-CN";
  return DEFAULT_LANGUAGE;
}

function getDateLocale() {
  return LANGUAGE_LOCALES[getLanguage()] || LANGUAGE_LOCALES[DEFAULT_LANGUAGE];
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
    setFormStatus(rt("periodDatesRequired"));
    return;
  }

  if (payload.endDate < payload.startDate) {
    setFormStatus(rt("periodEndBeforeStart"));
    return;
  }

  const existsIndex = state.records.findIndex((record) => record.id === payload.id);
  const statusMessage = existsIndex >= 0
    ? rt("recordUpdated")
    : rt("recordSaved");
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
    setDailyFormStatus(rt("dailyDateRequired"));
    return;
  }

  const existsIndex = state.dailyLogs.findIndex((log) => log.id === payload.id);
  const statusMessage = existsIndex >= 0
    ? rt("dailyUpdated")
    : rt("dailySaved");
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
  document.querySelector("#parent-pin")?.setAttribute("placeholder", getLanguage() !== "zh-CN" ? "4 digits" : "4 位数字");
  document.querySelector("#confirm-parent-pin")?.setAttribute("placeholder", getLanguage() !== "zh-CN" ? "Enter again" : "再次输入");
  document.querySelector("#manual-cycle-length")?.setAttribute("placeholder", getLanguage() !== "zh-CN" ? "Empty = auto" : "留空则自动计算");
  document.querySelector("#manual-period-length")?.setAttribute("placeholder", getLanguage() !== "zh-CN" ? "Empty = auto" : "留空则自动计算");
  document.querySelector("#pin-dialog-input")?.setAttribute("placeholder", getLanguage() !== "zh-CN" ? "Enter PIN" : "请输入 PIN");
  document.querySelector("#pin-dialog-confirm-input")?.setAttribute("placeholder", getLanguage() !== "zh-CN" ? "Enter PIN again" : "再次输入 PIN");
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
    elements.cycleDay.textContent = getLanguage() !== "zh-CN" ? "No data yet" : "尚无数据";
    elements.cycleSummary.textContent = getLanguage() !== "zh-CN"
      ? "Add a few period records first. This area will then show cycle patterns for the child and parent to review together."
      : "先记录几次月经后，这里会显示周期变化，也方便孩子和家长一起观察。";
    return;
  }

  const statusText = insights.currentPeriodRecord
    ? (getLanguage() !== "zh-CN" ? "On period" : "经期中")
    : (getLanguage() !== "zh-CN" ? `Cycle day ${Math.max(insights.cycleDay, 1)}` : `周期第 ${Math.max(insights.cycleDay, 1)} 天`);
  elements.cycleDay.textContent = statusText;

  if (insights.currentPeriodRecord) {
    elements.cycleSummary.textContent = getLanguage() !== "zh-CN"
      ? `This period started on ${formatDate(insights.currentPeriodRecord.startDate)} and is recorded to end on ${formatDate(insights.currentPeriodRecord.endDate)}.`
      : `本次经期开始于 ${formatDate(insights.currentPeriodRecord.startDate)}，结束日期记录为 ${formatDate(insights.currentPeriodRecord.endDate)}。`;
  } else if (state.settings.parentMode && insights.nextStartDate) {
    elements.cycleSummary.textContent = getLanguage() !== "zh-CN"
      ? `Estimated next period: around ${formatDate(insights.nextStartDate)}. Adjust based on real records when needed.`
      : `预计下次来潮时间为 ${formatDate(insights.nextStartDate)}，可根据实际情况调整与修正。`;
  } else {
    elements.cycleSummary.textContent = getLanguage() !== "zh-CN"
      ? "Keep logging. If anything feels wrong, remember to tell a parent."
      : "继续记录就好，看到不舒服的时候记得告诉家长。";
  }

  const pillTexts = [
    getLanguage() !== "zh-CN" ? `${insights.sorted.length} records` : `已记录 ${insights.sorted.length} 次`,
    getLanguage() !== "zh-CN"
      ? `Latest mood ${insights.todayLog ? labelFromCatalog("mood", insights.todayLog.mood) : "Not filled"}`
      : `最近状态 ${insights.todayLog ? labelFromCatalog("mood", insights.todayLog.mood) : "还没填"}`,
    insights.todayLog
      ? (getLanguage() !== "zh-CN"
        ? `Today: ${labelFromCatalog("bleeding", insights.todayLog.bleeding)} / pain ${insights.todayLog.painLevel}`
        : `今日日报 ${labelFromCatalog("bleeding", insights.todayLog.bleeding)} / 疼痛 ${insights.todayLog.painLevel}`)
      : (getLanguage() !== "zh-CN" ? "No daily log today" : "今天还没有日报"),
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
      label: getLanguage() !== "zh-CN" ? "Period Records" : "经期记录",
      value: getLanguage() !== "zh-CN" ? `${insights.sorted.length}` : `${insights.sorted.length} 次`,
      note: insights.sorted.length
        ? (getLanguage() !== "zh-CN" ? `Latest: ${formatDate(insights.lastRecord.startDate)}` : `最近一次：${formatDate(insights.lastRecord.startDate)}`)
        : (getLanguage() !== "zh-CN" ? "Try to log at least 3 cycles." : "建议至少记录 3 个周期。"),
    },
    {
      label: getLanguage() !== "zh-CN" ? "Tell Parent" : "需要告诉家长",
      value: getLanguage() !== "zh-CN" ? `${insights.needsParentAttentionCount}` : `${insights.needsParentAttentionCount} 次`,
      note: insights.needsParentAttentionCount
        ? (getLanguage() !== "zh-CN" ? "Some daily logs need extra attention." : "出现过比较需要留意的日报。")
        : (getLanguage() !== "zh-CN" ? "No strong alerts right now." : "目前没有明显异常提醒。"),
    },
    {
      label: getLanguage() !== "zh-CN" ? "Last 7 Days" : "最近 7 天状态",
      value: getLanguage() !== "zh-CN"
        ? `Pain ${insights.averageRecentPain ? insights.averageRecentPain.toFixed(1) : "0.0"}`
        : `${insights.averageRecentPain ? insights.averageRecentPain.toFixed(1) : "0.0"} 疼痛`,
      note: getLanguage() !== "zh-CN"
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
      <p>${getLanguage() !== "zh-CN" ? "No reminders yet. Start with one period record or one daily log." : "现在还没有提醒。先记一条经期或日报就可以。"}</p>
      <p>${getLanguage() !== "zh-CN" ? "When there is pain, heavy bleeding, or anything unusual, this card will summarize it here." : "如果出现疼痛、出血多或其他需要留意的情况，这里会自动帮你汇总。"}</p>
    `;
    return;
  }

  const topMessage = hasAttention
    ? (getLanguage() !== "zh-CN" ? "Some recent records should be shared with a parent." : "最近有一些记录建议告诉家长。")
    : (getLanguage() !== "zh-CN" ? "No urgent alerts right now. Keep logging." : "现在没有明显的紧急提醒，继续记录就好。");
  const painMessage = hasHighPain
    ? (getLanguage() !== "zh-CN" ? `${insights.highPainCount} high-pain log(s) were recorded recently.` : `最近记录到 ${insights.highPainCount} 次高疼痛日报。`)
    : (getLanguage() !== "zh-CN" ? "No very high pain logs recently." : "最近没有很高疼痛的日报。");
  const latestMessage = latestAttention
    ? (getLanguage() !== "zh-CN"
      ? `Latest alert: ${formatDate(latestAttention.date)}, ${labelFromCatalog("bleeding", latestAttention.bleeding)}, pain ${latestAttention.painLevel}/10.`
      : `最近一次提醒：${formatDate(latestAttention.date)}，出血 ${labelFromCatalog("bleeding", latestAttention.bleeding)}，疼痛 ${latestAttention.painLevel}/10。`)
    : (getLanguage() !== "zh-CN" ? "No recent records need parent attention." : "最近没有需要告诉家长的记录。");
  const parentOnlyDetail = latestAttention && state.settings.parentMode
    ? (getLanguage() !== "zh-CN"
      ? `Parent view: flags ${formatAlertFlags(latestAttention)}.`
      : `家长查看：提醒原因包括 ${formatAlertFlags(latestAttention)}。`)
    : "";
  const recentAlertList = insights.attentionLogs.length
    ? `
      <div class="reminder-list">
        ${insights.attentionLogs.map((log) => `
          <article class="reminder-item" data-level="${getLogSeverity(log)}" data-log-id="${log.id}" title="${getLanguage() !== "zh-CN" ? "Open this daily log" : "打开这条日报"}">
            <div class="reminder-item__top">
              <strong>${formatDate(log.date)}</strong>
              <span class="status-pill">${getReminderSeverityLabel(getLogSeverity(log))}</span>
            </div>
            <p>${getLanguage() !== "zh-CN"
              ? `${labelFromCatalog("bleeding", log.bleeding)}, pain ${log.painLevel}/10, ${formatAlertFlags(log) || "watch symptoms"}`
              : `出血 ${labelFromCatalog("bleeding", log.bleeding)}，疼痛 ${log.painLevel}/10，${formatAlertFlags(log) || "继续观察身体感觉"}`}</p>
          </article>
        `).join("")}
      </div>
    `
    : "";

  elements.reminderCenterContent.innerHTML = `
    <p><strong>${getLanguage() !== "zh-CN" ? "Now:" : "现在："}</strong>${topMessage}</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Pain:" : "疼痛："}</strong>${painMessage}</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Latest alert:" : "最近提醒："}</strong>${latestMessage}</p>
    ${parentOnlyDetail ? `<p><strong>${getLanguage() !== "zh-CN" ? "Why:" : "原因："}</strong>${parentOnlyDetail}</p>` : ""}
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
    return getLanguage() !== "zh-CN" ? "Tell Parent Now" : "尽快告诉家长";
  }
  if (level === "watch") {
    return getLanguage() !== "zh-CN" ? "Watch Closely" : "需要留意";
  }
  return getLanguage() !== "zh-CN" ? "Normal Check" : "正常观察";
}

function renderPrediction(insights) {
  if (!state.settings.parentMode) {
    elements.predictionContent.innerHTML = `
      <p>${getLanguage() !== "zh-CN" ? "This section is for parents." : "这里是家长查看区。"}</p>
      <p class="muted">${getLanguage() !== "zh-CN" ? "Predictions and fertility details stay hidden by default so kids do not see unnecessary information." : "默认不会显示预测和易孕信息，避免给孩子增加不必要的困扰。"}</p>
    `;
    return;
  }

  if (!insights.lastRecord) {
    elements.predictionContent.innerHTML = `
      <p>${getLanguage() !== "zh-CN" ? "Not enough data for predictions yet." : "暂无足够数据生成预测。"}</p>
      <p class="muted">${getLanguage() !== "zh-CN" ? "Start with the latest period first. Predictions get better as more records are added." : "建议先录入最近一次月经，再慢慢补充前面的记录，后面的估算会更稳定。"}</p>
    `;
    return;
  }

  const nextText = insights.nextStartDate
    ? (getLanguage() !== "zh-CN" ? `around ${formatDate(insights.nextStartDate)}` : `${formatDate(insights.nextStartDate)} 左右`)
    : (getLanguage() !== "zh-CN" ? "waiting for more records" : "等待更多记录");
  const fertileText = insights.fertileWindow
    ? (getLanguage() !== "zh-CN"
      ? `${formatDate(insights.fertileWindow.start)} to ${formatDate(insights.fertileWindow.end)}, estimated ovulation ${formatDate(insights.fertileWindow.ovulation)}`
      : `${formatDate(insights.fertileWindow.start)} 至 ${formatDate(insights.fertileWindow.end)}，排卵日估计为 ${formatDate(insights.fertileWindow.ovulation)}`)
    : (getLanguage() !== "zh-CN" ? "none yet" : "暂无");

  elements.predictionContent.innerHTML = `
    <p><strong>${getLanguage() !== "zh-CN" ? "Next period estimate:" : "下次来潮预测："}</strong>${nextText}</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Fertile window:" : "易孕窗口："}</strong>${fertileText}</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Source:" : "参数来源："}</strong>${
      Number(state.settings.manualCycleLength) || Number(state.settings.manualPeriodLength)
        ? (getLanguage() !== "zh-CN" ? "Partly based on manual settings." : "当前部分使用手动输入参数。")
        : (getLanguage() !== "zh-CN" ? "Fully based on historical averages." : "当前完全基于历史平均值。")
    }</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Note:" : "说明："}</strong>${getLanguage() !== "zh-CN" ? "These are estimates based on past records. They are only for observation. If there is long-lasting pain, unusual bleeding, or no period for a long time, talk with a parent and consider medical advice." : "这是按历史记录做出的估算，只是帮助观察变化。如果孩子长期疼痛明显、出血异常，或很久没有来月经，建议告诉家长并咨询医生。"}</p>
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
      ? (getLanguage() !== "zh-CN" ? "Cycle variation is small and looks fairly stable." : "周期波动较小，整体比较稳定。")
      : insights.cycleVariation <= 7
        ? (getLanguage() !== "zh-CN" ? "Cycle variation is mild. Keep watching." : "周期有轻微波动，建议继续观察。")
        : (getLanguage() !== "zh-CN" ? "Cycle variation is more noticeable. Consider medical advice if it continues." : "周期波动较明显，如果长期持续可考虑就医咨询。")
    : (getLanguage() !== "zh-CN" ? "At least two period records are needed to judge cycle variation." : "需要至少两次经期记录才能判断周期波动。");

  const symptomText = insights.frequentSymptoms.length
    ? insights.frequentSymptoms.map(([name, count]) => (
      getLanguage() !== "zh-CN" ? `${labelFromCatalog("symptoms", name)} (${count})` : `${labelFromCatalog("symptoms", name)}（${count} 次）`
    )).join(getLanguage() !== "zh-CN" ? ", " : "、")
    : (getLanguage() !== "zh-CN" ? "No frequent symptom data yet." : "暂无高频症状数据。");

  elements.trendContent.innerHTML = `
    <p><strong>${getLanguage() !== "zh-CN" ? "Recent status:" : "孩子近况："}</strong>${insights.lastDailyLog ? (getLanguage() !== "zh-CN" ? "Recent logs are being kept consistently." : "最近有持续记录，可以继续保持。") : (getLanguage() !== "zh-CN" ? "Start by logging the uncomfortable days first." : "先从不舒服的那几天开始记就可以。")}</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Cycle variation:" : "周期波动："}</strong>${state.settings.parentMode ? irregularityText : (getLanguage() !== "zh-CN" ? "Visible in Parent Mode." : "这部分放在家长模式里查看。")} </p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Variation range:" : "波动范围："}</strong>${state.settings.parentMode && insights.cycleLengths.length ? (getLanguage() !== "zh-CN" ? `${insights.cycleVariation} days` : `${insights.cycleVariation} 天`) : (getLanguage() !== "zh-CN" ? "Parent Mode only" : "家长模式可见")}</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Frequent symptoms:" : "高频症状："}</strong>${symptomText}</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "High-pain logs:" : "高疼痛日报："}</strong>${getLanguage() !== "zh-CN" ? `${insights.highPainCount}` : `${insights.highPainCount} 次`}${insights.highPainCount ? (getLanguage() !== "zh-CN" ? ", watch for triggers and what helps." : "，可以单独留意诱因和缓解方式。") : ""}</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Latest daily log:" : "最近日报："}</strong>${insights.lastDailyLog ? (getLanguage() !== "zh-CN" ? `${formatDate(insights.lastDailyLog.date)}, energy ${insights.lastDailyLog.energyLevel}/5, pain ${insights.lastDailyLog.painLevel}/10.` : `${formatDate(insights.lastDailyLog.date)}，精力 ${insights.lastDailyLog.energyLevel}/5，疼痛 ${insights.lastDailyLog.painLevel}/10。`) : (getLanguage() !== "zh-CN" ? "No daily log yet." : "还没有日报记录。")}</p>
  `;
}

function renderCalendar(insights) {
  const currentMonth = state.calendarDate;
  const monthStart = startOfMonth(currentMonth);
  const gridStart = addDays(toDateInputValue(monthStart), -monthStart.getDay());
  const weekdays = getLanguage() !== "zh-CN" ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] : ["日", "一", "二", "三", "四", "五", "六"];
  const cells = [];

  const localizedWeekdays = {
    "zh-CN": ["日", "一", "二", "三", "四", "五", "六"],
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    tr: ["Paz", "Pzt", "Sal", "Car", "Per", "Cum", "Cmt"],
    ru: ["Vsk", "Pon", "Vtr", "Srd", "Cht", "Ptn", "Sbt"],
  };

  elements.calendarTitle.textContent = new Intl.DateTimeFormat(
    getDateLocale(),
    { year: "numeric", month: "long" },
  ).format(monthStart);
  elements.calendarGrid.innerHTML = (localizedWeekdays[getLanguage()] || weekdays)
    .map((day) => `<div class="calendar__weekday">${day}</div>`).join("");

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
    tags.push(`<span>${getLanguage() !== "zh-CN" ? "Period" : "经期"}</span>`);
    states.push("period");
  }
  if (hasPredicted) {
    tags.push(`<span>${getLanguage() !== "zh-CN" ? "Predicted" : "预测"}</span>`);
    states.push("predicted");
  }
  if (hasFertile) {
    tags.push(`<span>${date === insights.fertileWindow.ovulation ? (getLanguage() !== "zh-CN" ? "Ovulation" : "排卵") : (getLanguage() !== "zh-CN" ? "Fertile" : "易孕")}</span>`);
    states.push("fertile");
  }
  if (dayLog) {
    tags.push(`<span class="day-tag--log">${getLanguage() !== "zh-CN" ? "Log" : "日志"}</span>`);
  }

  const classes = ["calendar__day"];
  if (isOtherMonth) classes.push("is-other-month");
  if (date === insights.today) classes.push("is-today");

  return `
    <article class="${classes.join(" ")}" data-state="${states.join(" ")}" data-date="${date}" title="${getLanguage() !== "zh-CN" ? `Tap to log ${formatDate(date)}` : `点击快速记录 ${formatDate(date)}`}">
      <div class="day-number">${new Date(date).getDate()}</div>
      <div class="day-tags">${tags.join("")}</div>
    </article>
  `;
}

function renderRecords() {
  if (!state.records.length) {
    elements.recordList.innerHTML = `<div class="empty-state">${getLanguage() !== "zh-CN" ? "No period records yet. Start with the most recent one first. There is no need to add everything at once." : "还没有任何经期记录。先从最近一次月经开始记就可以，不用一次补很多。"}</div>`;
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
              <div class="muted">${getLanguage() !== "zh-CN" ? `${duration} days` : `${duration} 天`}</div>
            </div>
            <div class="record-item__actions">
              <button class="ghost-btn" type="button" data-action="edit-period" data-id="${record.id}">${getLanguage() !== "zh-CN" ? "Edit" : "编辑"}</button>
              <button class="danger-btn" type="button" data-action="delete-period" data-id="${record.id}">${getLanguage() !== "zh-CN" ? "Delete" : "删除"}</button>
            </div>
          </div>
          <div class="record-meta">
            <span>${getLanguage() !== "zh-CN" ? "Flow" : "流量"}：${labelFromCatalog("flow", record.flowLevel)}</span>
            <span>${getLanguage() !== "zh-CN" ? "Pain" : "疼痛"}：${record.painLevel}/10</span>
            <span>${getLanguage() !== "zh-CN" ? "Mood" : "情绪"}：${labelFromCatalog("mood", record.mood)}</span>
            ${record.symptoms.map((symptom) => `<span>${labelFromCatalog("symptoms", symptom)}</span>`).join("")}
          </div>
          <p class="record-notes">${record.notes || (getLanguage() !== "zh-CN" ? "No notes" : "无备注")}</p>
        </article>
      `;
    })
    .join("");

  elements.recordList.innerHTML = markup;
  bindRecordActions(elements.recordList, "period");
}

function renderDailyLogs() {
  if (!state.dailyLogs.length) {
    elements.dailyLogList.innerHTML = `<div class="empty-state">${getLanguage() !== "zh-CN" ? "No daily logs yet. Starting with today is fine, and tapping any date on the calendar fills it in quickly." : "还没有日报。先记今天也可以；点日历上的任意一天，能快速带入日期。"}</div>`;
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
            <div class="muted">${getLanguage() !== "zh-CN" ? `Bleeding ${labelFromCatalog("bleeding", log.bleeding)}, energy ${log.energyLevel}/5${shouldTellParent(log) ? ", tell a parent" : ""}` : `出血 ${labelFromCatalog("bleeding", log.bleeding)}，精力 ${log.energyLevel}/5${shouldTellParent(log) ? "，建议告诉家长" : ""}`}</div>
          </div>
          <div class="record-item__actions">
            <button class="ghost-btn" type="button" data-action="edit-daily" data-id="${log.id}">${getLanguage() !== "zh-CN" ? "Edit" : "编辑"}</button>
            <button class="danger-btn" type="button" data-action="delete-daily" data-id="${log.id}">${getLanguage() !== "zh-CN" ? "Delete" : "删除"}</button>
          </div>
        </div>
        <div class="record-meta">
          <span>${getLanguage() !== "zh-CN" ? "Pain" : "疼痛"}：${log.painLevel}/10</span>
          <span>${getLanguage() !== "zh-CN" ? "Mood" : "情绪"}：${labelFromCatalog("mood", log.mood)}</span>
          ${log.symptoms.map((symptom) => `<span>${labelFromCatalog("symptoms", symptom)}</span>`).join("")}
        </div>
        <p class="record-notes">${log.notes || (getLanguage() !== "zh-CN" ? "No notes" : "无备注")}</p>
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
  setFormStatus(rt("periodLoaded"));
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
  setDailyFormStatus(rt("dailyLoaded"));
  elements.dailyForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openDailyLogDetail(logId) {
  const log = state.dailyLogs.find((item) => item.id === logId);
  if (!log || !elements.dailyDetailDialog) return;

  elements.dailyDetailTitle.textContent = rt("dailyDetailTitle", { date: formatDate(log.date) });
  elements.dailyDetailContent.innerHTML = `
    <p><strong>${getLanguage() !== "zh-CN" ? "Bleeding:" : "出血："}</strong>${labelFromCatalog("bleeding", log.bleeding)}</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Pain:" : "疼痛："}</strong>${log.painLevel}/10</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Energy:" : "精力："}</strong>${log.energyLevel}/5</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Mood:" : "心情："}</strong>${labelFromCatalog("mood", log.mood)}</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Body feelings:" : "身体感觉："}</strong>${log.symptoms.length ? log.symptoms.map((symptom) => labelFromCatalog("symptoms", symptom)).join(getLanguage() !== "zh-CN" ? ", " : "、") : (getLanguage() !== "zh-CN" ? "None" : "无")}</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Alert flags:" : "提醒原因："}</strong>${formatAlertFlags(log) || (getLanguage() !== "zh-CN" ? "Normal observation" : "正常观察")}</p>
    <p><strong>${getLanguage() !== "zh-CN" ? "Notes:" : "备注："}</strong>${log.notes || (getLanguage() !== "zh-CN" ? "No notes" : "无备注")}</p>
  `;
  elements.dailyDetailEditBtn.dataset.logId = log.id;
  elements.dailyDetailEditBtn.textContent = rt("editThisLog");
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
  setDailyFormStatus(rt("dailySelected", { date: formatDate(date) }));
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
  anchor.download = `${getLanguage() !== "zh-CN" ? "eva-moon-data" : "period-tracker"}-${toDateInputValue(new Date())}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast(rt("rawExported"));
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
          <td>${shouldTellParent(log) ? (getLanguage() !== "zh-CN" ? "Tell a parent" : "建议告诉家长") : (getLanguage() !== "zh-CN" ? "Observe" : "正常观察")}</td>
        </tr>
      `,
    )
    .join("");

  const symptomMarkup = insights.frequentSymptoms.length
    ? insights.frequentSymptoms.map(([name, count]) => `<li>${labelFromCatalog("symptoms", name)}${getLanguage() !== "zh-CN" ? `: ${count}` : `：${count} 次`}</li>`).join("")
    : `<li>${getLanguage() !== "zh-CN" ? "None yet" : "暂无"}</li>`;

  const html = `<!DOCTYPE html>
  <html lang="${getLanguage()}">
    <head>
      <meta charset="UTF-8">
      <title>${t("app.name")} - ${getLanguage() !== "zh-CN" ? "Parent Summary" : "家长摘要"}</title>
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
      <h1>${t("app.name")} - ${getLanguage() !== "zh-CN" ? "Parent Summary" : "家长摘要"}</h1>
      <p>${getLanguage() !== "zh-CN" ? "Exported on:" : "导出日期："}${formatDate(toDateInputValue(new Date()))}</p>
      <section class="card">
        <h2>${getLanguage() !== "zh-CN" ? "Overview" : "概况"}</h2>
        <p>${getLanguage() !== "zh-CN" ? "Period records:" : "经期记录次数："}${state.records.length}</p>
        <p>${getLanguage() !== "zh-CN" ? "Daily logs:" : "日报记录次数："}${state.dailyLogs.length}</p>
        <p>${getLanguage() !== "zh-CN" ? "Average cycle:" : "平均周期："}${insights.averageCycleLength}${getLanguage() !== "zh-CN" ? " days" : " 天"}</p>
        <p>${getLanguage() !== "zh-CN" ? "Average period length:" : "平均经期："}${insights.averagePeriodLength}${getLanguage() !== "zh-CN" ? " days" : " 天"}</p>
        <p>${getLanguage() !== "zh-CN" ? "Latest period start:" : "最近一次月经开始："}${insights.lastRecord ? formatDate(insights.lastRecord.startDate) : (getLanguage() !== "zh-CN" ? "None" : "暂无")}</p>
        <p>${getLanguage() !== "zh-CN" ? "Logs needing parent attention:" : "需要告诉家长的日报次数："}${insights.needsParentAttentionCount}</p>
      </section>
      <section class="card">
        <h2>${getLanguage() !== "zh-CN" ? "Frequent Body Feelings" : "高频身体感觉"}</h2>
        <ul>${symptomMarkup}</ul>
      </section>
      <section class="card">
        <h2>${getLanguage() !== "zh-CN" ? "Latest 5 Daily Logs" : "最近 5 条日报"}</h2>
        <table>
          <thead>
            <tr><th>${getLanguage() !== "zh-CN" ? "Date" : "日期"}</th><th>${getLanguage() !== "zh-CN" ? "Bleeding" : "出血"}</th><th>${getLanguage() !== "zh-CN" ? "Pain" : "疼痛"}</th><th>${getLanguage() !== "zh-CN" ? "Energy" : "精力"}</th><th>${getLanguage() !== "zh-CN" ? "Mood" : "心情"}</th><th>${getLanguage() !== "zh-CN" ? "Alert" : "提醒"}</th></tr>
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
  anchor.download = `${getLanguage() !== "zh-CN" ? "eva-moon-summary" : "eva-moon-summary"}-${toDateInputValue(new Date())}.html`;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast(rt("summaryExported"));
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
      setFormStatus(rt("dataImported"));
      setDailyFormStatus(rt("dataImported"));
      showToast(rt("backupRestored"));
    } catch (error) {
      window.alert(rt("importFailed"));
    } finally {
      elements.importInput.value = "";
    }
  };
  reader.readAsText(file);
}

function clearAllData() {
  if (!window.confirm(rt("clearAllConfirm"))) return;

  state.records = [];
  state.dailyLogs = [];
  state.settings = normalizeSettings({ language: state.settings.language });
  localStorage.removeItem(STORAGE_KEY);
  resetPeriodForm();
  resetDailyForm();
  render();
  showToast(rt("allCleared"));
}

function seedData() {
  if (state.records.length || state.dailyLogs.length) {
    const confirmed = window.confirm(rt("seedConfirm"));
    if (!confirmed) return;
  }

  state.records = SAMPLE_DATA.records.map((record) => ({ ...record }));
  state.dailyLogs = SAMPLE_DATA.dailyLogs.map((log) => ({ ...log }));
  state.settings = normalizeSettings({ language: state.settings.language });
  saveState();
  render();
  showToast(rt("sampleLoaded"));
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
  setFormStatus(rt("settingsUpdated"));
  showToast(rt("parentSettingsUpdated"));
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
  showToast(rt("settingsReset"));
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
  showToast(rt("preferencesSaved"));
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
  showToast(rt("reminderSettingsSaved"));
  void evaluateNotificationTriggers(buildInsights());
}

function renderParentMode() {
  const isUnlockedInSession = isParentSessionUnlocked();
  if (state.settings.parentMode && !isUnlockedInSession) {
    state.settings.parentMode = false;
  }
  elements.parentModeBtn.textContent = state.settings.parentMode ? rt("parentModeClose") : rt("parentModeOpen");
  elements.simpleModeBtn.textContent = state.settings.simpleMode ? rt("simpleModeClose") : rt("simpleModeOpen");
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
  elements.pinStatus.textContent = state.settings.parentPin ? rt("pinSetStatus") : rt("pinUnsetStatus");
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
    showToast(rt("parentModeClosed"));
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
  elements.alertAdviceText.textContent = shouldTellParent(draft) ? rt("tellParentNow") : rt("observeForNow");
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
    parts.push(getLanguage() !== "zh-CN" ? "high pain" : "疼痛较高");
  }
  if (log.bleeding === "重") {
    parts.push(getLanguage() !== "zh-CN" ? "heavy bleeding" : "出血偏多");
  }
  if (Array.isArray(log.alertFlags) && log.alertFlags.length) {
    parts.push(log.alertFlags.map((flag) => labelFromCatalog("alertFlags", flag)).join(getLanguage() !== "zh-CN" ? ", " : "、"));
  }
  return parts.join(getLanguage() !== "zh-CN" ? ", " : "、");
}

function savePin(event) {
  event.preventDefault();
  const pin = normalizePin(elements.parentPin.value);
  const confirmPin = normalizePin(elements.confirmParentPin.value);

  if (!pin || pin.length !== 4) {
    elements.pinStatus.textContent = rt("pinMustBe4");
    return;
  }
  if (pin !== confirmPin) {
    elements.pinStatus.textContent = rt("pinMismatch");
    return;
  }

  state.settings.parentPin = pin;
  saveState();
  renderPinSettings();
  elements.pinStatus.textContent = rt("pinSaved");
  showToast(rt("pinSaved"));
}

function clearPin() {
  state.settings.parentPin = "";
  state.settings.parentMode = false;
  clearParentSessionUnlock();
  saveState();
  render();
  elements.pinStatus.textContent = rt("pinCleared");
  showToast(rt("pinCleared"));
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
      elements.pinDialogStatus.textContent = rt("pinMustBe4");
      return;
    }
    if (inputPin !== confirmPin) {
      elements.pinDialogStatus.textContent = rt("pinMismatch");
      return;
    }

    state.settings.parentPin = inputPin;
    state.settings.parentMode = true;
    setParentSessionUnlock();
    saveState();
    render();
    elements.pinDialog.close();
    showToast(rt("parentModeOpened"));
    return;
  }

  if (inputPin !== state.settings.parentPin) {
    state.pinAttempts += 1;
    const remaining = Math.max(MAX_PIN_ATTEMPTS - state.pinAttempts, 0);
    elements.pinDialogStatus.textContent =
      remaining > 0
        ? rt("wrongPinAttempts", { remaining })
        : rt("tooManyPinAttempts");
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
  showToast(rt("parentModeOpened"));
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
  showToast(rt("guideOpened"));
}

function openPinDialog(mode) {
  state.pinDialogMode = mode;
  state.pinAttempts = 0;
  elements.pinDialogInput.value = "";
  elements.pinDialogConfirmInput.value = "";
  setPinInputsVisibility(false);
  elements.pinDialogConfirmWrap.classList.toggle("is-hidden", mode !== "setup");
  elements.pinDialogTitle.textContent = mode === "setup" ? rt("setParentPinTitle") : rt("enterParentPinTitle");
  elements.pinDialogStatus.textContent =
    mode === "setup"
      ? rt("setupPinHint")
      : rt("unlockPinHint");
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
  elements.pinDialogToggleVisibility.textContent = visible ? rt("hidePin") : rt("showPin");
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
  showToast(rt("todaySelected"));
}

function toggleSimpleMode() {
  state.settings.simpleMode = !state.settings.simpleMode;
  saveState();
  render();
  showToast(state.settings.simpleMode ? rt("simpleOn") : rt("simpleOff"));
}

function onLanguageChange(event) {
  const nextLanguage = SUPPORTED_LANGUAGES.includes(event.target.value) ? event.target.value : DEFAULT_LANGUAGE;
  state.settings.language = nextLanguage;
  saveState();
  render();
  const messages = {
    "zh-CN": "语言已切换为中文。",
    en: "Language switched to English.",
    tr: "Dil Turkce olarak degistirildi.",
    ru: "Yazyk pereklyuchen na russkii.",
  };
  showToast(messages[getLanguage()] || messages[DEFAULT_LANGUAGE]);
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
    return {
      "zh-CN": "当前通知权限：已允许。本地提醒可以显示在浏览器或已安装应用中。",
      en: "Notification permission: allowed. Local reminders can appear in the browser or installed app.",
      tr: "Bildirim izni verildi. Yerel hatirlaticilar tarayicida veya yuklu uygulamada gorunebilir.",
      ru: "Razreshenie na uvedomleniya vklyucheno. Lokalnye napominaniya mogut poyavlyatsya v brauzere ili ustanovlennom prilozhenii.",
    }[getLanguage()] || "";
  }
  if (permission === "denied") {
    return {
      "zh-CN": "当前通知权限：已拒绝。如需开启，请到浏览器站点权限里修改。",
      en: "Notification permission: blocked. Change it in the browser site settings if needed.",
      tr: "Bildirim izni engellendi. Gerekirse tarayici site ayarlarindan degistirin.",
      ru: "Razreshenie na uvedomleniya zablokirovano. Pri neobhodimosti izmenite eto v nastroikah saita v brauzere.",
    }[getLanguage()] || "";
  }
  if (permission === "unsupported") {
    return {
      "zh-CN": "当前浏览器不支持通知提醒。",
      en: "Notifications are not supported in this browser.",
      tr: "Bu tarayici bildirimleri desteklemiyor.",
      ru: "Etot brauzer ne podderzhivaet uvedomleniya.",
    }[getLanguage()] || "";
  }
  return {
    "zh-CN": "当前通知权限：还没有选择。",
    en: "Notification permission: not chosen yet.",
    tr: "Bildirim izni henuz secilmedi.",
    ru: "Razreshenie na uvedomleniya eshche ne vybrano.",
  }[getLanguage()] || "";
}

async function requestNotificationPermission() {
  if (!supportsNotifications()) {
    showToast(getNotificationStatusText());
    renderNotificationSettings();
    return;
  }
  if (Notification.permission === "denied") {
    showToast(getNotificationStatusText());
    renderNotificationSettings();
    return;
  }

  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    state.settings.notificationsEnabled = true;
    saveState();
    renderNotificationSettings();
    showToast({
      "zh-CN": "通知提醒已开启。",
      en: "Notifications are enabled.",
      tr: "Bildirimler acildi.",
      ru: "Uvedomleniya vklyucheny.",
    }[getLanguage()]);
    return;
  }

  renderNotificationSettings();
  showToast({
    "zh-CN": "还没有获得通知权限。",
    en: "Notification permission was not granted.",
    tr: "Bildirim izni verilmedi.",
    ru: "Razreshenie na uvedomleniya ne bylo vydano.",
  }[getLanguage()]);
}

async function sendTestNotification() {
  const sent = await sendLocalNotification({
    title: {
      "zh-CN": "Eva的月亮测试提醒",
      en: "Eva's Moon Test",
      tr: "Eva'nin Ayi Test Bildirimi",
      ru: "Test Uvedomleniya Luna Evy",
    }[getLanguage()],
    body: {
      "zh-CN": "这台设备已经可以收到应用提醒了。",
      en: "Notifications are working on this device.",
      tr: "Bu cihaz bildirimleri alabiliyor.",
      ru: "Na etom ustroistve uvedomleniya rabotayut.",
    }[getLanguage()],
    tag: "eva-moon-test",
  });
  if (sent) {
    showToast({
      "zh-CN": "测试提醒已发送。",
      en: "Test reminder sent.",
      tr: "Test bildirimi gonderildi.",
      ru: "Testovoe uvedomlenie otpravleno.",
    }[getLanguage()]);
    return;
  }
  showToast({
    "zh-CN": "通知暂时还不能使用。",
    en: "Notifications are not ready yet.",
    tr: "Bildirimler henuz hazir degil.",
    ru: "Uvedomleniya poka nedostupny.",
  }[getLanguage()]);
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
          title: {
            "zh-CN": "今天需要告诉家长",
            en: "Tell A Parent Today",
            tr: "Bugun Anne Babaya Soyle",
            ru: "Segodnya Nuzhno Skazat Roditelyu",
          }[getLanguage()],
          body: {
            "zh-CN": `${formatDate(latestAttention.date)}：疼痛 ${latestAttention.painLevel}/10，${formatAlertFlags(latestAttention) || "需要留意"}。`,
            en: `${formatDate(latestAttention.date)}: pain ${latestAttention.painLevel}/10, ${formatAlertFlags(latestAttention) || "needs attention"}.`,
            tr: `${formatDate(latestAttention.date)}: agri ${latestAttention.painLevel}/10, ${formatAlertFlags(latestAttention) || "dikkat gerekiyor"}.`,
            ru: `${formatDate(latestAttention.date)}: bol ${latestAttention.painLevel}/10, ${formatAlertFlags(latestAttention) || "nuzhno vnimanie"}.`,
          }[getLanguage()],
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
    title: {
      "zh-CN": "记得补今天的记录",
      en: "Remember Today's Check-in",
      tr: "Bugunun Kaydini Unutma",
      ru: "Ne Zabud Zapisat Segodnya",
    }[getLanguage()],
    body: {
      "zh-CN": "今天还没有日报。点几下就能记完今天的状态。",
      en: "There is no daily log for today yet. A quick check-in only takes a few taps.",
      tr: "Bugun icin henuz gunluk kayit yok. Birkac dokunusla hizlica tamamlayabilirsiniz.",
      ru: "Za segodnya eshche net zapisi. Bystruyu otmetku mozhno sdelat za paru nazhatii.",
    }[getLanguage()],
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
  return new Intl.DateTimeFormat(getDateLocale(), {
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
