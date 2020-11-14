<template>
  <section class="contacts">
    <div class="contacts__action-btns">
      <button class="btn contacts__btn--add" @click.prevent="isOpenForm = true">
        <i class="btn__add-icon"></i>
      </button>
    </div>

    <!-- <router-link to="/contact" :info="contact"> -->
      <ContactCard v-for="contact in contacts" :key="contact.id" :info="contact" />
    <!-- </router-link> -->

    

    <AddContact v-if="isOpenForm" @close="isOpenForm = false"/>
  </section>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue'
import AddContact from '@/components/AddContact.vue'

export default {
  components: {
    ContactCard,
    AddContact
  },
  data() {
    return {
      isOpenForm: false,
      contacts: this.$store.getters.contacts
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .contacts {
    position: relative;
    padding: 20px 0;
  }

  .contacts__action-btns {
    display: flex;
    margin-bottom: 15px;
  }

  .btn {
    width: 50px;
    height: 30px;
    padding: 5px 10px;
    background: #fff;
    border: none;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    &:active {
      opacity: 0.7;
    }
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