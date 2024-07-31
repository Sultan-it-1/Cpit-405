 document.addEventListener('DOMContentLoaded', () => {
            const likeButton = document.getElementById('likeButton');
            const dislikeButton = document.getElementById('dislikeButton');
            const likeCount = document.getElementById('likeCount');
            const dislikeCount = document.getElementById('dislikeCount');

            // Load counts from localStorage
            const storedLikes = localStorage.getItem('likes');
            const storedDislikes = localStorage.getItem('dislikes');
            likeCount.textContent = storedLikes ? storedLikes : 100;
            dislikeCount.textContent = storedDislikes ? storedDislikes : 20;

            function updateCount() {
                localStorage.setItem('likes', likeCount.textContent);
                localStorage.setItem('dislikes', dislikeCount.textContent);
            }

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

            function handleVote(buttonType) {
                const voteCookie = getCookie('voted');
                if (!voteCookie) {
                    if (buttonType === 'like') {
                        likeCount.textContent = parseInt(likeCount.textContent) + 1;
                    } else {
                        dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
                    }
                    updateCount();
                    setCookie('voted', buttonType, 365);
                } else {
                    alert('لقد قمت بالتصويت مسبقًا.');
                }
            }

            likeButton.addEventListener('click', () => handleVote('like'));
            dislikeButton.addEventListener('click', () => handleVote('dislike'));
        });
