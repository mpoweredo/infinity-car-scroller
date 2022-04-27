const count = 30;
let currentIndexOfPhoto;
currentIndexOfPhoto = currentIndexOfPhoto > (count-1) ? 0 : currentIndexOfPhoto | 0;

const fetchPhoto = () => {
    const accessKey = "7cPuL107zET0W4NHHH-L3aMkLjS43b4B4vgVOIpKjjg";
    const collections = 1270951
    const fetchedData = fetch(`https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}&collections=${collections}`).then(response => {
    return response.json()
}).then(response => {
    console.log(response[currentIndexOfPhoto])
    return response[currentIndexOfPhoto].urls.regular
})
    return fetchedData;
}


const appendImage = async () => {
    const fetchedPhoto = await fetchPhoto();
    document.body.innerHTML += `
    <div>
    <img src='${fetchedPhoto}' alt=''>
    </div>`
    console.log(currentIndexOfPhoto)
}

appendImage();

document.onscroll = ev => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        appendImage();
    }
}