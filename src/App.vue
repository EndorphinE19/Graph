<template>
  <div id="app">
    <div id="nav">
        <div class="graph">
          <select name="" id="" v-model="graph">
             <option>Выберите источник график</option>
            <option value="pie">Пирог</option>
            <option value="line">Линейный</option>
          </select>
        </div>
        <div class="path-graph">
            <select name="" id="" v-model="path">
              <option>Выберите источник данных</option>
              <option value="pie">Для пирога</option>
              <option value="line">Для линейного графика</option>
            </select>
        </div>
        <button @click="addGraph">Показать график</button>
    <router-view>
      
    </router-view>
  </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      link: '/',
      path:'',
      graph:''
    }
  },
  methods: {
    addGraph() {
      if ((this.path == 'pie') && (this.graph == 'pie')) this.$router.push('/pie');
      if ((this.path == 'line') && (this.graph == 'line')) this.$router.push('/lineG');
    }
  }
}
</script>>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

select {
  width: 200px;
  height: 40px;
  margin-bottom: 15px;
}
*{
        margin: 0;
        padding: 0;
    }
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-start;

        div {
            width: 49%;
        }
    }
    button {
        margin-bottom: 10px;
        width: 200px;
        height: 40px;
        border-style: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .isButtonActive {
        background: rgba(49,206,251, .7);
        color: white;
        cursor: default;
    }
</style>
