<template>
  <div class="student-details">
    <h1>Students Table</h1>
    <div class="table-container">
      <table class="table table-striped table-hover">
      <table class="table table-striped table-hover" v-bind:hidden="!isTableEmpty"></table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.studentName }}</td>
            <td>{{ student.class }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.dateofbirth }}</td>
            <td>{{ student.gender }}</td>
            <td>
              <button @click="viewStudent(student)">View</button>
              <button @click="updateStudent(student)">Update</button>
              <button @click="deleteStudent(student)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button id="create-user" @click="userDetailView">Create User</button>
  </div>
</template>

<script>
import { store } from '@/store/store';
import { useRouter } from 'vue-router';


export default {
  name: "StudentDetails",
  data(){
    const students = store.students
    // const isTableEmpty = store.students.length
    const router = useRouter()

    function userDetailView(){
      router.push('/form')
    }

    function deleteStudent(student){
      alert("Do You want to Delete")
      store.removeStudent(student)
    }
    function updateStudent(student)
    {
      // alert("Do you want to Update")
      router.push('/update/'+student.id)
    }
    function viewStudent(student)
    {
      router.push('/view/'+student.id)
    }
    return {students, userDetailView, deleteStudent, /*isTableEmpty,*/ updateStudent, viewStudent}
  }
};
</script>

<style scoped>
.student-details {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
table {
  justify-content: center;
}
.table-container {
  display: flex;
  justify-content: center;
}


</style>
