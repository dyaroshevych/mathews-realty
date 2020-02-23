const blogData = [
  {
    heading: `Our thoughts on Fundrise’s 2019 performance and strategic
    investing in the years ahead`,
    date: "Jan 23, 2020",
    id: "1"
  }
];

let renderedPosts = 0;
let blogRenderCount = 1;
const blogContainer = document.querySelector("#blog-container");

blogContainer.appendChild(getItems(0, blogRenderCount, blogData));
