import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  created: false,
  projects: [
    {
      id: 1,
      title: "案件A",
      description: "ドキュメント作成",
      comments: "問題なし"
    },
    {
      id: 2,
      title: "案件B",
      description: "ドキュメント作成",
      comments: "問題なし"
    },
    {
      id: 3,
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
      id: 99,
      title: "案件名を入力",
      description: "作業内容を入力",
      comments: "所感を入力"
    });
  },
  close(state, id) {
    state.projects = state.projects.filter(project => {
      return project.id !== id;
    });
  },
  updateTitle(state, id) {
    console.log(id);
    console.log(state.projects.find(project => project.id === id));
  }
};
