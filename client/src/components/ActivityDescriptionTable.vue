<template>
  <div class="tableContainer sevenColumns">
    <div v-for="(value, key) in titleArray" v-bind:key="key" class="item title">
      {{ value }}
    </div>
    <div
      v-for="(value, key) in specifiedCategories"
      v-bind:key="key"
      class="item"
    >
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityDescriptionTable',
  props: {
    propsActivitiesList: Object,
  },
  data() {
    return {
      titleArray: [
        'Name',
        'Type',
        'ID',
        'Distance',
        'Moving Time',
        'Elapsed Time',
        'Average Speed',
      ],
    };
  },
  computed: {
    specifiedCategories() {
      let newArr = [];
      let originalArr = this.propsActivitiesList;
      for (let i of originalArr) {
        newArr.push(i['name']);
        newArr.push(i['type']);
        newArr.push(i['id']);
        newArr.push(i['distance']);
        newArr.push(i['moving_time']);
        newArr.push(i['elapsed_time']);
        newArr.push(i['average_speed']);
      }
      return newArr;
    },
  },
};
</script>

<style scoped>
.tableContainer {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
}
.title {
  font-weight: 600;
}
.item {
  border: 1px black solid;
}
.sevenColumns > .item {
  width: 14.28%;
}
</style>
