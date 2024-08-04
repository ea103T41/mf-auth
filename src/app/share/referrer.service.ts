import { Injectable } from '@angular/core';
import { Referrer } from '../models/referrer';

@Injectable({
  providedIn: 'root',
})
export class ReferrerService {
  private referrerKey = 'app_referrer';

  setReferrer(url: string): void {
    const referrer: Referrer = { url };
    localStorage.setItem(this.referrerKey, JSON.stringify(referrer));
  }

  getReferrer(): Referrer | null {
    const referrerJson = localStorage.getItem(this.referrerKey);
    return referrerJson ? JSON.parse(referrerJson) : null;
  }

  clearReferrer(): void {
    localStorage.removeItem(this.referrerKey);
  }

}
