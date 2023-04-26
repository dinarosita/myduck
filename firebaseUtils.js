const firebase = require("firebase/app");
require("firebase/database");

const firebaseConfig = {
  // your Firebase project config
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// get a reference to your messages node
const messagesRef = database.ref("messages");

// add a new message to the database
function postAddMessage(message) {
  messagesRef.push(message);
}

// listen for changes to the messages node
function listenForAddMessages() {
  messagesRef.on("child_added", (snapshot) => {
    const message = snapshot.val();
    console.log("New message:", message);
  });
}

// sanitize input before posting to the database
function sanitizeInput(input) {
  const sanitizedInput = DOMPurify.sanitize(input);
  return sanitizedInput;
}

// use the sanitized input to post a new message
function postSanitizedMessage(messageContent) {
  const sanitizedContent = sanitizeInput(messageContent);
  postAddMessage(sanitizedContent);
}
