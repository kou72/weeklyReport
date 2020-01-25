export const state = () => ({
  projects: []
});

export const mutations = {
  add(state) {
    state.projects.unshift({
      title: "案件名を入力",
      description: "作業内容を入力",
      comments: "所感を入力"
    });
  },
  close(state, index) {
    state.projects.splice(index, 1);
  },
  update(state, { index, key, value }) {
    state.projects[index][key] = value;
  },
  bind(state, dbProjects) {
    state.projects = dbProjects;
  }
};
