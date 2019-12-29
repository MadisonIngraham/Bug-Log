<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  height: 100%;
  margin: 0;
  --primary: #2780e3;
  --secondary: #373a3c;
  --success: #3fb618;
  --info: #9954bb;
  --warning: #ff7518;
  --danger: #ff0039;
  --light: #f8f9fa;
  --dark: #373a3c;
}
body,
html {
  height: 100%;
  margin: 0;
  font-family: "Liberation Mono", "Courier New", monospace;
}
</style>
