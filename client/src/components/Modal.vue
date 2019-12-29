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
          <form class="new-bug-form" @submit.prevent="onSubmit">
            <div id="name-form">
              <label for="name">Your Name</label>
              <input id="name" />
            </div>
            <div id="title-form">
              <label for="title">Title</label>
              <input id="title" />
            </div>
            <p>
              <label for="description">Comments:</label>
              <textarea id="description">
Please give a detailed description of bug...</textarea
              >
            </p>
          </form>
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <button type="submit" class="btn btn-success">Submit</button>
          <button type="button" class="btn btn-danger" @click="close">
            Cancel
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    }
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
  height: 50vh;
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
</style>
