<template>
  <p class="h3 mt-3">【isoroot 週報】{{ name }} {{ lastSunday }}(PSG)</p>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("User", ["name"]),
    ...mapState("DatesAndTimes", ["lastSunday"])
  }
};
</script>
