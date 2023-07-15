<template>
    <page-loader v-if="loading"></page-loader>

    <div class="home">

        <nav>

            <div class="navlinks">

                <div class="img-box">
                    <router-link to= />
                    <img src="./assets/images/logo.png" alt="">
                    </router-link>
                </div>

                <ul>
                    <li>
                        <router-link to= />
                        Home
                        </router-link>
                    </li>

                    <li>

                        <router-link to="/About">
                            About
                        </router-link>

                    </li>
                    <li>
                        <router-link to="/community">
                            community
                        </router-link>
                    </li>
                    <li>

                        <router-link to="/Market">
                            Market
                        </router-link>

                    </li>
                    <li class="walletConnect">
                        <a v-if="!isLoggedin && isMetamaskSupported" @click="requestMeta" class="bz-btn" to="/Market">
                            Connect wallet
                        </a>
                        <p id="wallet" v-else-if="isLoggedin && isMetamaskSupported" @click="isLoggedin= false">
                            {{ address.substring(0, 5) + '...' }}
                        </p>
                        <p v-else="isMetamaskSupported">
                            <a href="">DownloadMetamask</a>
                        </p>

                    </li>
                </ul>

                <div @click="toggleMenu" class="menu-icon">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </nav>
        <transition appear name="nav">
            <div v-if="activeMenu && ![`LoginForm`, `Signup`, `dashboard`].includes($route.name)"
                class="navlinks-mobile">
                <div @click="toggleMenu" class="menu-icon">
                    <i class="fa-solid fa-close"></i>
                </div>

                <ul>

                    <li @click="activeMenu = false">
                        <router-link to= />
                        Home
                        </router-link>
                    </li>

                    <li @click="activeMenu = false">

                        <router-link to="/About">
                            About
                        </router-link>

                    </li>
                    <li @click="activeMenu = false">
                        <router-link to="/community">
                            community
                        </router-link>
                    </li>
                    <li @click="activeMenu = false">
                        <router-link to="/Market">
                            Market
                        </router-link>
                    </li>
                    <li @click="address.length > 0 ? activeMenu = false : activeMenu = true">
                        <a v-if="!isLoggedin && isMetamaskSupported" @click="requestMeta">
                            Connect wallet
                        </a>
                        <p id="wallet" v-else-if="isLoggedin && isMetamaskSupported" @click="isLoggedin= false">
                            {{ address.substring(0, 5) + '...' }}
                        </p>
                        <p v-else="isMetamaskSupported">
                            <a href="">DownloadMetamask</a>
                        </p>

                    </li>

                </ul>



            </div>
        </transition>
    </div>

    <router-view  />
</template>

<script  setup>
import pageLoader from './components/pageLoader.vue';
import {
    ref,
    onMounted,
    computed
} from "vue";
import {
    useStore
} from 'vuex';

const store = useStore()

const loading = ref(true);

setTimeout(() =>{
    if(store.getters.useNfts !== null){

        loading.value= false
    }
}, 0)
 

//    import loading components
components: {
    pageLoader
}
// Toggle menu variable and functions
const activeMenu = ref(false)

const toggleMenu = () => {
    activeMenu.value = !activeMenu.value
}

// wallet connect variables

const isLoggedin = ref(false)
const isMetamaskSupported = ref(false)
const address = ref('')

// check if metamask extension is supported

onMounted(() => {
    isMetamaskSupported.value = typeof window.ethereum !== undefined

})

// wallet connection function
async function requestMeta() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    address.value = accounts[0]
    isLoggedin.value = true
}
// update address
const computedAddress = computed(() => {
    address.value.substring(0, 4)
    if (address.value.length > 1) isLoggedin.value = true
})

</script>

<style lang="scss">
$bg-gradient: linear-gradient(242.86deg, #322649 1.52%, #000000 61.49%, #0D1018 93.82%);
$color: #ffffff;
$secondary-color: #ECEF43;

#app {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: $color;
    background: $bg-gradient;

    max-width: 100vw !important;




}

.home {

    padding: 0 5% 0;
    height: 10vh;
    position: sticky;
    background: $bg-gradient;
    z-index: 14;
    top: 0%;
    display: flex;
    align-items: center;
   

}

nav {

    width: 100%;

    .navlinks {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;

    }

    ul {
        display: none;
    }



    .img-box {
        flex-basis: 30%;
        height: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: start;


    }

    a {
        padding: 0;
        margin: 0;
        height: 100%;

        width: 80%;
        transition: all 0.5;
        cursor: pointer;
    }

    a:hover {
        color: darken($color: $color, $amount: 40%);
    }

    img {

        width: 100%;
    }

    .menu-icon {
        display: flex;
        height: 100%;
        align-items: center;
    }

    i {
        color: #ECEF43;
        font-size: 1.5rem;

    }

    #wallet {
        color: $secondary-color;
    }

}

.navlinks-mobile {
    height: 100vh;
    width: 47%;
    background: $secondary-color;
    position: fixed;
    top: 0;
    right: 0;

    ul {
        display: flex;
        flex-direction: column;
        gap: 5%;
        height: 60%;
        // align-items: center;

        color: #322649;
        font-size: 0.8rem;
        width: 100%;
    }

    li {
        text-align: right !important;
        width: 70%;
        font-weight: 600;
        cursor: pointer;

    }

    .menu-icon {
        float: right;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
    }

    i {
        font-size: 1.5rem;
        color: #0D1018;
    }

}

.nav-enter-from,
.nav-leave-to {
    translate: 100%;

    transform-origin: top right;
}

.nav-enter-active,
.nav-leave-active {
    transition: all 0.5s;
}


@import 'src/assets/scss/responsive.scss'
</style>
