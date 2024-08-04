import { Injectable } from '@angular/core';
import { Referrer } from '../models/referrer';

@Injectable({
  providedIn: 'root',
})
export class ReferrerService {
  constructor() {}

  private referrer: Referrer | null = null;

  setReferrer(url: string): void {
    this.referrer = { url };
  }

  getReferrer(): Referrer | null {
    return this.referrer;
  }

  clearReferrer(): void {
    this.referrer = null;
  }

}
