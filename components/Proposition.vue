<template>
  <b-card>
    <b-row>
      <b-col cols="10">
        <b-form-input variant="danger"></b-form-input>
      </b-col>
      <b-col cols="2" class="text-right">
        <b-button pill variant="outline-danger">
          <i class="fa fa-close"></i>
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <p class="mx-3 my-2">作業内容</p>
      <b-form-textarea
        class="mx-3"
        placeholder="Enter something..."
        rows="2"
      ></b-form-textarea>
    </b-row>
    <b-row>
      <p class="mx-3 my-2">所感</p>
      <b-form-textarea
        class="mx-3"
        placeholder="Enter something..."
        rows="4"
      ></b-form-textarea>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: "Proposition"
};
</script>
