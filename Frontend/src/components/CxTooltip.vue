<template>
  <div class="tooltip" @mouseenter="checkPosition" @mouseleave="resetPosition">
    <img :src="imageSrc()" alt="info button" />
    <div
      class="tooltiptext"
      :class="[tooltipClass, { show }]"
    >
      <slot>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        asperiores, cum perferendis dolorem neque nulla. Expedita, accusamus
        delectus iste quo ratione autem rem ipsum atque. Eveniet eligendi
        perferendis quas. Voluptate!
      </slot>
    </div>
  </div>
</template>

<script>
import catena_info from "@/assets/catena-logo.jpg";
import info_image from "@/assets/info.png";
export default {
  props: {
    imgSrc: String,
    tooltip_image: String,
  },
  data() {
    return {
      tooltipClass: "",
    };
  },
  methods: {
    imageSrc() {
      if (this.tooltip_image === "catena") {
        return catena_info;
      } else {
        return info_image;
      }
    },
    checkPosition(event) {
      const tooltip = event.currentTarget.querySelector(".tooltiptext");
      const rect = tooltip.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Reset class
      this.tooltipClass = "";

      // Check right boundary
      if (rect.right > screenWidth) {
        this.tooltipClass = "tooltip-left";
      }
      // Check left boundary
      else if (rect.left < 0) {
        this.tooltipClass = "tooltip-right";
      }
      // Check bottom boundary
      if (rect.bottom > screenHeight) {
        this.tooltipClass = "tooltip-top";
      }
      // Check top boundary
      else if (rect.top < 0) {
        this.tooltipClass = "tooltip-bottom";
      }
    },
    resetPosition() {
      this.tooltipClass = "";
    },
  },
};
</script>

<style scoped>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}
/* Tooltip text */
.tooltip .tooltiptext {
  font-size: 0.7rem;
  display: none;
  width: fit-content;
  min-width: 200px;

  padding: 8px;
  background-color: #fff;
  color: black;
  text-align: center;

  border-radius: 6px;
  border: 1px solid #ccc;
  position: absolute;

  transform: translateX(-50%);
  margin-top: 5px;
  z-index: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.tooltip:hover .tooltiptext {
  transition-delay:2s;
  display: block;
  
}

.tooltiptext {
  transition-delay:2s;
  display: block;
}

.tooltip-left {
  left: -65px !important;
  right: 0;
  transform: translateX(0);
  
}

.tooltip-right {
  left: 0;
  transform: translateX(0);
}

.tooltip-top {
  top: auto !important;
  bottom: 100%;
  margin-bottom: 0 !important;
  
}

.tooltip-bottom {
  left: -65px !important;
}
img {
  margin-top: 1px;
  width: 10vw;
  height: auto;
  min-width: 5px;
  max-width: 12px;
  border-radius: 3px;
}
</style>
