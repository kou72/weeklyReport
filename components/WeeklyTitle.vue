<template>
  <p class="h3 mt-3">【isoroot 週報】{{ name }} {{ SundayTitle }}(PSG)</p>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("User", ["name"]),
    ...mapState("DatesAndTimes", ["SundayTitle"])
  }
};
</script>
