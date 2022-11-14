<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="bg-primary text-white row inline"
      height-hint="98"
    >
      <q-toolbar class="flex justify-between q-mt-sm">
        <q-toolbar-title>
          <q-avatar> </q-avatar>
          <q-btn unelevated to="/">Q&A</q-btn>
        </q-toolbar-title>
        <q-space />
        <div id="search-bar" class="col-6">
          <q-input
            filled
            standout
            bottom-slots
            color="primary"
            label-color="black"
            bg-color="white"
            v-model="text"
            label="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <q-space />
        <div>
          <q-btn
            unelevated
            text-color="white"
            label="SignUp"
            :to="{ name: 'signup' }"
            class="q-md-lg"
          />

          <q-btn
            unelevated
            text-color="white"
            label="SignIn"
            :to="{ name: 'signin' }"
            class="q-mx-md"
          />
        </div>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <!-- <q-tabs align="left">
        <q-route-tab to="/profile" label="My Profile" />
        <q-route-tab to="/comunity" label="Comunity" />
        <q-route-tab to="/settings" label="Settings" />
      </q-tabs> -->
    </q-header>

    <q-drawer
      overlay="true"
      v-if="rightDrawerOpen"
      v-model="rightDrawerOpen"
      class="bg-white"
      side="right"
      bordered
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-dark full-width">
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Q&A App</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

const menuList = [
  {
    icon: "inbox",
    label: "Inbox",
    separator: true,
  },
  {
    icon: "send",
    label: "Outbox",
    separator: false,
  },
  {
    icon: "delete",
    label: "Trash",
    separator: false,
  },
  {
    icon: "error",
    label: "Spam",
    separator: true,
  },
  {
    icon: "settings",
    label: "Settings",
    separator: false,
  },
  {
    icon: "feedback",
    label: "Send Feedback",
    separator: false,
  },
  {
    icon: "help",
    iconColor: "primary",
    label: "Help",
    separator: false,
  },
];

export default {
  setup() {
    const rightDrawerOpen = ref(false);
    const text = ref("");

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      text,
      menuList,
    };
  },
};
</script>
