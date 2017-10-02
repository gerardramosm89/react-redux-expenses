import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCvXg0ZqRl6RXH0HZRMtdYl8u0ysmgiPw4",
  authDomain: "rr-expensify.firebaseapp.com",
  databaseURL: "https://rr-expensify.firebaseio.com",
  projectId: "rr-expensify",
  storageBucket: "rr-expensify.appspot.com",
  messagingSenderId: "302329296818"
};

firebase.initializeApp(config);

const db = firebase.database();

db.ref().set({
  name: 'Gerard Zarian',
  age: 15,
  isSingle: true,
  location: {
    city: 'San Jose',
    state: 'California'
  }
});
