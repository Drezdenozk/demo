<template>
  <div class="ui-fractions">
    <div class="ui-fractions__body">
      <ui-fractions-column></ui-fractions-column>
      <template v-for="(column, index) in fractionsLength">
        <ui-fractions-operator :key="`operator-${index}`"></ui-fractions-operator>
        <ui-fractions-column :key="`column-${index}`"></ui-fractions-column>
      </template>
    </div>
    <div class="ui-fractions__footer">
      <button @click="fractionsLength++">Add Fractions</button>
    </div>
  </div>
</template>

<script>
import UiFractionsColumn from '@/components/ui-fractions/ui-fractions-column.vue';
import UiFractionsOperator from '@/components/ui-fractions/ui-fractions-operator.vue';

export default {
  name: 'UiFractions',
  data() {
    return {
      fractionsLength: 1,
    };
  },
  components: {
    UiFractionsColumn,
    UiFractionsOperator,
  },
  methods: {
    addColumn() {
      console.warn('add');
    },
  },
};
</script>

<style scoped lang="scss">
  .ui-fractions__body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
