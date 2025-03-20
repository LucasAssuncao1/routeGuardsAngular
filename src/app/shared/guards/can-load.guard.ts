import { CanMatchFn } from '@angular/router';

export const canLoadGuard: CanMatchFn = (route, segments) => {
  console.log(route);
  console.log(segments);

  if(segments[1]?.path === 'leads'){
    return true;

  }
  alert('Módulo não foi carregado.')
  return false;
};
