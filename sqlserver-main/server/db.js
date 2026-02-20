import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
  host: 'localhost',
  dialect: 'postgres',
  port: process.env.DB_PORT /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

// export default sequelize варинат 1
export { sequelize }
//