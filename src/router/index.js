import { createRouter, createWebHistory } from 'vue-router';
import StudentDetails from "@/components/StudentDetails.vue"
import StudentForm from '@/components/StudentForm.vue';
import UpdateForm from '@/components/UpdateForm.vue';
import ViewForm from '@/components/ViewForm.vue';

const routes = [
    {
       path:"/",
       component:StudentDetails 
    },
    {
        path:"/form",
        component:StudentForm,
    },
    {
        path:"/update/:id",
        component:UpdateForm,
    },
    {
        path:"/view/:id",
        component:ViewForm,
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;
  