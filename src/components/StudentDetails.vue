<template>
  <div class="student-details">
    <h1>Students Table</h1>
    <StudentForm  @submit="addStudent" />
    <div class="table-container">
      <table class="table table-striped table-hover">
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
            <td>{{ student.name }}</td>
            <td>{{ student.class }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.dob }}</td>
            <td>{{ student.gender }}</td>
            <td>
              <button @click="viewStudent(student.id)">View</button>
              <button @click="updateStudent(student.id)">Update</button>
              <button @click="deleteStudent(student.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button id="create-user" @click="userDetailView">Create User</button>
  </div>
</template>

<script>

export default {
  name: "StudentDetails",
  props:{
    students:Array
  },
  methods:{
    deleteStudent(studentId){
      this.$emit("delete:student",studentId)
    }
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
