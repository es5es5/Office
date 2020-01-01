const WorkSpaceListRoutes = [
	{
		path: 'ws',
		name: 'WorkSpaceList',
		meta: { title: 'WorkSpace' },
		component: () => import('./views/WorkSpaceList')
	}
]

export default WorkSpaceListRoutes
