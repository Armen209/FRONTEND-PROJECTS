import axios from "axios";
import { BASE } from "./constants";

export const Http = axios.create({
    baseURL:BASE
})