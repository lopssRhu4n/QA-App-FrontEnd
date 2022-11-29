import http from "../plugins/http";

export default class AuthService {
  static login(form) {
    return http.post("/login/", form);
  }
}
