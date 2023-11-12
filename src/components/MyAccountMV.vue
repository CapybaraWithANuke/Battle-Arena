<script setup>
</script>

<template>

    <div class="Screen">   
       <RouterLink to="/menuMv"> <img class="HomeLogo" src="..\assets\images\HomeLogo.png"> </RouterLink>
       <img class="Amongus" src="..\assets\images\AmongusBlack.png">
       <label class="TableTitle">MY ACCOUNT</label>
       <div class="Textbox">
        <strong>Username:</strong> Amongus <br><br>
        <strong>Experience:</strong> 1200 <br><br>
        <strong>Level:</strong> 5 <br><br>
        <strong>Coins:</strong> 3400
       </div>
       <button class="Button" type="submit">LOGOUT</button>
       <button class="ButtonTrashbin" type="button"> <img class="Trashbin" src="..\assets\images\Trashbin.png"> </button>
    </div>   

</template>



<style scoped>
.Screen {
  width: 800px;
  height: 1280px;
  background: url("../assets/images/BackgroundMyAccountMV.png");
  margin: 0px;
  position: absolute;
  border: 1px solid rgba(0,0,0,1);
}

.HomeLogo {
  position: absolute;
  top: 111px;
  left: 19px;
}

.Amongus {
  position: absolute;
  width: 105px;
  left: 348px;
  top: 503px;
}

.Textbox{
  position: absolute;
  left: 288px;
  top: 673px;
  color: white;
  font-family: Inter;
  font-size: 20px;
  word-spacing: 45px;
  text-align: center;
}

.Button{
  width: 281px ;
  font-size: 40px;
  font-family: 'Inter';
  font-weight: 600;
  background-color: white;
  border-radius: 17px;
  border: 6px solid white ;
  color: black;
  position: absolute;
  top: 940px;
  left: 263px;
  cursor: pointer;
}

.Trashbin {
  position: absolute;
  left: 659px;
  top: 493px
}

.ButtonTrashbin {
  background: none;
  border: 0px;
  cursor: pointer;
}

.TableTitle{
  display: none;
}

@media screen and (min-width: 2421px) {
  .Screen {
    width: 1728px;
    height: 1117px;
    background: url("../assets/images/BackgroundPlayersInfoSlide1Web.png");
  }
 
 .Amongus {
  width: 184px;
  left: 430px;
  top: 438px;
 }
 
 .Textbox {
  font-size: 32px;
  left: 850px;
  top: 420px;
 }

 .Trashbin{
  width: 60px;
  left: 1384px;
  top: 280px;
 }

 .Button{
  width: 465px;
  top: 890px;
  left: 640px;
 }

 .TableTitle{
  font-size: 48px;
  font-family: Inter;
  font-weight: bold;
  position: absolute;
  top: 151px;
  left: 688px;
  color: white;
  display: block;
 }
}

</style>


