<template>
    <div>
        <form @submit.prevent="login"><!--event pour la fonction login -->
            <h3>Veuillez vous connecter pour accéder à la page d'administration</h3>
            <input type="email" placeholder="Email" v-model="email">
            <br>
            <input type="password" placeholder="Mot de passe" v-model="password">
            <br>
            <button type="submit">Se connecter</button>
            <br>
            <router-link class="loglink" to="/">Home</router-link>
            <br>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Home',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        // fonction pour se loger d'apres les identifiants préalablement declarés dans firebase
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Vous êtes bien connecté(e)');
                    this.$router.push('/Admin');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
    },
};
</script>

<style  scoped>
    form{
        
        height: 100%;
        
    }
    input{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
        
    }
    h3{
        text-align: center;
    }
    button {
        background-color: #BCAAA4;
        color: white;
        padding: 10px 20px;
        margin: 10px 0 20px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }
    button:hover {
        opacity: 0.8;
    }
 
    .loglink {
        width: auto;
        padding: 10px 18px;
        background-color: #BCAAA4;
        color: white !important;
        text-decoration: none;
    }
    .loglink:hover{
        opacity: 0.8;
    }
</style>