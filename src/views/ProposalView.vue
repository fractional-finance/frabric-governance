<template>
    <section class="container is-max-widescreen mx-auto">
        <NewProposalCreate />
        <div class="columns">
            <div class="column">
                <ProposalList title="Active Proposals" />
            </div>
            <div class="column">
                <ProposalList title="Past Proposals" />
            </div>
        </div>
    </section>
</template>

<script>
import ProposalList from "../components/proposals/ProposalList.vue";
import NewProposalCreate from "../components/proposals/NewProposalCreate.vue";
export default {
    name: "ProposalView",
    components: {
        ProposalList,
        NewProposalCreate
    },
};
</script>