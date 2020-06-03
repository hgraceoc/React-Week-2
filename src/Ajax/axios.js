// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://restful.training/api/blog",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer xpwBrHokwY6lZxNvWjhI2l6ES5k7TAsfu7DJCWa7Yk0CAth90Qatsv5tKtm6XCfOidOzcGozsf5HOmEi",
    },
});