var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var bday = new Date(1996, 0, 12, 0, 0, 0, 0);

//Pads int with leading 0's if int length < size
function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length - size);
}

function startInterval(){
  updateTime(); //Initial call to ensure that on page load elements are set
  setInterval(updateTime, 1000);
}

function updateTime(){
  var current = new Date();

  //Accounting for the year change
  if (current.getMonth() === 0 && current.getDate() < 11){
    bday = new Date(current.getFullYear(), 0, 11, 0, 0, 0, 0);
  } else {
    bday = new Date(current.getFullYear() + 1, 0, 11, 0, 0, 0, 0);
  }

  var diffDays = 1 + (Math.abs((current.getTime() - bday.getTime())/(oneDay)));
  var strDays = pad(Math.floor(diffDays), 3);
  var diffHours = (diffDays % 1) * 24;
  var strHours = pad(Math.floor(diffHours), 2);
  var diffMinutes = (diffHours % 1) * 60;
  var strMinutes = pad(Math.floor(diffMinutes),2);
  var diffSeconds = (diffMinutes % 1) *60;
  var strSeconds = pad(Math.floor(diffSeconds),2);

  //Hack to fix an issue that occurs only on January 11th
  if (current.getMonth() === 0 && current.getDate() === 11){
    strDays = "000";
  }

  document.getElementById("days").innerHTML = strDays;
  document.getElementById("hours").innerHTML = strHours;
  document.getElementById("minutes").innerHTML = strMinutes;
  document.getElementById("seconds").innerHTML = strSeconds;
}
