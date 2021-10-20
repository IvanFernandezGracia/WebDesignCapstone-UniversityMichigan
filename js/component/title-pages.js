import { domFunctions } from "../dom/dom.js";

export const titleSubtitle = (function () {

  let titleName = ''
  let SubtitleName =''

  let insertTitleSubtitle = (html) => {

    let htmlTitleSubtitle=domFunctions.insertProperty(html, "Title",titleName);
    htmlTitleSubtitle=domFunctions.insertProperty(htmlTitleSubtitle, "Subtitle",SubtitleName);
    domFunctions.insertHtmlResponseAjax("#titleSubtitle", htmlTitleSubtitle);
  };
  
  let changeTitleSubtitle = (title,subtitle) => {
    titleName = title;
    SubtitleName =subtitle;
  };

  return {
    insertTitleSubtitle,
    changeTitleSubtitle
  };
})();
