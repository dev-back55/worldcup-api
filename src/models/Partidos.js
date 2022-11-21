import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

const Partidos = sequelize.define(
  "partidos",
  {
    dia: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    horario: {
      type: DataTypes.STRING,
    },
    equipo_a: {
      type: DataTypes.STRING,
    },
    equipo_b: {
      type: DataTypes.STRING,
    },
    estadio: {
      type: DataTypes.STRING,
    },
    grupo: {
      type: DataTypes.STRING,
    },
    ganador: {
      type: DataTypes.STRING,
    },
    goles_a: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    goles_b: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    flag_a: {
      type: DataTypes.STRING,
    },
    flag_b: {
      type: DataTypes.STRING,
    },
    canaltv: {
      type: DataTypes.STRING,
    },
    resumen_url: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

export default Partidos;