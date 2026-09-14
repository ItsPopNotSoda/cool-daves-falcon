// Temporary showtime.
// We'll change this when the official Wednesday showtime is confirmed.
//
// December 9 is Eastern Standard Time, hence -05:00.

const movieTime = new Date("2026-12-09T18:30:00-05:00");

function updateCountdown() {

    const now = new Date();
    const difference = movieTime - now;

    if (difference <= 0) {
        document.querySelector(".countdown").innerHTML =
            "<h2>THE FALCON HAS ARRIVED.</h2>";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);

const falcon = document.querySelector(".falcon-mark");

document.addEventListener("mousemove", (event) => {

    if (!falcon) {
        return;
    }

    const rect = falcon.getBoundingClientRect();

    const falconCenterX = rect.left + rect.width / 2;
    const falconCenterY = rect.top + rect.height / 2;

    const deltaX = event.clientX - falconCenterX;
    const deltaY = event.clientY - falconCenterY;

    const distanceX = Math.max(-6, Math.min(6, deltaX / 40));
    const distanceY = Math.max(-6, Math.min(6, deltaY / 40));

    /*
       Reverse the offset so the glow appears
       on the side facing the cursor.
    */
    falcon.style.setProperty(
        "--light-x",
        `${-distanceX}px`
    );

    falcon.style.setProperty(
        "--light-y",
        `${-distanceY}px`
    );
});