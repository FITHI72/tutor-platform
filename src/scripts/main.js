
const tutors = [
  { id: 1, name: 'Анна Краснова', initials: 'АК', subject: 'Математика, ЕГЭ', subjects: ['Математика'], rating: 4.9, reviews: 86, price: 1200, exp: '5 лет опыта', badge: 'exp', color: 'blue' },
  { id: 2, name: 'Михаил Волков', initials: 'МВ', subject: 'Английский язык', subjects: ['Английский'], rating: 4.8, reviews: 54, price: 900, exp: '3 года опыта', badge: 'exp', color: 'green' },
  { id: 3, name: 'Елена Соколова', initials: 'ЕС', subject: 'Физика, ОГЭ', subjects: ['Физика'], rating: 5.0, reviews: 12, price: 800, exp: '1 год опыта', badge: 'new', color: 'purple' },
  { id: 4, name: 'Дмитрий Новиков', initials: 'ДН', subject: 'Программирование', subjects: ['Программирование'], rating: 4.7, reviews: 103, price: 1500, exp: '7 лет опыта', badge: 'exp', color: 'coral' },
];

const filtersList = ['Все предметы', 'Математика', 'Английский', 'Физика', 'Химия', 'Программирование', 'Русский язык'];

class TutorCard {
  constructor(tutor) { this.tutor = tutor; }
  render() {
    const { initials, name, subject, rating, reviews, price, exp, badge, color } = this.tutor;
    const badgeText = badge === 'new' ? 'Новый' : exp;
    const div = document.createElement('div');
    div.className = 'tutor-card';
    div.innerHTML = `
      <div class="tutor-card__avatar tutor-card__avatar--${color}">${initials}</div>
      <div class="tutor-card__badge tutor-card__badge--${badge}">${badgeText}</div>
      <div class="tutor-card__name">${name}</div>
      <div class="tutor-card__subject">${subject}</div>
      <div class="tutor-card__meta">
        <span class="tutor-card__rating">★ ${rating} (${reviews})</span>
        <span class="tutor-card__price">от ${price.toLocaleString()} ₽</span>
      </div>`;
    div.addEventListener('click', () => window.location.href = '/profile.html');
    return div;
  }
}

class FilterBar {
  constructor(filters, onFilter) {
    this.filters = filters;
    this.active = 'Все предметы';
    this.onFilter = onFilter;
  }
  render(container) {
    container.innerHTML = '';
    this.filters.forEach(f => {
      const btn = document.createElement('button');
      btn.className = 'filter-tag' + (f === this.active ? ' filter-tag--active' : '');
      btn.textContent = f;
      btn.addEventListener('click', () => {
        this.active = f;
        this.render(container);
        this.onFilter(f);
      });
      container.appendChild(btn);
    });
  }
}

const grid = document.getElementById('tutorsGrid');
const filtersContainer = document.getElementById('filters');

if (grid && filtersContainer) {
  function renderTutors(filter) {
    grid.innerHTML = '';
    const filtered = filter === 'Все предметы'
      ? tutors
      : tutors.filter(t => t.subjects.includes(filter));
    filtered.forEach(t => grid.appendChild(new TutorCard(t).render()));
  }
  const filterBar = new FilterBar(filtersList, renderTutors);
  filterBar.render(filtersContainer);
  renderTutors('Все предметы');
}