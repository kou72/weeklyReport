<template>
  <b-card>
    <b-row>
      <!-- 案件名 -->
      <b-col cols="10">
        <b-form-input
          variant="danger"
          v-model="title"
          onfocus="this.select()"
        ></b-form-input>
      </b-col>
      <!-- closeボタン -->
      <b-col cols="2" class="text-right">
        <b-button pill variant="outline-danger" @click="close(title)">
          <i class="fa fa-close"></i>
        </b-button>
      </b-col>
    </b-row>
    <!-- 作業内容フォーム -->
    <b-row>
      <p class="mx-3 my-2">作業内容</p>
      <b-form-textarea
        class="mx-3"
        rows="2"
        v-model="description"
        onfocus="this.select()"
      ></b-form-textarea>
    </b-row>
    <!-- 所感フォーム -->
    <b-row>
      <p class="mx-3 my-2">所感</p>
      <b-form-textarea
        class="mx-3"
        rows="4"
        v-model="comments"
        onfocus="this.select()"
      ></b-form-textarea>
    </b-row>
  </b-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Proposition",
  props: ["title", "description", "comments"],
  methods: {
    ...mapMutations("PropositionInput", ["close"])
  }
};
</script>
