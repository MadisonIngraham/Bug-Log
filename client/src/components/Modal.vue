<template id="modal-template">
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h3>Report Bug</h3>
          <button type="button" class="btn-close" @click="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <form class="new-bug-form" @submit.prevent="createBug">
            <div id="name-form">
              <label for="name">Your Name</label>
              <input required id="name" type="text" v-model="newBug.reportedBy" />
            </div>
            <div id="title-form">
              <label for="title">Title</label>
              <input required id="title" type="text" v-model="newBug.title" />
            </div>
            <p>
              <label for="description">Comments:</label>
              <textarea required id="description" v-model="newBug.description">
Please give a detailed description of bug...</textarea>
            </p>
            <footer>
              <button type="submit" class="btn btn-success m-1">Submit</button>
              <button type="button" class="btn btn-danger m-1" @click="close">Cancel</button>
            </footer>
          </form>
        </slot>
      </section>
    </div>
  </div>
</template>

<script>
import bug from "../components/Bug";

export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    },
    createBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      this.newBug = {
        title: "",
        description: "",
        reportedBy: ""
      };
    }
  },
  data() {
    return {
      newBug: {
        title: "",
        description: "",
        reportedBy: ""
      }
    };
  },
  components: {
    bug
  }
};
</script>

<style scoped>
template {
  --primary: #2780e3;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 67vh;
  height: 60%;
  top: 20vh;
  left: 30vw;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: black;
  justify-content: space-between;
  align-items: baseline;
  height: 9vh;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  margin-bottom: 0;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: black;
  background: transparent;
}

input {
  width: 60%;
}

label {
  margin-bottom: 2pt;
}

textarea {
  width: 100%;
  height: 8vh;
}

#name-form,
#title-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 12pt;
  margin-top: 0;
}

footer {
  display: flex;
  justify-content: flex-end;
}
</style>
