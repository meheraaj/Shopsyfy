async function fetchData() {
  try {
    const response = await fetch(
      "https://product-api.battleshipnb.workers.dev/"
    );
    if (!response.ok) throw new Error("Status Code " + response.status);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fillDatas() {
  let myContent = await await fetchData();
  let blgoPosts = document.querySelector("#blgoPosts");
  let saleOFF = document.querySelector("#scroll-container");
  let trendingProducts = document.querySelector("#trendingProducts");

  //Trending PRODUCTs
  for (let i = 0; i < myContent.trendingProducts.length; i++) {
    const p = myContent.trendingProducts[i];

    let tmpHtml = `

             <div class="sale__item">
                                <div class="product__wrapper mb-16">
                                    <div class="product__thumb">
                                        <a href="product-details.html" class="w-img block">
                                            <img src="${
                                              myContent["trendingProducts"][i][
                                                "image1"
                                              ]
                                            }"
                                                alt="product-img" draggable="false">
                                            <img class="product__thumb-2"
                                                src="${
                                                  myContent["trendingProducts"][
                                                    i
                                                  ]["image2_hover"]
                                                }"
                                                alt="product-img" draggable="false">
                                        </a>
                                        <div class="product__action transition-3">
                                            <a href="#" data-bs-toggle="tooltip" data-placement="top"
                                                title="Add to Wishlist">
                                                <i class="fal fa-heart"></i>
                                            </a>
                                            <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare">
                                                <i class="fal fa-sliders-h"></i>
                                            </a>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                <i class="fal fa-search"></i>
                                            </a>
                                        </div>
                                         <div class="product__sale">
                                            <span class="new">${
                                              myContent["trendingProducts"][i][
                                                "saleInfo"
                                              ]["new"] ?? ""
                                            }</span>
                                            <span class="percent">${
                                              myContent["trendingProducts"][i][
                                                "saleInfo"
                                              ]["percent"] ?? ""
                                            }</span>
                                        </div>
                                    </div>
                                    <div class="product__content relative">
                                        <div class="product__content-inner">
                                            <h4><a href="product-details.html">${
                                              myContent["trendingProducts"][i][
                                                "title"
                                              ]
                                            }</a></h4>
                                            <div class="product__price transition-3">
                                                <span>${
                                                  myContent["trendingProducts"][
                                                    i
                                                  ]["price"]
                                                }</span>
                                                <span class="old-price">${
                                                  myContent["trendingProducts"][
                                                    i
                                                  ]["oldPrice"]
                                                }</span>
                                            </div>
                                        </div>
                                        <div class="add-cart absolute transition-3">
                                            <button class="addCartBtn" data-product='${JSON.stringify(
                                              p
                                            ).replace(/'/g, "&apos;")}'
>+ Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
      `;

    trendingProducts.innerHTML += tmpHtml;
  }

  //   saleOFF
  for (let i = 0; i < myContent.saleOffProducts.length; i++) {
    const p = myContent.saleOffProducts[i];

    let tmpHtml = `
 <div class="sale__item flex-shrink-0 ">
                                <div class="product__wrapper mb-16">
                                    <div class="product__thumb">
                                        <a href="product-details.html" class="w-img block">
                                            <img src="${
                                              myContent["saleOffProducts"][i][
                                                "image1"
                                              ]
                                            }"
                                                alt="product-img" draggable="false">
                                            <img class="product__thumb-2"
                                                src="${
                                                  myContent["saleOffProducts"][
                                                    i
                                                  ]["image2_hover"]
                                                }"
                                                alt="product-img" draggable="false">
                                        </a>
                                        <div class="product__action transition-3">
                                            <a href="#" data-bs-toggle="tooltip" data-placement="top"
                                                title="Add to Wishlist">
                                                <i class="fal fa-heart"></i>
                                            </a>
                                            <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare">
                                                <i class="fal fa-sliders-h"></i>
                                            </a>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#productModalId">
                                                <i class="fal fa-search"></i>
                                            </a>
                                        </div>
                                        <div class="product__sale ">
                                            <span class="new">${
                                              myContent["saleOffProducts"][i][
                                                "saleInfo"
                                              ]["new"] ?? ""
                                            }</span>
                                            <span class="percent">${
                                              myContent["saleOffProducts"][i][
                                                "saleInfo"
                                              ]["percent"] ?? ""
                                            }</span>
                                        </div>
                                    </div>
                                    <div class="product__content relative">
                                        <div class="product__content-inner">
                                            <h4><a href="shop-details.html">${
                                              myContent["saleOffProducts"][i][
                                                "title"
                                              ]
                                            }</a></h4>
                                            <div class="product__price transition-3">
                                                <span>${
                                                  myContent["saleOffProducts"][
                                                    i
                                                  ]["price"]
                                                }</span>
                                                <span class="old-price">${
                                                  myContent["saleOffProducts"][
                                                    i
                                                  ]["oldPrice"]
                                                }</span>
                                            </div>
                                        </div>
                                        <div class="add-cart absolute transition-3">
                                            <button class="addCartBtn" data-product='${JSON.stringify(
                                              p
                                            ).replace(/'/g, "&apos;")}'
>+ Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
      `;

    saleOFF.innerHTML += tmpHtml;
  }

  //BLOG ITEMS
  for (let i = 0; i < myContent.blogPosts.length; i++) {
    let tmpHtml = `

            <div class="swiper-slide blog__item h-auto">
                              <div class="blog__thumb overflow-hidden w-full h-auto">
                                  <a href="blog-details.html" class="w-img ">
                                      <img src="${myContent["blogPosts"][i]["image"]}" alt="${myContent["blogPosts"][i]["title"]}" draggable="false"
                                          class="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.05]">
                                  </a>
                              </div>
                              <div class="blog__content p-4 text-left">
                                  <h4 class="text-lg font-semibold mb-2"><a href="blog-details.html"
                                          class="text-gray-900 hover:text-bc8246 transition-colors">${myContent["blogPosts"][i]["title"]}</a></h4>
                                  <div class="blog__meta text-xs text-gray-500 mb-3">
                                      <span>By <a href="#" class="hover:text-bc8246">${myContent["blogPosts"][i]["author"]}</a></span>
                                      <span class="ml-3">${myContent["blogPosts"][i]["date"]}</span>
                                  </div>
                                  <p class="text-sm text-gray-600 mb-5">${myContent["blogPosts"][i]["excerpt"]}</p>
                                  <a href="blog-details.html"
                                      class="os-btn !w-auto bg-transparent border-gray-300 text-gray-900 hover:text-white hover:bg-bc8246 hover:border-bc8246">read
                                      more</a>
                              </div>
                          </div>

      `;

    blgoPosts.innerHTML += tmpHtml;
  }
  const scrollContainer = document.querySelector("#scroll-container");
  // Wrap your existing items into Swiper wrapper and slides dynamically
  const wrapper = document.createElement("div");
  wrapper.classList.add("swiper-wrapper");

  // Convert each sale__item to a swiper-slide
  const items = Array.from(scrollContainer.children);
  items.forEach((item) => {
    item.classList.add("swiper-slide");
    wrapper.appendChild(item);
  });

  scrollContainer.innerHTML = ""; // clear existing
  scrollContainer.classList.add("swiper"); // make container swiper
  scrollContainer.appendChild(wrapper);

  // Optional pagination & navigation
  const pagination = document.createElement("div");
  pagination.classList.add("swiper-pagination");
  const next = document.createElement("div");
  next.classList.add("swiper-button-next");
  const prev = document.createElement("div");
  prev.classList.add("swiper-button-prev");

  scrollContainer.appendChild(pagination);
  scrollContainer.appendChild(next);
  scrollContainer.appendChild(prev);

  // Initialize Swiper
  new Swiper("#scroll-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });
}
fillDatas();

