<template>
  <tr class="bug">
    <router-link :to="{name:'details', params: {id: bugData.id}}">
      <td>{{bugData.title}}</td>
    </router-link>
    <td>{{bugData.reportedBy}}</td>
    <td v-bind:style=" bugData.closed ? 'color: red;' : 'color: green;' ">{{bugData.closed}}</td>
    <td>{{bugData.updatedAt}}</td>
  </tr>
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
