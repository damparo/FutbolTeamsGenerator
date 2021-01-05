CREATE DATABASE futbol_roster_db;

USE futbol_roster_db;

CREATE TABLE rosters
(
	id int NOT NULL AUTO_INCREMENT,
	roster_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE teams
(
	id int NOT NULL AUTO_INCREMENT,
	Team_1 varchar(255) NOT NULL,
	Team_2 varchar(255) NOT NULL,
	Free_cost int NOT NULL,
	client_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (rsoter_name_id) REFERENCES rosters (id)
);
