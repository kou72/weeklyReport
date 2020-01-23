import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";
moment.locale("ja");

Vue.use(Vuex);

const Monday = moment()
  .day(1)
  .add(-1, "isoWeek");
const Tuesday = moment()
  .day(2)
  .add(-1, "isoWeek");
const Wednesday = moment()
  .day(3)
  .add(-1, "isoWeek");
const Thursday = moment()
  .day(4)
  .add(-1, "isoWeek");
const Friday = moment()
  .day(5)
  .add(-1, "isoWeek");
const Saturday = moment()
  .day(6)
  .add(-1, "isoWeek");
const Sunday = moment().day(0);

export const state = () => ({
  week: [
    {
      date: Monday.format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: false
    },
    {
      date: Tuesday.format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: false
    },
    {
      date: Wednesday.format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: false
    },
    {
      date: Thursday.format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: false
    },
    {
      date: Friday.format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: false
    },
    {
      date: Saturday.format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: true
    },
    {
      date: Sunday.format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: true
    }
  ],
  SundayID: Sunday.format("YYYY-MM-DD"),
  SundayTitle: Sunday.format("YYYY/MM/DD")
});

export const mutations = {
  toggle(state, day) {
    day.holiday = !day.holiday;
  }
};
