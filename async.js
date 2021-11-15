//#region 
function getData(data) {
    return new Promise((resolve, reject) => {
        console.log("Veriler alınmaya çalışılıyor...");
        if (data) {
            resolve("Veriler alındı");
        } else {
            reject('Veriler alınamadı');
        }
    })
};


function cleanData(recievedData) {
    return new Promise((resolve, reject) => {
        console.log("Veriler düzenleniyor...");

        if (recievedData) {
            resolve("Veriler silindi.");
        } else {
            reject("Veriler düzenlenemedi.")
        }
    })
};

// getData(true)
//     .then(result => {
//         console.log(result);
//         return cleanData(true);
//     }).then(result => {
//         console.log(result);
//     }).catch(err => {
//         console.log(err);
//     });

async function processData() {
    try {
        const recievedData = await getData(true);
        console.log(recievedData);
        const cleanedData = await cleanData(false);
        console.log(cleanedData);
    } catch (err) {
        console.log(err);
    }
}
processData();
//#endregion

