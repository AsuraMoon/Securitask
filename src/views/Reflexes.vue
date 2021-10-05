<template>
  <ul class="responsive">
     <vue-flashcard 
      front="Qualités principales de l'APS" 
      back="Discrétion, Observation, Ponctualité, Sobriété, Probité, Sang-Froid"
      colorFront="wheat"
      colorBack=#B2CAF5
      colorTextBack="black"
      colorTextFront="black"
      headerFront=""
      headerBack=""
      footerFront=""
      footerBack="Tu l'avais ?"      
      bordure="15px solid #808080">
      </vue-flashcard>

      <vue-flashcard 
      front="Bases de la communication" 
      back="Verbale, Para-verbale, Non-verbale"
      colorFront="wheat"
      colorBack=#B2CAF5
      colorTextBack="black"
      colorTextFront="black"
      headerFront=""
      headerBack=""
      footerFront=""
      footerBack="Tu l'avais ?"      
      bordure="15px solid #808080">
      </vue-flashcard>

      <vue-flashcard 
      front="Réflexes messages P.C.S." 
      back="Test radio, Articuler, Ne PAS hurler, Phrases courtes, Confirmer le message"
      colorFront="wheat"
      colorBack=#B2CAF5
      colorTextBack="black"
      colorTextFront="black"
      headerFront=""
      headerBack=""
      footerFront=""
      footerBack="Tu l'avais ?"
      bordure="15px solid #808080">
      </vue-flashcard>

      <vue-flashcard 
      front="Principes de contrôle d'accès" 
      back="Demande d'accès, Autorisations d'accès, Laissez-Passer"
      colorFront="wheat"
      colorBack=#B2CAF5
      colorTextBack="black"
      colorTextFront="black"
      headerFront=""
      headerBack=""
      footerFront=""
      footerBack="Tu l'avais ?"
      bordure="15px solid #808080">
      </vue-flashcard>

      <vue-flashcard 
      front="Equipements rondier" 
      back="Radio, Contrôleur de ronde, Clé/Passe, DATI, Carnet&Stylo, Sifflet, Lampe-Torche, Montre"
      colorFront="wheat"
      colorBack=#B2CAF5
      colorTextBack="black"
      colorTextFront="black"
      headerFront=""
      headerBack=""
      footerFront=""
      footerBack="Tu l'avais ?"
      bordure="15px solid #808080">
      </vue-flashcard>

      <vue-flashcard 
      front="Types de points de surveillance" 
      back="Dangereux , Sensibles , Vulnérables , Névralgiques"
      colorFront="wheat"
      colorBack=#B2CAF5
      colorTextBack="black"
      colorTextFront="black"
      headerFront=""
      headerBack=""
      footerFront=""
      footerBack="Tu l'avais ?"
      bordure="15px solid #808080">
      </vue-flashcard>

      <vue-flashcard 
      front="Main courante" 
      back="Registre servant à consigner les faits journaliers"
      colorFront="wheat"
      colorBack=#B2CAF5
      colorTextBack="black"
      colorTextFront="black"
      headerFront="Définition"
      headerBack="Heure, Date, Paraphe, et Numérotation !"
      footerFront="C'EST PAS UNE MAIN QUI COURT VITE!"
      footerBack="Tu l'avais ?"
      bordure="15px solid #808080">
      </vue-flashcard>

      <vue-flashcard 
      front="Compte-rendu écrit" 
      back="Courrier à rédiger en cas d'anomalies/d'incidents"
      colorFront="wheat"
      colorBack=#B2CAF5
      colorTextBack="black"
      colorTextFront="black"
      headerFront="Définition"
      headerBack="Ou, Quand, Quoi, Comment, et Ma réaction"
      footerFront=""
      footerBack="Tu l'avais ?"
      bordure="15px solid #808080">
      </vue-flashcard>

    <div v-for="carte in cards" :key="carte.id" >
      <vue-flashcard
      :categorie="carte.data().categorie" 
      :front="carte.data().front"
      :back="carte.data().back"
      colorFront="wheat"
      colorBack=#B2CAF5
      colorTextBack="black"
      colorTextFront="black"
      :headerFront="carte.data().headerFront"
      :headerBack="carte.data().headerBack"
      :footerFront="carte.data().footerFront"
      :footerBack="carte.data().footerBack"
      :bordure="carte.data().bordure"
      :imgFront="carte.data().imgFront"
      :imgBack="carte.data().imgBack">
      </vue-flashcard>
    </div>
  </ul>
</template>

<script>
  import vueFlashcard from '../components/vue-flashcard/flashcard.vue';
  import firebase from 'firebase';
  import 'firebase/firestore';
  import db from '../main.js';

  export default {
    components : { vueFlashcard },
    name: 'cards',
    props: {
      msg: String
    },

    data(){
      return{
        cards: [],
        carte: { 
          categorie: '',
          headerFront: '',
          front:'',
          footerFront:'',
          headerBack: '',
          back:'',
          footerBack:'',
          bordure:'',
          imgFront:'',
          imgBack:''
        },
      }
    },

    created() {
      console.log("je suis monté")
      this.readData();
    },

    methods: {
      readData(){
        // console.log("debut")
        db.collection("cards")
        .where("categorie", "==", "Reflexes")
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
    }
  }
</script>