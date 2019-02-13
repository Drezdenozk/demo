<template>
  <div class="home">
    <h1>Fractions</h1>
    <ui-fractions></ui-fractions>
  </div>
</template>

<script>
import uiFractions from '@/components/ui-fractions/ui-fractions.vue';

export default {
  name: 'fractions',
  components: {
    uiFractions,
  },
};
</script>
