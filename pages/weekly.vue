<template>
  <div v-show="loading" class="animated fadeIn">
    <b-container>
      <b-row>
        <b-col md="12">
          <!-- 週報タイトル -->
          <p class="h3 mt-3">{{ title }}</p>
          <!-- 案件追加ボタン -->
          <b-button variant="link" @click="add">
            <i class="fa fa-plus-circle mb-3"></i>
            案件を追加
          </b-button>
        </b-col>
        <b-col md="7" class="pre-scrollable mb-4" style="max-height: 75vh">
          <div class="flex">
            <!-- 案件カード -->
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
          <b-row class="my-4">
            <b-col cols="6">
              <!-- 確認ボタン(メール本文表示) -->
              <b-button
                v-b-modal.modalText
                pill
                block
                class="my-2"
                variant="primary"
                size="lg"
              >
                確認
              </b-button>
              <!-- 保存ボタン(firestoreにset) -->
              <b-modal id="modalText" scrollable :title="title">
                <b-form-textarea
                  plaintext
                  :value="text"
                  max-rows="100"
                ></b-form-textarea>
              </b-modal>
            </b-col>
            <b-col cols="6">
              <b-button
                @click="setWeekly"
                pill
                block
                class="my-2"
                variant="primary"
                size="lg"
                >保存
              </b-button>
            </b-col>
            <!-- メール送信ボタン(未完成) -->
            <b-col cols="12">
              <b-button
                @click="send"
                pill
                block
                class="my-2"
                variant="success"
                size="lg"
              >
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
import WorkedTime from "../components/WorkedTime";
import Proposition from "../components/Proposition";
import db from "@/plugins/firebase";
import createText from "~/modules/createText";
import { mapState, mapMutations, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "weekly",
  components: {
    WorkedTime,
    Proposition
  },
  async fetch({ store }) {
    // firestore -> vuex
    await store.dispatch("bindFirestore");
  },
  mounted() {
    // 全要素読み込んでから表示(v-show)
    this.loading = true;
    // タイトル形成
    this.title =
      "【isoroot 週報】" + this.name + " " + this.SundayTitle + "(PSG)";
    // 本文形成
    this.text = createText(
      this.MondayText,
      this.SundayText,
      this.projects,
      this.week
    );
  },
  data() {
    return {
      loading: false,
      title: "",
      text: ""
    };
  },
  computed: {
    ...mapState("PropositionInput", ["projects"]),
    ...mapState("User", ["name"]),
    ...mapState("DatesAndTimes", [
      "SundayTitle",
      "MondayText",
      "SundayText",
      "week"
    ])
  },
  methods: {
    ...mapMutations("PropositionInput", ["add"]),
    ...mapActions(["setWeekly"]),
    async send() {
      axios.post("http://127.0.0.1:3000/send-email", {
        title: this.title,
        text: this.text
      });
    }
  }
};
</script>
