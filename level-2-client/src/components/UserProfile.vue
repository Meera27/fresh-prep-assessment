<template>
  <div class="user-profile">
    <h2>{{ user.name }}</h2>
    <p><strong>ID:</strong> {{ user.id }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Phone:</strong> {{ user.phone }}</p>
    <p><strong>Biography:</strong> {{ user.biography }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
