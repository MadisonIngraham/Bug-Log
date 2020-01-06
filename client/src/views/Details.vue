<template>
  <div class="details container-fluid">
    <div class="row">
      <div class="col d-flex justify-content-around" id="header">
        <router-link :to="{name: 'home'}">
          <h1>The Bug Log</h1>
        </router-link>

        <button id="show-modal" type="button" class="btn" @click="showModal">
          <b>Report</b>
        </button>
        <modal v-show="isModalVisible" @close="closeModal" />
      </div>
    </div>
    <div class="row">
      <div class="col" id="title-row">
        <p>Title</p>

        <h2>{{bug.title}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex" id="reported">
        <p>Reported By:</p>
        <h4>{{bug.reportedBy}}</h4>
      </div>
      <div class="col d-flex" id="status">
        <p>Status:</p>
        <h5>{{bug.closed}}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div id="description">{{bug.description}}</div>
        <div id="btn-div">
          <button type="button" class="btn btn-danger m-1">Close</button>
        </div>
      </div>
    </div>
    <div class="row" id="notes-row">
      <div class="col">
        <h3>Notes</h3>
      </div>
    </div>
    <div class="row">
      <div class="col" id="note-row">
        <div class="card border-primary mb-3" style="max-width: 20rem;">
          <form id="create-note" class="new-note-form" @submit.prevent="createNote">
            <div class="card-header d-flex">
              <div id="name-label">Name:</div>
              <textarea required id="reportedBy" v-model="newNote.reportedBy"></textarea>
            </div>
            <div class="card-body">
              <textarea required class="card-text" id="content" v-model="newNote.content">Type your note here</textarea>
            </div>
            <div id="add-note-btn">
              <button type="submit" class="btn btn-success m-1">Add Note</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col" v-for="note in notes" :key="note.id">
        <!-- <note :noteData="note" /> -->
        <note />
      </div>
    </div>
  </div>
</template>

<script>
import modal from "../components/Modal";
import bug from "../components/Bug";
import note from "../components/Note";

export default {
  name: "details",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
    this.$store.dispatch("getNotes");
  },
  components: {
    modal,
    bug,
    note
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.notes;
    }
  },
  data() {
    return {
      isModalVisible: false,
      newNote: {
        reportedBy: "",
        content: ""
      }
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    createNote() {
      let note = { ...this.newNote };
      this.$store.dispatch("createNote", note);
      this.newNote = {
        reportedBy: "",
        content: ""
      };
    }
  }
};
</script>

<style scoped>
#reported,
#status {
  margin: 1%;
}

#reportedBy {
  height: 2rem;
}

#content {
  width: -webkit-fill-available;
}

#notes-row {
  flex-direction: column;
}

#note-row {
  margin-left: 5vh;
}

#status {
  justify-content: flex-end;
  margin-right: 4vh;
}

#name-label {
  display: flex;
  align-items: center;
}

#description {
  height: 20vh;
  margin: 1%;
  outline: 1pt solid black;
  padding: 1%;
}

#add-note-btn {
  display: flex;
  justify-content: flex-end;
}

#btn-div {
  display: flex;
  justify-content: flex-end;
}

#header {
  margin: 2%;
  top: 3vh;
  margin-bottom: 8vh;
}

#show-modal {
  background-color: var(--primary);
  color: white;
  border-color: var(--primary);
  border-radius: 15%;
}

p {
  margin-right: 10px;
}

.container-fluid {
  height: 100%;
  margin: 0;
}

#title-row {
  margin: 2%;
}
</style>