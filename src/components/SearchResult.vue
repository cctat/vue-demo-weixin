<template>
  <ul id="result-list" class="mui-table-view">
    <li class="mui-table-view-cell" v-for='result in searchResult'>
      <a :href='result.link'>
        <div class="pic-box">
          <img :src='result.pic' alt="">
        </div>
        <div class="description">
          <p class="wx-name">{{ result.title }}</p>
          <p class='wx-num'>
            <span class="des-tit">微信：</span>
            <span class="des-con">{{ result.wxNum }}</span>
          </p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    computed: {
        searchResult () {
            return this.$store.getters.searchResult
        }
    },
  }
</script>

<style scoped>
  #result-list {
    margin-top: 0;
  }
  .mui-table-view-cell {
    position: relative;
  }
  .pic-box {
    float: left;
    height: 50px;
    width: 50px;
    margin-right: 15px;
    border-radius: 50px;
    overflow: hidden;
  }
  .pic-box img {
    width: 100%;
    height: 100%;
  }
  .description {
    float: left;
  }
  .description .wx-name {
    font-weight: bold;
    color: #000;
  }
  .description .wx-num {
    font-size: 12px;
  }
  .collect-it {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 100%;
    line-height: 100%;
    cursor: pointer;
    transition: all 200ms;
  }
  .collect-it:hover {
    background: #eee;
  }
</style>