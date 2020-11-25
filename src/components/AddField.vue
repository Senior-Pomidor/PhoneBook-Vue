<template>
	<div class="aadd-contact">
		<h2>Add Contact</h2>
		<form class="add-contact__form form-add">
			<div class="form-add__input-field">
				<label for="add-contact__name">Name</label>
				<input class="form-add__input add-contact__input" type="text" id="add-contact__name" v-model="info.name">
			</div>

			<div class="form-add__input-field">
				<label for="add-contact__phone">Phone</label>
				<input class="form-add__input add-contact__input" type="text" id="add-contact__phone" v-model="info.phone">
			</div>

			<div class="form-add__input-field">
				<label for="add-contact__email">Email</label>
				<input class="form-add__input add-contact__input" type="text" id="add-contact__email" v-model="info.email">
			</div>

			<div class="form-add__input-field">
				<button class="form-add__btn add-contact__btn form-add__btn--cancel" @click.prevent="close">Cancel</button>
				<button class="form-add__btn add-contact__btn form-add__btn--submit" @click.prevent="submit" type="submit">Add contact</button>
			</div>
		</form>
	</div>
</template>

// <style lang="scss" scoped>
// .aadd-contact {
// 	display: block;
// 	width: 500px;
// 	box-sizing: border-box;
// 	background-color: #fff;
// 	border: 1px solid #2f9e59;
// 	border-radius: 2px;
// 	margin-left: -250px;
// 	padding: 5px;
// 	box-shadow: 0px 10px 40px 20px #e1ffec;

// 	&__input {
// 		width: 60%;
// 	}
// }
// </style>