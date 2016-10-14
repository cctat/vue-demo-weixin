<template>
    <header id="search-bar" class="mui-bar mui-bar-nav">
        <input type="search" class="mui-input-clear mui-input-speech" v-model='keyword' @keyup.enter='setKeyword()'>
        <div class='search-switch' @click='setKeyword()'>
            <span class="mui-icon mui-icon-search"></span>
        </div>
    </header>
</template>

<script>
export default {
  data () {
      return{
        keyword:''
      }
  },
  methods: {
    setKeyword () {
        this.$http.get('http://localhost:8090?query=' + this.keyword).then((response) => {
            this.$store.dispatch('setResult',JSON.parse(response.body))
        }, (response) => {
            console.log(response)
        });
    }
  }
}
</script>

<style>
    #search-bar {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #fff;
        z-index: 100;
    }
    
    #search-bar input {
        margin-left: 10px;
        margin-right: 10px;
        text-align: left;
    }
</style>