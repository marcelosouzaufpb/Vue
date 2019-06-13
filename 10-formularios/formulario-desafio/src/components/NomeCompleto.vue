<template>
  <div>
    <Rotulo nome="Nome">
      <input type="text" @inpur="alterarNome"
       :value="value.nome">
    </Rotulo>
    <Rotulo sobrenome="Sobrenome">
      <input type="text" @input="alterarSobrenome"
      :value="value.sobrenome">
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from "./Rotulo.vue";

export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  components: { Rotulo },
  methods: {
    alterarNome(event) {
      this.$emit("input", {
        nome: event.target.value,
        sobrenome: this.sobrenome
      });
    },
    alterarSobrenome(event) {
      this.$emit("input", { nome: this.nome,
       sobrenome: event.target.value });
    }
  }
};
</script>

<style>
</style>
