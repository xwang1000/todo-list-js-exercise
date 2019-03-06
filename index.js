const newTask = (title, description) => {
  const task = {
    title, 
    description, 
    complete: false,
    logState () {
      console.log(`${this.title} has ${task.complete ? '' : 'not been'} completed`);
    },
    markCompleted () {
      this.complete = true;
    }
  };
  return task
};

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState();