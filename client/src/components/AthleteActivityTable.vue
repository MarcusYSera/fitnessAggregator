<template>
  <div>
    <div class="tableContainer twocolumns">
      <!-- <div class="title">Totals</div> -->
      <h4 class="item">Activitiy</h4>
      <h4 class="item">Total</h4>
    </div>
    <div
      v-for="(value, key) in totalActivityTypes"
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
  name: 'AthleteActivityTable',
  props: {
    propsActivitiesList: Object,
  },
  computed: {
    totalActivityTypes() {
      let newArr = [];
      let list = this.propsActivitiesList;
      for (let activity in list) {
        newArr.push(list[activity].type);
      }
      let charMap = {};
      for (let char of newArr) {
        if (charMap[char]) {
          charMap[char] = charMap[char] + 1;
        } else {
          charMap[char] = 1;
        }
      }
      return charMap;
    },
    // toCaps() {
    //   let newArr = [];
    //   for (let word in this.propsAthleteActivities) {
    //     word = word.slice(0, 1).toUpperCase() + word.slice(1);
    //     newArr.push(word);
    //   }
    //   return newArr;
    // },
    // composeNewObject() {
    //   let newOb = {};
    //   let oldOb = this.propsAthleteActivities;
    //   let i = 0;
    //   for (let value in oldOb) {
    //     newOb[this.toCaps[i]] = oldOb[value];
    //     i++;
    //   }
    //   return newOb;
    // },
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
