function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i("2sH7u"),i("2vqxs"),i("7dZ3a"),i("g9mVg"),i("kQuyY"),i("k8mky"),i("2r7QY"),i("jqQmu"),i("meWK3"),i("krGWQ"),i("bHKmf"),i("baGT8");var o=i("7Y9D8"),l=i("krGWQ"),a=i("k8mky"),u=i("meWK3"),s=i("bHKmf");l.default.searchForm.addEventListener("submit",(async t=>{t.preventDefault(),(0,s.spinner)("start");const r=l.default.searchInput.value.trim();if(""===r)return e(o).Notify.failure("Пожалуйста, введите ключевое слово для поиска фильмов",{position:"center-center",timeout:3e3}),void(0,s.spinner)("stop");const n=await(0,a.getMovieByKeyword)(r,1);if(0===n.results.length)e(o).Notify.warning("Notyflix: По вашему запросу ничего не найдено. Пожалуйста, повторите поиск.",{position:"center-center",timeout:3e3});else{l.default.gallery.innerHTML="";const e=(0,u.createGalleryMarkup)(n.results);l.default.gallery.insertAdjacentHTML("beforeend",e)}(0,s.spinner)("stop"),l.default.searchInput.value=""})),i("fkPie"),i("jqAFe"),i("kdk7Z"),i("gjiCh"),i("6qh72"),i("bXlRZ"),i("2iPxW"),i("lybYZ"),i("1Bh3J"),i("cB4di"),i("2HYS6");
//# sourceMappingURL=index.9f55bd2f.js.map
