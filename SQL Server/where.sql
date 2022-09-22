/*AND operators are processed before OR operators, unless parentheses are used. For best practice, use parentheses when using more than two predicates. The following query returns products in category 2 OR 3 AND cost less than 10.00:*/
SELECT ProductCategoryID AS Category, ProductName
FROM Production.Product
WHERE (ProductCategoryID = 2 OR ProductCategoryID = 3)
    AND (ListPrice < 10.00);
/*Comparison operators
Transact-SQL includes comparison operators that can help simplify the WHERE clause.

IN
The IN operator is a shortcut for multiple equality conditions for the same column connected with OR. There's nothing wrong with using multiple OR conditions in a query, as in the following example:*/
SELECT ProductCategoryID AS Category, ProductName
FROM Production.Product
WHERE ProductCategoryID = 2
    OR ProductCategoryID = 3
    OR ProductCategoryID = 4;
/*However, using IN is clear and concise, and the performance of the query won't be affected.*/
SELECT ProductCategoryID AS Category, ProductName
FROM Production.Product
WHERE ProductCategoryID IN (2, 3, 4);
/*BETWEEN
BETWEEN is another shortcut that can be used when filtering for an upper and lower bound for the value instead of using two conditions with the AND operator. The following two queries are equivalent:*/
SELECT ProductCategoryID AS Category, ProductName
FROM Production.Product
WHERE ListPrice >= 1.00
    AND ListPrice <= 10.00;

SELECT ProductCategoryID AS Category, ProductName
FROM Production.Product
WHERE ListPrice BETWEEN 1.00 AND 10.00;
/*The BETWEEN operator uses inclusive boundary values. Products with a price of either 1.00 or 10.00 would be included in the results. BETWEEN is also helpful when querying date fields. For example, the following query will include all product names modified between January 1, 2012 and December 31, 2012:*/
SELECT ProductName, ModifiedDate
FROM Production.Product
WHERE ModifiedDate BETWEEN '2012-01-01' AND '2012-12-31';
/*LIKE*/
SELECT Name, ListPrice
FROM SalesLT.Product
WHERE Name LIKE '%mountain%';
/*You can use the _ (underscore) wildcard to represent a single character, like this:*/
SELECT ProductName, ListPrice
FROM SalesLT.Product
WHERE ProductName LIKE 'Mountain Bike Socks, _';
/*You can also define complex patterns for strings that you want to find. For example, the following query searched for products with a name that starts with "Mountain-", then followed by:

three characters between 0 and 9
a space
any string
a comma
a space
two characters between 0 and 9*/
SELECT ProductName, ListPrice
FROM SalesLT.Product
WHERE ProductName LIKE 'Mountain-[0-9][0-9][0-9] %, [0-9][0-9]';
Filter results with the WHERE clause
Most queries for application development or reporting involve filtering the data to match specified criteria. You typically apply filtering criteria as a predicate in a WHERE clause of a query.

In Azure Data Studio, replace the existing query with the following code:

SELECT Name, Color, Size
FROM SalesLT.Product
WHERE ProductModelID = 6
ORDER BY Name;
Run the query and review the results, which contain the Name, Color, and Size for each product with a ProductModelID value of 6 (this is the ID for the HL Road Frame product model, of which there are multiple variants).

Replace the query with the following code, which uses the not equal (<>) operator, and run it.

SELECT Name, Color, Size
FROM SalesLT.Product
WHERE ProductModelID <> 6
ORDER BY Name;

Review the results. This time the results include products with a ProductNumber that matches patterns similar to FR-xNNx-NN (in which x is a letter and N is a numeral).

Tip: To learn more about pattern-matching with the LIKE operator, see the Transact-SQL documentation.

SELECT ProductCategoryID, Name, ListPrice, SellEndDate
FROM SalesLT.Product
WHERE ProductCategoryID IN (5,6,7) AND SellEndDate IS NULL;