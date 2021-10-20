import { domFunctions } from "../dom/dom.js";
import { swiper } from "../component/swiper.js";

export const bottomsSector = (function () {
  let bottomsSectorList = "";
  let bottomsSectorClick = "";

  let insertBottomsSector = (html) => {
    for (let prop in bottomsSectorList) {
      let bottomHtml = `<a href="#">${prop}</a>`;
      html += bottomHtml;
    }
    html += "</div></div>";
    domFunctions.insertHtmlResponseAjax("#bottomSector", html);

    // Create Observable BottomsSector
    $("#listBottom a").on("click", function (event) {
      swiper.changeSectorSwiper(event.target.innerHTML)
    });
  };

  let changeBottomsSectorList = (sectorList) => {
    bottomsSectorList = sectorList;
  };

  return {
    insertBottomsSector,
    changeBottomsSectorList,
  };
})();
