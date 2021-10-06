//Stops the webpage from refreshing when adding in workouts
const init = () => {
    let inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let exerciseObj = {
            name: e.target.exercise_name.value,
            sets: e.target.sets.value,
            reps: e.target.reps.value
        };
        renderOneExercise(exerciseObj);
        addExercise(exerciseObj);
         console.log(e);
         console.log(exerciseObj);
    });
}

//Event Listeners
document.addEventListener('DOMContentLoaded', init)

//Event Handlers
function handleSubmit(e){
}

//DOM Render Workout
function renderOneExercise(exercise){
    //Build Exercise Card
    let card = document.createElement('div');
    card.className = 'card'
    card.innerHTML = `
    <div class="content">
    <h3>${exercise.name}</h3>
    <p>
    <span class="sets-reps">${exercise.sets} sets x ${exercise.reps} reps</span>
    </p>
    <div class="button">
    <button class="completed-btn" id="${exercise.name}"> Completed </button>
    </div>
    </div>
    `
    //Add exercise card to DOM
    document.querySelector('#exercise-list').appendChild(card);
    document.getElementById(exercise.name).addEventListener('click', () => {
        card.remove()
    })
};

//Fetch Request
function getAllExercises(){
    fetch('http://localhost:3000/workouts')
    .then(res => res.json())
    .then(data => console.log(data))
}


//Adding exercises to JSON server data
function addExercise(exerciseObj){
    console.log(JSON.stringify(exerciseObj))
    // fetch('http://localhost:3000/workouts'),{
    //     method: 'POST' ,
    //     headers:
    //     {
    //         "Content-Type": "application/json",
    //         Accept: "application/json"
    //     },

    // }
}
