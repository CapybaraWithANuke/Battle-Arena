<script setup>
</script>

<template>

    <div class="Screen">   
       <RouterLink to="/menuMv"> <img class="HomeLogo" src="..\assets\images\HomeLogo.png"> </RouterLink>
       <div class="TitleTable">PLAYERS RANKING</div>
       <input class="SearchBar" placeholder="Search">
       <button class="ButtonMagnifyingGlass" type="button"> 
        <img  class="MagnifyingGlass" src="..\assets\images\MagnifyingGlass.png"> 
      </button>

      <table>
        <thead>
          <tr>
            <th>POSITION</th>
            <th>NAME</th>
            <th>EXPERIENCE</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>amongus1</td>
            <td>5000</td>
          </tr>

          <tr>
            <td>2</td>
            <td>amongus2</td>
            <td>4999</td>
          </tr>
          
          <tr>
            <td>3</td>
            <td>amongus3</td>
            <td>1888</td>
          </tr>

          <tr>
            <td>4</td>
            <td>amongus4</td>
            <td>709</td>
          </tr>

          <tr>
            <td>5</td>
            <td>amongus5</td>
            <td>584</td>
          </tr>
        </tbody>
      </table>
       
    </div>   

</template>



<style scoped>
.Screen {
  width: 800px;
  height: 1280px;
  background: url("../assets/images/BackgroundPlayersRanking.png");
  margin: 0px;
  position: absolute;
  border: 1px solid rgba(0,0,0,1);
}

.HomeLogo {
  position: absolute;
  top: 111px;
  left: 19px;
}

.TitleTable {
  font-size: 24px;
  font-weight: bold;
  font-family: Inter;
  position: absolute;
  left: 282px;
  top: 411px;
  color: white;
}

table{
  position: absolute;
  top: 546px;
  left:130px;
}

thead{
  font-size: 24px;
}

td{
  font-size: 20px;
  width: 174px ;
  padding-top: 20px;
}

.SearchBar {
  width: 385px;
  height: 38px;
  border-radius: 13px;
  font-family: Inter;
  font-size: 19px;
  position: absolute;
  left: 209px;
  top: 487px;
}

.ButtonMagnifyingGlass {
  
  background: none;
  border: 0px;
  cursor: pointer;
  position: absolute;
  left: 559px;
  top: 497px;
}

.MagnifyingGlass{
  width: 18px;
}

@media screen and (min-width: 2421px) {
  .Screen {
    width: 1728px;
    height: 1117px;
    background: url("../assets/images/PlayersRankingWeb.png");
  }
  
  .TitleTable {
    font-size: 48px;
    top: 150px;
    left: 638px;
  }

  table{
    position: absolute;
    top: 410px;
    left: 275px;
  }

  thead{
    font-size: 32px;
  }

  td{
  font-size: 30px;
  width: 370px ;
  padding-top: 45px;
  }

 .SearchBar {
  width: 732px;
  height: 66px;
  font-size: 24px;
  left: 498px;
  top: 289px;
}

.ButtonMagnifyingGlass{
  width: 32px;
  top: 306px;
  left: 1175px;
}

.MagnifyingGlass{
  width: 32px;
}

}


</style>



