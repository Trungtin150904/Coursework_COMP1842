<template>
  <div>
    <HelpdeskForm :helpdesk="helpdesk" :isEdit="false" v-on:createOrUpdate="create" />
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
import HelpdeskForm from '../components/HelpdeskForm.vue';

export default {
  name: 'new-entry',
  components: { HelpdeskForm },
  data() {
    return {
      helpdesk: { issue: '', response: '', category: '' }
    };
  },
  methods: {
    async create(helpdesk) {
      await api.createHelpdesk(helpdesk);
      this.flash('Issue code created successfully', 'success');
      this.$router.push('/helpdesks');
    }
  }
};
</script>