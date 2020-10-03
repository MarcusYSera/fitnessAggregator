<template>
  <div>
    <div>
      <p>
        Idea is to take this information and display activity types by group
        when clicked. display following information
      </p>
      <br />
      <div v-for="(value, key) in propsActivitiesList" v-bind:key="key">
        {{ value.name }} | {{ value.type }} | {{ value.id }} |
        {{ value.distance }} | {{ value.moving_time }} |
        {{ value.elapsed_time }} | {{ value.average_speed }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityDescriptionTable',
  props: {
    propsActivitiesList: Object,
  },
  computed: {},
};
</script>

<style></style>
