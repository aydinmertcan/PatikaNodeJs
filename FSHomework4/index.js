const fs = require('fs');
//#region Write File
fs.writeFile('FSHomework4/employees.json', '{"name": "Employee 1 name", "salary": 2000}', 'utf8', (err,data) => {
    if(err) console.log('Error occured while file is writing...');
    console.log('Json file is successfully created.');
});
//#endregion

//#region Read File
fs.readFile('FSHomework4/employees.json','utf-8',(err, data) => {
    if(err) console.log('Error occured while file is reading...');
    console.log(data);
    console.log('Json file is successfully read.');
})
//#endregion

//#region Update File
fs.writeFile('FSHomework4/employees.json', '{"name": "Employee 2 editted name", "salary": 3000}', 'utf8', (err,data) => {
        if(err) console.log('Error occured while file is writing...');
        console.log('Json file is successfully updated.');
    });
//#endregion

//#region Delete File
fs.unlink('FSHomework4/employees.json',(err) => {
    if (err) console.log('Error occured while file is reading...');
    console.log('Json file is successfully deleted.')
})
//#endregion