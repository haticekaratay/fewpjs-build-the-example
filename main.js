// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let heartButtons = document.querySelectorAll(".like-glyph");

heartButtons.forEach(heart => {
  heart.addEventListener("click",(event) => {
    mimicServerCall()
    .then(response => handleLikes(event.target))
    .catch(error => {
      console.log(error)
      let modal = document.querySelector("#modal")
      let errorMessage = document.querySelector("#modal-message")
      errorMessage.innerText = error
      modal.classList.remove("hidden");
      setTimeout(function(){
        modal.classList.add("hidden");
      },5000)
    })
  })
});

function handleLikes(heart) {
  if (heart.innerText === EMPTY_HEART){
    heart.innerText = FULL_HEART
    heart.classList.add("activated-heart");
  } else {
    heart.innerText = EMPTY_HEART
    heart.classList.remove("activated-heart");
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
