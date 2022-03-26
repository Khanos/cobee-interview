import { Conference } from '../interfaces/Conference';
export function isValidConference(conference: Conference) {
  if (typeof conference !== 'object' || !conference.title || !conference.description || !conference.date || !conference.time || !conference.location || !conference.speaker) {
    return false;
  } else {
    return true;
  }
}