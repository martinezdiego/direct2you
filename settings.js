require('dotenv').config();

module.exports = {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || "development",
    development: {
        db: {
            dialect: "mysql",
            host: process.env.DB_HOST_DEV,
            port: process.env.DB_PORT_DEV,
            name: process.env.DB_NAME_DEV,
            user: process.env.DB_USERNAME_DEV,
            password: process.env.DB_PASSWORD_DEV
        }
    },
    production: {
        db: {
            dialect: "mysql",
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        }
    }
}