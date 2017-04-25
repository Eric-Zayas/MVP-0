var db = require('mysql');


CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  gameTitle varchar(200) NOT NULL,
  cover varchar(500) NOT NULL,
  synopsis varchar(1000),
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
