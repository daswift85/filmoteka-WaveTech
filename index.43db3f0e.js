function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"7FPDn":"index.43db3f0e.js","h68zw":"noPoster.968db72e.png"}'));var l;l=new URL(a("kyEFX").resolve("h68zw"),import.meta.url).toString();const o=document.querySelector(".js-gallery"),s=(document.querySelector(".search__form"),document.querySelector(".search__input")),i=document.querySelector(".search__submit-button");i.addEventListener("click",(async t=>{t.preventDefault();const r=s.value;if(r){o.innerHTML="";const t=await(async(e,t)=>{try{const r=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=492f9e953404699f8c7d096022fa41fa&query=${e}&page=${t}`);return(await r.json()).results}catch(e){return console.error("Error fetching movies:",e),[]}})(r,1);(t=>{o.innerHTML="",t.forEach((t=>{const r=t.genre_ids.map((e=>e.name)).join(", "),n=t.release_date?t.release_date.split("-")[0]:"",a=t.vote_average?t.vote_average.toFixed(1):"",s=t.poster_path?`https://image.tmdb.org/t/p/w500/${t.poster_path}`:e(l),i=`\n      <li class="gallery__item" data-movie="${t.id}">\n        <img\n          class="gallery__img"\n          src="${"https://image.tmdb.org/t/p/w500"+s}"\n          alt="${t.title||t.name}"\n          width\n          loading="lazy"\n        />\n        <div class="gallery__wrap">\n          <h2 class="gallery__title">${t.title||t.name}</h2>\n          <div class="gallery__info">\n            <p class="gallery__genre-text">${r}</p>\n            <span class="gallery__date"> | </span>\n            <p class="gallery__date">${n}</p>\n            <p class="gallery__rank">${a}</p>\n          </div>\n        </div>\n      </li>\n    `;o.innerHTML+=i}))})(t)}}));
//# sourceMappingURL=index.43db3f0e.js.map
