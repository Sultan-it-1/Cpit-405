document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const addPhotoButton = document.getElementById('addPhotoButton');
    const photoUrlInput = document.getElementById('photoUrl');

    addPhotoButton.addEventListener('click', () => {
        const photoUrl = photoUrlInput.value;
        if (photoUrl) {
            addPhotoToGallery(photoUrl);
            photoUrlInput.value = '';
        } else {
            alert('Please enter a photo URL.');
        }
    });

    function addPhotoToGallery(url) {
        const photoContainer = document.createElement('div');
        photoContainer.classList.add('photo-container');

        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Photo';
        img.addEventListener('click', () => {
            img.classList.toggle('zoomed');
        });

        photoContainer.appendChild(img);
        gallery.appendChild(photoContainer);
    }
});

