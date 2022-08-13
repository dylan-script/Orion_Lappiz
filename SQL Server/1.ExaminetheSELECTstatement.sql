/*The SELECT clause returns the OrderDate column, and the count of OrderID values, to which is assigns the name (or alias) Orders*/
SELECT OrderDate, COUNT(OrderID) AS Orders 
/*The FROM clause identifies which table is the source of the rows for the query; in this case it's the Sales.SalesOrder table:*/
FROM Sales.SalesOrder
/*The WHERE clause filters rows out of the results, keeping only those rows that satisfy the specified condition; in this case, orders that have a status of "shipped":*/
WHERE Status = 'Shipped'
GROUP BY OrderDate
HAVING COUNT(OrderID) > 1
ORDER BY OrderDate DESC;

/*Selecting expressions*/
SELECT ProductID,
      Name + '(' + ProductNumber + ')',
  ListPrice - StandardCost
FROM Production.Product;
/*Specifying column aliases*/
SELECT ProductID AS ID,
      Name + '(' + ProductNumber + ')' AS ProductName,
  ListPrice - StandardCost AS Markup
FROM Production.Product;
/*CAST and TRY_CAST*/
SELECT CAST(ProductID AS varchar(4)) + ': ' + Name AS ProductName
FROM Production.Product;

SELECT TRY_CAST(Size AS integer) As NumericSize
FROM Production.Product;

/*CONVERT and TRY_CONVERT*/
SELECT CONVERT(varchar(4), ProductID) + ': ' + Name AS ProductName
FROM Production.Product;

SELECT SellStartDate,
       CONVERT(varchar(20), SellStartDate) AS StartDate,
       CONVERT(varchar(10), SellStartDate, 101) AS FormattedStartDate 
FROM SalesLT.Product;

/*PARSE and TRY_PARSE*/

SELECT PARSE('01/01/2021' AS date) AS DateValue,
   PARSE('$199.99' AS money) AS MoneyValue;
   
SELECT ProductID,  '$' + STR(ListPrice) AS Price
FROM Production.Product;

/*ISNULL*/
SELECT FirstName,
      ISNULL(MiddleName, 'None') AS MiddleIfAny,
      LastName
FROM Sales.Customer;
/*COALESCE*/
SELECT COALESCE(&lt;expression_1&gt;[, ...&lt;expression_n&gt;];

SELECT EmployeeID,
      COALESCE(HourlyRate * 40,
                WeeklySalary,
                Commission * SalesQty) AS WeeklyEarnings
FROM HR.Wages;

/*NULLIF*/
SELECT SalesOrderID,
      ProductID,
      UnitPrice,
      NULLIF(UnitPriceDiscount, 0) AS Discount
FROM Sales.SalesOrderDetail;
