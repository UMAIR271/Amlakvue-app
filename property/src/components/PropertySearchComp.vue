<template>
  <div class="after_header">
    <div class="input_main1">
      <div class="input1">
        <svg viewBox="4 4 15 15" class="searchicon">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.7399 13.6792L18.7806 17.7197C19.0735 18.0126 19.0735 18.4875 18.7806 18.7804C18.4877 19.0733 18.0128 19.0733 17.7199 18.7804L13.6792 14.7399C12.6632 15.5297 11.3865 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 11.3865 15.5297 12.6632 14.7399 13.6792ZM10 14.5C12.4853 14.5 14.5 12.4853 14.5 10C14.5 7.51472 12.4853 5.5 10 5.5C7.51472 5.5 5.5 7.51472 5.5 10C5.5 12.4853 7.51472 14.5 10 14.5Z"
          ></path>
        </svg>
        <input
          class="subinput"
          type="text"
          placeholder="City,community or building"
          autocomplete="off"
        />
      </div>

      <div class="select_menu1">
        <select class="select">
          <option disabled selected>Buy</option>
        </select>
        <select class="select">
          <option class="options" value="Property type">Property type</option>
          <option class="options" value="volvo">Volvo</option>
        </select>
        <select class="select">
          <option class="options" value="Property type">Baths & Beds</option>
          <option class="options" value="volvo">Volvo</option>
        </select>
        <select class="select">
          <option disabled selected>Price</option>
        </select>

        <select class="select">
          <option class="options" value="Property type">More Filters</option>
          <option class="options" value="volvo">Volvo</option>
        </select>
      </div>
      <div>
        <button class="button3">FIND</button>
      </div>
    </div>
    <div class="map_views">
      <button class="button5">
        <i class="fa fa-filter" style="font-size: 17px; margin-right: 5px"></i
        >Filters
      </button>
      <button class="button5" style="margin-left: 10px">
        <span
          class="fa fa-star"
          style="font-size: 17px; margin-right: 5px"
        ></span
        >Save Search
      </button>
    </div>
    <div class="select_menu2">
      <select class="select2">
        <option disabled selected>Buy</option>
      </select>
      <select class="select2">
        <option class="options" value="Property type">Property type</option>
        <option class="options" value="volvo">Volvo</option>
      </select>
      <select class="select2">
        <option class="options" value="Property type">Baths & Beds</option>
        <option class="options" value="volvo">Volvo</option>
      </select>
      <select class="select2">
        <option disabled selected>Price</option>
      </select>

      <select class="select2">
        <option class="options" value="Property type">More Filters</option>
        <option class="options" value="volvo">Volvo</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.input_main132 {
  margin-top: -17px;
  margin-bottom: -17px;
  display: flex;
  width: 950px;
  margin-left: auto;
  margin-right: auto;
}

.input_main1322 {
  display: flex;
  justify-content: end;
  width: 100%;
}

.input11 {
  display: flex;
  /* border: 0.5px solid gray; */

  width: 35%;
}

.button33 {
  color: white;
  border: none;

  padding: 15px 30px;

  background-color: #247da9;
}

.select_menu1 {
  display: flex;

  width: 62%;
}

.select_menu12 {
  width: 25%;
  border-left: 0.5px solid gray;
}

.select_menu12 p {
  color: gray;
  margin: 0;
  margin-top: 10px;
  margin-left: 10px;
  font-size: small;
}

.select_menu12 h5 {
  margin: 0;
  margin-left: 10px;
  font-size: medium;
}

@media screen and (max-width: 1025px) {
  .input_main132 {
    margin-top: -17px;
    margin-bottom: -17px;
    display: flex;
    width: 100%;
  }

  .input_main1322 {
    display: block;
    width: 100%;
  }

  .input11 {
    width: 100%;
  }

  .select_menu12 {
    width: 25%;
    border-left: 0.5px solid gray;
    border-top: 0.5px solid gray;
  }

  .select_menu1 {
    width: 100%;
  }

  .button33 {
    padding: 40px 30px;
  }
}

.dropdown-content12 {
  display: none;
  position: absolute;
  background-color: #fffefe;
  width: 160px;
  box-shadow: 0px 8px 8px 2px rgba(63, 62, 62, 0.2);
  z-index: 1;
  margin-top: 5px;
}

.dropdown-content12 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content12 a:hover {
  background-color: rgb(228, 222, 222);
}

.select_menu12:hover .dropdown-content12 {
  display: block;
}

.dropdown-content13 {
  display: none;
  position: absolute;
  background-color: #fffefe;
  width: 250px;
  box-shadow: 0px 8px 8px 2px rgba(63, 62, 62, 0.2);
  z-index: 1;
  margin-top: 5px;
}

.dropdown-content13 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content13 a:hover {
  background-color: rgb(228, 222, 222);
}

.select_menu12:hover .dropdown-content13 {
  display: block;
}

.dropdown-content14 {
  display: none;
  position: absolute;
  background-color: #fffefe;
  width: 130px;
  box-shadow: 0px 8px 8px 2px rgba(63, 62, 62, 0.2);
  z-index: 1;
  margin-top: 5px;
}

.dropdown-content14 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content14 a:hover {
  background-color: rgb(228, 222, 222);
}

.select_menu12:hover .dropdown-content14 {
  display: block;
}

.dropdown-content15 {
  display: none;
  right: 0;
  position: absolute;
  background-color: #fffefe;
  width: 250px;
  box-shadow: 0px 8px 8px 2px rgba(63, 62, 62, 0.2);
  z-index: 1;
  margin-top: 5px;
}

.dropdown-content15 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content15 a:hover {
  background-color: rgb(228, 222, 222);
}

.select_menu12:hover .dropdown-content15 {
  display: block;
}

@media screen and (max-width: 1025px) {
  .dropdown-content12,
  .dropdown-content13,
  .dropdown-content14,
  .dropdown-content15 {
    margin-top: 0.5px;
  }
}

.main_div1 {
  position: relative;
  border: 1px solid rgb(214, 206, 206);
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
}

.main_div1:hover {
  border-radius: 10px;
  background-color: #f8f8f8;
}

.slideshow-container {
  display: flex;
}

.yt {
  position: absolute;
  right: 10px;
}

.content {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-bottom:  1px solid rgb(214, 206, 206); */
}

.content:hover {
  background-color: #f8f8f8;
}

p1 {
  color: #403b45;
  font-weight: 200;
}

.img {
  width: 20px;
  height: 20px;
}

p {
  color: #403b45;
  /* display:flex; */
}

.logo {
  width: 20px;
}

p2 {
  text-align: center;
  display: flex;
  color: #403b45;
}

.button1 {
  background-color: rgb(249, 249, 249);
  position: absolute;
  top: 100px;
  left: 10px;
  border-radius: 20px;
  border: none;
  padding: 8px;
}

.button1:hover {
  background-color: lightgray;
}

.button2 {
  background-color: rgb(249, 249, 249);
  position: absolute;
  top: 100px;
  left: 350px;
  border-radius: 20px;
  border: none;
  padding: 8px;
}

.button2:hover {
  background-color: lightgray;
}

.slider {
  height: 100%;
  width: 100%;
  border-top-left-radius: 10px;
}

.carousel-cell {
  width: 100%;
  height: 100%;

  background: #e0fafb;

  counter-increment: carousel-cell;
}

.width30 {
  width: 30%;
}

.logo_botton {
  background-color: #16b9ca;
  padding: 10px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  border-radius: 7px;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-right: 5px;

  border: 1px solid #e8e1e0;
}

.logo_botton:hover {
  background-color: #16b9ca;
  border: 1px solid #949292;
}

.button_web {
  display: block;
}

.buton_mob {
  display: none;
}

.adds-sections {
  width: 25%;
}

.cards-section {
  width: 73%;
}

.learn-bth {
  border: 1px solid gray;
  background-color: white;
  color: #007ea8;
  border-radius: 4px;
  font-weight: 600;
  margin-right: 20px;
}

.button50 {
  border: 1px solid rgb(194, 192, 192);
  background-color: white;
  padding: 15px 20px;

  cursor: pointer;
  width: 50%;
}

.button50:hover {
  background-color: rgb(238, 234, 234);
}

.flex_blocks {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.flex-propts {
  display: flex;
  justify-content: space-between;
}

.map_views12 {
  display: none;
}

.cards-img {
  width: 100%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  margin-top: auto;
  height: 100%;
}

@media screen and (max-width: 1050px) {
  .adds-sections {
    display: none;
  }

  .cards-section {
    width: 100%;
  }
}

@media screen and (max-width: 900px) {
  .main_div1 {
    width: 100%;
  }

  .adds-sections {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  .yt {
    display: none;
  }

  .select_menu1 {
    display: none;
  }

  .button33 {
    display: none;
  }

  .input_main1322 {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .a123 {
    display: none;
  }

  .input11 {
    border: 1px solid rgb(194, 192, 192);
    margin-top: 15px;
    margin-bottom: 25px;
  }

  .map_views12 {
    margin-bottom: 25px;
    display: flex;
    width: 100%;
  }

  .flex_blocks {
    width: 100%;
  }

  .flex-propts {
    display: block;
    margin-left: 10px;
  }
}

@media screen and (max-width: 650px) {
  .slideshow-container {
    width: 100%;
    display: block;
  }

  .width30 {
    width: 100%;
  }

  .slider {
    border-top-right-radius: 10px;
  }

  .content {
    width: 100%;
  }

  .button_web {
    display: none;
  }

  .buton_mob {
    display: block;
  }

  .button4 {
    display: none;
  }

  .button5 {
    display: flex;
  }

  .cards-img {
    width: 100%;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top: auto;
    height: 100%;
  }
}
</style>
