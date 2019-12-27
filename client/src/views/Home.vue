<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col d-flex justify-content-around" id="header">
        <h1>The Bug Log</h1>

        <button type="submit">Report</button>
      </div>
    </div>
    <div class="row">
      <div class="col" id="body">
        <h4 class="d-flex">Current Bugs</h4>

        <div class="d-flex justify-content-center">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Reported By</th>
                <th scope="col">Status</th>
                <th scope="col">Last Modified</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
h4 {
  padding: 10pt;
  margin-left: 8vh;
}

table {
  width: 85%;
}

#header {
  margin: 2%;
  top: 3vh;
}

#body {
  top: 5vh;
}

.container-fluid {
  height: 100%;
  margin: 0;
}
</style>