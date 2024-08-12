import { isToday as isTodayFn, isThisWeek as isThisWeekFn, parseISO } from 'date-fns';

export const isToday = (dateString) => {
  const date = parseISO(dateString);
  return isTodayFn(date);
};


export const isThisWeek = (dateString) => {
  const date = parseISO(dateString);
  return isThisWeekFn(date);
};