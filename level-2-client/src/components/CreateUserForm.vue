<template>
  <form class="user-form" @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
    </div>
    <div class="form-group">
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" v-model="phone" required>
    </div>
    <div class="form-group">
      <label for="biography">Biography:</label>
      <textarea id="biography" v-model="biography" required></textarea>
    </div>
    <button type="submit">Create User</button>
  </form>
</template>

<script>
export default {
  name: 'CreateUserForm',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      biography: ''
    }
  },
  methods: {
    submitForm() {
      this.$emit('create-user', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        biography: this.biography
      });
      this.name = '';
      this.email = '';
      this.phone = '';
      this.biography = '';
    }
  }
}
</script>
