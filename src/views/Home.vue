<template>
  <div>
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
import AddTask from '../components/AddTask.vue';
import Tasks from '../components/Tasks.vue';

export default {
  name: 'Home',
  props: {
    showAddTask: Boolean,
  },
  components: {
    AddTask,
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async deleteTask(id) {
      if (confirm('Are you sure?')) {
        await fetch(`api/tasks/${id}`, {
          method: 'DELETE',
        });

        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      });
      const data = await res.json();
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    async addNewTask(newTask) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    async fetchTasks() {
      const res = await fetch('api/tasks');
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },
  // created is equal to useEffect and here we make a requests
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
