<template>
  <div class="container">
    <h1>Fresh Prep User Management</h1>
    <LoadingSpinner v-if="loading" />
    <UserProfile v-if="user" :user="user" />
    <CreateUserForm @create-user="createUser" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import LoadingSpinner from './components/LoadingSpinner.vue';
import UserProfile from './components/UserProfile.vue';
import CreateUserForm from './components/CreateUserForm.vue';
import { getUser, createUserWithRetry } from './services/userService';

export default {
  name: 'App',
  components: {
    LoadingSpinner,
    UserProfile,
    CreateUserForm
  },
  setup() {
    const user = ref(null);
    const loading = ref(true);

    async function fetchUser() {
      loading.value = true;
      try {
        user.value = await getUser();
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        loading.value = false;
      }
    }

    async function createUser(userData) {
      loading.value = true;
      try {
        const newUser = await createUserWithRetry(userData);
        user.value = newUser;
      } catch (error) {
        console.error('Error creating user:', error);
      } finally {
        loading.value = false;
      }
    }

    onMounted(fetchUser);

    return {
      user,
      loading,
      createUser
    };
  }
}
</script>
