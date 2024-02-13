const XLSX = require('xlsx');
const fs = require('fs');
const nombreArchivoExcel = 'archivo.xlsx';
const workbook = XLSX.readFile(nombreArchivoExcel);
const sheetName = workbook.SheetNames[0];
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
const jsonData = JSON.stringify(data);
console.log(jsonData);
//Imprimir de forma tabulada en
fs.writeFileSync('datos.js', `const datos = ${jsonData};`);

console.log('Datos convertidos y guardados en datos.js');
