<template>
  <div>
    <div class="form-header">
      <div class="form-header-icon">{{ isEdit ? '✏️' : '➕' }}</div>
      <div class="form-header-title">{{ isEdit ? 'Edit Issue Code' : 'New Issue Code' }}</div>
      <div class="form-header-sub">{{ isEdit ? 'Update the details below' : 'Fill in the details below to create a new issue code' }}</div>
    </div>

    <div class="card">
      <p class="error-message" v-if="errorsPresent">
        ⚠️ Please fill out all fields!
      </p>

      <form action="#" @submit.prevent="onSubmit">
        <div class="form-group">
          <label class="form-label">Issue Code</label>
          <input class="form-input" type="text" placeholder="e.g. PWD_RESET" v-model="helpdesk.issue" />
        </div>

        <div class="form-group">
          <label class="form-label">Standard Response</label>
          <textarea class="form-input" placeholder="Enter the standard response for this issue..." v-model="helpdesk.response" rows="5"></textarea>
        </div>

        <div class="form-group">
          <label class="form-label">Category</label>
          <select class="form-input" v-model="helpdesk.category">
            <option value="">-- Select a category --</option>
            <option value="Account">🔑 Account</option>
            <option value="Billing">💳 Billing</option>
            <option value="Hardware">🖥️ Hardware</option>
            <option value="Software">💾 Software</option>
            <option value="Network">🌐 Network</option>
            <option value="Security">🔒 Security</option>
            <option value="Other">📦 Other</option>
          </select>
        </div>

        <div class="form-footer">
          <button class="btn btn-primary" type="submit">
            {{ isEdit ? '✅ Update Issue Code' : '✅ Create Issue Code' }}
          </button>
          <router-link to="/helpdesks" class="btn btn-secondary">✕ Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'helpdesk-form',
  props: {
    helpdesk: {
      type: Object,
      required: false,
      default: () => ({ issue: '', response: '', category: '' })
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { errorsPresent: false };
  },
  methods: {
    onSubmit() {
      if (!this.helpdesk.issue || !this.helpdesk.response || !this.helpdesk.category) {
        this.errorsPresent = true;
      } else {
        this.errorsPresent = false;
        this.$emit('createOrUpdate', this.helpdesk);
      }
    }
  }
};
</script>

<style scoped src="../assets/form.css"></style>