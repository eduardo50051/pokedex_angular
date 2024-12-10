import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  
  const router = new Router();

  const Logado = localStorage.getItem('estalogado'); 

 
  if (Logado) {
 
    return true; 

  }
  
  
  alert(' voce nao esta logado ');
 
  router.navigate(['/login']);
  
  return false; 


};
