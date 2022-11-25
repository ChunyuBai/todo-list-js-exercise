// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];


// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title,description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: () => {
     console.log(`${task.title} has${task.complete ? " " : " not "}been completed`)
    },
    completeTask: () => {
       task.complete = true;
     }
  }
  return task;
}



// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState();// havent been completed
task1.completeTask();
task1.logTaskState();// completed

task1.title
task1.completeTask();
// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
