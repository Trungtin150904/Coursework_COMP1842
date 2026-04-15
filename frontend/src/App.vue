<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <span class="brand-icon">🎧</span>
          <span class="brand-name">HelpDesk<span class="brand-highlight">Pro</span></span>
        </div>
        <div class="nav-links">
          <router-link to="/" class="nav-item"> Home</router-link>
          <router-link to="/helpdesks" class="nav-item"> List Issues Code</router-link>
          <router-link to="/helpdesks/new" class="nav-item"> New Issue Code</router-link>
          <router-link to="/test" class="nav-item"> Test</router-link>
          <router-link to="/about" class="nav-item">ℹ️ About</router-link>
        </div>
      </div>
    </nav>

    <!-- Flash message nằm góc phải -->
    <flash-message class="flash-container"></flash-message>

    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>