import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sampledb", "root", "", {
    dialect: "mysql",
    host: "localhost",
    define: {
        timestamps: false
    }
})

module.exports = sequelize;


test