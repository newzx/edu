<template>
  <div id="app">
    <Header></Header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import tab from '@/components/tab/tab'
export default {
  name: 'App',
  components: {
    Header,
    tab,
    Footer
  }
}
</script>

<style>

</style>
