const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

try {
    const conn = new Sequelize({
        dialect: 'sqlite',
        storage: '/Users/ganesha/Desktop/TestProjects/node-sqlite/database.sqlite3'
    })
    
    
    
    conn.authenticate().then(_ => {
        console.log("Authenticated.")
        console.log(conn)

        const Room = sequelize.define('room', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            room_id: {
                type: DataTypes.INTEGER
            },
            room_text: {
                type: DataTypes.TEXT
            }
        })
        
        Room.findAll().then(console.log)

    }).catch(_ => {
        console.log("Not Connected!")
    })
    
} catch (error) {
    console.error(error)
}


