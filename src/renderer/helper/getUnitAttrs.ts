import { W3uUnit } from '@renderer/dataHelper/types';
import local from '@renderer/local';

const getUnitAttrs = (data: W3uUnit): [string, string | number][] =>
  Object.entries(local.COMMON.UNIT_PROPS).reduce((acc, [key, name]) => {
    const value = data[key];
    if (value) {
      if (typeof value === 'number' && parseInt(value.toFixed(1)) !== 0) {
        acc.push([name, typeof value === 'number' ? value.toFixed(1).replace(/\.0$/, '') : value]);
      }
    }
    return acc;
  }, []);

export default getUnitAttrs;