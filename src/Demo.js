import React from 'react';
import { useRef ,useEffect} from 'react';

function Demo(){
    const data = useRef();
    // data.current.style.innerText = "blue";
    // useEffect(()=>{
    //     data.current.style.color = "blue";
    // },[])

    function change(){
        data.current.style.color = "blue";
    }

 return(
    <div>
        <h1 ref={data} id='test' >hello</h1>
        <button onClick={change}>click</button>
    </div>
 )
}
export default Demo;