if(document.body.classList.contains("cc-animate-enabled"))if("IntersectionObserver"in window&&"MutationObserver"in window){const e=()=>{const e=document.querySelectorAll("[data-cc-animate]:not(.cc-animate-init)");if(e.length>0){const t=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&!e.target.classList.contains("cc-animate-in")&&(e.target.classList.add("cc-animate-in"),t.unobserve(e.target))}))}));e.forEach((e=>{e.dataset.ccAnimateDelay&&(e.style.animationDelay=e.dataset.ccAnimateDelay),e.dataset.ccAnimateDuration&&(e.style.animationDuration=e.dataset.ccAnimateDuration),e.dataset.ccAnimate&&e.classList.add(e.dataset.ccAnimate),e.classList.add("cc-animate-init"),t.observe(e)}))}},t=getComputedStyle(document.documentElement).getPropertyValue("--aos-min-width")||"0",a=window.matchMedia(`(min-width: ${t}px)`);if(a.matches)e(),document.addEventListener("DOMContentLoaded",(()=>{new MutationObserver(debounce(e,250)).observe(document.body,{subtree:!0,childList:!0})}));else{document.body.classList.remove("cc-animate-enabled");try{a.addEventListener("change",(t=>{t.matches&&(document.body.classList.add("cc-animate-enabled"),setTimeout(e,100))}))}catch(e){}}}else document.body.classList.remove("cc-animate-enabled");