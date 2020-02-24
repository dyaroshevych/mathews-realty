const salesData = [
  {
    name: "2003 Brazos Court",
    price: "$3,499,999",
    bedroomCount: "6",
    bathroomCount: "6",
    id: "1",
    link:
      "https://www.alliebeth.com/sales/detail/528-l-81691-14254660/2003-brazos-court-westlake-tx-76262"
  },
  {
    name: "1405 Post Oak Place",
    price: "$3,250,000",
    bedroomCount: "4",
    bathroomCount: "4",
    id: "2",
    link:
      "https://www.alliebeth.com/sales/detail/528-l-81691-14261155/1405-post-oak-place-westlake-tx-76262"
  },
  {
    name: "2322 Cedar Elm Terrace",
    price: "$1,860,000",
    bedroomCount: "4",
    bathroomCount: "5",
    id: "3",
    link:
      "https://www.alliebeth.com/sales/detail/528-l-81691-14254264/2322-cedar-elm-terrace-westlake-tx-76262"
  },
  {
    name: "2212 Cedar Elm Terrace",
    price: "$1,795,000",
    bedroomCount: "3",
    bathroomCount: "3",
    id: "4",
    link:
      "https://www.alliebeth.com/sales/detail/528-l-81691-14254295/2212-cedar-elm-terrace-westlake-tx-76262"
  }
];

const soldData = [
  {
    name: "1608 Enclave Court",
    price: "",
    bedroomCount: "6",
    bathroomCount: "5",
    id: "1",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-14062251/1608-enclave-court-southlake-tx-76092"
  },
  {
    name: "309 Gregg Court",
    price: "",
    bedroomCount: "4",
    bathroomCount: "3",
    id: "2",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-14137363/309-gregg-court-southlake-tx-76092"
  },
  {
    name: "2225 King Fisher Drive",
    price: "",
    bedroomCount: "4",
    bathroomCount: "4",
    id: "3",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-14127418/2225-king-fisher-drive-westlake-tx-76262"
  },
  {
    name: "2102 Rock Rose Court",
    price: "",
    bedroomCount: "5",
    bathroomCount: "5",
    id: "4",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13960556/2102-rock-rose-court-westlake-tx-76262"
  },
  {
    name: "2206 Malin Drive",
    price: "",
    bedroomCount: "5",
    bathroomCount: "4",
    id: "5",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-14150105/2206-malin-drive-trophy-club-tx-76262"
  },
  {
    name: "1817 Broken Bend Drive",
    price: "",
    bedroomCount: "5",
    bathroomCount: "5",
    id: "6",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-14135197/1817-broken-bend-drive-westlake-tx-76262"
  },
  {
    name: "917 Aspen Ridge Drive",
    price: "",
    bedroomCount: "5",
    bathroomCount: "5",
    id: "7",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-14079953/917-aspen-ridge-drive-southlake-tx-76092"
  },
  {
    name: "321 Montrose Lane",
    price: "",
    bedroomCount: "5",
    bathroomCount: "5",
    id: "8",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13979952/321-montrose-lane-southlake-tx-76092"
  },
  {
    name: "2320 Cedar Elm Terrace",
    price: "",
    bedroomCount: "3",
    bathroomCount: "3",
    id: "9",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13935292/2320-cedar-elm-terrace-westlake-tx-76262"
  },
  {
    name: "1707 Cypress Way",
    price: "",
    bedroomCount: "N/A",
    bathroomCount: "N/A",
    id: "10",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13835991/1707-cypress-way-westlake-tx-76262"
  },
  {
    name: "836 San Madrid Trail",
    price: "",
    bedroomCount: "4",
    bathroomCount: "3",
    id: "11",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13999147/836-san-madrid-trail-fort-worth-tx-76052"
  },
  {
    name: "648 Sheldon Drive",
    price: "",
    bedroomCount: "4",
    bathroomCount: "3",
    id: "12",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13979673/648-sheldon-drive-trophy-club-tx-76262"
  },
  {
    name: "2002 Nighthawk Court",
    price: "",
    bedroomCount: "4",
    bathroomCount: "4",
    id: "13",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13809565/2002-nighthawk-court-westlake-tx-76262"
  },
  {
    name: "817 Araf Avenue",
    price: "",
    bedroomCount: "4",
    bathroomCount: "3",
    id: "14",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13825274/817-araf-avenue-richardson-tx-75081"
  },
  {
    name: "416 Abbot Lane",
    price: "",
    bedroomCount: "4",
    bathroomCount: "3",
    id: "15",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13792892/416-abbot-lane-trophy-club-tx-76262"
  },
  {
    name: "517 Silver Chase Drive",
    price: "",
    bedroomCount: "5",
    bathroomCount: "4",
    id: "16",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13822080/517-silver-chase-drive-keller-tx-76248"
  },
  {
    name: "2212 Cedar Elm Terrace",
    price: "",
    bedroomCount: "3",
    bathroomCount: "3",
    id: "17",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13837160/2212-cedar-elm-terrace-westlake-tx-76262"
  },
  {
    name: "541 Round Hollow Lane",
    price: "",
    bedroomCount: "7",
    bathroomCount: "6",
    id: "18",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13750309/541-round-hollow-lane-southlake-tx-76092"
  },
  {
    name: "8132 La Frontera Trail",
    price: "",
    bedroomCount: "3",
    bathroomCount: "2",
    id: "19",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13802537/8132-la-frontera-trail-southeast-north-south-lynn-creek-arlington-tx-76002"
  },
  {
    name: "2211 Cedar Elm Terrace",
    price: "",
    bedroomCount: "3",
    bathroomCount: "3",
    id: "20",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13079160/2211-cedar-elm-terrace-westlake-tx-76262"
  },
  {
    name: "1700 Wisteria Way",
    price: "",
    bedroomCount: "5",
    bathroomCount: "4",
    id: "21",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13081866/1700-wisteria-way-westlake-tx-76262"
  },
  {
    name: "2211 Aberdeen Drive",
    price: "",
    bedroomCount: "5",
    bathroomCount: "4",
    id: "22",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-13100536/2211-aberdeen-drive-trophy-club-tx-76262"
  },
  {
    name: "104 Rolling Rock Drive",
    price: "",
    bedroomCount: "4",
    bathroomCount: "2",
    id: "23",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81688-12185568/104-rolling-rock-drive-trophy-club-tx-76262"
  },
  {
    name: "2201 King Fisher Drive",
    price: "",
    bedroomCount: "N/A",
    bathroomCount: "N/A",
    id: "24",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81691-1905212043000744/2201-king-fisher-drive-westlake-tx"
  },
  {
    name: "465 Verbena Lane",
    price: "",
    bedroomCount: "N/A",
    bathroomCount: "N/A",
    id: "25",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81691-1806190210548385/465-verbena-lane-oa"
  },
  {
    name: "311 Pinyon",
    price: "",
    bedroomCount: "N/A",
    bathroomCount: "N/A",
    id: "26",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81691-1811042310288355/311-pinyon-frisco-tx-75068"
  },
  {
    name: "2003 Scissortail Place",
    price: "",
    bedroomCount: "N/A",
    bathroomCount: "N/A",
    id: "27",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81691-1806190213414685/2003-scissortail-place-oa"
  },
  {
    name: "2003 White Wing Cove",
    price: "",
    bedroomCount: "N/A",
    bathroomCount: "N/A",
    id: "28",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81691-1905212042083685/2003-white-wing-cove-westlake-tx"
  },
  {
    name: "2002 Scissortail Place",
    price: "",
    bedroomCount: "N/A",
    bathroomCount: "N/A",
    id: "29",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81691-1909160158124647/2002-scissortail-place-westlake-tx-76262"
  },
  {
    name: "1817 Broken Bend",
    price: "",
    bedroomCount: "N/A",
    bathroomCount: "N/A",
    id: "30",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81691-1806190212537306/1817-broken-bend-oa"
  },
  {
    name: "2005 Nighthawk",
    price: "",
    bedroomCount: "N/A",
    bathroomCount: "N/A",
    id: "31",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81691-1811042313522527/2005-nighthawk-westlake-tx-76262"
  },
  {
    name: "1711 Wisteria Way",
    price: "",
    bedroomCount: "N/A",
    bathroomCount: "N/A",
    id: "32",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81691-1806190212056340/1711-wisteria-way-oa"
  },
  {
    name: "2313 Cedar Elm",
    price: "",
    bedroomCount: "N/A",
    bathroomCount: "N/A",
    id: "33",
    link:
      "https://www.alliebeth.com/sold/detail/528-l-81691-1811042312485398/2313-cedar-elm-westlake-tx-76262"
  }
];

const getItems = (startIdx, endIdx, data, linkIdentifier, refIdentifier) => {
  endIdx = Math.min(endIdx, data.length);
  if (endIdx >= data.length) {
    const expandButton = document.querySelector(
      `#${linkIdentifier}-listings-button`
    );
    if (expandButton) {
      expandButton.style.display = "none";
    }
    endIdx = data.length;
  }
  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("listings__list");

  for (let i = startIdx; i < endIdx; i++) {
    const item = document.createElement("div");
    item.classList.add("listings__item");

    const itemHeadingContainer = document.createElement("div");
    itemHeadingContainer.classList.add("listings__item-heading-container");

    const itemImage = document.createElement("img");
    itemImage.classList.add("listings__item-img");
    itemImage.setAttribute(
      "src",
      `${refIdentifier}img/${linkIdentifier}/${linkIdentifier}-${data[i].id}.jpg`
    );
    itemImage.setAttribute("alt", `${data[i].name}`);
    itemHeadingContainer.appendChild(itemImage);

    const itemHeadingLink = document.createElement("a");
    itemHeadingLink.setAttribute("href", `${data[i].link}`);
    const itemHeading = document.createElement("h3");
    itemHeading.classList.add("heading-tertiary");
    itemHeading.innerHTML = data[i].name;
    itemHeadingLink.appendChild(itemHeading);
    itemHeadingContainer.appendChild(itemHeadingLink);

    const itemSubheading = document.createElement("span");
    itemSubheading.classList.add("heading-tertiary-subheading");
    itemSubheading.innerHTML = data[i].price;
    itemHeadingContainer.appendChild(itemSubheading);

    item.appendChild(itemHeadingContainer);

    const itemInfo = document.createElement("div");
    itemInfo.classList.add("listings__item-info-container");

    const itemFeaturesList = document.createElement("ul");
    itemFeaturesList.classList.add("listings__item-features-list");

    const bedInfo = document.createElement("li");
    bedInfo.classList.add("listings__item-features-item");

    const bedInfoImage = document.createElement("img");
    bedInfoImage.classList.add("listings__item-features-item-img");
    bedInfoImage.setAttribute("src", `${refIdentifier}img/bedroom.svg`);
    bedInfo.appendChild(bedInfoImage);

    const bedInfoCount = document.createElement("span");
    bedInfoCount.classList.add("listings__item-features-item-text");
    bedInfoCount.innerHTML = data[i].bedroomCount;
    bedInfo.appendChild(bedInfoCount);

    itemFeaturesList.appendChild(bedInfo);

    const bathInfo = document.createElement("li");
    bathInfo.classList.add("listings__item-features-item");

    const bathInfoImage = document.createElement("img");
    bathInfoImage.classList.add("listings__item-features-item-img");
    bathInfoImage.setAttribute("src", `${refIdentifier}img/bathroom.svg`);
    bathInfo.appendChild(bathInfoImage);

    const bathInfoCount = document.createElement("span");
    bathInfoCount.classList.add("listings__item-features-item-text");
    bathInfoCount.innerHTML = data[i].bathroomCount;
    bathInfo.appendChild(bathInfoCount);

    itemFeaturesList.appendChild(bathInfo);

    itemInfo.appendChild(itemFeaturesList);

    const itemButton = document.createElement("a");
    itemButton.classList.add("btn", "btn--red", "btn--medium");
    itemButton.setAttribute("href", `${data[i].link}`);
    itemButton.innerHTML = "Details";
    itemInfo.appendChild(itemButton);

    item.appendChild(itemInfo);
    itemsContainer.appendChild(item);
  }
  if (linkIdentifier === "sold") {
    renderedSold += endIdx - startIdx;
  } else {
    renderedSales += endIdx - startIdx;
  }

  return itemsContainer;
};

let renderedSales = 0;
let renderedSold = 0;

const salesContainer = document.querySelector("#sales-list");
salesContainer.appendChild(
  getItems(0, renderCount, salesData, "sales", refIdentifier)
);

const soldContainer = document.querySelector("#sold-list");
soldContainer.appendChild(
  getItems(0, renderCount, soldData, "sold", refIdentifier)
);
