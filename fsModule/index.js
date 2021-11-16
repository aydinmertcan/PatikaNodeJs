const fs = require('fs');
//#region Dosya Okuma
// fs.readFile('fsModule/password.txt','utf8',(err, data) => {
//     if(err) console.log(err);
//     console.log(data);
//     console.log('Dosya okundu.');
// });
//#endregion

//#region Dosya Yazma
// fs.writeFile('fsModule/example.json', '{"name" : "Arin", "age" : 6}', 'utf8', (err) => {
//     if(err) console.log(err);
//     console.log('Json dosya başarılı bir şekilde oluşturuldu.')
// });
//#endregion

//#region Veri Ekleme
// fs.appendFile('fsModule/example.txt', '\nPatika.dev', 'utf8', (err) => {
//     if(err) console.log(err);
//     console.log('2. dosya başarılı bir şekilde eklendi.');
// });
//#endregion

//#region Dosya Silmek
// fs.unlink('fsModule/example.json',(err) => {
//     if(err) console.log(err);
//     console.log('Dosya silindi.')
// })
//#endregion

//#region Klasör Oluşturmak
// fs.mkdir('fsModule/uploads/img',{recursive: true},(err) => {
//     if(err) console.log(err);
//     console.log('Klasörler oluşturuldu.');
// })
//#endregion

//#region Klasör Silmek
fs.rmdir('fsModule/uploads',{recursive: true},(err) => {
    if(err) console.log(err);
    console.log('Klasörler silindi.');
})
//#endregion