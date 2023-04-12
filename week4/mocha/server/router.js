const Router = require("koa-router");
const router = new Router();

const { savePerson, readListPerson, updateListPerson, deletePerson } = require("./api.js")




router.post("/", savePerson);

router.get("/data", readListPerson);

router.put("/update/:id", updateListPerson);

router.delete("/delete/:id", deletePerson);


module.exports = router;

