<template>

  <!-- Listing des cartes nouvelles et anciennes-->
  <ul class="responsive">

    <vue-flashcard 
    front="B.A.E.S.?" 
    back="Bloc Autonome Eclairage de Sécurité"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Que signifie l'acronyme "
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    bordure="15px solid #c29f00">
    </vue-flashcard>

    <vue-flashcard 
    front="B.A.P.I.?" 
    back="Bloc Autonome Portable d'Intervention"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Que signifie l'acronyme "
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    bordure="15px solid #c29f00">
    </vue-flashcard>

    <vue-flashcard 
    front="C.C.H.?" 
    back="Code de la Construction et de l'Habitation"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Que signifie l'acronyme "
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    bordure="15px solid #c29f00">
    </vue-flashcard>

    <vue-flashcard 
    front="C.N.I.L.?" 
    back="Commission Nationale de l'Information et des Libertés"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Que signifie l'acronyme "
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    bordure="15px solid #c29f00">
    </vue-flashcard>

    <vue-flashcard 
    front="D.A.T.I.?" 
    back="Dispositif d'Alerte pour Travailleur Isolé"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Que signifie l'acronyme "
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    bordure="15px solid #c29f00">
    </vue-flashcard>

    <vue-flashcard 
    front="E.E.I.?" 
    back="Engins Explosifs Improvisés"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Que signifie l'acronyme "
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    bordure="15px solid #c29f00">
    </vue-flashcard> 

    <vue-flashcard 
    front="E.R.P. ?" 
    back="Etablissement Recevant du Public"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Que signifie l'acronyme "
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    bordure="15px solid #c29f00">
    </vue-flashcard>

    <vue-flashcard 
    front="I.G.H. ?" 
    back="Immeuble de Grande Hauteur"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Que signifie l'acronyme "
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    bordure="15px solid #c29f00">
    </vue-flashcard> 

    <vue-flashcard 
    front="P.P.R.T.?" 
    back="Plan de Prévention des Risques Technologiques"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Que signifie l'acronyme "
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    bordure="15px solid #c29f00">
    </vue-flashcard>

    <vue-flashcard 
    front="S.S.I.?" 
    back="Système Sécurité Incendie"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Que signifie l'acronyme "
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    bordure="15px solid #c29f00">
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
        .where("categorie", "==", "Acronymes")
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