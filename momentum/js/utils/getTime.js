export default (local) => {
  const date = new Date();
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
  };
  const currentDate = date.toLocaleDateString(local.timeZone, options);
  const clock = document.querySelector("time");
  clock.innerHTML = date.toLocaleTimeString();
  const dateText = document.querySelector("date");
  dateText.innerHTML = currentDate;
};
