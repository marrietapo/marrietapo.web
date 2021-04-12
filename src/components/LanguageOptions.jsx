import React, {useState}from 'react';

const LanguageOptions = () => {

    const [english, setEnglish] = useState(false);

    const handlerClick = () =>{
        setEnglish(!english);
    }

    return (
        <div onClick= {handlerClick}>
            {english ? 'español' : 'english'}
        </div>
    )
}

export default LanguageOptions;
