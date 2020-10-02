<template>
  <div>
    <div class="tableContainer twocolumns">
      <!-- <div class="title">Totals</div> -->
      <div class="item">Activitiy</div>
      <div class="item">Total</div>
    </div>
    <div
      v-for="(value, key) in composeNewObject"
      v-bind:key="key.id"
      class="tableContainer twocolumns"
    >
      <div class="item">{{ key }}</div>
      <div class="item">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    propAthleteActivities: Object,
  },
  computed: {
    toCaps() {
      let newArr = [];
      for (let word in this.propAthleteActivities) {
        word = word.slice(0, 1).toUpperCase() + word.slice(1);
        newArr.push(word);
      }
      return newArr;
    },
    composeNewObject() {
      let newOb = {};
      let oldOb = this.propAthleteActivities;
      let i = 0;
      for (let value in oldOb) {
        newOb[this.toCaps[i]] = oldOb[value];
        i++;
      }
      return newOb;
    },
  },
};
</script>

<style scoped>
.tableContainer {
  display: flex;
  flex-wrap: wrap;
  /* margin: 0 0 3em 0; */
  margin: 0;
  padding: 0;
  text-align: center;
  width: 50%;
}
.item {
  border: 1px black solid;
}

.twocolumns > .item {
  width: 50%;
}
.threecolumns > .item {
  width: 33.33%;
}
</style>
