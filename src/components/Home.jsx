import React from 'react'
import './Home.css'
import MyImage from '../assets/image2.jpg'

const Home = () => {
    return (
        <div className='home-page'>
            <div className='home-section1'>
                <p className='title'>React Developer</p>
                <p className='title-1'>Hello,my name is ZAHRA</p>
                <p className='title-2'>I'm react developer.Strong knowledge in HTML,CSS,Java script and My SQL.Also good knowledge of Java,React.js,and Node.js</p>
                <div className='home-button'>
                    <button className='button-1'>Projects</button>
                    <button className='button-2'>LinkedIn</button>
                </div>
            </div>
            <div>
            <img className='home-image' src={MyImage} alt='Zahra'/>
            </div>
        </div>
    )

}
export default Home