<template>
  <div class="container-fluid">
    <div class="tab-content">
      <h3 class="h1 text-center m-3">Add Sell Questionair</h3>
      <div
        class="tab-pane fade show active"
        id="quiz"
        role="tabpanel"
        aria-labelledby="quiz-tab"
      >
        <div class="card border-info mb-4">
          <div
            class="d-flex justify-content-between align-items-center card-header text-white"
            id="h1"
            style="background-color: #16b9ca"
          >
            <span>Question 1</span>
          </div>
          <div id="q1" class="collapse show" aria-labelledby="h1">
            <div class="card-body">
              <p v-if="allData.length > 0">
                {{ allData[0]["question_text"] }}
              </p>

              <div class="form-check">
                <input
                  type="text"
                  class="form-control"
                  name="q1"
                  id="q1_r1"
                  value="r1"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card border-info mb-4">
          <div
            class="d-flex justify-content-between align-items-center card-header text-white"
            id="h1"
            style="background-color: #16b9ca"
          >
            <span>Question 2</span>
          </div>
          <div id="q1" class="collapse show" aria-labelledby="h1">
            <div class="card-body">
              <p v-if="allData.length > 1">
                {{ allData[1]["question_text"] }}
              </p>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q1"
                  id="q1_r1"
                  value="r1"
                />
                <label class="form-check-label" for="q1_r1"> Cash Buyer </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q1"
                  id="q1_r2"
                  value="r2"
                />
                <label class="form-check-label" for="q1_r2">
                  Finance Buyer
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-info mb-4">
          <div
            class="d-flex justify-content-between align-items-center card-header text-white"
            style="background-color: #16b9ca"
            id="h1"
          >
            <span>Question 3</span>
          </div>
          <div id="q1" class="collapse show" aria-labelledby="h1">
            <div class="card-body">
              <p v-if="allData.length > 2">
                {{ allData[2]["question_text"] }}
              </p>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q1"
                  id="q1_r1"
                  value="r1"
                />
                <label class="form-check-label" for="q1_r1"> Yes </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q1"
                  id="q1_r2"
                  value="r2"
                />
                <label class="form-check-label" for="q1_r2"> No </label>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-info mb-4">
          <div
            class="d-flex justify-content-between align-items-center card-header text-white"
            id="h1"
            style="background-color: #16b9ca"
          >
            <span>Question 4</span>
          </div>
          <div id="q1" class="collapse show" aria-labelledby="h1">
            <div class="card-body">
              <p v-if="allData.length > 3">
                {{ allData[3]["question_text"] }}
              </p>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q1"
                  id="q1_r1"
                  value="r1"
                />
                <label class="form-check-label" for="q1_r1"> Yes </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q1"
                  id="q1_r2"
                  value="r2"
                />
                <label class="form-check-label" for="q1_r2"> No </label>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="card border-info mb-4">
          <div
            class="d-flex justify-content-between align-items-center card-header text-white"
            style="background-color: #16b9ca"
            id="h1"
          >
            <span>Question 5</span>
          </div>
          <div id="q1" class="collapse show" aria-labelledby="h1">
            <div class="card-body">
              <p v-if="allData.length > 4">
                {{ allData[4]["question_text"] }}
              </p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q1"
                  id="q1_r1"
                  value="r1"
                />
                <label class="form-check-label" for="q1_r1">
                  study of bones
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q1"
                  id="q1_r2"
                  value="r2"
                />
                <label class="form-check-label" for="q1_r2">
                  study of muscles
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q1"
                  id="q1_r3"
                  value="r3"
                />
                <label class="form-check-label" for="q1_r3">
                  study of architecture
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q1"
                  id="q1_r4"
                  value="r4"
                />
                <label class="form-check-label" for="q1_r4">
                  science of languages
                </label>
              </div>
            </div>
          </div>
        </div> -->
        <div class="text-center">
          <!-- /AddQuestionair -->
          <button
            type="submit"
            style="background-color: #16b9ca"
            class="btn btn-info"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted } from "vue";

export default {
  data() {
    return {
      allData: [],
      currentPage: 1,
    };
  },
  created() {
    onMounted(() => {
      this.getQuestion();
    });
  },
  methods: {
    async getQuestion() {
      try {
        const response = await axios.get(
          "http://18.177.139.152/questionair/basic/question/"
        );
        this.allData = [...this.allData, ...response.data.Sales_Listings];
        console.log(this.allData);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
