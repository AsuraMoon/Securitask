<template>
  <ul class="responsive">
    <vue-flashcard 
    front="Triangle du Feu" 
    back="Combustible, Comburant, Energie d'activation"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack=""
    bordure="15px solid #8B0000">
    </vue-flashcard>

    <vue-flashcard 
    front="Convection" 
    back="Transmission de la chaleur par l'intermédiaire de l'air"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Chaleur/ Transmission/ Appel d'air"
    bordure="15px solid #8B0000">
    </vue-flashcard>

    <vue-flashcard 
    front="Rayonnement Thermique" 
    back="Déplacement par l'intermédiaire d'ondes électromagnétiques"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Absorption par un corps récepteur chauffé par rayonnement"
    bordure="15px solid #8B0000">
    </vue-flashcard>

    <vue-flashcard 
    front="Hauteur d'implantation d'un extincteur" 
    back="Poignée accessible à 1.20m du sol"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Visible/ Accessible/ sans gêner la circulation"
    bordure="15px solid #8B0000">
    </vue-flashcard>

    <vue-flashcard 
    front="Autorité délivrant le permis feu" 
    back="Le chef d'établissement ou son représentant"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="3 exemplaires -> donneur d'ordre/ dirigeant/ agent "
    bordure="15px solid #8B0000">
    </vue-flashcard>

    <vue-flashcard 
    front="Agents extincteurs" 
    back="Eau, Poudre, CO2 (dioxyde de carbone), Poudre pour feux de métaux"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack=""
    bordure="15px solid #8B0000">
    </vue-flashcard>

    <vue-flashcard 
    front="Classes de feux" 
    back="A (solide), B (liquide), C (gaz), D (métaux), F (cuisson)"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack=""
    bordure="15px solid #8B0000">
    </vue-flashcard>

    <vue-flashcard 
    front="Hauteur des I.G.H." 
    back="H + 200m -> Immeuble de Très Grande Hauteur / H + 50m -> habitations / H + 28m -> autres immeubles"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Article R122-2/R122-5 du C.C.H."
    bordure="15px solid #8B0000">
    </vue-flashcard>

    <vue-flashcard 
    front="E.R.P. de type W" 
    back="Administrations, banques, bureaux"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Article R123-2 du C.C.H."
    bordure="15px solid #8B0000">
    </vue-flashcard>

    <vue-flashcard 
    front="E.R.P. de 3ième catégorie" 
    back="De 301 à 700 personnes"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Article R123-14 du C.C.H./ 5ième catégorie"
    bordure="15px solid #8B0000">
    </vue-flashcard>

    <div v-for="carte in cards" :key="carte.id" >
      <vue-flashcard
      :categorie="carte.data().categorie" 
      :front="carte.data().front"
      :back="carte.data().back"
      colorFront=wheat
      colorBack=#BCAAA4
      colorTextBack="white"
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
        .where("categorie", "==", "Incendie")
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