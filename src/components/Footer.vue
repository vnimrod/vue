<template>
  <footer>
    <p>
      Copyright &copy; 2021
    </p>
    <!-- router-link - when go route to new page by click, the page will not referesh -->
    <router-link to="/about">About</router-link>
  </footer>
</template>

<style scoped>
a {
  color: #333;
}
footer {
  margin-top: 30px;
  text-align: center;
}
</style>
