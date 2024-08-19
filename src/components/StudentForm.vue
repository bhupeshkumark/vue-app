<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div>
        <h1>Add Student Details Form</h1>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="class">Class:</label>
        <input type="text" id="class" v-model="standard" required />
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="age"  required />
      </div>
      <div>
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" v-model="dob" required />
      </div>
      <div>
        <label for="gender">Gender:</label>
        <select id="gender" v-model="gender" required>
          <option value="" disabled>Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <button type="submit">Create New User</button>
        <button @click="goBack">Back</button>
      </div>
    </form>
  </div>
</template>

<script>
import { store } from '@/store/store';
import {ref} from 'vue'
import { useRouter } from 'vue-router';

export default {
  name: 'StudentForm',
  data() {

    const name = ref('')
    const standard = ref('')
    const age = ref('')
    const dob = ref('')
    const gender = ref('')
    const router = useRouter()
    
    function submitForm(){

      const student = {
        studentName : name,
        class: standard,
        age: age,
        dateofbirth: dob,
        gender: gender
      }

      store.addStudent(student)
      router.push("/")
    }
    const goBack = () => {
        router.push('/');
    };


    return {
     name, standard, age, dob, gender, submitForm, goBack
    };
  },
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





