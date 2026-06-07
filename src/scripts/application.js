const times = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'];
const days = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
const selectedSlots = new Set();

class ApplicationPage {
  constructor() {
    this.initOptions('subjectOptions');
    this.initOptions('levelOptions');
    this.initOptions('ageOptions');
    this.initFormats();
    this.initTimetable();
    this.initSubmit();
  }

  initOptions(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.querySelectorAll('.app-form__option').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.app-form__option').forEach(b => b.classList.remove('app-form__option--active'));
        btn.classList.add('app-form__option--active');
      });
    });
  }

  initFormats() {
    const container = document.getElementById('formatOptions');
    container.querySelectorAll('.app-form__format').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.app-form__format').forEach(b => b.classList.remove('app-form__format--active'));
        btn.classList.add('app-form__format--active');
      });
    });
  }

  initTimetable() {
    const tbody = document.getElementById('timetableBody');
    times.forEach((time, ti) => {
      const tr = document.createElement('tr');

      const timeTd = document.createElement('td');
      timeTd.className = 'time-label';
      timeTd.textContent = time;
      tr.appendChild(timeTd);

      days.forEach((_, di) => {
        const td = document.createElement('td');
        const key = `${di}-${ti}`;

        const btn = document.createElement('button');
        btn.className = 'time-slot';
        btn.innerHTML = '<span class="time-slot__check"></span>';

        btn.addEventListener('click', () => {
          if (selectedSlots.has(key)) {
            selectedSlots.delete(key);
            btn.classList.remove('time-slot--selected');
          } else {
            selectedSlots.add(key);
            btn.classList.add('time-slot--selected');
          }
        });

        td.appendChild(btn);
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  }

  initSubmit() {
    document.getElementById('submitBtn').addEventListener('click', () => {
      alert('Заявка отправлена! Репетиторы скоро откликнутся.');
      // ✅ Исправленный путь
      window.location.href = 'dashboard-student.html';
    });
  }
}

new ApplicationPage();