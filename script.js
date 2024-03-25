var profile = document.querySelector("#profileCard");
var like = document.querySelector("#like");
profile.addEventListener("dblclick",function(){
  like.style.transform = 'translate(-50%,-50%) scale(1)',
  like.style.color = 'red'
  setTimeout(function(){
    like.style.transform = 'translate(-50%,-50%) scale(0)'
  },1000)
})