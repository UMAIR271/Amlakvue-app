<template>
  <div class="dashboard-main-wrapper">
    <HeaderDash />
    <SidebarDash />
    <div class="dashboard-wrapper">
      <div class="dashboard-ecommerce">
        <div class="container-fluid dashboard-content">
          <router-view />
        </div>
      </div>
      <FooterDash />
    </div>
  </div>
</template>

<script>
import { useSetTitle } from "@/composables";
import { HeaderDash, SidebarDash, FooterDash } from "@/components";
export default {
  name: "DashboardLayout",
  components: {
    HeaderDash,
    SidebarDash,
    FooterDash,
  },
  setup() {
    useSetTitle("Dashboard");
  },
};
</script>

<style>
@import "@/assets/dashboard/vendor/bootstrap/css/bootstrap.min.css";
@import "@/assets/dashboard/vendor/fonts/circular-std/style.css";
@import "@/assets/dashboard/libs/css/style.css";
@import "@/assets/dashboard/vendor/fonts/fontawesome/css/fontawesome-all.css";
@import "@/assets/dashboard/vendor/charts/chartist-bundle/chartist.css";
@import "@/assets/dashboard/vendor/charts/morris-bundle/morris.css";
@import "@/assets/dashboard/vendor/fonts/material-design-iconic-font/css/materialdesignicons.min.css";
@import "@/assets/dashboard/vendor/charts/c3charts/c3.css";
@import "@/assets/dashboard/vendor/fonts/flag-icon-css/flag-icon.min.css";
</style>
