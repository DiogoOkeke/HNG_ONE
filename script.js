document.addEventListener("DOMContentLoaded", () => {
  // Find the element to display the time
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  function updateTime() {
    if (timeElement) {
      timeElement.textContent = Date.now();
    }
  }

  updateTime();

  setInterval(updateTime, 1000);
});
