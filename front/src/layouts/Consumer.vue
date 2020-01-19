<template>
  <q-layout view="hHh lpR fFf">

    <q-header
      bordered
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar> -->
          <q-btn
            :to="{name: 'consumerHome'}"
            size="xl"
            flat
            label="ConsoLoco"
            no-caps
          >

          </q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
