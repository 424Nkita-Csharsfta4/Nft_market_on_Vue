<template>
<header class="marketHeader">
    <div class="marketHeader-box">
        <div class="marketHeaderText">
            <h2>Market</h2>
            <p>Browse through an extensive collection of NFTs</p>
        </div>
        <!-- -->
        <div class="search-box">
            <input   type="search" name="" placeholder="search Nfts" id=""
            @input="$emit('update:searchData', $event.target.value)">
        </div>
        <div class="dropdown-box"> 
        <select name="filter-nft" id="">
            <option value="">
                most expensive
            </option>
             <option value="">
                
            </option>
        </select>
          
        </div>
       
       

    </div>
</header>
</template>

<script>
import gsap from "gsap";
import {computed,
    onMounted, ref
} from 'vue';
import {
    useStore
} from 'vuex';
export default {
   
    data() {
        return {
            dropdownActive: false,
            sortActive: false,
        }
    },
    
    props:{
        searchData:String
    },
    emits:["update:searchData"],
    setup() {
    }
}
</script>

<style lang="scss">
@import 'src/assets/scss/config.scss';

.marketHeader {

    padding: 3vh 5% 2vh;
    overflow: hidden;
    color: #fff;

    &-box {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(4, 1fr);
        row-gap: 2.5vh;

        .marketHeaderText {
            grid-column: 1/-1;
            align-self: center;
            text-align: center;

            h2 {
                font-weight: bolder;
                font: 1.5rem ;
                color: $secondary-color;
            }

            p {
                font-size: $text-size-medium*0.75;
            }

        }

        .search-box {

            grid-column: 3/ span 5;
            grid-row: 2;
            justify-self: end;

            input {
                border: $secondary-color 1px solid;
                border-radius: 10px;
                max-width: 100%;
                background: transparent;
                outline: none;
                padding: 0 5%;
                color: #fff;
                caret-color: white;
            }

        }

        .dropdown-box {
            border: $secondary-color 1px solid;
            border-radius: 10px;
            background: transparent;

            grid-column: 1/ span 2;
            grid-row: 2;
            width: 80%;

            padding: 0 5%;
            color: #fff;

            i {
                font-size: $text-size-medium;
                float: right;
                color: #8D8C8C;
            }
        }

        .sort-box {
            border: $secondary-color 1px solid;
            border-radius: 10px;
            background: transparent;

            grid-column: 1/ span 2;
            grid-row: 3;
            width: 60%;
            padding: 0 5%;

            i {
                font-size: $text-size-medium;
                float: right;
                color: #8D8C8C;
            }

        }
    }

    .dropdown-list {

        display: flex;
        flex-direction: column;
        padding: 5% 0;
        align-items: left;

    }

    .dropdown-list:nth-of-type(2) {
        display: none;
    }

    .sort-list {
        display: flex;
        flex-direction: column;
        padding: 5% 0;
        align-items: center;
    }
    select{
        background: none;
        border: none;
        outline: none;
                color: #8D8C8C;
        
    }

}

@import 'src/assets/scss/responsive.scss';
</style>
