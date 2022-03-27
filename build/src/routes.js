"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Conference_1 = __importDefault(require("./controllers/Conference"));
class IndexRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initMiddleware();
        this.initRoutes();
    }
    initMiddleware() {
        // Middleware
        this.router.use((req, res, next) => {
            next();
        });
    }
    initRoutes() {
        // Conference routes
        this.router.get('/getConferences', Conference_1.default.getConferences);
        this.router.get('/getCongerenceByAuthor/:author', Conference_1.default.getCongerenceByAuthor);
        this.router.post('/addConference', Conference_1.default.addConference);
        this.router.post('/addMultipleConferences', Conference_1.default.addMultipleConferences);
    }
}
const indexRoutes = new IndexRouter();
exports.default = indexRoutes.router;
