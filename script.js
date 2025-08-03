const countdown = () => {
  const weddingDate = new Date("August 11, 2025 11:00:00");
  const now = new Date();

  const isToday =
    weddingDate.getDate() === now.getDate() &&
    weddingDate.getMonth() === now.getMonth() &&
    weddingDate.getFullYear() === now.getFullYear();

  const distance = weddingDate.getTime() - now.getTime();

  if (isToday) {
    const timeStr = weddingDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const dateStr = weddingDate.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    document.getElementById("countdown").innerHTML =
      `<h2>Today is the day!</h2><p>${dateStr} at ${timeStr}</p>`;
  } else if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("countdown").innerHTML =
      `<h2>${days} Days ${hours} Hrs ${minutes} Min ${seconds} Sec to go!</h2>`;
  } else {
    document.getElementById("countdown").innerHTML =
      `<h2>The wedding has passed!</h2>`;
  }
};

setInterval(countdown, 1000);
