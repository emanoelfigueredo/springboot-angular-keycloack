import { Router } from '@angular/router';
import { HttpErrorResponse } from "@angular/common/http";

export function tratarErrosPadroes(erro: any, router: Router) {
  if(erro instanceof HttpErrorResponse) {
    erro as HttpErrorResponse;
    tratarErros500(erro, router);
  }
}

export function tratarErros500(erro: any, router: Router) {
  if(erro.status >= 500) {
    router.navigate(['/server-error'])
  }
}
