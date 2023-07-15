<template >
<main >
    <headerView/>
    <seller />
    <trends />
    <newsletter />
<footerView />
</main>


    
   

</template>

<headerView />


<script>
import seller from '../components/homeComponents/seller.vue'
// @ is an alias to /src
import headerView from '../components/homeComponents/headerView.vue'
import trends from '../components/homeComponents/trendCollections.vue'
import Newsletter from '../components/homeComponents/Newsletter.vue'
import footerView from '../components/homeComponents/footerView.vue'


export default {
    name: 'HomeView',
    components: {
        headerView,
        seller,
        trends,
        Newsletter,
        footerView
    }
    ,
    
    setup() {
       
    }
}
</script>

<style lang="scss">
main{
    
    overflow-x: hidden;
}
</style>
