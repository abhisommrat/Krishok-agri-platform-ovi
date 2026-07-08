// ===== Firebase কনফিগারেশন =====
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ===== Firebase Initialize =====
function initFirebase() {
  if (typeof firebase === 'undefined') {
    setTimeout(initFirebase, 500);
    return;
  }
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  window.database = firebase.database();
  console.log('✅ Firebase সংযোগ সফল!');
}

function loadFirebaseSDK() {
  if (typeof firebase !== 'undefined') {
    initFirebase();
    return;
  }
  var script = document.createElement('script');
  script.src = 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js';
  script.onload = function() {
    var dbScript = document.createElement('script');
    dbScript.src = 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js';
    dbScript.onload = initFirebase;
    document.head.appendChild(dbScript);
  };
  document.head.appendChild(script);
}

loadFirebaseSDK();

// ===== ফাংশন =====
window.listenMessages = function(room, callback) {
  if (!window.database) return;
  window.database.ref('chats/' + room).limitToLast(50).on('child_added', function(snapshot) {
    if (callback) callback(snapshot.val());
  });
};

window.sendMessage = function(room, name, message) {
  if (!window.database) return;
  window.database.ref('chats/' + room).push({
    name: name,
    message: message,
    time: new Date().toLocaleString('bn-BD')
  });
};