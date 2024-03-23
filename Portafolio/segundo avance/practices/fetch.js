// Fetch API: Fetch es una API moderna para realizar solicitudes HTTP.
// Con Fetch, puedes realizar solicitudes de red de manera asíncrona y manejar las respuestas de manera más eficiente.


// GET: Utilizado para recuperar datos de un recurso específico en el servidor. 
// Se envía al servidor como parte de la URL. 

// fetch('https://jsonplaceholder.typicode.com/posts/1', {method: 'GET'})
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));


// POST: Utilizado para enviar datos al servidor para crear o actualizar un recurso. 
// Los datos se envían en el cuerpo del mensaje HTTP.

// const data = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1
//   };
  
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
  



// Blob: Fetch también permite trabajar con objetos Blob para manejar datos binarios, como imágenes, audio, video, etc. 
// Esto es útil cuando necesitas descargar o cargar archivos binarios.

// fetch('data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7')
//   .then(response => response.blob())
//   .then(blob => {
//     const url = URL.createObjectURL(blob);
//     const img = document.createElement('img');
//     img.src = url;
//     document.body.appendChild(img);
//   })
//   .catch(error => console.error('Error:', error));


// response.clone() es un método en JavaScript que se utiliza para clonar un objeto de respuesta Fetch. 
// La necesidad de clonar una respuesta surge especialmente cuando deseas consumir el cuerpo de la respuesta Fetch más de una vez.


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    const clonedResponse = response.clone();

    response.json().then(data => {
      console.log('Datos de la respuesta original:', data);
    });

    clonedResponse.text().then(text => {
      console.log('Texto de la respuesta clonada:', text);
    });
  })
  .catch(error => console.error('Error:', error));