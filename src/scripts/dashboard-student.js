
const stats = [
  { num: '12', label: 'Занятий всего' },
  { num: '3', label: 'Предстоящих' },
  { num: '2', label: 'Репетитора' },
  { num: '4.9★', label: 'Средний балл' },
];

const lessons = [
  { initials: 'АК', color: 'background:#E6F1FB;color:#0C447C', name: 'Анна Краснова', sub: 'Математика · ЕГЭ · Онлайн', time: 'Завтра, 10:00', status: 'Скоро', primary: true },
  { initials: 'МВ', color: 'background:#EAF3DE;color:#27500A', name: 'Михаил Волков', sub: 'Английский язык · Онлайн', time: 'Чт, 14:00', status: 'Через 3 дня', primary: false },
];

const favs = [
  { initials: 'АК', color: 'background:#E6F1FB;color:#0C447C', name: 'Анна Краснова', subj: 'Математика', rating: '4.9', price: 'от 1 200 ₽' },
  { initials: 'МВ', color: 'background:#EAF3DE;color:#27500A', name: 'Михаил Волков', subj: 'Английский', rating: '4.8', price: 'от 900 ₽' },
  { initials: 'ЕС', color: 'background:#EEEDFE;color:#3C3489', name: 'Елена Соколова', subj: 'Физика', rating: '5.0', price: 'от 800 ₽' },
];

class StudentDashboard {
  constructor() {
    this.renderStats();
    this.renderLessons();
    this.renderFavs();
  }

  renderStats() {
    const container = document.getElementById('studentStats');
    stats.forEach(s => {
      const div = document.createElement('div');
      div.className = 'dashboard__stat';
      div.innerHTML = `<div class="dashboard__stat-num">${s.num}</div><div class="dashboard__stat-label">${s.label}</div>`;
      container.appendChild(div);
    });
  }

  renderLessons() {
    const container = document.getElementById('studentLessons');
    lessons.forEach(l => {
      const div = document.createElement('div');
      div.className = 'dashboard__lesson';
      div.innerHTML = `
        <div class="dashboard__lesson-avatar" style="${l.color}">${l.initials}</div>
        <div>
          <div class="dashboard__lesson-name">${l.name}</div>
          <div class="dashboard__lesson-sub">${l.sub}</div>
        </div>
        <div class="dashboard__lesson-time">
          <div>${l.time}</div>
          <div class="dashboard__lesson-status">${l.status}</div>
        </div>
        <button class="btn ${l.primary ? 'btn--primary' : 'btn--outline'}" style="font-size:12px;padding:7px 14px;">
          ${l.primary ? 'Подключиться' : 'Детали'}
        </button>`;
      container.appendChild(div);
    });
  }

  renderFavs() {
    const container = document.getElementById('studentFavs');
    favs.forEach(f => {
      const div = document.createElement('div');
      div.className = 'dashboard__fav';
      div.innerHTML = `
        <div class="dashboard__fav-top">
          <div class="dashboard__fav-avatar" style="${f.color}">${f.initials}</div>
          <div>
            <div class="dashboard__fav-name">${f.name}</div>
            <div class="dashboard__fav-subj">${f.subj}</div>
          </div>
        </div>
        <div class="dashboard__fav-meta">
          <span class="dashboard__fav-rating">★ ${f.rating}</span>
          <span class="dashboard__fav-price">${f.price}</span>
        </div>`;
      container.appendChild(div);
    });
  }
}

new StudentDashboard();