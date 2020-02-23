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

const salesContainer = document.querySelector("#sales-list");
salesContainer.appendChild(getItems(0, renderCount, salesData, "sales"));
