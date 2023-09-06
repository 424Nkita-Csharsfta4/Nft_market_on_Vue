<template>
    <transition appear name="form">
      <div class="form-container">
        <h2>Login</h2>
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <router-link to="/Market"><button @click="login">Login</button></router-link>
  
        <router-link to="/signup" class="routing">
          <p>Don't have an account?<span>Register</span></p>
        </router-link>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { ref } from "vue";
const email = ref("");
const password = ref("");
const login = () => {
    if (!email.value || !password.value) {
        alert("Please fill in all the fields.");
        return;
    }

    const formData = new FormData();
    formData.append("email", email.value);
    formData.append("password", password.value);

    fetch("http://backend/server.php", {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then((data) => {
            console.log(data);
            alert(data); // Display the response message
        })
        .catch((error) => {
            console.error(error);
            alert("An error occurred while sending the email.");
        });
};

  </script>
  
  
<style lang="scss">
/* Form Styling - Customize as needed */
.form-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    background-color: #322649;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    /* Add flex-direction to avoid autoprefixer warning */
    align-items: center;
    /* Add align-items to avoid autoprefixer warning */
}

/* Rest of the styles remain unchanged */


.form-container h2 {
    margin-bottom: 20px;
}
.routing{
    color: #322649;
}
.form-container input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background-color: transparent;
    color: #ffffff;
}

.form-container button {
    width: 100%;
    padding: 10px;
    background-color: #ECEF43;
    color: #322649;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.form-container button:hover {
    background-color: #FDF0CC;
    color: #322649;
}

.form-container p {
    margin-top: 15px;
    font-size: 14px;
}

.form-container   {
    color: #ECEF43;
    text-decoration: none;
    cursor: pointer;
}


.form-container p a:hover {
    text-decoration: underline;
}
</style>
  
