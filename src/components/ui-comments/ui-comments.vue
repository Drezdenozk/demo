<template>
  <ul class="list">
    <li v-for="(item, index) in commentList" :key="`comment-${index}`">{{item}}
      <button @click="$emit('removeItem', index)">Delete</button></li>
  </ul>
</template>

<script>
export default {
  name: 'UiComments',
  props: {
    commentList: {
      type: Object,
      default: () => {}, // Список комментариев
    },
  },
};
</script>

<style lang="scss" scoped>
  .list {
    width: 400px;
    margin-right: auto;
    margin-left: auto;
    text-align: left;

    li {
      margin: 0 0 10px;
      border-bottom: 1px solid grey;
      padding-bottom: 9px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
