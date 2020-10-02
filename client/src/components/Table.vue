<template>
  <ul class="tableContainer twocolumns">
    <li class="item">hello</li>
    <li class="item">hello</li>
    <li class="item">hello</li>
    <li class="item">hello</li>
    <li class="item">hello</li>
    <li class="item">hello</li>
    <li class="item">hello</li>
    <li class="item">hello</li>
  </ul>
</template>

<script>
export default {
  name: 'Table',
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
.item {
  flex-grow: 1;
  width: 100%;
  padding: 0.8 em 1.2em;
  overflow: hidden;
  list-style: none;
}
.twocolumns > .item {
  width: 50%;
}
</style>
