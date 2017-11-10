import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import detail from '@/components/detail'
import openAnalysis from '@/components/openAnalysis'
import previewPage from '@/components/previewPage'
import analysisPage from '@/components/analysisPage'
import distributionPage from '@/components/distributionPage'
import orderProducts from '@/components/orderProducts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:index
    },
    {
      path: '/detail',
      name: 'somedetail',
      component:detail,
      redirect:"/detail/analysis",
      children:[
      	{
      		path:'open',
      		component:openAnalysis
      	},
      		{
      		path:'preview',
      		component:previewPage
      	},
      	{
      		path:'analysis',
      		component:analysisPage
      	},
      	{
      		path:'distribution',
      		component:distributionPage
      	}
      	
      ]
    },
    {
    	path:'/orderPro',
    	 component:orderProducts
    }
  ]
})
