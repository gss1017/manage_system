import isEmpty from 'lodash/isEmpty';
import isArray from 'lodash/isArray';
import indexOf from 'lodash/indexOf';
import isString from 'lodash/isString';
import isFunction from 'lodash/isFunction';

// 检测当前用户的权限是否被许可
const checkPermissions = (authorities, permissions) => {
  if (isEmpty(permissions)) {
    return true;
  }

  if (isArray(authorities)) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < authorities.length; i++) {
      if (indexOf(permissions, authorities[i]) !== -1) {
        return true;
      }
    }
    return false;
  }

  if (isString(authorities)) {
    return indexOf(permissions, authorities) !== -1;
  }

  if (isFunction(authorities)) {
    return authorities(permissions);
  }

  throw new Error('[react-acl-router] Unsupport type of authorities');
};

export default checkPermissions;
