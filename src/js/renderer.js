var documentData;
const gridColumns = [
    {field: 'id', title: 'Id'},
    {field: 'filename', title: 'File Name', editable: {type: 'text'}},
    {field: 'numberofpages', title: 'Number Of Pages'},
    {field: 'client', title: 'Client'},
    {field: 'scannerseries', title: 'Scanner series'},
    {field: 'documenttype', title: 'Document type'},
    {field: 'scanningdate', title: 'Scanning Date'},];

$(document).ready(_ => {
    $.getJSON("http://localhost:3000/Documents", PopulateMainGrid);
});

/**
 * populate main data grid
 * 
 * @param {any} data
 */
function PopulateMainGrid(data){
    documentData = data;
    
    $("#mainGrid").bootstrapTable({
        columns: gridColumns,
        data: documentData
    });
}