/*An extension to the ORDER BY clause called OFFSET-FETCH enables you to return only a range of the rows selected by your query. It adds the ability to supply a starting point (an offset) and a value to specify how many rows you would like to return (a fetch value). This extension provides a convenient technique for paging through results.*/
OFFSET { integer_constant | offset_row_count_expression } { ROW | ROWS }
[FETCH { FIRST | NEXT } {integer_constant | fetch_row_count_expression } { ROW | ROWS } ONLY]
/*To use OFFSET-FETCH, you'll supply a starting OFFSET value, which may be zero, and an optional number of rows to return, as in the following example:

This example will return the first 10 rows, and then return the next 10 rows of product data based on the ListPrice:*/
SELECT ProductID, ProductName, ListPrice
FROM Production.Product
ORDER BY ListPrice DESC 
OFFSET 0 ROWS --Skip zero rows
FETCH NEXT 10 ROWS ONLY; --Get the next 10
/*To retrieve the next page of product data, use the OFFSET clause to specify the number of rows to skip:*/
SELECT ProductID, ProductName, ListPrice
FROM Production.Product
ORDER BY ListPrice DESC 
OFFSET 10 ROWS --Skip 10 rows
FETCH NEXT 10 ROWS ONLY; --Get the next 10