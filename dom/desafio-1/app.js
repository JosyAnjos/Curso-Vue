new Vue({
  el: '#desafio',
  data: {
    nome: 'Josy',
    idade: '34',
    imagem: 'vue.png'
  },
  methods: {
    idadeVezes3() {
      return this.idade * 3
    },
    random() {
      return Math.random()
    }
  }
})
