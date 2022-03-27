"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidConference = void 0;
function isValidConference(conference) {
    if (typeof conference !== 'object' || !conference.title || !conference.description || !conference.date || !conference.time || !conference.location || !conference.speaker) {
        return false;
    }
    else {
        return true;
    }
}
exports.isValidConference = isValidConference;
