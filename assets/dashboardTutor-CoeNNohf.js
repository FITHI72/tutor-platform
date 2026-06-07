import"./modulepreload-polyfill-DfS4ul37.js";/* empty css             *//* empty css                  */var e=[{num:`230`,label:`Учеников всего`},{num:`4`,label:`Новых заявок`},{num:`38 400 ₽`,label:`Заработано в мае`,green:!0},{num:`4.9★`,label:`Рейтинг`}],t=[{name:`Иван Петров`,time:`5 мин назад`,sub:`Математика · ЕГЭ · Онлайн · Пн 10:00`},{name:`Мария Смирнова`,time:`1 ч назад`,sub:`Алгебра · Школьная программа · Офлайн · Ср 15:00`},{name:`Алексей Громов`,time:`3 ч назад`,sub:`Математика · ОГЭ · Онлайн · Пробное занятие`}],n=[{time:`10:00 – 10:45`,initials:`ИП`,name:`Иван Петров`,subj:`Математика · ЕГЭ`},{time:`13:00 – 13:45`,initials:`МС`,name:`Мария Соколова`,subj:`Алгебра · 9 класс`},{time:`16:00 – 16:45`,initials:`АГ`,name:`Артём Громов`,subj:`Математика · ОГЭ`}],r=[{num:`38 400 ₽`,label:`Май 2026`,diff:`↑ +12% к апрелю`},{num:`34 200 ₽`,label:`Апрель 2026`,diff:``},{num:`192 000 ₽`,label:`За всё время`,diff:``}];new class{constructor(){this.renderStats(),this.renderRequests(),this.renderSchedule(),this.renderEarnings()}renderStats(){let t=document.getElementById(`tutorStats`);e.forEach(e=>{let n=document.createElement(`div`);n.className=`dashboard__stat`,n.innerHTML=`
        <div class="dashboard__stat-num ${e.green?`dashboard__stat-num--green`:``}">${e.num}</div>
        <div class="dashboard__stat-label">${e.label}</div>`,t.appendChild(n)})}renderRequests(){let e=document.getElementById(`tutorRequests`);t.forEach(t=>{let n=document.createElement(`div`);n.className=`dashboard__request`,n.innerHTML=`
        <div class="dashboard__request-top">
          <span class="dashboard__request-name">${t.name}</span>
          <span class="dashboard__request-time">${t.time}</span>
        </div>
        <div class="dashboard__request-sub">${t.sub}</div>
        <div class="dashboard__request-actions">
          <button class="btn--accept">Принять</button>
          <button class="btn--decline">Отклонить</button>
        </div>`,e.appendChild(n)})}renderSchedule(){let e=document.getElementById(`tutorSchedule`);n.forEach(t=>{let n=document.createElement(`div`);n.className=`dashboard__sched-row`,n.innerHTML=`
        <div class="dashboard__sched-time">${t.time}</div>
        <div class="dashboard__sched-avatar">${t.initials}</div>
        <div>
          <div class="dashboard__sched-name">${t.name}</div>
          <div class="dashboard__sched-subj">${t.subj}</div>
        </div>
        <button class="dashboard__sched-btn">Войти</button>`,e.appendChild(n)})}renderEarnings(){let e=document.getElementById(`tutorEarnings`);r.forEach(t=>{let n=document.createElement(`div`);n.className=`dashboard__earn`,n.innerHTML=`
        <div class="dashboard__earn-num">${t.num}</div>
        <div class="dashboard__earn-label">${t.label}</div>
        ${t.diff?`<div class="dashboard__earn-diff">${t.diff}</div>`:``}`,e.appendChild(n)})}};