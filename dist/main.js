(()=>{"use strict";const e={buildHeader:()=>{const e=document.createElement("header");return e.setAttribute("id","header"),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","logo"),e.textContent="Yummy Food",e})()),e.appendChild((()=>{const e=document.createElement("nav");return e.setAttribute("id","navbar"),e.appendChild((()=>{const e=document.createElement("ul"),t=["homepage","about","menu","contact"];return["Homepage","About us","Our menu","Contact"].forEach(((n,i)=>{const a=document.createElement("li");a.setAttribute("id",t[i]),a.classList.add("navbaritem"),a.textContent=n,e.appendChild(a)})),e})()),e})()),e}},t=e,n={buildFooter:()=>{const e=document.createElement("footer");return e.setAttribute("id","footer"),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","corporatename"),e.textContent="Yummy Food Group",e})()),e.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","corporatedata");const t=["123 Yummy Ave.","New York, NY 12345","United States"];for(let n=0;n<3;n+=1){const i=document.createElement("p");i.textContent=t[n],e.appendChild(i)}return e})()),e.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","author"),e.textContent="Created by F. Skawiński";const t=document.createElement("a");t.setAttribute("href","https://github.com/franius8");const n=document.createElement("img");return n.setAttribute("id","githubicon"),n.setAttribute("src","images/GitHub-Mark-64px.png"),t.appendChild(n),e.appendChild(t),e})()),e}},i=n,a=(()=>{const e=document.getElementById("content");return{buildHomepage:()=>{e.appendChild(t.buildHeader()),e.appendChild((()=>{const e=document.createElement("main");return e.setAttribute("id","middle"),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","mainelement"),e.appendChild((()=>{const e=document.createElement("img");return e.setAttribute("id","mainimage"),e.setAttribute("src","images/pizza-3000273_1920-2.jpg"),e.setAttribute("alt",""),e})()),e.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","maintext");const t=document.createElement("p");t.textContent="Traditional cuisine in the modern world";const n=document.createElement("button");return n.textContent="Discover more...",e.appendChild(t),e.appendChild(n),e})()),e})()),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","middleicons"),(e=>{const t=["eco","restaurant_menu","family_restroom"],n=["Organic ingredients","Diverse menu","Families welcome"],i=["We use only the finest, organically farmed ingredients","In our menu there is something for everyone","Everyone is sure to have a pleasant time dining with us"];e.setAttribute("id","middleicons");for(let a=0;a<3;a+=1){const r=document.createElement("div");r.classList.add("icondiv");const d=document.createElement("div");d.innerHTML=`<span class="material-symbols-outlined">${t[a]}</span>`,r.appendChild(d);const s=document.createElement("div");s.classList.add("iconheader"),s.textContent=n[a],r.appendChild(s);const o=document.createElement("div");o.classList.add("icontext"),o.textContent=i[a],r.appendChild(o),e.appendChild(r)}})(e),e})()),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","quotediv"),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","quotetext"),e.innerHTML='Our main focus is that <span class="em">everyone</span> has a good time dining with us.',e})()),e})()),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","hoursdiv"),e.appendChild((()=>{const e=document.createElement("span");return e.classList.add("material-symbols-outlined"),e.textContent="nest_clock_farsight_analog",e})()),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","hoursheader"),e.textContent="Opening hours",e})()),e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("table"),n=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],i=["Closed","12:00-22:00","12:00-22:00","12:00-22:00","12:00-23:00","12:00-23:00","12:00-22:00"];for(let e=0;e<7;e+=1){const a=document.createElement("tr"),r=document.createElement("td");r.textContent=n[e],a.appendChild(r);const d=document.createElement("td");d.textContent=i[e],a.appendChild(d),t.appendChild(a)}return e.appendChild(t),e})()),e})()),e})()),e.appendChild(i.buildFooter())}}})(),r=(()=>{const e=document.getElementById("content"),n=["Passion","Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper sagittis est et feugiat. Morbi sit amet condimentum erat. Mauris nulla nisl, facilisis ut eros eu, tristique faucibus dolor. Cras pretium erat augue, vitae cursus justo condimentum quis. Maecenas blandit porta purus, non elementum ipsum aliquam et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis eu ante ac viverra. Ut at lobortis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vitae varius ligula. Aenean a tortor augue. Proin tincidunt mattis ligula nec finibus. In ac viverra ipsum. Integer id lorem nisl.","images/cafe-1872888_1920-2.jpg"],a=["Dedication","Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper sagittis est et feugiat. Morbi sit amet condimentum erat. Mauris nulla nisl, facilisis ut eros eu, tristique faucibus dolor. Cras pretium erat augue, vitae cursus justo condimentum quis. Maecenas blandit porta purus, non elementum ipsum aliquam et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis eu ante ac viverra. Ut at lobortis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vitae varius ligula. Aenean a tortor augue. Proin tincidunt mattis ligula nec finibus. In ac viverra ipsum. Integer id lorem nisl.","images/architecture-4062650_1920-2.jpg"],r=["Tradition","Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper sagittis est et feugiat. Morbi sit amet condimentum erat. Mauris nulla nisl, facilisis ut eros eu, tristique faucibus dolor. Cras pretium erat augue, vitae cursus justo condimentum quis. Maecenas blandit porta purus, non elementum ipsum aliquam et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis eu ante ac viverra. Ut at lobortis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vitae varius ligula. Aenean a tortor augue. Proin tincidunt mattis ligula nec finibus. In ac viverra ipsum. Integer id lorem nisl.","images/olive-oil-968657_1920-2.jpg"],d=(e,t,n)=>{const i=document.createElement("div");i.classList.add(n);const a=document.createElement("div");a.classList.add("storyheader"),a.textContent=e;const r=document.createElement("div");return r.classList.add("storycontent"),r.textContent=t,i.appendChild(a),i.appendChild(r),i},s=e=>{const t=document.createElement("div");t.classList.add("storyimagediv");const n=document.createElement("img");return n.classList.add("storyimage"),n.setAttribute("src",e),t.appendChild(n),t},o=e=>{const t=e[0],n=e[1],i=e[2],a=document.createElement("div");return a.classList.add("lefttextdiv"),a.appendChild(d(t,n,"lefttext")),a.appendChild(s(i)),a};return{buildAboutpage:()=>{e.appendChild(t.buildHeader()),e.appendChild((()=>{const e=document.createElement("main");return e.setAttribute("id","middle"),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","mainelement"),e.appendChild((()=>{const e=document.createElement("img");return e.setAttribute("id","mainimage"),e.setAttribute("src","images/pasta-1181189_1920.jpg"),e.setAttribute("alt",""),e})()),e.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","maintext");const t=document.createElement("p");return t.textContent="Our story – Passion for food",e.appendChild(t),e})()),e})()),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","story"),e.appendChild(o(n)),e.appendChild((e=>{const t=e[0],n=e[1],i=e[2],a=document.createElement("div");return a.classList.add("righttextdiv"),a.appendChild(s(i)),a.appendChild(d(t,n,"righttext")),a})(a)),e.appendChild(o(r)),e})()),e})()),e.appendChild(i.buildFooter())}}})(),d=(()=>{const e=document.getElementById("content");return{buildMenupage:()=>{e.appendChild(t.buildHeader()),e.appendChild((()=>{const e=document.createElement("main");return e.setAttribute("id","middle"),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","mainelement"),e.appendChild((()=>{const e=document.createElement("img");return e.setAttribute("id","mainimage"),e.setAttribute("src","images/salad-1672505_1920.jpg"),e})()),e.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","maintext");const t=document.createElement("p");return t.textContent="The menu - our biggest strenght",e.appendChild(t),e})()),e})()),e})()),e.appendChild(i.buildFooter())}}})(),s=(()=>{const e=e=>{document.getElementById(e).classList.add("active")},t=()=>{document.querySelectorAll(".navbaritem").forEach((n=>{n.addEventListener("click",(n=>{s.clearSite();const i=n.target.id;switch(i){case"homepage":a.buildHomepage();break;case"about":r.buildAboutpage();break;case"menu":d.buildMenupage()}t(),e(i)}))}))};return{clearSite:()=>{document.getElementById("content").textContent=""},addNavbarListeners:t,markActiveButton:e}})(),o=s;a.buildHomepage(),o.addNavbarListeners(),o.markActiveButton("homepage")})();