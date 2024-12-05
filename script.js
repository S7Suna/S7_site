window.onload = function () {

    let ball = document.getElementById("ball");
    function removeClass(){
        ball.classList.remove("animate")
    }
    ball.onclick = function () {
        
        ball.classList.add("animate");
        setTimeout(removeClass,3000);
    }

 
}