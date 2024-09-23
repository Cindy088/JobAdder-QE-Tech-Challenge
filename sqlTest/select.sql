-- Query #1
select * from City
where COUNTRYCODE='USA' and POPULATION > 12500


-- Query #2
select Transactions.transaction_id, Products.product_name, Locations.location_name, Transactions.transaction_date
from (Transactions  
inner join Products on Transactions.product_id = Products.product_id) 
inner join Locations on Transactions.location_id = Locations.location_id
and Month(Transactions.transaction_date)=3 and year(Transactions.transaction_date) =2021;