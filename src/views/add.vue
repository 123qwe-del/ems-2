<template>
  <div class="about">
    <Units formURL="add"></Units>
  </div>
</template>

<script>
import Units from '../components/units'

export default {
  name: "update",
  created:function() {
    this.$store.commit('fromUrl','add')
  },
  components: {
    Units
  }
}
</script>