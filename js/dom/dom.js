export const domFunctions = (function () {
  let insertHtmlLoading = function (selectorFather, selectorHtmlInsert) {
    let html = `<div id= ${selectorHtmlInsert} class='text-center loader-icon'>`;
    html += `<img src='./img/loader/ajax-loader.gif' style='width=30%'>Loading: ${selectorHtmlInsert}</div>`;
    $(selectorFather).append(html)
  };

  let insertHtmlResponseAjax = function (selectorHtmlInsert, HtmlInsert) {
    $(selectorHtmlInsert).replaceWith(HtmlInsert);
  };

  let insertProperty = function (string, propName, propValue) {
  let propToReplace = "{{" + propName + "}}";
  string = string.replace(new RegExp(propToReplace, "g"), propValue);
  return string;
};

let insertHtmlLoadingUpdate = function (selectorFather, selectorHtmlInsert) {
  console.log("replace")
  let html = `<div id= ${selectorHtmlInsert} class='text-center loader-icon'>`;
  html += `<img src='./img/loader/ajax-loader.gif'>Loading: ${selectorHtmlInsert}</div>`;
  $(selectorFather).replaceWith(html)
};

  return {
    insertHtmlResponseAjax,
    insertHtmlLoading,
    insertProperty,
    insertHtmlLoadingUpdate
  };
})();


// let insertHtmlAfter = function (selector, html) {
//   $(selector).after(html);
// };


// let concatenateHtmlRow = function (html) {
//   let  htmlRow ='<div class="row">' + html + '</div>'
//   return htmlRow
// };
// let concatenateHtmlCol = function (html) {
//   let  htmlCol ='<div class="col">' + html + '</div>'
//   return htmlCol
// };
