export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    definedValue: {
      type: [
        Array,
        String,
        Number,
      ],
      default: '',
    },
  },
};
