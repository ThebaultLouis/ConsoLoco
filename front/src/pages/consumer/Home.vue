<template>
  <div>
    <q-page class="flex flex-center q-px-sm">
      <div class="text-h3 q-my-md">
        Liste des produits
      </div>
      <div class="q-gutter-sm">

        <div
          v-for="farm in 5"
          :key="'farm' + farm"
          class="q-my-xl"
        >
          <div class="text-h4">
            La ferme numéro {{farm}}
          </div>
          <q-separator spaced />

          <div class="row justify-center q-gutter-sm">
            <div
              class="col-auto"
              v-for="i in 5"
              :key="farm + '' +i"
            >
              <Product
                name="Tomate"
                :farm="'La ferme numéro ' + farm"
                price="9.99"
              />
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
var Product = () => import('components/consumer/home/Product.vue')

export default {
  components: {
    Product
  },
  data () {
    return {

    }
  }
}
</script>
