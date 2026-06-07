import"./main-CoepWk80.js";/* empty css                  */var e=[{num:`12`,label:`Занятий всего`},{num:`3`,label:`Предстоящих`},{num:`2`,label:`Репетитора`},{num:`4.9★`,label:`Средний балл`}],t=[{initials:`АК`,color:`background:#E6F1FB;color:#0C447C`,name:`Анна Краснова`,sub:`Математика · ЕГЭ · Онлайн`,time:`Завтра, 10:00`,status:`Скоро`,primary:!0},{initials:`МВ`,color:`background:#EAF3DE;color:#27500A`,name:`Михаил Волков`,sub:`Английский язык · Онлайн`,time:`Чт, 14:00`,status:`Через 3 дня`,primary:!1}],n=[{initials:`АК`,color:`background:#E6F1FB;color:#0C447C`,name:`Анна Краснова`,subj:`Математика`,rating:`4.9`,price:`от 1 200 ₽`},{initials:`МВ`,color:`background:#EAF3DE;color:#27500A`,name:`Михаил Волков`,subj:`Английский`,rating:`4.8`,price:`от 900 ₽`},{initials:`ЕС`,color:`background:#EEEDFE;color:#3C3489`,name:`Елена Соколова`,subj:`Физика`,rating:`5.0`,price:`от 800 ₽`}];new class{constructor(){this.renderStats(),this.renderLessons(),this.renderFavs()}renderStats(){let t=document.getElementById(`studentStats`);e.forEach(e=>{let n=document.createElement(`div`);n.className=`dashboard__stat`,n.innerHTML=`<div class="dashboard__stat-num">${e.num}</div><div class="dashboard__stat-label">${e.label}</div>`,t.appendChild(n)})}renderLessons(){let e=document.getElementById(`studentLessons`);t.forEach(t=>{let n=document.createElement(`div`);n.className=`dashboard__lesson`,n.innerHTML=`
        <div class="dashboard__lesson-avatar" style="${t.color}">${t.initials}</div>
        <div>
          <div class="dashboard__lesson-name">${t.name}</div>
          <div class="dashboard__lesson-sub">${t.sub}</div>
        </div>
        <div class="dashboard__lesson-time">
          <div>${t.time}</div>
          <div class="dashboard__lesson-status">${t.status}</div>
        </div>
        <button class="btn ${t.primary?`btn--primary`:`btn--outline`}" style="font-size:12px;padding:7px 14px;">
          ${t.primary?`Подключиться`:`Детали`}
        </button>`,e.appendChild(n)})}renderFavs(){let e=document.getElementById(`studentFavs`);n.forEach(t=>{let n=document.createElement(`div`);n.className=`dashboard__fav`,n.innerHTML=`
        <div class="dashboard__fav-top">
          <div class="dashboard__fav-avatar" style="${t.color}">${t.initials}</div>
          <div>
            <div class="dashboard__fav-name">${t.name}</div>
            <div class="dashboard__fav-subj">${t.subj}</div>
          </div>
        </div>
        <div class="dashboard__fav-meta">
          <span class="dashboard__fav-rating">★ ${t.rating}</span>
          <span class="dashboard__fav-price">${t.price}</span>
        </div>`,e.appendChild(n)})}};