<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div>
        <h1>Add Student Details Form</h1>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div>
        <label for="class">Class:</label>
        <input type="text" id="class" v-model="form.class" required />
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="form.age"  required />
      </div>
      <div>
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" v-model="form.dob" required />
      </div>
      <div>
        <label for="gender">Gender:</label>
        <select id="gender" v-model="form.gender" required>
          <option value="" disabled>Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <button type="submit">Create New User</button>
        <!-- <button type="button" @click="backToTable">Back</button> -->
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'StudentForm',
  data() {
    return {
      form: {
        name: '',
        class: '',
        age: '',
        dob: '',
        gender: ''
      }
    };
  },
  // methods: {
  //   submitForm() {
  //     this.$emit("add:student",this.student)
  //   },
  //   // backToTable() {
  //   //   this.$router.push('/');
  //   // }
  // }
  methods: {
  submitForm() {
    // Emit the form data as the student object
    this.$emit("add:student", {
      id: Date.now(),  // Generate a unique ID based on the current timestamp
      ...this.form
    });
    
    this.form = {
      name: '',
      class: '',
      age: '',
      dob: '',
      gender: ''
    };
  }
}

};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

form > div {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
select {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-right: 10px;
}

button[type="button"] {
  background-color: #6c757d;
}
</style>
