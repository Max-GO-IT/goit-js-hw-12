import{a as h,i as p,S as f}from"./assets/vendor-53a1b719.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const g="44433569-eda6d7623baf54ab2611b04f8",b="https://pixabay.com/api/";async function y(a,e=1){try{return(await h.get(b,{params:{key:g,q:a,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}catch(o){return console.error("Ошибка получения данных:",o),[]}}function m(a){const e=document.querySelector("#gallery"),o=a.hits.map(r=>`
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
  `).join("");e.insertAdjacentHTML("beforeend",o)}const L=document.querySelector("#search-form");document.querySelector(".form-button");const c=document.querySelector(".next-button"),v=document.querySelector("#gallery"),i=document.querySelector("#loading");i.style.display="none";let l=null,n=1,u="";L.addEventListener("submit",a=>{a.preventDefault();const e=document.querySelector("#search-input").value.trim();if(e===""){p.warning({title:"Введіть запит!",message:"Будь ласка, введіть пошуковий запит"});return}v.innerHTML="",n=1,u=e,console.log(n),i.classList.remove("hidden"),i.style.display="block",y(u,n).then(o=>{m(o),l?l.refresh():l=new f(".gallery-link",{captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),o.totalHits>n*15?c.classList.remove("hidden"):c.classList.add("hidden")}).then(()=>{i.style.display="none"}).catch(o=>{i.style.display="none",p.error({title:"Помилка!",message:o.message})})});c.addEventListener("click",a=>{a.preventDefault(),n=n+1,console.log(n),i.classList.remove("hidden"),i.style.display="block",y(u,n).then(e=>{m(e),l?l.refresh():l=new f(".gallery-link",{captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),e.totalHits>n*15?c.classList.remove("hidden"):c.classList.add("hidden")}).then(()=>{i.style.display="none"}).catch(e=>{i.style.display="none",p.error({title:"Помилка!",message:e.message})})});
//# sourceMappingURL=commonHelpers.js.map
