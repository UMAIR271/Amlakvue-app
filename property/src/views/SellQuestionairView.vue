<template>
  <div class="container-fluid">
    <div class="tab-content">
      <h3 class="h1 text-center m-3">Add Sell Questionair</h3>
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
                  v-model="question1"
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
                  class="form-check-input"
                  type="radio"
                  name="q2"
                  id="q2_r2"
                  value="Cash Buyer"
                  v-model="question2"
                />
                <label class="form-check-label" for="q1_r1"> Cash Buyer </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q2"
                  id="q2_r2"
                  value="Cash Buyer"
                  v-model="question2"
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
                  v-model="question3"
                />
                <label class="form-check-label" for="q1_r1"> Yes </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q3"
                  id="q3_r3"
                  value="2"
                  v-model="question3"
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
                  v-model="question4"
                />
                <label class="form-check-label" for="q1_r1"> Yes </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="q4"
                  id="q4_r4"
                  value="Bachelors"
                  v-model="question4"
                />
                <label class="form-check-label" for="q1_r2"> No </label>
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
                  v-model="question5"
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
                  v-model="question5"
                />
                <label class="form-check-label" for="q1_r2"> No </label>
              </div>
            </div>
          </div>
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
        <div v-if="showPopup">
          <h2>Success!</h2>
          <p>Your form has been submitted.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted } from "vue";
import { mapMutations } from "vuex";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  data() {
    return {
      allData: [],
      q1_id: 6,
      q2_id: 7,
      q3_id: 8,
      q4_id: 9,
      q5_id: 10,
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      showPopup: false,
      question5: "",
      currentPage: 1,
      submit_question: [],
    };
  },
  created() {
    onMounted(() => {
      this.getQuestion();
    });
  },
  methods: {
    ...mapMutations(["updateData"]),
    async getQuestion() {
      try {
        const response = await axios.get(
          "https://umair2701.pythonanywhere.com/questionair/basic/question/"
        );
        const data = {};
        console.log("i am here");
        data.CurrentListing = this.$store.state.data.CurrentListing;
        // this.$store.state.data.CurrentListing= response.data['Sales Listings'];
        // data.CurrentListing = response.data['Sales Listings'];
        this.updateData(data);

        this.allData = [...this.allData, ...response.data["Sales Listings"]];
        // this.allData = this.$store.state.data.CurrentListing;
        // this.allData = this.$store.state.data.CurrentListing;
        console.log(this.allData);
      } catch (error) {
        console.log(error);
      }
    },
    async attach_question_to_listing() {
      try {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");
        console.log(user_id);
        console.log("Bearer" + " " + token);
        this.submit_question.push(
          { id: this.q1_id, ans: this.question1 },
          { id: this.q2_id, ans: this.question2 },
          { id: this.q3_id, ans: this.question3 },
          { id: this.q4_id, ans: this.question4 },
          { id: this.q5_id, ans: this.question5 }
        );
        const config = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        const postData = {
          question: this.submit_question,
          listing: this.$store.state.data.CurrentListing,
        };

        console.log(postData);
        axios
          .post(
            "https://umair2701.pythonanywhere.com/questionair/answer/",
            postData,
            config
          )
          .then((response) => {
            console.log(response);
            this.Notify("Sumbit");
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.log(error);
      }
    },
    Notify(data) {
      if (data == "Login") {
        toast("Please Login !", {
          transition: toast.TRANSITIONS.BOUNCE,
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast("Questions submitted successfully", {
          transition: toast.TRANSITIONS.BOUNCE,
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
  },
};
</script>
