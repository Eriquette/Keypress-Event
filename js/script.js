document.addEventListener("keydown", function(e){
  document.querySelector("#key").textContent = e.keyCode
  document.querySelector("#type").textContent = e.key
});
