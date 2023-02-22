<template>
  <div>
    <button @click="notify">Notify !</button>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "App",
  setup() {
    const notify = () => {
      toast("FLIP", {
        transition: toast.TRANSITIONS.BOUNCE,
        position: toast.POSITION.TOP_CENTER,
      });
      toast("Wow so easy !", {
        autoClose: 1000,
        // position: toast.POSITION.TOP_CENTER,
      }); // ToastOptions
    };
    return { notify };
  },
};
</script>
