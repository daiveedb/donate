"use client"
import { useEffect, useState } from "react";




const GoogleTranslate = () => {

    const [render,setRender] = useState(0)
    
    const googleTranslateElementInit = () => {
        
        new window.google.translate.TranslateElement({
            pageLanguage: 'auto',
            autoDisplay: true,
            includedLanguages: "ru,en,pl,th,vi,ar", // If you remove it, by default all google supported language will be included
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element');
    }
    useEffect(() => {
       
        if(render < 1){
            var addScript = document.createElement('script');
            addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
            document.body.appendChild(addScript);
            window.googleTranslateElementInit = googleTranslateElementInit;
            setRender(render + 1)
            console.log("fine");
        }
        
    }, [render])

  return (
    <>
    <div id="google_translate_element"></div>
    </>

  )
}

export default GoogleTranslate