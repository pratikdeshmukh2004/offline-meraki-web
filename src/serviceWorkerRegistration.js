// src/serviceWorkerRegistration.js

import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');

  wb.register()
    .then(registration => {
      console.log('Service Worker registered:', registration);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}
