var db = require('mySQL')
var dbkx = require('knex');

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/

  id int NOT NULL AUTO_INCREMENT,
  gameTitle varchar(200) NOT NULL,
  gameID varchar(20),
  PRIMARY KEY (ID)
);
