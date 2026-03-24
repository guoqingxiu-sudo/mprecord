const STORAGE_KEY = "moon-log-period-tracker-v2";
const ONBOARDING_KEY = "moon-log-onboarding-seen-v1";
const PARENT_UNLOCK_KEY = "moon-log-parent-unlocked-v1";
const MAX_PIN_ATTEMPTS = 3;
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
  settingsForm: document.querySelector("#settings-form"),
  manualCycleLength: document.querySelector("#manual-cycle-length"),
  manualPeriodLength: document.querySelector("#manual-period-length"),
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
};

bootstrap();

function bootstrap() {
  renderSymptomOptions(elements.symptomOptions, "period-symptoms");
  renderSymptomOptions(elements.dailySymptomOptions, "daily-symptoms");
  renderSymptomOptions(elements.alertFlagOptions, "alert-flags", ALERT_FLAGS);
  attachEvents();
  loadState();
  resetDailyForm();
  render();
  registerServiceWorker();
  maybeShowOnboarding();
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
  elements.settingsForm.addEventListener("submit", saveSettings);
  elements.resetSettingsBtn.addEventListener("click", resetSettings);
  elements.installBtn.addEventListener("click", installApp);
  elements.parentModeBtn.addEventListener("click", toggleParentMode);
  elements.pinForm.addEventListener("submit", savePin);
  elements.clearPinBtn.addEventListener("click", clearPin);
  elements.pinDialogForm.addEventListener("submit", handlePinDialogSubmit);
  elements.pinDialogToggleVisibility?.addEventListener("click", togglePinVisibility);
  elements.printChecklistBtn?.addEventListener("click", () => window.print());
  elements.welcomeDialogForm?.addEventListener("submit", closeOnboarding);

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
}

function renderSymptomOptions(container, groupName, items = SYMPTOMS) {
  container.innerHTML = items.map(
    (symptom) => `
      <label class="tag-check">
        <input type="checkbox" name="${groupName}" value="${symptom}">
        <span>${symptom}</span>
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
    setFormStatus("请填写开始和结束日期。");
    return;
  }

  if (payload.endDate < payload.startDate) {
    setFormStatus("结束日期不能早于开始日期。");
    return;
  }

  const existsIndex = state.records.findIndex((record) => record.id === payload.id);
  const statusMessage = existsIndex >= 0 ? "记录已更新。" : "记录已保存。";
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
    setDailyFormStatus("请选择日期。");
    return;
  }

  const existsIndex = state.dailyLogs.findIndex((log) => log.id === payload.id);
  const statusMessage = existsIndex >= 0 ? "日报已更新。" : "日报已保存。";
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
}

function render() {
  const insights = buildInsights();
  renderHero(insights);
  renderStats(insights);
  renderPrediction(insights);
  renderTrend(insights);
  renderCalendar(insights);
  renderRecords();
  renderDailyLogs();
  renderSettings();
  renderParentMode();
  renderPinSettings();
  updateAlertAdvice();
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
  };
}

function renderHero(insights) {
  elements.heroPills.innerHTML = "";

  if (!insights.lastRecord) {
    elements.cycleDay.textContent = "尚无数据";
    elements.cycleSummary.textContent = "先记录几次月经后，这里会显示周期变化，也方便孩子和家长一起观察。";
    return;
  }

  const statusText = insights.currentPeriodRecord ? "经期中" : `周期第 ${Math.max(insights.cycleDay, 1)} 天`;
  elements.cycleDay.textContent = statusText;

  if (insights.currentPeriodRecord) {
    elements.cycleSummary.textContent = `本次经期开始于 ${formatDate(insights.currentPeriodRecord.startDate)}，结束日期记录为 ${formatDate(insights.currentPeriodRecord.endDate)}。`;
  } else if (state.settings.parentMode && insights.nextStartDate) {
    elements.cycleSummary.textContent = `预计下次来潮时间为 ${formatDate(insights.nextStartDate)}，可根据实际情况调整与修正。`;
  } else {
    elements.cycleSummary.textContent = "继续记录就好，看到不舒服的时候记得告诉家长。";
  }

  const pillTexts = [
    `已记录 ${insights.sorted.length} 次`,
    `最近状态 ${insights.todayLog ? `${insights.todayLog.mood}` : "还没填"}`,
    insights.todayLog ? `今日日报 ${insights.todayLog.bleeding} / 疼痛 ${insights.todayLog.painLevel}` : "今天还没有日报",
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
      label: "经期记录",
      value: `${insights.sorted.length} 次`,
      note: insights.sorted.length ? `最近一次：${formatDate(insights.lastRecord.startDate)}` : "建议至少记录 3 个周期。",
    },
    {
      label: "需要告诉家长",
      value: `${insights.needsParentAttentionCount} 次`,
      note: insights.needsParentAttentionCount ? "出现过比较需要留意的日报。" : "目前没有明显异常提醒。",
    },
    {
      label: "最近 7 天状态",
      value: `${insights.averageRecentPain ? insights.averageRecentPain.toFixed(1) : "0.0"} 疼痛`,
      note: `平均精力 ${insights.averageRecentEnergy ? insights.averageRecentEnergy.toFixed(1) : "0.0"}/5`,
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

function renderPrediction(insights) {
  if (!state.settings.parentMode) {
    elements.predictionContent.innerHTML = `
      <p>这里是家长查看区。</p>
      <p class="muted">默认不会显示预测和易孕信息，避免给孩子增加不必要的困扰。</p>
    `;
    return;
  }

  if (!insights.lastRecord) {
    elements.predictionContent.innerHTML = `
      <p>暂无足够数据生成预测。</p>
      <p class="muted">建议先录入最近一次月经，再慢慢补充前面的记录，后面的估算会更稳定。</p>
    `;
    return;
  }

  const nextText = insights.nextStartDate ? `${formatDate(insights.nextStartDate)} 左右` : "等待更多记录";
  const fertileText = insights.fertileWindow
    ? `${formatDate(insights.fertileWindow.start)} 至 ${formatDate(insights.fertileWindow.end)}，排卵日估计为 ${formatDate(insights.fertileWindow.ovulation)}`
    : "暂无";

  elements.predictionContent.innerHTML = `
    <p><strong>下次来潮预测：</strong>${nextText}</p>
    <p><strong>易孕窗口：</strong>${fertileText}</p>
    <p><strong>参数来源：</strong>${
      Number(state.settings.manualCycleLength) || Number(state.settings.manualPeriodLength)
        ? "当前部分使用手动输入参数。"
        : "当前完全基于历史平均值。"
    }</p>
    <p><strong>说明：</strong>这是按历史记录做出的估算，只是帮助观察变化。如果孩子长期疼痛明显、出血异常，或很久没有来月经，建议告诉家长并咨询医生。</p>
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
      ? "周期波动较小，整体比较稳定。"
      : insights.cycleVariation <= 7
        ? "周期有轻微波动，建议继续观察。"
        : "周期波动较明显，如果长期持续可考虑就医咨询。"
    : "需要至少两次经期记录才能判断周期波动。";

  const symptomText = insights.frequentSymptoms.length
    ? insights.frequentSymptoms.map(([name, count]) => `${name}（${count} 次）`).join("、")
    : "暂无高频症状数据。";

  elements.trendContent.innerHTML = `
    <p><strong>孩子近况：</strong>${insights.lastDailyLog ? "最近有持续记录，可以继续保持。" : "先从不舒服的那几天开始记就可以。"}</p>
    <p><strong>周期波动：</strong>${state.settings.parentMode ? irregularityText : "这部分放在家长模式里查看。"} </p>
    <p><strong>波动范围：</strong>${state.settings.parentMode && insights.cycleLengths.length ? `${insights.cycleVariation} 天` : "家长模式可见"}</p>
    <p><strong>高频症状：</strong>${symptomText}</p>
    <p><strong>高疼痛日报：</strong>${insights.highPainCount} 次${insights.highPainCount ? "，可以单独留意诱因和缓解方式。" : ""}</p>
    <p><strong>最近日报：</strong>${insights.lastDailyLog ? `${formatDate(insights.lastDailyLog.date)}，精力 ${insights.lastDailyLog.energyLevel}/5，疼痛 ${insights.lastDailyLog.painLevel}/10。` : "还没有日报记录。"}</p>
  `;
}

function renderCalendar(insights) {
  const currentMonth = state.calendarDate;
  const monthStart = startOfMonth(currentMonth);
  const gridStart = addDays(toDateInputValue(monthStart), -monthStart.getDay());
  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
  const cells = [];

  elements.calendarTitle.textContent = `${monthStart.getFullYear()} 年 ${monthStart.getMonth() + 1} 月`;
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
    tags.push(`<span>经期</span>`);
    states.push("period");
  }
  if (hasPredicted) {
    tags.push(`<span>预测</span>`);
    states.push("predicted");
  }
  if (hasFertile) {
    tags.push(`<span>${date === insights.fertileWindow.ovulation ? "排卵" : "易孕"}</span>`);
    states.push("fertile");
  }
  if (dayLog) {
    tags.push(`<span class="day-tag--log">日志</span>`);
  }

  const classes = ["calendar__day"];
  if (isOtherMonth) classes.push("is-other-month");
  if (date === insights.today) classes.push("is-today");

  return `
    <article class="${classes.join(" ")}" data-state="${states.join(" ")}" data-date="${date}" title="点击快速记录 ${formatDate(date)}">
      <div class="day-number">${new Date(date).getDate()}</div>
      <div class="day-tags">${tags.join("")}</div>
    </article>
  `;
}

function renderRecords() {
  if (!state.records.length) {
    elements.recordList.innerHTML = `<div class="empty-state">还没有任何经期记录。先从最近一次开始。</div>`;
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
              <div class="muted">${duration} 天</div>
            </div>
            <div class="record-item__actions">
              <button class="ghost-btn" type="button" data-action="edit-period" data-id="${record.id}">编辑</button>
              <button class="danger-btn" type="button" data-action="delete-period" data-id="${record.id}">删除</button>
            </div>
          </div>
          <div class="record-meta">
            <span>流量：${record.flowLevel}</span>
            <span>疼痛：${record.painLevel}/10</span>
            <span>情绪：${record.mood}</span>
            ${record.symptoms.map((symptom) => `<span>${symptom}</span>`).join("")}
          </div>
          <p class="record-notes">${record.notes || "无备注"}</p>
        </article>
      `;
    })
    .join("");

  elements.recordList.innerHTML = markup;
  bindRecordActions(elements.recordList, "period");
}

function renderDailyLogs() {
  if (!state.dailyLogs.length) {
    elements.dailyLogList.innerHTML = `<div class="empty-state">还没有日报。点击日历上的任意一天可以快速填入日期。</div>`;
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
            <div class="muted">出血 ${log.bleeding}，精力 ${log.energyLevel}/5${shouldTellParent(log) ? "，建议告诉家长" : ""}</div>
          </div>
          <div class="record-item__actions">
            <button class="ghost-btn" type="button" data-action="edit-daily" data-id="${log.id}">编辑</button>
            <button class="danger-btn" type="button" data-action="delete-daily" data-id="${log.id}">删除</button>
          </div>
        </div>
        <div class="record-meta">
          <span>疼痛：${log.painLevel}/10</span>
          <span>情绪：${log.mood}</span>
          ${log.symptoms.map((symptom) => `<span>${symptom}</span>`).join("")}
        </div>
        <p class="record-notes">${log.notes || "无备注"}</p>
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
  setFormStatus("已载入经期记录，可直接修改后保存。");
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
  setDailyFormStatus("已载入日报，可直接修改后保存。");
  elements.dailyForm.scrollIntoView({ behavior: "smooth", block: "start" });
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
  setDailyFormStatus(`已选中 ${formatDate(date)}，可直接填写日报。`);
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
    if (!raw) return;
    const parsed = JSON.parse(raw);
    state.records = Array.isArray(parsed.records) ? parsed.records.map(normalizeRecord).filter(Boolean) : [];
    state.dailyLogs = Array.isArray(parsed.dailyLogs) ? parsed.dailyLogs.map(normalizeDailyLog).filter(Boolean) : [];
    state.settings = normalizeSettings(parsed.settings);
    sortRecords();
    sortDailyLogs();
  } catch (error) {
    console.error("Failed to load saved period tracker data", error);
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
  anchor.download = `period-tracker-${toDateInputValue(new Date())}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function exportSummary() {
  const insights = buildInsights();
  const lines = [
    "Eva的月亮 - 家长摘要",
    `导出日期：${formatDate(toDateInputValue(new Date()))}`,
    "",
    `经期记录次数：${state.records.length}`,
    `日报记录次数：${state.dailyLogs.length}`,
    `平均周期：${insights.averageCycleLength} 天`,
    `平均经期：${insights.averagePeriodLength} 天`,
    `最近一次月经开始：${insights.lastRecord ? formatDate(insights.lastRecord.startDate) : "暂无"}`,
    `最近一条日报：${insights.lastDailyLog ? formatDate(insights.lastDailyLog.date) : "暂无"}`,
    `需要告诉家长的日报次数：${insights.needsParentAttentionCount}`,
    "",
    "高频身体感觉：",
    insights.frequentSymptoms.length
      ? insights.frequentSymptoms.map(([name, count]) => `- ${name}：${count} 次`).join("\n")
      : "- 暂无",
    "",
    "最近 5 条日报：",
    ...[...state.dailyLogs]
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 5)
      .map(
        (log) =>
          `- ${formatDate(log.date)} | 出血:${log.bleeding} | 疼痛:${log.painLevel}/10 | 精力:${log.energyLevel}/5 | 心情:${log.mood}${shouldTellParent(log) ? " | 建议告诉家长" : ""}`,
      ),
  ];

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `eva-moon-summary-${toDateInputValue(new Date())}.txt`;
  anchor.click();
  URL.revokeObjectURL(url);
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
      setFormStatus("数据已导入。");
      setDailyFormStatus("数据已导入。");
    } catch (error) {
      window.alert("导入失败：JSON 文件格式不正确。");
    } finally {
      elements.importInput.value = "";
    }
  };
  reader.readAsText(file);
}

function clearAllData() {
  if (!window.confirm("确认清空当前浏览器中的全部记录吗？此操作无法撤销。")) return;

  state.records = [];
  state.dailyLogs = [];
  state.settings = normalizeSettings();
  localStorage.removeItem(STORAGE_KEY);
  resetPeriodForm();
  resetDailyForm();
  render();
}

function seedData() {
  if (state.records.length || state.dailyLogs.length) {
    const confirmed = window.confirm("当前已有数据，填充示例数据会覆盖现有内容，是否继续？");
    if (!confirmed) return;
  }

  state.records = SAMPLE_DATA.records.map((record) => ({ ...record }));
  state.dailyLogs = SAMPLE_DATA.dailyLogs.map((log) => ({ ...log }));
  state.settings = normalizeSettings();
  saveState();
  render();
}

function saveSettings(event) {
  event.preventDefault();

  state.settings = normalizeSettings({
    manualCycleLength: elements.manualCycleLength.value,
    manualPeriodLength: elements.manualPeriodLength.value,
  });
  saveState();
  render();
  setFormStatus("预测参数已更新。");
}

function resetSettings() {
  state.settings = normalizeSettings();
  saveState();
  render();
}

function renderSettings() {
  elements.manualCycleLength.value = state.settings.manualCycleLength;
  elements.manualPeriodLength.value = state.settings.manualPeriodLength;
}

function renderParentMode() {
  const isUnlockedInSession = sessionStorage.getItem(PARENT_UNLOCK_KEY) === "1";
  if (state.settings.parentMode && !isUnlockedInSession) {
    state.settings.parentMode = false;
  }
  elements.parentModeBtn.textContent = state.settings.parentMode ? "关闭家长模式" : "打开家长模式";
  elements.parentModeBtn.classList.toggle("mode-active", state.settings.parentMode);
  elements.parentOnlySections.forEach((node) => {
    node.classList.toggle("is-hidden-by-mode", !state.settings.parentMode);
  });
}

function renderPinSettings() {
  elements.parentPin.value = "";
  elements.confirmParentPin.value = "";
  elements.pinStatus.textContent = state.settings.parentPin
    ? "已设置家长 PIN。PIN 只保存在当前浏览器。"
    : "还没有设置 PIN。建议家长先设置 4 位数字。";
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
  };
}

function toggleParentMode() {
  if (state.settings.parentMode) {
    state.settings.parentMode = false;
    sessionStorage.removeItem(PARENT_UNLOCK_KEY);
    saveState();
    render();
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
    ? "今天建议马上告诉家长，或者让老师帮你联系家长。"
    : "今天先正常记录就可以，如果越来越不舒服，再及时告诉家长。";
}

function shouldTellParent(log) {
  return (
    Number(log.painLevel) >= 7 ||
    log.bleeding === "重" ||
    (Array.isArray(log.alertFlags) && log.alertFlags.length > 0)
  );
}

function savePin(event) {
  event.preventDefault();
  const pin = normalizePin(elements.parentPin.value);
  const confirmPin = normalizePin(elements.confirmParentPin.value);

  if (!pin || pin.length !== 4) {
    elements.pinStatus.textContent = "PIN 需要是 4 位数字。";
    return;
  }
  if (pin !== confirmPin) {
    elements.pinStatus.textContent = "两次输入的 PIN 不一致。";
    return;
  }

  state.settings.parentPin = pin;
  saveState();
  renderPinSettings();
  elements.pinStatus.textContent = "家长 PIN 已保存。";
}

function clearPin() {
  state.settings.parentPin = "";
  state.settings.parentMode = false;
  sessionStorage.removeItem(PARENT_UNLOCK_KEY);
  saveState();
  render();
  elements.pinStatus.textContent = "家长 PIN 已清除。";
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
      elements.pinDialogStatus.textContent = "PIN 需要是 4 位数字。";
      return;
    }
    if (inputPin !== confirmPin) {
      elements.pinDialogStatus.textContent = "两次输入的 PIN 不一致。";
      return;
    }

    state.settings.parentPin = inputPin;
    state.settings.parentMode = true;
    sessionStorage.setItem(PARENT_UNLOCK_KEY, "1");
    saveState();
    render();
    elements.pinDialog.close();
    return;
  }

  if (inputPin !== state.settings.parentPin) {
    state.pinAttempts += 1;
    const remaining = Math.max(MAX_PIN_ATTEMPTS - state.pinAttempts, 0);
    elements.pinDialogStatus.textContent =
      remaining > 0 ? `PIN 不正确，请重试。还可以再试 ${remaining} 次。` : "PIN 连续输错太多次，请关闭后再试。";
    if (remaining === 0) {
      elements.pinDialog.close();
      state.pinAttempts = 0;
    }
    return;
  }

  state.pinAttempts = 0;
  state.settings.parentMode = true;
  sessionStorage.setItem(PARENT_UNLOCK_KEY, "1");
  saveState();
  render();
  elements.pinDialog.close();
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

function openPinDialog(mode) {
  state.pinDialogMode = mode;
  state.pinAttempts = 0;
  elements.pinDialogInput.value = "";
  elements.pinDialogConfirmInput.value = "";
  setPinInputsVisibility(false);
  elements.pinDialogConfirmWrap.classList.toggle("is-hidden", mode !== "setup");
  elements.pinDialogTitle.textContent = mode === "setup" ? "设置家长 PIN" : "输入家长 PIN";
  elements.pinDialogStatus.textContent =
    mode === "setup" ? "第一次使用家长模式，请先设置一个 4 位数字 PIN。" : "只有家长知道这个 PIN。";
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
  elements.pinDialogToggleVisibility.textContent = visible ? "隐藏 PIN" : "显示 PIN";
}

function normalizeNumberWithinRange(value, min, max) {
  const numeric = Number(value);
  if (!numeric) return "";
  if (numeric < min || numeric > max) return "";
  return String(Math.round(numeric));
}

function installApp() {
  if (!state.deferredInstallPrompt) return;
  state.deferredInstallPrompt.prompt();
  state.deferredInstallPrompt.userChoice.finally(() => {
    state.deferredInstallPrompt = null;
    elements.installBtn.classList.add("is-hidden");
  });
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
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${dateString}T00:00:00`));
}
