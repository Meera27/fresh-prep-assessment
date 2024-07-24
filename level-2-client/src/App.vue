<template>
  <div class="container">
    <h1>Fresh Prep User Management</h1>
    <LoadingSpinner v-if="loading" />
    <UserProfile v-if="user" :user="user" />
    <ErrorMessage v-if="error" :message="error" />
    <CreateUserForm @create-user="createUser" />
    <UserList :users="users" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import LoadingSpinner from './components/LoadingSpinner.vue';
import UserProfile from './components/UserProfile.vue';
import ErrorMessage from './components/ErrorMessage.vue';
import CreateUserForm from './components/CreateUserForm.vue';
import UserList from './components/UserList.vue';
import { createUserWithRetry, getAllUsers } from './services/userService';

export default {
  name: 'App',
  components: {
    LoadingSpinner,
    UserProfile,
    ErrorMessage,
    CreateUserForm,
    UserList
  },
  setup() {
    const user = ref(null);
    const users = ref([]);
    const loading = ref(true);
    const error = ref(null);

    async function createAndFetchUser(userData = null) {
      loading.value = true;
      error.value = null;
      try {
        const newUser = await createUserWithRetry(userData);
        user.value = newUser;
        await fetchAllUsers();
      } catch (err) {
        console.error('Error creating user:', err);
        error.value = 'Failed to create user. Please try again.';
      } finally {
        loading.value = false;
      }
    }

    async function fetchAllUsers() {
      try {
        users.value = await getAllUsers();
      } catch (err) {
        console.error('Error fetching all users:', err);
      }
    }

    onMounted(() => createAndFetchUser());

    return {
      user,
      users,
      loading,
      error,
      createUser: createAndFetchUser
    };
  }
}
</script>
