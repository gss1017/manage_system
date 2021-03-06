import pathToRegexp from 'path-to-regexp';
import reduce from 'lodash/reduce';
import filter from 'lodash/filter';

const getMenuMatchKeys = (flatMenuKeys, paths) =>
  reduce(paths, (matchKeys, path) => (
    matchKeys.concat(filter(flatMenuKeys, item => pathToRegexp(item).test(path)))
  ), []);

export default getMenuMatchKeys;
