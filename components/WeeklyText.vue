<template>
  <b-form-textarea plaintext :value="text" max-rows="100"></b-form-textarea>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.projects.forEach(value => {
      // 作業内容
      this.description =
        this.description +
        "・" +
        value.title +
        "\n" +
        " - " +
        value.description.replace(/\n/g, "\n - ") +
        "\n\n";
      // 所感
      this.comments =
        this.comments +
        "・" +
        value.title +
        "\n" +
        "　" +
        value.comments.replace(/\n/g, "\n　") +
        "\n\n";
    });
    // 勤怠状況
    this.week.forEach(value => {
      if (value.holiday) {
        this.workedTime = this.workedTime + value.date + " 休暇\n";
      } else {
        this.workedTime =
          this.workedTime +
          value.date +
          " " +
          value.punchIn +
          "-" +
          value.punchOut +
          "\n";
      }
    });
    // 本文
    this.text =
      this.text +
      this.MondayText +
      " - " +
      this.SundayText +
      "の週報を送付致します。\n\n" +
      this.description +
      this.comments +
      this.workedTime;
  },
  data() {
    return {
      text:
        "To: PSG各位\nCc: 籠橋本部長、川本次長\n\nお疲れ様です。PSG鈴木です。\n\n",
      description: "■業務内容\n",
      comments: "■所感\n",
      workedTime: "■勤怠状況\n"
    };
  },
  computed: {
    ...mapState("PropositionInput", ["projects"]),
    ...mapState("DatesAndTimes", ["MondayText", "SundayText", "week"])
  }
};
</script>
