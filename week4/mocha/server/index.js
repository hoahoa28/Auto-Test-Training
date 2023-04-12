const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./router");
const App = new Koa();

const port = 8000;


App.use(parser())
    .use(cors())
    .use(router.routes())
//.listen(port, () => {
// console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`);
// }
// );

if (require.main === module) {
    App.listen(port, () =>
        console.log(`Example app listening on port http://127.0.0.1:${port}!`),
    );
}

