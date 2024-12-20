const http = require('http');

const server = http.createServer((req, res) => {
  //Simulate an asynchronous operation that might fail
  someAsyncOperation()
    .then((result) => {
      if (result === 'success') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Success!');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Failure!');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    //Simulate a random success or failure
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('success');
      } else {
        reject(new Error('Simulated asynchronous operation failed'));
      }
    }, 1000); // Simulate some delay
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});