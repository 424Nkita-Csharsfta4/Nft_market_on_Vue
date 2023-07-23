<template>
    <div class="chat-app">
        <h2>Cryptocurrency Chat</h2>
        <div v-if="user">
            <div class="user-info">
                <img :src="user.photoURL" :alt="user.displayName" />
                <span>{{ user.displayName }}</span>
            </div>
            <div class="chat-room">
                <div class="chat-messages">
                    <div v-for="message in messages" :key="message.id" class="message">
                        <strong>{{ message.sender }}</strong>: {{ message.text }}
                    </div>
                </div>
                <div class="chat-input">
                    <input type="text" v-model="newMessage" @keyup.enter="sendMessage" />
                    <button @click="sendMessage">Send</button>
                </div>
            </div>
        </div>
        <div v-else>
            <button @click="signInWithGoogle">Sign In with Google</button>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import firebase from "firebase/app";
import "firebase/auth";
import io from "socket.io-client";

const user = ref(null);
const messages = ref([]);
const newMessage = ref("");

//Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_TkrcU0KQIemHrcX5rZlcPEPIZWITRcY",
  authDomain: "vuelogin-2fe32.firebaseapp.com",
  projectId: "vuelogin-2fe32",
  storageBucket: "vuelogin-2fe32.appspot.com",
  messagingSenderId: "355959677018",
  appId: "1:355959677018:web:6270fd2c6e38fe2709f863",
  measurementId: "G-QZMEEY9P90"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

// Firebase Authentication
const auth = firebase.auth();

auth.onAuthStateChanged((authUser) => {
    if (authUser) {
        user.value = authUser;
    } else {
        user.value = null;
    }
});

// WebSocket Communication
const socket = io("ws://localhost:3000"); // Replace with your WebSocket server URL

const sendMessage = () => {
    if (newMessage.value.trim() !== "") {
        socket.emit("message", {
            sender: user.value.displayName,
            text: newMessage.value.trim(),
        });
        newMessage.value = "";
    }
};

socket.on("message", (message) => {
    messages.value.push(message);
});

// Sign In with Google
const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        await auth.signInWithPopup(provider);
    } catch (error) {
        console.error("Google Sign-In Error:", error);
    }
};

onMounted(() => {
    // Set up WebSocket connection
    socket.on("connect", () => {
        console.log("WebSocket connected");
    });

    socket.on("disconnect", () => {
        console.log("WebSocket disconnected");
    });
});
</script>
  
<style>
.chat-app {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    background-color: #f5f5f5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.user-info img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chat-room {
    background-color: #fff;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chat-messages {
    max-height: 400px;
    overflow-y: auto;
}

.message {
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 10px;
    background-color: #f1f1f1;
}

.message strong {
    font-weight: bold;
    margin-right: 8px;
}

.chat-input {
    display: flex;
    align-items: center;
    gap: 10px;
}

.chat-input input {
    flex: 1;
    padding: 10px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
}

.chat-input button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.chat-input button:hover {
    background-color: #45a049;
}

/* Style for the sign-in button */
button {
    background-color: #4285f4;
    color: #fff;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #2a68bd;
}
</style>
  