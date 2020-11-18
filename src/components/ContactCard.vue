<template>
	<div class="contact">
    <span class="contact__info">
      {{ info.name }}
    </span>
    <span class="contact__info">
      {{ info.phone }}
    </span>
    <span class="contact__info contact__info--email">
      {{ info.email }}
    </span>
    <i class="contact__arrow">
      <svg class="contact__arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <g fill="none" stroke="#2f9e59" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
          <circle class="contact__arrow-iconcircle" cx="16" cy="16" r="15.12"></circle>
          <path class="contact__arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
        </g>
      </svg>
    </i>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  }
}
</script>

<style lang="scss">
  .contact {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;

    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

      .contact__arrow-icon {
        transform: translate3d(5px, 0, 0);
      }
      .contact__arrow-iconcircle {
          stroke-dashoffset: 0;
      }
    }

    &:active {
      opacity: 0.7;
    }

    &__info {
      position: relative;
      width: 25%;
      min-width: 150px;
      min-height: 1em;
      // border: 1px solid green;

      &:not(:first-child):before {
        position: absolute;
        left: 0;
        top: -5px;
        width: 2px;
        height: 30px;
        content: "";
        background-color: #2f9e59;
      }
    }
  }
  
  .contact__arrow {
    display: inline-flex;
    align-items: center;
    height: 18px;
    font-size: 18px;
    line-height: 18px; 
    color: #2f9e59;
    text-decoration: none;
    margin-left: auto;
    margin-right: 6px;

    &-icon {
      position: relative;
      vertical-align: middle;
      transition: transform 0.3s ease;
    }

    &-iconcircle {
      transition: stroke-dashoffset .3s ease;
      stroke-dasharray: 95;
      stroke-dashoffset: 95;
    }
  }

  @media (max-width: 540px) {
    .contact__info {
      width: 45%;
      min-width: auto;

      &--email {
        display: none;
      }
    }
  }

  @media (max-width: 400px) {
    .contact {
      font-size: 0.9em;
    }
  }
</style>