<template>

  <ul class="responsive">

    <vue-flashcard 
    front="" 
    back="Risques mutagènes"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    imgFront="https://www.signaclic.com/matieres-mutagenes-cancerogenes-toxiques-pour-la-reproduction-ou-pour-les-organes-sgh08-ig-3126.jpg"
    imgBack=""
    bordure="15px solid #BA55D3">
    </vue-flashcard>

    <vue-flashcard 
    front="" 
    back="Matières comburantes"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    imgFront="https://www.signaclic.com/matieres-comburantes-sgh03-ig-3121.jpg"
    imgBack=""
    bordure="15px solid #BA55D3">
    </vue-flashcard>

    <vue-flashcard 
    front="" 
    back="Vigipirate"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    imgFront="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Vigipirate_2014.svg/912px-Vigipirate_2014.svg.png"
    imgBack=""
    bordure="15px solid #BA55D3">
    </vue-flashcard>

    <vue-flashcard 
    front="" 
    back="Pont de rassemblement"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    imgFront="https://images-na.ssl-images-amazon.com/images/I/6186RL%2BwlTL._AC_SX466_.jpg"
    imgBack=""
    bordure="15px solid #BA55D3">
    </vue-flashcard>

    <vue-flashcard 
    front="" 
    back="Défibrillateur"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    imgFront="https://cdn-01.media-brady.com/store/stfr/media/catalog/product/d/m/dmeu_y1843255_01_std.lang.all.gif"
    imgBack=""
    bordure="15px solid #BA55D3">
    </vue-flashcard>

    <vue-flashcard 
    front="" 
    back="Déclencheur d’alarme sécurité"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    imgFront="https://www.la-girafe.com/7331-large_default/declencheur-manuel-dalarme-incendie-1937.jpg"
    imgBack=""
    bordure="15px solid #BA55D3">
    </vue-flashcard>

    <vue-flashcard 
    front="" 
    back="Robinet d'Incendie Armé"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    imgFront="https://i.pinimg.com/originals/6b/f5/fd/6bf5fdb79cdb2f4ba96fadcebeb94a52.png"
    imgBack=""
    bordure="15px solid #BA55D3">
    </vue-flashcard>

    <vue-flashcard 
    front="" 
    back="Porte coupe-feu"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    imgFront="https://cdn-01.media-brady.com/store/stfr/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/1563847340/d/m/dmeu_y4672967_01_std.lang.all.gif"
    imgBack=""
    bordure="15px solid #BA55D3">
    </vue-flashcard>
    
    <vue-flashcard 
    front="" 
    back="Chaise d’évacuation"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    imgFront="https://cdn-01.media-brady.com/store/sifr/media/catalog/product/cache/18/image/85e4522595efc69f496374d01ef2bf13/1563992264/s/i/sifr_ps99_1_std.lang.all.gif"
    imgBack=""
    bordure="15px solid #BA55D3">
    </vue-flashcard>

    <vue-flashcard 
    front="" 
    back="Danger électrique"
    colorFront="wheat"
    colorBack=#B2CAF5
    colorTextBack="black"
    colorTextFront="black"
    headerFront=""
    headerBack=""
    footerFront=""
    footerBack="Tu l'avais ?"
    imgFront="https://www.securinorme.com/15990-thickbox_default/pictogramme-iso-en-7010-electricite-w012.jpg"
    imgBack=""
    bordure="15px solid #BA55D3">
    </vue-flashcard>

    <!--Implatation des nouvelles cartes depuis l'admin et la base de données-->

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
        .where("categorie", "==", "Pictogrammes")
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