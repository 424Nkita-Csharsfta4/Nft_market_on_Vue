<template>
	<section v-if="loading" class="newsletter">
		<Transition 
				appear
				@before-enter="newsletterBeforeEnter"
				@enter="newsletterEnter">
			<div class="newsletter-box">
				<header>
					<p id="header-text">
						Subscribe to our Newsletter and get the
						latest updates
					</p>
					<small
						>Lorem ipsum dolor sit amet consectetur.
						Sem. Lorem ipsum dolor sit amet
						consectetur. Sem.</small
					>
				</header>
				<form action="">
					<input
						type="email"
						name=""
						placeholder="Get up to date with web3"
						id=""
					/>
					<button
						id="submit-button"
						class=""
						type="submit"
					>
						Subscribe
					</button>
				</form>
			</div>

		</Transition>
	</section>
</template>

<script setup>
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import { useStore } from "vuex";
import { ref } from "vue";
gsap.registerPlugin(scrollTrigger)


const newsletterBeforeEnter = (el) => {
	gsap.to(
                el,{
                    opacity:0,
					x:'50px',
					
                    
                }
            )
           
        }
        const newsletterEnter =(el)=>{
			
            gsap.to(
                el, {
                    scrollTrigger: {
						target:el,
						trigger:el,
                        toggleActions: "play pause resume pause",
                        start:  `top 90%`,
                        end:  `90% 90%`,
						
                    },
                    duration: 10,
					x:0,
                    opacity: 1,
                    ease: 'elastic',
                }
        )}
		const store = useStore()

const loading = ref(false);

setTimeout(() =>{
    if(store.getters.useNfts !== null){

        loading.value= true
    }
}, 3000)

</script>

<style lang="scss">
	@import "src/assets/scss/config.scss";

	.newsletter {
		padding: $section-spacing;
		height: 28vh;
		box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

		&-box {
			background: linear-gradient(
				268.7deg,
				#0d1018 0.45%,
				#6c6579 120.69%
			);
			height: 100%;
			border-radius: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 5% 5% 0 5%;
			gap: 10%;
		}
		form {
		flex-basis: 40%;
			width: 100%;
			display: flex;
			align-items: flex-start;
			justify-content: center;

			position: relative;
			input {
				width: 70%;
				background: none;
				border: 1px solid $secondary-color;
				height: 40%;
				border-top-left-radius: 20px;
				border-bottom-left-radius: 20px;
				font-size: $text-size-medium*0.5;
			}
			input::placeholder {
				width: 30%;

				padding: 0 35%;
			}
			input:focus {
				color: $color;
				padding: 0 0 0 2%;
				outline: none;
			}

			button {
				width: 30%;
				background: none;

				height: 40%;
				background-color: $secondary-color;
				border-top-right-radius: 20px;
				border-bottom-right-radius: 20px;
				border: none;
				font-size: $text-size-medium*0.9;
				letter-spacing: 0.05rem;
			}
		}
		header {
			text-align: left;
			color: #f5f5f5;
			

			p {
				font-size: $text-size-medium ;
				font-weight: 600;
			}

			small {
				font-size: $text-size-medium *0.5;
			}

			#submit-button {
				background: transparent;
			}
		}
	}

	@import "src/assets/scss/responsive.scss";
</style>
