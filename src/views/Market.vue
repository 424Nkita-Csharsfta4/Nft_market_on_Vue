<template>
    <main>
        <marketHeader v-model:searchData="searchData" />
        <marketBody :nfts="filteredNft" :searchData="searchData" />
       
        <footerView />
    </main>
</template>
  
<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import marketBody from "../components/marketComponents/marketBody.vue";
import marketHeader from "../components/marketComponents/marketHeader.vue";
import footerView from "../components/homeComponents/footerView.vue";


const searchData = ref("");

const store = useStore();

const nfts = computed(() => {
    return store.getters.useNfts;
});

store.commit({ type: "SET_NFT" });
store.dispatch("fetchUsers");

const filteredNft = computed(() => {
    return nfts.value.filter(
        (nft) =>
            nft.name.toUpperCase().indexOf(searchData.value.toUpperCase()) !== -1
    );
});
</script>
  
<style lang="scss">
@import 'src/assets/scss/config.scss';

main {
    scroll-behavior: smooth;
    height: max-content;
}
</style>
  