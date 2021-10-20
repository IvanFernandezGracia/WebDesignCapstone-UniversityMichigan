import { domFunctions } from "./dom/dom.js";
import { carousel } from "./component/carousel.js";
import { galleryPlace } from "./component/gallery-place.js";
import { mapsGoogle } from "./component/mapsGoogle.js";
import { titleSubtitle } from "./component/title-pages.js";
import { swiper } from "./component/swiper.js";
import { bottomsSector } from "./component/bottom-sector.js";

// Link files HTML
let carouselLink = "component/carousel-landscapes.html";
let galleryPlaceLink = "component/gallery-place.html";
let MapsGoogleLink = "component/mapsGoogle.html";
let TitleLink = "component/title-pages.html";
let MapsGoogleLinkRios =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062943.2496364596!2d-72.99933154370159!3d-40.114243690501965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961681c9a5d1bf59%3A0x61b54b8fec2ecc8e!2zTG9zIFLDrW9z!5e0!3m2!1ses!2scl!4v1634111858472!5m2!1ses!2scl";
let MapsGoogleLinkHuilo =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98023.37426833485!2d-71.90946223729506!3d-39.84666844856727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9613ffce4ff93d89%3A0x317be8c5b7dae806!2sHuilo%20Huilo!5e0!3m2!1ses!2scl!4v1634159604008!5m2!1ses!2scl";
let MapsGoogleLinkValdivia =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8025.005791463987!2d-73.25241563915918!3d-39.82002269453642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9615efb6e9afc265%3A0x953663d9922c361e!2sValdivia!5e0!3m2!1ses!2scl!4v1634159434876!5m2!1ses!2scl";
let MapsGoogleLinkConaripe =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12301.9537104576!2d-72.01207485505526!3d-39.57114118120229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96140b22f194d0ad%3A0xa30d7cecb2120ffc!2sConaripe%2C%20Panguipulli%2C%20Los%20R%C3%ADos!5e0!3m2!1ses!2scl!4v1634159357552!5m2!1ses!2scl";
let swiperLink = "component/swiper.html";
let bottomsSectorLink = "component/bottoms-sector.html";

// Data Tree place & Sector
let tree = {
  "Huilo Huilo": {
    "Barcaza Puerto Fuy": "swiper/huilo/Barcaza Puerto Fuy",
    "Hotel Montana": "swiper/huilo/Hotel Montaña Magica",
    "Playa Puerto Fuy": "swiper/huilo/Playa Puerto Fuy",
    "Bosque de los Ciervos":
      "swiper/huilo/Portal Bosque de los Ciervos y Jabalis",
    "Salto de la Leona": "swiper/huilo/Portal Salto de la Leona",
  },
  Valdivia: {
    Cervezas: "swiper/valdivia/Cervezas",
    "Mercado Fluvial": "swiper/valdivia/Mercado Fluvial",
  },
  Coñaripe: {
    "Cascada Mili Mili": "swiper/conaripe/Cascada Mili Mili",
    "Salto del Buey": "swiper/conaripe/Salto del Buey",
    Termas: "swiper/conaripe/Termas",
  },
};

// Init Load Page index.html
document.addEventListener("DOMContentLoaded", function (event) {
  insertHomePage();
});

// (HEADER + MAIN + FOOTER) Ready Run After DOMContentLoaded
$(document).ready(function () {
  // Click Navbar
  $("nav a").on("click", function (event) {
    // Remove page current
    $("#main-content").empty();

    let placesName = event.target.innerHTML;

    // Active  Nav links
    let btnPlacesName =
      placesName === "Huilo Huilo"
        ? "btn-huilo"
        : placesName === "Valdivia"
        ? "btn-valdivia"
        : placesName === "Coñaripe"
        ? "btn-conaripe"
        : false;
    $("#navbarCollapse a").removeClass("active");
    $("#navbarCollapse a").css("background-color", "#212529");
    $(`#${btnPlacesName}`).addClass("active");
    $(`#${btnPlacesName}`).css("background-color", "black ");

    //Insert Pages  Nav Bar
    switch (placesName) {
      case "Huilo Huilo":
        insertPlacePage(placesName, MapsGoogleLinkHuilo);
        break;
      case "Valdivia":
        insertPlacePage(placesName, MapsGoogleLinkValdivia);
        break;
      case "Coñaripe":
        insertPlacePage(placesName, MapsGoogleLinkConaripe);
        break;
      default:
        insertHomePage();
        break;
    }
  });

  // Hidden navbar after Click
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});

// FUNCTIONS AJAX INSERT (COMPLETE PAGE)
let insertHomePage = () => {
  insertCarousel();
  insertGalleryPlace();
  insertMaps(MapsGoogleLinkRios);
};
let insertPlacePage = (placesName, MapsGoogleLink) => {
  insertTitle(placesName, "Beatifull Place " +placesName);
  let firstSector = Object.getOwnPropertyNames(tree[placesName])[0];
  console.log(firstSector);
  swiper.changeSectorSwiper(firstSector), insertBottomSector(placesName);
  insertMaps(MapsGoogleLink);
};

// FUNCTIONS AJAX INSERT (COMPONENT)
let insertCarousel = () => {
  domFunctions.insertHtmlLoading("#main-content", "myCarousel");
  $ajaxUtils.sendGetRequest(carouselLink, carousel.insertCarousel, false);
};
let insertGalleryPlace = () => {
  domFunctions.insertHtmlLoading("#main-content", "myGalleryPlace");
  $ajaxUtils.sendGetRequest(
    galleryPlaceLink,
    galleryPlace.insertGalleryPlace,
    false
  );
};
let insertMaps = (link) => {
  domFunctions.insertHtmlLoading("#main-content", "mapsGoogleRios");
  mapsGoogle.changeTitleMapsLink(link);
  $ajaxUtils.sendGetRequest(MapsGoogleLink, mapsGoogle.insertMapsGoogle, false);
};
let insertTitle = (title, subtitle) => {
  domFunctions.insertHtmlLoading("#main-content", "titleSubtitle");
  titleSubtitle.changeTitleSubtitle(title, subtitle);
  $ajaxUtils.sendGetRequest(
    TitleLink,
    titleSubtitle.insertTitleSubtitle,
    false
  );
};
let insertBottomSector = (place) => {
  domFunctions.insertHtmlLoading("#main-content", "bottomSector");
  bottomsSector.changeBottomsSectorList(tree[place]);
  $ajaxUtils.sendGetRequest(
    bottomsSectorLink,
    bottomsSector.insertBottomsSector,
    false
  );
};
export let insertSwiper = () => {
  $("#swiper").length > 0
    ? domFunctions.insertHtmlLoadingUpdate("#swiper", "swiper")
    : domFunctions.insertHtmlLoading("#main-content", "swiper");

  $ajaxUtils.sendGetRequest(swiperLink, swiper.insertSwiper, false);
};
