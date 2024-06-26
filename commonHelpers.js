import{a as b,i as p,S as y}from"./assets/vendor-53a1b719.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const L="44433569-eda6d7623baf54ab2611b04f8",v="https://pixabay.com/api/";async function m(s,t=1){try{return(await b.get(v,{params:{key:L,q:s,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}catch(n){return console.error("Ошибка получения данных:",n),[]}}function h(s){const t=document.querySelector("#gallery"),n=s.hits.map(r=>`
    <div class="photo-card">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>${r.likes}</b> likes
        </p>
        <p class="info-item">
          <b>${r.views}</b> views
        </p>
        <p class="info-item">
          <b>${r.comments}</b> comments
        </p>
        <p class="info-item">
          <b>${r.downloads}</b> downloads
        </p>
      </div>
    </div>
  `).join("");t.insertAdjacentHTML("beforeend",n)}const w=document.querySelector("#search-form");document.querySelector(".form-button");const l=document.querySelector(".next-button"),S=document.querySelector("#gallery"),a=document.querySelector("#loading");a.style.display="none";let c=null,i=1,u="";function f(){p.info({title:"Не знайдено зображень!",message:"На жаль, немає зображень, що відповідають вашому пошуковому запиту. Спробуйте ще раз!"}),i=1,l.classList.add("hidden")}function g(s){a.style.display="none",s.response&&s.response.status===404?f():p.error({title:"Помилка!",message:"Виникла помилка під час отримання даних. Перевірте своє підключення до інтернету або спробуйте пізніше."})}w.addEventListener("submit",s=>{s.preventDefault();const t=document.querySelector("#search-input").value.trim();if(t===""){p.warning({title:"Введіть запит!",message:"Будь ласка, введіть пошуковий запит"});return}S.innerHTML="",i=1,u=t,l.classList.remove("hidden"),console.log(i),a.classList.remove("hidden"),a.style.display="block",m(u,i).then(n=>{if(n.hits.length===0){f();return}h(n),c?c.refresh():c=new y(".gallery-link",{captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),n.totalHits>i*15?l.classList.remove("hidden"):l.classList.add("hidden")}).then(()=>{a.style.display="none"}).catch(g)});l.addEventListener("click",s=>{s.preventDefault(),i=i+1,console.log(i),a.classList.remove("hidden"),a.style.display="block",m(u,i).then(t=>{if(t.hits.length===0){f();return}h(t),c?c.refresh():c=new y(".gallery-link",{captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),t.totalHits>i*15?l.classList.remove("hidden"):l.classList.add("hidden")}).then(()=>{a.style.display="none"}).catch(g)});
//# sourceMappingURL=commonHelpers.js.map
