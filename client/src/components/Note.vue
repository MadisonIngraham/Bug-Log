<template>
  <div class="note">
    <div class="card border-primary mb-3" style="max-width: 20rem;">
      <div class="card-header d-flex">
        <div id="name-label">Name:</div>
        {{noteData.reportedBy}}
      </div>
      <div class="card-body">
        <p>{{noteData.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "note",
  props: ["noteData"],
  computed: {
    notes() {
      return this.$store.state.notes;
    }
  }
};
</script>

<style scoped>
</style>