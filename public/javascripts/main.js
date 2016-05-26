    var socket = io();
     var p = 50;
   var x = "px"

    function sendFunction() {
    socket.emit('new message', $('#new-message').val());
    $('#new-message').val('');


  }

  socket.on('chat message', function(msg){
    $('#messages-area').append($('<li>').text(msg));
  });

  function move(){
    p += 10;

      socket.emit('newMove', p);
      console.log(p);

  };

    socket.on('moved', function(position){
      $(".move").css("left", position + x);

  });
 
  
if (window.DeviceMotionEvent==undefined) {
}

window.ondevicemotion = function(event) {
  ax = event.accelerationIncludingGravity.x
  ay = event.accelerationIncludingGravity.y
  az = event.accelerationIncludingGravity.z
  rotation = event.rotationRate;
  if (rotation != null) {
    arAlpha = Math.round(rotation.alpha);
    arBeta = Math.round(rotation.beta);
    arGamma = Math.round(rotation.gamma);
  }
}


window.ondeviceorientation = function(event) {
  alpha = Math.round(event.alpha);
  beta = Math.round(event.beta);
  gamma = Math.round(event.gamma);
}