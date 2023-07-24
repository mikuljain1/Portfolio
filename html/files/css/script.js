console.log("Script Running...");
document.querySelector('.cross').style.display = 'none';
document.querySelector('.menu').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.pointer').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.pointer').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 300);
            
    }
})

// function changeImage()
//     {
//     var img = document.getElementById("img");
//     img.src = images[x];
//     x++;

//     if(x >= images.length){
//         x = 0;
//     } 
//    var timerid = setInterval(changeImage(), 1000);
// }   
// var images = [], x = 0;
// images[0] = "image1.jpg";
// images[1] = "image2.jpg";
// images[2] = "image3.jpg";

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [], x = -1;
images[0] = "image1.jpg";
images[1] = "image2.jpg";
images[2] = "image3.jpg";