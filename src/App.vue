<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleForm"
      title="Task Tracker"
      :showAddTask="showAddTask"
    />
    <!-- v-show, toggle by boolean -->
    <div v-show="showAddTask">
      <AddTask @add-task="addNewTask" />
    </div>
    <!-- v-bind tasks to task to see the change in real time -->
    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    deleteTask(id) {
      if (confirm('Are you sure?')) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    addNewTask(newTask) {
      this.tasks = [...this.tasks, newTask];
    },
    toggleForm() {
      this.showAddTask = !this.showAddTask;
    },
  },
  // created is equal to useEffect and here we make a requests
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'text1',
        day: 'day1',
        reminder: true,
      },
      {
        id: 2,
        text: 'text2',
        day: 'day2',
        reminder: true,
      },
      {
        id: 3,
        text: 'text3',
        day: 'day3',
        reminder: false,
      },
    ];
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
