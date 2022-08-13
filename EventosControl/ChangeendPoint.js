var BodyEmpresa = {
    "take": 10,
    "skip": 0,
    "page": 1,
    "pageSize": 10,
    "tenantId": "null",
    "attributes": ["Id", "CENombre", "Nit"],
    "filter": { "logic": "or", "filters": [{ "field": "[ASR_Lappiz_EmpresasBeneficiarias].[FkEmpresa]", "operator": "eq", "value": `${e.dataItem.Id}` }] }
}

$.ajax({
    async: false, url: `${backandGlobal.api2}/${sessionStorage.configAppName}.api/api/lappiz/get/ASR_Lappiz_EmpresasBeneficiarias`, type: 'POST', data: JSON.stringify(BodyEmpresa),
    beforeSend: function (xhr) { xhr.setRequestHeader('Content-Type', 'application/json'); xhr.setRequestHeader('Authorization', localStorage.Authorization); },
    success: function (resultInmuSis) {
        $('#dd00c309-e93b-4c61-b988-fb8246a1b125').data('kendoDropDownList').setDataSource(resultInmuSis.data.rows);
    }
})