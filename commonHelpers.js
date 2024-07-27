import{i}from"./assets/vendor-11dfc728.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l="44900645-90bb6bb627b06b4b3923afb1e";async function u(n){const o=`https://pixabay.com/api/?key=${l}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;try{const s=await fetch(o);if(!s.ok)throw new Error("Network error.");return(await s.json()).hits}catch(s){return console.error("Error fetching images:",s),[]}}function f(n){const o=document.querySelector(".gallery");o.innerHTML=n.map(r=>`
    <a href="${r.largeImageURL}" class="gallery-item">
      <img src="${r.webformatURL}" alt="${r.tags}" />
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </a>
  `).join(""),new SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const d=document.querySelector("#search-form"),y=document.querySelector("#search-input"),c=document.querySelector(".loader"),p=document.querySelector(".gallery");d.addEventListener("submit",async n=>{n.preventDefault();const o=y.value.trim();if(o===""){i.error({title:"Error",message:"Search query cannot be empty"});return}c.style.display="block",p.innerHTML="";const s=await u(o);c.style.display="none",s.length===0?i.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):f(s)});
//# sourceMappingURL=commonHelpers.js.map
