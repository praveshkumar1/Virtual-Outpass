import React from "react";

    import './Homepage.css';
  import { useEffect,useState } from "react";
    import {getDocs,collection,doc,addDoc} from 'firebase/firestore';
    import {db} from './firebase-config';
    const Stu=()=>{
      const [req,setreq]=useState([]);
       const collectionref=collection(db,"user");
       const docref=doc(db,"user","wipYzeht0YXaog0CWJ5n");
    useEffect(() => {
       const getUser=async()=>{
          try{
            
         const data= await getDocs(collectionref);
         setreq(data.docs.map((docs)=>({...docs.data(),id:docs.id})));
         console.log(data);
          }
          catch(err){
             console.log(err);
            
          }
       }
    
    getUser();
    }, [])
    
    
       const [name,setname]=useState("");
       const [reason,setreason]=useState("");
    const per=false;
    
       const pushdata=async ()=>{
          try{
             await addDoc(collectionref,{name:name,reason:reason,per:per});
     }catch(err){
    console.log(err);
      }
          
       }
       return(
       <>
      
       <h1 className="cen">This is the student page</h1>
       <button onClick={pushdata}>Create Request</button>
       <input type="text" placeholder="name" onChange={(event)=>{
    setname(event.target.value);
       }}/>
    
       <input type="text" placeholder="Reason" onChange={(event)=>{
    setreason(event.target.value);
       }}/>
       
    
       </>
       );
    }

export default Stu;