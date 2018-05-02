function clockk(){
  const fulldate = new Date();
  var hours = fulldate.getHours();
  var minutes = fulldate.getMinutes();
  var seconds = fulldate.getSeconds();
  if(hours<10){
    hours="0"+hours
  }
  if(minutes<10){
    minutes="0"+minutes
  }
  if(seconds<10){
    seconds="0"+seconds
  }
  document.getElementById('hour').innerHTML=hours;
  document.getElementById('minute').innerHTML=":"+minutes;
  document.getElementById('second').innerHTML=":"+seconds;
}
setInterval(clockk,100);
