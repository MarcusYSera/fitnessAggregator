<template>
  <div class="tableContainer threecolumns">
    <div class="solo item">Totals</div>
    <div
      class="item"
      v-for="(value, key) in propAthleteActivities"
      v-bind:key="key.id"
    >
      <div>{{ key }}</div>
      <div>{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    propAthleteActivities: Object,
  },
};
</script>

<style scoped>
.tableContainer {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 3em 0;
  padding: 0;
  text-align: center;
  width: 50%;
}
.solo {
  flex-grow: 3;
}
.item {
  flex-grow: 1;
  width: 100%;
  height: 100%;
  /* padding: 0.8 em 1.2em; */
  overflow: hidden;
  list-style: none;
  border: 1px black solid;
}
.twocolumns > .item {
  width: 50%;
}
.threecolumns > .item {
  width: 33.33%;
}
</style>
