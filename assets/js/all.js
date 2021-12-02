"use strict";

console.clear();
const menuList = document.querySelector(".menu-area");
let menuListSet = document.querySelectorAll(".menu-area a");
const activeType ="col col-lg-1 py-3 py-lg-4 text-secondary actived";
const norType ="col col-lg-1 py-3 py-lg-4 text-secondary";
menuList.addEventListener('click',function(e){  
    menuListSet[0].setAttribute("class", `${norType}`);
    menuListSet[1].setAttribute("class", `${norType}`);
    menuListSet[2].setAttribute("class", `${norType}`);
    menuListSet[3].setAttribute("class", `${norType}`);
  if ( e.target.text == "常見問答"){
    menuListSet[1].setAttribute("class", `${activeType}`);  
  } else if ( e.target.text == "目前進度"){
    menuListSet[2].setAttribute("class", `${activeType}`); 
  } else if ( e.target.text == "留言"){
    menuListSet[3].setAttribute("class", `${activeType}`); 
  } else {
    menuListSet[0].setAttribute("class", `${activeType}`); 
  }
})
//# sourceMappingURL=all.js.map
