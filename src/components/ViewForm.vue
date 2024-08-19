<template>
    <div>
      <h1>View Student</h1>
      <p><strong>Name:</strong> {{ student.studentName }}</p>
      <p><strong>Class:</strong> {{ student.class }}</p>
      <p><strong>Age:</strong> {{ student.age }}</p>
      <p><strong>Gender:</strong> {{ student.gender }}</p>
      <p><strong>Date Of Birth:</strong> {{ student.dateofbirth }}</p>
      <button @click="goBack">Back</button>
      <!-- <button @click="getUser">Get User</button> -->
    </div>
  </template>
  
  <script>
  import { store } from '@/store/store';
  import { ref,onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  export default {
    name: 'ViewForm',
    setup() {
        console.log("entered componet")
      const router = useRouter();
      const route = useRoute();
      const id = route.params.id;
  
      const student = ref({
        studentName : "",
        age: "",
        gender:"",
        class:"",
        dateofbirth:""
      });
      onMounted(() => {
        // console.log("inside on mount")
        student.value = store.students.find(student => student.id === parseInt(id));
        // console.log(student)
      });
      
    //   function getUser()
    //   {
    //     console.log("inside on mount")
    //     student.value = store.students.find(s => s.id === parseInt(id));
    //     console.log(student)
    //   }
  
      const goBack = () => {
        router.push('/');
      };
  
      return { student, goBack,onMounted };
    }
  };
  </script>
  
<style scoped>
  button[type="button"] {
  background-color: #6c757d;
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
</style>
