import { CanActivateFn } from '@angular/router';

export const sellerDashboardGuard: CanActivateFn = (route, state) => {
  return true;
};
