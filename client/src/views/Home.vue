<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col d-flex justify-content-around" id="header">
        <h1>The Bug Log</h1>

        <button id="show-modal" type="button" class="btn" @click="showModal">
          <b>Report</b>
        </button>
        <modal v-show="isModalVisible" @close="closeModal" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4>Current Bugs</h4>
      </div>
    </div>

    <div class="row">
      <div class="col d-flex justify-content-center" v-for="bug in bugs" :key="bug.id">
        <bug :bugData="bug" />
      </div>
    </div>
  </div>
</template>

<script>
import modal from "../components/Modal";
import bug from "../components/Bug";

export default {
  name: "home",
  components: {
    modal,
    bug
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  mounted() {
    this.$store.dispatch("getBugs");
  }
};
</script>

<style scoped>
h4 {
  padding: 10pt;
  margin-left: 8vh;
}

button {
  background-color: var(--primary);
  color: white;
  border-color: var(--primary);
  border-radius: 15%;
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
