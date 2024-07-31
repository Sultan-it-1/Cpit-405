const apiKey = 'kd5lBq2uiePWhg5K9b9RfoZkTUFzEfnT';

function searchGiphyXHR() {
    const query = document.getElementById('query').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=4`);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            displayResults(response.data);
        }
    };
    xhr.send();
}

function searchGiphyFetch() {
    const query = document.getElementById('query').value;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=4`)
        .then(response => response.json())
        .then(data => {
            displayResults(data.data);
        });
}

async function searchGiphyAsync() {
    const query = document.getElementById('query').value;
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=4`);
    const data = await response.json();
    displayResults(data.data);
}

function displayResults(gifs) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        resultsDiv.appendChild(img);
    });
}
