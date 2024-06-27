import Logo from "./logo"
import serviceStore from '../Store/serviceStore'
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Service1 from "./Service1";
import businessDataStore from '../Store/businessDataStore'
import { observer } from "mobx-react-lite";

const  Homepage = observer(()=>{
    {

    useEffect(() => { InitList() }, [])
    const [serviceArr, setServiceArr] = useState();
    async function InitList() {
        await serviceStore.initData();
        setServiceArr(serviceStore.list);
    }

    useEffect(() => { InitLogo() },"")
    const[logo,setLogo]=useState();
    async function InitLogo(){
        await businessDataStore.initData();
        setLogo(businessDataStore.logo);
    }
    return (<>
        <Logo {...logo}/>
        <Grid container spacing={0.005}>
        {serviceArr?.map((p) => <Service1 key={p.id} {...p} />)}</Grid>
    </>
    )


}
})
export default Homepage;