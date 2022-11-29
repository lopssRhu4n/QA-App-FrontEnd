import http from "../plugins/http";

export default class PostServices {
  static getPosts(user) {
    return http.get(`/posts/${user}`);
  }
}
