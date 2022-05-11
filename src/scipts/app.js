import { EasyModal } from "../../node_modules/easy-modal-js/dist/scripts/easyModal.js";

const accessKey = "7cPuL107zET0W4NHHH-L3aMkLjS43b4B4vgVOIpKjjg";
const collections = 1270951
const count = 30;
let currentIndexOfPhoto;
let photos;

const fetchPhotos = async () => {
    try {
        const fetchedData = await fetch(`https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}&collections=${collections}`).then(response => {
            return response.json()
        }).then(response => {
            return response
        })
            return fetchedData
    } catch (error) {
        new EasyModal({title: 'An error occured!', description: 'Check your network connection!'})
    }

}



const appendImage = async () => {
    currentIndexOfPhoto = currentIndexOfPhoto >= (count-1) ? 0 : currentIndexOfPhoto | 0;
    document.body.innerHTML += `
    <div class="photo">
    <img src='${photos[currentIndexOfPhoto].urls.regular}' alt=''>
    </div>`
    currentIndexOfPhoto++
}


document.onscroll = ev => {
    if ((window.innerHeight + window.scrollY + 300) >= document.body.offsetHeight) {
        appendImage();
    }
}

document.addEventListener('DOMContentLoaded', async () => {
        if (!photos) {
                photos = await fetchPhotos();   
        }

    appendImage();
})
