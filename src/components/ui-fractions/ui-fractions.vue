<template>
  <div class="calculate">
    <div class="calculate__body">
      <div class="calculate__column">

      </div>
      <div class="calculate__operator">

      </div>
      <div class="calculate__column">

      </div>
    </div>
    <div class="calculate__footer">
      <button>Add Fractions</button>
    </div>
  </div>
</template>

<script>
import  FractionsColumn from '@/components/ui-fractions/ui-fractions-column.vue'
export default {
  name: 'UiFractions',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>