import http from "../plugins/http";

export default class AnswerService {
  static getQuestions(user) {
    return http.get(`/posts/${user}`);
  }

  static postAnswer(data) {
    return http.post("/posts/", data);
  }
}
