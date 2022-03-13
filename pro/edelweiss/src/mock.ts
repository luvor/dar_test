import { Movie, Actor } from "./types";
export const movies: Movie[] = [
  {
    id: 0,
    title: "Триплексоголик",
    original_title: "XXXHOLiC",
    type: "сериал",
    year: "2006-2008",
    country: "Япония",
    director: "Цутому Мидзусима, Синсукэ Тэрасава, Макото Баба",
    genres: [
      "аниме",
      "мультфильм",
      "фэнтези",
      "мелодрама",
      "комедия",
      "детектив",
    ],
    actors: [0, 1, 2, 3, 4],
    slogan: "There is always a price to pay...",
    short_description:
      "Чтобы не видеть духов, он нанимается на работу к ведьме. Эксцентричный мир потустороннего с ноткой психологии",
    description:
      "Ватануки Кимихиро — обычный старшеклассник. У него есть девушка, которая ему нравится, и друг, который ему не нравится. Но есть одно «но»: Ватануки может видеть странности, будь это духи или души умерших, и это ему очень мешает в обычной жизни. Однажды, убегая от духов, парень наткнулся на магазин ведьмы Юко, в котором исполняют желания. Юко пообещала, что духи не будут больше его беспокоить, а в качестве платы потребовала, чтобы Ватануки поработал у неё в магазине. Так начинается история о странностях и чудесах, существующих рядом с нами, но которые мы не замечаем.",
    preview_img:
      "https://static2.aniimg.com/upload/20170626/888/T/u/9/Tu9GEF.jpg",
  },
  {
    id: 1,
    title: "Анчартед: На картах не значится",
    original_title: "Uncharted",
    type: "фильм",
    year: "2022",
    country: "США, Испания",
    director: "Рубен Фляйшер",
    genres: ["боевик", "приключения"],
    actors: [5, 6, 7],
    short_description:
      "Два искателя приключений Нейтан Дрейк и Виктор Салливан по прозвищу Салли отправляются на поиски величайшего сокровища мира. Кроме того, они надеются найти улики, которые приведут их к давно потерянному брату Нейтана.",
    description:
      "Uncharted - американский приключенческий боевик 2022 года режиссера Рубена Флейшера по сценарию Рэйфа Ли Джадкинса, Арта Маркума и Мэтта Холлоуэя, основанный на одноименной франшизе видеоигр, разработанной Naughty Dog и изданной Sony Interactive Entertainment. В нем снимаются Том Холланд в роли Натана Дрейка и Марк Уолберг в роли его наставника Виктора Салливана, а София Али, Тати Габриэль и Антонио Бандерас-во второстепенных ролях. В фильме Дрейк завербован Салливаном в гонке против коррумпированного миллиардера Сантьяго Монкады (Бандерас) и лидера наемников Джо Брэддока (Габриэль), чтобы найти легендарные сокровища экспедиции Магеллана. ",
    preview_img:
      "https://i.pinimg.com/736x/85/b7/e0/85b7e0d5b7e913e1db3cf55f4db71225.jpg",
  },
  {
    id: 2,
    title: "Обитель зла 3",
    original_title: "Uncharted",
    type: "фильм",
    year: "2007",
    country: "Германия, США, Франция, Австралия, Великобритания",
    director: "Рассел Малкэй",
    genres: ["ужасы", "боевик", "фантастика", "триллер"],
    actors: [8, 9, 10],
    slogan: "На этот раз без компромиссов",
    short_description:
      "Зомби-вирус охватывает мир, но Элис не прекращает борьбу с ним. Сиквел боевика с Миллой Йовович",
    description:
      "Ватануки Кимихиро — обычный старшеклассник. У него есть девушка, которая ему нравится, и друг, который ему не нравится. Но есть одно «но»: Ватануки может видеть странности, будь это духи или души умерших, и это ему очень мешает в обычной жизни. Однажды, убегая от духов, парень наткнулся на магазин ведьмы Юко, в котором исполняют желания. Юко пообещала, что духи не будут больше его беспокоить, а в качестве платы потребовала, чтобы Ватануки поработал у неё в магазине. Так начинается история о странностях и чудесах, существующих рядом с нами, но которые мы не замечаем.",
    preview_img:
      "https://images.kinorium.com/movie/poster/328871/w1500_2844921.jpg",
  },
];

export const actors: Actor[] = [
  {
    id: 0,
    name: "Саяка Охара",
    height: "1.58 м",
    birthdate: "6 декабря 1975 года",
    photo: "https://image.tmdb.org/t/p/w500/4WQXLzj0gjYqkYFcTTxAkIwedvr.jpg",
  },
  {
    id: 1,
    name: "Дзюн Фукуяма",
    height: "1.7 м",
    birthdate: "28 ноября 1978 г.",
    photo: "https://pbs.twimg.com/media/EDzc-f6X4AApI4k.jpg",
  },
  {
    id: 2,
    name: "Кадзуя Накаи",
    height: "1.69 м",
    birthdate: "25 ноября 1967 г.",
    photo: "https://gamebrott.com/wp-content/uploads/2020/05/asfa-1024x576.jpg",
  },
  {
    id: 3,
    name: "Сидзука Ито",
    height: "1.6 м",
    birthdate: "5 декабря 1980 г.",
    photo:
      "https://yandex-images.clstorage.net/R99sfI338/e5cd67zRnf/DvB2NZH4IbTp7YXJttgoBOyBFD57s51EfsqQo1Lfk9plSWDGmJma6Kv3VI0gQqiK6YIiluRDVx_g5nljJ9oCjUyoOnmK5m6-6O2GxL_DIQPniRs2f6eaRiadi_Zcn5iPLAhuwffx65jZzX28WDaDpvPUfMO1A05M-41AbluERewX31A8gOF7tPrqyMaU2AsL_8IRAWHRvjNT2-D-XIjIoBw9HpfS6-ys4vtLulYCsq_T81vAlDgDVe6fWABWtHTVDddlDInyba3f7PL5mvAYI9v4DzBu6qEtXsr79nW876cmMiW63e3Ck97iUKdzAaKB2ddw7pM-L2jIq00KeYZV2xndZj2T2WiL6M7Z6J3fKyz_-j0XSvm8OGfZ-NRVm8StFwIgtu7-x4jU-0elQBe5sOnURtSGAyxX7ZpUO2SzdPIJxGYCqelMg87q4dul_CYE1cscK1fTuDpNxuv1QZrunSQvK4Hb1-Sc4tpcm187jZD9-GDzuAw1Tu6raDpjpHfKDd9lJpPvfLvF9uHWoOYmK_LDEzhO24M4Zcro0WWK7Yg5Chm44df8r9b6RIZrAIip69Bz0qUNGEHFkFQ3R4tdyS7nRi6u5Vq_xv3t9IHFDzvj3zgBWdeYFETM1OBEnuWcISAcgtj36ZHhxF2BUAaAveHgc-OWFS5ryoh-DXuUUNwc8mYFl9pIm9fE5t-b0QIY0dkCF3v-rA9g4cbaSJbHjT0yOaT9x_ygw_dzvGAXnI_9zGrFhC8SZs62bQhIqVnaOtthPZruSI3V2MP7htkrJvLEEB121qw-ZunE51CL9ro_LDWA4NbJr9T6XIF1KZmk5_lg77gcJUDLnl0KR7tj_SvGTASC8le4387c07_RPQf79jUSRdKxM3Xc69FguNqtMTExkdHE_K7cylCGXR2fgeDAWcmUFyNewrd7LH2NQ-wa8mcBsdJnjcXT48WU3wYA29w_H17ZpCFi98rdW5c",
  },
  {
    id: 4,
    name: "Мика Кикути",
    height: "1.5 м",
    birthdate: "16 декабря 1983 г.",
    photo:
      "https://www.hdkinoteatr.com/uploads/people/2014-05/kp53723623b06cc.jpg",
  },
  {
    id: 5,
    name: "Том Холланд",
    height: "1.73 м",
    birthdate: "1 июня 1996 г.",
    photo:
      "https://yandex-images.clstorage.net/R99sfI338/e5cd67zRnf/DvB2NZH4IbTp7YXJttgoBOyBFD57s51EfsqQo1WJlYhmHmvDyZufu62lAIp0Sf7RvdEhkelKVBO5tytjJ9QOjE-lNHmK5m6-6O2GxL_DIQPniRs2f6eaRiadi_Zcn5iPLAhuwffx65jZzX28WDaDpvPUfMO1A05M-41AbluERewX31A8gOF7tPrqyMaU2AsL_8IRAWHRvjNT2-D-XIjIoBw9HpfS6-ys4vtLulYCsq_T81vAlDgDVe6fWABWtHTVDddlDInyba3f7PL5mvAYI9v4DzBu6qEtXsr79nW876cmMiW63e3Ck97iUKdzAaKB2ddw7pM-L2jIq00KeYZV2xndZj2T2WiL6M7Z6J3fKyz_-j0XSvm8OGfZ-NRVm8StFwIgtu7-x4jU-0elQBe5sOnURtSGAyxX7ZpUO2SzdPIJxGYCqelMg87q4dul_CYE1cscK1fTuDpNxuv1QZrunSQvK4Hb1-Sc4tpcm187jZD9-GDzuAw1Tu6raDpjpHfKDd9lJpPvfLvF9uHWoOYmK_LDEzhO24M4Zcro0WWK7Yg5Chm44df8r9b6RIZrAIip69Bz0qUNGEHFkFQ3R4tdyS7nRi6u5Vq_xv3t9IHFDzvj3zgBWdeYFETM1OBEnuWcISAcgtj36ZHhxF2BUAaAveHgc-OWFS5ryoh-DXuUUNwc8mYFl9pIm9fE5t-b0QIY0dkCF3v-rA9g4cbaSJbHjT0yOaT9x_ygw_dzvGAXnI_9zGrFhC8SZs62bQhIqVnaOtthPZruSI3V2MP7htkrJvLEEB121qw-ZunE51CL9ro_LDWA4NbJr9T6XIF1KZmk5_lg77gcJUDLnl0KR7tj_SvGTASC8le4387c07_RPQf79jUSRdKxM3Xc69FguNqtMTExkdHE_K7cylCGXR2fgeDAWcmUFyNewrd7LH2NQ-wa8mcBsdJnjcXT48WU3wYA29w_H17ZpCFi98rdW5c",
  },
  {
    id: 6,
    name: "Марк Уолберг",
    height: "1.73 м",
    birthdate: "5 июня 1971 г.",
    photo:
      "https://1.bp.blogspot.com/-1p2sLxpAnNk/YLvbL8L3hUI/AAAAAAAB4Gc/S5VOELYT-xkN00SFvWTKWGWKIZ9eW-4qwCLcBGAsYHQ/s1768/Mark%2BWahlberg14.jpg",
  },
  {
    id: 7,
    name: "Антонио Бандерас",
    height: "1.74 м",
    birthdate: "10 августа 1960 г.",
    photo:
      "https://avatars.mds.yandex.net/i?id=2a0000017a0cd73ba66623060b391e1b381a-4539108-images-thumbs&n=13&exp=1",
  },
  {
    id: 8,
    name: "Милла Йовович",
    height: "1.74 м",
    birthdate: "17 декабря 1975 г.",
    photo:
      "https://www.thefancarpet.com/wp-content/uploads/2014/11/Resident_Evil_Apocalypse_19167_High.jpg",
  },
  {
    id: 9,
    name: "Одед Фер",
    height: "1.87 м",
    birthdate: "23 ноября 1970 г.",
    photo:
      "https://yandex-images.clstorage.net/R99sfI338/e5cd67ikLK/COI4e8zqebj5_9nD-dsoErrWGzVr-YxVecvZuFaK18cuHT2vzMHJ9qqnCtkhQPjH-sBw-OUeVR605y18c9cEhkjwMGTQuj-77PuT1YiDKVT2zBs6aavFGnHKmaIHjMbSYkA2kp2B2br6_lexIEP62NXqU-aSJC91yJVWAGuDWNod6Sw_mdRQ-cT42OK4-B4J98UONnjolw1UwOr9WoLIsDo1Gbjs2-ew9vVZpFk0h4_w8FTSqRIZc8ahZwlLpH_ZPNJhJozGSJfJyOnbovArOf7WGC9d7q0yWuj51X641oE1Dgam4cr8uN_BfqNjO7yi__Z67ZULAm7joncnQYBU9zvUTRuq8l2d5vrI1bb6KAjk_R0JasyGI13HytpauuSmER0bs9jZ_5r_5lWpUgu5rszlf_afEhVs0LRsFnGDYs0u6U4kj8NErPvP6fym4yg33s05AUzovhBl5MfycIvFmgw3H7Hyxuy76-d_mWEmspn5zFziqTMOUs-YWDZlr0TqEOZXPYzyeK382OrEovgrE-TLCTlH9L4dYP7H3VeDyokVPySz2srvn8_3fIx8A4Cgw8xE0Z0TFk_7o10Pc4dXyw3nejKnyUSg2PfAx4HACBvZwS89RP-yP0Hd7s1Gn-GwAjM_n_vM067u43SYZCmFmvrsUe-qLQ9IwKVVG3m3V_o-_0wYqNFumuTozdKz1Sgw4P49GVXGuRRbyePudJnbpiAaC4Tf4cGU4utWiXg7oLzf3ETeiB4hdfC0SSllm07cLMVwFazvfZ_X1cTUlfwvCO3KPQ9X2pwwRsHK0FeEyawtMgu12enDqfr2Z756JayYws1x0Z8TDkjlikwCf65E9hD2RzOpx02d2Mf-84ThAjH11iI6XcyDGH_J3PFetuyjHjYWuMrc7J_KxUupdDioifPfRNCXIwJPzb5KJ3iXfdA8_UEtoO5ru-Lx3uK11Sk0xvYSD0fRvA5Ux-f2fpw",
  },
  {
    id: 10,
    name: "Эли Лартер",
    height: "1.73 м",
    birthdate: "28 февраля 1976 г.",
    photo: "https://yobte.ru/uploads/posts/2020-01/jeli-larter-43-foto-32.jpg",
  },
];
