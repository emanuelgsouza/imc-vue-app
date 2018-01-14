<script>
  import { isEmpty, get } from 'lodash'
  import { imcCalc, ideialWeight } from './domains/calculus'
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
        if (this.canLoadResult && this.resultImcCalc) {
          return loadCategory(this.genre, this.resultImcCalc)
        }

        return null
      },
      loadIdealWeight () {
        if (this.canLoadResult) {
          return ideialWeight(this.heigth, this.genre)
        }

        return {}
      },
      minWeightIdeal () {
        return get(this.loadIdealWeight, 'minWeightIdeal', '')
      },
      maxWeightIdeal () {
        return get(this.loadIdealWeight, 'maxWeightIdeal', '')
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
          <p> O texto aonde se encontra sua demonstração está no <a href="https://medium.com/@Emanuel_G/fala-pequeno-gafanhoto-2ca732a4c281">Medium</a> </p>

          <hr>

          <div class="control">
            <label class="radio" for="masc">
              <input id="masc" type="radio" v-model="genre" value="M">
              Masculino
            </label>
            <label for="fem" class="radio">
              <input id="fem" type="radio" v-model="genre" value="F">
              Feminino
            </label>
          </div>

          <div class="field">
            <label for="heigth" class="label"> Altura </label>
            <input id="heigth" type="number" class="input" v-model="heigth" step="0.1" min="0" placeholder="Ex.: 1.70">
            <span class="help"> Digite sua altura no formato 0.00. Ex.: 1.7 </span>
          </div>

          <div class="field">
            <label for="weight" class="label"> Peso </label>
            <input id="weight" type="number" class="input" v-model="weight" step="0.1" min="0" placeholder="Ex.: 80">
            <span class="help"> Digite seu peso no formato 00.00. Ex.: 80 </span>
          </div>
        </div>

        <!-- Result -->
        <div class="notification is-info" v-if="canLoadResult">
          <h3 class="subtitl"> Seu resultado deu: </h3>
          <ul>
            <li> IMC: {{ resultImcCalc }} </li>
            <li> Categoria: {{ resultCategory }} </li>
            <li> O seu peso ideial deve estar entre {{ minWeightIdeal }} e {{ maxWeightIdeal }} </li>
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

  .help {
    font-size: 16px;
  }
</style>
