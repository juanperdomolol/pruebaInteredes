<template>
  <div class="contenedor">
    <h1 class="title">Aplicacion de divisas</h1>
    <div>
      <label for="">Monto</label>
      <input v-model="amount" type="number" required />
    </div>
    <div>
      <label for="monedaOrigen">Moneda Origen</label>
      <select v-model="monedaOrigen" id="moneda">
        <option v-for="(value, key) in monedas" :key="key" :value="value">
          {{ value }} ({{ key }})
        </option>
      </select>
    </div>
    <div>
      <label for="monedaCambio">Moneda Objetivo</label>
      <select v-model="monedaCambiar" id="modedaO">
        <option v-for="(value, key) in monedas" :key="key" :value="value">
          {{ value }} ({{ key }})
        </option>
      </select>
    </div>
    <button @click="cambiarDivisas">Convertir</button>
    <div>
      <p>
        {{ mount }} {{ monedaOrigen.key }}{{ cambioDivisas }}
        {{ monedaCambiar.key }}
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Conversion",
  data() {
    return {
      amount: 0,
      monedas: "",
      monedaOrigen: 0,
      monedaCambioSeleccionada: "",
      monedaCambiar: 0,
      cambioDivisas: 0
    };
  },
  mounted() {
    this.getMonedas();
    this.getDivisas();
  },
  methods: {
    getMonedas() {
      axios
        .get(
          "https://openexchangerates.org/api/latest.json?app_id=c6b996f4498c444ebd6e44caf7e2be0c"
        )
        .then(response => (this.monedas = response.data.rates));
    },
    getDivisas() {
      axios
        .get(
          "https://openexchangerates.org/api/currencies.json?app_id=c6b996f4498c444ebd6e44caf7e2be0c"
        )
        .then(response => (this.monedaCambioSeleccionada = response.data));
    },
    cambiarDivisas() {
      this.cambioDivisas =
        (this.amount / this.monedaOrigen) * this.monedaCambiar;

      return this.cambioDivisas.toFixed(3);
    }
  }
};
</script>

<style scoped>
.title {
  font-style: italic;
  color: gray;
}
</style>
