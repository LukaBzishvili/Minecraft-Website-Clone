// const gridList = document.querySelector(".grid_list");
// const imageFolder = "../assets/images/";
// const loadBtn = document.querySelector(".load_more_btn");
// const imageArray = [
//   "./assets/images/creation_cherrygrove.avif",
//   "./assets/images/creation_HuntingSeason.avif",
//   "./assets/images/creations_greenSheep.avif",
//   "./assets/images/creation_brush.avif",
//   "./assets/images/creation_urban.avif 1x2",
//   "./assets/images/creation_realms.avif",
//   "./assets/images/creation_letsplay_morphpack.avif",
//   "./assets/images/creation_realms_robot.avif",
//   "./assets/images/creation_chiseledbookshelf.avif",
//   "./assets/images/creation_DLC_TimelessTrails.avif 1x2",
//   "./assets/images/creation_LegendsGuide_tile.avif",
//   "./assets/images/creation_Trails-TalesEvent.avif 2x2",
//   "./assets/images/creation_mm-camel.avif",
//   "./assets/images/creation_Minecraft_Marketplace_SummerCelebration.avif",
//   "./assets/images/creation_Minecraft_TheIncrediblesDLC.avif",
//   "./assets/images/creation_weatheredcopper.avif",
// ];

// let nextLoad = 0;
// let currentPosition = 0;

// const largeImagesMedia = ["./assets/images/creations_urban_media.avif"];
// function runImageLoop() {
//   imageArray.some((image, index) => {
//     let filteredImage, id;
//     if (checkIfImageIsLarge(image) === "1x2") {
//       filteredImage = removeLastWordsFromString(image);
//       id = "large_image";
//     } else if (checkIfImageIsLarge(image) === "2x2") {
//       id = "extra_large_image";
//       filteredImage = removeLastWordsFromString(image);
//     } else {
//       filteredImage = image;
//       id = "image";
//     }
//     gridList.innerHTML += `<li class="tile" id="${id}">
//       <img
//         src="${filteredImage}"
//         alt="image"
//       />
//       <div class="sliding_content_body">
//         <div class="category">
//           <div class="tile_category_text">DEEP DIVES</div>
//         </div>
//         <div class="caption">
//           <h3 class="sliding_content_title">
//             Around the Block: Cherry Grove
//           </h3>
//           <p>A berry good biome!</p>
//         </div>
//       </div>
//     </li>`;
//     index += 1;
//     console.log(index);
//     if (nextLoad === 0 && index === 6) {
//       console.log("NextLoad = 0");
//       return true;
//     } else if (nextLoad === 1 && index === 12) {
//       console.log("NextLoad = 1");
//       return true;
//     } else if (nextLoad === 2 && index === 16) {
//       console.log("NextLoad = 2");
//       return true;
//     } else {
//       return false;
//     }
//   });
// }

// runImageLoop(currentPosition);

// loadBtn.addEventListener("click", () => {
//   gridList.innerHTML = "";
//   nextLoad += 1;
//   currentPosition += 7;
//   runImageLoop(currentPosition);
// });

// ///////////////////////////////////////////Functions
// /////////////For Testing
// // let test = [
// //   "./assets/images/creation_Trails-TalesEvent.avif 2x2",
// //   "./assets/images/creation_urban.avif 1x2",
// //   "./assets/images/creation_weatheredcopper.avif",
// // ];

// function checkIfImageIsLarge(string) {
//   const words = string.split(" ");
//   if (words[words.length - 1] === "1x2") {
//     return "1x2";
//   } else if (words[words.length - 1] === "2x2") {
//     return "2x2";
//   } else {
//     return "1x1";
//   }
// }

// function removeLastWordsFromString(string) {
//   const words = string.split(" ");
//   words.pop();
//   return words.join(" ");
// }

// //////Next: create arrays inside imageArray and add information there for gridlist.InnerHTML

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const gridList = document.querySelector(".grid_list");
const imageFolder = "../assets/images/";
const loadBtn = document.querySelector(".load_more_btn");
const imageArray = [
  [
    "./assets/images/creation_cherrygrove.avif",
    "DEEP DIVES",
    "Around the Block: Cherry Grove",
    "A berry good biome!",
    "https://www.minecraft.net/en-us/article/around-block--cherry-grove",
  ],
  [
    "./assets/images/creation_HuntingSeason.avif",
    "NEWS",
    "Lost Legends: The Hunting Season ",
    "Hunt down the hunter in a new free challenge!",
    "https://www.minecraft.net/en-us/article/lost-legends-the-hunting-season",
  ],
  [
    "./assets/images/creations_greenSheep.avif",
    "NEWS",
    "1.20.10 Update Available on Bedrock",
    "A Minecraft Bedrock Edition Update",
    "https://www.minecraft.net/en-us/article/1-20-10-update-available-bedrock",
  ],
  [
    "./assets/images/creation_brush.avif",
    "DEEP DIVES",
    "Taking Inventory: Brush",
    "Brush up on your archaeology",
    "https://www.minecraft.net/en-us/article/brush",
  ],
  [
    "./assets/images/creation_urban.avif 1x2",
    "DEEP DIVES",
    "URBAN LAYERS",
    "Mine67 teaches us the art of illusion builds!",
    "https://www.minecraft.net/en-us/article/urban-layers",
  ],
  [
    "./assets/images/creation_realms.avif",
    "MARKETPLACE",
    "REALMS PLUS: JULY 2023",
    "Creators of chaos, gather round!",
    "https://www.minecraft.net/en-us/article/realms-plus--july-2023",
  ],
  [
    "./assets/images/creation_letsplay_morphpack.avif",
    "MARKETLPACE",
    "Let's Play: Morph Pack",
    "Become a chicken and battle the Ender Dragon!",
    "https://www.minecraft.net/en-us/article/lets-play-morph-pack",
  ],
  [
    "./assets/images/creation_realms_robot.avif",
    "NEWS",
    "New on Realms: Our New Robot Overlords",
    "Eight maps for human and mechanical beings alike!",
    "https://www.minecraft.net/en-us/article/new-realms--our-new-robot-overlords",
  ],
  [
    "./assets/images/creation_chiseledbookshelf.avif",
    "DEEP DIVES",
    "Chiseled Bookshelf",
    "Fill your shelves with knowledge!",
    "https://www.minecraft.net/en-us/article/chiseled-bookshelf",
  ],
  [
    "./assets/images/creation_DLC_TimelessTrails.avif 1x2",
    "MERCH",
    "The Summer Celebration Sale has begun",
    "Join new trails with the summer sale!",
    "https://www.minecraft.net/en-us/article/the-summer-celebration-sale-has-begun",
  ],
  [
    "./assets/images/creation_LegendsGuide_tile.avif",
    "MERCH",
    "Get your guide to Minecraft Legends",
    "Read your way to victory",
    "https://www.minecraft.net/en-us/article/get-your-guide-minecraft-legends",
  ],
  [
    "./assets/images/creation_Trails-TalesEvent.avif 2x2",
    "MARKETPLACE",
    "The Trails & Tales Event ",
    "Join us for a weekend of 1.20 fun! ",
    "https://www.minecraft.net/en-us/article/trails-tales-event",
  ],
  [
    "./assets/images/creation_mm-camel.avif",
    "DEEP DIVES",
    "Mob Menagerie: Camel",
    "A Trails & Tales mob!",
    "https://www.minecraft.net/en-us/article/camel",
  ],
  [
    "./assets/images/creation_Minecraft_Marketplace_SummerCelebration.avif",
    "MARKETPLACE",
    "Discover the Summer Celebration",
    "Join the trail to adventure and free stuff!",
    "https://www.minecraft.net/en-us/article/discover-summer-celebration",
  ],
  [
    "./assets/images/creation_Minecraft_TheIncrediblesDLC.avif",
    "DEEP DIVES",
    "The Incredibles are coming to Minecraft ",
    "Get your superpowers on!",
    "https://www.minecraft.net/en-us/article/the-incredibles-are-coming-minecraft",
  ],
  [
    "./assets/images/creation_weatheredcopper.avif",
    "NEWS",
    "Lost Legends: The Legend of the Llama",
    "A new monthly challenge, another patch, and fresh creator content! ",
    "https://www.minecraft.net/en-us/article/weathered-copper",
  ],
];

let nextLoad = 0;
let currentPosition = 0;

const largeImagesMedia = ["./assets/images/creations_urban_media.avif"];
function runImageLoop() {
  imageArray.some((image, index) => {
    let filteredImage, id;
    if (checkIfImageIsLarge(image[0]) === "1x2") {
      filteredImage = removeLastWordsFromString(image[0]);
      id = "large_image";
    } else if (checkIfImageIsLarge(image[0]) === "2x2") {
      id = "extra_large_image";
      filteredImage = removeLastWordsFromString(image[0]);
    } else {
      filteredImage = image[0];
      id = "image";
    }
    gridList.innerHTML += `<li class="tile" id="${id}">
    <a href="${image[4]}">
      <img
        src="${filteredImage}"
        alt="image"
      />
      <div class="sliding_content_body">
        <div class="category">
          <div class="tile_category_text">${image[1]}</div>
        </div>
          <div class="caption">
            <h3 class="sliding_content_title">
              ${image[2]}
            </h3>
            <p>${image[3]}</p>
          </div>
        </div>
      </a>
    </li>`;
    index += 1;
    console.log(index);
    if (nextLoad === 0 && index === 6) {
      console.log("NextLoad = 0");
      return true;
    } else if (nextLoad === 1 && index === 12) {
      console.log("NextLoad = 1");
      return true;
    } else if (nextLoad === 2 && index === 16) {
      console.log("NextLoad = 2");
      return true;
    } else {
      return false;
    }
  });
}

runImageLoop(currentPosition);

loadBtn.addEventListener("click", () => {
  gridList.innerHTML = "";
  nextLoad += 1;
  currentPosition += 7;
  runImageLoop(currentPosition);
});

///////////////////////////////////////////Functions
/////////////For Testing
// let test = [
//   "./assets/images/creation_Trails-TalesEvent.avif 2x2",
//   "./assets/images/creation_urban.avif 1x2",
//   "./assets/images/creation_weatheredcopper.avif",
// ];

function checkIfImageIsLarge(string) {
  const words = string.split(" ");
  if (words[words.length - 1] === "1x2") {
    return "1x2";
  } else if (words[words.length - 1] === "2x2") {
    return "2x2";
  } else {
    return "1x1";
  }
}

function removeLastWordsFromString(string) {
  const words = string.split(" ");
  words.pop();
  return words.join(" ");
}

//////Next: create arrays inside imageArray and add information there for gridlist.InnerHTML
