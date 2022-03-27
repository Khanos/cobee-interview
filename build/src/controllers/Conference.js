"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conferences_1 = __importDefault(require("../models/conferences"));
const validateConference_1 = require("../utils/validateConference");
exports.default = {
    addConference: (req, res) => {
        const conference = req.body;
        if ((0, validateConference_1.isValidConference)(conference)) {
            conferences_1.default.addData(conference);
            return res.json({
                status: 'success',
                message: 'Conference added successfully',
                error: null,
                data: null
            });
        }
        else {
            return res.json({
                status: 'error',
                message: 'Conference not added',
                error: 'Invalid conference',
                data: null
            });
        }
    },
    getConferences: (req, res) => {
        const conferences = conferences_1.default.getData();
        return res.json({
            status: 'success',
            message: 'Conferences retrieved successfully',
            error: null,
            data: conferences
        });
    },
    getCongerenceByAuthor: (req, res) => {
        const author = req.params.author;
        const conferences = conferences_1.default.getData();
        const conferencesByAuthor = conferences.filter(conference => conference.speaker.indexOf(author) !== -1);
        return res.json({
            status: 'success',
            message: 'Conferences retrieved successfully',
            error: null,
            data: conferencesByAuthor
        });
    }
};
