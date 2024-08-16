<template>
  <div id="app">
    <!-- <StudentForm @add:student="addStudent"/>
    <StudentDetails :students="students" @delete:student="deleteStudent"/> -->
    
    <router-view></router-view>
  </div>
</template>

<script>
// import StudentDetails from './components/StudentDetails.vue';
// import StudentForm from './components/StudentForm.vue';


export default {
  name: 'App',
  components: {
    // StudentForm,
    // StudentDetails
  },
  data(){
    return {
      students : [
        {
          id: 1,
          name: "John",
          class: "A",
          age: 20,
          dob: "2001-01-01", 
          gender: "Male",
        },
        {
          id: 2,
          name: "Shelby",
          class: "B",
          age: 22,
          dob: "2001-03-02", 
          gender: "Male",
        }
      ]
    }
  },
  methods: {
    addStudent(student){
      this.students = [...this.students,student];
    }
  }
}
</script>

<style scoped>
#app{
  text-align: center;
}

</style>
