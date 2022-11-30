import http from "../plugins/http";

export default class PostServices {
  static getQuestions(user) {
    return http.get(`/posts/${user}`);
  }

  static postQuestion(question) {
    return http.post("/posts/", question);
  }
}
