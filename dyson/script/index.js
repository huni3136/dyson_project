const content  = new Swiper('.swiper',{    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/* nav mouseover */
document.addEventListener('DOMContentLoaded', function () {
    const gnb = document.querySelector(".top_header");
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

/* 탭메뉴바  */
const btn_menu = document.querySelectorAll(".all_top  a")
const product_list = document.querySelectorAll(".swiper ")
btn_menu[0].style.color = "#000";
for(var i = 1; i < product_list.length; i++) {
    product_list[i].style.display = "none"
}
btn_menu.forEach((i, j) => {
    i.addEventListener("click", (e) => {
        e.preventDefault();
        btn_menu.forEach(btn => btn.style.color = "");
        i.style.color = "#000";
        for(var ul of product_list) {ul.style.display = "none"}
        product_list[j].style.display = "flex"
        
    })
})





