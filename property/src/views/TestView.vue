<template>
  <h1>hello</h1>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      data: (state) => state.data,
    }),
  },
  methods: {
    ...mapMutations(["updateData"]),
    submitData() {
      const data = {};
      data.temp = 32;
      console.log("this.id");
      this.updateData(data);
      console.log("hello.id");
      console.log(this.$store.state.data.temp);
    },
  },
  mounted() {
    this.submitData();
  },
};
</script>
