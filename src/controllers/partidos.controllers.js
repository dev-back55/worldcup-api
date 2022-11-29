import { Op } from "sequelize";
import Partidos from "../models/Partidos.js";
import Equipos from "../models/Equipos.js";
import Octavos from "../models/Octavos.js";
import Cuartos from "../models/Cuartos.js";

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

export async function getOctavos() {
  let betOctavos = await Octavos.findAll({ order: [["dia", "asc"], ["horario", "asc"]]});
  return betOctavos;
}

export async function getCuartos() {
  let betCuartos = await Cuartos.findAll({ order: [["dia", "asc"], ["horario", "asc"]]});
  return betCuartos;
}