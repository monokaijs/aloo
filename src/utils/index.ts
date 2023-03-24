import moment from 'moment';

export const getDeepLink = (path = '') => {
  const scheme = 'ns-internal';
  const prefix = `${scheme}://`;
  return prefix + path;
};

export const days = Array.apply(null, Array(7)).map((_, index) => {
  return moment().startOf('isoWeek').add(index, 'day');
});
