<template>
  <div>
    <q-card style="width:350px">
      <q-img
        src="https://cdn.quasar.dev/img/mountains.jpg"
        :rario="16/9"
        contain
      >
        <q-btn
          class="absolute-top-right text-subtitle2 q-ma-sm"
          color="secondary"
          round
          size="md"
          icon="fas fa-plus"
          @click="null"
        />
      </q-img>
      <q-card-section>
        <div class="row">
          <div class="col-10">
            <div class="text-h6">{{name}}</div>
            <div class="text-subtitle2">{{farm}}</div>
          </div>
          <div class="col-2 text-right self-start">
            <div class="text-h5"> {{price}}€</div>
          </div>
        </div>
      </q-card-section>
      <!-- <q-card-actions>
        <q-space />
        <q-btn
          flat
          color="secondary"
          label="détails"
          @click="details"
        />
      </q-card-actions> -->
      <q-card-actions>
        <q-space />
        <q-btn
          color="secondary"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            1* carotte
          </q-card-section>
        </div>
      </q-slide-transition>

    </q-card>
  </div>
</template>

<script>
export default {
  props: ['name', 'farm', 'price'],
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    details () {
      this.$router.push({ name: 'consumerProductDetails', params: { productId: 42 } })
    }
  }
}
</script>
