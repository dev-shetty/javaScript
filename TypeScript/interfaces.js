"use strict";
exports.__esModule = true;
var dev = {
    dbId: 123,
    email: "dev@dev.com",
    userId: 45,
    githubToken: "github",
    startTrial: function () {
        return "Trial Started";
    },
    //   no need to match the parameter names
    getCoupon: function (name, off) {
        return "".concat(name).concat(off);
    }
};
var devAdmin = {
    role: "admin",
    dbId: 123,
    email: "dev@dev.com",
    userId: 45,
    githubToken: "github",
    startTrial: function () {
        return "Trial Started";
    },
    //   no need to match the parameter names
    getCoupon: function (name, off) {
        return "".concat(name).concat(off);
    }
};
