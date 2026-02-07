'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "8f9b2a60278cc3a18130b1220755548f",
"index.html": "036cbe4901473a7a4d75427d9df73b5f",
"/": "036cbe4901473a7a4d75427d9df73b5f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"wasm_loader.html": "5f77027d4aeb34add09ce1d6850ae683",
"main.dart.js": "70eece5071a1ef8a615c0f3b515d60a1",
"vitruvian.png": "7ff818c77c028170af1f1621df481f3a",
"version.json": "f4ec0161745717e9af660cf8025794a2",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/AssetManifest.bin": "60126c03d11894d7fb79e14a8c13cad9",
"assets/ui/Classic/window_background.png": "a3a77e2f911764a53c8780f03734b4f5",
"assets/ui/Classic/button_hovered_background.png": "b63c64a2273b62616c03690384126f3e",
"assets/ui/Classic/SchoolAwesome-R9G4v.otf": "3952d402151d4ac5d77a3e9f145d7240",
"assets/ui/Classic/HTOWERT.TTF": "9e23421978544d8e00a00eb47740d280",
"assets/ui/Classic/button_background.png": "4dd1f5234ad2111ae6b5eeab01d6d5a6",
"assets/ui/Classic/blank.png": "054e17923683b4a4e779bdbd70d05ceb",
"assets/ui/Classic/button_clicked_background.png": "e9c07045cc86e01a84042f0562cac55a",
"assets/Classic/Cups03.png": "ffd4f08949f0a78bf9ab64ed923eb922",
"assets/Classic/Pentacles01.png": "8f59bad3ebf1b172a239a37a3477d459",
"assets/Classic/Swords01.png": "e26b71a52420dc8f677493b75e60d053",
"assets/Classic/Cups02.png": "cef17b1c2cddbfb1a92d708012e143bd",
"assets/Classic/Swords13.png": "9a2a90e42075147541556513b3ed9dba",
"assets/Classic/Wands09.png": "97628d58f051bfc2d44282db7680c9e5",
"assets/Classic/Swords11.png": "0093f1d956518d5375a0376daee621bc",
"assets/Classic/Swords06.png": "0e2a768804821238e338244ac12d1b8c",
"assets/Classic/Cups06.png": "4716c1ba456a070c2430665e9cc279d8",
"assets/Classic/Swords03.png": "f977d4531a07a2b258595293df52a035",
"assets/Classic/Pentacles02.png": "f42599f30da0fa337874eb637737da7e",
"assets/Classic/03-TheEmpress.png": "70aa012e5554edc4fe7a79d134f8e119",
"assets/Classic/Pentacles13.png": "71a977f30c1edbd2e07b800be8e17b1c",
"assets/Classic/18-TheMoon.png": "14f45eed6c3c6ae288fd215047a2ae5f",
"assets/Classic/Swords10.png": "560e1ab21954159fe809e7e0e20fee95",
"assets/Classic/Wands11.png": "a4b437144d5facb4abd6080d1d3b4e66",
"assets/Classic/Wands12.png": "55030871572e11d3c155f35e6240e475",
"assets/Classic/Cups12.png": "16756a5c54c9e2db6bc7cfa12ad1786a",
"assets/Classic/13-Death.png": "afaf773970058c2a8280e0a9f42bd455",
"assets/Classic/Wands04.png": "694f8a0b7481aa30a817f5258ac681a3",
"assets/Classic/CardBacks.png": "b4810e8719692a87c796a881fd60f2f9",
"assets/Classic/Cups07.png": "a863e5e1f6b83caf292659eba40ef541",
"assets/Classic/16-TheTower.png": "c9d4fa854b8a1a4c9d749cfd0448b2db",
"assets/Classic/Wands05.png": "c4b1212fb7fcfffdd708fb22277b07db",
"assets/Classic/Pentacles08.png": "078e323af1e9815ba2c7e2328ba509ac",
"assets/Classic/12-TheHangedMan.png": "dba295f6a80f1bc46ea25ca4a69a0e38",
"assets/Classic/Pentacles05.png": "4e2ba44538caa1af484a98f9d49bc1e4",
"assets/Classic/Pentacles04.png": "e4b5e1208cd5b7b5083992d8e6737fdc",
"assets/Classic/11-Justice.png": "84d3b2ef03ace8ca570a3695040d9fdd",
"assets/Classic/Swords05.png": "7f48563f9af9ed089477782f8e570886",
"assets/Classic/10-WheelOfFortune.png": "5357f33d251921e76797ab321508878e",
"assets/Classic/Swords04.png": "293f9c63d0ee707edd21eb4b6917d22c",
"assets/Classic/01-TheMagician.png": "047dabecd5127572a3d922518440e2c1",
"assets/Classic/Pentacles09.png": "1d8ff2e6dd68c76f4beea0163e20fdb1",
"assets/Classic/Wands03.png": "9b77e01257e74a36cf76c35ed30b275d",
"assets/Classic/Swords08.png": "e883ddaecc256b58df087ada056d0368",
"assets/Classic/Swords07.png": "91354680e8e24f5308b45859d8fcb750",
"assets/Classic/Cups05.png": "858bd50260569f09324852bff60e433d",
"assets/Classic/Swords02.png": "7d17305040f67dedb336183b6d6fd8bf",
"assets/Classic/Pentacles12.png": "e58e9eb95ca1793a302c4f314dee1a8a",
"assets/Classic/Swords14.png": "6ed67c4204c301c531286ea84a496ac7",
"assets/Classic/07-TheChariot.png": "3a6eb6432a7edb635476aef7b038543d",
"assets/Classic/05-TheHierophant.png": "03646d5113508149a5a6da5a2e40908f",
"assets/Classic/15-TheDevil.png": "8c219ec128c33dde0087233d8cbc8b37",
"assets/Classic/Cups09.png": "23c1d553c8c9137b6f7cd11f2e053d00",
"assets/Classic/Wands14.png": "3ac824208b8782a840438993a6a2d4e7",
"assets/Classic/Wands06.png": "fa38b5cc3d374e152a83de203be8dac7",
"assets/Classic/Wands10.png": "45889c97ae8cb1d6f91027ed4c06c7e3",
"assets/Classic/04-TheEmperor.png": "e60793cbaa5c351c117060f7309696ec",
"assets/Classic/20-Judgement.png": "10197b8f7a390000758cf901c693684c",
"assets/Classic/Cups10.png": "a00eb46d2d83c357e5259ec928c9960c",
"assets/Classic/06-TheLovers.png": "36a6fb8957ba27a8cd90ab75ec6e620c",
"assets/Classic/Cups01.png": "3eb2db05e0e2f22cd861b4439b2032bb",
"assets/Classic/Swords12.png": "c9100757012fa246ec27cd310512f9aa",
"assets/Classic/Cups11.png": "6971befc22ffbb5bf7beed655d15ccc2",
"assets/Classic/14-Temperance.png": "e98142c910f27a3d3c3df448a1dcdae4",
"assets/Classic/19-TheSun.png": "1190dd2f2451999a76c86458aa1a53b5",
"assets/Classic/Pentacles14.png": "c64fdff437136ab9d16e01c69b40a433",
"assets/Classic/Cups13.png": "6de6f100e68d6b3b9c46e462bfd90359",
"assets/Classic/Pentacles11.png": "cca8577e7fc3c14c159ca6fd7d62797b",
"assets/Classic/Pentacles10.png": "ed10c8b21ecbfcc15b51ca549258d29d",
"assets/Classic/Wands08.png": "302aca151e82a8c5deb974df71c21368",
"assets/Classic/Pentacles07.png": "d786c132e54bfa9aa8c767f5401f9845",
"assets/Classic/21-TheWorld.png": "faf4e74398184254b2ddd56b6046ebcb",
"assets/Classic/Wands02.png": "2f30de5d79179b96af0788bb0f64eef7",
"assets/Classic/Pentacles06.png": "f9cd399362f6e08fc9aef503daafdea1",
"assets/Classic/09-TheHermit.png": "57dc00382c24e78b24d2d0761ad57ad9",
"assets/Classic/08-Strength.png": "bfe8c41e7d836048d0c7fd05e798c6c5",
"assets/Classic/Cups08.png": "7a456c8ade822bcc1ca5b89dbfbe0ecc",
"assets/Classic/Wands13.png": "321442d9bc0fd71d89a5f976d5b1b9ff",
"assets/Classic/Swords09.png": "941c7b7c14daa357c99ef6b1456624e6",
"assets/Classic/02-TheHighPriestess.png": "207f4177e04277eab0d4a207515d2e19",
"assets/Classic/Cups04.png": "2b6f61654148ffaf5b08f7117d0ce4ec",
"assets/Classic/Cups14.png": "4e92e2a6fa5ab3589bd9313756b1a1e7",
"assets/Classic/17-TheStar.png": "022fd2e0c87ef3ab66b35042f7e22688",
"assets/Classic/Pentacles03.png": "a318d4b9d11f8da463616b4a1aa1a629",
"assets/Classic/00-TheFool.png": "c2c3f1a1252fe8f4c64f75c954306e3c",
"assets/Classic/Wands01.png": "bad2457a029e0c63398a5a33b0a85647",
"assets/Classic/Wands07.png": "e24d490fb0f6e4961c7cd716fb664afb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "58bceaa5961579e8580eba464e20807a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "09b358a28721c2cd5a8aa9715db75afb",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "3c1e4922391b5e2df196f13e571d2769",
"assets/MinimalBW/Cups03.png": "97acd288f574d89b3840884a7d1192b9",
"assets/MinimalBW/Pentacles01.png": "df0abb4924d92717973398e255f5c527",
"assets/MinimalBW/Swords01.png": "0e8cd82b85da8d0e53fb999bd6c1b699",
"assets/MinimalBW/15-TheTower.png": "6046439e3687c268e4fd5c0cf5707bb8",
"assets/MinimalBW/Cups02.png": "57a616f67a97f7f6ebfff67da3010801",
"assets/MinimalBW/Swords13.png": "a112c51cc2ec4ea4a2ce65cfbd5a4d69",
"assets/MinimalBW/Wands09.png": "8738f2ac6e23a7b7b2b4b59553d4cd68",
"assets/MinimalBW/Swords11.png": "b34bcfd18c2f7132b15011cefc9e5a5d",
"assets/MinimalBW/05-TheLovers.png": "80685cbafc29dbc0221a9929323d9bfe",
"assets/MinimalBW/16-TheStar.png": "9f349bb8a1dc8f0a3f9ee10a9d058f5d",
"assets/MinimalBW/12-Death.png": "5cd5d17995cb2d1606567009c5ddaa5f",
"assets/MinimalBW/Swords06.png": "903342cc30416531fd67c16374937d50",
"assets/MinimalBW/Cups06.png": "3e4b30170d78c2ece8916b5452c04486",
"assets/MinimalBW/Swords03.png": "ca7b80a68c8d524611218b3f323df889",
"assets/MinimalBW/17-TheMoon.png": "44073288c854a90a344f5ba0561bffaa",
"assets/MinimalBW/Pentacles02.png": "3b97aa335185c5e406147fd0652427b6",
"assets/MinimalBW/Pentacles13.png": "c331e34627fc388a0e90f345dd0e8cff",
"assets/MinimalBW/Swords10.png": "99dacc8f2971f892122d7bafc9ab2704",
"assets/MinimalBW/Wands11.png": "bedd8a2cd138fa7ee8fa49b2b1cce569",
"assets/MinimalBW/08-TheHermit.png": "9101707da32d78d3ee5422a2520fdc0d",
"assets/MinimalBW/Wands12.png": "f778ae10971a9727cac245a85dd0b170",
"assets/MinimalBW/02-TheEmpress.png": "2e71eaac37b43621e742e77503a14a11",
"assets/MinimalBW/Cups12.png": "8e3e6735af477d26819348e8b707b35a",
"assets/MinimalBW/Wands04.png": "43fc90c82500d6046c3b8fc3bf9068bb",
"assets/MinimalBW/Cups07.png": "f8decc00cfdd6e414de67d3c0d227110",
"assets/MinimalBW/Wands05.png": "7f5f1b25b354f1c43f94419638df6238",
"assets/MinimalBW/21-TheFool.png": "7e7fe1414330507e8ae8f23b86f90fbf",
"assets/MinimalBW/Pentacles08.png": "ad61610f6eb996b8f2cb7eccb7cbf5a1",
"assets/MinimalBW/14-TheDevil.png": "2800a866dd47708a1356a2aef7d3760e",
"assets/MinimalBW/Pentacles05.png": "ec6c38620ee9d9174fc43462a757a1eb",
"assets/MinimalBW/Pentacles04.png": "79b6a1f47476978dbaaca1d70969568d",
"assets/MinimalBW/19-Judgment.png": "a7f54fc75e585484669b86d205f29d9d",
"assets/MinimalBW/Swords05.png": "56e833b65393cf96abfab952f40a1a67",
"assets/MinimalBW/Swords04.png": "96d51d9da58d76a6acbd181a6aba9fdc",
"assets/MinimalBW/Pentacles09.png": "47f0081cade1a5a36b508fefe91e8823",
"assets/MinimalBW/Wands03.png": "f44c511644c7f1d1450ac260e6fa4d7d",
"assets/MinimalBW/Swords08.png": "c05f361b13dbcfb9e4a9ea6bdd15d93d",
"assets/MinimalBW/Swords07.png": "466847464e21da14ff1e3ec9ec8252af",
"assets/MinimalBW/Cups05.png": "921f8509278522dd7a6d434562c4759e",
"assets/MinimalBW/Swords02.png": "f6ed26285255daf4ba33583b09ebe5d7",
"assets/MinimalBW/Pentacles12.png": "bd382176fb3ce688b5143b8f2a7c6fd1",
"assets/MinimalBW/Swords14.png": "ed4a10f328409df568602d4004936077",
"assets/MinimalBW/06-TheChariot.png": "45b04020d222455f41d03169d06fa008",
"assets/MinimalBW/Cups09.png": "87aa569d28a22cd0bb67e96e5c954151",
"assets/MinimalBW/Wands14.png": "5fb95538825539526990023dee2ae693",
"assets/MinimalBW/Wands06.png": "6f28063d44bad0131dd67ec9c99c0893",
"assets/MinimalBW/Wands10.png": "c111f51c866fef7f690efbb53b2d6318",
"assets/MinimalBW/09-WheelOfFortune.png": "aa1a61ce27421d317a06d417e1a29f41",
"assets/MinimalBW/Cups10.png": "c5865bed535f6e448191827fab9e44d0",
"assets/MinimalBW/Cups01.png": "14aa3edf09df0c1058e4723f1813adb8",
"assets/MinimalBW/00-TheMagician.png": "c3eaaa25b95512f3d4e5ab6e75462689",
"assets/MinimalBW/07-Strength.png": "1e5373422ec461043bf44886fc84607d",
"assets/MinimalBW/Swords12.png": "f3eea8f097adea6d257a62c53c4ec735",
"assets/MinimalBW/Cups11.png": "cf89b9639a186a8b21b6346216322135",
"assets/MinimalBW/10-Justice.png": "8a220747f267738576031ae13e0d10ea",
"assets/MinimalBW/11-TheHangedMan.png": "ae3f7ca099698078e14b2db324426087",
"assets/MinimalBW/Pentacles14.png": "1c918350e0c711a728e548a37567f54e",
"assets/MinimalBW/Cups13.png": "afe0f2dedcce77a814e60b1debe592b9",
"assets/MinimalBW/01-TheHighPriestess.png": "f377de63218598fdc708ce3d946980a5",
"assets/MinimalBW/Pentacles11.png": "89632a7b6d95d151a7c9c42cb379049d",
"assets/MinimalBW/Pentacles10.png": "d0223a4fd04cabd899e4913a54ababca",
"assets/MinimalBW/13-Temperance.png": "45e6f163d99910c4fdaa6b84cd725bdb",
"assets/MinimalBW/Wands08.png": "65e82022f0b48d82733d64dc4aaf0b60",
"assets/MinimalBW/Pentacles07.png": "1397b6d41e20847a66b82af624acc3d1",
"assets/MinimalBW/04-TheHierophant.png": "610704eb8c77d719a4dec44fce79cb4e",
"assets/MinimalBW/20-TheWorld.png": "a290ef5e46ff4fc9e64d3dfeb9f53ff6",
"assets/MinimalBW/Wands02.png": "950e5299d8ae773d3d12ce9075e9e481",
"assets/MinimalBW/03-TheEmperor.png": "be208d19c82e2a2aeab3bf84d2408e55",
"assets/MinimalBW/Pentacles06.png": "599b09b0f9365ebb9966a8b907a53aa0",
"assets/MinimalBW/Cups08.png": "435771c0b1503aa45ba3c1784ee1ccdc",
"assets/MinimalBW/Wands13.png": "b846c51965a69e2dda7ad6dc2bf78b72",
"assets/MinimalBW/Swords09.png": "464b14bc32738dfbfc224467fd425853",
"assets/MinimalBW/Cups04.png": "896ee9e1ded328654f2d0bceaf621b5b",
"assets/MinimalBW/Cups14.png": "d436246933382b53131d036f41fa2b9c",
"assets/MinimalBW/18-TheSun.png": "d97d3cdad81338024de477f7c03d7275",
"assets/MinimalBW/Pentacles03.png": "d713a67682be4c3fe36336e747b5909c",
"assets/MinimalBW/Wands01.png": "f9a2ba3257189d41280993e3af61d3cd",
"assets/MinimalBW/Wands07.png": "5ce6bb7af8ad6d09076cdc4347a0074c",
"assets/NOTICES": "9986211b0948b215b2f8bffd76b29b9e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/wasm/tarot_game.wasm": "3be93d9a6a25ba67a6166b79ec393224",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/vitruvian_light.png": "8b8b99ab29372892591be12b0e9ef88d",
"assets/assets/images/cpp_logo.png": "02af30bb23262040d56b90c41d1715fb",
"assets/assets/images/Postgresql_elephant.svg.png": "0d4dace80961d3ce1c3e3c51ebea55bc",
"assets/assets/images/flutter_logo.png": "bb2186ddf7b3120d7d3f9ead169c4498",
"assets/assets/images/linux_logo.png": "5930e832cc0db5b3b675977dc9de90c7",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/vitruvian.png": "7ff818c77c028170af1f1621df481f3a",
"assets/assets/images/docker-icon-removebg-preview.png": "2deb86a1af8597cf0908842aa18abcf1",
"assets/assets/images/bash_logo.png": "9731a6b99823206e9663548fc41df1cc",
"assets/assets/images/C_Logo.png": "623f8181c81323e831a831bd69b76d95",
"assets/assets/images/python.png": "49539b11e418f358090208c9cc535fa7",
"assets/assets/images/java_logo.png": "c6f82b60d818a05577372beeb55a865e",
"assets/assets/images/nixos_logo_icon_248363.png": "0afafe4c9f5f747ba4bc7b444188151c",
"assets/assets/images/rust_logo.png": "a7674d5b222cf58c51ba3c674087ba3f",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/omer-attia-cv.pdf": "0e0119ee602d9e7034b9f5a7522495ff",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/Meanings/minor_arcana/Wands.txt": "c6d8f5f883adee64fc73f55143ea8765",
"assets/Meanings/minor_arcana/08.txt": "c1ec4bd8d836457c2d0aa40377a26418",
"assets/Meanings/minor_arcana/13.txt": "78bdcad365aaab548800b77e6dde92a2",
"assets/Meanings/minor_arcana/12.txt": "549f881b5ba011e89639a2b49102b20a",
"assets/Meanings/minor_arcana/11.txt": "305b80243dfe3b54afa5ff4102629ac0",
"assets/Meanings/minor_arcana/09.txt": "6a2598132dff68010046eefc8104b0d4",
"assets/Meanings/minor_arcana/Swords.txt": "a1f840b9267ad2e046a1ac803d055048",
"assets/Meanings/minor_arcana/Pentacles.txt": "fdc3603576c8a34e7ea3ea5069f824bd",
"assets/Meanings/minor_arcana/Cups.txt": "fcd8d406791b149a4bd74d6a8ea485b5",
"assets/Meanings/minor_arcana/07.txt": "87a66da2ea30fdb0150d9438004e51a0",
"assets/Meanings/minor_arcana/01.txt": "93333b148cba787d65382b51e890e21e",
"assets/Meanings/minor_arcana/sc.bat": "1316e865a072670788e4b44a3e47850a",
"assets/Meanings/minor_arcana/14.txt": "fd9bf3beb6234cd0675f54a51204e506",
"assets/Meanings/minor_arcana/04.txt": "06c1304178082face94ce2a587c56e29",
"assets/Meanings/minor_arcana/02.txt": "418a7ed62a6234ca4f6698680331f063",
"assets/Meanings/minor_arcana/06.txt": "f37d0f28fece045119cf9b3e9443169b",
"assets/Meanings/minor_arcana/10.txt": "114c3183ba4325346365f1fe9e375149",
"assets/Meanings/minor_arcana/05.txt": "3c619ab30ea4a0b118fe5e7b34a2a14e",
"assets/Meanings/minor_arcana/03.txt": "dad9b091fa275d5db6af9768160f0ca3",
"assets/Meanings/major_arcana/06-TheLovers.txt": "fd6f3c12b8ddb32900a7dc39928f4e1b",
"assets/Meanings/major_arcana/16-TheTower.txt": "77d49312d772a7d6bddaf30ff345dc27",
"assets/Meanings/major_arcana/02-TheHighPriestess.txt": "44296726d459b4d13257ac11c394d33b",
"assets/Meanings/major_arcana/21-TheWorld.txt": "3541837cb814eba5cda9baa78d2cb568",
"assets/Meanings/major_arcana/19-TheSun.txt": "27ef204f8ba529e89b34b056f68a820b",
"assets/Meanings/major_arcana/17-TheStar.txt": "b16477075e7669ae05214dd9f69b2511",
"assets/Meanings/major_arcana/11-Justice.txt": "8ccce593791efaa6a44553752d401d64",
"assets/Meanings/major_arcana/00-TheFool.txt": "6441014c1b9281914715ea7123daf91c",
"assets/Meanings/major_arcana/01-TheMagician.txt": "1a51a64831abf3e275caab6d1128a7ab",
"assets/Meanings/major_arcana/12-TheHangedMan.txt": "01d12423f261f44ec51508194315ff43",
"assets/Meanings/major_arcana/18-TheMoon.txt": "36a466daee04c30cb6e81d2e006415a3",
"assets/Meanings/major_arcana/05-TheHierophant.txt": "11c9cc635b690d63daf165305c2ffe7d",
"assets/Meanings/major_arcana/09-TheHermit.txt": "5a2b1f3141681ac46d1c6d6c2533c42f",
"assets/Meanings/major_arcana/15-TheDevil.txt": "a8d9059c95feb0786974fdf58064f3a5",
"assets/Meanings/major_arcana/08-Strength.txt": "b3c94e6698153540b5368e16c65eb1c2",
"assets/Meanings/major_arcana/07-TheChariot.txt": "55f0f593717dac263b58d83e68436b66",
"assets/Meanings/major_arcana/20-Judgement.txt": "573a87ea1f13e40fc4f5abbe0f033a99",
"assets/Meanings/major_arcana/14-Temperance.txt": "a3edd505e6be5803327ee752408ef20b",
"assets/Meanings/major_arcana/13-Death.txt": "feaa24753a828a493fa1396f886874fc",
"assets/Meanings/major_arcana/03-TheEmpress.txt": "55bed73c9617b67c1d7c761de21a6df8",
"assets/Meanings/major_arcana/04-TheEmperor.txt": "b459b027ee89acaa712af8393b2668c0",
"assets/Meanings/major_arcana/10-WheelOfFortune.txt": "7671023c1499c4e9f62a566fb7b59c65",
"assets/AssetManifest.bin.json": "a7e1c49c087ae20210a3ceca4f3a6e96",
"assets/fonts/MaterialIcons-Regular.otf": "57b9e65e8785ed075963dbefc0ca0fb2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
