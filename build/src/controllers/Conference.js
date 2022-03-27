"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conferences_1 = __importDefault(require("../models/conferences"));
const validateConference_1 = __importDefault(require("../utils/validateConference"));
class ConferenceController {
    addConference(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!(0, validateConference_1.default)(req.body)) {
                    throw new Error('Invalid conference');
                }
                const conference = yield conferences_1.default.addData(req.body);
                res.json({
                    status: 'success',
                    message: 'Conference added successfully',
                    error: null,
                    data: conference
                });
            }
            catch (error) {
                res.status(500).json({
                    status: 'error',
                    message: error,
                    error: error,
                    data: null
                });
            }
        });
    }
    addMultipleConferences(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.body && req.body.length > 0) {
                    const conferences = req.body;
                    conferences.forEach((conference) => __awaiter(this, void 0, void 0, function* () {
                        if (!(0, validateConference_1.default)(conference)) {
                            throw new Error('Invalid conference');
                        }
                        yield conferences_1.default.addData(conference);
                    }));
                    res.json({
                        status: 'success',
                        message: 'Conference added successfully',
                        error: null,
                        data: conferences
                    });
                }
                else {
                    throw new Error('Invalid conferences array');
                }
            }
            catch (error) {
                res.status(500).json({
                    status: 'error',
                    message: error,
                    error: error,
                    data: null
                });
            }
        });
    }
    getConferences(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conferences = yield conferences_1.default.getData();
                res.json({
                    status: 'success',
                    message: 'Conferences retrieved successfully',
                    error: null,
                    data: conferences
                });
            }
            catch (error) {
                res.status(500).json({
                    status: 'error',
                    message: 'Internal server error',
                    error: error,
                    data: null
                });
            }
        });
    }
    getCongerenceByAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const author = req.params.author;
                const conferences = conferences_1.default.getData();
                const conferencesByAuthor = conferences.filter(conference => conference.speaker.indexOf(author) !== -1);
                res.json({
                    status: 'success',
                    message: 'Conferences retrieved successfully',
                    error: null,
                    data: conferencesByAuthor
                });
            }
            catch (error) {
                res.status(500).json({
                    status: 'error',
                    message: 'Internal server error',
                    error: error,
                    data: null
                });
            }
        });
    }
}
exports.default = new ConferenceController();
