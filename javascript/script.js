    let menu= document.querySelector("#menu-bars");
    let navbar = document.querySelector(".navbar");
    menu.onclick = () =>{
        // alert(navbar)
        menu.classList.toggle("fa-times");
        navbar.classList.toggle("show");
        console.log(navbar)
    }

    // window.onscroll = () =>{
    //     // alert(navbar)
    //     menu.classList.toggle("fa-times");
    //     navbar.classList.toggle("show");
    //     console.log(navbar)
    // }

    document.querySelector("#search-icon").onclick = () => {
        document.querySelector("#search-form").classList.toggle("search-form-class");
    }


    document.querySelector("#close").onclick = () => {

        document.querySelector("#search-form").classList.remove("search-form-class");
    }

 