<template>
  <div class="grid-container-activity-desc-table" v-if="propsActivityName">
    <div
      v-for="(value, key) in titleArray"
      v-bind:key="key"
      class="item header"
    >
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
        'Distance (Miles)',
        'Moving Time (hr:min)',
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
          let formattedDate = this.formatDate(date);
          let time = i['start_date_local'].split('T')[1].split('Z')[0];
          let formattedTime = this.formatDateTime(time);
          newArr.push(`${formattedDate} ${formattedTime}`);
          let distance = this.formatDistance(i['distance']);
          newArr.push(distance);
          let movingTime = this.formatTime(i['moving_time']);
          newArr.push(movingTime);
          let elapsedTime = this.formatTime(i['elapsed_time']);
          newArr.push(elapsedTime);
          newArr.push(i['average_speed']);
        }
      }
      return newArr;
    },
  },
  methods: {
    formatDate(date) {
      let newDate = date.split('-');
      let day = newDate.slice(2)[0];
      let month = newDate.slice(1, 2)[0];
      if (parseInt(month) < 10) {
        month = month.split('0')[1];
      }
      let year = newDate.slice(0, 1)[0];
      let formattedDate = `${month}/${day}/${year}`;
      return formattedDate;
    },
    formatDateTime(time) {
      let formattedTime = time.split(':');
      formattedTime.pop();
      if (parseInt(formattedTime[0]) > 12) {
        formattedTime[0] = (parseInt(formattedTime[0]) - 12).toString();
        return formattedTime.join(':') + ' PM';
      } else {
        return formattedTime.join(':') + ' AM';
      }
    },
    formatDistance(distance) {
      let formattedDistance = (
        Math.round((parseInt(distance) / 1609.34) * 100) / 100
      ).toString();
      return formattedDistance;
    },
    formatTime(time) {
      let formattedTime = Math.round((parseInt(time) / 60 / 60) * 100) / 100;
      // not accounting for seconds! When I have time, come back to solve
      if (formattedTime < 1) {
        formattedTime = (60 * formattedTime).toFixed(2).toString() + ' min';
      } else if (formattedTime > 1 && formattedTime % 1 != 0) {
        let minutes =
          (parseInt(formattedTime.toString().split('.')[1]) / 100) * 60;
        formattedTime = `${formattedTime.toString().split('.')[0]}:${minutes}`;
      } else {
        formattedTime = formattedTime.toString() + ' hr';
      }
      return formattedTime;
    },
  },
};
</script>

<style scoped>
.grid-container-activity-desc-table {
  display: grid;
  height: 100%;
  width: 100%;
  outline: 1px solid black;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 15%;
  grid-auto-flow: row;
  grid-auto-rows: 16.67%;
  overflow-y: scroll;
}
.item.header {
  font-weight: 600;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid black;
  font-size: 0.8rem;
  padding: 0.2rem;
}
</style>
