import { createStore } from "vuex";
import axios from "axios";

const options = {
	method: "GET",
	url: "https://api.blockspan.com/v1/exchanges/collections?chain=eth-main&exchange=opensea&page_size=24",
	headers: {
		accept: "application/json",
		"X-API-KEY":
			"J6d0smUXiP0Mp010NXwya8GL2xiu6F3o",
	},
};

export default createStore({
	state: {
		sellers: [
			{
				img: require("@/assets/images/Ellipse.png"),
				name: "jake",
				price: "450.12 ETH",
				id: 1,
			},
			{
				img: require("@/assets/images/Ellipse-1.png"),
				name: "jake",
				price: "450.12 ETH",
				id: 2,
			},
			{
				img: require("@/assets/images/Ellipse-2.png"),
				name: "jake",
				price: "450.12 ETH",
				id: 3,
			},
			{
				img: require("@/assets/images/Ellipse-3.png"),
				name: "jake",
				price: "450.12 ETH",
				id: 4,
			},
			{
				img: require("@/assets/images/Ellipse-4.png"),
				name: "jake",
				price: "450.12 ETH",
				id: 5,
			},
			{
				img: require("@/assets/images/Ellipse-5.png"),
				name: "jake",
				price: "450.12 ETH",
				id: 6,
			},
			{
				img: require("@/assets/images/Ellipse-6.png"),
				name: "jake",
				price: "450.12 ETH",
				id: 7,
			},
			{
				img: require("@/assets/images/Ellipse-7.png"),
				name: "jake",
				price: "450.12 ETH",
				id: 8,
			},
			{
				img: require("@/assets/images/Ellipse-8.png"),
				name: "jake",
				price: "450.12 ETH",
				id: 9,
			},
		],
		nft: [],
	},
	getters: {
		getNfts: (state) => {
			return state.nft;
		},
		useNfts: (state, getters) => {
			return getters.getNfts;
		},
	},

	actions: {
		async fetchUsers({ commit }) {
			const data = await axios.request(options);
			commit("SET_NFT", data.data);
		},
	},

	mutations: {
		SET_NFT(state, data) {
			for (let i in data.results) {
				if (i.image_url !== null) {
					state.nft = data.results;
				}
				return state.nft;
			}
			return state.nft;
		},
	},
	modules: {},
});
