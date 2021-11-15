let posts = [];
let i = 3;
posts.push({name: 'post 1', id : 0});
posts.push({name: 'post 3', id : 2});
posts.push({name: 'post 2', id : 1});

function addPost(post) {
    return new Promise((resolve, reject) => {
        console.log('Postunuz ekleniyor...');
        if(post){
            posts.push(post);
            post.id = i;
            i++;
            resolve("Postunuz eklendi.")
        } else {
            reject('Postunuz eklenirken bir hata oluştu.')
        }
    })
}

function orderPosts (arr) {
    return new Promise((resolve, reject) => {
        console.log('Postlarınız düzenleniyor...');
        if(arr.length) {
            arr.sort(function(a,b){
                return b.id-a.id;
            });
            resolve('Postlar düzenlendi');
            console.log(arr);
        } else {
            reject('Postlarınız düzenlenirken bir hata oluştu.')
        }
    })
};

addPost({name: 'post 12'})
.then(result => {
    return orderPosts(posts);
}).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err)
});