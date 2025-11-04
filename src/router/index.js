import * as VueRouter from 'vue-router'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import ProjectPage from '../pages/ProjectPage'
import LoginPage from '../pages/LoginPage'
import MyLayout from '../pages/MyLayout'
import ProjectList from '../pages/ProjectList.vue'
import UsPage from '../pages/UsPage.vue'
import UserInfo from '@/components/admin/UserInfo.vue'
import AdminLayout from '../pages/admin/AdminLayout'
import AdminCabinet from '../pages/admin/AdminCabinet'
import EditProfile from '../pages/admin/EditProfile'
import MyBinds from '@/pages/admin/MyBinds.vue'
import store from '@/store'
export default VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'myLayout',
            component:MyLayout,
            children:[
                {
                    path:'/',
                    name:'mainPage',
                    component:MainPage
                },
                {
                    path:'/about',
                    name:'aboutPage',
                    component:AboutPage
                },
                {
                    path:'/project/:id',
                    name:'projectPage',
                    component:ProjectPage
                },
                {
                    path:'/ProjectList',
                    name:'ProjectList',
                    component:ProjectList
                },
                {
                    path:'/Contacts',
                    name:'UsPage',
                    component:UsPage
                },
                {
                    path:'/PersonalAccount',
                    name:'UserInfo',
                    component:UserInfo
                }
                
               
            ]
        },
        {
            path:'/login',
            name:'loginPage',
            component:LoginPage
        }
        ,
        {
            path:'/admin',
            name:'adminLayout',
            component:AdminLayout,
            beforeEnter:(to,from,next)=>{
                if (!store.getters.getLogged){
                    next({name:'loginPage'})
                }
                else{
                    next()
                }                
            },
            children:[
                {
                    path:'',
                    name:'cabinet',
                    component:AdminCabinet
                },  
                {
                    path:'/editProfile',
                    name:'editProfile',
                    component:EditProfile
                },    
                {
                    path:'/myBinds',
                    name: 'Mybinds',
                    component:MyBinds


                }  ,         
            ]
        },
    ]
})