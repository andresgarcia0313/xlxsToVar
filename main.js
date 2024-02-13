//Versión compatible con Node.js en el index.html esta la versión compatible con el navegador

const XLSX = require("xlsx");
const path = require("path");
/**
 * Function to convert xlsx file to object
 *
 * @param {*} fileName
 * @returns Array [{name: string, data: Array}]
 */
const xlsxToObject = (fileName) => {
  const xlsxAPI = XLSX.readFile(fileName);
  const spreadSheets = [];
  for (let name of xlsxAPI.SheetNames)
    spreadSheets.push({
      name: name,
      data: XLSX.utils.sheet_to_json(xlsxAPI.Sheets[name]),
    });
  return spreadSheets;
};

const filePath = path.join(__dirname, "1file.xlsx");
const fileData = xlsxToObject(filePath);
for (let sheet of fileData) 
  console.dir(sheet);

console.log("Fin del programa");