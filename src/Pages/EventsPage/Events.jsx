import React,{useState} from 'react'
import useCollapse from 'react-collapsed'

const Events=({data,index,readmore})=>{
	const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
	return(
		
<div className='Eventbox' key={index}> 
              <div className='Eventicon'><div className='EventiconDiv'></div></div>
              <div className="Eventdes"><div className="EventDiscripDiv" ><p>{data}</p><p {...getCollapseProps()}>{readmore}</p>
                  <button className='btn1'
                  {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
        >{isExpanded ? 'Read Less' : 'Read More'}</button><button id='btn2'>Participants</button></div>
        </div>
            </div>
			
		);
}

export default Events;


