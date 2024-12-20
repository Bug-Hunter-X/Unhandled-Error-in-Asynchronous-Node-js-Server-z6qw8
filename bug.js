const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const result = someAsyncOperation();

  if (result === 'success') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  } else {
    //Error Handling Missing Here
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Failure!');
  }
});

function someAsyncOperation() {
  // Simulate a random success or failure
  return Math.random() < 0.5 ? 'success' : 'failure';
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});