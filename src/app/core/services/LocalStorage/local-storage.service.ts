import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // Other methods for managing local storage (e.g., session storage)

  // Example: save user data to local storage


  constructor() { }

  saveItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item? item : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearAll(): void {
    localStorage.clear();
  }

}
