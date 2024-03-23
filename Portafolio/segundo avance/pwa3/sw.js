self.addEventListener('install', event => {
    // console.log(event);
    console.log("SW instalando el service worker");

    const installing = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Instalacion finalizada");
        }, 1000);
        self.skipWaiting();
        resolve();
    });
    event.waitUntil(installing);
})


self.addEventListener('activate', event => {
    console.log("Service worker activated");
})
