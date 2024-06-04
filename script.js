// let carousel = document.querySelector(".carousel")
let carousel = document.getElementById("carouselId")


let sliders = []

let slideIndex = 0

const createSlide = () =>{
    if (slideIndex >= movies.length){
        slideIndex = 0
    }

    // creating dom elements

    let slide = document.createElement('div');
    slide.classList.add("slider");
    carousel.appendChild(slide);

    let content = document.createElement('div');
    content.classList.add("slide-content");
    slide.appendChild(content);

    let movieTitle = document.createElement("h1");
    movieTitle.textContent = movies[slideIndex].name;
    movieTitle.classList.add("movie-title");
    content.appendChild(movieTitle);

    let movieDes = document.createElement("p");
    movieDes.classList.add("movie-des");
    movieDes.textContent =  movies[slideIndex].des;
    content.appendChild(movieDes);

    let imageEl = document.createElement("img");
    imageEl.src= movies[slideIndex].image;
    slideIndex++
    slide.appendChild(imageEl);


    sliders.push(slide);

    if (sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length-2)}% - ${30 * (sliders.length-2)}px)`
    }

}

for (let i = 0; i<3; i++){
    createSlide();
}

setInterval(() =>{
    createSlide()
},3000)

// video playing 

const videoCards = document.querySelectorAll(".video-card")

videoCards.forEach(item =>{
    item.addEventListener("mouseover" , () =>{
        let video = item.children[1]
        video.play()
    })

    item.addEventListener("mouseleave" , () =>{
        let video = item.children[1]
        video.pause()
    })
})

let cardContainer = document.querySelectorAll('.card-container');
let nxtBtn = document.querySelectorAll(".nxt-button");
let preBtn = document.querySelectorAll(".pre-button");

cardContainer.forEach((item,i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click",() =>{
        item.scrollLeft += containerWidth -200;
    })

    preBtn[i].addEventListener("click",() =>{
        item.scrollLeft -= containerWidth +200;
    })
})

