const readingsContainer = document.getElementById("readingsContainer");

// Fetch the JSON data
fetch("/json-data/new-testament/new-testament-data.json")
  .then((response) => response.json())
  .then((data) => {

    // Today Reading
    // get current month and day
    const today = new Date();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const currentDay = today.getDate();


    // find the object for the current month
    const currentMonthObj = data.find(obj => obj.month === currentMonth);
    console.log(currentMonthObj)
    // find the reading of the day
    const reading = currentMonthObj.reading[currentDay - 1];

    // Get reading p tag
    const todaysReading = document.getElementById('today-reading');
    console.log(todaysReading)
    todaysReading.textContent = reading;


    // Loop through the months in the JSON data
    for(let i=0; i<data.length; i++){
        const monthData = data[i];
        const monthHeader = document.createElement("h2");
        monthHeader.textContent = monthData.month;
        

        readingsContainer.appendChild(monthHeader);

        const table = document.createElement("table");
        const tableHeader = document.createElement("tr");
        const dayHeader = document.createElement("th");
        dayHeader.textContent = "Day";
        const readingHeader = document.createElement("th");
        readingHeader.textContent = "Reading";
        tableHeader.appendChild(dayHeader);
        tableHeader.appendChild(readingHeader);
        table.appendChild(tableHeader);

        
        

        for(let j=0; j<monthData.day.length; j++){
            const row = document.createElement("tr");
            const dayCell = document.createElement("td");
            dayCell.textContent = monthData.day[j];
            const readingCell = document.createElement("td");
            readingCell.textContent = monthData.reading[j];
            row.appendChild(dayCell);
            row.appendChild(readingCell);
            table.appendChild(row);

            // STYLES
            row.classList.add("bg-gray-50","p-4", "border-2");
            dayCell.classList.add("text-xl", "p-2","border-2");
            readingCell.classList.add("text-xl", "p-2","border-2");
        }

        // STYLES
        monthHeader.classList.add("text-4xl", "text-center", "font-semibold", "mb-6", "md:text-5xl")
        table.classList.add("w-full","mb-20","mx-auto");
        tableHeader.classList.add();
        dayHeader.classList.add("text-xl", "p-2","border-2","bg-gray-200", "md:text-2xl");
        readingHeader.classList.add("text-xl", "p-2","border-2","bg-gray-200","md:text-2xl");


        readingsContainer.appendChild(table);
    }
    
  })
  .catch((error) => {
    console.error("Error fetching JSON data: ", error);
  });





//   monthElement.textContent = data.month;

//     const days = data.day;
//     const readings = data.reading;

//     for (let i = 0; i < days.length; i++) {
//       const day = days[i];
//       const reading = readings[i];
//       const div = document.createElement("div");
//       div.textContent = `${day}: ${reading}`;
//       readingsContainer.appendChild(div);
//     }