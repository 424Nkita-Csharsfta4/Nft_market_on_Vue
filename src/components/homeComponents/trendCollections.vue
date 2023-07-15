<template>
<section class="collection-section" v-if="nfts.length!= 0">
    <h4>Trending Collections</h4>
    <transition
				appear
				@before-enter="collectionsBeforeEnter"
				@enter="collectionsEnter"
			>
        
        
        
        
        
            <div class="collections">
                <div class="collection" :data-tip='nfts[1].description '>
                    <img :src="nfts[1].image_url" alt="nfts[1].description">
                    <div id="nft-detail" class="nft-detail">
        
                        <h4>{{nfts[1].name}}</h4>
                        <div class="creator-detail">
                            <h5>By {{nfts[1].twitter_username}}</h5>
                            <p>{{Math.round(nfts[1].stats.total_average_price * 100) / 100}} Eth</p>
                        </div>
        
                    </div>
                </div>
                <div class="collection"  :data-tip='nfts[2].description '>
                    <img :src="nfts[2].image_url" alt="nfts[2].description">
                    <div id="nft-detail" class="nft-detail">
        
                        <h4>{{nfts[2].name}}</h4>
                        <div class="creator-detail">
                            <h5>By {{nfts[2].twitter_username}}</h5>
                            <p>{{Math.round(nfts[2].stats.total_average_price * 100) / 100}} Eth</p>
        
                        </div>
                    </div>
                </div>
                <div  class="collection"  :data-tip='nfts[3].description '>
                    <img :src="nfts[3].image_url" :alt="nfts[3].description">
                    <div id="nft-detail" class="nft-detail">
        
                        <h4>{{nfts[3].name}}</h4>
                        <div class="creator-detail">
                            <h5>By {{nfts[3].twitter_username}}</h5>
                            <p>{{Math.round(nfts[3].stats.total_average_price * 100) / 100}} Eth</p>
        
                        </div>
        
                    </div>
                </div>
                <div class="collection"  :data-tip='nfts[4].description '>
                    <img :src="nfts[6].image_url" alt="">
                    <div id="nft-detail" class="nft-detail">
        
                        <h4>{{nfts[6].name}}</h4>
                        <div class="creator-detail">
                            <h5>By {{nfts[6].twitter_username}}</h5>
                            <p>{{Math.round(nfts[6].stats.total_average_price * 100) / 100}} Eth</p>
        
                        </div>
                    </div>
        
                </div>
                <div id="arrow-container" class="arrow-container">
                        <router-link to="/Market">
                        <i class="fa-solid fa-arrow-right"></i>
                    </router-link>
                    </div>
        
            </div>
    </transition>

</section>
</template>

<script setup>

// import modules
import {
    computed,
} from "vue";
import {
    useStore
} from 'vuex';
import { RouterLink } from "vue-router";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger)


const collectionsBeforeEnter = (el) => {
            el.style.opacity = 0
            
        }
        const collectionsEnter =(el)=>{
            gsap.to(
                el, {
                    scrollTrigger: {
                        target: el,
                        toggleActions: "restart none play reset",
                        scrub: false,
                        start: "60% 90%",
                        end: "70% center",
                    },
                    duration: 10,
                   
                    opacity: 1,
                    ease: 'elastic',
                }
        )}

// assign store variable
const store = useStore();

let nfts = computed(() => {
    return store.getters.useNfts
})

// get nfts from store

    store.commit({type:'SET_NFT'})
    store.dispatch("fetchUsers");
    

</script>

<style lang="scss">
@import 'src/assets/scss/config.scss';

.collection-section {
    height: auto;
    padding: $section-spacing;
    position: relative;

    h4 {
        padding: 0 0 2.5% 0;
    }

    .collections {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        padding: 0 0 5% 0;
        gap: 5%;
        height: auto;
        border-radius: 10px;
     

        &>* {
            cursor: pointer;
        }

        // border: solid;
        .collection {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 20px;
            position: relative;
            &::after{
                content: attr(data-tip);
                background: darken($color: #0D1018, $amount: 90%);
                box-shadow: 0px 1px 8px 0px #00000040;
                position: absolute;
                height: 12vh;
                left: 50%;
                top:50% ;
                font-size: 10%;
                border-radius: 10px;
                text-align-last: left;
                width: 60%;
                transform: scale(0);
                transform-origin: top;
                transition: all 0.25s ease-out;
                overflow: hidden;
                   padding: 1% 5%;
                
            }
             &:hover::after{
                transform: scale(1) translate(-50%,-50%);
             }
            img {
                width: 100%;
                height: 70%;
                border-radius: 10px 10px 0px 0px;
            }

            .nft-detail {
                padding: 2.5% 5% 0;
                width: 100%;
                font-size: 0.5rem;
                height: 30%;
                border-radius: 0px 0px 10px 10px;

                background: #0D1018;
                box-shadow: 0px 1px 8px 0px #00000040;
                display: grid;
                grid-template-rows: repeat(2, 1fr);

                h4 {
                    text-align: left;
                    align-self: center;
                

                }
                h5{
                

                }

                .creator-detail {

                    display: flex;
                    justify-content: space-between;

                    p {
                        font-family: monospace;
                        color: $secondary-color;
                        font-size: $text-size-medium*.75;
                    }
                }
            }
        }

        .arrow-container {

            background: $secondary-color;
            height: 20%;
            width: 20%;
            align-self: center;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            display: none;

            // right: .5%;
            // top: 50%;
            i {
                font-size: 1.5em;
                padding: 0 auto;
                color: #0D1018
            }
       
                
            }
        }
             #arrow-container:hover i {
                animation: wobble infinite 0.5s ;
                // transform: translate(-50px);
            }
            @keyframes wobble {
                0%{
                    transform: rotate(0deg)
                }
                25%{
                    transform: rotate(10deg)
                }
               
                  75%{
                    transform: rotate(-15deg)
                }
                100%{
                    transform: rotate(0deg)
                }
    }

    @import 'src/assets/scss/responsive.scss';
}
</style>
