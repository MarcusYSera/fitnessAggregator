<template>
  <div class="tableContainer sixColumns" v-if="propsActivityName">
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
    propsActivityName: String,
  },
  data() {
    return {
      titleArray: [
        'Name',
        'Date / Time',
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
        if (this.propsActivityName === i['type']) {
          newArr.push(i['name']);
          let date = i['start_date_local'].split('T')[0];
          let formattedDate = date
            .split('-')
            .slice(1)
            .concat(date.split('-').slice(0, 1))
            .join('/');
          let time = i['start_date_local'].split('T')[1].split('Z')[0];
          let formattedTime = time.split(':');
          formattedTime.pop();
          if (parseInt(formattedTime[0]) > 12) {
            formattedTime[0] = (parseInt(formattedTime[0]) - 12).toString();
            newArr.push(`${formattedDate} ${formattedTime.join(':') + ' PM'}`);
          } else {
            newArr.push(`${formattedDate} ${formattedTime.join(':') + ' AM'}`);
          }
          newArr.push(i['distance']);
          newArr.push(i['moving_time']);
          newArr.push(i['elapsed_time']);
          newArr.push(i['average_speed']);
        }
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
.fiveColumns > .item {
  width: 20%;
}
.sixColumns > .item {
  width: 16.66%;
}
</style>
