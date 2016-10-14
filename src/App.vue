<template>
    <div>
        <search-bar></search-bar>
        <div class="mui-content">
        <search-result></search-result>
        </div>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import SearchResult from './components/SearchResult.vue'

export default {
  components: {
    SearchBar,
    SearchResult
  }
}
</script>

<style>
</style>
