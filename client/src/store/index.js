import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

let _api = axios.create({
  baseURL: "//localhost:3000/api"
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: []
  },
  mutations: {
    setAllBugs(state, data) {
      state.bugs = data;
    },
    setAllNotes(state, data) {
      state.notes = data;
    },
    addBug(state, bug) {
      state.bugs.push(bug);
    },
    addNote(state, note) {
      state.notes.push(note);
    },
    setActiveBug(state, bug) {
      state.activeBug = bug;
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      commit("setAllBugs", res.data);
    },
    async getNotes({ commit, dispatch }) {
      let res = await _api.get("notes");
      commit("setAllNotes", res.data);
    },
    async createBug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug);
      commit("addBug", res.data);
    },
    async createNote({ commit, dispatch }, note) {
      let res = await _api.post("notes", note);
      commit("addNote", res.data);
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    async closeBug({ commit, dispatch }, id) {
      if (confirm("Are you sure?")) {
        await _api.delete("bugs/" + id);
        dispatch("getBugs");
      }
    }
  }
});
