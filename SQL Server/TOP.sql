SELECT TOP 10 Name, ListPrice
FROM Production.Product
ORDER BY ListPrice DESC;
/*The TOP option is used by many SQL Server professionals as a method for retrieving only a certain range of rows. However, consider the following facts when using TOP:

TOP is proprietary to T-SQL.
TOP on its own doesn't support skipping rows.
Because TOP depends on an ORDER BY clause, you cannot use one sort order to establish the rows filtered by TOP and another to determine the output order.*/
SELECT TOP 10 WITH TIES Name, ListPrice
FROM Production.Product
ORDER BY ListPrice DESC;
/*In the previous example, the query returned the first 10 products in descending order of price. However, by adding the WITH TIES option to the TOP clause, you will see that more rows qualify for inclusion in the top 10 most expensive products:*/
SELECT TOP 10 PERCENT Name, ListPrice
FROM SalesLT.Product
ORDER BY ListPrice DESC;
/*To return a percentage of the eligible rows, use the PERCENT option with TOP instead of a fixed number.
For the purposes of row count, TOP (N) PERCENT will round up to the nearest integer.*/