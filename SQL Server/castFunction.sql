SELECT CAST(ProductID AS varchar(5)) + ': ' + Name AS ProductNameFROM SalesLT.Product; 
SELECT CONVERT(varchar(5), ProductID) + ': ' + Name AS ProductNameFROM SalesLT.Product; 
SELECT SellStartDate,   CONVERT(nvarchar(30), SellStartDate) AS ConvertedDate,   CONVERT(nvarchar(30), SellStartDate, 126) AS ISO8601FormatDateFROM SalesLT.Product; 
/*Returns an error*/SELECT Name, CAST(Size AS Integer) AS NumericSizeFROM SalesLT.Product; /*Returns some fields with null values*/
SELECT Name, TRY_CAST(Size AS Integer) AS NumericSizeFROM SalesLT.Product; 