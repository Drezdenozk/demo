<template>
  <div class="ui-input">
    <input type="text" v-model.trim.number="value" :disabled="disabled"
           @keypress="keyPressEvent($event)" @input="inputEvent"/>
  </div>
</template>

<script>
export default {
  name: 'UiInput',
  props: {
    disabled: {
      default: false, // Инпут залочен
      type: Boolean,
    },
    definedValue: { // Значения по дефолту
      type: [
        String,
        Number,
      ],
      default: null,
    },
    onlyNumber: {
      default: false, // В данном инпуте разрешен только ввод цифр
      type: Boolean,
    },
    onlyOperator: { // В данном инпуте разрешен только ввод математических операторов
      default: false,
      type: Boolean,
    },
  },
  watch: {
    definedValue(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.value = newVal;
      }
    },
  },
  data() {
    return {
      value: this.definedValue, // Значение по умолчанию для инпута
    };
  },
  methods: {
    /**
     * Событие input
     */
    inputEvent() {
      if (this.onlyOperator && this.value.length > 1) {
        this.value = this.value.split('').pop();
      }
      this.$emit('input', this.value);
    },
    /**
     * Событие keyPress
     */
    keyPressEvent(event) {
      if (this.onlyNumber && Number.isNaN(parseInt(event.key, 10))) {
        event.preventDefault();
      } else if (this.onlyOperator && ['+', '-', '*', '/'].indexOf(event.key) === -1) {
        event.preventDefault();
      }
    },
  },
};
</script>

<style scoped lang="scss">
  input[type="text"] {
    border: 0px;
    background: lightgrey;
    padding: 3px;
    width: 100%;
    text-align: center;
  }
</style>
