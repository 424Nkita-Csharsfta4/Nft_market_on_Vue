<template>
<section class=section>
    <h4>
        Top Sellers this week
    </h4>
    <transition
				appear
				@before-enter="sellersBeforeEnter"
				@enter="sellersEnter"
                @leave="sellersLeave"

			>
        
            <div class="sellers">
        
                <li v-for="user in users">
                    <div class="number-box">
                        <h5>{{user.id}}.</h5>
                    </div>
                    <img :src="user.img" alt="">
                    <div class="user-details">
                        <h4>
                            {{ user.name}}
                        </h4>
                        <small>{{user.price}}</small>
                    </div>
        
                </li>
        
            </div>
        
    </transition>
</section>
</template>

<script >
import {
    computed,
    onMounted,
    ref
} from "vue";

import {
    useStore
} from 'vuex';
import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'





export default {
    
    
    setup() {
        gsap.registerPlugin(scrollTrigger);
        const sellersBeforeEnter = (el) => {
            el.style.opacity = 0.25
            el.style.transform = 'translateY(20%)'
            };  
            const sellersEnter = (el) => {
                gsap.to(el,
                { 
                    scrollTrigger: {
                        target: el,
                        toggleActions: "play reverse play none ",
                        start: "21% 10%",
                        end: "70% center",
                        
                    },
                    duration: 2.5,
                    y: 0,
                    opacity: 1,
                    ease: 'elastic',
                });
            };
          
            // define vuex store in component
        const store = useStore();
        

        // assign store's state to variable

        const users = computed(() => {
            return store.state.sellers
        })

        return {
            users, sellersBeforeEnter, sellersEnter
        }

    }
}
</script>

<style lang="scss">
@import 'src/assets/scss/config.scss';

.section {
    max-height: auto;
    padding: $section-spacing;

    h4 {
        text-align: center;
        padding: 0 0 2.5% 0;
    }

    .sellers {
        box-shadow: 0px 1px 4px 0px #00000040;
        border-radius: 20px;
        background: linear-gradient(86.64deg, #0D1018 1.81%, #171221 97.76%);
        height: 65vh;
        display: grid;
        grid-template: repeat(5, 1fr)/repeat(2, 1fr);
        padding: 10% 5%;
        gap: 5%;
        row-gap: 10%;

        li {
            display: flex;
            width: 70%;
            align-self: center;

            align-items: center;
            justify-content: space-around;

            img {
                width: 35px;
            }

            h5 {
                font-size: $text-size-medium*1.4;
                color: $color;
            }

            h4:nth-of-type(2) {
                font-size: $text-size-medium*1.4;
                margin-bottom: 5%;

            }

            small {
                font-size: $text-size-medium*0.75;
                color: $secondary-color;

            }
        }

    }

}

@import 'src/assets/scss/responsive.scss'
</style>
