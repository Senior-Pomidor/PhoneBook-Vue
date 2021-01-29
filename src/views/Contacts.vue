<template>
  <section class="contacts">
    <h1>Contacts</h1>
    <div class="contacts__action-btns">
      <button class="btn contacts__btn--add" @click.prevent="isOpenForm = true">
        <i class="btn__add-icon"></i>
      </button>
    </div>

    <router-link
      v-for="contact in allContacts"
      :key="contact.id"
      :to="{name: 'Contact', params: {id: contact.id}}"
      class="contacts__contact-link"
    >
      <ContactCard :info="contact" />
    </router-link>
    
    <AddContact v-if="isOpenForm" @close="isOpenForm = false"/>
  </section>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue';
import AddContact from '@/components/AddContact.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    ContactCard,
    AddContact
  },
  data() {
    return {
      isOpenForm: false
    }
  },
  // computed: {
  //   allContacts() {
  //     return this.$store.getters.allContacts
  //   }
  // },
  computed: mapGetters(['allContacts']),
  methods: mapActions(['fetchContacts']),
  async mounted() {
    // this.$store.dispatch('fetchContacts');
    this.fetchContacts();
  }
}
</script>

<style lang="scss" scoped>
  .contacts {
    position: relative;
    padding: 20px 0;

    &__contact-link {
      display: block;
      
      &:not(:first-child) {
        margin-top: 5px;
      }
    }
  }

  .contacts__action-btns {
    display: flex;
    margin-bottom: 15px;
  }

  .contacts__btn--add {
    margin-left: auto;
  }
  .btn__add-icon {
    display: inline-block;
    position: relative;
    width: 4px;
    height: 20px; 
    background: #2f9e59;
  }
  .btn__add-icon:after {
    position: absolute;
    top: 8px;
    left: -8px; 
    width: 20px;
    height: 4px;
    content: "";
    background: #2f9e59;
  }
</style>