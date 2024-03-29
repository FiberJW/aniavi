import fetch from "node-fetch";
import btoa from "btoa";

const Sentry = require("@sentry/node");

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

type Event = {
  path: string;
  httpMethod: string;
  headers: any;
  queryStringParameters: any;
  body: string;
  isBase64Encoded: boolean;
};

export async function handler(_: Event, __: any) {
  const avatar = assets[Math.floor(Math.random() * assets.length)];
  const response = await fetch(avatar);
  const data = await response.arrayBuffer();
  const imageStr = arrayBufferToBase64(data);

  return {
    statusCode: 200,
    isBase64Encoded: true,
    headers: { "Content-Type": "image/png", "Content-Length": data.byteLength },
    body: imageStr,
  };
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach(b => (binary += String.fromCharCode(b)));

  return btoa(binary);
}

const assets = [
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Alumi_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Azura_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Carbo_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Chalk_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Chrome_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/En_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Ganen_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Gen_Asagiri_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Genbu_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Ginro_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Homura_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Hyoga_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Jasper_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Kaseki_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Kinro_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Kohaku_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Kokuyo_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Kujaku_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Magma_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Mantle_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Minami_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Mirai_Shishio_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Namari_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Natri_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Nikki_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Ruri_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Ryusui_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Sagara_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Sango_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Senku_Ishigami_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Shovel_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Soyuz_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Suika_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Taiju_Oki_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Titan_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Tsukasa_Shishio_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Turquoise_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Ukyo_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Yo_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/dr-stone/Yuzuriha_Ogawa_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/All_Might_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Backdraft_anime_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Best_Jeanist_anime_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Black_Seijin_Student_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Blue_Seijin_Student_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Buster_Hero_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Camie_Utsushimi_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Cementoss_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Chiyo_Shuzenji_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Commissioner_General_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Cow_Lady_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Crimson_Riot_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Dabi_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/David_Shield_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Death_Arms_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Denki_Kaminari_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Ectoplasm_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Edge_Shot_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Eijirou_Kirishima_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Endeavor_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Fat_Gum_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Fourth_Kind_anime_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Fumikage_Tokoyami_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Gang_Orca_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Giran_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Godzillo_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Gran_Torino_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Green_Seijin_Student_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Gunhead_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Habuko_Mongoose_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Hanta_Sero_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Himiko_Toga_anime_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Hound_Dog_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Inasa_Yoarashi_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Ingenium_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Innsmouth_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Itejiro_Toteki_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Izuku_Midoriya_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Kamui_Woods_anime_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Kashiko_Sekigai_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Katsuki_Bakugo_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Kenji_Hikishi_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Kouji_Kouda_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Kouta_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Kuin_Hachisuka_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Kurogiri_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Kyouka_Jirou_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Lunch-Rush_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Maguma_Iwata_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Mandalay_anime_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Manual_anime_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Mashirao_Ojiro_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Mei_Hatsume_Mugshot.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Melissa_Sheild_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Mezo_Shoji_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Midnight_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Mina_Ashido_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Minoru_Mineta_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Mirio_Togata_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Momo_Yaoyorozu_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Moonfish_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Mr_Compress_anime_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Mr._Principal_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Ms_Joke_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Mt._Lady_anime_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Muscular_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Mustard_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Nagamasa_Moura_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Nejire_Hado_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Nighteye_Portrait_Color_Scheme2.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/No._13_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Nomu_%28Flying%29_anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Nomu_%28No_eyes%29_anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Nomu_%284_Eyed%29_anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Nomu_Tool_Arms_headshot.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Noumu_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Ochaco_Uraraka_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Overhaul_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Pixie_Bob_anime_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Present_Mic_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Ragdoll_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Red_Seijin_Student_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Rikido_Sato_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Romero_Fujimi_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Seiji_Shishikura_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Selkie_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Shikkui_Makabe_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Shota_Aizawa_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Shoto_Todoroki_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Sirius_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Snipe_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Spinner_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Tamaki_Amajiki_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Tatami_Nakagame_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Tenya_Iida_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Tiger_anime_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Tooru_Hagakure_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Tsuyu_Asui_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Twice_Portal_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Uwabami_anime_portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Vlad_King_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Wolfram_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Yellow_Seijin_Student_Left_Eye_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Yellow_Seijin_Student_Right_Eye_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Yo_Shindo_Anime_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Yokumiru_Mera_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/my-hero-academia/Yuuga_Aoyama_Portrait.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/takagi-san/takagi.png?raw=true",
  "https://github.com/FiberJW/aniavi/blob/master/assets/takagi-san/nishikata.png?raw=true",
];
