
const init = () => {
initialize();
document.querySelector('#exerciseForm').addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    let exerciseObj = {
        name: e.target.exercise_name.value,
        sets: e.target.sets.value,
        reps: e.target.reps.value
    }
    addExercise(exerciseObj);
    console.log(e.target.exercise_name.value)
    e.target.exercise_name.value = "";
    e.target.sets.value = "";
    e.target.reps.value = "";
};
}

document.addEventListener("DOMContentLoaded", init)




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
        card.remove();
        deleteExercise(exercise.id);
    })
};

//Fetch Request
//Get all exercises saved in json server
function getAllExercises(){
    fetch('http://localhost:3000/workouts')
    .then(res => res.json())
    .then(exerciseData => exerciseData.forEach(exercise => renderOneExercise(exercise)))
}


//Adding exercises to JSON server data
function addExercise(exerciseObj){
    fetch('http://localhost:3000/workouts', {
        method: 'POST' ,
        headers:
        {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body:JSON.stringify(exerciseObj)
    })
    .then(res => res.json())
    .then(data => renderOneExercise(data))
    
}

//Deleting exercises from JSON server
function deleteExercise(exercise){
    fetch(`http://localhost:3000/workouts/${exercise}`, {
        method: 'DELETE',
        header: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

//Initial Render
function initialize(){
    getAllExercises();
}