import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

const Equipos = sequelize.define(
  "equipos",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    pais: {
      type: DataTypes.STRING,
      unique: true,
    },
    clave: {
      type: DataTypes.STRING,
    },
    grupo: {
      type: DataTypes.STRING,
    },
    flagurl: {
      type: DataTypes.STRING,
    },
    pj: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    pts: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { timestamps: false }
);

export default Equipos;