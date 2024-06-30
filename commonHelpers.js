import{a as L,i as u,S as m}from"./assets/vendor-53a1b719.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const v="44433569-eda6d7623baf54ab2611b04f8",w="https://pixabay.com/api/";async function y(s,t=1){try{return(await L.get(w,{params:{key:v,q:s,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}catch(r){return console.error("Ошибка получения данных:",r),[]}}function h(s){const t=document.querySelector("#gallery"),r=s.hits.map(i=>`
    <div class="photo-card">
      <a class="gallery-link" href="${i.largeImageURL}">
        <img src="${i.webformatURL}" alt="${i.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>${i.likes}</b> likes
        </p>
        <p class="info-item">
          <b>${i.views}</b> views
        </p>
        <p class="info-item">
          <b>${i.comments}</b> comments
        </p>
        <p class="info-item">
          <b>${i.downloads}</b> downloads
        </p>
      </div>
    </div>
  `).join("");t.insertAdjacentHTML("beforeend",r)}const S=document.querySelector("#search-form");document.querySelector(".form-button");const a=document.querySelector(".next-button"),q=document.querySelector("#gallery"),l=document.querySelector("#loading");l.style.display="none";let c=null,n=1,d=0,f="";function g(){u.info({title:"Не знайдено зображень!",message:"На жаль, немає зображень, що відповідають вашому пошуковому запиту. Спробуйте ще раз!"}),n=1,a.classList.add("hidden")}function b(s){l.style.display="none",s.response&&s.response.status===404?g():u.error({title:"Помилка!",message:"Виникла помилка під час отримання даних. Перевірте своє підключення до інтернету або спробуйте пізніше."}),a.classList.add("hidden")}S.addEventListener("submit",s=>{s.preventDefault();const t=document.querySelector("#search-input").value.trim();if(t===""){u.warning({title:"Введіть запит!",message:"Будь ласка, введіть пошуковий запит"});return}q.innerHTML="",n=1,f=t,a.classList.remove("hidden"),console.log(n),l.classList.remove("hidden"),l.style.display="block",y(f,n).then(r=>{if(d=r.totalHits,r.hits.length===0){g();return}h(r),c?c.refresh():c=new m(".gallery-link",{captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),d>(n-1)*15?a.classList.remove("hidden"):a.classList.add("hidden")}).then(()=>{l.style.display="none"}).catch(b)});a.addEventListener("click",s=>{s.preventDefault(),n=n+1,console.log(n),l.classList.remove("hidden"),l.style.display="block",y(f,n).then(t=>{if(t.hits.length===0){d=(n-1)*15,u.info({title:"Більше зображень немає!",message:"Ви досягли кінця результатів пошуку."}),a.classList.add("hidden");return}h(t),c?c.refresh():c=new m(".gallery-link",{captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),d>(n-1)*15?a.classList.remove("hidden"):a.classList.add("hidden")}).then(()=>{l.style.display="none"}).catch(b)});
//# sourceMappingURL=commonHelpers.js.map
