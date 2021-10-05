<template>
  <div class="container-app">

        <div class="container-quiz">
          <div class="header-quiz">
            <h1></h1>
          </div>
          <div class="step-progress" :style="{'width':progress + '%'}"></div>
          <div class="box" v-for="(question,index) in questions.slice(a,b)" :key="index" v-show="quiz">
              
              <div class="box-question">
                <h2>Question {{b}}/{{questions.length}}</h2>
                <p>{{question.question}}</p>
              </div>
              <div class="box-propositions">
                <ul>
                  <li v-for="(proposition,index) in question.propositions" :key="index" class="li" @click="selectResponse(proposition,index)" :class=" correct ? check(proposition) : ''">{{proposition.props}} <div class="fas fa-check" v-if="correct ?  proposition.correct: ''"></div><div class="fas fa-times" v-if="correct ?  !proposition.correct: ''"></div></li>
                  
                </ul>
              </div>              
          </div>
          
          <div class="box-score" v-if="score_show">
              
              
              <h2>Ton score :</h2>
              <h2>{{score}}/{{questions.length}}</h2>
              <div class="btn-restart">
                  <button @click="restartQuiz">Recommencer<i class="fas fa-sync-alt"></i></button>
              </div>
          </div>
          <div class="footer-quiz">
                <div v-if="progress < 100" class="box-button">
                    <button  @click="skipQuestion()" :style="next ? 'background-color: rgb(106, 128, 202)' : ''">Ignorer</button>
                    <button  @click="nextQuestion()" :style="!next ? 'background-color: rgb(106, 128, 202)' : ''">Suivante</button>
                </div>  
                  
                  
                  
          </div>
          
          
            
        </div>
  </div>
</template>

<script>

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default {
  data(){
    return{
      questions:[
        { id:"1",
          question:"Que signifie B.A.E.S. ?",
          propositions:[
            {props:'Bloc Autonome d\'Eclairage de Sécurité',correct:true},
            {props:'Bloc Automatique d\'Eclairage de Sauvetage'},
            {props:'Bloc Automatique d\'Eclairage de Sécurité'},
            {props:'Bloc Autonome d\'Eclairage de Sauvetage'},
          ]
        },
        { id:"2",
          question:"Que signifie B.A.P.I. ?",
          propositions:[
            {props:'Bloc Automatique et Pratique d\'Intervention'},
            {props:'Bloc Autonome et Pratique d\'Intervention'},
            {props:'Bloc Automatique Portable d\'Intervention'},
            {props:'Bloc Autonome Portable d\'Intervention',correct:true},
          ]
        },
        { id:"3",
          question:"Que signifie C.C.H. ?",
          propositions:[
            {props:'Code de la Circulation et des Homologation '},
            {props:'Code des Circonscription et des Habitations'},
            {props:'Code de la Construction et des Homologation'},
            {props:'Code de la Construction et de l\'Habitation',correct:true},
          ]
        },       
        { id:"4",
          question:"Que signifie C.N.I.L. ?",
          propositions:[
            {props:'Code National des Irrégularités et des Lois'},
            {props:'Code National de l\'Information et des Libertés'},
            {props:'Commission Nationale de l\'Information et des Libertés',correct:true},
            {props:'Commission Nationale de l\'Information et des Lois'},
          ]
        },       
        { id:"5",
          question:"Que signifie D.A.T.I. ?",
          propositions:[
            {props:'Dispositif d\'Analyse des Tâches Imcomplètes'},
            {props:'Dispositif d\'Anticipation des Tâches Imposibles'},
            {props:'Dispositif d\'Analyse des Tâches Isolées'},
            {props:'Dispositif d\'Alerte pour Travailleur Isolé',correct:true},
          ]
        },       
        { id:"6",
          question:"Que signifie E.E.I.?",
          propositions:[          
            {props:'Engins Explosifs à Inductions',},
            {props:'Engins Explosifs Improvisés',correct:true},
            {props:'Engins Electroniques Improvisés',},
            {props:'Engins Electroniques à Inductions',},
          ]          
        },
        { id:"7",
          question:"Que signifie E.R.P. ?",
          propositions:[
            {props:'Etablissement Recevant du Public',correct:true},
            {props:'Etablissement Recevant du Patrimoine'},
            {props:'Etablissement Reservé au Public'},
            {props:'Etablissement Restreint au Public'},            
          ]          
        },
        { id:"8",
          question:"Que signifie I.G.H. ?",
          propositions:[
            {props:'Image de Grande Hauteur'},
            {props:'Interruption de Grossesses Hâtif'},
            {props:'Immeuble de Grande Hauteur',correct:true},
            {props:'Immeuble de Grossier et Hautain'},            
          ]          
        },
        { id:"9",
          question:"Que signifie P.P.R.T. ?",
          propositions:[
            {props:'Plan de Prévention des Risques Techniques'},
            {props:'Plan de Prévention des Risques Technologiques',correct:true},
            {props:'Plan de Préparation des Rotations Technologiques'},
            {props:'Plan de Préparation des Rotations Techniques'},            
          ]          
        },
        { id:"10",
          question:"Que signifie S.S.I. ?",
          propositions:[
            {props:'Système de Sécurité Impovisés'},
            {props:'Système de Sanitaire Impovisés'},
            {props:'Système de Sécurité Incendie',correct:true},
            {props:'Système de Sécurité Imprévu'},            
          ]          
        },
      ],
      a:0,
      b:1,
      next:true,
      score_show:false,
      quiz:true,
      score:0,
      correct:false,
      progress:0,
      
    }
  },
  name: 'App',
  components: {
    //HelloWorld
  },
  computed:{
      
  },
  methods:{
    
    selectResponse(e){
      this.correct = true;
      this.next = false;
      if (e.correct) {
        this.score++;
      }
    },
    check(status){
        if (status.correct) {
          return 'correct'
        }else{
          return 'incorrect' 
        }
    },
    nextQuestion(){
      if (this.next) {
        return;
      }
      this.progress = this.progress + (100/this.questions.length);
      if(this.questions.length - 1 == this.a){
        this.score_show = true;
        this.quiz = false;    
      }
      else{
        this.a++;
        this.b++;
        this.correct = false;
        this.next = true;
        
      }
      
    },
    skipQuestion(){
      if (!this.next) {
        return;
      }
      this.progress = this.progress + (100/this.questions.length);
      if(this.questions.length - 1 == this.a){
        this.score_show = true;
        this.quiz = false;
        
        
      }else{
        this.a++;
        this.b++;
        
      }
      
    },
    
    restartQuiz(){
      
      Object.assign(this.$data, this.$options.data()); // reset data in vue
       
    },
    
  }
}
</script>

<style>

.v-application ul, .v-application ol{
  padding: 0;
}

.container-app {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin-top: 25px;
}

.container-quiz {
    display: flex;
    width: 40%;
    height: 85%;
    background-color: white;
    text-align: center;
    flex-flow: column;
    border: 1px solid #e7eae0;
    border-radius: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.header-quiz {
    display: flex;
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #e7eae0;
    justify-content: center;
    align-items: center;
    background-color: #e7eae0;
    border-radius: 10px 10px 0px 0px;
}

.container-quiz .box {
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
    margin: auto;
}

.box-question {
    margin-top: 20px;
}

.box-question p {
    margin-top: 20px;
}

.box-propositions {
    margin: auto;
    display: flex;
    width: 100%;
    justify-content: center;
}

ul {
    display: flex;
    width: 80%;
    margin: 0;
    padding: 0;
    flex-flow: column;
}

li {
    list-style: none;
    line-height: 2;
    border: 1px solid #cdd2d2;
    margin-bottom: 20px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s;
}

li:hover {
    /*transform: scale(1.1);*/
    background-color: #e7eae0;
}

li>div {
    float: right;
    margin-top: 7px;
    margin-right: 7px;
    color: white;
}

.check {
    color: rgb(74, 219, 74);
}

.close {
    color: rgb(240, 117, 100);
}

.footer-quiz {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    border-top: 1px solid #e7eae0;
    background-color: #e7eae0;
    border-radius: 0px 0px 10px 10px;
}

.box-button {
    display: flex;
    width: 100%;
}

.footer-quiz .box-button button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 10px;
    letter-spacing: 2px;
    background-color: #a09f9ff5;
}

li.correct {
    border: 1px solid rgb(74, 219, 74);
    background-color: rgb(74, 219, 74);
    color: white;
    font-weight: 600;
}

li.incorrect {
    border: 1px solid rgb(240, 117, 100);
    background-color: rgb(240, 117, 100);
    color: white;
    font-weight: 600;
}

.box-score {
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
}

.box-score h2 {
    margin-top: 40px;
}

i {
    display: none;
    color: white;
}

.step-progress {
    display: flex;
    width: 100%;
    height: 5px;
    background-color: rgb(106, 128, 202);
    transition: 0.5s;
}

.btn-restart {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 50px;
}

.btn-restart button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    background-color: rgb(106, 128, 202);
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 10px;
    letter-spacing: 2px;
}

.next {
    background-color: rgb(106, 128, 202);
}

@media screen and (max-width: 900px) {
    .container-quiz {
        width: 60%;
    }
}

@media screen and (max-width: 720px) {
    .container-quiz {
        width: 80%;
    }
    .footer-quiz .box-button button {
        width: 100px;
    }
}
</style>