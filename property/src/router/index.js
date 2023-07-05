import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        name: "Home",
        path: "/",
        props: true,
        component: () => import("@/views/HomeView.vue"),
      },
      {
        name: "PropertyList",
        path: "/properties",
        props: true,
        component: () => import("@/views/PropertyListView.vue"),
      },
      {
        name: "request",
        path: "/request",
        props: true,
        component: () => import("@/views/requestView.vue"),
      },
      {
        name: "loading",
        path: "/loading",
        props: true,
        component: () => import("@/views/loadingView.vue"),
      },
      {
        name: "PropertyListBuy",
        path: "/propertiesBuy",
        props: true,
        component: () => import("@/views/BuyView.vue"),
      },
      {
        name: "Addlisting",
        path: "/addlisting",
        component: () => import("@/views/AddlistingView.vue"),
      },
      {
        name: "Chat",
        path: "/chat",
        component: () => import("@/views/ChatView.vue"),
      },
      {
        name: "AddQuestionair",
        path: "/AddQuestionair",
        component: () => import("@/views/AddQuestionairView.vue"),
      },
      {
        name: "PropertyShow",
        path: "/property/:property_id/show",
        component: () => import("@/views/PropertyShowView.vue"),
        props: true,
      },

      {
        name: "SellQuestionair",
        path: "/sellQuestionair",
        component: () => import("@/views/SellQuestionairView.vue"),
      },
      {
        name: "FavouriteListing",
        path: "/favouriteListing",
        component: () => import("@/views/favouriteListingView.vue"),
      },
      {
        name: "Questionair",
        path: "/rentQuestionair",
        component: () => import("@/views/QuestionairView.vue"),
      },
      {
        name: "Notifications",
        path: "/notifications",
        component: () => import("@/views/NotificationVeiw.vue"),
      },
      {
        name: "Test2",
        path: "/test2",
        component: () => import("@/views/TestView.vue"),
      },
      {
        name: "Test",
        path: "/test1",
        component: () => import("@/views/test1View.vue"),
      },
      {
        name: "chatTest",
        path: "/chatTest",
        component: () => import("@/views/chatTestView.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "DashboardLayout",
    component: () => import("@/layouts/DashboardLayout.vue"),
    children: [
      {
        name: "HomeDash",
        path: "/admin",
        component: () => import("@/views/dashboard/HomeViewDash.vue"),
      },
      {
        name: "UsersDash",
        path: "/admin/users",
        component: () => import("@/views/dashboard/UsersListViewDash.vue"),
      },
      {
        name: "propertyListings",
        path: "/admin/property_listings",
        component: () =>
          import("@/views/dashboard/PropertyListingViewDash.vue"),
      },
      {
        name: "createPropertyListings",
        path: "/admin/create/listing",
        component: () => import("@/views/dashboard/CreateListingViewDash.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "Signup",
    component: () => import("@/views/SignupView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
