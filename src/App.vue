<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api'
export default {
  name: 'app',
  data() {
    return {
      seller:{}
    }
  },
   created(){
     getSeller().then((seller) => {
       this.seller = seller
     })
  },  
  components: {
    VHeader
  }

}
</script>

<style lang="stylus">

</style>
