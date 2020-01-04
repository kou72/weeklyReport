import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";
moment.locale("ja");

Vue.use(Vuex);

export const state = () => ({
  lastSunday: moment()
    .day(0)
    .format("YYYY/MM/DD"),
  week: [
    {
      date: moment()
        .day(1)
        .add("isoWeek", -1)
        .format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: false
    },
    {
      date: moment()
        .day(2)
        .add("isoWeek", -1)
        .format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: false
    },
    {
      date: moment()
        .day(3)
        .add("isoWeek", -1)
        .format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: false
    },
    {
      date: moment()
        .day(4)
        .add("isoWeek", -1)
        .format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: false
    },
    {
      date: moment()
        .day(5)
        .add("isoWeek", -1)
        .format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: false
    },
    {
      date: moment()
        .day(6)
        .add("isoWeek", -1)
        .format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: true
    },
    {
      date: moment()
        .day(0)
        .format("MM/DD(ddd)"),
      punchIn: "09:00",
      punchOut: "17:30",
      holiday: true
    }
  ]
});

export const mutations = {
  toggle(state, day) {
    day.holiday = !day.holiday;
  }
};
