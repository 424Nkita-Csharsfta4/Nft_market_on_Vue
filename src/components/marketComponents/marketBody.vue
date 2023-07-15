<template>
<section id='marketSection'>
    <div class="body-box">
        <div class="body">
            <transition-group
				appear
				@before-enter="nftBeforeEnter"
				@enter="nftEnter"
			>
        
            
            <div v-for="nft in nfts" class="items" @click="showModal = nft.name" :key="nft">
    
                <figure>
                    <picture>
                        <img :src="nft.image_url" alt="">
                    </picture>
                </figure>
                <div class="nft-detail">
                    <h2>{{nft.name}} </h2>
                    <p class="price">{{Math.round(nft.stats.total_average_price * 100) / 100}} Eth</p>
                    <p class="owner">By {{nft.twitter_username}}</p>
                    <button class="btn" href="">Place bid</button>
                </div>
                <teleport to='body'>
    
                    <div v-if="showModal===nft.name" :key="nft.name" @click.self="closeModal" class='popup'>
                        <div class="nft-detail">
                            <div class="text-detail">
    
                                <h2>{{nft.name}} </h2>
                                <p class="description">{{ nft.description.substring(0,200)+'...' }}</p>
                                <p class="price">{{Math.round(nft.stats.total_average_price * 100) / 100}} Eth</p>
                                <p class="owner"> By {{ nft.twitter_username?nft.twitter_username:'no name'}}</p>
                                <button class="btn" href="">Place bid</button>
                            </div>
                            <figure>
                            <picture>
                                <img :src="nft.image_url" alt="">
                            </picture>
                        </figure>
                        </div>
                        
    
                    </div>
    
                </teleport>
            </div>
        </transition-group>

        </div>
        <div id="searchError" v-if="searchData&&nfts.length==0">
            <h4>
                Nft not available, try another search

            </h4>
        </div>

    </div>

</section>
</template>

<script>
import {
onMounted,
    ref
} from 'vue';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';

export default {
    props: {
        nfts: Object,
        searchData: String
    },
    components: {

    },

    setup() {

        const showModal = ref(false);
        const showModalToggle = () => {
            showModal.value = !showModal.value
            console.log('clicked');
        }
        const closeModal = function () {
            showModal.value = false
        }
       
        gsap.registerPlugin(scrollTrigger)
        const nftBeforeEnter = (el) => {
            gsap.to(
                el,{
                    opacity:0.5,
                   
                }
            )
           
        }
        const nftEnter = (el, done) => {
            gsap.to(
                el, {
                    scrollTrigger: {
                        trigger: el,
                        target:el,
                        toggleActions: 'play restart none none',
                        scrub: true,
                        
                        // end:`top 100px`
                        // markers:true
                    },
                    rotation:0,
                    opacity: 1,
                   
                }
            )

            }

        return {
            showModal,
            closeModal,
            showModalToggle,
            nftBeforeEnter,
        nftEnter
            
        }

    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/config.scss';
@import 'src/assets/scss/utilities.scss';

#marketSection {
    padding: 0% 5% 0vh;
    height: calc(30vh*13);
    min-height: 60vh;
    overflow-x: hidden;
    margin-top: 2.5%;
}

.body-box {

    #searchError {

        width: 100%;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        scroll-behavior: smooth;

    }

    h4 {
        color: $secondary-color;
        font-size: 1.5rem
    }

}

.body {
    display: grid;
    grid-template: auto/1fr 1fr;
    gap: 0.5% 5%;

}

.items {
    height: 30vh;
    width: 100%;
    transition: all 0.25s ease;
    cursor: pointer;

    &:hover {
        scale: 1.25
    }

    figure {
        height: 70%;
        border-radius: 10px 10px 0px 0px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0px 0px;
        }
    }

    .nft-detail {
        height: 30%;
        padding: 2.5% 5%;
        background-color: #171221;
        border-radius: 0px 0px 10px 10px;
        box-shadow: 0px 1px 8px 0px #00000040;
        display: grid;
        grid-template: repeat(3, 1fr)/repeat(2, 1fr);

        h2 {
            font-size: 0.6rem;
            grid-column: 1/span 2;
            text-transform: capitalize;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: clip;

        }

        .price {
            font-size: 0.5rem;
            grid-row: 3;
            grid-column: 2;
            justify-self: end;
            color: $secondary-color;
            align-self: center;
        }

        .owner {
            grid-row: 2;
            grid-column: 1;
            font-size: 0.5rem;

        }

        button {
            background-color: transparent;
            color: $secondary-color;
            cursor: pointer;

            &:hover {
                background-color: $secondary-color;
                color: #171221;

            }
        }

        .btn {
            padding: 1% 2%;
            border: 1px solid $secondary-color;
            border-radius: 15px;
            transition: all 0.75s;
            font-size: 0.5rem;
            display: grid;
            place-items: center;
            grid-row: 3;
            grid-column: 1;
        }
    }
}

.popup {

    position: absolute;
    top: 0%;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(0.75rem);
    font-family: poppins;
    color: $color;
    overflow: hidden;
    position: fixed;

}

.popup>div {
    width: 60%;
    height: 50%;
    background: $bg-gradient;
    border-radius: 15px;
    font-size: 0.6rem;
    display: flex;
    flex-direction: column-reverse;
    .text-detail{
        
        display: flex;
        justify-items: center;
        flex-direction: column;
        width: 100%;
        padding: 2%;
        h2{
            font-size: 1rem;
            font-weight: bold;
            color: $secondary-color;

        }
        p:nth-of-type(3){
            font-size: 0.8rem;
            color: $secondary-color;

        }
        .description{
            font-size:100%;
        }
      
    }
    figure {
        width: 100%;
        height: 100%;
        border-radius: 10px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0px 0px;
        }
    }

    .btn {
        padding: 1% 2%;
        border: 1px solid $secondary-color;
        border-radius: 15px;
        transition: all 0.75s;
        font-size: 0.5rem;
        background-color: transparent;
        color: $secondary-color;
        width: 40%;
        margin: 0 auto;
    }

}

@import 'src/assets/scss/responsive.scss';
</style>
