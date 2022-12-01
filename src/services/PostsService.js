import http from "../plugins/http";

export default class PostServices {
  static getQuestions(user) {
    return http.get(`/posts/${user}`);
  }

  static postQuestion(question) {
    return http.post("/posts/", question);
  }

  static deleteQuestion(id) {
    return http.delete(`/posts/${id}`);
  }

  static editQuestion(id, data) {
    return http.put(`posts/${id}`, data);
  }
}
