<template>
  <div>
    <!-- <div class="title">Totals</div> -->
    <div class="flex-container header">
      <h4 class="header-one">Activitiy</h4>
      <h4 class="header-two">Total</h4>
    </div>
    <div
      class="flex-container"
      v-on:click="onActivitySelect(key)"
      v-for="(value, key) in totalActivityTypes"
      v-bind:key="key.id"
    >
      <div class="item">
        {{ key }}
      </div>
      <div class="item">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AthleteActivityTable',
  props: {
    propsActivitiesList: Object,
  },
  methods: {
    onActivitySelect(key) {
      this.$emit('emitted-activity', key);
    },
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
.grid-container-table {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 5vh;
  justify-items: center;
}
.flex-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.flex-container > .item {
  flex: 1;
  text-align: center;
  border: 1px solid black;
}
.flex-container.header {
  justify-content: space-around;
  border: 1px solid black;
}
</style>
