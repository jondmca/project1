
const init = () => {
initialize();
document.querySelector('#exerciseForm').addEventListener('submit', handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    let exerciseObj = {
        name: e.target.exercise_name.value,
        sets: e.target.sets.value,
        reps: e.target.reps.value
    }
    addExercise(exerciseObj);
    e.target.exercise_name.value = "";
    e.target.sets.value = "";
    e.target.reps.value = "";
};
};

document.addEventListener("DOMContentLoaded", init);

function renderOneExercise(exercise){
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
    document.querySelector('#exercise-list').appendChild(card);

    document.getElementById(exercise.name).addEventListener('click', () => {
        card.remove();
        deleteExercise(exercise.id);
    })
};

function getAllExercises(){
    fetch('http://localhost:3000/workouts')
    .then(res => res.json())
    .then(exerciseData => exerciseData.forEach(exercise => renderOneExercise(exercise)));
};

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
    .then(data => renderOneExercise(data));
    
};

function deleteExercise(exercise){
    fetch(`http://localhost:3000/workouts/${exercise}`, {
        method: 'DELETE',
        header: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
};

function initialize(){
    getAllExercises();
};