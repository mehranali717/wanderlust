import React from "react";

export const dashboardPageConfig = {
  routes: [
    {
      path: "/dashboard",
      component: React.lazy(() => import("../../pages/dashboard/dashboard")),
      exact: true,
    },
  ],
};

export const travelAdvisorPageConfig = {
  routes: [
    {
      path: "/travel-advisors",
      component: React.lazy(() =>
        import("../../pages/travlAdvisors/travelAdvisors")
      ),
      exact: true,
    },
  ],
};

export const destinationsPageConfig = {
  routes: [
    {
      path: "/destinations",
      component: React.lazy(() =>
        import("../../pages/destinations/destinations")
      ),
    },
  ],
};

export const HotelsPageConfig = {
  routes: [
    {
      path: "/hotels",
      component: React.lazy(() => import("../../pages/hotels/hotels")),
    },
  ],
};

export const cruisesPageConfig = {
  routes: [
    {
      path: "/cruises",
      component: React.lazy(() => import("../../pages/cruises/cruises")),
    },
  ],
};

export const InspirationPageConfig = {
  routes: [
    {
      path: "/inspiration",
      component: React.lazy(() =>
        import("../../pages/inspiration/inspiration")
      ),
    },
  ],
};

export const ContactUsPageConfig = {
  routes: [
    {
      path: "/contact-us",
      component: React.lazy(() => import("../../pages/contact-us/contact-us")),
    },
  ],
};
 export const LoginPageConfig = {
  routes: [
    {
      path: "/login",
      component: React.lazy(() => import("../../pages/login/login"))
    }
  ]
}
export const WelcomePageConfig = {
  routes: [
    {
      path:'/welcome',
      component:React.lazy(()=>import("../../features/auth/welcome"))
    }
  ]
}
export const UserListPageConfig = {
  routes: [
    {
      path:'/usersList',
      component:React.lazy(()=>import("../../features/users/usersList"))
    }
  ]
}
// settings: {
//   layout: {
//     config: {},
//   },
// },
