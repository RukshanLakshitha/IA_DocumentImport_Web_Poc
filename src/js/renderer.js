var documentData;
const gridColumns = [
    {field: 'id', title: 'Id', class: 'main-header'},
    {field: 'filename', title: 'File Name', class: 'main-header', editable: {type: 'text', mode: 'inline', showbuttons: false}},
    {field: 'numberofpages', title: 'Number Of Pages', class: 'main-header'},
    {field: 'client', title: 'Client', class: 'main-header'},
    {field: 'scannerseries', title: 'Scanner series', class: 'main-header'},
    {field: 'documenttype', title: 'Document type', class: 'main-header'},
    {field: 'scanningdate', title: 'Scanning Date', class: 'main-header', editable:{type: 'date',  viewformat: 'yyyy-mm-dd'}}]; //editable: {type: 'date'}format: 'dd-mm-yyyy', viewformat: 'dd-mm-yyyy'

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