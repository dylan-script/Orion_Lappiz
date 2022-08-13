SELECT [dbo].[Kuiper_Lappiz_Clientes].Nombre, [dbo].[Kuiper_Lappiz_ServiciosIT].NombreServicio, [dbo].[Kuiper_Lappiz_Procesos].CEProceso
FROM  [dbo].[Kuiper_Lappiz_Clientes] JOIN [dbo].[Kuiper_Lappiz_ServiciosIT], [dbo].[Kuiper_Lappiz_Procesos]
SELECT * FROM [dbo].[Orion_Lappiz_Tercero];
SELECT CONCAT(Nombre1, ' ', Nombre2, ' ', Apellido1, ' ', Apellido2) as Nombre FROM [dbo].[Orion_Lappiz_Tercero]