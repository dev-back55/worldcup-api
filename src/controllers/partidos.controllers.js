import { Op } from "sequelize";
import Partidos from "../models/Partidos.js"
import Equipos from "../models/Equipos.js"

export async function getPartidos() {
  let betPartidos = await Partidos.findAll({ order: [["dia", "asc"]]});
  return betPartidos;
}

export async function getPartidosGrupos() {
  let betPartidos = await Partidos.findAll({ order: [["grupo", "asc" ], ["dia", "asc"]]});
  return betPartidos;
}

export async function getPaises() {
  let betPaises = await Equipos.findAll({ order: [["name", "asc"]]});
  return betPaises;
}

