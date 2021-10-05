//Showing how to manipulate the DOM from the JS file
const h2 = document.createElement("h2");
h2.textContent = "Add Your Workouts:";
document.querySelector("body").appendChild(h2);

//Stops the webpage from refreshing when adding in workouts
const init = () => {
    let inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);

        fetch('http://localhost:3000/workouts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });

    });
}

document.addEventListener('DOMContentLoaded', init)

//DOM Render Workout
function renderOneExercise(exercise){
    let card = document.createElement('li');
    card.className = 'card'
    card.innerHTML = `
        <div class="content">
            <h2>${exercise.name}</h2>
            <p>
                $<span class="sets-reps">${exercise.sets} x ${exercise.reps}
            </p>
        </div>
        <div class="button">
            <button> Completed </button>
        </div
    `
    //Add exercise card to DOM
    document.querySelector('#exercise-list').appendChild(card);
};

