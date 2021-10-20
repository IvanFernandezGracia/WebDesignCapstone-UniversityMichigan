import { domFunctions } from "../dom/dom.js";

export const galleryPlace = (function () {
  let insertGalleryPlace = (html) => {
    domFunctions.insertHtmlResponseAjax("#myGalleryPlace", html);
  };

  return {
    insertGalleryPlace,
  };
})();
