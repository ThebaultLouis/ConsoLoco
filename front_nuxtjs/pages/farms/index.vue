<template>
  <div>
    <h1>Nice farms</h1>
    <v-container>
      <v-row justify="center">
        <v-col
          v-for="farm in $store.state.farms.farms"
          :key="farm.id"
          cols="12"
          sm="4"
        >
          <FarmCard :id="id" :name="farm.name" :image="image" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

import FarmCard from '~/components/farm/card.vue'

export default {
  components: {
    FarmCard
  },
  state: () => ({

  }),
  // getters: mapState({
  //   farms: state => state.farms.farms
  // }),
  fetch () {
    this.$store.dispatch('farms/farms')
  }
}
</script>
