require("dotenv").config();

module.exports = {
  development: {
    use_env_variable: "LOCAL_DATABASE",
    dialect: process.env.DIALECT,
  },
  production: {
    database: "DATABASE_URL",
    use_env_variable: process.env.RDS_URI,
    dialect: process.env.DIALECT,
  },
};
