import { Router } from "express";
import {healthCheck} from "../controllers/healthcheck.controllers.js";

const route  =  Router();

route.route("/").get(healthCheck)

export default route;