<template>
  <div class="title-container">
    <h1 class="title">{{text}}</h1>
  </div>
</template>

<script>
export default {
  props: {
		text: String,
	},
}
</script>

<style scoped>
  .title {
    font-size: 32px;
    color: #413737;
  }

  .title-container {
    border-bottom: 2px solid #B5A2A2;
    margin: 0 40px;
  }
</style>