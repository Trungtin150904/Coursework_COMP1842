<template>
  <div>
    <div class="show-header">
      <div class="show-header-icon">🔍</div>
      <div class="show-header-title">Issue Code Detail</div>
      <div class="show-header-sub">View the full details of this helpdesk entry</div>
    </div>

    <div class="card">
      <div class="show-section">
        <div class="show-label">📋 Standard Response</div>
        <div class="show-response">{{ helpdesk.response }}</div>
      </div>

      <div class="show-divider"></div>

      <div class="show-info-row">
        <div class="show-info-item">
          <div class="show-label">🔑 Issue Code</div>
          <div class="show-info-value">{{ helpdesk.issue }}</div>
        </div>
        <div class="show-info-item">
          <div class="show-label">🗂️ Category</div>
          <div class="show-info-value">{{ helpdesk.category || 'N/A' }}</div>
        </div>
      </div>

      <div class="show-actions">
        <router-link :to="{ name: 'edit', params: { id: helpdesk._id } }" class="btn btn-primary">✏️ Edit Issue</router-link>
        <router-link to="/helpdesks" class="btn btn-secondary">← Back to List</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'show',
  data() {
    return { helpdesk: {} };
  },
  async mounted() {
    this.helpdesk = await api.getHelpdesk(this.$route.params.id);
  }
};
</script>

<style scoped src="../assets/show.css"></style>