<template>
	<header class="header">
		<div class="header-box">
			<transition
				appear
				@before-enter="headerBeforeEnter"
				@enter="headerEnter"
			>
				<h1 class="header-text">
					<p><span>Discover</span> and</p>
					<p>Explore the <span>Largest</span></p>
					<p><span>NFT</span> collections</p>
				</h1>
			</transition>

			<transition
				appear
				@before-enter="beforeEnter"
				@enter="enter"
			>
				<div class="img-box">
					<img
						class="header-img"
						src="../../assets/images/NFT-art.png"
						alt=""
					/>
				</div>
			</transition>
			<div class="detail">
				<p style="" id="detailText"></p>
				<div class="header-cta-box">
					<router-link
						class="bz-btn"
						to="/Market"
					>
						Market
					</router-link>
					<div class="explore">
						<p>Explore More</p>
						<i
							class="fa-solid fa-arrow-right"
						></i>
					</div>
				</div>
			</div>
		</div>
		<transition
			appear
			@before-enter="statsBeforeEnter"
			@enter="statsEnter"
		>
			<div class="stats-box">
				<div class="stats">
					<div class="stats1">
						<p>2M+</p>
						<p>Trading Volume</p>
					</div>
					<div class="stats2">
						<p>2M+</p>
						<p>Trading Volume</p>
					</div>
					<div class="stats3">
						<p>2M+</p>
						<p>Trading Volume</p>
					</div>
					<div class="stats4">
						<p>2M+</p>
						<p>Trading Volume</p>
					</div>
				</div>
			</div>
		</transition>
	</header>
</template>

<script>
	import { ref, onMounted } from "vue";
	import {
		RouterView,
		RouterLink,
	} from "vue-router";
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
	import TextPlugin from "gsap/TextPlugin";
	gsap.registerPlugin(TextPlugin);

	export default {
		setup() {
			// img animations
			const beforeEnter = (el) => {
				gsap.to(el, {
					x: "150%",
					opacity: 1,
				});
			};
			const enter = (el) => {
				gsap.to(el, {
					opacity: 1,
					x: 0,
					duration: 2,
				});
			};
			// header Animations
			const headerBeforeEnter = (el) => {
				gsap.to(el, {
					y: "-150%",
					opacity: 1,
				});
			};
			const headerEnter = (el) => {
				gsap.to(el, {
					opacity: 1,
					y: 0,
					duration: 1.75,
				});
			};
			const statsBeforeEnter = (el) => {
				gsap.to(el, {
					opacity: 0,
				});
			};
			const statsEnter = (el) => {
				gsap.to(el, {
					opacity: 1,
					duration: 3.75,
				});
			};

			//  create variables for automated typing text
			let texts = [
				"Find all forms of digital  here.",
				"Create, Trade, Earn",
				"DYOR",
			];

			let i = 0;

			onMounted(() => {
				// get element
				const masterTL = gsap.timeline({repeat:-1});
				texts.forEach((text) => {

					let tl = gsap.timeline({
						repeat: 1,
						yoyo: true,
					});
					tl.to("#detailText", {
						duration: 2,
						text: text,
					});
					masterTL.add(tl);
				});

				// create element
			});
			return {
				beforeEnter,
				enter,
				headerBeforeEnter,
				headerEnter,
				statsBeforeEnter,
				statsEnter,
			};
		},
	};
</script>

<style lang="scss">
	@import "/src/assets/scss/config";
	@import "/src/assets/scss/utilities";

	.header {
		padding: $section-spacing;

		text-align: left;

		.header-box {
			display: flex;
			height: auto;
			flex-direction: column;
			justify-content: start;
		}
		.img-box:hover img {
			transform: translateX(10%);
		}

		.header-img {
			display: none;
			transition: all 2s;
		}

		.header-text {
			position: relative;

			line-height: 5vh;
			font-size: 1.8em;
			font-weight: 700;

			span {
				color: $secondary-color;
			}
		}

		.detail {
			font-size: 0.8rem;
			line-height: 2vh;
			margin: 1vh 0 0;
			display: flex;
			flex-basis: 30%;
			justify-content: space-around;
			flex-direction: column;
			#detailtext {
				color: $secondary-color;
			}

			& > p {
				color: $secondary-color;
				// font-size: 7px;
			}

			.header-cta-box {
				display: flex;
				justify-content: space-between;
				margin-top: 2vh;

				align-items: center;

				.explore {
					display: flex;
					gap: 5%;
					align-items: center;
					justify-content: end;
					font-size: 1rem;
					width: 40%;
					font-size: 0.7rem;
					cursor: pointer;

					i {
						color: $secondary-color;
						animation: wobble infinite 0.5s;
					}
				}
			}

			a {
				padding: 1vh 6vh;
			}
		}

		.stats-box {
			height: 7vh;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 2vh 0 0;

			.stats {
				width: 100%;

				display: grid;
				grid-template-columns: repeat(4, 1fr);
			}

			.stats > div {
				// align-self: center;
				text-align: center;
				border-right: 1px solid $color;
				font-size: 0.6rem;
			}
			.stats > div > p:nth-of-type(2) {
				font-size: 0.4rem;
				margin: 10% 0 0 0;
			}

			.stats > div:last-of-type {
				border-right: none;
			}
		}
		@keyframes wobble {
			0% {
				transform: rotate(0deg);
			}
			25% {
				transform: rotate(10deg);
			}

			75% {
				transform: rotate(-15deg);
			}
			100% {
				transform: rotate(0deg);
			}
		}
	}

	@import "src/assets/scss/responsive.scss";
</style>
