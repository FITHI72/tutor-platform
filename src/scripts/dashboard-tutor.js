
const stats = [
  { num: '230', label: 'Учеников всего' },
  { num: '4', label: 'Новых заявок' },
  { num: '38 400 ₽', label: 'Заработано в мае', green: true },
  { num: '4.9★', label: 'Рейтинг' },
];

const requests = [
  { name: 'Иван Петров', time: '5 мин назад', sub: 'Математика · ЕГЭ · Онлайн · Пн 10:00' },
  { name: 'Мария Смирнова', time: '1 ч назад', sub: 'Алгебра · Школьная программа · Офлайн · Ср 15:00' },
  { name: 'Алексей Громов', time: '3 ч назад', sub: 'Математика · ОГЭ · Онлайн · Пробное занятие' },
];

const schedule = [
  { time: '10:00 – 10:45', initials: 'ИП', name: 'Иван Петров', subj: 'Математика · ЕГЭ' },
  { time: '13:00 – 13:45', initials: 'МС', name: 'Мария Соколова', subj: 'Алгебра · 9 класс' },
  { time: '16:00 – 16:45', initials: 'АГ', name: 'Артём Громов', subj: 'Математика · ОГЭ' },
];

const earnings = [
  { num: '38 400 ₽', label: 'Май 2026', diff: '↑ +12% к апрелю' },
  { num: '34 200 ₽', label: 'Апрель 2026', diff: '' },
  { num: '192 000 ₽', label: 'За всё время', diff: '' },
];

class TutorDashboard {
  constructor() {
    this.renderStats();
    this.renderRequests();
    this.renderSchedule();
    this.renderEarnings();
  }

  renderStats() {
    const container = document.getElementById('tutorStats');
    stats.forEach(s => {
      const div = document.createElement('div');
      div.className = 'dashboard__stat';
      div.innerHTML = `
        <div class="dashboard__stat-num ${s.green ? 'dashboard__stat-num--green' : ''}">${s.num}</div>
        <div class="dashboard__stat-label">${s.label}</div>`;
      container.appendChild(div);
    });
  }

  renderRequests() {
    const container = document.getElementById('tutorRequests');
    requests.forEach(r => {
      const div = document.createElement('div');
      div.className = 'dashboard__request';
      div.innerHTML = `
        <div class="dashboard__request-top">
          <span class="dashboard__request-name">${r.name}</span>
          <span class="dashboard__request-time">${r.time}</span>
        </div>
        <div class="dashboard__request-sub">${r.sub}</div>
        <div class="dashboard__request-actions">
          <button class="btn--accept">Принять</button>
          <button class="btn--decline">Отклонить</button>
        </div>`;
      container.appendChild(div);
    });
  }

  renderSchedule() {
    const container = document.getElementById('tutorSchedule');
    schedule.forEach(s => {
      const div = document.createElement('div');
      div.className = 'dashboard__sched-row';
      div.innerHTML = `
        <div class="dashboard__sched-time">${s.time}</div>
        <div class="dashboard__sched-avatar">${s.initials}</div>
        <div>
          <div class="dashboard__sched-name">${s.name}</div>
          <div class="dashboard__sched-subj">${s.subj}</div>
        </div>
        <button class="dashboard__sched-btn">Войти</button>`;
      container.appendChild(div);
    });
  }

  renderEarnings() {
    const container = document.getElementById('tutorEarnings');
    earnings.forEach(e => {
      const div = document.createElement('div');
      div.className = 'dashboard__earn';
      div.innerHTML = `
        <div class="dashboard__earn-num">${e.num}</div>
        <div class="dashboard__earn-label">${e.label}</div>
        ${e.diff ? `<div class="dashboard__earn-diff">${e.diff}</div>` : ''}`;
      container.appendChild(div);
    });
  }
}

new TutorDashboard();