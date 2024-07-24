<template>
  <div class="user-list">
    <h2>All Users</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }}, tone: {{ user.tone }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.user-list {
  margin-top: 20px;
}
</style>
