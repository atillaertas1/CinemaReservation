const container = document.querySelector(".container");
const filmAfis = document.querySelector(".film-afis img");
const filmAfis2 = document.querySelector(".fatura img");
const fiyat = document.querySelector('.screen span');
const screen = document.querySelector('.screen img');
const select = document.querySelector(".movie-list select");
const movie = document.getElementById("movie")

imageControl()

container.addEventListener("click",function(e){
    //console.log(e.target);

    if(e.target.classList.contains("seat") && !e.target.classList.contains("filled")){
        //console.log("ok")
        e.target.classList.toggle("selected");
    }
    calculatePrice();
});

select.addEventListener("change",function(){

    calculatePrice();
    imageControl()
});

function calculatePrice()
{
    // console.log(select.value)
    let seatCount = document.querySelectorAll(".seat.selected").length - 1;
    let price = movie.value;

    fiyat.innerHTML = price * seatCount;

    // console.log(seatCount);
    // console.log(price);
}

function imageControl()
{
    if(movie.value == 30)
    {
        filmAfis.src = "masumiyet.png";
        filmAfis2.src = "masumiyet.png";
        screen.src = "masumiyet-screen.png"

        // console.log(select.value)
    }
    else if(movie.value == 40)
    {
        filmAfis.src = "ruya.png";
        filmAfis2.src = "ruya.png";
        screen.src = "ruya-screen.jpg"
    }
    else if(movie.value == 50)
    {
        filmAfis.src = "lotr.png";
        filmAfis2.src = "lotr.png";
        screen.src = "lotr-screen.jpg"
    }
}