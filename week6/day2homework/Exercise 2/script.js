// Exercise 2 : Move The Box
function myMove(params) {
    let redbox= document.getElementById('animate')
    let fromleft =0
    redbox.style.left ='0px'
    let move =setInterval(() => {
        if (fromleft==350) {
            clearInterval(move)
        }
        redbox.style.left =`${fromleft}px`
        fromleft++
    },1);
}