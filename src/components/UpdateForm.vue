<template>
    <div class="form-container">
      <h1>Update Student</h1>
      <form @submit.prevent="updateStudent">
        <div>
          <label for="name">Name:</label>
          <input v-model="studentName" type="text" id="name" required />
        </div>
        <div>
          <label for="age">Age:</label>
          <input v-model="age" id="age" required />
        </div>
        <div>
          <label for="class">Class:</label>
          <input v-model="classes" id="class" required />
        </div>
        <div>
          <label for="gender">Gender:</label>
          <input v-model="gender" id="gender" required />
        </div>
        <div>
          <label for="dob">Date Of Birth:</label>
          <input v-model="dob" id="dateofbirth" required />
        </div>
        <button type="submit">Update</button>
        <button @click="goBack">Back</button>
      </form>
    </div>
  </template>
  
  <script>
  import { store } from '@/store/store';
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  export default {
    name: 'UpdateForm',
    setup() {
      const router = useRouter();
      const route = useRoute();
      const id = route.params.id;
  
      const studentName = ref('');
      const age = ref('');
      const gender=ref('');
      const classes=ref('');
      const dob=ref('');

      onMounted(() => {
        const student = store.students.find(student => student.id === parseInt(id));
        if (student) {

            studentName.value = student.studentName;
            age.value = student.age;
            gender.value=student.gender
            classes.value=student.class
            dob.value=student.dateofbirth
        }
      });
  
      const updateStudent = () => {
        const studentIndex = store.students.findIndex(student => student.id === parseInt(id));
        if (studentIndex !== -1) {
          store.students[studentIndex].studentName = studentName.value;
          store.students[studentIndex].age = age.value;
          store.students[studentIndex].gender = gender.value;
          store.students[studentIndex].classes = classes.value;
          store.students[studentIndex].dob =dob.value;
        }
        router.push('/');
      };

      const goBack = () => {
        router.push('/');
      };
  
      return { studentName, age, gender, classes, dob, updateStudent, goBack };
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