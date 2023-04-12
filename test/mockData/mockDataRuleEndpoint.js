// "domain": "ngoc-vm.myshopify.com",
// "accessKey": "BDkUTTtmgJPv1SATbbGr3rQBdPaXj2zYvF7DTMC65QI="
const domain = "ngoc-vm.myshopify.com"
const accessKey = "BDkUTTtmgJPv1SATbbGr3rQBdPaXj2zYvF7DTMC65QI="

// data rq on /get-rule-by-domain: correct
const mockDataGetRuleByDomainId0 = {
    domain: domain,
    accessKey: accessKey
}

// data rq on /get-rule-by-domain: wrong domain
const mockDataGetRuleByDomainId1 = {
    domain: "ngoc-vm.myshopify",
    accessKey: accessKey
}

// data rq on /get-rule-by-domain: wrong accessKey
const mockDataGetRuleByDomainId2 = {
    domain: domain,
    accessKey: "hdgashjgdjfsfakhjhfshf"
}

// data rq on /get-rule-by-domain: domain is blank
const mockDataGetRuleByDomainId3 = {
    domain: "",
    accessKey: accessKey
}

// data rq on /get-rule-by-domain: accessKey is blank
const mockDataGetRuleByDomainId4 = {
    domain: domain,
    accessKey: ""
}

// data rq on /get-rule-by-domain: missing domain
const mockDataGetRuleByDomainId5 = {
    accessKey: accessKey
}

// data rq on /get-rule-by-domain: missing accessKey
const mockDataGetRuleByDomainId6 = {
    domain: domain
}

// data rq on /get-rule-by-domain: missing both domain and accessKey
const mockDataGetRuleByDomainId7 = {}

// data rq on /get-rule-by-domain: wrong format
const mockDataGetRuleByDomainId8 = "text"

// data rq on /get-rule-by-id: correct
const mockDataGetRuleByDomainId9 =
{
    "domain": domain,
    "accessKey": accessKey,
    "id": 1160
}

// data rq on /get-rule-by-id: wrong domain
const mockDataGetRuleByDomainId10 = {
    ...mockDataGetRuleByDomainId1,
    "id": 1160
}

// data rq on /get-rule-by-id: wrong accessKey
const mockDataGetRuleByDomainId11 = {
    ...mockDataGetRuleByDomainId2,
    "id": 1160
}

// data rq on /get-rule-by-id: domain is blank
const mockDataGetRuleByDomainId12 = {
    ...mockDataGetRuleByDomainId3,
    "id": 1160
}

// data rq on /get-rule-by-id: accessKey is blank
const mockDataGetRuleByDomainId13 = {
    ...mockDataGetRuleByDomainId4,
    "id": 1160
}

// data rq on /get-rule-by-id: missing domain
const mockDataGetRuleByDomainId14 = {
    ...mockDataGetRuleByDomainId5,
    "id": 1160
}

// data rq on /get-rule-by-id: missing acessKey
const mockDataGetRuleByDomainId15 = {
    ...mockDataGetRuleByDomainId6,
    "id": 1160
}

// data rq on /get-rule-by-id: missing both domain and accessKey
const mockDataGetRuleByDomainId16 = {
    ...mockDataGetRuleByDomainId7,
    "id": 1160
}

// data rq on /get-rule-by-id: id doesn't exist
const mockDataGetRuleByDomainId17 = {
    ...mockDataGetRuleByDomainId0,
    "id": 1578
}

// data rq on /get-rule-by-id: id is blank
const mockDataGetRuleByDomainId18 = {
    ...mockDataGetRuleByDomainId0,
    "id": ""
}

// data rq on /get-rule-by-id: id is too long
const mockDataGetRuleByDomainId19 = {
    ...mockDataGetRuleByDomainId0,
    "id": 111111111111111
}

// data rq on /get-rule-by-id: id is a character
const mockDataGetRuleByDomainId20 = {
    ...mockDataGetRuleByDomainId0,
    "id": "hoa"
}

// data rq on /get-rule-by-id: id is missing
const mockDataGetRuleByDomainId21 = {
    ...mockDataGetRuleByDomainId0
}






module.exports = {
    mockDataGetRuleByDomainId0,
    mockDataGetRuleByDomainId1,
    mockDataGetRuleByDomainId2,
    mockDataGetRuleByDomainId3,
    mockDataGetRuleByDomainId4,
    mockDataGetRuleByDomainId5,
    mockDataGetRuleByDomainId6,
    mockDataGetRuleByDomainId7,
    mockDataGetRuleByDomainId8,
    mockDataGetRuleByDomainId9,
    mockDataGetRuleByDomainId10,
    mockDataGetRuleByDomainId11,
    mockDataGetRuleByDomainId12,
    mockDataGetRuleByDomainId13,
    mockDataGetRuleByDomainId14,
    mockDataGetRuleByDomainId15,
    mockDataGetRuleByDomainId16,
    mockDataGetRuleByDomainId17,
    mockDataGetRuleByDomainId18,
    mockDataGetRuleByDomainId19,
    mockDataGetRuleByDomainId20,
    mockDataGetRuleByDomainId21


}


