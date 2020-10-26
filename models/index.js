import Sequelize from "sequelize";
import user from "./user";
import async from "../middleware/async";

const sequelize = new Sequelize(
  async,
  process.env.RDS_DATABASE,
  process.env.RDS_USERNAME,
  process.env.RDS_PASSWORD,
  process.env.RDS_URI,
  {
    dialect: process.env.DIALECT,
  }
);

const models = {
  User: user(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
