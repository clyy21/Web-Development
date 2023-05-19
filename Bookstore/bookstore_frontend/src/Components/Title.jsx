import React from 'react'

const Title = ({name}) => {
  return (
    <>
      <div className="container">
         <div className="row">
           <div className="col-sm-12">
             <div className="headline text-center mb-5">
               <h2 className="mt-2 pt-5 pb-3 position-relative d-inline-block">{name}</h2>
             </div>
           </div>
         </div>
        </div>
    </>
  )
}

export default Title
