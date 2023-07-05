<template>
  <!-- <div>
    <div class="flex_blocks flex-propts">
      <div>
        <h4>Properties for sale in UAE</h4>
      </div>
      <div>
        <p>
          sort by:
          <select style="padding: 5px 30px">
            <option class="options" value="Property type">Featured</option>
            <option class="options" value="volvo">Volvo</option>
          </select>
        </p>
      </div>
    </div>

    <div class="flex_blocks">
      <template v-for="property in properties" :key="property">
        <div class="main_div1">
          <router-link
            style="text-decoration: none; color: black"
            to="/property/1/show"
          >
            <div class="slideshow-container">
              <div class="width30">
                <img :src="property.img" class="cards-img" />
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    BY {{ property.by_whom }}
                  </p>
                  <h5 style="color: #007ea8; margin: 0">
                    {{ property.title }}
                  </h5>
                  <p1>{{ property.description }}</p1>
                  <p2 style="color: #7d8183">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin-right: 5px"
                    ></i>
                    {{ property.location }}
                  </p2>
                  <p style="margin: 0">
                    169 units: <b>studio to 3 bedrooms</b>
                  </p>
                </div>
                <div
                  style="
                    margin-left: 20px;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                  "
                >
                  <p style="margin: 0">
                    <b>Form {{ property.price }}</b>
                  </p>
                  <button class="learn-bth">Learn more</button>
                </div>
              </div>

              <div class="yt">
                <img
                  src="https://www.propertyfinder.ae/broker/8/178/98/MODE/eb83ee/1605-logo.webp?ctr=ae"
                />
              </div>
            </div>
          </router-link>
        </div>
      </template>
    </div>
  </div> -->
  <div class="after_header">
    <div><h4>Properties for sale in UAE</h4></div>
    <div style="display: flex">
      <p>89110 results</p>
      <p class="new-res">1602 new</p>
    </div>
    <div class="flex_block">
      <div class="map_view">
        <button class="button4">
          <i
            class="fa fa-map-marker"
            style="font-size: 17px; margin-right: 5px"
          ></i
          >Map view
        </button>
        <button class="button4" style="margin-left: 10px">
          <span
            class="fa fa-star"
            style="font-size: 17px; margin-right: 5px"
          ></span
          >Save Search
        </button>
      </div>
      <div>
        <p>
          sort by:
          <select style="padding: 5px 30px">
            <option class="options" value="Property type">Featured</option>
            <option class="options" value="volvo">Volvo</option>
          </select>
        </p>
      </div>
    </div>

    <div id="villa" class="villas">
      <div style="width: 80%">
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-left: 10px;
          "
        >
          <p class="underline">
            <a href="#" style="text-decoration: none; color: #007ea8"
              >Apartments</a
            >(12345)
          </p>
          <p class="underline">
            <a href="#" style="text-decoration: none; color: #007ea8">villa</a
            >(12345)
          </p>
          <p class="underline">
            <a href="#" style="text-decoration: none; color: #007ea8"
              >Townhouses</a
            >(12345)
          </p>
          <p class="underline">
            <a href="#" style="text-decoration: none; color: #007ea8">Land</a
            >(12345)
          </p>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-left: 10px;
          "
        >
          <p class="underline">
            <a href="#" style="text-decoration: none; color: #007ea8"
              >Penthouses</a
            >(12345)
          </p>
          <p class="underline">
            <a href="#" style="text-decoration: none; color: #007ea8"
              >Duplexes</a
            >(12345)
          </p>
          <p class="underline">
            <a href="#" style="text-decoration: none; color: #007ea8"
              >Hotel Apartments</a
            >(12345)
          </p>
          <p class="underline">
            <a href="#" style="text-decoration: none; color: #007ea8"
              >Whole Buildings</a
            >(12345)
          </p>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-left: 10px;
          "
        >
          <p class="underline">
            <a href="#" style="text-decoration: none; color: #007ea8"
              >Compounds</a
            >(12345)
          </p>
          <p class="underline">
            <a href="#" style="text-decoration: none; color: #007ea8"
              >Full Floors</a
            >(12345)
          </p>
          <p class="underline">
            <a href="#" style="text-decoration: none; color: #007ea8"
              >Bulk Sale Units</a
            >(12345)
          </p>
          <p class="underline">
            <a href="#" style="text-decoration: none; color: #007ea8"
              >Bungalows</a
            >(12345)
          </p>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-left: 10px;
          "
        >
          <p class="underline">
            <a href="#" style="text-decoration: none; color: #007ea8"
              >Half Floors</a
            >(12345)
          </p>
        </div>
      </div>
      <div style="width: 20%">
        <p
          onclick="function7() "
          id="style1"
          style="position: absolute; bottom: 0; right: 15px; cursor: pointer"
        >
          show all &nbsp;<i
            class="fa fa-angle-down"
            style="font-size: 24px"
          ></i>
        </p>
        <p
          onclick="function8()"
          id="style2"
          style="
            position: absolute;
            bottom: 0;
            right: 15px;
            display: none;
            cursor: pointer;
          "
        >
          show less &nbsp;
        </p>
      </div>
    </div>
    <!-- card section starts -->
    <div style="display: flex; justify-content: space-between">
      <div class="cards-section">
        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav" onclick="displayblock()">
                    <input class="input1" type="checkbox" />
                    <i class="logo_botton">Intrested</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav">
                    <input class="input2" type="checkbox" />
                    <i class="logo_botton">Chat</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav" onclick="displayblock()">
                    <input class="input1" type="checkbox" />
                    <i class="logo_botton">Intrested</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <!-- 4 -->
        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav">
                    <input class="input2" type="checkbox" />
                    <i class="logo_botton">Chat</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav" onclick="displayblock()">
                    <input class="input1" type="checkbox" />
                    <i class="logo_botton">Intrested</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav">
                    <input class="input2" type="checkbox" />
                    <i class="logo_botton">Chat</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav" onclick="displayblock()">
                    <input class="input1" type="checkbox" />
                    <i class="logo_botton">Intrested</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>
        <!-- 8 -->
        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav">
                    <input class="input2" type="checkbox" />
                    <i class="logo_botton">Chat</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav" onclick="displayblock()">
                    <input class="input1" type="checkbox" />
                    <i class="logo_botton">Intrested</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav">
                    <input class="input2" type="checkbox" />
                    <i class="logo_botton">Chat</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav" onclick="displayblock()">
                    <input class="input1" type="checkbox" />
                    <i class="logo_botton">Intrested</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <!-- 12 -->
        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav">
                    <input class="input2" type="checkbox" />
                    <i class="logo_botton">Chat</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav" onclick="displayblock()">
                    <input class="input1" type="checkbox" />
                    <i class="logo_botton">Intrested</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav">
                    <input class="input2" type="checkbox" />
                    <i class="logo_botton">Chat</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav" onclick="displayblock()">
                    <input class="input1" type="checkbox" />
                    <i class="logo_botton">Intrested</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav">
                    <input class="input2" type="checkbox" />
                    <i class="logo_botton">Chat</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav" onclick="displayblock()">
                    <input class="input1" type="checkbox" />
                    <i class="logo_botton">Intrested</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav">
                    <input class="input2" type="checkbox" />
                    <i class="logo_botton">Chat</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav" onclick="displayblock()">
                    <input class="input1" type="checkbox" />
                    <i class="logo_botton">Intrested</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav">
                    <input class="input2" type="checkbox" />
                    <i class="logo_botton">Chat</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav" onclick="displayblock()">
                    <input class="input1" type="checkbox" />
                    <i class="logo_botton">Intrested</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav">
                    <input class="input2" type="checkbox" />
                    <i class="logo_botton">Chat</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav" onclick="displayblock()">
                    <input class="input1" type="checkbox" />
                    <i class="logo_botton">Intrested</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav">
                    <input class="input2" type="checkbox" />
                    <i class="logo_botton">Chat</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div class="main_div1">
          <a
            href="apartmant_view.html"
            style="text-decoration: none; color: black"
            ><div class="slideshow-container">
              <div class="width30">
                <div
                  id="carousel-2"
                  class="carousel slide"
                  data-bs-touch="true"
                  data-bs-interval="false"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        style="width: 100%"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../assets/Images/adds_image1.png"
                        class="d-block w-100 slider"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="content">
                <div style="margin-left: 20px">
                  <p style="font-size: 13px; color: #7d8183; margin: 0">
                    Appartment
                  </p>
                  <div style="display: flex; justify-content: space-between">
                    <h3>2,500,000 AED</h3>
                    <div style="margin-right: 10px">
                      <label class="add-fav1">
                        <input type="checkbox" />
                        <i class="icon-heart"> </i>
                      </label>
                    </div>
                  </div>

                  <p style="margin: 0">
                    Exclusive | 3 Bedroom plus Study | Upgraded Unit
                  </p>
                  <div style="display: flex; margin: 5px 0px">
                    <span><i class="fa fa-bed"></i>&nbsp; 3</span> &nbsp; |
                    &nbsp;
                    <span
                      ><i class="fa fa-bath" aria-hidden="true"></i>
                      &nbsp;3</span
                    >&nbsp; | &nbsp;
                    <span
                      ><i class="fa fa-area-chart" aria-hidden="true"></i>
                      &nbsp;1033</span
                    >
                  </div>
                  <p style="color: #7d8183; margin: 0">
                    <i
                      class="fa fa-map-marker"
                      style="font-size: 17px; margin: 0"
                    ></i>
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-color: #e0fafb;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                "
              >
                <div>
                  <p style="padding-left: 20px; margin: 10px 0px">
                    Listed two days ago
                  </p>
                </div>
                <div>
                  <label class="add-fav" onclick="displayblock()">
                    <input class="input1" type="checkbox" />
                    <i class="logo_botton">Intrested</i>
                  </label>
                </div>
              </div>
            </div></a
          >
        </div>

        <div style="margin-top: 20px">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a
                  class="page-link"
                  href="#"
                  tabindex="-1"
                  style="color: #007ea8"
                  >Previous</a
                >
              </li>
              <li class="page-item">
                <a class="page-link" href="#" style="color: #007ea8">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" style="color: #007ea8">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" style="color: #007ea8">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" style="color: #007ea8">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" style="color: #007ea8">5</a>
              </li>

              <li class="page-item">
                <a class="page-link" href="#" style="color: #007ea8">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="adds-sections">
        <img
          src="../assets/Images/adds_image1.png"
          style="width: 100%; margin-top: 20px"
        />
        <hr />
        <div>
          <h5>Popular searches</h5>
          <p class="p_underline">
            <a href="#" class="p_underline">Properties for sale</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">Apartments for sale</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">he Villas for salello</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">Townhouses for sale</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">Penthouses for sale</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">he Compounds for salello</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">hel Duplexes for salelo</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">Land for sale</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">Hotel apartments for sale</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">1 bedroom properties for sale</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">2 bedroom properties for sale</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">3 bedroom properties for sale</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">4 bedroom properties for sale</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">5 bedroom properties for sale</a>
          </p>

          <hr />
          <h5>Nearby Areas</h5>
          <p class="p_underline">
            <a href="#" class="p_underline">Properties for sale in Dubai</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">Properties for sale in Abu Dhabi</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">Properties for sale in Sharjah</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline">Properties for sale in Ajman</a>
          </p>
          <p class="p_underline">
            <a href="#" class="p_underline"
              >Properties for sale in Ras Al Khaimah</a
            >
          </p>

          <hr />
          <h5>Properties for Rent</h5>
          <p class="p_underline">
            <a href="#" class="p_underline">Properties for rent</a>
          </p>

          <hr />
        </div>
        <div style="height: 3400px">
          <img class="stickyss" src="../assets/Images/adds_image1.png" />
        </div>
      </div>
    </div>
    <div>
      <a href="#"
        ><img src="../assets/Images/adds_image1.png" style="width: 100%"
      /></a>
    </div>
  </div>
</template>

<script>
// $("#carousel-1").carousel({
//   interval: 4000,
//   wrap: true,
//   keyboard: true,
// });

// /* 2 carousel */
// $("#carousel-2").carousel({
//   interval: 6000,
//   wrap: true,
//   keyboard: true,
// });

// /* 3 carousel */
// $("#carousel-3").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// /* 4 carousel example with jumbotron */
// $("#carousel-4").carousel({
//   interval: 10000,
//   wrap: true,
//   keyboard: true,
// });

// /* 5 carousel example */
// $("#carousel-5").carousel({
//   interval: 6000,
//   wrap: true,
//   keyboard: true,
// });

// /* 6 carousel example */
// $("#carousel-6").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// /* 7 carousel example */
// $("#carousel-7").carousel({
//   interval: 4000,
//   wrap: true,
//   keyboard: true,
// });

// /* 8 carousel example */
// $("#carousel-8").carousel({
//   interval: 6000,
//   wrap: true,
//   keyboard: true,
// });

// /* 9 carousel example */
// $("#carousel-9").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// /* 10 carousel example */
// $("#carousel-10").carousel({
//   interval: 2000,
//   wrap: true,
//   keyboard: true,
// });

// /* 11 carousel example */
// $("#carousel-11").carousel({
//   interval: 4000,
//   wrap: true,
//   keyboard: true,
// });

// /* 12 carousel example */
// $("#carousel-12").carousel({
//   interval: 6000,
//   wrap: true,
//   keyboard: true,
// });

// /* 13 carousel example */
// $("#carousel-13").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// $("#carousel-14").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// $("#carousel-15").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// $("#carousel-16").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// $("#carousel-17").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// $("#carousel-18").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// $("#carousel-19").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// $("#carousel-20").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// $("#carousel-21").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// $("#carousel-22").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// $("#carousel-23").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// $("#carousel-24").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });

// $("#carousel-25").carousel({
//   interval: 8000,
//   wrap: true,
//   keyboard: true,
// });
</script>
<style></style>
