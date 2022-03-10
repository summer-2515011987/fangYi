import layout from '@/components/layout'
export default [
    {
        path: "/index",
        name: "Index",
        component: layout,
        children: [
            {
                path: "",
                component: () => import('@/views/page')
            }
        ]
    }
]