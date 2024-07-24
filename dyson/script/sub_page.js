

/* nav mouseover */
document.addEventListener('DOMContentLoaded', function () {
    const gnb = document.querySelector(".left_header");
    const gnb_li = document.querySelectorAll(".left_header > ul > li > a > span");
    const sub = document.querySelectorAll(".nav_menu ");

    sub.forEach(i => i.style.display = "none");
    gnb_li.forEach((i, j) => {
        i.addEventListener("mouseover", () => {
            console.log(`Mouseover on gnb_li[${j}]`);
            sub.forEach(s => s.style.display = "none");
            if (sub[j]) sub[j].style.display = "block";
        });
    });
    function hideSubMenus(event) {
        if (!gnb.contains(event.relatedTarget)) {
            console.log("Mouseout from gnb or nav_menu ");
            sub.forEach(i => i.style.display = "none");
        }
    }
    gnb.addEventListener("mouseout", hideSubMenus);
    sub.forEach(i => i.addEventListener("mouseout", hideSubMenus));
});
/* 아코디언 메뉴 */
const accordionList = document.querySelectorAll(".accordion__list");

for (let i = 0; i < accordionList.length; i++) {
    accordionList[i].addEventListener("click", () => {
    accordionList[i].classList.toggle("active");
});
    accordionList[i].addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
    accordionList[i].classList.toggle("active");
    }
});
}
/* 섬네일 이미지 */
function toggleImg(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
}

