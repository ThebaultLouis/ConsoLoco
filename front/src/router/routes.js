const routes = [
  {
    path: '/',
    component: () => import('layouts/LandingPage.vue'),
    children: [
      { path: '', component: () => import('pages/landingPage/LandingPage.vue') }
    ]
  },
  {
    path: '/produits',
    component: () => import('layouts/Consumer.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/consumer/Home.vue'),
        name: 'consumerHome'
      },
      {
        path: 'details/:productId',
        component: () => import('pages/consumer/ProductDetails.vue'),
        name: 'consumerProductDetails'
      }
    ]
  }
  // {
  //   path: '/',
  //   component: () => import('layouts/MyLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
