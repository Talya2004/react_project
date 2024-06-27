import Grid from '@mui/material/Grid';
import Service from './service.js'
import Logo from "./logo.js"
import Homepage from './homepage.js';
import DataTable from './dataTable.js';
import Button from '@mui/material/Button';
import { useState } from 'react';
import AddService from './addService.js';
import ChangeLogo from './changeLogo.js';
import { useEffect } from 'react';
import serviceStore from '../Store/serviceStore.js'
import businessDataStore from '../Store/businessDataStore.js'
export default function Admin()
{
    const [openMeetList,setopenMeetList]=useState(false)
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
        {serviceArr?.map((p) => <Service key={p.id} {...p} />)}</Grid>
          <Button  onClick={()=>setopenMeetList(!openMeetList)}>MeetingList</Button>
         {openMeetList && <DataTable/>}
        <AddService/>
        <ChangeLogo logo={logo} setLogo={setLogo}/>
    </>)
}