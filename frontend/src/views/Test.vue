<template>
  <div>
    <h1 class="page-title">Staff Training Quiz</h1>

    <div class="card" style="text-align:center" v-if="helpdesks.length < 5">
      <p style="font-size:3rem">📋</p>
      <h3 style="color:#555; margin-bottom:0.5rem">Not enough entries</h3>
      <p style="color:#888">You need at least <strong>5 helpdesk entries</strong> to begin the test.</p>
      <router-link to="/helpdesks/new" class="btn btn-primary" style="margin-top:1rem">➕ Add New Entry</router-link>
    </div>

    <div v-else>
      <helpdesk-test :helpdesks="helpdesks"></helpdesk-test>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
import HelpdeskTest from '../components/HelpdeskTest.vue';

export default {
  name: 'test',
  components: { 'helpdesk-test': HelpdeskTest },
  data() {
    return { helpdesks: [] };
  },
  async mounted() {
    this.helpdesks = await api.getHelpdesks();
  }
};
</script>