// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

// Lägger till händelselyssnare för section3
const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

//fetchar data.
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      //skapar elemnt för sektion title och description
      const sectionDiv = document.createElement('div');
      sectionDiv.classList.add('title');
      sectionDiv.textContent = post.title;
      
      const descriptionDiv = document.createElement('div');
      descriptionDiv.classList.add('description');
      descriptionDiv.textContent = post.body;

      // Append elements för FAQ section
      const accordion = document.querySelector('.accordion');
      accordion.appendChild(sectionDiv);
      accordion.appendChild(descriptionDiv);

      // funktion för toggler knapp vid text.
      function toggle(e) {
        const element = e.target;
        element.classList.toggle('active');
        const nextElement = element.nextElementSibling;
        if (nextElement.classList.contains('description')) {
          nextElement.style.display = nextElement.style.display === 'block' ? 'none' : 'block';
        }
      }

      // Adderar en eventlistener för toggle.
      sectionDiv.addEventListener('click', toggle);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });