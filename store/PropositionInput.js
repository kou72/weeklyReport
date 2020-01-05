import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  created: false,
  projects: [
    {
      title: "案件A",
      description: "ドキュメント作成",
      comments: "問題なし"
    },
    {
      title: "案件B",
      description: "ドキュメント作成",
      comments: "問題なし"
    },
    {
      title: "案件C",
      description: "ドキュメント作成",
      comments: "問題なし"
    }
  ]
});

export const mutations = {
  create(state) {
    state.created = true;
  },
  add(state) {
    state.projects.unshift({
      title: "案件名を入力",
      description: "作業内容を入力",
      comments: "所感を入力"
    });
  },
  close(state, title) {
    state.projects = state.projects.filter(project => {
      return project.title !== title;
    });
  }
};
