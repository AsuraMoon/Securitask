<template>
    <div>
        <!--Face de la carte-->
        <div @click="isToggle=!isToggle" v-bind:style="{backgroundColor: colorFront, color: colorTextFront , 'border-left': bordure }" v-show="!isToggle" class="animated flipInX flashcard">
            <div class="card-header center" style="padding-bottom: 15px;"> {{headerFront}} </div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeFront,fontWeight: 'bold'}">{{front}}</p>
                <img v-if="imgFront!=''" :src="imgFront" width="150" height="auto">
            </div>
            <div class="card-footer center">{{footerFront}}</div>
        </div>
        <!--Dos de la carte-->
        <div @click="isToggle=!isToggle" v-bind:style="{backgroundColor: colorBack, color: colorTextBack , 'border-left': bordure }" v-show="isToggle" class="animated flipInX flashcard">
            <div class="card-header center" style="padding-bottom: 15px;"> {{headerBack}}</div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeBack, fontWeight: 'bold'}">{{back}}</p>
                <img v-if="imgBack!=''" :src="imgBack" width="150" height="150">
            </div>
            <div class="card-footer center">{{footerBack}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            isToggle: false,
        }
    }, props: {
        imgFront: {
            type: String,
            default: ''
        },
        imgBack: {
            type: String,
            default: ''
        },
        front: {
            type: String,
            default: ''
        },
        back: {
            type: String,
            default: ''
        },
        textSizeFront: {
            type: String,
            default: '0.8em'
        },
        textSizeBack: {
            type: String,
            default: '0.8em'
        },
        colorTextFront: {
            type: String,
            default: 'black'
        },
        colorTextBack: {
            type: String,
            default: 'white'
        },
        colorFront: {
            type: String,
            default: 'white'
        },
        colorBack: {
            type: String,
            default: '#B2CAF5'
        },
        headerFront: {
            type: String,
            default: ''
        },
        headerBack: {
            type: String,
            default: ''
        },
        footerFront: {
            type: String,
            default: 'Click to show Back'
        },
        footerBack: {
            type: String,
            default: 'Click to show Front'
        },
        bordure: {
            type: String,
            default:"15px solid"
        },
    }
}
</script>
<style >

.center {
    text-align: center;
    padding: 0 15px 0 15px;
}

.card-header{
    font-size:0.7rem;
}

.card-footer{
    position:absolute;
    bottom:15px;
    margin-left: auto;
    margin-right: auto;
    width:100%;
    font-size:0.6rem;
}

.flashcard {
    cursor: pointer;
    border-radius: 10px;
    margin: 10px;
    padding: 10px 0 0 0;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    text-align: center;
    height: 250px;
    width: 200px;
}

.flashcard:hover {
    box-shadow: 0 0px 25px rgba(0, 0, 0, 0.8);
}

.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
}

@keyframes flipInX {
    from {
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        animation-timing-function: ease-in;
        opacity: 0;
    }
    40% {
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        animation-timing-function: ease-in;
    }
    60% {
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1;
    }
    80% {
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
        transform: perspective(400px);
    }
}

.flipInX {
    backface-visibility: visible !important;
    animation-name: flipInX;
}
</style>
