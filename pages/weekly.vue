<template>
  <div class="animated fadeIn">
    <b-container>
      <!-- 週報作成前 -->
      <b-row v-if="created === false">
        <b-button @click="create" variant="link">
          <i class="fa fa-plus-circle fa-3x"></i>
          週報を作成する
        </b-button>
      </b-row>
      <!-- 週報作成画面 -->
      <b-row v-else>
        <b-col cols="12">
          <!-- 週報タイトル -->
          <WeeklyTitle></WeeklyTitle>
          <!-- 案件追加ボタン -->
          <b-button variant="link" @click="add">
            <i class="fa fa-plus-circle mb-3"></i>
            案件を追加
          </b-button>
        </b-col>
        <!-- 案件カード -->
        <b-col cols="7" class="pre-scrollable" style="max-height: 75vh">
          <div class="flex">
            <Proposition
              v-for="(project, index) in projects"
              :key="project.id"
              :index="index"
            ></Proposition>
          </div>
        </b-col>
        <b-col cols="5">
          <!-- 勤務時間カード -->
          <WorkedTime></WorkedTime>
          <!-- 操作ボタン -->
          <b-row>
            <b-col cols="6">
              <b-button pill block class="mt-4" variant="primary" size="lg">
                確認
              </b-button>
            </b-col>
            <b-col cols="6">
              <b-button pill block class="mt-4" variant="primary" size="lg">
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
import { mapState, mapMutations } from "vuex";

export default {
  name: "weekly",
  components: {
    WorkedTime,
    Proposition,
    WeeklyTitle
  },
  computed: {
    ...mapState("PropositionInput", ["projects", "created"])
  },
  methods: {
    ...mapMutations("PropositionInput", ["create", "add"])
  }
};
</script>
