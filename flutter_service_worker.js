'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e29311f6f1bf1af907f9ef9f44b8328b",
".git/config": "25fcf51ba403581ca57ca67a43d88444",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cf9a257e8f61f501785f3cb69977127d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e9249d0961324618a74d9411dbff4d63",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "366aea2ff058a97f544bcfa01063bfe7",
".git/logs/refs/heads/main": "05415dd95e73d6de6095d0afce1dd03d",
".git/logs/refs/remotes/origin/main": "cf0a8eb038df4b06f4824be90ffd9330",
".git/objects/01/2fd15e51e0ee127f7b8d1e56a6a253166b781e": "09bafa25c82c4938a02c34f42bd9ed7f",
".git/objects/06/968f61840ddc82546b3ab6d0f323eb15ba4987": "0b429449ad0a525297c020838a98cee5",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/08/812887ac64d37bffc5f9732c8ced793d2a842b": "aede8ef22c5573f620b5d8dd805b0ed9",
".git/objects/0c/62491ed7a2dc693bb374749180bc054b4933ae": "c41ba2a44c7a0d7bb3545fce620bc634",
".git/objects/0c/b14e7b158cf1903bbce1725e491c885254d5d0": "a7dbd3eab5debc75fb0a1cf0bb3a73aa",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/16/76c7ef73643df9c3429752be08f381f961c4cb": "8d8a185b652c8e88f107bcf99e7b2062",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/18/852f0fb3d704a84c6ffc94542ef5741998e561": "db968262c88c24acecb62318a2dd4d4c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/d27ca21ae9b99c331f11933cb9c211c2f84f9f": "042fee4391e1d9c8d675becc28365898",
".git/objects/1b/7e8d3aa7f9834f4a485e6e586b870d5fdace31": "0ff069ac0c5525d72c396b4f491d1736",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1f/2bd26d4f904c250a7705fcef23d5cd707321b1": "e0a71feeeffa8bfec0a8b590ecb01990",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/22/7ccff15c43233fd2667b2ad23ea1bf7bcb79f8": "ceae10e2622ed2919879c18c53d85ba5",
".git/objects/22/e11b22a8a866392946e09d5fdaec0325c5483b": "b20969bd44b17d9ef638b36c6cea80ec",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/7b8a3acd1fbb770cf14a6dabbd6f3bd805c26e": "642806fd073835607364dbbdd02577f3",
".git/objects/24/1dd83fb117af56dde4cdd9a8bca01346cfc860": "0bdb8ff582543468396efbbfcc9925d7",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/309c8e6de4228646e6e25354a5a29874772871": "3facf01e7c3614e6c446a2da2a3c0af5",
".git/objects/29/d55d736f67ff3dcbeba44db615b766339d9226": "18aaf01c7004b74ed0a90555ab50c6ca",
".git/objects/2a/396da4e868cb565167ada356ecd848e57ae168": "02bd31f7b3ad651d48769f7f32116880",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/d343c5c9bbbba7d9533fd7aafd18884bd19a32": "d501b7fa4e1caf5973bf2c9cb8e75b66",
".git/objects/2d/7bf2adcf7f8dc54b5bea233b1cd51f2d967acb": "e2214fbd9e20b712be75e5305911d63d",
".git/objects/2d/90e7d1548831c17f74c5af8e474d4ede237ad6": "4fa0a37078b57dd3add4df8a2500d2cb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/bb36cb0d60ee134113029ac0da7543042cca0c": "706b2614afd3c5a15928cdadf8d1ed3d",
".git/objects/31/1fc7385533a1f15a0c5901cc9d831d866d1be6": "65dcebcd728d7deb6c4c1d1942102627",
".git/objects/32/07170a0fc80de90d758c932d2502f0ab138133": "d2e6c49ea7aa6f2c103c5e814fc550aa",
".git/objects/33/a9dca836bd82e6bd0090917a5e50ce56490edc": "8c3460f785ab2e1859a5c137235efb66",
".git/objects/33/c3e15f8d650efe6bce18623924a86c937233fc": "b527c58a0dedac2f2cca52b29d317f2e",
".git/objects/34/e43838bccd51ca59f07e38de552ede52d6a54d": "b675815f156a2aeef1a58a518a2cbe70",
".git/objects/38/0fc43d0c000b1e4d6a4e225bffc70f0b1c2b46": "0d2ff72dac674fc0d73b5d7786280fa5",
".git/objects/3d/75b810b43f5b44e1b8513dff6ce567205485a2": "c1b00e083708accd23c63bdc1109a2bc",
".git/objects/3e/69be3eab72b27593a20e5151989e470b334d9b": "bebb58d5261b5728ebbc1c923c9dee9f",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/a1313b6da29cadcb5ea19e640ca08cd98abbc2": "2116acca1e782d0f240edc1653276ef2",
".git/objects/43/f19d3c182658ce0c153dc7a4e04416bc174932": "7eaf0f16aa55210bbdd051b0c0133101",
".git/objects/46/28b7b4e6c9708b9d59152570200fe18e55ee34": "589da81394f167e1ee7d58db222a1c19",
".git/objects/47/69dd5d11dd0f55f05abd068585b79fbda5a692": "1e2af78a957bec98b9d065d80d9f0616",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/49/963a1d2b1489155bc9137ac5408b8cceb6c32b": "a8981e823226f49ec4b5fcfa241dca44",
".git/objects/4b/9bb50668d147f7395685e86e8a13af6f10e33d": "8834bde3b23c8b6ea77f370c75daf6b0",
".git/objects/4d/c62e07e745a316dd950282be1eed3418de25f7": "5266740799e2dbd27196ea2d1d5a7a76",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/55/4f0804c62b0b0fa012f5cf97c2c78c92c14660": "961c8a3371415d49361fa3ede8896466",
".git/objects/56/aa8a4db38fa1afaaf4546aba96b8c57ba028a9": "f95a2ad85ff7e06872c6cef18e2a75b3",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5e/fa844c3c1188f788e1a3de9f713ee4756f5cf2": "e3d6cec959c04df240d8a8f1ef054836",
".git/objects/60/820929753cb13d30fbbcc64de0baab3873bb73": "602dbb3ce3d940acf8c21dea8ed243d3",
".git/objects/61/9a3ae86b59bc1f37f2d328bbd9720112db3768": "dfc8b47668938a7f080fdc9a66b362cc",
".git/objects/63/9832f30b5b52012197105edc5174404e8988fb": "f0bc444f8cb1b22a7a1cb634fb055b57",
".git/objects/64/1467d238dd39bf42b34df6a71e05f2b4aa11a9": "f896c4cca8f4b6687d3f7b85bd8198c3",
".git/objects/64/24dcdb821e97b47fb6e4dd60a136a655e72e86": "a40abbefe2d9717e3599440d07bdf78f",
".git/objects/65/970244593eb60139a3b12cc2e9b95d56fb3aed": "719af61503d8dfc90415c86b8385ca26",
".git/objects/67/0388c08e2d22a98052ddf76c0d8abe773e7d5a": "f3d9cc965e11bc1d6d5d5a0dc7858b32",
".git/objects/67/b4f2318238d1ced6a1acecab07f2bb1cb24230": "c28f36336479d69f7c49bb0297a2b8d4",
".git/objects/67/b9e70fd45ac2c92fa59148d53ffe50d786f681": "3d9ceb5a712ea78ad646903f8c25d872",
".git/objects/69/95c983c7e2827c45c7a4644e61e9e0f4fa31e3": "452d55e88fcdf465937039464fcccaa7",
".git/objects/69/d7209f7b192f403862d7c92e34b257feddf119": "486ce4b8963483c042d5d185af280407",
".git/objects/6a/373e5a4320054fd53afbc11f2de581eabbe891": "ce2f38f8ed2bd58a5071b4eb96ed1736",
".git/objects/6b/65b1038b45d38dfd46222d1af3d40c6bbdee6d": "926cf5a0ec73fbb97987a2c41a688d1b",
".git/objects/6f/74c4bad7ac248670f696ce5f51cab7eb43ac33": "a4d727406ca5f37ff79352ae3934a089",
".git/objects/71/ec14ff1da9613b84ec7fd8ff0d7e7dc66a96e1": "43bd640d7569dfa7aa53b737d99ce437",
".git/objects/75/8c1d0949950d06d8b58d0e33b745229bca2e4d": "64b43b54f62f0d4c7a8cd1958a1f05f5",
".git/objects/75/b4517eb611c1311962ecc46b9e61fd498e2473": "5a6c9c1f2a8e9e6cf4bc3ba3587b9506",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/bf3f54b26c686e76fbb33c82bd537f9a95667b": "5b5520ef684ddd2868a37fdbeeab206c",
".git/objects/78/65190c00eae7e693705c565070d8b624e59f7c": "cb0d164959c39b3ac49160497f743f8c",
".git/objects/78/7a0b5ca4583a2bab1a2c25b56ca72fbbfc2a78": "52e165dc33389db78f4b44af682fb64e",
".git/objects/78/9195caa86c8d3571800d2027be9c9b7783a6b8": "9d067ccba00f69dfd7a5cd341be10569",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/434197a2a618d47608a66e0ba8c513a89d4a58": "e568345ada70eeff5d97f245c70230fb",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7c/ff8e6c7651f0e3b1bd55a3a4f014bbc7eee455": "88f55e478e508b8666b5bb139ba1f2ab",
".git/objects/7f/70089b72a97361a918c7779be92bb56c4d8f99": "9328d5cb8e4406c5944ce4de8f1e02ae",
".git/objects/82/4277bde3b6eb74b2f38bd5d01d1cdc3fdea2ae": "1f5c752ab8a45e28337774f2122a1231",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c126227f85b379f52e3a1c8e6cbaa90cc3b94a": "3561579d0564d1be1feb85e4d2b4cd5e",
".git/objects/8f/f70181b3bb88abf65054beedee0b5e47c52d45": "ca4fd4637cebbd8c88c55e9cf7e27644",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/94/dfb5d36c7503461908827138b85490d47427e1": "2738fdfdff7f21941f94cdfe80102392",
".git/objects/95/14b7913147b1b3e262adbbabb797ce6eaac68f": "c8ecb52c04947eb3787f0c0815f74dc1",
".git/objects/96/ee6bfecb5a31264c4d8510e0a876b0f4360ae3": "d46c2577f72eb6e60bd1ed705ad049db",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/9c644accd3880df986f552bfd4292b04dc776c": "71e57a0f3ee92e6691c63ea06ca4506e",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9d/12999efa124cef97e8cb277c4e9dd79eecfd7c": "3eab8faf0db73e7cd6adf738dfc71f6c",
".git/objects/9d/d5e5357715dbca54bcf4562e59c9f86e182070": "1dfc50af6b4316d6549f364c1e808b66",
".git/objects/9e/2d8efa9e876618bf0c99c77cb64a416e553d0e": "236aa3e7310e4d042bdcf564c8bd60d4",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/f7874cc48e523c1c6bb730663ef5da7e8165cd": "3649dcbeadcba7e8a4423095863619de",
".git/objects/a3/397e9bdf4cee94a4f6cc4328611d1d17d6057e": "948c2d58df4845bb94785599a51278cb",
".git/objects/a4/5ed8e29ef53c2494006db0996feb172919ded4": "0de6310190d8c39e0cfa2d78280e104a",
".git/objects/a5/a26b0e5c1ba7e171bb0e84deec80e0154b449c": "66c073d2e7a9c62a48caf36b4ab59efa",
".git/objects/a8/eacfae2a86619470f7483a7b4c084160d97637": "5d78ac8d8f58c22c511c766879a0914f",
".git/objects/af/ac3af465c67a6527e2fa01f94a6693381c7c91": "c361bc173c49e7897667d8c62ee6d024",
".git/objects/b3/dc346159ae542b25ddc852e36c9491998ab3f4": "b956fee8d70cd53d39b841182ffa8f75",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b8/2dcdd4e90371edfd44a4446920c9b0a121d1e8": "dfb9f53fce07e90444b0d088af5ecf5c",
".git/objects/ba/883d7c6a1817b3605b62fe827be26a6022604e": "cf9c477eeb8a828242e7776a7fa59558",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/bf/2d7e58e579186bb5be9fce9a22dafecb7ff4f8": "841020675153698c7faf8abeefaecb50",
".git/objects/c1/17bde43d2a160de464f5fe6c449041c920d007": "7ff1b997dc72f97f2472f594a0b86523",
".git/objects/c2/50c9b6f73a4041d7bf7ce99bd6449109a6b486": "91766f0ddcf67d66c0b320fa774abb47",
".git/objects/c6/9936db54edeb26288e44fbf702d573e3e459e4": "12b4c89e147242abc08b79e623c279f6",
".git/objects/c8/6e14c29b1d1588fd0a5a95ce041d397f3864c9": "85df5c511e828dcbafe1584257757240",
".git/objects/c8/cffa0051e8ca154f99ef68569704af606e2615": "db71edb13005f73b227930d11de3955e",
".git/objects/c9/5f3ce3f9664e299fd27be508ba0228c98da9e5": "180e3ff419b473176a76ae41cf2cffc5",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/76bbdd4eb996b5503e67287f7c8d15ffa3067c": "872087f3980196c3b8de91cef33b3c47",
".git/objects/d3/9efa487cdbe6279b15cc60760d323c8600ec86": "5740920f6441acca92efa53930d38c8e",
".git/objects/d4/0f0fd4235f343c556007e3454efbdb93fc9f97": "92400fa68a5710828ab8b0d24ffb24b0",
".git/objects/d6/cc43d41c3376b279f0d6f87224c538c6cf2307": "1345603d7447d04e867ab84f199ba304",
".git/objects/d8/d2c82f837ce7782b6957dceef549781cf3d3d9": "c424a4f824fc569bb989cfb61222978b",
".git/objects/d8/dfbac795570fdfb6205813ba84c97f4608e73a": "3c8dc2ca453cce7937336b7d63a4c7a9",
".git/objects/d9/d41bf6ea8820fae0581aeff481877c5c4a52fd": "74462b0864a657c34ef9ca3a6ceab695",
".git/objects/db/de3dc14a2595698250d678be4537f96abeed46": "9205f1d84ba2a7c48e860a03371249c8",
".git/objects/dc/ddffb4320a561a7acb051928749984f7b0e0e4": "8aefc850653b7b468961d4bcff3fd0ae",
".git/objects/dd/25b3801e01f93a97efa069f15ae4fb607ed6ba": "0150aff336f64f1a26a672276f12356b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e0/8b4bb0a730ac783ebe385cc568d555be5deda6": "c571bd9411518a370ab1f0b0a4c552c6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/a1da91c47f25db8542ddeb2d348028656190a6": "38c80e28f29d221648bd6cb8f70a7280",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/e65e1306071b8da64213a64be1815f0a116c20": "1a88f11fcf7fc122d6fbe23a4afcb650",
".git/objects/ed/f37fe01bee4183782a53b14befa83da3ace4a2": "f1bc52f8f139ab01f14a43eb891b4b12",
".git/objects/ef/bbb61ec7fa923ec39ccc4eae44c333db99d3e6": "c87f95e27d0b2632761bb8cfdc6e14f2",
".git/objects/f0/4d83bdebf4d5f73206b3625ad769d3434b0b89": "70c17075ce03454f94716c6f2b36c6a0",
".git/objects/f2/2c7f957dc0a41477497ce8b445702ed8267813": "f88b53337a1aaa7b7c2a8c7f5f9226ec",
".git/objects/f3/28020548442a4613b3ad3dab65a256f26e4ec2": "e45aadfeb6e7604a1fe97fcd972639d8",
".git/objects/f5/96596a6d8a80e5e09b1143f52f2f719f5dde86": "03aaa3150171c846d7bc2408bebda0ac",
".git/objects/f6/8ae9ce5ea164366d729f32479d2730de3837e8": "f5a814061f74f99d929489048bb9bf3b",
".git/objects/f7/101faacbb4b500bb91551c993361581ac5615b": "25bb17af8c223971e18d97b08558343c",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/ORIG_HEAD": "4858d8d32bc295fbdc39ff4bc9c9e5af",
".git/refs/heads/main": "4858d8d32bc295fbdc39ff4bc9c9e5af",
".git/refs/remotes/origin/main": "4858d8d32bc295fbdc39ff4bc9c9e5af",
"assets/AssetManifest.json": "7e1ab538a9be4aed4b821c78c00bc822",
"assets/assets/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/Auth%2520Ui.jpg": "4bc861eba24be2d969e2d990c784feee",
"assets/assets/bigtwo.png": "9f9ab670c734eca146091359468ceb8c",
"assets/assets/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/breezy.png": "bfb4b131a398b0425b05a4a340ea64c5",
"assets/assets/dashboard.png": "185db33eb9de1ff09f858cf01fd283a8",
"assets/assets/e%2520commerce%2520Coures%2520.jpg": "9c9acd77578272060587c21ddb3281f6",
"assets/assets/Fashion%2520week.jpg": "1be96017836996fa4e25c13d2712913f",
"assets/assets/fastfood.png": "b93729df743dcc5a60abe78b7290cea9",
"assets/assets/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/FOOD%2520COURES.jpg": "29c94f96b5b465b8be9843e41371e257",
"assets/assets/grocery.png": "b57bbd23043a8d24c5fe38d998055cf5",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/music.png": "0cc1ac4844c4f2f7724d230169e48646",
"assets/assets/my.jpg": "d04fe70837cbe9429c28308cd0cc6fdb",
"assets/assets/my.png": "05bf1a58705ab5c38c0288bd4d74acbd",
"assets/assets/news.png": "e149a1b0b27a359ecb2eee14545d8af6",
"assets/assets/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/splash.png": "06de42ecb8a3bd30adbc05870fd239d6",
"assets/assets/task.png": "6991868f5e14fa653896148190280e67",
"assets/assets/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/work.png": "88895650b9ccc69bd7ee9f07f700f572",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e2d479fba786d0c24ae719edb95d9e65",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"CNAME": "4c53387bf284789ef081bd9c4dfaacf6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6a269bcaf928a615fb4cf679052d2975",
"/": "6a269bcaf928a615fb4cf679052d2975",
"main.dart.js": "a6ea9b8d1e3f3dc4e543ddd624f0532e",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
