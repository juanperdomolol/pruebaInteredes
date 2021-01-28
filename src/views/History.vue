<template>
  <div></div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getHistory();
  },
  methods: {
    getHistory() {
      const utcDate = new Date();
      console.log;

      axios
        .get(
          "https://openexchangerates.org/api/historical/" +
            utcDate +
            ".json?app_id=c6b996f4498c444ebd6e44caf7e2be0c=USD"
        )
        .then(Response => console.log(Response));
    }
  }
};
</script>
