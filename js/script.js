if(window.innerWidth<500){
    document.querySelector('.slider-images-container img').src ="images/mobile-image-hero-1.jpg";
}
let count = 0;
let src = ["images/desktop-image-hero-1.jpg", "images/desktop-image-hero-2.jpg", "images/desktop-image-hero-3.jpg"];
if (window.innerWidth < 500) {
    src = ["images/mobile-image-hero-1.jpg", "images/mobile-image-hero-2.jpg", "images/mobile-image-hero-3.jpg"]
}

let content = [
    {
        h1: "Discover innovative ways to decorate",
        p: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        h1: "We are available all across the globe",
        p: "With stores all over the world, it's easy for you to find furniture for your home or place of business.    Locally, we’re in most major cities throughout the country.Find the branch nearest you using our         store locator.Any questions? Don't hesitate to contact us today."
    },
    {
        h1: "Manufactured with the best materials",
        p: "Our modern furniture store provide a high level of quality.Our company has invested in advanced technology  to ensure that every product is made as perfect and as consistent as possible.With three decades of         experience in this industry, we understand what customers want for their home and office."
    }

];
document.querySelector('.slider-btn .right').onclick = () =>{ 
    if(count == 2){
        count=0;
    }else{
        ++count;
    }
   carousel(src,count,content)
    
}
document.querySelector('.slider-btn .left').onclick = () => {
    if (count == 0) {
        count = 2;
    }else{
        count--
    }
    console.log(count)
    
    carousel(src,count,content);
}
function carousel(imagesSrc,imgN,content){
    
    document.querySelector('.slider-images-container img').src = imagesSrc[imgN];

    document.querySelector('.slider-content-container h1').innerText = `${content[imgN].h1}`;
    document.querySelector('.slider-content-container p').innerText = `${content[imgN].p}`;
}