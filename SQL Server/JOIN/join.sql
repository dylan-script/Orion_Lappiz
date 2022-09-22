SELECT p.ProductID, m.Name AS Model, p.Name AS Product
FROM SalesLT.Product AS p, SalesLT.ProductModel AS m
WHERE p.ProductModelID = m.ProductModelID;
/*p is the alias for ProductTable and m is the alias for ModelTable*/
SELECT p.ProductID, m.Name AS Model, p.Name AS Product
FROM SalesLT.Product AS p
JOIN SalesLT.ProductModel AS m
    ON p.ProductModelID = m.ProductModelID;
/*El tipo más frecuente de operación JOIN en las consultas T-SQL es INNER JOIN. Las combinaciones internas se usan para resolver muchos problemas empresariales comunes, especialmente en entornos de base de datos muy normalizados. Para recuperar datos que se han almacenado en varias tablas, a menudo tendrá que combinarlos mediante consultas INNER JOIN. INNER JOIN comienza su fase de procesamiento lógico como un producto cartesiano y después se filtra para quitar las filas que no coinciden con el predicado.*/
1) SELECT emp.FirstName, ord.Amount
2) FROM HR.Employee AS emp 
3) JOIN Sales.SalesOrder AS ord
4)      ON emp.EmployeeID = ord.EmployeeID;
/*Como debería saber, la cláusula FROM se procesará antes que la cláusula SELECT. Se realizará el seguimiento del procesamiento, empezando por la línea 2:

La cláusula FROM especifica HR.Employee como una de las tablas de entrada, y le asigna el alias emp.
El operador JOIN de la línea 3 refleja el uso de INNER JOIN (el tipo predeterminado en T-SQL) y especifica Sales.SalesOrder como la otra tabla de entrada, que tiene un alias de ord.
SQL Server realizará una combinación cartesiana lógica en estas tablas y pasará los resultados como una tabla virtual al paso siguiente. (Es posible que el procesamiento físico de la consulta no realice realmente la operación del producto cartesiano, en función de las decisiones del optimizador. Pero puede resultar útil imaginar el producto cartesiano que se está creando).
Con la cláusula ON, SQL Server filtrará la tabla virtual y solo mantendrá aquellas filas en las que un valor EmployeeID de la tabla emp coincida con un valor EmployeeID de la tabla ord.
Las filas restantes se dejan en la tabla virtual y se entregan al paso siguiente en la instrucción SELECT. En este ejemplo, la tabla virtual se procesa a continuación mediante la cláusula SELECT y las dos columnas especificadas se devuelven a la aplicación cliente.
El resultado de la consulta completada es una lista de empleados y las cantidades de sus pedidos. Los empleados que no tienen ningún pedido asociado se han filtrado por la cláusula ON, al igual que los pedidos que tienen un valor EmployeeID que no se corresponde con una entrada en la tabla HR.Employee.*/
SELECT emp.FirstName, ord.Amount
FROM HR.Employee AS emp 
INNER JOIN Sales.SalesOrder AS ord

/*Al escribir consultas mediante combinaciones internas, tenga en cuenta las instrucciones siguientes:

Se prefieren alias de tabla, no solo para la lista SELECT, sino también para escribir la cláusula ON.
Las combinaciones internas se pueden realizar en una sola columna coincidente, como OrderID, o bien en varios atributos coincidentes, como la combinación de OrderID y ProductID. Las combinaciones que especifican varias columnas coincidentes se denominan combinaciones compuestas.
El orden de enumeración de las tablas en la cláusula FROM de una operación INNER JOIN no es importante para el optimizador de SQL Server. Conceptualmente, las combinaciones se evaluarán de izquierda a derecha.
Use la palabra clave JOIN una vez para cada par de tablas combinadas de la lista FROM. Para una consulta de dos tablas, especifique una combinación. Para una consulta de tres tablas, usará JOIN dos veces; una vez entre las dos primeras tablas y una segunda entre la salida de JOIN entre las dos primeras tablas y la tercera.
Ejemplos de INNER JOIN
En el ejemplo hipotético siguiente se realiza una combinación en una sola columna coincidente, lo que relaciona ProductModelID de la tabla Production.Product con ProductModelID de la tabla Production.ProductModel:

SQL

Copiar*/
SELECT p.ProductID, m.Name AS Model, p.Name AS Product
FROM Production.Product AS p
INNER JOIN Production.ProductModel AS m
    ON p.ProductModelID = m.ProductModelID
ORDER BY p.ProductID;
/*En el ejemplo siguiente se muestra cómo se puede extender una combinación interna para incluir más de dos tablas. La tabla Sales.SalesOrderDetail se une a la salida de JOIN entre Production.Product y Production.ProductModel. Cada instancia de JOIN/ON realiza sus propias operaciones de rellenado y filtrado de la tabla de salida virtual. El optimizador de consultas de SQL Server determina el orden en el que se realizarán las combinaciones y el filtrado.

SQL

Copiar
*/
SELECT od.SalesOrderID, m.Name AS Model, p.Name AS ProductName, od.OrderQty
FROM Production.Product AS p
INNER JOIN Production.ProductModel AS m
    ON p.ProductModelID = m.ProductModelID
INNER JOIN Sales.SalesOrderDetail AS od
    ON p.ProductID = od.ProductID
ORDER BY od.SalesOrderID;