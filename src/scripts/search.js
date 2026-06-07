const subjects = ['Математика', 'Английский язык', 'Физика', 'Химия', 'Программирование', 'Русский язык'];

const tags = {
  'Математика': ['ЕГЭ', 'ОГЭ', 'Алгебра', 'Геометрия'],
  'Английский язык': ['IELTS', 'Разговорный', 'Грамматика'],
  'Физика': ['ОГЭ', 'ЕГЭ', 'Олимпиады'],
  'Химия': ['ЕГЭ', 'Органическая химия'],
  'Программирование': ['Python', 'JavaScript', 'С нуля'],
  'Русский язык': ['ЕГЭ', 'Сочинение', 'Грамматика'],
};

const formats = ['Онлайн', 'Офлайн', 'Онлайн и офлайн'];

// ===== КЛАСС ДЛЯ РАБОТЫ С API =====
class ApiService {
  static async fetchTutors(count = 12) {
    const response = await fetch(
      `https://randomuser.me/api/?results=${count}&nat=ru&inc=name,picture,location`
    );
    const data = await response.json();
    return data.results.map((user, index) => {
      const subject = subjects[index % subjects.length];
      return {
        id: index + 1,
        name: `${user.name.last} ${user.name.first}`,
        initials: `${user.name.last[0]}${user.name.first[0]}`,
        photo: user.picture.medium,
        city: user.location.city,
        subject,
        subjectLine: `${subject} · ${tags[subject].slice(0, 2).join(' · ')}`,
        desc: `Опытный преподаватель по предмету "${subject}". Провожу занятия онлайн и офлайн, индивидуальный подход к каждому ученику.`,
        tags: [formats[index % formats.length], ...tags[subject].slice(0, 2)],
        rating: (4.5 + Math.random() * 0.5).toFixed(1),
        reviews: Math.floor(10 + Math.random() * 100),
        exp: `${Math.floor(1 + Math.random() * 8)} лет опыта`,
        expYears: Math.floor(1 + Math.random() * 8),
        price: Math.floor(700 + Math.random() * 1300),
      };
    });
  }
}

// ===== КЛАСС КАРТОЧКИ РЕПЕТИТОРА В СПИСКЕ =====
class TutorRow {
  constructor(tutor) { this.tutor = tutor; }

render() {
  const { photo, initials, name, subjectLine, desc, tags, rating, reviews, exp, price } = this.tutor;
  const div = document.createElement('div');
  div.className = 'tutor-row';
  div.innerHTML = `
    <div class="tutor-row__avatar-wrap">
      <img class="tutor-row__photo" src="${photo}" alt="${name}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="tutor-row__avatar-fallback">${initials}</div>
    </div>
    <div class="tutor-row__info">
      <div class="tutor-row__top">
        <div>
          <div class="tutor-row__name">${name}</div>
          <div class="tutor-row__subject">${subjectLine}</div>
        </div>
        <div class="tutor-row__price">от ${price.toLocaleString()} ₽/ч</div>
      </div>
      <div class="tutor-row__desc">${desc}</div>
      <div class="tutor-row__tags">
        ${tags.map(t => `<span class="tutor-row__tag">${t}</span>`).join('')}
      </div>
      <div class="tutor-row__bottom">
        <div>
          <span class="tutor-row__rating">★ ${rating} (${reviews} отзывов)</span>
          <span class="tutor-row__exp"> · ${exp}</span>
        </div>
        <div class="tutor-row__actions">
          <button class="btn btn--outline btn--sm" data-action="profile">Профиль</button>
          <button class="btn btn--primary btn--sm" data-action="apply">Записаться</button>
        </div>
      </div>
    </div>`;

  div.querySelector('[data-action="profile"]').addEventListener('click', () => {
    localStorage.setItem('selectedTutor', JSON.stringify(this.tutor));
    window.location.href = '/profile.html';
  });

  div.querySelector('[data-action="apply"]').addEventListener('click', () => {
    localStorage.setItem('selectedTutor', JSON.stringify(this.tutor));
    window.location.href = '/application.html';
  });

  return div;
}
}

// ===== КЛАСС СТРАНИЦЫ ПОИСКА =====
class SearchPage {
  constructor() {
    this.tutors = [];
    this.list = document.getElementById('tutorsList');
    this.input = document.getElementById('searchInput');
    this.sort = document.getElementById('sortSelect');
    this.count = document.getElementById('resultsCount');
    this.loading = document.getElementById('loadingState');
    this.init();
  }

  async init() {
    this.showLoading(true);
    try {
      this.tutors = await ApiService.fetchTutors(12);
      this.render(this.tutors);
      this.input.addEventListener('input', () => this.update());
      this.sort.addEventListener('change', () => this.update());
    } catch (e) {
      this.list.innerHTML = `
        <div class="search-error">
          Не удалось загрузить репетиторов. Попробуйте обновить страницу.
        </div>`;
    } finally {
      this.showLoading(false);
    }
  }

  showLoading(state) {
    if (this.loading) this.loading.style.display = state ? 'flex' : 'none';
  }

  update() {
    const q = this.input.value.toLowerCase();
    let filtered = this.tutors.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.subject.toLowerCase().includes(q)
    );
    const s = this.sort.value;
    if (s === 'price_asc') filtered.sort((a, b) => a.price - b.price);
    else if (s === 'price_desc') filtered.sort((a, b) => b.price - a.price);
    else if (s === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (s === 'exp') filtered.sort((a, b) => b.expYears - a.expYears);
    this.render(filtered);
  }

  render(list) {
    this.list.innerHTML = '';
    this.count.innerHTML = `Найдено <strong>${list.length} репетитора</strong>`;
    list.forEach(t => this.list.appendChild(new TutorRow(t).render()));
  }
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
if (document.getElementById('tutorsList')) {
  new SearchPage();
}