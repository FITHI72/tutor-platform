const fallbackTutor = {
  name: 'Анна Краснова',
  initials: 'АК',
  photo: null,
  subject: 'Математика',
  subjectLine: 'Математика · ЕГЭ · ОГЭ',
  city: 'Москва',
  rating: '4.9',
  reviews: 86,
  exp: '5 лет опыта',
  price: 1200,
  tags: ['ЕГЭ', 'ОГЭ', 'Алгебра', 'Геометрия', 'Высшая математика'],
};

const reviews = [
  { name: 'Иван П.', rating: '★★★★★ 5.0', text: 'Отличный преподаватель! Благодаря занятиям сдал ЕГЭ на 89 баллов.', date: '15 апреля 2025' },
  { name: 'Мария К.', rating: '★★★★★ 5.0', text: 'Занимаемся уже 8 месяцев. Очень терпеливый педагог, находит индивидуальный подход.', date: '2 марта 2025' },
  { name: 'Алексей С.', rating: '★★★★☆ 4.0', text: 'Хороший репетитор, занятия структурированные. Результат виден.', date: '18 января 2025' },
];

class ProfilePage {
  constructor() {
    const saved = localStorage.getItem('selectedTutor');
    this.tutor = saved ? JSON.parse(saved) : fallbackTutor;
    this.render();
  }

  render() {
    const t = this.tutor;

    // Аватар / фото
    const avatarEl = document.getElementById('profileAvatar');
    if (t.photo) {
      avatarEl.innerHTML = `<img src="${t.photo}" alt="${t.name}"
        style="width:100%;height:100%;border-radius:50%;object-fit:cover;"
        onerror="this.parentElement.textContent='${t.initials}'">`;
    } else {
      avatarEl.textContent = t.initials || '??';
    }

    // Основная инфо
    document.getElementById('profileName').textContent = t.name;
    document.getElementById('profileSubject').textContent = t.subjectLine || t.subject;
    document.getElementById('profileRating').textContent = `${t.rating} (${t.reviews} отзывов)`;
    document.getElementById('profileExp').textContent = t.exp;
    document.getElementById('profileCity').textContent = t.city || 'Россия';
    document.getElementById('profilePrice').textContent = `от ${Number(t.price).toLocaleString()} ₽`;
    document.getElementById('profileAbout').textContent =
      `Опытный преподаватель по предмету "${t.subject}". Провожу занятия онлайн и офлайн, индивидуальный подход к каждому ученику. Помогаю достигать реальных результатов в короткие сроки.`;

    // Статистика
    document.getElementById('statReviews').textContent = t.reviews;
    document.getElementById('statStudents').textContent = Math.floor(t.reviews * 2.5);
    document.getElementById('statRating').textContent = t.rating + '★';

    // Теги
    const tagsEl = document.getElementById('profileTags');
    const tagsData = t.tags || fallbackTutor.tags;
    tagsEl.innerHTML = tagsData.map(tag => `<span class="filter-tag">${tag}</span>`).join('');

    // Отзывы
    const reviewsEl = document.getElementById('reviews');
    reviewsEl.innerHTML = '';
    reviews.forEach(r => {
      const div = document.createElement('div');
      div.className = 'review';
      div.innerHTML = `
        <div class="review__top">
          <span class="review__name">${r.name}</span>
          <span class="review__rating">${r.rating}</span>
        </div>
        <div class="review__text">${r.text}</div>
        <div class="review__date">${r.date}</div>`;
      reviewsEl.appendChild(div);
    });
  }
}

new ProfilePage();