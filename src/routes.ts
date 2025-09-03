import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  index("./app/routes/home.tsx"),

  layout("./pages/layout.tsx", [
    route("singIn", "./pages/singIn.tsx"),
    route("singUp", "./pages/singUp.tsx"),
    route("clientVariales", "./pages/variables.tsx"),
    route("clientHistory", "./pages/history.tsx"),
  ]),

  

  
] satisfies RouteConfig;
