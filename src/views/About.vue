<template>
	<div class="about">
		<div class="about-box">
			<h2>Bazaar</h2>
			<div class="about-text-box">
				<div class="col-1">
					<p id="about-text">
                        jkgggkjgk
						<span id="cursor">_</span>
					</p>
				</div>
				<div class="col-2">
					<div class="img-box">
						<img
							src="../assets/images/nft.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<footerViewVue />
</template>

<script setup>
	import footerViewVue from "../components/homeComponents/footerView.vue";
	import { ref, onMounted } from "vue";
	import { gsap } from "gsap";
	import { SteppedEase } from "gsap";
	import TextPlugin from "gsap/TextPlugin";

	components: {
		footerViewVue;
	}
	const tl = gsap.timeline();
	// const cursor = document.getElementById('çursor')
	gsap.registerPlugin(TextPlugin);
	const aboutText = ref(null);
	aboutText.value = `Welcome to our Bazaar! We are a
						marketplace for buying and selling
						unique, one-of-a-kind digital assets
						called non-fungible tokens (NFTs). Our
						platform is built on the Ethereum
						blockchain, which ensures the
						authenticity and ownership of each NFT
						we offer. Our mission is to provide a
						secure and trusted platform for
						collectors, artists, and enthusiasts
						to buy and sell NFTs. We offer a wide
						range of NFTs, including art,
						collectibles, and even virtual real
						estate. Our team is made up of
						blockchain and art experts who are
						passionate about the growing world of
						NFTs. We strive to provide the best
						possible experience for our users,
						whether you are a seasoned collector
						or new to the world of NFTs. We hope
						you enjoy your time on our website and
						find something special to add to your
						collection. Thank you for choosing us
						as your destination for NFTs.`;

	onMounted(() => {
		gsap.to("#cursor", {
			opacity: 0,
			ease: "Power2.InOut",
			duration: 2,
			repeat: -1,
		});
		const masterTL = gsap.timeline();
		const tl = gsap.timeline();
		tl.to("#about-text", {
			duration: 60,
			text: {value:aboutText.value,
                // delimiter:" ",
            },
            ease:''

		});
        masterTL.add(tl)
	});
</script>

<style lang="scss">
	@import "../assets/scss/_config.scss";

	.about {
		height: 100vh;
		width: 100%;

		&-box {
			margin-top: 2.5%;
			width: 100%;
			height: 100%;

			h2 {
				text-align: center;
				margin-bottom: 2%;
				color: $secondary-color;
				font-size: 2rem;
				font-weight: bolder;
			}
		}

		&-text-box {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;

			align-items: center;

			.col-1 {
				padding: 0 5%;
				flex-basis: 50%;
				height: 100%;
				line-height: 1.5rem;
				p {
					font-size: 0.8rem;
					text-align: center;
				}
			}
			.col-2 {
				padding-top: 2rem;
				flex-basis: 50%;
				width: 100%;

				.img-box {
					width: 100%;
					height: 100%;

					img {
						width: 65%;
						// height: 100%;
						transform: translate(30%, -40%);
						object-fit: cover;
						animation: bounce 5s linear infinite;
					}
					@keyframes bounce {
						0% {
							translate: 0 25%;
						}
						50% {
							translate: 0 0;
						}
						100% {
							translate: 0 25%;
						}
					}
				}
			}
		}
	}
</style>
