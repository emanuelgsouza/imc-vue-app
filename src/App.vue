<script>
  import { isEmpty } from 'lodash'
  import { imcCalc } from './domains/calculus'
  import loadCategory from './domains/categories/load-category'

  export default {
    name: 'app',
    data: () => ({
      heigth: null,
      weight: null,
      genre: 'F'
    }),
    computed: {
      canLoadResult () {
        return !isEmpty(this.weight) && !isEmpty(this.heigth)
      },
      resultImcCalc () {
        if (this.canLoadResult) {
          return imcCalc(this.weight, this.heigth)
        }

        return null
      },
      resultCategory () {
        if (this.canLoadResult) {
          return loadCategory(this.genre, this.resultImcCalc)
        }

        return null
      }
    }
  }
</script>

<template>
  <div id="app" class="container">
    <div class="columns is-centered">
      <div class="column is-6">

        <!-- Body -->
        <div class="box">
          <h1 class="title has-text-centered"> IMC APP </h1>
          <p> Esta pequena aplicação foi usada como demonstração de testes com Vue.js </p>
          <p> O texto aonde se encontra sua demonstração está no <a href="https://medium.com">Medium</a> </p>

          <hr>

          <div class="field">
            <label for="heigth" class="label"> Altura </label>
            <input id="heigth" type="number" class="input" v-model="heigth" step="0.1" min="0">
          </div>

          <div class="field">
            <label for="heigth" class="label"> Peso </label>
            <input id="weight" type="number" class="input" v-model="weight" step="0.1" min="0">
          </div>
        </div>

        <!-- Result -->
        <div class="notification is-info" v-if="canLoadResult">
          <h3 class="subtitl"> Seu resultado deu: </h3>
          <ul>
            <li> IMC: {{ resultImcCalc }} </li>
            <li> Categoria: {{ resultCategory }} </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<style media="screen" lang="scss">
  @import "../node_modules/bulma/bulma.sass";

  .box {
    margin: 10px;
  }

  .notification {
    margin: 0 10px;
  }
</style>
