module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var contract = require("truffle-contract");
    var HDWalletProvider = require("truffle-hdwallet-provider");

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "hoge hoge"
        };
    }
    context.done();
};