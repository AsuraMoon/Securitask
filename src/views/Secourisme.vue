<template>

  <ul class="responsive">
    <vue-flashcard 
    front="Danger" 
    back="Source ou situation pouvant nuire par blessure ou atteinte à la santé , dommage à la propriété , à l'environnement du lieu de travail ou une combinaison de ces éléments"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Définition"
    headerBack=""
    footerFront=""
    footerBack=""
    bordure="15px solid #008000">
    </vue-flashcard>


    <vue-flashcard 
    front="Familles de risques persistants" 
    back="Mécanique , Électrique , Thermique , Atmosphère toxique"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack="Capacité à identifier en amont toute situation dangereuse pour éviter l'accident"
    footerFront=""
    footerBack=""
    bordure="15px solid #008000">
    </vue-flashcard>

    <vue-flashcard 
    front="O.R.I.D." 
    back="Observer , Repérer , Imaginer et Définir les actions de préventions possibles"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Moyen mnémotechnique"
    headerBack=""
    footerFront=""
    footerBack=""
    bordure="15px solid #008000">
    </vue-flashcard>

    <vue-flashcard 
    front="Dégagement d'urgence" 
    back="Le dégagement d'urgence est une manoeuvre exceptionnelle, elle peut être dangereuse si la victime est atteinte d'un traumatisme"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Défintion"
    headerBack=""
    footerFront=""
    footerBack=""
    bordure="15px solid #008000">
    </vue-flashcard>

    <vue-flashcard 
    front="Dégagement d'Urgence" 
    back="Eloigner le plus rapidement possible une victime d'un danger que l'on ne peut contrôler ou supprimer."
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Objectif"
    headerBack=""
    footerFront=""
    footerBack=""
    bordure="15px solid #008000">
    </vue-flashcard>

    <vue-flashcard 
    front="Dégagement d'urgence" 
    back="Danger initial pouvant persister / Situation pouvant s'aggraver / L'accident pouvant générer un danger"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Circonstances"
    headerBack=""
    footerFront=""
    footerBack=""
    bordure="15px solid #008000">
    </vue-flashcard>

    <vue-flashcard 
    front="Dégagement d'urgence" 
    back="Victime visible et facile à atteindre / Action de sauvetage ne mettant pas en danger le sauveteur"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Conditions"
    headerBack=""
    footerFront=""
    footerBack=""
    bordure="15px solid #008000">
    </vue-flashcard>

    <vue-flashcard 
    front="Conduite à tenir en cas de dégagement d'urgence" 
    back="DEGAGER au plus vite si victime visible et accessible , SE FAIRE AIDER si nécessaire. (RAPIDITÉ = priorité)"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Par chevilles ou par poignets"
    bordure="15px solid #008000">
    </vue-flashcard>

    <vue-flashcard 
    front="P.L.S." 
    back="Position Latérale de Sécurité"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Défintion"
    headerBack=""
    footerFront=""
    footerBack="Victime inconsciente MAIS RESPIRE"
    bordure="15px solid #008000">
    </vue-flashcard>

    <vue-flashcard 
    front="R.C.P." 
    back="Réanimation Cardio - Pulmonaire"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront="Défintion"
    headerBack=""
    footerFront=""
    footerBack="Victime inconsciente MAIS NE RESPIRE PAS"
    bordure="15px solid #008000">
    </vue-flashcard>

    <vue-flashcard 
    front="Conduite à tenir en cas de brûlures thermiques" 
    back="SUPPRIMER la cause , REFROIDIR à l'eau , DEMANDER un avis médical."
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack="En attente des secours -> Surveiller + rassurer."
    footerFront=""
    footerBack=""
    bordure="15px solid #008000">
    </vue-flashcard>

    <vue-flashcard 
    front="Conduite à tenir en cas de plaie au thorax" 
    back="POSITION DEMI ASSISE pour rendre la respiration de la victime plus facile."
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack="En attente des secours -> Type plaies graves."
    footerFront=""
    footerBack=""
    bordure="15px solid #008000">
    </vue-flashcard>

    <vue-flashcard 
    front="Conduite à tenir en cas de corps étranger dans une plaie" 
    back="NE JAMAIS RETIRER car risque d'aggravation des lésions ou du saignement."
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack="En attente des secours + instructions -> Surveiller + rassurer + protéger."
    footerFront=""
    footerBack=""
    bordure="15px solid #008000 ">
    </vue-flashcard><!--qcm de 2x7-->


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
        .where("categorie", "==", "Secourisme")
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