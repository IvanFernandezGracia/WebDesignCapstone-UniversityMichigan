import { domFunctions } from "../dom/dom.js";
import { insertSwiper as insertSwiperAjax } from "../index.js";

export const swiper = (function () {
  let sectorName = "";

  let insertSwiper = (html) => {
    console.log(sectorName  ,"entreeeeENTREEEEE");
    // console.log(html);

    html = insertMultipleImgHtml(html,sectorName);

    //Replace load
    domFunctions.insertHtmlResponseAjax("#swiper", html);

    // Insert swiperObj List Configuration
    swiperObj = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCur: true,
      centerersodSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 10,
        stretch: 10,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },

      loop: true,
    });
  };

  // Create swiperObj
  let swiperObj;

  let changeSectorSwiper = (sector) => {
    sectorName = sector;
    insertSwiperAjax(sectorName);
  };

  let insertMultipleImgHtml = (html,sectorName) => {
    let link_img ="";
    for (let i = 1; i < 10; i++) {
      link_img = `img/swiper/${sectorName}/photos (${i}).jpg`;
      html += `<div class="swiper-slide"> <img  src="${link_img}"/> </div>`;
    }

    html += "  </div>  </div>";
    return html;
  };

  return {
    insertSwiper,
    changeSectorSwiper,
    swiperObj,
  };
})();
