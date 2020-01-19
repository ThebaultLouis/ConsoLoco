<template>
  <div>
    <div class="q-gutter-sm">
      <q-btn
        v-for="network in networks"
        :key="network.icon"
        :icon="network.icon"
        flat
        color="secondary"
        size="xl"
        :href="network.link"
        target="_blank"
      />
    </div>
    <div style="margin-top:75px"></div>
    <div>
      <div class="text-h2 text-center q-pa-sm q-gutter-sm">
        <div>
          Avec ConsoLoco
        </div>
        <div>
          Consommer à côté
        </div>
      </div>
      <div style="margin-top:75px"></div>
      <div class="text-center">
        <q-btn
          to="/"
          color="secondary"
          label="C'est parti"
          size="lg"
        >
        </q-btn>
      </div>
    </div>
    <div style="margin-top:75px"></div>
    <div class="text-h3 text-center q-my-md">
      Comment ça marche ?
    </div>
    <div style="margin-top:50px"></div>

    <div class="q-gutter-sm">
      <div
        v-for="(section, index) in sections"
        class="q-pa-sm"
        :key="section.title"
      >
        <div class="text-h3 text-center q-mb-sm">
          {{index + 1 + ". " +  section.title }}
        </div>
        <div class="text-center">
          <q-img
            :src="section.image"
            style="max-width:600px"
            :ratio="16/9"
            contain
            spinner-color="primary"
            spinner-size="82px"
          />

        </div>
        <div v-html="section.description">
        </div>

      </div>

      <!-- <div class="row">
        <div class="col q-pa-sm text-h4 text-center">
          Choisissez votre ville
        </div>
        <div class="col">
          <q-img
            :src="citiesImage"
            spinner-color="primaryDark"
            spinner-size="82px"
          />
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      networks: [
        {
          'icon': 'fab fa-twitter-square',
          'link': '#'
        },
        {
          'icon': 'fab fa-instagram',
          'link': '#'
        },
        {
          'icon': 'fab fa-linkedin',
          'link': '#'
        },
        {
          'icon': 'fab fa-facebook-square',
          'link': '#'
        }
      ],
      sections: [
        {
          title: 'Choisissez votre ville',
          image: 'statics/landingPage/france-grandes-villes.gif',
          description: ''
        },
        {
          title: 'Choisissez vos produits',
          image: 'statics/landingPage/produits.jpg',
          description: ''
        },
        {
          title: 'Choisissez vos points de ventes',
          image: 'statics/landingPage/points_de_vente.png',
          description: ''
        },
        {
          title: 'Allez récupérer vos produits grâce à votre QR code',
          image: 'statics/landingPage/livraison.jpg',
          description: ''
        }
      ],
      citiesImage: 'statics/landingPage/france-grandes-villes.gif'
    }
  }
}
</script>
