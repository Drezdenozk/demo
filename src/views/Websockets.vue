<template>
  <div class="home">
    Websockets
    <ui-comments :commentList="commentList" @removeItem="removeItem"></ui-comments>
  </div>
</template>

<script>
import uiComments from '@/components/ui-comments/ui-comments.vue';
import VueNativeSock from 'vue-native-websocket';
import Vue from 'vue';

/**
 * ИМХО такое себе решение использовать vue.use на определенном view.
 * Обычно такие вещи все таки глобально работают... Но раз в задаче указано...
 * Опять таки, реализован самый быстрый вариант - комменты лежат в data и оттуда-же удаляются.
 * Возможно они могли лежать в vuex, возможно вообще как props от чего-либо...
 * VueNativeSock взят как готовое решение для интеграции vue с websockets
 */
export default {
  name: 'websockets',
  components: {
    uiComments,
  },
  created() {
    // ну что-ж, подключаем VueNativeSock
    Vue.use(VueNativeSock, 'ws://echo.websocket.org/', {
      store: this.$store,
      format: 'json',
    });
  },
  computed: {
    // объявляем поле, в котором message с сервера
    asyncAnswer() {
      return this.$store.state.socket.message;
    },
  },
  watch: {
    // следим за изменениями и просто выкидываем необходимый ключ, не забывая о
    // изменении исходного объекта (вообще я бы делал наверное с помощью массива и
    // по ключу удалял.. но в задаче указано что необходимо передавать номер комментария
    // а он бы получается был бы просто индексом комментария в массиве
    asyncAnswer(val) {
      if (this.commentList[val.id]) {
        delete this.commentList[val.id];
        this.commentList = Object.assign({}, this.commentList);
      }
    },
  },
  data() {
    return {
      commentList: {
        1: 'Comment #1',
        2: 'Comment #2',
        3: 'Comment #3',
        4: 'Comment #4',
        5: 'Comment #5',
        6: 'Comment #6',
        7: 'Comment #7',
        8: 'Comment #8',
        9: 'Comment #9',
        10: 'Comment #10',
      },
    };
  },
  methods: {
    removeItem(key) {
      this.$socket.sendObj({
        id: key,
      });
    },
  },
};
</script>
