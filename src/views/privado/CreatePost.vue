<template>
  <div class="createpost">
    <form action="" method="post">
        <label for="title">Titulo: <input type="text" name="title" id="title"></label>
        <br>
        <label for="body">Texto: <textarea name="body" id="body" cols="30" rows="10"></textarea></label>

        <button>Enviar</button>
    </form>
  </div>
</template>

<script>
// import api from '../../services/api';

export default {
  name: 'CreatePost',
  // async createPost(title, body){
  //   console.log(title, body);
  //   try {
  //     await api.post('posts'
  //     );
  //   }catch (Erro){
  //     console.log("erro", Erro);
  //   }
  // }
}
</script>
