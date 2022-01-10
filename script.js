const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];



// unsplash Api
const count = 10;
const apiKey = 'MpxxzU99B3OdNDRvN0wxrYRmhs8C1ZgYB5iRjC6qPZU';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// create element for link & photos, add to DOM
function displayPhotos() {
    // run for each photosarray
    photosArray.forEach((photo) => {
        // create <a> to link to unsplash
        const item = document.createElement("a");
        item.setAttribute("href", photo.links.html);
        item.setAttribute("target", "_blank");
        // create img for photo
        const img = document.createElement("img");
        img.setAttribute("src", photo.urls.regular);
        img.setAttribute("alt", photo.alt_description);
        img.setAttribute("title", photo.alt_description);
        // put <img> inside <a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

//get photos
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // catch error
    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();
        console.log('load more');
    }
});

// on load
getPhotos();