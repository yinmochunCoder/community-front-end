<template>
  <div class="hello">
      {{res}}
      {{response}}
      {{config}}
      <p @click="getKoa">点击</p>
      <p @click="getKoaAsyc">异步</p>
  </div>
</template>

<script>
  import {getApi, getAsync} from '@/api/login'
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        config: '',
        res: '',
        response: ''
      }
    },
    methods: {
      getKoa() {
          getApi().then(res => {
          this.res = res
        })
      },
      getKoaAsyc() {
          getAsync().then(res => {
            console.log(res)
        })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
