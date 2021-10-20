import { domFunctions } from "../dom/dom.js";

export const mapsGoogle = (function () {
  let MapsGoogleLink = "";
  let insertMapsGoogle = (html) => {
    let htmlLinked = domFunctions.insertProperty(
      html,
      "linkMapsInsert",
      MapsGoogleLink
    );
    domFunctions.insertHtmlResponseAjax("#mapsGoogleRios", htmlLinked);
  };
  let changeTitleMapsLink = (link) => {
    MapsGoogleLink = link;
  };

  return {
    insertMapsGoogle,
    changeTitleMapsLink,
  };
})();
