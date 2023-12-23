<script setup>
</script>

<script>
  export default {
    data() {
      return {
        tableData: [
          { name: 'Item 1', size: '10', hp: '100', startDate: '2023-01-01' },
          { name: 'Item 2', size: '8', hp: '80', startDate: '2023-02-01' },
          { name: 'Item 2', size: '8', hp: '80', startDate: '2023-02-01' },
          { name: 'Item 2', size: '8', hp: '80', startDate: '2023-02-01' },
          { name: 'Item 2', size: '8', hp: '80', startDate: '2023-02-01' },
          { name: 'Item 2', size: '8', hp: '80', startDate: '2023-02-01' },
          { name: 'Item 2', size: '8', hp: '80', startDate: '2023-02-01' },
          { name: 'Item 2', size: '8', hp: '80', startDate: '2023-02-01' },
          { name: 'Item 2', size: '8', hp: '80', startDate: '2023-02-01' },
          { name: 'Item 2', size: '8', hp: '80', startDate: '2023-02-01' },
          { name: 'Item 2', size: '8', hp: '80', startDate: '2023-02-01' },
          { name: 'Item 2', size: '8', hp: '80', startDate: '2023-02-01' },
          { name: 'Item 2', size: '8', hp: '80', startDate: '2023-02-01' },
          { name: 'Item 2', size: '8', hp: '80', startDate: '2023-02-01' },

          // Add more data as needed
        ],
        selectedFilter: null,
      };
    },
  };
</script>

<template>
  <main>
    <div class="form_container">

      <div class="button_container">
        <RouterLink to="/joinGame">
          <button type="submit" class="menu_button">Join Game</button>
        </RouterLink>
        
        <RouterLink to="/createGame">
          <button type="submit" class="menu_button">Create Game</button>
        </RouterLink>
      </div>

      <hr>

        <div class="search_container">
          <input type="text" class="search-input" placeholder="Search...">
          
          <button class="search-button">
            <img src="src/assets/images/MagnifyingGlass.png" class="search-icon">
          </button>
        </div>
      
      <section class="content_container">
        <div class="table-container" id="table-container">
          <ol id="table-list" class="header">
            <span>NAME</span>
            <span>SIZE</span>
            <span>HP</span>
            <span>START DATE</span>
          </ol>

          <ul>
            <li v-for="item in tableData" :key="item.name">
              <span>{{ item.name }}</span>
              <span>{{ item.size }}</span>
              <span>{{ item.hp }}</span>
              <span>{{ item.startDate }}</span>
            </li>
          </ul>

        </div>

        <section class="checkbox_section">

          <label class="filter">Filter by...<br></label>

          <div class="checkbox_container">
            
            <div>
              <input type="radio" id="checkbox1" v-model="selectedFilter" value="Finished"/>
              <label for="checkbox1">Finished</label>
            </div>

          <div>
            <input type="radio" id="checkbox2" v-model="selectedFilter" value="Started" />
            <label for="checkbox2">Started</label>
          </div>
            
          <div>
            <input type="radio" id="checkbox3" v-model="selectedFilter" value="Dates"/>
            <label for="checkbox3">Dates</label>
          </div>
          </div>  
        </section>

      </section>

      <RouterLink to="/arena">
        <button type="submit" class="signup_button">JOIN</button>
      </RouterLink>
    
    </div>
  </main>
</template>

<style scoped>

/* Big rectangle */
.form_container{
  margin-top: 180px;
  box-sizing: none;
}

/* Navigation buttons */
.menu_button{
  background-color: transparent;
  color: white;
  border: none;
  margin: 0 6vw;
  font-size: 24px;
}

/* Checkboxes */
.checkbox_container {
  display: inline-flex;
  align-items: center;
}

  .checkbox_section {
    margin-top: 20px; /* Adjust the margin as needed */
  }

.checkbox_container label {
  margin-right: 30px;
}

hr {
  width: 100%;
  left: 0;
}

.button_container::before {
  content: "";
  position:fixed;
  height: 100px;
  width: 1px; /* Width of the vertical line */
  background-color: white;
  top: 195px;
  left: 50%; /* Position the line in the middle */
}

.table-container {
  min-width: 300px;
  max-height: 500px;
  margin: 20px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px; /* Add rounded corners */
}

li, .header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  color: black;
  padding: 10px;
  list-style-type: none;
}
.search_container {
  align-items: center;
  margin-top: 50px;
  border-radius: 9px;
  display: inline-flex;
}
 .search-input {
  min-width: 385px;
  height: 38px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 13px 0 0 13px;
  font-family: Inter;
  font-size: 19px;
}

.search-button {
  height: 62px;
  padding: 10px;
  background-color: white;
  color: #fff;
  border-radius: 0 13px 13px 0;
  cursor: pointer;
  outline: none;
}
 .search-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

@media screen and (min-width: 1000px) {
  .form_container {
    margin-right: 50px;
    margin-left: 50px;
    width: 90%;
    height: auto;
  }

  .menu_button{
    margin: 0 12vw;
  }
  .content_container{
    display: flex;
    justify-content: space-around;
  }

  .table-container{
    width: 70%;
  }

  .checkbox_section{
    margin-top: 150px;
  }
  .checkbox_container {
    margin-top: 30px;
    display: grid;
  }

  .checkbox_container > *:not(:last-child) {
  margin-bottom: 20px; /* Adjust the desired vertical margin */
}

}

</style>
