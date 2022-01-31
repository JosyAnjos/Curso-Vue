new Vue({
  el: '#desafio',
  data: {
    valor: ''
  },
  methods: {
    alteraValor(event) {
      this.valor = event.target.value
    },
    exibirAlerta(){
      alert('Estou alertando!')
    }
  }
})
