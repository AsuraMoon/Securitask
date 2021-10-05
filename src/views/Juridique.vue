<template>
  <!--Templates avec les flashcards (importées depuis "npm i vue-flashcard") sur les textes de loi -->
  <ul class="responsive">
    <vue-flashcard 
    front="Code de Déontologie" 
    back="Ensemble des droits et devoirs qui régissent une profession"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Définition"
    headerBack=""
    footerFront=""
    footerBack="R-631-1 : Champ D'application"
    bordure="15px solid #231FB8">
    </vue-flashcard>

    <vue-flashcard 
    front="Moyen de diffusion du code de Déontologie" 
    back="Via des formations, des annexes au contrat et des affichages"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="R-631-1 : Diffusion"
    bordure="15px solid #231FB8">
    </vue-flashcard>

    <vue-flashcard 
    front="But de la Palpation de Sécurité" 
    back="Détection d'objets dangeureux, notamment le creux des mains"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack="Pensez à l'annoncer au préalable"
    footerFront=""
    footerBack="Article-L613-2"
    bordure="15px solid #231FB8">
    </vue-flashcard>

    <vue-flashcard 
    front="Zones corporelles lors d'une palpation" 
    back="Aisselles / Ceinture abdominale / Creux lombaires.
    De haut en bas, chapeau et chaussures compris !"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack="Pensez à l'annoncer au préalable"
    footerFront=""
    footerBack="Article-L613-2"
    bordure="15px solid #231FB8">
    </vue-flashcard>

    <vue-flashcard 
    front="CONTRAVENTION" 
    back="Tribunal de Police + 5 classes d'amendes de 38€ à 1500€"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Infractions du Code Pénal"
    headerBack=""
    footerFront=""
    footerBack="Réf. : Article 111-1"
    bordure="15px solid #231FB8">
    </vue-flashcard>

    <vue-flashcard 
    front="DELIT" 
    back="Tribunal correctionnel + sanction pécuniaire et/ou emprisonnement"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Infractions du Code Pénal"
    headerBack=""
    footerFront=""
    footerBack="Réf. : Article 111-1"
    bordure="15px solid #231FB8">
    </vue-flashcard>

    <vue-flashcard 
    front="CRIME" 
    back="Cour d'assises + sanction pécuniaire et/ou emprisonnement"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Infractions du Code Pénal"
    headerBack=""
    footerFront=""
    footerBack="Réf. : Article 111-1"
    bordure="15px solid #231FB8">
    </vue-flashcard>

    <vue-flashcard 
    front="Durée de validité de la carte Pro" 
    back="Elle est valable 5 ans"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Réf. : Article R612-13"
    bordure="15px solid #231FB8">
    </vue-flashcard>

    <vue-flashcard 
    front="Organisme en charge de la délivrance de la carte Pro Matérialisée" 
    back="L'entreprise dans laquelle vous travaillez"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack="La CNAPS donne la validation uniquement à l'employeur"
    footerFront=""
    footerBack="Réf. : Article R631-3: Diffusion"
    bordure="15px solid #231FB8">
    </vue-flashcard>

    <vue-flashcard 
    front="Autorité délivrant l'autorisation du port d'arme de catégorie D" 
    back="Le préfet du département"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Réf. : Article L 2331-1: code de la défense"
    bordure="15px solid #231FB8">
    </vue-flashcard>

    <vue-flashcard 
    front="Article 53" 
    back="Flagrant Délit"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="La main dans le sac"
    bordure="15px solid #231FB8">
    </vue-flashcard>

    <vue-flashcard 
    front="Article 73" 
    back="Droit d'appréhension"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack=""
    bordure="15px solid #231FB8">
    </vue-flashcard>

    <vue-flashcard 
    front="Article 311-1" 
    back="Vol"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack=""
    bordure="15px solid #231FB8">
    </vue-flashcard>

    <div  class="d-flex" v-for="carte in cards" :key="carte.id" >
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
        .where("categorie", "==", "Juridique")
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