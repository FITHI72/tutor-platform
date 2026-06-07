import"./modulepreload-polyfill-DfS4ul37.js";/* empty css             */var e=[`Математика`,`Английский язык`,`Физика`,`Химия`,`Программирование`,`Русский язык`],t={Математика:[`ЕГЭ`,`ОГЭ`,`Алгебра`,`Геометрия`],"Английский язык":[`IELTS`,`Разговорный`,`Грамматика`],Физика:[`ОГЭ`,`ЕГЭ`,`Олимпиады`],Химия:[`ЕГЭ`,`Органическая химия`],Программирование:[`Python`,`JavaScript`,`С нуля`],"Русский язык":[`ЕГЭ`,`Сочинение`,`Грамматика`]},n=[`Онлайн`,`Офлайн`,`Онлайн и офлайн`],r=class{static async fetchTutors(r=12){return(await(await fetch(`https://randomuser.me/api/?results=${r}&nat=ru&inc=name,picture,location`)).json()).results.map((r,i)=>{let a=e[i%e.length];return{id:i+1,name:`${r.name.last} ${r.name.first}`,initials:`${r.name.last[0]}${r.name.first[0]}`,photo:r.picture.medium,city:r.location.city,subject:a,subjectLine:`${a} · ${t[a].slice(0,2).join(` · `)}`,desc:`Опытный преподаватель по предмету "${a}". Провожу занятия онлайн и офлайн, индивидуальный подход к каждому ученику.`,tags:[n[i%n.length],...t[a].slice(0,2)],rating:(4.5+Math.random()*.5).toFixed(1),reviews:Math.floor(10+Math.random()*100),exp:`${Math.floor(1+Math.random()*8)} лет опыта`,expYears:Math.floor(1+Math.random()*8),price:Math.floor(700+Math.random()*1300)}})}},i=class{constructor(e){this.tutor=e}render(){let{photo:e,initials:t,name:n,subjectLine:r,desc:i,tags:a,rating:o,reviews:s,exp:c,price:l}=this.tutor,u=document.createElement(`div`);return u.className=`tutor-row`,u.innerHTML=`
    <div class="tutor-row__avatar-wrap">
      <img class="tutor-row__photo" src="${e}" alt="${n}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="tutor-row__avatar-fallback">${t}</div>
    </div>
    <div class="tutor-row__info">
      <div class="tutor-row__top">
        <div>
          <div class="tutor-row__name">${n}</div>
          <div class="tutor-row__subject">${r}</div>
        </div>
        <div class="tutor-row__price">от ${l.toLocaleString()} ₽/ч</div>
      </div>
      <div class="tutor-row__desc">${i}</div>
      <div class="tutor-row__tags">
        ${a.map(e=>`<span class="tutor-row__tag">${e}</span>`).join(``)}
      </div>
      <div class="tutor-row__bottom">
        <div>
          <span class="tutor-row__rating">★ ${o} (${s} отзывов)</span>
          <span class="tutor-row__exp"> · ${c}</span>
        </div>
        <div class="tutor-row__actions">
          <button class="btn btn--outline btn--sm" data-action="profile">Профиль</button>
          <button class="btn btn--primary btn--sm" data-action="apply">Записаться</button>
        </div>
      </div>
    </div>`,u.querySelector(`[data-action="profile"]`).addEventListener(`click`,()=>{localStorage.setItem(`selectedTutor`,JSON.stringify(this.tutor)),window.location.href=`/tutor-platform/profile.html`}),u.querySelector(`[data-action="apply"]`).addEventListener(`click`,()=>{localStorage.setItem(`selectedTutor`,JSON.stringify(this.tutor)),window.location.href=`/tutor-platform/application.html`}),u}},a=class{constructor(){this.tutors=[],this.list=document.getElementById(`tutorsList`),this.input=document.getElementById(`searchInput`),this.sort=document.getElementById(`sortSelect`),this.count=document.getElementById(`resultsCount`),this.loading=document.getElementById(`loadingState`),this.init()}async init(){this.showLoading(!0);try{this.tutors=await r.fetchTutors(12),this.render(this.tutors),this.input.addEventListener(`input`,()=>this.update()),this.sort.addEventListener(`change`,()=>this.update())}catch{this.list.innerHTML=`
        <div class="search-error">
          Не удалось загрузить репетиторов. Попробуйте обновить страницу.
        </div>`}finally{this.showLoading(!1)}}showLoading(e){this.loading&&(this.loading.style.display=e?`flex`:`none`)}update(){let e=this.input.value.toLowerCase(),t=this.tutors.filter(t=>t.name.toLowerCase().includes(e)||t.subject.toLowerCase().includes(e)),n=this.sort.value;n===`price_asc`?t.sort((e,t)=>e.price-t.price):n===`price_desc`?t.sort((e,t)=>t.price-e.price):n===`rating`?t.sort((e,t)=>t.rating-e.rating):n===`exp`&&t.sort((e,t)=>t.expYears-e.expYears),this.render(t)}render(e){this.list.innerHTML=``,this.count.innerHTML=`Найдено <strong>${e.length} репетитора</strong>`,e.forEach(e=>this.list.appendChild(new i(e).render()))}};document.getElementById(`tutorsList`)&&new a;