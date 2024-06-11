const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon');

let isDarkTheme = false;

themeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeIcon.src = 'night-mode.png';
        themeIcon.alt = 'Night Mode Icon';
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeIcon.src = 'day-mode.png';
        themeIcon.alt = 'Day Mode Icon';
    }

    const currentTheme = isDarkTheme ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.src = 'night-mode.png';
    themeIcon.alt = 'Night Mode Icon';
    isDarkTheme = true;
} else if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.src = 'day-mode.png';
    themeIcon.alt = 'Day Mode Icon';
    isDarkTheme = false;
}


function closeWebsite() {
    window.close();
}

function minimizeWindow() {
    (document.exitFullscreen)
    document.exitFullscreen();
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var meridiem = "AM";

    if (hours >= 12) {
        meridiem = "PM";
        hours = hours % 12 || 12;
    }

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();





document.addEventListener("DOMContentLoaded", function () {
    const albumPoster = document.getElementById("albumPoster");
    albumPoster.addEventListener("click", toggleVinylAndSong);

    const sauravImg = document.getElementById("sauravImg");
    sauravImg.addEventListener("click", toggleVinylAndSong);
});

let isPlaying = false;

function toggleVinylAndSong(event) {
    const clickedElementId = event.target.id;
    const validElements = ["sauravImg", "albumPoster"];

    if (validElements.includes(clickedElementId)) {
        const vinyl = document.getElementById("vinylImg");
        const audio = document.getElementById("audioPlayer");

        if (isPlaying) {
            vinyl.style.animationPlayState = "paused";
            audio.pause();
        } else {
            vinyl.style.animationPlayState = "running";
            audio.play();
        }

        isPlaying = !isPlaying;
    }
}



function enterFullScreenOnMobile() {
    if (window.innerWidth <= 768) {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
    }
}

window.onload = enterFullScreenOnMobile;
const images = document.querySelectorAll('.column img');





window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
        document.getElementById("arrowIcon").src = getArrowImage();
        document.getElementById("backToTopBtn").href = "#top";
        document.getElementById("backToTopBtn").title = "Back to Top";
        document.getElementById("backToTopBtn").setAttribute("aria-label", "Back to Top");
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function getArrowImage() {

    var isDarkTheme = document.body.classList.contains("dark-theme");
    if (isDarkTheme) {
        return "dark-up-arrow.png";
    } else {
        return "up-arrow.png";
    }
}
document.querySelectorAll('.contact-links a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.contact-links a').forEach(otherLink => {
            otherLink.classList.remove('active');
            otherLink.style.opacity = '0.3'; // Reset opacity of other links
        });
        this.classList.add('active');
        this.style.opacity = '1'; // Set opacity of clicked link to 1
        window.open(this.href, '_blank');
    });

    link.addEventListener('mouseover', function () {
        document.querySelectorAll('.contact-links a').forEach(otherLink => {
            if (otherLink !== this) {
                otherLink.style.opacity = '0.5'; // Reduce opacity of other links on hover
            }
        });
    });

    link.addEventListener('mouseout', function () {
        document.querySelectorAll('.contact-links a').forEach(otherLink => {
            otherLink.style.opacity = '1'; // Restore opacity of other links on mouseout
        });
    });
});
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('sliderContainer');
    const skills = [
        { name: 'Photoshop', image: 'skill1.png' },
        { name: 'Davinci', image: 'skill2.png' },
        { name: 'PremierPro', image: 'skill3.png' },
        { name: 'Illustration', image: 'skill4.png' }
    ];

    // Populate slider container with skill elements
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.dataset.name = skill.name;
        const imgElement = document.createElement('img');
        imgElement.src = skill.image;
        imgElement.alt = skill.name;
        imgElement.width = 40; // Adjust width as needed
        skillElement.appendChild(imgElement);
        sliderContainer.appendChild(skillElement);
    });

    // Reset animation on animation iteration
    sliderContainer.addEventListener('animationiteration', () => {
        sliderContainer.style.animation = 'scroll 10s linear infinite';
    });
});
