<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>
       	<NomeCompleto v-model="nomeCompleto" />
        <Rotulo email="Email">
          <input type="email" v-model="email">
        </Rotulo>
        <Rotulo senha="Senha">
          <input type="password" v-model="senha">
        </Rotulo>
        <Rotulo armazenarDados="Armazenar Dados?" v-model="armazenarDados">
          <input type="checkbox">
        </Rotulo>
		<hr>
		<button @click.prevent="enviar">Enviar</button>
        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
			<Rotulo nome="Nome">
				<samp>{{ nomeCompleto.nome }}</samp>
			</Rotulo>
			<Rotulo nome="Sobrenome">
				<samp>{{ nomeCompleto.sobrenome }}</samp>
			</Rotulo>
			<Rotulo nome="Email">
				<samp>{{ email }}</samp>
			</Rotulo>
			<Rotulo nome="Senha">
				<samp>{{  senha }}</samp>
			</Rotulo>
			<Rotulo nome="Armazenar Dados?">
				<samp>{{ armazenarDados }}</samp>
			</Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import NomeCompleto from "./components/NomeCompleto.vue";

export default {
  name: "app",
  components: {NomeCompleto, Rotulo },	
  data() {
    return {
	  enviado: false,
	  nomeCompleto: {
		nome: "",
      	sobrenome: "",
	  },
      email: "",
      senha: "",
      armazenarDados: true
    };
  },
  matheds: {
	  enviar() {
		  this.enviado = true
	  }
  }
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
