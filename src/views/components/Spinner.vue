<template>
    <div class="spinner">
<div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
</div>
</div>
</template>

<script>
export default {
  name: "spinner",
};
</script>

<style>
 .spinner {
    position: fixed;
    top: 45%;
    width: 3rem;
    height: 3rem;
    margin: auto;
    /* background: rgba(0, 0, 0, .5); */
    z-index: 999;
    left: 0px;
    right: 0px;
    text-align: center;
 }
</style>
