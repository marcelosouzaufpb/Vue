new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        // 1) Exiba um alert quando o botão for clicado
        exibirAlerta(){
            alert('Botão foi clicado')
        },
        // 2) Escute o evento "keydown" e armazene o valor na propriedade data (dica: event.target.value) -->
        armazenaValor(){
            this.valor = event.target.value
        }
    }   
})