<template>
  <v-card min-width="350">
    <v-img :src="image" />
    <v-card-title>
      {{ name }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: 'http://localhost:8080/images/farm.jpg'
    },
    id: {
      type: Number,
      required: true
    }

  }
}
</script>
