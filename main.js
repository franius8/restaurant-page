(()=>{"use strict";const e={buildHeader:()=>{const e=document.createElement("div");return e.setAttribute("id","header"),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","logo"),e.textContent="Yummy Food",e})()),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","navbar"),e.appendChild((()=>{const e=document.createElement("ul"),t=["homepage","about","menu","contact"];return["Homepage","About us","Our menu","Contact"].forEach(((n,d)=>{const i=document.createElement("li");i.setAttribute("id",t[d]),i.classList.add("navbaritem"),i.textContent=n,e.appendChild(i)})),e})()),e})()),e}},t=e,n={buildFooter:()=>{const e=document.createElement("div");return e.setAttribute("id","footer"),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","corporatename"),e.textContent="Yummy Food Group",e})()),e.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","corporatedata");const t=["123 Yummy Ave.","New York, NY 12345","United States"];for(let n=0;n<3;n+=1){const d=document.createElement("p");d.textContent=t[n],e.appendChild(d)}return e})()),e.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","author"),e.textContent="Created by F. Skawiński";const t=document.createElement("a");t.setAttribute("href","https://github.com/franius8");const n=document.createElement("img");return n.setAttribute("id","githubicon"),n.setAttribute("src","../images/GitHub-Mark-64px.png"),t.appendChild(n),e.appendChild(t),e})()),e}},d=n,i=(()=>{const e=document.getElementById("content");return{buildHomepage:()=>{e.appendChild(t.buildHeader()),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","middle"),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","mainelement"),e.appendChild((()=>{const e=document.createElement("img");return e.setAttribute("id","mainimage"),e.setAttribute("src","images/pizza-3000273_1920-2.jpg"),e})()),e.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","maintext");const t=document.createElement("p");t.textContent="Traditional cuisine in the modern world";const n=document.createElement("button");return n.textContent="Discover more...",e.appendChild(t),e.appendChild(n),e})()),e})()),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","middleicons"),(e=>{const t=["eco","restaurant_menu","family_restroom"],n=["Organic ingredients","Diverse menu","Families welcome"],d=["We use only the finest, organically farmed ingredients","In our menu there is something for everyone","Everyone is sure to have a pleasant time dining with us"];e.setAttribute("id","middleicons");for(let i=0;i<3;i+=1){const r=document.createElement("div");r.classList.add("icondiv");const a=document.createElement("div");a.innerHTML=`<span class="material-symbols-outlined">${t[i]}</span>`,r.appendChild(a);const o=document.createElement("div");o.classList.add("iconheader"),o.textContent=n[i],r.appendChild(o);const c=document.createElement("div");c.classList.add("icontext"),c.textContent=d[i],r.appendChild(c),e.appendChild(r)}})(e),e})()),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","quotediv"),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","quotetext"),e.innerHTML='Our main focus is that <span class="em">everyone</span> has a good time dining with us.',e})()),e})()),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","hoursdiv"),e.appendChild((()=>{const e=document.createElement("span");return e.classList.add("material-symbols-outlined"),e.textContent="nest_clock_farsight_analog",e})()),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","hoursheader"),e.textContent="Opening hours",e})()),e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("table"),n=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],d=["Closed","12:00-22:00","12:00-22:00","12:00-22:00","12:00-23:00","12:00-23:00","12:00-22:00"];for(let e=0;e<7;e+=1){const i=document.createElement("tr"),r=document.createElement("td");r.textContent=n[e],i.appendChild(r);const a=document.createElement("td");a.textContent=d[e],i.appendChild(a),t.appendChild(i)}return e.appendChild(t),e})()),e})()),e})()),e.appendChild(d.buildFooter())}}})(),r=(()=>{const e=document.getElementById("content");return{buildAboutpage:()=>{e.appendChild(t.buildHeader()),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","middle"),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","mainelement"),e.appendChild((()=>{const e=document.createElement("img");return e.setAttribute("id","mainimage"),e.setAttribute("src","images/pasta-1181189_1920.jpg"),e})()),e.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","maintext");const t=document.createElement("p");return t.textContent="Our story – Passion for food",e.appendChild(t),e})()),e})()),e})()),e.appendChild(d.buildFooter())}}})(),a=(()=>{const e=document.getElementById("content");return{buildMenupage:()=>{e.appendChild(t.buildHeader()),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","middle"),e.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","mainelement"),e.appendChild((()=>{const e=document.createElement("img");return e.setAttribute("id","mainimage"),e.setAttribute("src","images/salad-1672505_1920.jpg"),e})()),e.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","maintext");const t=document.createElement("p");return t.textContent="The menu - our biggest strenght",e.appendChild(t),e})()),e})()),e})()),e.appendChild(d.buildFooter())}}})(),o=(()=>{const e=e=>{document.getElementById(e).classList.add("active")},t=()=>{document.querySelectorAll(".navbaritem").forEach((n=>{n.addEventListener("click",(n=>{o.clearSite();const d=n.target.id;switch(d){case"homepage":i.buildHomepage();break;case"about":r.buildAboutpage();break;case"menu":a.buildMenupage()}t(),e(d)}))}))};return{clearSite:()=>{document.getElementById("content").textContent=""},addNavbarListeners:t,markActiveButton:e}})(),c=o;i.buildHomepage(),c.addNavbarListeners(),c.markActiveButton("homepage")})();