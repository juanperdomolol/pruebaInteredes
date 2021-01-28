<template>
  <div class="contenedor">
    <router-link to="/history">history</router-link>
    <h1 class="title">Aplicacion de divisas</h1>
    <div>
      <label for="">Monto</label>
      <input v-model="amount" type="number" min="1" required />
    </div>
    <div>
      <label for="monedaOrigen">Moneda Origen</label>
      <select v-model="monedaOrigen" id="moneda" required>
        <option v-for="(value, key) in monedas" :key="key" :value="value">
          {{ value }} ({{ key }})
        </option>
      </select>
    </div>
    <div>
      <label for="monedaCambiar">Moneda Objetivo</label>
      <select v-model="monedaCambiar" id="modedaO" required>
        <option v-for="(value, key) in monedas" :key="key" :value="value">
          {{ value }} ({{ key }})
        </option>
      </select>
    </div>
    <button @click="cambiarDivisas" class="btn btn-success">Convertir</button>
    <div>
      <p>
        {{ cambioDivisas }}
      </p>
      <span>
        {{ amount }} {{ monedaOrigen.value }} ={{ cambioDivisas }}
        {{ monedaCambiar.value }}
      </span>
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
      cambioDivisas: 0,
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
        .then((response) => (this.monedas = response.data.rates));
    },
    getDivisas() {
      axios
        .get(
          "https://openexchangerates.org/api/currencies.json?app_id=c6b996f4498c444ebd6e44caf7e2be0c"
        )
        .then((response) => (this.monedaCambioSeleccionada = response.data));
    },
    cambiarDivisas() {
      this.cambioDivisas =
        (this.amount / this.monedaOrigen) * this.monedaCambiar;
    },
  },
};
</script>

<style scoped>
.title {
  font-style: italic;
  color: gray;
}
#cardcenter {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
