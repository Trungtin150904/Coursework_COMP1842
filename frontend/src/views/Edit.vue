<template>
  <div>
    <HelpdeskForm :helpdesk="helpdesk" :isEdit="true" v-on:createOrUpdate="update" />
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
import HelpdeskForm from '../components/HelpdeskForm.vue';

export default {
  name: 'edit',
  components: { HelpdeskForm },
  data() {
    return { helpdesk: {} };
  },
  async mounted() {
    this.helpdesk = await api.getHelpdesk(this.$route.params.id);
  },
  methods: {
    async update(helpdesk) {
      await api.updateHelpdesk(helpdesk);
      this.flash('Issue code updated successfully', 'success');
      this.$router.push('/helpdesks');
    }
  }
};
</script>