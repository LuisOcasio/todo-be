import Sequelize from "sequelize";
import user from "./user";
import async from "../middleware/async";

const sequelize = new Sequelize(
  process.env.RDS_DATABASE,
  process.env.RDS_USERNAME,
  process.env.RDS_PASSWORD,
  {
    dialect: process.env.DIALECT,
  },
  async
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
