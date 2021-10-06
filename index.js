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
    //Build Exercise Card
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
            <button class="completed-btn" id="${exercise.name}> Completed! </button>
        </div
    `
    //Add exercise card to DOM
    document.querySelector('#exercise-list').appendChild(card);
};

//Fetch Request
function getAllExercises(){
    fetch('http://localhost:3000/workouts')
    .then(res => res.json())
    .then(data => console.log(data))
}


//Adding exercises to JSON server data
function addExercise(){
    fetch('http://localhost:3000/workouts'),{
        method: 'POST' ,
        headers:
        {
            "Content-Type": "application/json",
            Accept: "application/json"
        },

    }
}
