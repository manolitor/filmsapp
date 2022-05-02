<template>
    <div>
        <h1>Registro</h1>
        <form class="custom-form" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="username">Nombre de usuario:</label>
                <input v-model="username" type="text" class="form-control" id="username" placeholder="Usuario" />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="Email" />
            </div>
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Contraseña" />
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Registrarse</button>
            </div>
        </form>
    </div>
</template>

<script>
    import * as auth from '../../services/AuthService'

    export default {
        name: 'register',
        data: function() {
            return {
                username: '',
                email: '',
                password: '',
            }
        },
        methods: {
            onSubmit: async function() {
                const user = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                }
                await auth.registerUser(user)
                this.$router.push({ name: 'home' })
            }
        }
    }
</script>