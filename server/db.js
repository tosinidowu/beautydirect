import mysql from "mysql2"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "beautydirect",
    database: "beautydirect"
})

db.connect((err) => {
    if(err){
        console.error("error connecting: " + err.stack);
    }
    else{
        console.log("Connected to MySQL database!")
    }
});