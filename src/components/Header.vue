<template>
  <header>
    <!-- way one from props -->
    <h1>{{ title }}</h1>
    <Button
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Header',

  // managing props:

  //1 way: array with prop name and on header above {{}}
  // props: ['title']

  // 2 way: define props as an object
  props: {
    title: String,
    showAddTask: Boolean,
  },

  //3 way: define a default value when we not passing any props to here
  // props:{
  //   title: {
  //     type: String,
  //     default: "Hello World"
  //   }
  // }

  components: {
    Button,
  },
};
</script>

<!-- scoped - means that the style will be to this component only! -->
<style scope>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
