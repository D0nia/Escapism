var p = ['', 5.99, 39.99, 29.99]
var x = ['', 0, 0, 0]
var Dt = 0
function download(i) {
      x[i]=1;
      Dt += p[i] * x[i]
     document.getElementById('totPrice-download').innerHTML=Dt
}
var r =['', 3.99, 20.99, 10.99]
var x = ['', 0, 0, 0]
var Rt = 0
function rent(i) {
      x[i]=1;
      Rt += r[i] * x[i]
      document.getElementById('totPrice-rent').innerHTML=Rt
}
function purchaseD(i) {
      if (document.getElementById('totPrice-download').innerHTML == '') {
            window.alert("Your cart is empty.");
      }
      
      else  {
            alert('Your Book has been purchased, Enjoy!')}   
}


function purchaseR(i) {
      if (document.getElementById('totPrice-rent').innerHTML == '') {
            window.alert("Your cart is empty.");
      }
      
      else  {
            alert('Your Book has been purchased, Enjoy! AVAILABLE FOR 10 DAYS')}   
}

function resetingD(i) {
      document.getElementById("totPrice-download").innerHTML=''
}
function resetingR(i) {
      document.getElementById("totPrice-rent").innerHTML=''
}
