<template>
  <div class="animated fadeIn">
    <b-container>
      <!-- 週報作成前 -->
      <b-row v-if="flag === false">
        <b-button @click="flag = true" variant="link">
          <i class="fa fa-plus-circle fa-3x"></i>
          週報を作成する
        </b-button>
      </b-row>

      <!-- 週報作成画面 -->
      <b-row v-else>
        <b-col cols="12">
          <WeeklyTitle></WeeklyTitle>
          <b-button variant="link">
            <i class="fa fa-plus-circle mb-3"></i>
            案件を追加
          </b-button>
        </b-col>
        <b-col cols="7">
          <div class="flex">
            <Proposition v-for="n in projects" :key="n.id"></Proposition>
          </div>
        </b-col>
        <b-col cols="5">
          <WorkedTime></WorkedTime>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import WorkedTime from "../components/WorkedTime.vue";
import Proposition from "../components/Proposition";
import WeeklyTitle from "../components/WeeklyTitle";

export default {
  components: {
    WorkedTime,
    Proposition,
    WeeklyTitle
  },
  data() {
    return {
      flag: false,
      projects: [
        { id: 1, name: "案件A" },
        { id: 2, name: "案件B" },
        { id: 3, name: "案件C" }
      ]
    };
  },
  name: "weekly"
};
</script>

