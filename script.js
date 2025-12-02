const API_KEY = 'TIwvdHKsNrQubLhvwxcz0DmZTzudkLI7YMpJRxBf';
const apodEndpoint = 'https://api.nasa.gov/planetary/apod';

const dateInput = document.getElementById('dateInput');
const searchBtn = document.getElementById('searchBtn');
const addFavoriteBtn = document.getElementById('addFavoriteBtn');
const apodImage = document.getElementById('apodImage');
const apodTitle = document.getElementById('apodTitle');
const apodDate = document.getElementById('apodDate');
const apodText = document.getElementById('apodText');
const imageTitle = document.getElementById('imageTitle');
const imageLocation = document.getElementById('imageLocation');
const favoritesGrid = document.getElementById('favoritesGrid');

let currentApod = {
    url: apodImage.src,
    title: apodTitle.textContent,
    date: apodDate.textContent,
    desc: apodText.textContent
};

document.addEventListener('DOMContentLoaded', () => {
    renderFavorites();
});


searchBtn.addEventListener('click', () => {
    const date = dateInput.value;
    if (!date) {
        alert('Please select a date!');
        return;
    }
    fetchAPOD(date);
});

addFavoriteBtn.addEventListener('click', () => {
    addToFavorites(currentApod);
});


favoritesGrid.addEventListener('click', e => {
    if (e.target.classList.contains('remove-btn')) {
        const date = e.target.dataset.date;
        removeFromFavorites(date);
    }
});

function fetchAPOD(date) {
    fetch(`${apodEndpoint}?date=${date}&api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            if (data.media_type === 'video') {
                apodImage.src = 'images/video_placeholder.png'; // 可换成自定义视频封面
            } else {
                apodImage.src = data.url;
            }
            apodTitle.textContent = data.title || '';
            apodDate.textContent = data.date || '';
            apodText.textContent = data.explanation || '';
            imageTitle.textContent = data.title ? data.title.split(':')[0] : '';
            imageLocation.textContent = data.copyright || 'NASA APOD';

            currentApod = {
                url: (data.media_type === 'video') ? 'images/video_placeholder.png' : data.url,
                title: data.title || '',
                date: data.date || '',
                desc: data.explanation || ''
            };
        })
        .catch(() => {
            alert('Failed to fetch APOD data! Check your network or NASA API Key.');
        });
}


function addToFavorites(favorite) {
    if (!favorite.date) {
        alert('No valid image loaded to favorite!');
        return;
    }
    let favorites = JSON.parse(localStorage.getItem('apodFavorites') || '[]');
    if (favorites.some(f => f.date === favorite.date)) {
        alert('Already added to favorites!');
        return;
    }
    favorites.unshift(favorite);
    localStorage.setItem('apodFavorites', JSON.stringify(favorites));
    renderFavorites();
}


function renderFavorites() {
    let favorites = JSON.parse(localStorage.getItem('apodFavorites') || '[]');
    favoritesGrid.innerHTML = '';
    if (!favorites.length) {
        favoritesGrid.innerHTML = '<div style="color:#ccc;">No favorites yet.</div>';
        return;
    }
    favorites.forEach(fav => {
        const div = document.createElement('div');
        div.className = 'favorite-item';
        div.innerHTML = `
            <img src="${fav.url}" alt="${fav.title}" class="favorite-thumbnail">
            <div class="favorite-content">
                <div class="favorite-title">${fav.title}</div>
                <div class="favorite-date">${fav.date}</div>
                <div class="favorite-actions">
                    <button class="remove-btn" data-date="${fav.date}">REMOVE</button>
                </div>
            </div>
        `;
        favoritesGrid.appendChild(div);
    });
}


function removeFromFavorites(date) {
    let favorites = JSON.parse(localStorage.getItem('apodFavorites') || '[]');
    favorites = favorites.filter(f => f.date !== date);
    localStorage.setItem('apodFavorites', JSON.stringify(favorites));
    renderFavorites();
}
document.addEventListener('DOMContentLoaded', function() {

    const apodImage = document.getElementById('apodImage');
    const apodTitle = document.getElementById('apodTitle');
    const imageModal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.getElementById('modalClose');
    const favoritesGrid = document.getElementById('favoritesGrid');


    apodImage.addEventListener('click', function() {
        modalImg.src = apodImage.src;
        modalCaption.textContent = apodTitle.textContent;
        imageModal.style.display = "block";
    });

    modalClose.addEventListener('click', function() {
        imageModal.style.display = "none";
    });
    imageModal.addEventListener('click', function(e){
        if(e.target === imageModal) imageModal.style.display = "none";
    });
});
