import { CHANGE_HEADER } from './actionsTypes';

export function changeHomescreen(header) {
  return { type: CHANGE_HEADER, isHeader: header };
}
