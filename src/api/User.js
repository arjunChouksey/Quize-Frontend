import axios from "axios";

export default axios.create({
	baseURL: "https://quize-backend.herokuapp.com/user",
});
