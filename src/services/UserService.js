import http from "../plugins/http";

export default class UserService {
  static getUsers() {
    return http.get("/users/");
  }

  static getUniqueUser(id) {
    return http.get(`/users/${id}`);
  }

  static createUser(data) {
    return http.post("/users/", data);
  }

  static deleteUser(id) {
    return http.delete(`/users/${id}`);
  }

  static editUser(id) {
    return http.put(`/users/${id}`);
  }
}
