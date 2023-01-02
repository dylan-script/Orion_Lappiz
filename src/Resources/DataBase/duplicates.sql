
SELECT Identification, COUNT(Identification) AS Num_Repeticiones
FROM Orion_Lappiz_Users
GROUP BY Identification
HAVING COUNT (Identification) > 1