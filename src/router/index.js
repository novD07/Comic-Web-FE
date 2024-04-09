import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import HomePage from "@/views/user/HomePage.vue";
import Dashboard from "@/views/admin/Dashboard.vue";
import ChapterForStory from "@/views/admin/ChapterForStory.vue";
import Register from "@/components/Register.vue";
import TheLoai from "@/views/admin/TheLoai.vue";
import User from "@/views/admin/User.vue";
import TheLoaiTruyen from "@/views/user/TheLoaiTruyen.vue";
import TopTruyen from "@/views/user/TopTruyen.vue";
import LichSu from "@/views/user/LichSu.vue";
import YeuThich from "@/views/user/YeuThich.vue";
import ChiTietTruyen from "@/views/user/ChiTietTruyen.vue";
import Reading from "@/views/user/Reading.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/admin",
    name: "admin",
    children: [
      {
        path: "",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "theloai",
        name: "theloai",
        component: TheLoai,
      },
      { path: "user", name: "user", component: User },
      { path: "chi-tiet/:id", name: "chi-tiet", component: ChapterForStory },
    ],
  },
  {
    path: "/theloaitruyen/:id",
    name: "theloaitruyen",
    component: TheLoaiTruyen,
  },
  {
    path: "/toptruyen",
    name: "toptruyen",
    children: [
      {
        path: "topngay",
        name: "topngay",
        component: TopTruyen,
      },
      {
        path: "toptuan",
        name: "toptuan",
        component: TopTruyen,
      },
      {
        path: "topthang",
        name: "topthang",
        component: TopTruyen,
      },
    ],
  },
  {
    path: "/lichsu",
    name: "lichsu",
    component: LichSu,
  },
  {
    path: "/yeuthich",
    name: "yeuthich",
    component: YeuThich,
  },
  {
    path: "/chitiet/:id",
    name: "chitiet",
    children: [
      { 
        path: "",
        name: "chitiet",
        component: ChiTietTruyen,
      },
      { 
        path: "doc-truyen/:chapterId",
        name: "reading",
        component: Reading,
      }
    ]
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
