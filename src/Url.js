import axios from "axios";

class Api {
  async get() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    return await res.data;
  }
}
const Rest = new Api();
export default Rest;
