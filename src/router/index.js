import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import work from '@/components/work'
import contact from '@/components/contact'
import footer from '@/components/bottomFooter'
import topMenu from '@/components/topMenu'


Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      components: {
        header: topMenu,
        main: home,
      },
      meta: {
        bodyClass: 'home',
      }
    },
    {
      path: '/about',
      name: 'About',
      components: {
        header: topMenu,
        main: about,
        footer: footer
      },
      meta: {
        bodyClass: 'about',
      }
    },
    {
      path: '/work',
      name: 'My work',
      components: {
        header: topMenu,
        main: work,
        footer: footer
      },
      meta: {
        bodyClass: 'work',
      }
    },
    {
      path: '/contact',
      name: 'Contact me',
      components: {
        header: topMenu,
        main: contact,
        footer: footer
      },
      meta: {
        bodyClass: 'contact',
      }
    },
    {
      path: '*',
      redirect: '/home'

    }
  ]
})
export default router
