let id;
let second = 0;
let min = 0;
let hrs = 0;
let displaysecond = 0;
let displaymin = 0;
let displayhrs = 0;
let startbutton = document.getElementById("startbutton");
let lapbutton = document.getElementById("lapbutton");
let stopbutton = document.getElementById("stopbutton");
let lapnumber = 0;
let container = document.getElementById("container");
let content1 = document.getElementById("content1");

startbutton.addEventListener("click",function(){
  clearInterval(id);
  id=setInterval(increment,1000);

});
function increment(){
  second++;
  if(second / 60 == 1){
    second = 0;
    min++;
  }
  if(min / 60 == 1){
    min = 0;
    hrs++;
  }
  if(second < 10){
    displaysecond = '0' + second.toString();
}
else{
  displaysecond = second;
}
if(min < 10){
  displaymin = '0' + min.toString();
}
else{
  displaymin = min;
}
if(hrs < 10){
  displayhrs = '0' + hrs.toString();
}
else{
  displayhrs = hrs;
}
content1.innerHTML = displayhrs+" : "+displaymin+" : "+displaysecond;
}
stopbutton.addEventListener("click",function(){
  clearInterval(id);
});
lapbutton.addEventListener("click",function(){
  let div = document.createElement("div");
  let hr = document.createElement("hr");
  let span = document.createElement("span");
  lapnumber++;

  span.innerHTML = `Lap${lapnumber}   ${displayhrs}:${displaymin}:${displaysecond}`;
  div.appendChild(hr);
  div.appendChild(span);

  container.appendChild(div);
     
});
