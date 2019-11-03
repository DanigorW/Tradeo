

window.addEventListener("DOMContentLoaded", function () {

    var navBtnJoinNnow = document.querySelector(".nav-btn-join-now");
    var mainNav = document.querySelector(".main-nav");

    window.addEventListener('scroll', function (event) {
        event.preventDefault();
        if (window.scrollY < 5) {
            mainNav.style.opacity='0';
        } else {
            mainNav.style.opacity = '1';
        }
    });

    


    // need to chack with edi

    // function showNavBtns (){
    //  setTimeout(function () { 
    //     navBtnJoinNnow.innerHTML = "$1,000 FREE <br> PRACTICE ACCOUNT";
    //     navBtnJoinNnow.style.fontSize = '10px'
    //   },2000)

    //  setTimeout(function () { 
    //     navBtnJoinNnow.textContent = "JOIN NOW";
    //     navBtnJoinNnow.style.fontSize = '16px'
    //   },4000)

    // }
    // setInterval(showNavBtns,4000);

   
    
    
})

