<template>
    <section class="p-5 has-full-borders has-radius-md mx-5">
        <h2 class="has-text-white title is-size-4">{{ title }}</h2>
    </section>
</template>

<script>
export default {
    name: "ProposalList",
    props: {
        title: String,
    },
};
</script>