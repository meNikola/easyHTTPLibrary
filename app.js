const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }

// });

// Create Data
const data = {
  title: 'Custom POst',
  body: 'This is a custom post'
}

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }

// });


// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }

// });


// Deleted POst
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }

});