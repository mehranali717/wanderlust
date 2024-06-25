import React from "react";

const dashboardPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/dashboard',
            component: React.lazy(()=>import ('../../pages/dashboard/dashboard')),
            exact: true
        }
    ]
}

export default dashboardPageConfig