<template>
    <div class="transfer-form">
        <h2>Cryptocurrency Transfer</h2>
        <form @submit.prevent="transfer">
            <div class="input-group">
                <label for="senderAddress">Sender Address:</label>
                <input type="text" v-model="senderAddress" id="senderAddress" />
            </div>
            <div class="input-group">
                <label for="receiverAddress">Receiver Address:</label>
                <input type="text" v-model="receiverAddress" id="receiverAddress" />
            </div>
            <div class="input-group">
                <label for="amount">Amount:</label>
                <input type="text" v-model="amount" id="amount" @input="validateAmount" />
            </div>
            <button type="submit" class="transfer-button">Transfer</button>
        </form>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import Web3 from "web3";


const senderAddress = ref("");
const receiverAddress = ref("");
const amount = ref(0);

const transfer = async () => {
    if (!window.ethereum) {
        alert("Metamask is not installed. Please install and try again.");
        return;
    }

    const web3 = new Web3(window.ethereum);

    try {
        // Request account access if needed
        await window.ethereum.enable();

        const accounts = await web3.eth.getAccounts();
        const sender = senderAddress.value.trim();
        const receiver = receiverAddress.value.trim();
        const value = web3.utils.toWei(amount.value.toString(), "ether");

        if (!web3.utils.isAddress(sender) || !web3.utils.isAddress(receiver)) {
            alert("Invalid sender or receiver address");
            return;
        }

        const transactionObject = {
            from: accounts[0],
            to: receiver,
            value: value,
        };

        // Sending the transaction
        const transactionHash = await web3.eth.sendTransaction(transactionObject);

        console.log("Transfer initiated!");
        console.log("Transaction Hash:", transactionHash);
        console.log("Sender Address:", senderAddress.value);
        console.log("Receiver Address:", receiverAddress.value);
        console.log("Amount:", amount.value);
    } catch (error) {
        console.error("Error while sending transaction:", error);
        alert("Error while sending transaction: " + error.message);
    }
};

const validateAmount = () => {

    amount.value = amount.value.replace(/[^0-9.]/g, "");
};
</script>
<style>
.transfer-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-top: 2em;
    text-align: center;
    /* Center the text */
}

h2 {
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

.input-group {
    margin-bottom: 10px;
    /* Reduced margin between input groups */
}

.input-group label {
    font-weight: bold;
}

.input-group input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.transfer-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 12px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.transfer-button:hover {
    background-color: #45a049;
}

/* Additional styling for a more appealing form appearance */

.transfer-form {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
}

button:hover {
    transform: scale(1.05);
}
</style>