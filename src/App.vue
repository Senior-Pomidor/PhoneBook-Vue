<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Contacts</router-link>
      <router-link :to="{name: 'Contact', params: {id: 'id'}}">Contact</router-link>
    </div>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
a, button {
	cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  box-sizing: border-box;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
  background: rgb(248, 249, 251);
}

.form-add {
	width: 100%;
	max-width: 570px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	font-size: 1.3em;
	// border: 1px solid red;

	&__input-field {
		display: flex;
		justify-content: space-between;
		align-items: center;
		// border: 1px solid blue;
		padding: 10px 5px;

		&:not(:first-child) {
			margin-top: 10px;
		}

		&:not(:last-child) {
			border-bottom: 1px solid black;
		}
	}

	&__input {
		width: 45%;
		padding: 5px;
		border: 1px solid transparent;
		border-radius: 3px;
		background-color: #ebedf7;

		&:focus {
			background-color: transparent;
			border-color: #2f9e59;
			outline: none;
		}
	}

	&__btn {
		width: 140px;
		color: #fff;
		font-size: 1em;
		padding: 5px 10px;
		border-radius: 3px;
		border: none;
		outline: none;

		&--cancel {
			background-color: rgb(236, 78, 78);

			&:hover {
				background-color: rgb(207, 40, 40);
			}

			&:active {
				background-color: rgba(224, 81, 81, 0.767);
			}
		}

		&--submit {
			background-color: #2f9e59;

			&:hover {
				background-color: #118d40;
			}

			&:active {
				background-color: rgb(85, 212, 134);
			}
		}
	}
}
</style>
