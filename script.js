const music = document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");

const musicText =
    document.getElementById("musicText");


musicButton.addEventListener("click", async function () {

    if (music.paused) {

        try {

            await music.play();

            musicButton.textContent =
                "Pause Music";

            musicText.textContent =
                "🎵 Playing Daylight";

        } catch (error) {

            musicText.textContent =
                "Please tap the button again.";

        }

    } else {

        music.pause();

        musicButton.textContent =
            "▶ Play Music";

        musicText.textContent =
            "🎵 Music Paused";

    }

});