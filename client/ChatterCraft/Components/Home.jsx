import React from 'react'

 export default function Home(){
    document.getElementById('root').className="h-screen"

    return (
        
    <>
   <div className="container flex h-full bg-[#2b1b40]">
     <SideNav/>
       <div className='h-full w-full'>
           <TextBox/>
       </div>
   </div>
    </>
    )
}