<template>
    <div class="sponsors">
        <div v-if="sponsors.length === 0">No sponsors found.</div>
        <div v-else class="sponsor-container">
            <div v-for="(sponsor, index) in sponsors" :key="index" class="sponsor">
                <img :src="sponsor.logo" :alt="sponsor.name" />
                <div class="name">{{ sponsor.name }}</div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";

const sponsors = ref([
    {
        name: "OpenSea",
        logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/OpenSea_icon.svg/1200px-OpenSea_icon.svg.png",
    },
    {
        name: "Metamask",
        logo:
            "https://pbs.twimg.com/ext_tw_video_thumb/1459450775873150979/pu/img/MIww0kMpH01pN2TU?format=jpg&name=large",
    },
    {
        name: "Binance",
        logo:
            "https://cdn.publish0x.com/prod/fs/images/11e4669ed41018ce1ea2a011562b46f4ef07132105d08ac842ed86fccd6f82f5.png",
    },
    {
        name: "Huobi",
        logo: "https://profinvestment.com/wp-content/uploads/2022/06/huobi-logo.png",
    },
    {
        name: "BingX",
        logo: "https://pbs.twimg.com/media/FEdpUqXacAEuHrO.jpg:large",
    },
]);

</script>
  
<style lang="scss">
.sponsors {
    text-align: center;
    margin-top: 2em;
}

.sponsor-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.sponsor {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    width: 150px;

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }

    .name {
        margin-top: 10px;
        font-weight: bold;
    }
}
</style>
  