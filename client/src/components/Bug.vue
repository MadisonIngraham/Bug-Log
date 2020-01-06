<template>
  <div class="bug">
    <router-link :to="{name:'details', params: {id: bugData.id}}">
      <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
        <div class="card-header">
          <h4>
            <b>{{bugData.title}}</b>
          </h4>
          <div>Reported By: {{bugData.reportedBy}}</div>
          <div>Closed: {{bugData.closed}}</div>
        </div>
        <div class="card-body">
          <p class="card-text">{{bugData.description}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "bug",
  props: ["bugData"],
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  }
};
</script>

<style scoped>
i {
  color: red;
}
</style>
