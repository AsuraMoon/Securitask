<template>
    <div class="Admin">
        <!--Route vers home-->
        <router-link to="/">
            <section>
                Retour 
            </section>
        </router-link>

        <h1 class="titre d-flex justify-center">
            Bienvenue dans la page Administration Valérie
        </h1>        

        <h2 class="d-flex justify-center">
            Pour créer ou modifier une carte, veuillez remplir les champs suivants:
        </h2>

        <!--Mise en place de champ pour remplir les propriétés des cartes en appelant leurs noms -->
        <div class="responsive">
            <div class="col-md-5 col-sm-8">
                <input v-model="carte.categorie" placeholder="Catégories" class="sunny">

                <select class="liste" size="1">
                    <option>
                        Acronymes
                    </option>

                    <option>
                        Incendie
                    </option>

                    <option>
                        Juridique
                    </option>

                    <option>
                        Pictogrammes
                    </option>

                    <option>
                        Reflexes (Module Pro)
                    </option>

                    <option>
                        Secourisme
                    </option>
                </select>

                <input class="front" type="text" placeholder="Entête Avant" v-model="carte.headerFront">

                <input class="front" type="text" placeholder="Contenu Avant" v-model="carte.front">

                <input class="front" type="text" placeholder="Pied de page Avant" v-model="carte.footerFront">

                <input class="front" type="text" placeholder="URL image Avant" v-model="carte.imgFront">
            </div>

            <div class="col-md-5 col-sm-8">
                <input class="back" type="text" placeholder="Entête Arrière" v-model="carte.headerBack" >

                <input class="back" type="text" placeholder="Contenu Arrière" v-model="carte.back" >

                <input class="back" type="text" placeholder="Pied de page Arrière" v-model="carte.footerBack" >

                <input class="back" type="text" placeholder="URL image Arrière" v-model="carte.imgBack" >

                <input type="text" v-model="carte.bordure" class="sunny">

                <select class="liste" name="couleurs" size="1">

                    <option>
                        C29F00 = Acronymes
                    </option>

                    <option>
                        8B0000 = Incendie
                    </option>

                    <option>
                        231FB8 = Juridique
                    </option>
                    
                    <option>
                        808080 = Reflexes (Module Pro)
                    </option>

                    <option>
                        BA55D3 = Pictogrammes
                    </option>

                    <option>
                        008000 = Secourisme
                    </option>

                </select>
            </div>
        </div>
        <button @click="saveData(carte)" id="save">
            Sauvegarder
        </button>



        <ul class="responsive">
            <!--Boucle sur les cartes qu'on va recupérer juste après-->
            <div v-for="carte in cards" :key="carte.categorie" > 

                <!--Fonction Update du CRUD via l'evenement onClick -->
                <button @click="update(carte)" id="modify">
                    Modifier
                </button>

                <!--Fonction Delete du CRUD via l'evenement onClick -->
                <button @click="deleteCard(carte)" id="delete">
                    Supprimer
                </button>

                <!--Insertion des valeurs de chaque carte dans le component flashcard-->
                <vue-flashcard
                :categorie="carte.data().categorie" 
                colorFront=wheat
                colorBack=#B2CAF5
                colorTextBack="white"
                colorTextFront="black"
                :headerFront="carte.data().headerFront"
                :headerBack="carte.data().headerBack"
                :front="carte.data().front"
                :back="carte.data().back"
                :footerFront="carte.data().footerFront"
                :footerBack="carte.data().footerBack"
                :bordure="carte.data().bordure"
                :imgFront="carte.data().imgFront"
                :imgBack="carte.data().imgBack">
                </vue-flashcard>

            </div>
        </ul>

        <!--Fonction Logout pour se deconnecter -->
        <button @click="Logout">
            Se deconnecter
        </button> 

    </div>
</template>



<script>
    // Import de firebase, firestore, le composant flashcard, & la BDD
    import firebase from 'firebase';
    import 'firebase/firestore';
    import vueFlashcard from '../components/vue-flashcard/flashcard.vue';
    import db from '../main.js';


    // Export du composant pour les views
    export default ({
        components : { vueFlashcard },
        name: 'cards',
        props: {
            msg: String
        },

        data(){
            return{
                cards: [],
                // On retourne les propriétés de la carte afin de les recuperer dans la vue   
                carte: { 
                    categorie: '',
                    headerFront: '',
                    front:'',
                    footerFront:'',
                    headerBack: '',
                    back:'',
                    footerBack:'',
                    bordure:'15px Solid #Couleur',
                    imgFront:'',
                    imgBack:''
                },
            }
        },

        created() {
            this.readData();
        },

        methods: {
            // Fonction pour se deconnecter
            Logout() {
                firebase
                .auth()
                .signOut()
                .then(() => {
                    alert('vous êtes bien déconnecté(e)');
                    this.$router.push('/Login');
                })
                .catch(error => {
                    alert(error.message);
                });
            },

            // Fonction pour supprimer l'ID d'un document dans firestore par conséquent le document complet
            deleteCard(doc){
                console.log(doc.id);
                if(confirm('Are you sure?')){
                db.collection("cards")
                .doc(doc.id)
                .delete()
                .then(() => {
                    console.log("Document successfully deleted!", doc.id);
                    })
                    .catch((error) => {
                    console.error("Error removing document: ", error);
                    });
                } 
                else{
                }
            },

            // Fonction servant à lire les documents dans firestore grâce à la récupération des données et la redirection vers cards[]
            readData(){
                // console.log("debut")
                db.collection("cards")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                    //console.log("allez pousse")
                    this.cards.push(doc);
                    console.log(doc.id, " => ", doc.data());
                    //console.log("fin")
                    });
                });
            },

            // Fonction servant à enregistrer les données dans firestore
            saveData(){
                // console.log('sauvé');
                db.collection('cards')
                .add(this.carte)
                .then((doc) => {
                    console.log("document written with ID:", doc.id);
                })
                .catch((error) =>{
                    console.log("error adding document:", error);        
                });
            },

            // Fonction permettant de modifier les données dans le document sur lequel on applique la fonction
            update(doc){
                db.collection("cards")
                .doc(doc.id)
                .update({
                    categorie: this.carte.categorie,
                    headerFront: this.carte.headerFront,
                    front: this.carte.front,
                    footerFront: this.carte.footerFront,
                    headerBack: this.carte.headerBack,
                    back: this.carte.back,
                    footerBack: this.carte.footerBack,
                    bordure: this.carte.bordure,
                    imgFront: this.carte.imgFront,
                    imgBack: this.carte.imgBack
                })
                .then(() => {
                console.log("Document successfully updated!", this.carte);
                })
                .catch((error) => {
                console.error("Error updating document: ", error);
                });
            },
        }
    });
</script>

<style scoped>

    input{
        padding-left:5px;
    }

    .sunny{
        border:3px solid;
        border-radius:5px;
        border-color: rgba(255,0,0,1) rgba(255,248,0,1) rgba(18,255,0,1) rgba(0,108,255,1);
        margin-right:6px;
    }

    #modify{
        color:blue !important;
    }

    #save{
        color:green !important;
    }

    #delete{
        color:red !important;
    }

    h1{
        margin-top:15px;
    }

    .front{
        background:wheat;
        border-radius:3px;
        margin:2px;
    }

    .back{
        background:#B2CAF5;
        border-radius:3px;
        margin:2px;
    }

    section{
        font-size:1em;
        color:black;
        border-radius:5px;
        background: linear-gradient(135deg, wheat, #B2CAF5);
        padding:10px;
        display:inline;
        margin-top:-60px;
        margin-right:-5px;

    }

    a{
        text-decoration:none;
        margin-bottom:15px;
    }

    section:hover{
        box-shadow: 0 0px 25px rgba(0, 0, 0, 0.4);
    }

    button{
        font-size:1em;
        color:black;
        border-radius:5px;
        background: linear-gradient(135deg, wheat, #B2CAF5);
        padding:10px;
        display:inline;
        margin:5px;
        margin-left:12px;
    }

    button:hover{
        box-shadow: 0 0px 25px rgba(0, 0, 0, 0.4);
    }

</style>