const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    exact: true,
    component: "NotFound",
  }
];

export default routes;
