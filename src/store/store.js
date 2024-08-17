import { reactive } from "vue";

export const store = reactive({
    students:[],

    //add student
    addStudent(student){
        student.id = this.students.length + 1;
        this.students.push(student)
        console.log(this.students)
    },

    removeStudent(student){
        this.students.splice(this.students.indexOf(student),1)
    },
    
     // update student
     updateStudent(student) {
        const index = this.students.findIndex(s => s.id === student.id);
        if (index !== -1) {
            this.students[index] = student;
        }
     }
});

