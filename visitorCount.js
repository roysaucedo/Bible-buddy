		// Get the current count of visitors from localStorage, or initialize it to 0 if it doesn't exist
		let visitorCount = parseInt(localStorage.getItem('visitorCount')) || 0;

		// Increment the visitor count and save it back to localStorage
		visitorCount++;
		localStorage.setItem('visitorCount', visitorCount);

		// Display the visitor count on the screen
		document.getElementById('visitor-count').textContent = 'Number of visitors: ' + visitorCount;