function toggleSearchField() {
  const searchInput = document.getElementById('searchInput');
  const searchLink = document.getElementById('searchLink');
  const searchButton = document.getElementById('searchButton');

  // Toggle the display of the input field and hide the link and button
  if (searchInput.style.display === 'none' || searchInput.style.display === '') {
    searchInput.style.display = 'block'; // Show the input field
    searchLink.style.display = 'none';   // Hide the "Search" text
    searchButton.style.display = 'none'; // Hide the search button
    searchInput.focus();                 // Automatically focus on the input field

    // Add event listener to close the search input when clicking outside
    document.addEventListener('click', closeSearchOnClickOutside);
  }
}

// Function to close search input when clicking outside
function closeSearchOnClickOutside(event) {
  const searchInput = document.getElementById('searchInput');
  const searchLink = document.getElementById('searchLink');
  const searchButton = document.getElementById('searchButton');
  const searchContainer = document.getElementById('searchContainer');

  // Check if the click is outside the search container
  if (!searchContainer.contains(event.target)) {
    searchInput.style.display = 'none';  // Hide the input field
    searchLink.style.display = 'inline'; // Show the "Search" text again
    searchButton.style.display = 'inline'; // Show the search button again

    // Remove the event listener after closing the input
    document.removeEventListener('click', closeSearchOnClickOutside);
  }
}



const subscribe = document.getElementById('subscribe')
const popUp = document.getElementById('popUp')
const overlay = document.getElementById('loginOverlay')
const close = document.getElementById('closePop')

const body = document.body;

subscribe.addEventListener('click', function display() {
  popUp.style.display = 'flex'
  overlay.style.zIndex = '9999'
  overlay.style.backgroundColor = 'rgba(0,0,0,.7)'
  body.style.overflowY = 'hidden'
})

overlay.addEventListener('click', function close() {
  if (event.target === overlay) {
      popUp.style.display = 'none';
      overlay.style.zIndex = '-1';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  body.style.overflowY = 'auto'

    }
})

close.addEventListener('click', function close() {
      popUp.style.display = 'none';
      overlay.style.zIndex = '-1';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)'; 
  body.style.overflowY = 'auto'

})



//   console.log(body)