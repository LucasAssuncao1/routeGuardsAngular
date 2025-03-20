import { CanActivateChildFn } from '@angular/router';

export const canActiveChildGuard: CanActivateChildFn = (childRoute, state) => {

  console.log(childRoute);
  console.log(state);
  if(childRoute.queryParams['account'] === 'admin' && childRoute.queryParams['password'] === '1234') {
  
    return true;
  }
  return false;
};
