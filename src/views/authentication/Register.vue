<template>
    <div>
        <h1>Register</h1>
        <form class="custom-form" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="username">Nombre de usuario:</label>
                <input v-model="username" type="text" class="form-control" id="username" placeholder="Username" />
            </div>
            <div class="form-group">
                <label for="username">Nombre:</label>
                <input v-model="first" type="text" class="form-control" id="first" placeholder="first" />
            </div>
            <div class="form-group">
                <label for="username">Apellido:</label>
                <input v-model="last" type="text" class="form-control" id="last" placeholder="last" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" />
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
                password: '',
                first: '',
                last: ''
            }
        },
        methods: {
            onSubmit: async function() {
                const user = {
                    username: this.username,
                    password: this.password,
                    first: this.first,
                    last: this.last
                }
                await auth.registerUser(user)
                this.$router.push({ name: 'home' })
            }
        }
    }
</script>