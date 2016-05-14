DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
	name VARCHAR(20) PRIMARY KEY
);

CREATE TABLE rooms (
	name VARCHAR(20) PRIMARY KEY
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT PRIMARY KEY,
  user VARCHAR(20),
  roomname VARCHAR(20),
  message VARCHAR(140),
  created_at DATETIME,
  FOREIGN KEY (user)
  	REFERENCES users(name),

  FOREIGN KEY (roomname)
  	REFERENCES rooms(name)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

