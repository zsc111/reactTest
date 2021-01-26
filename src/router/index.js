import Home from "../App";
import NotFound from "../components/notfound";
import One from "../components/one";


export const routes =[
    {
        path:"/home",
        component:Home
    },
    {
        path:"/404",
        component:NotFound
    }
]

export const secrountes=[
    {
        path:"/home/publics/in_one/1",
        component:One
    },
    {
        path:"/home/publics/in_two/1",
        component:Two
    },
    {
        path:"/home/publics/in_three/1",
        component:Three
    }
]