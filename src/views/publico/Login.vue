<template>
  <div class="login">
    <div class="title-box">
			<img src="../../assets/login-icon.png" class="login-icon"/>
			<h1>CoolPost</h1>
			<hr/>
			<p>Publish your articles, thoughts, ideas.</p>
		</div>
		<div class="form-container">
			<h1>Sing In</h1>
			<hr/>
			<form>
				<input placeholder="Username" />
				<input placeholder="Password" />
				<button>Login</button>
			</form>
		</div>
  </div>
</template>

<script>
//import api from '../../services/api';

export default {
  name: 'login',
}
</script>

<style scoped>
	.login {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: center;
	}

	.login-icon {
		max-width: 120px;
		margin-left: 50px;
	}

	h1 {
		font-weight: 900;
		font-size: 40px;
		margin: 0;
	}

	.title-box {
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color:#A591B6;
	}

	.title-box p {
		font-size: 24px;
	}

	.title-box hr {
		height: 2px;
		color: white;
		background-color: white;
		border-width: 0;
		width: 100%;
		padding: 0;
		margin: 0;
		margin: 4px 0;
	}

	.form-container {
		width: 50%;
		min-width: 240px;
	}

	.form-container h1 {
		color: #413737;
		font-size: 45px;
		margin: 0;
	}

	.form-container form {
		display: flex;
		flex-direction: column;
		margin: 0 20px;
	}

	.form-container form input{
		color: #746D6D;
		border: 0.5px solid #A591B6;
		border-left: 6px solid #A591B6;
		padding: 5px 8px;
		margin-bottom: 25px;
	}

	.form-container form button{
		background-color: #A591B6;
		border: 0;
		color: white;
		padding: 6px;
		font-weight: bold;
		margin-top: 10px;
	}

	.form-container hr {
		height: 2px;
		color: white;
		background-color: #B5A2A2;
		border-width: 0;
		width: 100%;
		margin: 6px 0 25px;
	}
</style>