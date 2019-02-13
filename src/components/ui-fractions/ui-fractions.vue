<template>
  <div class="ui-fractions">
    <div class="ui-fractions__body">
      <ui-fractions-column :key="`column-0`"
                           @input="(val) => calculate(0, val)">
      </ui-fractions-column>
      <template v-for="(column, index) in fractionsLength">
        <ui-fractions-operator :key="`operator-${index + 1}`"
                               @input="(val) => calculate(index + 1, val, true)">
        </ui-fractions-operator>
        <ui-fractions-column :key="`column-${index + 1}`"
                             @input="(val) => calculate(index + 1, val)">
        </ui-fractions-column>
      </template>
      <ui-fractions-operator :key="`operator-result`" v-if="computedResult"
                           :definedValue="`=`"  disabled>
      </ui-fractions-operator>
      <ui-fractions-column :key="`column-result`" v-if="computedResult"
                           :definedValue="computedResult" disabled>
      </ui-fractions-column>
    </div>
    <div class="ui-fractions__footer">
      <button @click="fractionsLength++">Add Fractions</button>
    </div>
  </div>
</template>

<script>
import UiFractionsColumn from '@/components/ui-fractions/ui-fractions-column.vue';
import UiFractionsOperator from '@/components/ui-fractions/ui-fractions-operator.vue';

/**
 * Собственно раз требовалось бить на как можно большее кол-во компонентов
 * Мы и бьем)
 * Вообще вместо штуки снизу ВОЗМОЖНО было бы в данном контексте неплохо
 * юзать eval. Но линт будет против.
 * @param operator
 * @param val1
 * @param val2
 * @returns {*}
 */
const applyOperator = (operator, val1, val2) => {
  let result;
  switch (operator) {
    case '-': {
      result = (val1 - val2);
      break;
    }
    case '*': {
      result = (val1 * val2);
      break;
    }
    case '/': {
      result = (val1 / val2);
      break;
    }
    default: {
      result = (val1 + val2);
      break;
    }
  }
  return result;
};

// Вычисляем наибольший общий делитель
const nod = (n, m) => {
  if (m > 0) {
    return nod(m, n % m);
  }
  return Math.abs(n);
};

// Вычисляем наименьшее общее кратное
const nok = (x, y) => ((x / nod(x, y) || 0) * y);

export default {
  name: 'UiFractions',
  data() {
    return {
      fractionsLength: 1, // Сколько используется дробей по дефолту
      fractionsObject: {}, // Объект с дробями
      operatorsObject: {}, // Объект с операторами
    };
  },
  computed: {
    /**
     * Собственно сам результат
     * @returns {*|string|[null,null]}
     */
    computedResult() {
      if ((this.fractionsLength + 1) === Object.keys(this.fractionsObject).length
        && (this.fractionsLength + 1) === (Object.keys(this.operatorsObject).length
        + 1)) {
        const denominator = Object.keys(this.fractionsObject)
          .map(item => this.fractionsObject[item])
          .reduce((prev, item) => nok(item[1], prev), 1);
        const result = Object.keys(this.fractionsObject)
          .map(item => this.fractionsObject[item])
          .reduce((prev, item, index) => applyOperator(
            index === 0 ? '+' : this.operatorsObject[index], prev, ((denominator / item[1]) * item[0]),
          ), 0);
        return !result ? false : [
          result,
          denominator,
        ];
      }
      return false;
    },
  },
  components: {
    UiFractionsColumn,
    UiFractionsOperator,
  },
  methods: {
    calculate(index, vals, isOperator) {
      const workOnObject = isOperator ? 'operatorsObject' : 'fractionsObject';
      if (vals === '') {
        delete this[workOnObject][index];
        this[workOnObject] = Object.assign({}, this[workOnObject]);
      } else if (!this[workOnObject][index]) {
        this[workOnObject] = Object.assign({}, this[workOnObject], {
          [index]: vals,
        });
      } else {
        this[workOnObject][index] = vals;
      }
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
