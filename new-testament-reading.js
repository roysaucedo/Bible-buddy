const monthElement = document.getElementById("monthContainer");
const readingsContainer = document.getElementById("readingsContainer");

// Fetch the JSON data
fetch("/json-data/new-testament/january-nt.json")
  .then((response) => response.json())
  .then((data) => {
    // Loop through the months in the JSON data
    monthElement.textContent = data.month;

    const days = data.day;
    const readings = data.reading;

    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      const reading = readings[i];
      const div = document.createElement("div");
      div.textContent = `${day}: ${reading}`;
      readingsContainer.appendChild(div);
    }
  })
  .catch((error) => {
    console.error("Error fetching JSON data: ", error);
  });
