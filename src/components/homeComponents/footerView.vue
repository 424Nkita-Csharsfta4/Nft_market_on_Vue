<template>
	<hr />
	<section class="footer">
		<div class="footer-box">
			<div class='img-box'>
				<router-link to="/">

					<img
						src="../../assets/images/logo.png"
						alt=""
					/>
				</router-link>
			</div >
			<p>
				<router-link to="/">Home</router-link>
			</p>
			<p>
				<router-link to="/Community"
					>Community</router-link
				>
			</p>
			<p>
				<router-link to="/"
					>Privacy Policy</router-link
				>
			</p>
			<p>Contact us</p>
			<p>
				<router-link to="/About">About</router-link>
			</p>
			<p>
				<router-link to="/Market">Market</router-link>
			</p>
			<p>
				<router-link to="/"
					>Terms and conditions</router-link
				>
			</p>
			<div class="sm-links">
				<a href=""
					><i class="fa-brands fa-facebook"></i
				></a>
				<a href=""
					><i class="fa-brands fa-twitter"></i
				></a>
				<a href=""
					><i class="fa-brands fa-instagram"></i
				></a>
			</div>
		</div>
	</section>
	<router-view />
</template>

<script>
import { RouterLink } from 'vue-router';
	export default {};
</script>

<style lang="scss">
	@import "src/assets/scss/config.scss";

	.footer {
		height: 20vh;
		padding: 0 5vh 5vh;
		width: 100%;
	}

	hr {
		background-color: $secondary-color;
		height: 1px;
		border: none;
	}

	.footer-box {
		display: grid;
		grid-template-columns: repeat(3, 1fr) 1.5fr;
		grid-template-rows: repeat(3, 1fr);
		place-items: center;
    justify-items: start;
		text-align: left;

		height: 100%;

		padding: 5% 1.5% 0%;

		text-align: left;

		font-size: $text-size-medium * 0.75;

		p:nth-of-type(1) {
			display: none;
		}
		p:nth-of-type(2) {
			display: none;
		}
		p:nth-of-type(5) {
			display: none;
		}
		p:nth-of-type(6) {
			display: none;
		}
		p:nth-of-type(4) {
			grid-row: 2;
			grid-column: 1;
			white-space: nowrap;
			justify-self: start;
		}
		.sm-links {
			grid-row: 3;
			grid-column: 1;
			align-self: center;
			display: flex;
			width: 100%;
			justify-content: space-between;
		}
		p:nth-of-type(3) {
			grid-row: 2;
			grid-column: 4;
			justify-items: start;
     
      // width: 100%;
			font-size: $text-size-medium * 0.6;
		}
		p:nth-of-type(7) {
			grid-row: 3;
			grid-column: 4;
			justify-items: start;
			font-size: $text-size-medium * 0.6;
		}
		p:hover,
		i:hover {
			color: $secondary-color;
		}
		.img-box {
			grid-column: 1/ -1;
			width: 25%;
			display: flex;
      justify-self: center;
			justify-content: center;
			a{
				width: 100%;
			}
		}
		img {
			width: 100%;
		}
	}

	@import "src/assets/scss/responsive.scss";
</style>
