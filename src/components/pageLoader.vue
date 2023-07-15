<template>
    <div  class="pageloader">

        <div class="spinner"></div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            isLoaded:false
        }

    },
    mounted(){
      
    }
}
</script>

<style lang="scss">
@import 'src/assets/scss/config.scss';
.pageloader{

width: 100vw;
height: 100vh !important;
display: flex;
align-items: center;
justify-content: center;
z-index: 100;
position: fixed;
background: $bg-gradient;



}
.spinner {
 position: relative;
 width: 60px;
 height: 60px;
 border-radius: 50%;
}

.spinner::before,
.spinner:after {
 content: "";
 position: absolute;
 border-radius: inherit;
}

.spinner:before {
 width: 100%;
 height: 100%;
 background-image: linear-gradient(0deg, $secondary-color 0%, #333399 100%);
 animation: spin8932 .5s infinite linear;
}

.spinner:after {
 width: 85%;
 height: 85%;
 background-color: #212121;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
}

@keyframes spin8932 {
 to {
  transform: rotate(360deg);
 }
}


</style>
