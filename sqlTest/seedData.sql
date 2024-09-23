USE master;
GO

IF EXISTS ( SELECT  name
			FROM	master..sysdatabases
			WHERE	name = 'JobAdder'
		   )
DROP DATABASE JobAdder;
GO
CREATE DATABASE JobAdder;
GO
USE JobAdder;
GO

-- tables
-- City

CREATE TABLE City

(
    ID INT  NOT NULL,
	NAME VARCHAR(17) NOT NULL,
	COUNTRYCODE	VARCHAR(3) NOT NULL,
	DISTRICT VARCHAR(20) NOT NULL,
	POPULATION INT NOT NULL,
   
    CONSTRAINT ID_pk PRIMARY KEY  (ID)
);
GO

--Products

CREATE TABLE Products
(
 product_id INT NOT NULL,
 product_name varchar(17) NOT NULL,
 sell_price money NOT NULL,

 CONSTRAINT product_id_pk PRIMARY KEY (product_id)

); 

GO

--Locations
CREATE TABLE Locations
(
location_id int NOT NULL,
location_name varchar(17) NOT NULL,
city varchar(17)NOT NULL,

CONSTRAINT location_id_pk PRIMARY KEY (location_id)
);

GO
--Transactions
CREATE TABLE Transactions
(
transaction_id INT NOT NULL,
product_id INT NOT NULL,
location_id INT NOT NULL,
transaction_date DATE NOT NULL,
amount INT NOT NULL

CONSTRAINT transaction_id_pk PRIMARY KEY (transaction_id),
CONSTRAINT product_id_fk FOREIGN KEY (product_id) REFERENCES products (product_id),
CONSTRAINT location_id_fk FOREIGN KEY (location_id) REFERENCES locations (location_id)

);
GO

-- DATA

INSERT INTO City (ID, NAME, COUNTRYCODE, DISTRICT, POPULATION) VALUES
(1, 'New York', 'USA', 'New York', 8175133),
(2, 'Los Angeles', 'USA', 'California', 3792621),
(3, 'Chicago', 'USA', 'Illinois', 2695),
(4, 'Houston', 'USA', 'Texas', 21297),
(5, 'Toronto', 'CAN', 'Ontario', 2731571),
(6, 'Vancouver', 'CAN', 'British Columbia', 631486),
(7, 'London', 'GBR', 'England', 8908081),
(8, 'Berlin', 'DEU', 'Berlin', 3769495),
(9, 'Tokyo', 'JPN', 'Kanto', 13929286),
(10, 'Sydney', 'AUS', 'New South Wales', 5230330);
GO


INSERT INTO Products (product_id,product_name,sell_price) VALUES
(234,'iPhone 13 Pro',1200),
(235, 'Macbook Air (M2)', 4200);
GO

INSERT INTO Locations (location_id,location_name,city) VALUES
(2,'Cellphones','HCMC'),
(3,'Vietel','HCMC');
GO


INSERT INTO Transactions (transaction_id, product_id, location_id, transaction_date,amount)VALUES
(20210103,234,2,'2021-01-03',6),
(20210104,235,3,'2021-01-04',8),
(20210105,234,3,'2021-01-05',9),
(20210303,234,2,'2021-03-03',5),
(20210304,235,2,'2021-03-04',9),
(20210305,234,3,'2021-03-05',4);
GO