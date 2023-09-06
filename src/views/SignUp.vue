<template>
  <transition appear name="form">
    <div class="form-container">
      <h2>Register</h2>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <input type="password" v-model="confirmPassword" placeholder="Confirm Password" />
      <button @click="signup">Register</button>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

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

  // Send registration data to the PHP script
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
