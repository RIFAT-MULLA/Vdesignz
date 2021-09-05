
    // preloder
    var loader = document.getElementById("preloader");
        window.addEventListener("load",function(){
        loader.style.display = "none";
    });

    // swiper
    var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    centeredSlides: true,
    freeMode: true,
    grabcursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

    // scrollreveal
        ScrollReveal().reveal('.intervals1', { delay: 1000, interval: 400 });
        ScrollReveal().reveal('.intervals2', { easing: 'ease-in', delay: 1000, interval: 300 });
        ScrollReveal().reveal('.intervals4', { easing: 'ease-in', delay: 1000, interval: 400 });
        ScrollReveal().reveal('.intervals5', { easing: 'ease-in', delay: 1000, interval: 200 });
        ScrollReveal().reveal('.intervals6', { easing: 'ease-in', delay: 1000, interval: 200 });

    // svg
        const svgcontainer = document.getElementById('svg');
        const animItem = bodymovin.loadAnimation({
        wrapper: svgcontainer,
        animType: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets9.lottiefiles.com/private_files/lf30_gcroxmlt.json'
    });

    // menu
    function myFunction(x) {
    document.getElementById("menu").classList.toggle("change");
    var x = document.getElementById("showmenu");
    if (x.style.display === "flex") {
            x.style.display = "none";
            document.getElementById("showmenu").style.width = "0";
        } else {
            x.style.display = "flex";
            document.getElementById("showmenu").style.width = "100%";
        }
    }

    // contactmodal
    function modalclosing() {
    x = document.getElementById("wrapmodal");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.querySelector("body").style.overflow="auto";  
        x.style.position = "relative"; 
    } else {
        x.style.display = "block";
        x.style.overflow = "scroll";
        document.querySelector("body").style.overflow="hidden";  
        x.style.position = "fixed"; 
        }
    }

    // close modal
    function closee() {
        document.querySelector(".modal-backdrop").style.display = "none";
        document.querySelector(".modal").style.display = "none";    
        document.querySelector("body").style.paddingRight= "0px";
        document.querySelector("body").style.overflowY = "scroll";   
    }

    //selecting all required elements
    const filterItem = document.querySelector(".container4");
    const filterImg = document.querySelectorAll(".gallery .image");
    window.onload = ()=>{ 
                
    filterItem.onclick = (selectedItem)=>{ 
        document.querySelector(".gallery").style.display = "flex";
        if(selectedItem.target.classList.contains("item")){ 
        filterItem.querySelector(".active").classList.remove("active"); 
        selectedItem.target.classList.add("active"); 
        let filterName = selectedItem.target.getAttribute("data-name");
        filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 
            if((filterImges == filterName) || (filterName == "all")){
                image.classList.remove("hide"); 
                image.classList.add("show"); 
                }else{
                image.classList.add("hide"); 
                image.classList.remove("show"); 
                }
            });
            }
        }
        for (let i = 3; i < filterImg.length; i++) {
            filterImg[i].setAttribute("onclick", "preview(this)"); 
        }
    }   
    //fullscreen image preview function
    const previewBox = document.querySelector(".preview-box"),
    categoryName = previewBox.querySelector(".title p"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon"),
    shadow = document.querySelector(".shadow");
    function preview(element){
            
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src; 
    let selectedImgCategory = element.getAttribute("data-name"); 
    previewImg.src = selectedPrevImg; 
    categoryName.textContent = selectedImgCategory;

    document.querySelector(".modal").style.display= "none";
    document.querySelector(".modal-backdrop").style.display= "none";

    previewBox.classList.add("show"); 
    shadow.classList.add("show");

        closeIcon.onclick = ()=>{ 
            previewBox.classList.remove("show");
            shadow.classList.remove("show");
            document.querySelector("body").style.overflow = "auto";
            document.querySelector(".modal ").style.display= "block";
            document.querySelector(".modal-backdrop").style.display= "block";
        }
    }