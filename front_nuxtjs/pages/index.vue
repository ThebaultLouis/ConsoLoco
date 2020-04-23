<template>
  <div>
    <v-row class="white--text mx-auto">
      <v-col
        class="white--text text-center"
        align="center"
        cols="12"
        tag="h1"
      >
        <span
          class="font-weight-light"
          :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
        >
          Consommer local
        </span>

        <br>

        <span
          :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
          class="font-weight-black"
        >
          nous pouvons tous le faire
        </span>
        <br>
        <v-btn
          class="align-self-end"
          to="/farms"
        >
          decouvrir
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>
