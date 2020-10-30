require("dotenv").config();

module.exports = {
  development: {
    use_env_variable: "LOCAL_DATABASE",
    dialect: "DIALECT",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "DIALECT",
  },
};
