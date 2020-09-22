<template>
  <div class="createandeditpost">
    <form action="" method="post">
        <label for="title">Titulo: <input type="text" name="title" id="title"></label>
        <br>
        <label for="body">Texto: <textarea name="body" id="body" cols="30" rows="10"></textarea></label>

        <button>Enviar</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'CreateAndEditPost',
  components: {
    
  }
}
</script>
