import React , {useEffect} from 'react'

const AddToCart = (props) => {
 
  useEffect(() => {
    console.log("data",props?.data);
  }, []);


  return (
    <div>
      <div>add to cart</div>
      <div>
        {props?.data?.map((item)=>{
          return (
            <div>
              {item?.foodName} 
              {item?.price}   
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AddToCart