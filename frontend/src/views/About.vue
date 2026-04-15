<template>
  <div>
    <!-- Header -->
    <div class="about-hero card">
      <div class="about-hero-icon">ℹ️</div>
      <h1 class="about-hero-title">About HelpDeskPro</h1>
      <p class="about-hero-sub">A MEVN stack CRUD application built for COMP1842 Web Programming 2</p>
    </div>

    <!-- Developer Info -->
    <div class="about-grid">
      <div class="card about-dev">
        <h2 class="about-section-title">👨‍💻 Developer</h2>
        <div class="dev-info-list">
          <div class="dev-info-row">
            <span class="dev-info-label">Name</span>
            <span class="dev-info-value">Trung Tín</span>
          </div>
          <div class="dev-info-row">
            <span class="dev-info-label">Student ID</span>
            <span class="dev-info-value">GCC220115</span>
          </div>
          <div class="dev-info-row">
            <span class="dev-info-label">Module</span>
            <span class="dev-info-value">COMP1842 — Web Programming 2</span>
          </div>
          <div class="dev-info-row">
            <span class="dev-info-label">University</span>
            <span class="dev-info-value">University of Greenwich</span>
          </div>
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="card">
        <h2 class="about-section-title">🛠️ Tech Stack — MEVN</h2>
        <div class="stack-list">
          <div class="stack-item" v-for="item in stack" :key="item.letter">
            <div class="stack-letter">{{ item.letter }}</div>
            <div>
              <div class="stack-name">{{ item.name }}</div>
              <div class="stack-desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features -->
    <div class="card">
      <h2 class="about-section-title">✨ System Features</h2>
      <div class="feature-list">
        <div class="feature-item" v-for="f in features" :key="f.title">
          <span class="feature-item-icon">{{ f.icon }}</span>
          <div>
            <div class="feature-item-title">{{ f.title }}</div>
            <div class="feature-item-desc">{{ f.desc }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      stack: [
        { letter: 'M', name: 'MongoDB', desc: 'NoSQL document database storing helpdesk entries' },
        { letter: 'E', name: 'Express.js', desc: 'Node.js framework providing RESTful API endpoints' },
        { letter: 'V', name: 'Vue.js', desc: 'Progressive JavaScript framework for the frontend' },
        { letter: 'N', name: 'Node.js', desc: 'JavaScript runtime powering the backend server' },
      ],
      features: [
        { icon: '📋', title: 'View All Issues', desc: 'Browse all helpdesk issue codes and standard responses' },
        { icon: '➕', title: 'Add New Issue', desc: 'Create new helpdesk entries with issue code, response and category' },
        { icon: '✏️', title: 'Edit & Delete', desc: 'Update or remove existing helpdesk entries' },
        { icon: '🔍', title: 'Search', desc: 'Search entries by issue code, response or category' },
        { icon: '📝', title: 'Staff Quiz', desc: 'Multiple choice quiz to test staff knowledge' },
        { icon: '🗂️', title: 'Categories', desc: 'Organise issues by department or type' },
      ],
    };
  }
};
</script>

<style scoped src="../assets/about.css"></style>