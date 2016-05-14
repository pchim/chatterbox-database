CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
	id INT PRIMARY KEY,
	name VARCHAR(20)
);

CREATE TABLE rooms (
	roomname VARCHAR(20) PRIMARY KEY
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT PRIMARY KEY,
  user INT,
  roomname VARCHAR(20),
  message VARCHAR(140),
  created_at DATETIME,
  FOREIGN KEY (user)
  	REFERENCES users(id),

  FOREIGN KEY (roomname)
  	REFERENCES rooms(roomname)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

