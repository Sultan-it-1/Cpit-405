document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('likeButton');
    const dislikeButton = document.getElementById('dislikeButton');
    const likeCount = document.getElementById('likeCount');
    const dislikeCount = document.getElementById('dislikeCount');

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name}=${value || ""}${expires}; path=/`;
    }

    function updateCount(buttonType) {
        let currentCount = parseInt(buttonType === 'like' ? likeCount.textContent : dislikeCount.textContent, 10);
        currentCount += 1;
        if (buttonType === 'like') {
            likeCount.textContent = currentCount;
        } else {
            dislikeCount.textContent = currentCount;
        }
    }

    function handleVote(buttonType) {
        const voteCookie = getCookie('voted');
        if (!voteCookie) {
            updateCount(buttonType);
            setCookie('voted', buttonType, 365);
        } else {
            alert('You have already voted.');
        }
    }

    likeButton.addEventListener('click', () => handleVote('like'));
    dislikeButton.addEventListener('click', () => handleVote('dislike'));
});
