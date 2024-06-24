import{a as h,i as p,S as f}from"./assets/vendor-53a1b719.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const g="44433569-eda6d7623baf54ab2611b04f8",b="https://pixabay.com/api/";async function y(a,e=1){try{return(await h.get(b,{params:{key:g,q:a,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}catch(s){return console.error("Ошибка получения данных:",s),[]}}function m(a){const e=document.querySelector("#gallery"),s=a.hits.map(r=>`
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
  `).join("");e.insertAdjacentHTML("beforeend",s)}const L=document.querySelector("#search-form");document.querySelector(".form-button");const l=document.querySelector(".next-button"),v=document.querySelector("#gallery"),i=document.querySelector("#loading");i.style.display="none";let c=null,n=1,u="";L.addEventListener("submit",a=>{a.preventDefault();const e=document.querySelector("#search-input").value.trim();if(e===""){p.warning({title:"Введіть запит!",message:"Будь ласка, введіть пошуковий запит"});return}v.innerHTML="",n=1,u=e,l.classList.remove("hidden"),console.log(n),i.classList.remove("hidden"),i.style.display="block",y(u,n).then(s=>{m(s),c?c.refresh():c=new f(".gallery-link",{captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),s.totalHits>n*15?l.classList.remove("hidden"):l.classList.add("hidden")}).then(()=>{i.style.display="none"}).catch(s=>{i.style.display="none",p.error({title:"Помилка!",message:s.message})})});l.addEventListener("click",a=>{a.preventDefault(),n=n+1,console.log(n),i.classList.remove("hidden"),i.style.display="block",y(u,n).then(e=>{m(e),c?c.refresh():c=new f(".gallery-link",{captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),e.totalHits>n*15?l.classList.remove("hidden"):l.classList.add("hidden")}).then(()=>{i.style.display="none"}).catch(e=>{i.style.display="none",p.error({title:"Помилка!",message:e.message})})});
//# sourceMappingURL=commonHelpers.js.map
