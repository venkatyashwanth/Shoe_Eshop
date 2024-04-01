// Toggling - SideNavigationBar
{
    let hamMenu = document.querySelector("#mobileIcon_bars");
    let sidenav = document.querySelector(".side-nav");
    let icons = document.querySelectorAll(".icon");

    const toggleSideNav = () => {
        icons.forEach((icon) => {
            icon.classList.toggle("invertWhite");
        })
        hamMenu.classList.toggle('icon-bars-solid');
        hamMenu.classList.toggle('icon-xmark-solid');
        sidenav.classList.toggle("active");
    }

    hamMenu.addEventListener("click", toggleSideNav);
    sidenav.addEventListener("click", toggleSideNav);
}

// Change ShoeImages
{
    const shoesList_path = [
        {
            id: 1,
            image: "./assets/images/shoes/shoes.png"
        },
        {
            id: 2,
            image: "./assets/images/shoes/shoes1.png"
        },
        {
            id: 3,
            image: "./assets/images/shoes/shoes2.png"
        },
        {
            id: 4,
            image: "./assets/images/shoes/shoes3.png"
        },
        {
            id: 5,
            image: "./assets/images/shoes/shoes4.png"
        },
        {
            id: 6,
            image: "./assets/images/shoes/shoes5.png"
        },
        {
            id: 7,
            image: "./assets/images/shoes/shoes6.png"
        },
        {
            id: 8,
            image: "./assets/images/shoes/shoes7.png"
        },
        {
            id: 9,
            image: "./assets/images/shoes/shoes8.png"
        },
    ]
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let displayShoes = document.querySelector('.display_Showshoe');
    let queList = 0;
    (function startAnimation() {
        incrementNum = ()=>{
            displayShoes.src = shoesList_path[queList].image;
            queList = queList + 1;
        }

        if(queList < shoesList_path.length){
            incrementNum();
        }else{
            queList = 0;
            incrementNum();
        }
        displayShoes.classList.add("show");
        // displayShoes.style.transform = "scale(1)";
        // displayShoes.style.opacity = "1";
        // displayShoes.style.transitionDuration = "1s";
        // displayShoes.style.transitionTimingFunction = "ease-in-out"
        let removeStyle = setTimeout(() => {
            // displayShoes.style.transform = "scale(0.4)";
            // displayShoes.style.opacity = "0";
            displayShoes.classList.remove("show");
            clearTimeout(removeStyle);
        }, 4000)
        let stopAnimation = setTimeout(startAnimation, 5000);
    })();
}


