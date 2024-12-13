const path = require("path");
require("dotenv").config();

const {
  DATABASE_URL = "postgresql://we_love_movies_database_user:zThbRqFNNH59bTt9ng0FmMriBxHzuork@dpg-cte70hi3esus73brc7l0-a.oregon-postgres.render.com/we_love_movies_database",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL, // Use environment variable
      ssl: { rejectUnauthorized: false }, // Add SSL configuration
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL, // Use environment variable
      ssl: { rejectUnauthorized: false }, // Ensure SSL in production
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
