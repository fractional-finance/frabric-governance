<template>
  <div>
    <HeaderNavigationBar />
    <RouterView class="container p-5" />
    <ProposalView />
 
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HeaderNavigationBar from "./layout/navigation/HeaderNavigationBar.vue";
import ProposalView from "../views/ProposalView.vue";
export default {
  name: "AppBody",
  components: {
    HeaderNavigationBar,
    ProposalView
},
  computed: {
    ...mapGetters({
      alert: "activeAlert",
    }),
  },
};
</script>