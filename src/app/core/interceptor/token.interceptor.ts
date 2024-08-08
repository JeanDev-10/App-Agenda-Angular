import { HttpInterceptorFn, HttpHeaders } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // Creamos una constante para setear los header y poder enviar el token de tipo bearer
  const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);

  const reqClone = req.clone({headers});

  return next(reqClone);
};
