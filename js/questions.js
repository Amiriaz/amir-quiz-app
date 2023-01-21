 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAYLU2hhiN-MzDNNVfMKxhLVPFQikreYHg",
   authDomain: "customer-6deaf.firebaseapp.com",
   databaseURL: "https://customer-6deaf-default-rtdb.firebaseio.com",
   projectId: "customer-6deaf",
   storageBucket: "customer-6deaf.appspot.com",
   messagingSenderId: "624253871475",
   appId: "1:624253871475:web:49a7b7fd6e0f0851035106",
   measurementId: "G-X0SPSFEKS6"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase();
 
 let question = document.getElementById('question')
 let option = document.getElementById("option")
 let optionParent = document.getElementById('optionParent')
 let correctAnswerElem = document.getElementById('correctAnswer')

let options = []
let correctAnswer

function renderOptions() {
  optionParent.innerHTML = ''
  for(let i = 0; i < options.length; i++ ) {
    optionParent.innerHTML += `<li onclick="setCorrectAnswer('${options[i]}') " class='p-2 bg-light fs-5 rounded shadow my-2'>${options[i]}</li>`
  }
}

window.addoption = function () {
  options.push(option.value)
  console.log(options)
  renderOptions();
}
window.setCorrectAnswer = function(a) {
  correctAnswer = a
  correctAnswerElem.innerHTML = correctAnswer 
}
 
window.submitQuestion = function(){
  let info_box = {
    question: question.value,
    options: options,
    correctAnswer: correctAnswer
  }
info_box.id = push(ref(db, 'question/')).key

const reference = ref(db, `question/${info_box.id}`)
set(reference, info_box)

  console.log(info_box)
}
