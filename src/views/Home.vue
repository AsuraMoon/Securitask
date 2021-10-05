<template>
    <div class="home">
        <h1 class="titre d-flex justify-center">
            Voici Sécuritask
        </h1>
        <div class="responsive">
            <router-link to="/Revision">
                <article>
                    Révision
                </article>
            </router-link>
            
            <router-link to="/Test">
                <article>
                    Test
                </article>
            </router-link>
        </div>
    </div>
</template>

<style>
article{
    display: block;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 auto;
    margin-top:40px;
    padding: 25px 0 0 0;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    text-align: center;
    min-height: 150px;
    width: 60vw;
    background: linear-gradient(135deg, wheat, #B2CAF5);
    color:BLACK;
    font-size:1.6em;
    font-weight:bold;
    text-decoration:none;
}

</style>
<style scoped>
.responsive{
    flex-direction:column;
}
a{
    text-decoration:none;
}

</style>