import axios from "axios";

export default class PostService {
  static async getAll(page) {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    console.log(response.data.results);
    return response.data.results;
  }

  static async getById(id) {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character/" + id
    );
    return response;
  }

  static async getCommentsByPostId(id) {
    const linkLocation = await axios.get(
      `https://rickandmortyapi.com/api/character/` + id
    );
    const tmp = linkLocation.data.location.url;
    console.log(tmp);
    const response = await axios.get(`${tmp}`);
    console.log(response);
    return response;
  }
}
