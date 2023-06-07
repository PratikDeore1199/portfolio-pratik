
import "./WorkCardStyles.css";
import React from 'react'
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">
            <div className="project-container">
                {WorkCardData.map((value,index)=>{
                    return ( <WorkCard
                    key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    text={value.text}
                    view={value.view}
                    source={value.source}    
                    />
                    )
                })

                }
            </div>
        </h1>
    </div>
  )
}

export default Work