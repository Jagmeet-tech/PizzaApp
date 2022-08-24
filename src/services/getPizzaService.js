import axios from "axios";

let getPizzaService = async () => await axios.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68");

export default getPizzaService;