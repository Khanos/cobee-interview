"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidConference(conference) {
    if (typeof conference !== 'object' || !conference.title || !conference.description || !conference.date || !conference.time || !conference.location || !conference.speaker) {
        return false;
    }
    else {
        return true;
    }
}
exports.default = isValidConference;
