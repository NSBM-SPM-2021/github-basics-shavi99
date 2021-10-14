<template>
  <div>

  <br>



  <div class="box has-background-link has-text-centered">
   <h3 class="title is-3 has-text-warning-light">Employe Management System</h3>
  </div>

  <br>
    <h4 class="title is-4 column ">Add an Employe</h4>
  <br>

  <div>
    <div class="field">
      <label class="label">Employe ID</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="id"
        />
      </div>
    </div>
  
    <div class="field">
      <label class="label">Employe Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="name"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Employe Email</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="email"
        />
      </div>
    </div>
  
    <div class="control">
      <button class="button is-info is-fullwidth" @click="CreateEmploye">Add an Employe</button>
    </div>
  </div>

  <br>

    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Employe Id</th>
          <th>Employe Name</th>
          <th>Employe Email</th>
          <th>Remove Employe</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in emp" :key="emp.employe_id">
          <td>{{ emp.employe_id }}</td>
          <td>{{ emp.employe_name }}</td>
          <td>{{ emp.employe_email }}</td>
          <td>
            <button
              class="button is-danger "
              to="employes"
              @click="removeEmploye(emp.employe_id )"
              >Remove</button>
          </td>
         
        </tr>
      </tbody>
    </table>
    <br>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Software Project Management - Project 2022
        </p>
      </div>
    </footer>


  </div>

</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
  name: "Employelist",
  data() {
    return {
     emp: [],
    };
  },
  ename: "CreateEmploye",
  edata() {
    return {
      id: "",
      name: "",
      email: "",
    };
  },
  
  created() {
    this.getEmployes();
  },
  
  methods: {

    async getEmployes() {
    
        const response = await axios.get("https://employemanagementsystem09.herokuapp.com/");
        this.emp = response.data;
     
    },
    async removeEmploye(id) {
      try {
        await axios.delete(`https://employemanagementsystem09.herokuapp.com/employes/${id}`);
        this.getEmployes();
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
      this.$router.go()
    },
    async CreateEmploye() {
        await axios.post("https://employemanagementsystem09.herokuapp.com/employes", {
          employe_id: this.id,
          employe_name: this.name,
          employe_email: this.email,
        });
        this.id = "";
        this.name = "";
        this.email = "";
      this.$router.go()
     
     
    },
  

  },
};
</script>
