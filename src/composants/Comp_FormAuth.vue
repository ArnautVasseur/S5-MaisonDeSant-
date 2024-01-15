<script setup>
import { ref } from "vue";
import { supabase } from "../lib/supabaseClient"

let email = ref("");
let password = ref("");
let errorMessage = ref("");
let successMessage = ref("");

async function login() {
  errorMessage.value = ""; // Clear any existing error message
  successMessage.value = ""; // Clear any existing success message

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    // Handle authentication error
    if (error.message.includes('Veuillez vérifier votre indentifiant ou mot de passe')) {
      // Display an error message to the user
      errorMessage.value = 'Veuillez vérifier votre indentifiant ou mot de passe';
    } else {
      // Handle other authentication errors
      errorMessage.value = 'Une erreur est survenue';
    }
    console.error(error);
  } else {
    successMessage.value = 'Vous êtes bien connecté !';
    console.log(data);
  }
}

async function seeUser() {
  const localUser = await supabase.auth.getSession();
  console.log(localUser.data.session)
}

async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
  } else {
    successMessage.value = 'Vous êtes déconnecté avec succès !';
    console.log("Sign out success");
  }
}
</script>


<template>
  <form @submit.prevent="login" id="loginForm" class="relative mx-auto top-1/2 translate-y-1/2 p-5 bg-secondary-beige text-white rounded-xl drop-shadow-green-shadow w-1/3">
    <div class="mb-5">
      <input
        class="text-black text-desktop font-quicksand w-full rounded-xl bg-clear-primary-green p-3 placeholder:text-black placeholder:px-5 placeholder:font-normal"
        placeholder="E-mail * "
        type="email"
        id="email"
        v-model="email"
        required
      />
    </div>

    <div class="mb-5">
      <input
        class="text-black text-desktop font-quicksand w-full rounded-xl bg-clear-primary-green p-3 placeholder:text-black placeholder:px-5 placeholder:font-normal"
        placeholder="Mot de passe *"
        type="password"
        id="password"
        v-model="password"
        required
      />
    </div>

    <div class="flex flex-col gap-3 items-center">
      <button type="submit" @click="login" class="bg-medium_primary_green text-desktop py-3 px-10 font-quicksand rounded-xl text-black font-normal"> Se connecter </button>
      <button type="submit" @click="logout" class="bg-medium_primary_green text-desktop py-3 px-10 font-quicksand rounded-xl text-black font-normal"> Déconnexion </button>
    </div>

    <div id="errorContainer" class="error-message">{{ errorMessage }}</div>
    <div id="successContainer" class="success-message">{{ successMessage }}</div>


  </form>
</template>


<script>

</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}

.success-message {
  color: green;
  margin-top: 10px;
}
</style>
