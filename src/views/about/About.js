import React from 'react'

const About = () => {
    console.log(window.cloudinary)
    let widget = window.cloudinary.createUploadWidget({
        cloudName: 'avaprograms',
        uploadPreset: 'PublicUpload',
        apiKey: 458296948793864,
    },
        (error, result) => { 
            console.log({error,result})
        }
    )
    console.log(widget)
    return (
        <div style={{marginTop:"70px"}}>
            This is about
            <button onClick={()=>{
                widget.open()
            }}> test me </button>
        </div>
    )
}

export default About