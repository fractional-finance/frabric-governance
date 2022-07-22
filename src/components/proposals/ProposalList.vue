<template>
  <div v-if="proposals" class="has-full-borders has-radius-md">
    <div class="container">
      <div class="row">
        <h2 class="is-size-3 pl-5 pr-5 pt-4">{{ title }}</h2>
      </div>
      <div class="row">
        <div class="pl-5 pr-5 pt-5">
          <div v-for="proposal in proposals" :key="proposal.id" class="mb-5">
            <ProposalListItem :proposal="proposal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import ProposalListItem from "../proposals/ProposalListItem.vue";
export default {
  name: "ProposalList",
  components: {
    ProposalListItem
  },
  props: {
    title: {
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