const Koa = require('koa');
const KoaRouter = require('koa-router');
const app = new Koa();
const router = new KoaRouter();

app.use((router.routes())).use(router.allowedMethods());

router.get('/', ctx => {
    ctx.body = '<h1>ANA SAYFA</h1>';
});
router.get('/about', ctx => {
    ctx.body = '<h1>ABOUT SAYFASI</h1>';
});
router.get('/contact', ctx => {
    ctx.body = '<h1>CONTACT SAYFASI</h1>';
});




app.listen(3000, () => {
    console.log('3000 nolu porttan dinleniyor.');
});