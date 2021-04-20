// 路由配置文件
import React from "react";
import { Redirect } from "react-router-dom";
import { Home, Recommend, Rank, Singers, Album } from "../application";
const config = [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"} />
        )
      },
      {
        path: "/recommend",
        component: Recommend,
        routes: [
          {
            path: '/recommend/:id',
            component: Album
          }
        ]
      },
      {
        path: "/singers",
        component: Singers,
        routes: []
      },
      {
        path: "/rank",
        component: Rank,
        routes: []
      },
    ],
  },
];
export default config
