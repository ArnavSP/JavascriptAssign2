// Constants for query selector
const customColorButton = document.querySelector('.custColor'); // Matched by class
const randomColorButton = document.querySelector('.randColor'); // Matched by class
const selectList = document.getElementById('imageSelect'); // Matched by ID
const pTag = document.getElementById('myStudentId'); // Matched by ID
const imageContainer = document.getElementById('images'); // Matched by ID

const imageNames = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];


// Function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = document.getElementById('customNumber').value; // Getting the value from the input element
    const studentId = '200542352';

    if (userInput !== null) {
        const number = parseFloat(userInput);

        if (!isNaN(number) && number >= 0 && number <= 100) {
            if (number < 20) {
                document.body.style.backgroundColor = 'green';
            } else if (number < 40) {
                document.body.style.backgroundColor = 'blue';
            } else if (number < 60) {
                document.body.style.backgroundColor = 'orange';
            } else if (number < 80) {
                document.body.style.backgroundColor = 'purple';
            } else {
                document.body.style.backgroundColor = 'yellow';
            }

            pTag.textContent = `Student ID: ${studentId}`;
        } else {
            alert('Please enter a valid number between 0 and 100.');
        }
    }
}

// Function to change bg color from random number
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('customNumber').value = randomNumber; // Setting the input field to the random number
    changeCustomColor(); // Call the changeCustomColor function to update the background color and student ID
}


// Function to generate options for select list
function addList() {
    
    const select = document.getElementById('imageSelect'); 

    for (let i = 0; i < imageNames.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = `Image ${i + 1}`;
        select.appendChild(option);
    }
}

// Call the addList function to populate the select list initially
addList();

// Function to change displayed image based on the select list
function changeImage() {
    const selectedImageIndex = imageSelect.value;
    if (selectedImageIndex >= 0 && selectedImageIndex < imageNames.length) {
        const selectedImage = imageNames[selectedImageIndex];
        images.src = selectedImage;
    } else {
        images.src = ""; // Clearing the image if an invalid option is selected
    }
}

// Event listener for "Change custom color" button
customColorButton.addEventListener('click', changeCustomColor);

// Event listener for "Change random color" button
randomColorButton.addEventListener('click', changeRandomColor);

// Event listener for select list change
imageSelect.addEventListener('change', changeImage);


