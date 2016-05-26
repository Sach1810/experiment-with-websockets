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
 
  
    // function move () {
    //   p += 10;
    //   socket.emit('newMove', p);


    //   $(".move").css("left", p + x);

    // }


    // socket.on('moved', function(position){
    //   p += position;
    //   console.log(p);
    // });