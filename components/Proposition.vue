<template>
  <b-card>
    <b-row>
      <!-- 案件名 -->
      <b-col cols="10">
        <b-form-input
          onfocus="this.select()"
          :value="projects[index].title"
          @input="update({ index: index, key: 'title', value: $event })"
        ></b-form-input>
      </b-col>
      <!-- closeボタン -->
      <b-col cols="2" class="text-right">
        <b-button pill variant="outline-danger" @click="close(index)">
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
        onfocus="this.select()"
        :value="projects[index].description"
        @input="update({ index: index, key: 'description', value: $event })"
      ></b-form-textarea>
    </b-row>
    <!-- 所感フォーム -->
    <b-row>
      <p class="mx-3 my-2">所感</p>
      <b-form-textarea
        class="mx-3"
        rows="4"
        onfocus="this.select()"
        :value="projects[index].comments"
        @input="update({ index: index, key: 'comments', value: $event })"
      ></b-form-textarea>
    </b-row>
  </b-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Proposition",
  props: ["index"],
  computed: {
    ...mapState("PropositionInput", ["projects"])
  },
  methods: {
    ...mapMutations("PropositionInput", ["close", "update"])
  }
};
</script>
