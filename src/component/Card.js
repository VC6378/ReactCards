import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../component/Card.css';


function Card(props) {

    const [aniToggle,setAniToggle] = useState(false);
    const [downAni, setDownAni] = useState(false);
    const [socialClassName,setSocialClassName] = useState('card--social');

    const toggleAnimationClass = ()=>{
        aniToggle ? setSocialClassName(socialClassName.replace(" animation",""))  : setSocialClassName(socialClassName.concat(" animation"))
    }
    const handleToggle = () => {
        if(aniToggle){
            setDownAni(true)

            setTimeout(()=>{
                setDownAni(false)
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
                    <img className="card--img" src={props.img}></img>
                </div>
                <h3 className='card--name'>{props.name}</h3>

                <div className={`${socialClassName} ${downAni? "down-animation":""}`} id='card-social' onMouseEnter={handleToggle}>
                    <div className='card--social-control'>
                        <div className='card--social-toggle' id='card-toggle' >
                            <AddIcon style={{fontSize:"1.25rem"}}/>
                        </div>

                    <span className='card--social-text'>Reach Me</span>
                    <ul className='card--social-list'>
                        <a href={props.email} className="card--social-link" target="_blank">
                            <LinkedInIcon/>
                        </a>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card;