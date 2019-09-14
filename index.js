"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var PORT = 3000;
server_1.default.listen(PORT, function (err) {
    if (err) {
        return console.log(err);
    }
    return console.log("Server is listening on " + PORT);
});
