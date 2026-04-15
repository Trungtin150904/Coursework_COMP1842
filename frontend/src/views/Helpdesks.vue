<template>
  <div>
    <div class="helpdesks-header">
      <div class="helpdesks-title-wrap">
      <h1 class="page-title" style="margin:0">All Issues Codes</h1>
      <span class="helpdesks-count">{{ helpdesks.length }} issues</span>
      </div> 
    </div>

    <!-- Search bar -->
    <div class="search-wrap">
      <span class="search-icon">🔍</span>
      <input
        class="search-input"
        type="text"
        v-model="searchQuery"
        placeholder="Search by issue code or category..."
      />
      <button v-if="searchQuery" class="search-clear" @click="searchQuery = ''">✕</button>
    </div>

    <table class="custom-table">
      <thead>
        <tr>
          <th style="width:5%">Id</th>
          <th style="width:16%">Issue Code</th>
          <th style="width:37%">Response</th>
          <th style="width:12%">Category</th>
          <th style="width:30%; text-align:center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="filteredHelpdesks.length === 0">
          <td colspan="5" class="no-results">No results found for "{{ searchQuery }}"</td>
        </tr>

        <tr v-for="(helpdesk, i) in filteredHelpdesks" :key="i">
          <td style="color:#888; font-weight:600">{{ i + 1 }}</td>
          <td><strong style="color:#3498db">{{ helpdesk.issue }}</strong></td>
          <td>{{ helpdesk.response }}</td>
          <td>
            <span :class="['badge', `badge-${helpdesk.category ? helpdesk.category.toLowerCase() : 'other'}`]">
              {{ helpdesk.category || 'N/A' }}
            </span>
          </td>
          <td style="text-align:center">
            <div style="display:flex; gap:6px; justify-content:center">
              <router-link :to="{ name: 'show', params: { id: helpdesk._id } }" class="btn btn-secondary">👁 View</router-link>
              <router-link :to="{ name: 'edit', params: { id: helpdesk._id } }" class="btn btn-primary">✏️ Edit</router-link>
              <a href="#" class="btn btn-danger" @click.prevent="onDestroy(helpdesk)">🗑 Delete</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'helpdesks',
  data() {
    return { 
      helpdesks: [],
      searchQuery: ''
     };
  },
  computed: {
    filteredHelpdesks() {
      if (!this.searchQuery) return this.helpdesks;
      const q = this.searchQuery.toLowerCase();
      return this.helpdesks.filter(h =>
        h.issue.toLowerCase().includes(q) ||
        // h.response.toLowerCase().includes(q) ||
        (h.category && h.category.toLowerCase().includes(q))
      );
    }
  },
  async mounted() {
    this.helpdesks = await api.getHelpdesks();
  },
  methods: {
    async onDestroy(helpdesk) {
      if (confirm('Are you sure you want to delete this issue code?')) {
        await api.deleteHelpdesk(helpdesk._id);
        this.flash('Issue code deleted successfully', 'success');
        this.helpdesks = this.helpdesks.filter(h => h._id !== helpdesk._id);
      }
    }
  }
};
</script>

<style scoped src="../assets/helpdesks.css"></style>