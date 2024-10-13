<template>
  <div>
    <tippy interactive="true" allowHTML="true">
      <q-icon name="info_outline" size="15px" color="blue-grey-6" />
      <template #content>
        <slot>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          asperiores, cum perferendis dolorem neque nulla. Expedita, accusamus
          delectus iste quo ratione autem rem ipsum atque. Eveniet eligendi
          perferendis quas. Voluptate!
        </slot>
      </template>
    </tippy>
    <!-- <q-img
      :src="imageSrc()"
      alt="info button"
      class="tooltip-image"
      @click="tooltipInteract"
    >
      <q-tooltip
        v-model="showTooltip"
        :delay="showDelay"
        :hide-delay="hideDelay"
        anchor="bottom middle"
        self="top middle"
        @show="onShow"
        @hide="onHide"
        @mouseenter="clearHideTimer"
        @mouseleave="startHideTimer"
      >
        <slot>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          asperiores, cum perferendis dolorem neque nulla. Expedita, accusamus
          delectus iste quo ratione autem rem ipsum atque. Eveniet eligendi
          perferendis quas. Voluptate!
        </slot>
      </q-tooltip>
    </q-img> -->
  </div>
</template>

<script>
import "tippy.js/dist/tippy.css";
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
      showTooltip: false,
      showDelay: 0,
      hideDelay: 1000,
      hideTimer: null,
    };
  },
  methods: {
    startHideTimer() {
      clearHideTimer(); // Clear any existing timer
      this.hideTimer = setTimeout(() => {
        this.showTooltip = false;
      }, 1000); // 1 second delay
    },
    clearHideTimer() {
      if (this.hideTimer) {
        clearTimeout(this.hideTimer);
        this.hideTimer = null;
      }
    },
    onShow() {
      clearHideTimer();
    },

    onHide() {
      startHideTimer();
    },
    tooltipInteract() {
      this.show = !this.show;
    },
    imageSrc() {
      if (this.tooltip_image === "catena") {
        return catena_info;
      } else {
        return info_image;
      }
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
  transition-delay: 2s;
  display: block;
}

.tooltiptext {
  transition-delay: 2s;
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
.tooltip-image {
  margin-top: 1px;
  width: 10vw;
  height: auto;
  min-width: 5px;
  max-width: 12px;
  border-radius: 3px;
}
</style>
