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
  },
  { timestamps: false }
);

export default Equipos;