<template>
<div class="demo-card-wide mdl-card mdl-shadow--4dp">
  <div class="mdl-card__title">
    <div class="mdl-spinner mdl-js-spinner is-active"></div>
    <slot name="map"></slot>
  </div>
  <slot name="bottom"></slot>
  <div class="mdl-card__menu">
    <slot name="menu"></slot>
  </div>
</div>
</template>

<style lang="sass" scoped>
.mdl-card {
  width: 100%;
}
.mdl-card__title {
  position: relative;
  padding-top: 50%;
  background-color: #f2f2f2;
}
.mdl-spinner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.mdl-textfield {
  width: 100%;
}
</style>