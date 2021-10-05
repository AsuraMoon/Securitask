<template>

  <v-app id="inspire">

    <!--Drawer (Menu latéral)-->
    <v-navigation-drawer
    v-model="drawer" app>
      <!--Contenu de l'en-tête Drawer-->
      <v-list-item>
        <!--Titre et sous-titre de l'en-tête drawer-->
        <v-list-item-content>
          <!--Titre de l'en-tête drawer-->
          <v-list-item-title class="title mb-2 pt-2 d-flex justify-center">
            CATEGORIES
          </v-list-item-title>

          <!--Sous-Titre de l'en-tête drawer-->          
          <v-list-item-subtitle>
            <!--INSERT HERE SUBTITLE-->
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <!--Contenu du Drawer-->
        <v-list>
          <!--Nom du déroulant-->
          <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action">

            <!--Déroulant-->
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                v-text="item.title">                    
                </v-list-item-title>
              </v-list-item-content>
            </template>

            <!--Itérations du Déroulant-->
            <v-list-item
              v-for="child in item.items"
              :key="child.title">

              <!--Nom des itérations + Liens-->  
              <v-list-item-content>
                <v-list-item
                v-text="child.title"
                :to="child.to">
                </v-list-item>
              </v-list-item-content>

            </v-list-item>

          </v-list-group>
        </v-list>
    </v-navigation-drawer>

    <!--Barre Globale en haut-->
    <v-app-bar app class="bouton">
      <v-app-bar-nav-icon @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <!--Titre de la barre globale (Nom de l'appli?)-->
      <v-toolbar-title class="title ml-16">
        <!--INSERER TITRE-->
      </v-toolbar-title>
      <router-link to="/Admin">Admin</router-link>
    </v-app-bar>

    <!--Zone MVC-->
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

  </v-app>

</template>

<script>
  //Les données du Drawer
  export default {
    data: () => ({
      drawer: null,
      items: [
        {
          action: 'mdi-home-account',
          items: [
            { title: 'Accueil', to:'/'},
            ],
          title: 'Home',
        },
        {
          action: 'mdi-alphabetical',
          items: [
            { title: 'Flash Acronymes', to:'/Acronymes'},
            { title: 'QCM Acronymes', to:'/QCM_Acronymes' }
            ],
          title: 'Acronymes',
        },
        {
          action: 'mdi-scale-balance',
          items: [
            { title: 'Flash Juridique', to:'/Juridique'},
            { title: 'QCM Juridique', to:'/QCM_Juridique' }
            ],
          title: 'Juridique',
        },
        {
          action: 'mdi-arrow-decision ',
          items: [
            { title: 'Flash Module Pro', to:'/Reflexes'},
            { title: 'QCM Module Pro', to:'/QCM_Reflexes' }
            ],
          title: 'Module Professionel',
        },
        {
          action: 'mdi-cancel',
          items: [
            { title: 'Flash Pictogrammes', to:'/Pictogrammes'},
            //{ title: 'QCM Pictogrammes', to:'/QCM_Pictogrammes' }
            ],
          title: 'Pictogrammes',
        },
        {
          action: 'mdi-fire',
          items: [
            { title: 'Flash Risques Incendie', to:'/Incendie'},
            { title: 'QCM Risques Incendie', to:'/QCM_Incendie' }
            ],
          title: 'Risques Incendie',
        },
        {
          action: 'mdi-hospital-box-outline',
          items: [
            { title: 'Flash Secourisme', to:'/Secourisme'},
            //{ title: 'QCM Secourisme', to:'/QCM_Secourisme' }
            ],
          title: 'Secourisme',
        },
        {
          action: 'mdi-information',
          items: [
            { title: 'Mentions Légales', to:'/Copyright' },
            { title: 'A propos', to:'/About' },
            ],
          title: 'En savoir plus',
        },
      ],
    }),
  }

</script>

<style>

  /** Classe responsive pour toutes les vues dépéndantes */
  .responsive{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    }

  *{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  li{
    display:inline;
    
  }

  ul{
    display:inline;
  }

  .v-toolbar__content a{
    color:black !important;
    margin-right:15px;
    display:flex;
    justify-content: flex-end;
    margin-left: auto;
    text-decoration: none;
  }

</style>



<!--items: [
{FAIT title: 'Home', icon: 'mdi-home-account', to:'/'},
{FAIT title: 'Acronymes', icon: 'mdi-alphabetical', to:'/Acronymes'},
{FAIT title: 'Pictogrammes', icon: 'mdi-cancel', to:'/Pictogrammes'},
{FAIT title: 'Risques Incendie', icon: 'mdi-fire', to:'/Incendie'},
{FAIT title: 'Secourisme', icon: 'mdi-hospital-box-outline', to:'/Secourisme'},
{FAIT title: 'Juridique', icon: 'mdi-scale-balance', to:'/Juridique'},
{FAIT title: 'QCM', icon: 'mdi-format-list-bulleted-type', to:'/QCM'},
{FAIT title: 'About', icon: 'mdi-information', to:'/about'},


<v-list
dense
nav
>
<v-list-item
v-for="item in items"
:key="item.title"
:to="item.to"
link
>
<v-list-item-icon>
<v-icon>{{ item.icon }}</v-icon>
</v-list-item-icon>

<v-list-item-content>
<v-list-item-title>{{ item.title }}</v-list-item-title>
<v-divider></v-divider>
</v-list-item-content>
</v-list-item>
</v-list-->