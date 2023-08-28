// //Generating News
// const newsSlickTrack = document.querySelector(".news_slick_track");
// let newsArray = [
//   [
//     "./assets/images/News_redstonecomputer-car.webp",
//     "DEEP DIVE",
//     "MINECRAFTCEPTION",
//     "A computer running Minecraft... inside Minecraft?",
//   ],
//   [
//     "./assets/images/News_MinecraftLegends_PatPatBannerView_NetHomepagePromo_440x250.avif",
//     "NEWS",
//     "A MAJOR UPDATE AND A NEW LOST LEGEND",
//     "Minecraft Legends’ first title update is here alongside the Crucible!",
//   ],
//   [
//     "./assets/images/tower_car.avif",
//     "DEEP DIVE",
//     "A TOWERING CHALLENGE",
//     "A report from within Minecraft Dungeons' tallest feature!",
//   ],
//   [
//     "./assets/images/News_woodedbadlands-car.avif",
//     "DEEP DIVE",
//     "AROUND THE BLOCK: WOODED BADLANDS",
//     "Wood you believe it?",
//   ],
// ];

// function runNewsImageLoop() {
//   $(document).ready(function () {
//     $(".slick_track2").slick({
//       centerMode: true,
//       centerPadding: "90px",
//       slidesToShow: 3,
//       speed: 800,
//       focusOnSelect: true,
//       arrows: false,
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             arrows: true,
//             centerMode: true,
//             centerPadding: "40px",
//             slidesToShow: 3,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             arrows: false,
//             centerMode: true,
//             centerPadding: "40px",
//             slidesToShow: 1,
//           },
//         },
//       ],
//     });

//     $("#prev-btn2").click(function () {
//       $(".slider-nav2").slick("slickPrev");
//       console.log("Prev");
//     });

//     $("#next-btn2").click(function () {
//       $(".slider-nav2").slick("slickNext");
//       console.log("Next");
//     });
//   });

//   newsArray.forEach((element) => {
//     let ClassForCentering;
//     if (element[1] == "NEWS") {
//       ClassForCentering = "news_center";
//       console.log(ClassForCentering);
//     } else {
//       ClassForCentering = "default";
//     }
//     newsSlickTrack.innerHTML += `<div class="news_slider_box" id="n_1">
//     <div class="news_slider_box_content">
//     <div class="news_slider_box_border">
//       <a href="https://www.minecraft.net/en-us/article/teenage-mutant-hero-turtles">
//         <img src="${element[0]}">
//       </a>
//           <div class="news_tile_category">
//             <div class="news_tile_category_text" id="${ClassForCentering}">
//               ${element[1]}
//             </div>
//           </div>
//         </div>
//         <h3 class="news_box_h3">${element[2]}</h3>
//       <p class="news_box_p">${element[3]}</p>
//     </div>
//   </div>`;
//   });
// }

// //data-aem-category="Marketplace"

// runNewsImageLoop();

///////////////////////////////////////////////////////////////////
// //Generating News
// const newsSlickTrack = document.querySelector(".news_slick_track");
// let newsArray = [
//   [
//     "https://www.minecraft.net/en-us/article/-minecraftception",
//     "./assets/images/News_redstonecomputer-car.webp",
//     "DEEP DIVE",
//     "MINECRAFTCEPTION",
//     "A computer running Minecraft... inside Minecraft?",
//   ],
//   [
//     "https://www.minecraft.net/en-us/article/a-major-update-and-new-lost-legend",
//     "./assets/images/News_MinecraftLegends_PatPatBannerView_NetHomepagePromo_440x250.avif",
//     "NEWS",
//     "A MAJOR UPDATE AND A NEW LOST LEGEND",
//     "Minecraft Legends’ first title update is here alongside the Crucible!",
//   ],
//   [
//     "https://www.minecraft.net/en-us/article/a-towering-challenge",
//     "./assets/images/tower_car.avif",
//     "DEEP DIVE",
//     "A TOWERING CHALLENGE",
//     "A report from within Minecraft Dungeons' tallest feature!",
//   ],
//   [
//     "https://www.minecraft.net/en-us/article/wooded-badlands",
//     "./assets/images/News_woodedbadlands-car.avif",
//     "DEEP DIVE",
//     "AROUND THE BLOCK: WOODED BADLANDS",
//     "Wood you believe it?",
//   ],
// ];

// function runNewsImageLoop() {
//   newsArray.forEach((element) => {
//     let classForCentering = element[1] === "NEWS" ? "news_center" : "default";

//     const newsSliderBox = document.createElement("div");
//     newsSliderBox.className = "news_slider_box";

//     const newsSliderBoxContent = document.createElement("div");
//     newsSliderBoxContent.className = "news_slider_box_content";

//     const newsSliderBoxBorder = document.createElement("div");
//     newsSliderBoxBorder.className = "news_slider_box_border";

//     newsSliderBoxBorder.innerHTML = `
//       <a href="${element[0]}">
//         <img class="news_img" src="${element[1]}">
//       </a>
//       <div class="news_tile_category">
//         <div class="news_tile_category_text" id="${classForCentering}">
//           ${element[2]}
//         </div>
//       </div>
//     `;

//     newsSliderBoxContent.appendChild(newsSliderBoxBorder);
//     newsSliderBoxContent.innerHTML += `
//       <h3 class="news_box_h3">${element[3]}</h3>
//       <p class="news_box_p">${element[4]}</p>
//     `;

//     newsSliderBox.appendChild(newsSliderBoxContent);
//     newsSlickTrack.appendChild(newsSliderBox);
//   });
//   /////////////////////////////////////////////////////
//   $(document).ready(function () {
//     $(".slick_track2").slick({
//       centerMode: true,
//       centerPadding: "30px",
//       slidesToShow: 3,
//       speed: 800,
//       focusOnSelect: true,
//       arrows: false,
//       focusOnSelect: true,
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             arrows: true,
//             centerMode: true,
//             centerPadding: "40px",
//             slidesToShow: 3,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             arrows: false,
//             centerMode: true,
//             centerPadding: "40px",
//             slidesToShow: 1,
//           },
//         },
//       ],
//     });

//     $("#prev-btn2").click(function () {
//       $(".slider-nav2").slick("slickPrev");
//       console.log("Prev");
//     });

//     $("#next-btn2").click(function () {
//       $(".slider-nav2").slick("slickNext");
//       console.log("Next");
//     });
//   });

//   /////////////////////////////////////////////////////
// }

// //data-aem-category="Marketplace"

// runNewsImageLoop();

//Generating News
const newsSlickTrack = document.querySelector(".news_slick_track");
let newsArray = [
  [
    "https://www.minecraft.net/en-us/article/-minecraftception",
    "./assets/images/News_redstonecomputer-car.webp",
    "DEEP DIVE",
    "MINECRAFTCEPTION",
    "A computer running Minecraft... inside Minecraft?",
  ],
  [
    "https://www.minecraft.net/en-us/article/a-major-update-and-new-lost-legend",
    "./assets/images/News_MinecraftLegends_PatPatBannerView_NetHomepagePromo_440x250.avif",
    "NEWS",
    "A MAJOR UPDATE AND A NEW LOST LEGEND",
    "Minecraft Legends’ first title update is here alongside the Crucible!",
  ],
  [
    "https://www.minecraft.net/en-us/article/a-towering-challenge",
    "./assets/images/tower_car.avif",
    "DEEP DIVE",
    "A TOWERING CHALLENGE",
    "A report from within Minecraft Dungeons' tallest feature!",
  ],
  [
    "https://www.minecraft.net/en-us/article/wooded-badlands",
    "./assets/images/News_woodedbadlands-car.avif",
    "DEEP DIVE",
    "AROUND THE BLOCK: WOODED BADLANDS",
    "Wood you believe it?",
  ],
];

function runNewsImageLoop() {
  newsArray.forEach((element, index) => {
    console.log(index);
    let classForCentering = element[2] === "NEWS" ? "news_center" : "default";
    const newsSliderBox = document.createElement("div");
    newsSliderBox.className = "news_slider_box";

    const newsSliderBoxContent = document.createElement("div");
    newsSliderBoxContent.className = "news_slider_box_content";

    const newsSliderBoxBorder = document.createElement("div");
    newsSliderBoxBorder.className = "news_slider_box_border";

    newsSliderBoxBorder.innerHTML = `
      <a href="${element[0]}">
        <img class="news_img" src="${element[1]}" id = "news_${index}">
      </a>
      <div class="news_tile_category">
        <div class="news_tile_category_text ${classForCentering}" id = "NTCT_${index}">
          ${element[2]}
        </div>
      </div>
    `;

    newsSliderBoxContent.appendChild(newsSliderBoxBorder);
    newsSliderBoxContent.innerHTML += `
      <h3 class="news_box_h3">${element[3]}</h3>
      <p class="news_box_p">${element[4]}</p>
    `;

    newsSliderBox.appendChild(newsSliderBoxContent);
    newsSlickTrack.appendChild(newsSliderBox);
  });
  /////////////////////////////////////////////////////
  ///Viewport size Checker
  (function (n) {
    (n.viewportSize = {}),
      (n.viewportSize.getHeight = function () {
        return t("Height");
      }),
      (n.viewportSize.getWidth = function () {
        return t("Width");
      });
    var t = function (t) {
      var f,
        o = t.toLowerCase(),
        e = n.document,
        i = e.documentElement,
        r,
        u;
      return (
        n["inner" + t] === undefined
          ? (f = i["client" + t])
          : n["inner" + t] != i["client" + t]
          ? ((r = e.createElement("body")),
            (r.id = "vpw-test-b"),
            (r.style.cssText = "overflow:scroll"),
            (u = e.createElement("div")),
            (u.id = "vpw-test-d"),
            (u.style.cssText = "position:absolute;top:-1000px"),
            (u.innerHTML =
              "<style>@media(" +
              o +
              ":" +
              i["client" + t] +
              "px){body#vpw-test-b div#vpw-test-d{" +
              o +
              ":7px!important}}</style>"),
            r.appendChild(u),
            i.insertBefore(r, e.head),
            (f = u["offset" + t] == 7 ? i["client" + t] : n["inner" + t]),
            i.removeChild(r))
          : (f = n["inner" + t]),
        f
      );
    };
  })(this);
  /////////////////////////////////////////////////////////////////////////////
  if (viewportSize.getWidth() > 600) {
    $(document).ready(function () {
      const slider = $(".slick_track2");

      slider.on("init beforeChange", function (event, slick, currentSlide) {
        // Remove the class from the previously active slide
        slider.find(".slick-current").removeClass("slick-target");

        // Add the class to the current active slide
        const currentSlideElement = slick.$slides[currentSlide];
        $(currentSlideElement).addClass("slick-target");

        $("#prev-btn2").click(function () {
          slider.slick("slickPrev");
        });

        $("#next-btn2").click(function () {
          slider.slick("slickNext");
        });
      });

      slider.slick({
        centerMode: true,
        centerPadding: "25px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        focusOnSelect: true,
        arrows: false,
        focusOnSelect: true,
        swipe: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "0px",
              slidesToShow: 3,
              slidesToScroll: 1,
              swipe: false,
              arrows: false,
              speed: 800,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "30px",
              slidesToShow: 3,
              swipe: false,
              arrows: false,
              speed: 800,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              swipe: false,
              arrows: false,
              speed: 800,
            },
          },
        ],
      });
    });

    /////////////////////////////////////////////////////
  }
}
//data-aem-category="Marketplace"

runNewsImageLoop();
