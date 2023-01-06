import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../component/Card.css';


function Card(props) {

    const [aniToggle,setAniToggle] = useState(false);
    const [socialClassName,setSocialClassName] = useState('card--social');

    const toggleAnimationClass = ()=>{
        socialClassName.includes("animation") ? setSocialClassName(socialClassName.replace(" animation",""))  : setSocialClassName(socialClassName.concat(" animation"))
    }
    const handleToggle = () => {
        if(socialClassName.includes("animation")){
            setSocialClassName(socialClassName.concat(" down-animation"))
            setTimeout(()=>{
                setSocialClassName(socialClassName.replace(" down-animation", ""))
            },1000)
        }
        toggleAnimationClass()
        setAniToggle(!aniToggle)
    }

  return (
    <>
        <div className='container'>
            <div className='card'>
                <div className='card--border'>
                    <img src={props.img}></img>
                </div>
                <h3 className='card--name'>{props.name}</h3>

                <div className={socialClassName} id='card-social' onClick={handleToggle}>
                    <div className='card--social-control'>
                        <div className='card--social-toggle' id='card-toggle' >
                        <AddIcon/>
                        </div>
                    </div>
                    <span className='card--social-text'>Reach Me</span>
                    <ul className='card--social-list'>
                        <a href={props.email}>
                        <LinkedInIcon/>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card;