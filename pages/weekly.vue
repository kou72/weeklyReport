<template>
  <div class="animated fadeIn">
    <b-container>
      <!-- 週報作成画面 -->
      <b-row>
        <b-col md="12">
          <!-- 週報タイトル -->
          <WeeklyTitle></WeeklyTitle>
          <!-- 案件追加ボタン -->
          <b-button variant="link" @click="add">
            <i class="fa fa-plus-circle mb-3"></i>
            案件を追加
          </b-button>
        </b-col>
        <!-- 案件カード -->
        <b-col md="7" class="pre-scrollable mb-4" style="max-height: 75vh">
          <div class="flex">
            <Proposition
              v-for="(project, index) in projects"
              :key="project.id"
              :index="index"
            ></Proposition>
          </div>
        </b-col>
        <b-col md="5">
          <!-- 勤務時間カード -->
          <WorkedTime></WorkedTime>
          <!-- 操作ボタン -->
          <b-row class="my-4">
            <b-col cols="6">
              <b-button pill block class="my-2" variant="primary" size="lg">
                確認
              </b-button>
            </b-col>
            <b-col cols="6">
              <b-button
                @click="setWeekly"
                pill
                block
                class="my-2"
                variant="primary"
                size="lg"
              >
                保存
              </b-button>
            </b-col>
            <b-col cols="12">
              <b-button pill block class="my-2" variant="success" size="lg">
                送信
              </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import WorkedTime from "../components/WorkedTime.vue";
import Proposition from "../components/Proposition";
import WeeklyTitle from "../components/WeeklyTitle";
import db from "@/plugins/firebase";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "weekly",
  async mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  },
  async fetch({ store }) {
    await store.dispatch("bindFirestore");
  },
  components: {
    WorkedTime,
    Proposition,
    WeeklyTitle
  },
  computed: {
    ...mapState("PropositionInput", ["projects"])
  },
  methods: {
    ...mapMutations("PropositionInput", ["add"]),
    ...mapActions(["setWeekly"])
  }
};
</script>
