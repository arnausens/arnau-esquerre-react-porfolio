import React, { Component } from 'react';
import profilePicture from "../../../static/assets/images/bio/pantallas.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column" 
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-column">
                Hola Soy Arnau! Nacido en Barcelona, en 1988.
                Soy una persona muy apasionada, de caracter alegre y divertido, me encanta trabajar en equipo, aprender de los demas y 
                ayudar en todo lo que pueda. Soy perseverante, y tengo una buena capacidad de resolución de problemas, perfeccionista y ordenado.
                Del fogón al ratón, he trabajado hasta finales de 2020 en el mundo de la hosteleria, he aprendido muchod e ella
                tanto personalmente como profesionalmente. A raíz de la pandemia decidí que queria cambiar de rumbo mi vida y enfocarme en 
                otra profesión, la informatica siempre ha estado en mi vida, aficionado a ella busqué que podría hacer relacionado.
                Me surgió la oportunidad de hacer un cuurso introductorio de desarrollador que abarcaba HTML5, CSS3 y Javascript, finalmente 
                me di cuenta que esto era lo que quería hacer asique me aventure en el curso de Full Stack Developer que abarca HTML5, CSS3,
                Javascript, Python, Git, Github, React, Redux, Mysql, entre otros.
                Tengo muchas ganas de empezar a trabajar en este mundo tan amplio y con tanto que aprender. 
                Let's Code!
            </div>
        </div>
    );
}