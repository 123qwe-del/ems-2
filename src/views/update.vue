<template>
  <div>
    <Units formURL="update"></Units>
  </div>
</template>

<script>
import Units from '../components/units'

export default {
  name: "update",
  created:function () {
    console.log(45324454545)
    this.$store.commit('fromUrl','update')
  },
  components: {
    "Units":Units
  },

}
</script>

<style scoped>

</style>