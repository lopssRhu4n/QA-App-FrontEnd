/* eslint-disable no-unused-vars */
export default async (to, from) => {
  var token = localStorage.getItem("JWT_TOKEN");
  var user = localStorage.getItem("USERNAME");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      console.log("Token não existe");
      return { name: "signin" };
    } else if (!user) {
      console.log("Token não existe");
      return { name: "signin" };
    } else {
      return;
    }
  }
};
