import { createRouter, createWebHistory } from 'vue-router';
import StudentDetails from "@/components/StudentDetails.vue"
import StudentForm from '@/components/StudentForm.vue';

const routes = [
    {
       path:"/",
       component:StudentDetails 
    },
    {
        path:"/form",
        component:StudentForm
     },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;
  