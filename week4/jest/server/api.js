const fs = require('fs');
var listPeople = []


const savePerson = (ctx) => {
    listPeople.push(ctx.request.body)
    fs.writeFileSync('formData.json', JSON.stringify(listPeople))
    ctx.body = listPeople
    ctx.status = 200;
}

const readListPerson = (ctx) => {
    ctx.response.body = fs.readFileSync('formData.json');
    ctx.status = 200;
}

const updateListPerson = (ctx) => {
    let data = ctx.request.body
    const jsonString = fs.readFileSync("formData.json")
    const customer = JSON.parse(jsonString);
    const i = ctx.request.params.id;
    if (i > (customer.length - 1)) {
        ctx.body = { message: "Invalid user!" }
    }
    else {
        customer[i] = data
        const customerJson = JSON.stringify(customer)
        fs.writeFileSync('formData.json', customerJson)
        ctx.body = { message: "Update successful!", customer }
    }
    ctx.status = 200;


}

const deletePerson = (ctx) => {
    const jsonString = fs.readFileSync("formData.json")
    const customer = JSON.parse(jsonString);
    const index = ctx.request.params.id;

    if (customer.length === 0) {
        ctx.body = { message: "List user is blank", customer }
    }
    else if ((index > (customer.length - 1)) && (customer.length !== 0)) {
        ctx.body = { message: "Invalid user!" }
    }
    else {
        customer.splice(index, 1)
        const customerJson = JSON.stringify(customer)
        fs.writeFileSync('formData.json', customerJson)
        ctx.body = { message: "Delete successful!", customer }
    }

    ctx.status = 200;


}

module.exports = {
    savePerson,
    readListPerson,
    updateListPerson,
    deletePerson
};