<template>
  <section class="contacts">
    <div class="contacts__action-btns">
      <button class="btn contacts__btn--add">
        <i class="btn__add-icon"></i>
      </button>
    </div>
    
    <Contact />
    <Contact />
    <Contact />
  </section>
</template>

<script>
import Contact from '@/components/Contact.vue'

export default {
  components: {
    Contact
  }
}
</script>

<style lang="scss" scoped>
  .contacts {
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
    background: #1c8622;
  }
  .btn__add-icon:after {
    position: absolute;
    top: 8px;
    left: -8px; 
    width: 20px;
    height: 4px;
    content: "";
    background: #1c8622;
  }
</style>