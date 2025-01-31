// import React from "react";

// const NAVIGATION: Navigation = [
//     {
//       kind: 'header',
//       title: 'Main items',
//     },
//     {
//       segment: 'dashboard',
//       title: 'Dashboard',
//       icon: <DashboardIcon />,
//     },
//     {
//       segment: 'orders',
//       title: 'Orders',
//       icon: <ShoppingCartIcon />,
//     },
//     {
//       kind: 'divider',
//     },
//     {
//       kind: 'header',
//       title: 'Analytics',
//     },
//     {
//       segment: 'reports',
//       title: 'Reports',
//       icon: <BarChartIcon />,
//       children: [
//         {
//           segment: 'sales',
//           title: 'Sales',
//           icon: <DescriptionIcon />,
//         },
//         {
//           segment: 'traffic',
//           title: 'Traffic',
//           icon: <DescriptionIcon />,
//         },
//       ],
//     },
//     {
//       segment: 'integrations',
//       title: 'Integrations',
//       icon: <LayersIcon />,
//     },
//   ];

//   export default function CrFilter() {
  
//     const [pathname, setPathname] = React.useState('/dashboard');
  
//     const router = React.useMemo<Router>(() => {
//       return {
//         pathname,
//         searchParams: new URLSearchParams(),
//         navigate: (path) => setPathname(String(path)),
//       };
//     }, [pathname]);
  
//     // Remove this const when copying and pasting into your project.
//     const demoWindow = window !== undefined ? window() : undefined;
  
//     return (
//       // preview-start
//       <AppProvider
//         navigation={NAVIGATION}
//         router={router}
//         window={demoWindow}
//       >
//         <DashboardLayout>
//           <DemoPageContent pathname={pathname} />
//         </DashboardLayout>
//       </AppProvider>
//       // preview-end
//     );
//   }