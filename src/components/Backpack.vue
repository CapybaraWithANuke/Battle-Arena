<script>
export default {
  data() {
    return {
      ability1: "",
      ability2: "",
      ability3: "",
      turn: 0
    }
  },
  methods: {
    selectAbility(name) {

      if (this.turn == 0 || this.turn == 3) {
        document.getElementById("label1").innerHTML = name;
        this.turn = 0;
      }
      else if (this.turn == 1) {
        document.getElementById("label2").innerHTML = name;
      }
      else if (this.turn == 2) {
        document.getElementById("label3").innerHTML = name;
      }

      ++this.turn;



      console.log("Ability 1: " + this.ability1);
      console.log("Ability 2: " + this.ability2);
      console.log("Ability 3: " + this.ability3);

    },
    getData() {
      fetch('https://balandrau.salle.url.edu/i3/players/attacks', {
        header: {
          "Bearer": this.$root.token
        }
      }).then(response => {
        return response.json();
      })
      .then(attacks => { 
        console.log(attacks.attack_id)
      })
    }
  }
}

</script>

<template>
    <div class="Screen"> 
        <RouterLink to="/menuMv"> <img class="HomeLogo" src="..\assets\images\HomeLogo.png"> </RouterLink>
        
        <label class="backpack-text"><strong>BACKPACK</strong></label>

        <table class="table-abilities">
          <tbody>
            <tr>
              <td class="td-abilities" id="label1"></td>
            </tr>
            <tr>
              <td class="td-abilities" id="label2"></td>
            </tr>
            <tr>
              <td class="td-abilities" id="label3"></td>
            </tr>
          </tbody>
        </table>


        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>POWER</th>
              <th>LEVEL NEEDED</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-on:click="selectAbility('Fireball')">Fireball</td>
              <td>3</td>
              <td>1</td>
            </tr>
            <tr>
              <td v-on:click="selectAbility('Frostbolt')">Frostbolt</td>
              <td>4</td>
              <td>3</td>
            </tr>
            <tr>
              <td v-on:click="selectAbility('Lightning bolt')">Lightining bolt</td>
              <td>3</td>
              <td>2</td>
            </tr>
            <tr>
              <td v-on:click="selectAbility('Stone pillar')">Stone pillar</td>
              <td>5</td>
              <td>3</td>
            </tr>
          </tbody>
        
        </table>
    </div>
</template>

<style scoped>

.Screen {
    width: 800px;
    height: 1280px;
    background: url("../assets/images/BackgroundBackpackMV.png");
    margin: 0px;
    position: absolute;
    border: 1px solid rgba(0,0,0,1);
}

.HomeLogo {
  position: absolute;
  top: 111px;
  left: 19px;
}

.backpack-text {
    font-size: 40px;
    position: absolute;
    top: 375px;
    left: 295px;
    color: white;
}

table{
  position: absolute;
  top: 625px;
  left: 85px;
  font-size: 22px;
}

td{
  width: 174px;
  padding: 10px;
}

td:hover{
  cursor: default;
}

.table-abilities{
  position: absolute;
  top: 440px;
  color: black;
  left: 300px;
}

.td-abilities{
  padding: 8.5px;
}

@media screen and (min-width: 2421px) {
  .Screen {
    width: 1728px;
    height: 1117px;
    background: url("../assets/images/BACKPACK.png");
  }

  .backpack-text {
    font-size: 60px;
    top: 140px;
    left: 675px;
  }

  .name-text {
    font-size: 40px;
    top: 350px;
    left: 750px;
  }

  .power-text {
    font-size: 40px;
    top: 350px;
    left: 980px;
  }

  .level-text {
    font-size: 40px;
    top: 350px;
    left: 1175px;
  }

  .table-cell {
    font-size: 25px;
    height: 85px;
  }

  .column-name {
    top: 445px;
    left: 755px;    
  }

  .column-power {
    top: 445px;
    left: 1040px;    
  }

  .column-level {
    top: 445px;
    left: 1290px;    
  }
  
}

</style>