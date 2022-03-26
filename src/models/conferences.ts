import { v4 as uuidv4 } from 'uuid';
import { Conference } from '../interfaces/Conference';
const conference: Conference[] = [];
export default {
  addData: (data: Conference) => {
    data.id = uuidv4();
    return conference.push(data);
  },
  addBulkData: (data: Conference[]) => {
    return conference.push(...data);
  },
  getData: () => {
    return conference;
  },
}