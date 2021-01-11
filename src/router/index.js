import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/izhrana',
    name: 'Izhrana',
    component: () => import('../views/Izhrana/Izhrana.vue'),
  },
  {
    path: '/izhrana/zelenchyci',
    name: 'Zelenchyci',
    component: () => import('../views/Izhrana/Zelenchyci/Zelenchyci.vue'),
  },
  {
    path: '/izhrana/zelenchyci/domatut-moq-priqtel',
    name: 'DomatutMoqPriqtel',
    component: () => import('../views/Izhrana/Zelenchyci/DomatutMoqPriqtel.vue'),
  },
  {
    path: '/izhrana/plodove',
    name: 'Plodove',
    component: () => import('../views/Izhrana/Plodove/Plodove.vue'),
  },
  {
    path: '/izhrana/plodove/avokado',
    name: 'Avokado',
    component: () => import('../views/Izhrana/Plodove/Avokado.vue'),
  },
  {
    path: '/izhrana/bilki',
    name: 'Bilki',
    component: () => import('../views/Izhrana/Bilki/Bilki.vue'),
  },
  {
    path: '/izhrana/pcheli',
    name: 'Pcheli',
    component: () => import('../views/Izhrana/Pcheli/Pcheli.vue'),
  },
  {
    path: '/izhrana/recepti',
    name: 'Recepti',
    component: () => import('../views/Izhrana/Recepti/Recepti.vue'),
  },
  {
    path: '/izhrana/recepti/posten-bql-sos-s-chesun',
    name: 'PostenBqlSosChesun',
    component: () => import('../views/Izhrana/Recepti/PostenBqlSosChesun.vue'),
  },
  {
    path: '/izhrana/recepti/pecheni-kiyftenca-ot-leshta',
    name: 'PecheniKiyftencaOtLeshta',
    component: () => import('../views/Izhrana/Recepti/PecheniKiyftencaOtLeshta.vue'),
  },
  {
    path: '/izhrana/recepti/kak-da-si-napravim-kombycha',
    name: 'KakDaSiNapravimKombycha',
    component: () => import('../views/Izhrana/Recepti/KakDaSiNapravimKombycha.vue'),
  },
  {
    path: '/izhrana/recepti/domashen-shokolad-bez-zahar',
    name: 'DomashenShokoladBezZahar',
    component: () => import('../views/Izhrana/Recepti/DomashenShokoladBezZahar.vue'),
  },
  {
    path: '/izhrana/recepti/bananov-keks-bez-zahar',
    name: 'BananovKeksBezZahar',
    component: () => import('../views/Izhrana/Recepti/BananovKeksBezZahar.vue'),
  },
  {
    path: '/izhrana/gubi',
    name: 'Gubi',
    component: () => import('../views/Izhrana/Gubi/Gubi.vue'),
  },
  {
    path: '/dom',
    name: 'Dom',
    component: () => import('../views/Dom/Dom.vue')
  },
  {
    path: '/dom/stroitelstvo',
    name: 'Stroitelstvo',
    component: () => import('../views/Dom/Stroitelstvo/Stroitelstvo.vue')
  },
  {
    path: '/dom/vodosnabdqvane',
    name: 'Vodosnabdqvane',
    component: () => import('../views/Dom/Vodosnabdqvane/Vodosnabdqvane.vue')
  },
  {
    path: '/dom/elektrichestvo',
    name: 'Elektrichestvo',
    component: () => import('../views/Dom/Elektrichestvo/Elektrichestvo.vue')
  },
  {
    path: '/dom/otoplenie',
    name: 'Otoplenie',
    component: () => import('../views/Dom/Otoplenie/Otoplenie.vue')
  },
  {
    path: '/znanie',
    name: 'Znanie',
    component: () => import('../views/Znanie/Znanie.vue')
  },
  {
    path: '/znanie/domashno-oby4enie',
    name: 'DomashnoOby4enie',
    component: () => import('../views/Znanie/DomashnoOby4enie/DomashnoOby4enie.vue')
  },
  {
    path: '/znanie/fizichesko-i-psihichesko-zdrave',
    name: 'FizicheskoPsihicheskoZdrave',
    component: () => import('../views/Znanie/FizicheskoPsihicheskoZdrave/FizicheskoPsihicheskoZdrave.vue')
  },
  {
    path: '/znanie/dyhoven-svqt',
    name: 'DyhovenSvqt',
    component: () => import('../views/Znanie/DyhovenSvqt/DyhovenSvqt.vue')
  },
  {
    path: '/znanie/videa',
    name: 'Videa',
    component: () => import('../views/Znanie/Videa/Videa.vue')
  },
  {
    path: '/znanie/videa/kak-se-pravi-kashkaval',
    name: 'KakSePraviKashkaval',
    component: () => import('../views/Znanie/Videa/KakSePraviKashkaval.vue')
  },
  {
    path: '/znanie/videa/stroene-na-koliba-ot-kirpich',
    name: 'StroeneNaKolibaOtKirpich',
    component: () => import('../views/Znanie/Videa/StroeneNaKolibaOtKirpich.vue')
  },
  {
    path: '/znanie/biblioteka',
    name: 'Biblioteka',
    component: () => import('../views/Znanie/Biblioteka/Biblioteka.vue')
  },
  {
    path:
      "/znanie/biblioteka/iziskvaniq-za-ystroistvoto-i-eksploataciqta-na-gubarnici",
    name: 'IziskvaniqZaYstroistvotoEksploataciqtaNaGubarnici',
    component: () => import('../views/Znanie/Biblioteka/IziskvaniqZaYstroistvotoEksploataciqtaNaGubarnici.vue')
  },
  {
    path: "/znanie/biblioteka/otglejdane-na-konop",
    name: 'OtglejdaneNaKonop',
    component: () => import('../views/Znanie/Biblioteka/OtglejdaneNaKonop.vue')
  },
  {
    path: "/znanie/biblioteka/stroitelstvo-s-estestveni-materiali",
    name: 'StroitelstvoEstestveniMateriali',
    component: () => import('../views/Znanie/Biblioteka/StroitelstvoEstestveniMateriali.vue')
  },
  {
    path: "/znanie/biblioteka/666-suveta-za-liybitelq-gradinar",
    name: '666SuvetaZaLiybitelqGradinar',
    component: () => import('../views/Znanie/Biblioteka/666SuvetaZaLiybitelqGradinar.vue')
  },
  {
    path: "/znanie/biblioteka/revoliyciqta-na-edna-slamka",
    name: 'RevoliyciqtaNaEdnaSlamka',
    component: () => import('../views/Znanie/Biblioteka/RevoliyciqtaNaEdnaSlamka.vue')
  },
  {
    path: "/znanie/biblioteka/otkus-ot-zakon-za-sobstvenostta",
    name: 'OtkusOtZakonZaSobstvenostta',
    component: () => import('../views/Znanie/Biblioteka/OtkusOtZakonZaSobstvenostta.vue')
  },
  {
    path: '/znanie/polezni-vruzki',
    name: 'PolezniVruzki',
    component: () => import('../views/Znanie/PolezniVruzki/PolezniVruzki.vue')
  },
  {
    path: "/znanie/polezni-vruzki/dokymentalnite-filmi-na-kolibka-kom",
    name: 'DokymentalniteFilmiNaKolibkaKom',
    component: () => import('../views/Znanie/PolezniVruzki/DokymentalniteFilmiNaKolibkaKom.vue')
  },
  {
    path: "/znanie/polezni-vruzki/dyhovno-razvitie",
    name: 'DyhovnoRazvitie',
    component: () => import('../views/Znanie/PolezniVruzki/DyhovnoRazvitie.vue')
  },
  {
    path: "/znanie/polezni-vruzki/bibliotekata-na-spirala-net",
    name: 'BibliotekataNaSpiralaNet',
    component: () => import('../views/Znanie/PolezniVruzki/BibliotekataNaSpiralaNet.vue')
  },
  {
    path: '/za-nas',
    name: 'ZaNas',
    component: () => import('../views/ZaNas.vue')
  },
  {
    path: '/kayzi',
    name: 'Kayzi',
    component: () => import('../views/Kayzi.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
