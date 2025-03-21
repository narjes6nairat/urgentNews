const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const dbConfig = {
    host: "database",
    user: "root",
    password: "root",
    database: "urgent_news"
};

const connectWithRetry = () => {
    const db = mysql.createConnection(dbConfig);

    db.connect(err => {
        if (err) {
            console.error("Database connection failed. Retrying in 5 seconds...", err);
            setTimeout(connectWithRetry, 5000);
        } else {
            console.log("Connected to MySQL database.");
            startServer(db);
        }
    });

    return db;
};

const startServer = (db) => {
    app.get("/getUrgentNews", (req, res) => {
        db.query("SELECT * FROM News", (err, results) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(results);
            }
        });
    });

    app.listen(3000, () => {
        console.log("Backend running on port 3000");
    });
};

connectWithRetry();
