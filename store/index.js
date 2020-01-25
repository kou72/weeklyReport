import db from "@/plugins/firebase";

export const actions = {
  // firestore -> vuex の処理
  async bindFirestore({ commit }) {
    const snapShot = await db
      .collection("weekly")
      .doc("head")
      .get();
    commit("PropositionInput/bind", snapShot.data().projects);
    commit("DatesAndTimes/bind", snapShot.data().week);
  },
  // vuex -> firestore の処理
  setWeekly({ commit }) {
    const setData = {
      projects: this.state.PropositionInput.projects,
      week: this.state.DatesAndTimes.week
    };
    db.collection("weekly")
      .doc("head")
      .set(setData);
    db.collection("weekly")
      .doc(this.state.DatesAndTimes.SundayID)
      .set(setData);
  }
};
