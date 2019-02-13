<template>
  <div class="ui-fractions__operator">
    <ui-input v-model="operator" onlyOperator :disabled="disabled" :definedValue="definedValue"/>
  </div>
</template>

<script>
import uiInput from '@/components/ui-input/ui-input.vue';
import propsMixin from '@/components/ui-fractions/mixin';

export default {
  name: 'UiFractionsOperator',
  components: {
    uiInput,
  },
  mixins: [
    propsMixin,
  ],
  data() {
    return {
      operator: null,
    };
  },
};
</script>

<style scoped>
  .ui-fractions__operator {
    width: 30px;
    margin: 0 20px;
  }
</style>
