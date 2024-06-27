import { observable,makeObservable, action, runInAction, observe} from "mobx"
import { act } from "react-dom/test-utils";
class meetingStore
{
     newM={
        id: 0,
        name: "",
        description: "",
        price: "",
        duration: "",
    }
    list=[]
    IDcnt=0;
    constructor()
    {
        makeObservable(this,
        {
           list:observable,
           IDcnt:observable,
           initData:action,
           insert:action
        })
        this.initData();
    }
    async initData()
    {
       const res = await fetch("http://localhost:8787/appointments");
       const data= await res.json;
       runInAction(()=>{
        console.log("data appointment",data.appointments)
        this.list = data.appointments
       })
       
    }
    async insert (newMeeting)
    {
        this.IDcnt=this.IDcnt+1;
        // newMeeting.id = this.IDcnt;
        this.newM={...newMeeting};
        this.newM.id=this.IDcnt;
        const res=await fetch("http://localhost:8787/appointment",
        {
           method:'POST' ,
           body: JSON.stringify(this.newM),
           headers: { "Content-Type": "application/json" }
        })
        runInAction(async () => {

            if (res.status === 200) {
                // this.list.push(this.newM);
                console.log("Add Succefully");
                console.log(this.newM);
                return true;
            }
            else{
                 console.log(res.status);
                 console.log("add faild");
                 return false;

            }
        })
    
    }
    async get() {
        const res = await fetch("http://localhost:8787/appointments")
        const data = await res.json()
        this.list = data;
        console.log("im in get")
        return data;
    }
    
    

}
const singleton = new meetingStore();
export default singleton;
