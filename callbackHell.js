/*
creating Function inside the function concurrently will lead to 
every function wait for the result of previous function.
Called Call Back hell.
*/


// Simulate async functions with setTimeout

// Simulate async functions with setTimeout

function loginUser(username, password, callback) {
  setTimeout(() => {
    if (password === '1234') {
      console.log('User logged in');
      callback(null, { id: 1, username: username });
    } else {
      callback('Invalid password');
    }
  }, 1000);
}

function getUserProfile(userId, callback) {
  setTimeout(() => {
    console.log('Fetched user profile');
    callback(null, { id: userId, username: 'yogeshwar', email: 'yogeshwar@example.com' });
  }, 1000);
}

function getUserPosts(username, callback) {
  setTimeout(() => {
    console.log('Fetched user posts');
    callback(null, ['Post 1', 'Post 2']);
  }, 1000);
}

function sendWelcomeEmail(email, callback) {
  setTimeout(() => {
    console.log('Sent welcome email to', email);
    callback(null, 'Email sent');
  }, 1000);
}

// 🚨 Callback Hell in Action

loginUser('yogeshwar', '1234', function (err, user) {
  if (err) {
    console.log('Login failed:', err);
  } else {
    getUserProfile(user.id, function (err, profile) {
      if (err) {
        console.log('Profile fetch failed:', err);
      } else {
        getUserPosts(profile.username, function (err, posts) {
          if (err) {
            console.log('Posts fetch failed:', err);
          } else {
            sendWelcomeEmail(profile.email, function (err, status) {
              if (err) {
                console.log('Email failed:', err);
              } else {
                console.log('All done:', status);
              }
            });
          }
        });
      }
    });
  }
});
