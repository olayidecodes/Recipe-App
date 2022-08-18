<template>
  <router-view/>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Comfortaa', cursive;
}

body {
  background-color: #030e1b;
  color: #fff;
}

a {
  text-decoration: none;
  color: #D1CAC4;
}

button {
  padding: .5rem 1.2rem;
  width: fit-content;
  border-radius: 3px;
  border: none;
  transition-duration: .5s;
  cursor: pointer;
  background-color: #dc68cf;
}

button:hover {
  background-color: #637bb0;
  color: #fff;
}
</style>
