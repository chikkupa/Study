const courseNameInput = document.querySelector("#course-name");
const courseRatingInput = document.querySelector("#course-rating");
const addButton = document.querySelector("#button-add");
const courseList = document.querySelector("#course-list");

addButton.addEventListener('click', () => {
    const courseName = courseNameInput.value;
    const courseRating = courseRatingInput.value;

    const newItem = document.createElement('ion-item');
    newItem.textContent = courseName + " - " + courseRating;

    courseList.appendChild(newItem);
});
