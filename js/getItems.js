const getItems = (startIdx, endIdx, data, linkIdentifier) => {
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
      `/img/${linkIdentifier}/${linkIdentifier}-${data[i].id}.jpg`
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
    bedInfoImage.setAttribute("src", "/img/bedroom.svg");
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
    bathInfoImage.setAttribute("src", "/img/bathroom.svg");
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
