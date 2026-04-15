<template>
  <div>
    <!-- Hero Section -->
    <div class="home-hero">
      <div class="hero-icon">🎧</div>
      <h1 class="hero-title">HelpDesk<span class="hero-highlight">Pro</span></h1>
      <p class="hero-subtitle">Centralised IT support response library for staff. Find the right response in seconds.</p>
      <div class="hero-actions">
        <router-link to="/helpdesks" class="btn btn-primary">📋 View All Issues</router-link>
        <router-link to="/helpdesks/new" class="btn btn-secondary">➕ Add New Issue</router-link>
      </div>
    </div>

    <!-- Stats -->
    <div class="home-stats">
      <div class="stat-card card">
        <div class="stat-icon">📋</div>
        <div class="stat-number">{{ totalIssues }}</div>
        <div class="stat-label">Total Issues</div>
      </div>
      <div class="stat-card card">
        <div class="stat-icon">🗂️</div>
        <div class="stat-number">{{ totalCategories }}</div>
        <div class="stat-label">Categories</div>
      </div>
      <div class="stat-card card">
        <div class="stat-icon">📝</div>
        <div class="stat-number">{{ totalIssues }}</div>
        <div class="stat-label">Responses Ready</div>
      </div>
    </div>

    <!-- Features -->
    <div class="home-features">
      <div class="feature-card card">
        <div class="feature-icon">🔍</div>
        <h3 class="feature-title">Quick Search</h3>
        <p class="feature-desc">Search through all issue codes and responses instantly.</p>
      </div>
      <div class="feature-card card">
        <div class="feature-icon">📝</div>
        <h3 class="feature-title">Staff Quiz</h3>
        <p class="feature-desc">Test your knowledge with our interactive multiple choice quiz.</p>
      </div>
      <div class="feature-card card">
        <div class="feature-icon">⚡</div>
        <h3 class="feature-title">Easy Management</h3>
        <p class="feature-desc">Add, edit and delete helpdesk entries with ease.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'home',
  data() {
    return {
      helpdesks: []
    };
  },
  computed: {
    totalIssues() {
      return this.helpdesks.length;
    },
    totalCategories() {
      return [...new Set(this.helpdesks.map(h => h.category).filter(Boolean))].length;
    },
    recentHelpdesks() {
      return this.helpdesks.slice(0, 5);
    }
  },
  async mounted() {
    this.helpdesks = await api.getHelpdesks();
  }
};
</script>

<style scoped src="../assets/home.css"></style>