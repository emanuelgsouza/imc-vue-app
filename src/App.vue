<script>
  export default {
    name: 'app',
    data: () => ({
      heigth: null,
      weight: null
    })
  }
</script>

<template>
  <div id="app" class="container">
    <div class="columns is-centered">
      <div class="column is-6">

        <!-- Body -->
        <div class="box">
          <h1 class="title has-text-centered"> IMC APP </h1>

          <div class="field">
            <label for="heigth" class="label"> Altura </label>
            <input id="heigth" type="number" class="input" v-model="heigth">
          </div>

          <div class="field">
            <label for="heigth" class="label"> Peso </label>
            <input id="weight" type="number" class="input" v-model="weight">
          </div>
        </div>

        <!-- Result -->
        <div class="notification is-primary">
          <button class="delete"></button>
          O resultado aparecerá aqui
        </div>

      </div>
    </div>
  </div>
</template>

<style media="screen" lang="scss">
  @import "../node_modules/bulma/bulma.sass";

  .box {
    margin: 20px;
  }

  .notification {
    margin: 0 20px;
  }
</style>
