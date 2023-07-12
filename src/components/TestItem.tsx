import { Button } from "@chakra-ui/react";

function TestItem (){
    const number = 0 ;
    return (
        <>
            {number === 0 && <p>value is 0</p>}
            <Button onClick={()=> console.log("clicked")}>clik me</Button>
        </>
    )
}

export default TestItem;