const axios = require('axios');

const newItem = {

    "domain": "ngoc-vm.myshopify.com",
    "accessKey": "BDkUTTtmgJPv1SATbbGr3rQBdPaXj2zYvF7DTMC65QI="
};
// axios.post('https://b2b-solution-public-api.bsscommerce.com/api/v1/qb/get-by-domain', newItem)
//     .then(res => {
//         console.log(res.data)
//     })

fetch('https://b2b-solution-public-api.bsscommerce.com/api/v1/qb/get-by-domain', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newItem)
}).then()
const data = response.json();
console.log(data)