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