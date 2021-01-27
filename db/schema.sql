CREATE DATABASE futbol_roster_db;

USE futbol_roster_db;


CREATE TABLE teams
(
	id int NOT NULL AUTO_INCREMENT,
	Team_1 varchar(255) NOT NULL,
    Team_2 varchar(255) NOT NULL,
    Free_agent varchar(255) NULL,
    Roster_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);