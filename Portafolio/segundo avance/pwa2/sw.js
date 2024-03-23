self.addEventListener('fetch', event => {
    // console.log("Hola mundo, ... hola mundoo 2");
    console.log(event.request.url);

    if (event.request.url.includes('styles.css')) {
        let r = new Response(`
            body {
                background-color: black;
                color: white;
            }
        `, {
            headers: {
                'Content-Type': 'text/css'
            }
        });

        event.respondWith(r);
    } else if (event.request.url.includes('dog.jpeg')) {
        event.respondWith(

            fetch(`${event.request.url}/img/rocket.jpeg`)
                .then(response => {
                    console.log(response);
                    return response;
                })
                
        );
    }
});
