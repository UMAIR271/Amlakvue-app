<template>
  <div class="container-fluid">
    <div class="tab-content">
      <h3 class="h1 text-center m-3">Add Rentel Questionair</h3>
      <div
        class="tab-pane fade show active m-5 p-5"
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
            <div class="card-body" v-if="allData.length > 0">
              <p>
                {{ allData[0]["question_text"] }}
              </p>

              <div class="form-check">
                <input
                  type="text"
                  class="form-control"
                  name="q1"
                  id="q1_r1"
                  placeholder="Answer"
                  v-model="quertion1"
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
            <div class="card-body" v-if="allData.length > 1">
              <p>
                {{ allData[1]["question_text"] }}
              </p>

              <div class="form-check">
                <input
                  type="text"
                  class="form-control"
                  name="q2"
                  id="q2_r2"
                  v-model="quertion2"
                  placeholder="Answer"
                  aria-describedby="basic-addon1"
                />
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
            <div class="card-body" v-if="allData.length > 2">
              <p>
                {{ allData[2]["question_text"] }}
              </p>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q3"
                  id="q3_r3"
                  value="1"
                  v-model="quertion3"
                />
                <label class="form-check-label" for="q1_r1"> 1 </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q3"
                  id="q3_r3"
                  value="2"
                  v-model="quertion3"
                />
                <label class="form-check-label" for="q1_r2"> 2 </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q3"
                  id="q3_r3"
                  value="3"
                  v-model="quertion3"
                />
                <label class="form-check-label" for="q1_r3"> 3 </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q3"
                  id="q3_r3"
                  value="4"
                  v-model="quertion3"
                />
                <label class="form-check-label" for="q1_r4"> 4 </label>
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
            <div class="card-body" v-if="allData.length > 3">
              <p>
                {{ allData[3]["question_text"] }}
              </p>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q4"
                  id="q4_r4"
                  value="Single Family"
                  v-model="quertion4"
                />
                <label class="form-check-label" for="q1_r1">
                  Single Family
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q4"
                  id="q4_r4"
                  value="Bachelors"
                  v-model="quertion4"
                />
                <label class="form-check-label" for="q1_r2"> Bachelors </label>
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
            <span>Question 5</span>
          </div>
          <div id="q1" class="collapse show" aria-labelledby="h1">
            <div class="card-body" v-if="allData.length > 4">
              <p>
                {{ allData[4]["question_text"] }}
              </p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q5"
                  id="q5_r5"
                  value="Yes"
                  v-model="quertion5"
                />
                <label class="form-check-label" for="q1_r1"> Yes </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q5"
                  id="q5_r5"
                  value="No"
                  v-model="quertion5"
                />
                <label class="form-check-label" for="q1_r2"> No </label>
              </div>
              <div class="text-center">
                <!-- /AddQuestionair -->
                <button
                  type="submit"
                  style="background-color: #16b9ca"
                  class="btn btn-info"
                  @click="attach_question_to_listing()"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
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
      q1_id: 1,
      q2_id: 3,
      q3_id: 4,
      q4_id: 5,
      q5_id: 9,
      quertion1: "",
      quertion2: "",
      quertion3: "",
      quertion4: "",
      quertion5: "",
      currentPage: 1,
      question: [],
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
        this.allData = [...this.allData, ...response.data.Rental_Listings];
        console.log(this.allData);
      } catch (error) {
        console.log(error);
      }
    },
    async attach_question_to_listing() {
      try {
        this.quertion.push(
          { id: this.q1_id, ans: this.quertion1 },
          { id: this.q2_id, ans: this.quertion2 },
          { id: this.q3_id, ans: this.quertion3 },
          { id: this.q4_id, ans: this.quertion4 },
          { id: this.q5_id, ans: this.quertion5 }
        );
        console.log(this.question);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
