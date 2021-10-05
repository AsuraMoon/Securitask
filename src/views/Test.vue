<template>
    <div class="home">
        <router-link to="/">
            <section>
                Retour 
            </section>
        </router-link>
        <h1 class="titre d-flex justify-center">
            Voici Sécuritask
        </h1>
        <div class="responsive">
            <router-link to="/QCM_Acronymes">
                <article>
                    QCM Acronyme
                </article>
            </router-link>            
            <router-link to="/QCM_Incendie">
                <article>
                    QCM Risques Incendie
                </article>
            </router-link>
            <router-link to="/QCM_Juridique">
                <article>
                    QCM Juridique
                </article>
            </router-link>
            <router-link to="/QCM_Reflexes">
                <article>
                    QCM Module Pro
                </article>
            </router-link>
            <!--router-link to="/QCM_Secourisme">
                <article>
                    QCM Secourisme
                </article>
            </router-link-->
        </div>
    </div>
</template>

<style scoped>
article{
    display: block;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 auto;
    margin-top:40px;
    padding: 50px 0 0 0;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    text-align: center;
    min-height: 150px;
    width: 60vw;
    background: linear-gradient(135deg, wheat, #B2CAF5);
    color:black;
    font-size:1.6em;
    font-weight:bold;
    text-decoration:none;
}

article:hover{
    box-shadow: 0 0px 25px rgba(0, 0, 0, 0.9);
}

section{
    position: fixed;
    font-size:1em;
    color:black;
    border-radius:5px;
    background: linear-gradient(135deg, wheat, #B2CAF5);
    padding:10px;
    display:inline;
    margin-top:-40px;
    margin-left:-5px;
}

section:hover{
    box-shadow: 0 0px 25px rgba(0, 0, 0, 0.4);
}

h1{
    margin-top:40px;
}

.responsive{
    flex-direction:column;
}

a{
    text-decoration:none;
}
</style>