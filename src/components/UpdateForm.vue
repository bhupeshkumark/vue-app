<template>
    <div>
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
        <button type="submit">Update</button>
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
  
      onMounted(() => {
        const student = store.students.find(s => s.id === parseInt(id));
        if (student) {
            studentName.value = student.studentName;
          age.value = student.age;
        }
      });
  
      const updateStudent = () => {
        const studentIndex = store.students.findIndex(s => s.id === parseInt(id));
        if (studentIndex !== -1) {
          store.students[studentIndex].studentName = studentName.value;
          store.students[studentIndex].age = age.value;
        }
        router.push('/');
      };
  
      return { studentName, age, updateStudent };
    }
  };
  </script>
  