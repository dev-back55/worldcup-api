import { Router } from "express";
import {getPartidos, getPartidosGrupos, getPaises } from '../controllers/partidos.controllers.js';

const router = Router();

router.get("/partidos", async (_, res) => {
  try {
    res.status(200).json(await getPartidos());
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/grupos", async (req, res) => {
  try {
    let data = req.query;
    res.status(200).json(await getPartidosGrupos());
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/equipos", async (req, res) => {
  try {
    let data = req.query;
    res.status(200).json(await getPaises());
  } catch (error) {
    res.status(404).send(error.message);
  }
});

export default router;