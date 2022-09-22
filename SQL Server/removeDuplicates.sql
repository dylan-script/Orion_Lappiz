/*T-SQL also supports an alternative the DISTINCT keyword, which removes any duplicate result rows:*/
SELECT DISTINCT City, CountryRegion
FROM Production.Supplier
ORDER BY CountryRegion, City;