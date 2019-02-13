<template>
  <div class="ui-fractions__column">
    <ui-input v-model="upPart" onlyNumber
              @input="checkResult" :disabled="disabled" :definedValue="definedValue[0]"/>
    <div class="separator"></div>
    <ui-input v-model="downPart" onlyNumber
              @input="checkResult" :disabled="disabled" :definedValue="definedValue[1]"/>
  </div>
</template>

<script>
import uiInput from '@/components/ui-input/ui-input.vue';
import propsMixin from '@/components/ui-fractions/mixin';

export default {
  name: 'UiFractionsColumn',
  components: {
    uiInput,
  },
  mixins: [
    propsMixin,
  ],
  data() {
    return {
      upPart: null, // Верхняя часть дроби
      downPart: null, // Нижняя часть дроби
    };
  },
  methods: {
    /**
     * Если и верхняя и нижняя часть дроби существует - стучимся в родителя
     */
    checkResult() {
      if (this.upPart && this.downPart) {
        this.$emit('input', [
          this.upPart,
          this.downPart,
        ]);
      } else {
        this.$emit('input', '');
      }
    },
  },
};
</script>

<style scoped>
  .ui-fractions__column {
    display: flex;
    width: 100px;
    flex-direction: column;
  }
  .separator {
    margin-top: 3px;
    padding: 0px 0 3px;
    border-top: 1px solid grey;
  }
</style>
