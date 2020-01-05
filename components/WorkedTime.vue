<template>
  <b-card header="勤務状況">
    <b-row v-for="day in week" v-bind:key="day.date" class="mx-auto px-0">
      <form class="form-inline col text-center">
        <p class="my-2 w-25">{{ day.date }}</p>
        <b-form-checkbox
          :checked="day.holiday"
          @change="toggle(day)"
          class="mr-2"
          >休暇</b-form-checkbox
        >
        <div v-if="day.holiday === false">
          <b-form-input
            type="time"
            :value="day.punchIn"
            size="sm"
          ></b-form-input>
          ~
          <b-form-input
            type="time"
            :value="day.punchOut"
            size="sm"
          ></b-form-input>
        </div>
      </form>
    </b-row>
  </b-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("DatesAndTimes", ["week"])
  },
  methods: {
    ...mapMutations("DatesAndTimes", ["toggle"])
  },
  name: "WorkedTime"
};
</script>
