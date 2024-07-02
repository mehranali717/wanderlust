import React from "react";

const travelAdvisorPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/travel-advisors',
            component: React.lazy(()=>import ('../../pages/travlAdvisors/travelAdvisors')),
            exact: true
        }
    ]
}

export default travelAdvisorPageConfig