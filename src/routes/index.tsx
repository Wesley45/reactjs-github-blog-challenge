import { Blog } from "../pages/Blog";
import { Post } from "../pages/Post";

export const routes = [
  {
    component: <Blog />,
    path: "/",
  },
  {
    component: <Post />,
    path: "/post/:id",
  },
];
