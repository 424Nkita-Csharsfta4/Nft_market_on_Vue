<template>
    <div class="community">
        <p>Coming Soon...</p>
    </div>
    <footerView></footerView>
  
</template>

<script>
import {footerView} from '../components/homeComponents/footerView.vue'
export default{
    components:{
        footerView
    }
}

</script>

<style lang="scss">
@import '../assets/scss/config.scss';


.community{
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        font-size: 2rem;
        font-weight: bold;
        color: $secondary-color;

    }
}

</style>