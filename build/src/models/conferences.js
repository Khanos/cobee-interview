"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const conference = [];
exports.default = {
    addData: (data) => {
        data.id = (0, uuid_1.v4)();
        return conference.push(data);
    },
    addBulkData: (data) => {
        return conference.push(...data);
    },
    getData: () => {
        return conference;
    },
};
