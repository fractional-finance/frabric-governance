<template>
  <div v-if="proposals" class="container p-5">
    <div class="row">
      <h2 class="title is-size-3">{{ proposalStatus }}</h2>
    </div>
    <div class="row">
      {{ proposals }}
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProposalList",
  props: {
    proposalStatus: {
      type: String,
      required: true,
    }
  },
  computed: {
    ...mapGetters({
      assetProposalMap: "assetProposals",
    }),

    proposals() {
      return this.assetProposalMap;
    }
  },
  methods: {
    ...mapActions({
      refreshProposalsDataForAsset: "refreshProposalsDataForAsset",
    })
  },
  mounted() {
    this.refreshProposalsDataForAsset();
  }
}
</script>