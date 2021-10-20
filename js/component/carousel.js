import { domFunctions } from "../dom/dom.js";

export const carousel = (function () {
  let insertCarousel = (html) => {
    domFunctions.insertHtmlResponseAjax("#myCarousel", html);
  };

  return {
    insertCarousel,
  };
})();
