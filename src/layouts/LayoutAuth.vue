<template>
  <q-layout>
    <!-- <q-header>
      <q-toolbar>
        <q-toolbar-title>
          <router-link style="color: white" to="/">Q&A</router-link>
        </q-toolbar-title>
        <q-btn
          color="white"
          text-color="black"
          label="SignIn"
          :to="{ name: 'signin' }"
          class="q-mx-md"
        />
      </q-toolbar>
    </q-header> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
