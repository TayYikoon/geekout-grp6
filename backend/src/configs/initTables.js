const pool = require("../services/db");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const callback = (error, results, fields) => {
  if (error) {
    console.error("Error creating tables:", error);
  } else {
    console.log("Tables created successfully");
  }
  process.exit();
}

bcrypt.hash('1234', saltRounds, (error, hash) => {
  if (error) {
    console.error("Error hashing password:", error);
  } else {
    console.log("Hashed password:", hash);

    const SQLSTATEMENT = `
    DROP TABLE IF EXISTS teachers;

    DROP TABLE IF EXISTS students;
    
    DROP TABLE IF EXISTS materials;

    DROP TABLE IF EXISTS worksheets;

    CREATE TABLE Teachers (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name TEXT NOT NULL,
        email VARCHAR(255) NOT NULL,
        password_hash TEXT NOT NULL,
        subject TEXT,
        class TEXT,
        UNIQUE (email)
    );

    CREATE TABLE Students (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name TEXT NOT NULL,
        email VARCHAR(255) NOT NULL,
        class TEXT NOT NULL,
        proficiency JSON NOT NULL,
        UNIQUE (email)
    );

    CREATE TABLE Materials (
        id INT PRIMARY KEY AUTO_INCREMENT,
        teacher_id INT NOT NULL,
        title TEXT NOT NULL,
        content TEXT,
        file_path TEXT,
        tags JSON,
        FOREIGN KEY (teacher_id) REFERENCES teachers(id)
    );

    CREATE TABLE Worksheets (
      id INT PRIMARY KEY AUTO_INCREMENT,
      student_id INT NOT NULL,
      teacher_id INT NOT NULL,
      content TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (student_id) REFERENCES students(id),
      FOREIGN KEY (teacher_id) REFERENCES teachers(id)
    );

    INSERT INTO Teachers (name, email, password_hash, subject, class) VALUES
        ('admin', 'a@a.com', '${hash}', NULL, NULL);
      `;

    pool.query(SQLSTATEMENT, callback);
  }
});