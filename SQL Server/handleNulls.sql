/*We've seen some examples of queries that return NULL values. NULL is generally used to denote a value that is unknown. Note that this is not the same as saying the value is none - that would imply that you know that the value is zero or an empty string!

*/
SELECT Name, ISNULL(TRY_CAST(Size AS Integer),0) AS NumericSize
FROM SalesLT.Product;
/*The ISNULL function replaces NULL values with a specified literal value. Sometimes, you may want to achieve the opposite result by replacing an explicit value with NULL. To do this, you can use the NULLLIF function.*/
SELECT ProductNumber, ISNULL(Color, '') + ', ' + ISNULL(Size, '') AS ProductDetailsFROM SalesLT.Product;SELECT Name, NULLIF(Color, 'Multi') AS SingleColorFROM SalesLT.Product;
/*In some scenarios, you might want to compare multiple columns and find the first one that isn't NULL. For example, suppose you want to track the status of a product's availability based on the dates recorded when it was first offered for sale or removed from sale. A product that is currently available will have a SellStartDate, but the SellEndDate value will be NULL. When a product is no longer sold, a date is entered in its SellEndDate column. To find the first non-NULL column, you can use the COALESCE function.*/
SELECT Name, COALESCE(SellEndDate, SellStartDate) AS StatusLastUpdatedFROM SalesLT.Product;