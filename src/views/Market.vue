<template>
<main  @click="">
   
    <marketHeader v-model:searchData="searchData" />
    <marketBody :nfts='filteredNft' :searchData="searchData" />
    <footerView />
</main>
</template>

<script>
import marketBody from '../components/marketComponents/marketBody.vue'
import marketHeader from '../components/marketComponents/marketHeader.vue'
import footerView from '../components/homeComponents/footerView.vue'
import {
    computed,
    ref
} from "vue";
import {
    useStore
} from 'vuex'
export default {

    components: {
        marketBody,
        marketHeader,
        footerView

    },
    setup() {

        const searchData = ref('');
        
        const store = useStore()

        const nfts = computed(() => {
            return store.getters.useNfts
        })
      
        store.commit({
            type: 'SET_NFT'
        })
        store.dispatch("fetchUsers");


      const filteredNft= computed(()=>{
        return nfts.value.filter((nft) => {
        return (
         nft.name.toUpperCase().indexOf(searchData.value.toUpperCase()) !=-1
        );
      })
    });

      
        return {
            filteredNft,
            searchData
        }

    }
}
</script>

<style lang="scss">
@import 'src/assets/scss/config.scss';

main {
    scroll-behavior: smooth;
    height: max-content;

}
</style>
