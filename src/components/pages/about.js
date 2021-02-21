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
            Hola Soy Arnau! Nacido en Barcelona, en 1988.<br/>
            Soy una persona muy apasionada, de caracter alegre y divertido, me encanta trabajar en equipo, aprender de los demás y ayudar en todo lo que pueda. Soy perseverante, y tengo una buena capacidad de resolución de problemas, perfeccionista y ordenado. <br/>
            De la olla y el fogón a la pantalla y el ratón, he trabajado hasta finales de 2020 en el mundo de la hostelería, he aprendido mucho de ella ​tanto personalmente como profesionalmente. A raíz de la pandemia decidí que quería cambiar de rumbo mi vida y focarme en 
            otra profesión, la informática siempre ha estado en mi vida, aficionado a ella busqué que podría hacer relacionado.
​            Me surgió la oportunidad de hacer un curso introductorio de desarrollador que abarcaba HTML5, CSS3 y Javascript, finalmente 
​            me di cuenta que esto era lo que quería hacer asique me aventure en el curso de Full Stack Developer que abarca HTML5, CSS3,
            ​Javascript, Python, Git, Github, React, Redux, Mysql, entre otros.<br/>
 
            Let's Code!<br/>
            <br/>
            Las páginas del componente HOME, no tienen nada que ver conmigo, son de Jordan Hudgens (el profesor), están puestas ahí cuando hacía este proyecto para aprender a traerlas de una DB.

            </div>
        </div>
    );
}