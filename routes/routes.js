import express from "express";
import routeController from "../controllers/routeController.js";

const router = express.Router();

router.route("/").get(routeController.GET_HOME);

router.route("/compose").get(routeController.GET_COMPOSE);

export default router;
