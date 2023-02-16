import { useEffect} from "react"

const UseEnterEscButtonsHook = (handelYes,handelNo)=> {
  
   useEffect(()=>{
    const Listener = (event) => {
        if(event.code === 'Escape'){
           event.preventDefault()
           handelNo()
        }

        if(event.key=='Enter'){
            event.preventDefault()
            handelYes()
        }        
    } 
    document.addEventListener('keydown',Listener)

    return ()=>{
        document.removeEventListener('keydown',Listener)
    }
    
   },[handelNo,handelYes])

}
export default UseEnterEscButtonsHook