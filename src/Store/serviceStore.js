import { ThumbDown } from "@mui/icons-material";
import { observable, action, makeObservable, runInAction } from "mobx"
class serviceStore {
    
    listToAdd = [
        {
            id: 0,
            name: "Full Stack .Net Development Course",
            description:
             "A course in the format of evening studies "+
             "Specialization in both server-side and client-side development",
            price: 4500,
            duration: 350
        },
        {
            id: 0,
            name: "QA : Software Testing Course With AI Learning",
            description:
            " preparation for the official certification tests of Google and Facebook"+
            "Includes 150 practical hours user gift per year for the Elementor system",
            price: 6700,
            duration: 300
        },
        {
            id: 0,
            name: "Gaming And Game Development Course",
            description: 
            "A course in the format of evening studies in combination "+
            "with AI learning on Unreal Engine and Unity",
            price: 8000,
            duration:225
        }
    ]
    list = [];

    constructor() {
        makeObservable(this, {
            list: observable,
            initData: action,
            insert: action,
            get: action
        })
         this.initData()
    }
    
    async initData() {
        
        console.log('length-list: ',this.list.length);
        if(this.list.length>0)
        await this.get();
        else {
            this.listToAdd.forEach(s => {
               this.insert(s);
            });
        }
    }
    async get() {
        const res = await fetch("http://localhost:8787/services")
        const data = await res.json()
        this.list = data
        console.log("get")
    }
    async insert(newService) {
        //זה בעייתי צריך רק שהסטטוס שווה 200 
        const res = await fetch("http://localhost:8787/service",
            {
                method: 'POST',
                body: JSON.stringify(newService),
                headers: { "Content-Type": "application/json" }

            });
        runInAction(async () => {
            this.list.push(newService);
            if (res.status === 200) {
                console.log("Add Succefully");
            }
            else
                console.log(res.status);
        })
    }

}
const singleton = new serviceStore();
export default singleton;
