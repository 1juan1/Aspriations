// Connect to the server
var socket = io()

var squares = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"]
var turn = 0

function setEventListeners() {
  for (var i = 0; i < squares.length; i++) {
    document.getElementById(squares[i]).addEventListener("click", function() {
        // this is what currently happens when the user clicks on a square
        this.style.backgroundImage = "url('x.png')"
        console.log(this.id)
        socket.emit('turn', this.id)
    })
  }
    
}

setEventListeners()
 
socket.on('turn',function(msg){
    if(turn == 0){
    document.getElementById(msg).style.backgroundImage = "url('x.png')",
    turn = 1
    }
    
    else if(turn == 1){
    document.getElementById(msg).style.backgroundImage = "url('o.png')",
        turn= 0
    }
})

