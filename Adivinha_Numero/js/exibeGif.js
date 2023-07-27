const apiKey = "xOzbLWeQSTWFnT6vaWrU6OCtwLtKzVPX";
const endpoint = "https://api.giphy.com/v1/gifs/random";


function buscarGifAleatorio() {
    const searchTerm = "capybara"; 


    const url = `${endpoint}?api_key=${apiKey}&tag=${searchTerm}`;


    fetch(url)
        .then(response => response.json())
        .then(data => exibirGif(data.data))
        .catch(error => console.error("Erro ao buscar GIF:", error));
}


function exibirGif(gifData) {
    const gifContainer = document.getElementById("gifContainer");

  
    if (gifContainer) {
       
        gifContainer.innerHTML = "";

      
        const gifImg = document.createElement("img");
        gifImg.src = gifData.images.fixed_height.url;
        gifImg.alt = "Capivara GIF";
        gifContainer.appendChild(gifImg);
    }
}
