export const articlesHolder = {
  izhrana: {
    zelenchyci: [
      {
        text: "Доматът, моя приятел",
        path: "/izhrana/zelenchyci/domatut-moq-priqtel",
      },
    ],
    pcheli: [
      {
        text: "НЯМА НАМЕРЕНИ СТАТИИ",
        path: "/",
      },
    ],
    plodove: [
      {
        text: "Как Да Отгледаме Авокадо от Семка Вкъщи",
        path: "/izhrana/plodove/avokado",
      },
    ],
    recepti: [
      {
        text: "Постен бял сос с чесън",
        path: "/izhrana/recepti/posten-bql-sos-s-chesun",
      },
      {
        text: "Печени кюфтенца от леща",
        path: "/izhrana/recepti/pecheni-kiyftenca-ot-leshta",
      },
      {
        text: "Как да си направим комбуча? Пълен наръчник със снимки",
        path: "/izhrana/recepti/kak-da-si-napravim-kombycha",
      },
      {
        text: "Домашен шоколад без захар",
        path: "/izhrana/recepti/domashen-shokolad-bez-zahar",
      },
      {
        text: "Бананов кекс без захар",
        path: "/izhrana/recepti/bananov-keks-bez-zahar",
      },
    ],
    bilki: [
      {
        text: "НЯМА НАМЕРЕНИ СТАТИИ",
        path: "/",
      },
    ],
    gubi: [
      {
        text: "НЯМА НАМЕРЕНИ СТАТИИ",
        path: "/",
      },
    ],
  },
  dom: {
    stroitelstvo: [
      {
        text: "НЯМА НАМЕРЕНИ СТАТИИ",
        path: "/",
      },
    ],
    elektrichestvo: [
      {
        text: "НЯМА НАМЕРЕНИ СТАТИИ",
        path: "/",
      },
    ],
    vodosnabdqvane: [
      {
        text: "НЯМА НАМЕРЕНИ СТАТИИ",
        path: "/",
      },
    ],
    otoplenie: [
      {
        text: "НЯМА НАМЕРЕНИ СТАТИИ",
        path: "/",
      },
    ],
  },
  znanie: {
    domashnoObychenie: [
      {
        text: "НЯМА НАМЕРЕНИ СТАТИИ",
        path: "/",
      },
    ],
    videa: [
      {
        text: "Как се прави кашкавал",
        path: "/znanie/videa/kak-se-pravi-kashkaval",
      },
      {
        text: "Строене на колиба от кирпич, с огнище и комин",
        path: "/znanie/videa/stroene-na-koliba-ot-kirpich",
      },
    ],
    fizicheskoPsihicheskoZdrave: [
      {
        text: "НЯМА НАМЕРЕНИ СТАТИИ",
        path: "/",
      },
    ],
    biblioteka: [
      {
        text:
          "Изисквания за устройството и експлоатацията на гъбарници НАРЕДБА № 7",
        path:
          "/znanie/biblioteka/iziskvaniq-za-ystroistvoto-i-eksploataciqta-na-gubarnici",
      },
      {
        text: "Отглеждане на коноп",
        path: "/znanie/biblioteka/otglejdane-na-konop",
      },
      {
        text: "Строителство с естествени материали",
        path: "/znanie/biblioteka/stroitelstvo-s-estestveni-materiali",
      },
      {
        text: "666 съвета за любителя градинар",
        path: "/znanie/biblioteka/666-suveta-za-liybitelq-gradinar",
      },
      {
        text: "Революцията на една сламка",
        path: "/znanie/biblioteka/revoliyciqta-na-edna-slamka",
      },
      {
        text: "Откъс от закон за собствеността",
        path: "/znanie/biblioteka/otkus-ot-zakon-za-sobstvenostta",
      },
    ],
    dyhovenSvqt: [
      {
        text: "НЯМА НАМЕРЕНИ СТАТИИ",
        path: "/",
      },
    ],
    polezniVruzki: [
      {
        text: "Документалните филми на колибка.ком",
        path: "/znanie/polezni-vruzki/dokymentalnite-filmi-na-kolibka-kom",
      },
      {
        text: "Духовно развитие",
        path: "/znanie/polezni-vruzki/dyhovno-razvitie",
      },
      {
        text: "Библиотеката на спирала.нет",
        path: "/znanie/polezni-vruzki/bibliotekata-na-spirala-net",
      },
    ],
  },
}

const result = []
const findArticles = (items) => {
  if (Array.isArray(items)) {
    const filtered = items.filter(info => info.path !== '/')
    return result.push(...filtered)
  }

  const keys = Object.keys(items)
  keys.forEach(key => {
    findArticles(items[key])
  })
}

findArticles(articlesHolder)

export const allArticles = result