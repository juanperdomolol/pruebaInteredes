<template>
  <div>
    <router-link to="/">Conversion</router-link>
    Fecha de consulta {{ fechaActual }}
    <table>
      <thead>
        <tr>
          <th scope="col">Abreviatura</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in history" :key="key">
          <th>{{ key }}</th>
          <th>{{ value | convertFilter }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      history: {},
      nombres: {},
      fechaActual: null
    };
  },
  mounted() {
    this.getHistory();
  },
  methods: {
    getHistory() {
      var fecha = new Date();
      var year = fecha.getFullYear();
      var month =
        fecha.getMonth() + 1 < 10
          ? "0" + (fecha.getMonth() + 1)
          : fecha.getMonth() + 1;
      var day = fecha.getDate() < 10 ? "0" + fecha.getDate() : fecha.getDate();

      this.fechaActual = year + "-" + month + "-" + day;

      axios
        .get(
          "https://openexchangerates.org/api/historical/" +
            this.fechaActual +
            ".json?app_id=c6b996f4498c444ebd6e44caf7e2be0c"
        )
        .then(Response => (this.history = Response.data.rates));
      // .then((Response) => console.log(Response.data));
    },
    getNombres() {}
  }
};
</script>
