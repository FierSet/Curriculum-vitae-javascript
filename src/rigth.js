import React from 'react';

function Rigth({ Datos }) 
{   
    const extractelement = (element) =>
    {
        let nocertificate = 0;
        if((element === 'Work history') || (element === 'Recognition'))
            return (
                <div>
                    <p><strong>{element}.</strong></p>
                    {
                        Datos[element].map((e) => (
                            <p>{e}</p>
                        ))
                    }
                </div>
            );
        else if(element === 'Training')
            return (
                <div>
                    <hr id = 'line'/>
                    <br/>
                    <p><strong>{element}.</strong></p>
                    {
                        Object.keys(Datos[element]).map((e) => 
                        (
                            (e === 'Scholl') ?
                                Object.keys(Datos[element][e]).map((sch) => 
                                (
                                    <div>
                                        <p><strong>{sch}.</strong></p>
                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;{Datos[element][e][sch]}</p>
                                    </div>
                                ))
                            : Object.keys(Datos[element][e]).map((sch) => 
                            (
                                <div className = 'long-text'>
                                    <p><strong>{e}.</strong></p>
                                    <p>{Datos[element][e][sch]}</p>
                                </div>
                            ))
                        ))
                    }
                </div>
            );
        else if (element === 'Certificate')
            return (
                <div>
                    <br/>
                    <hr id = 'line'/>
                    <br/>
                    <p><strong>{element}.</strong></p>
                    <ul>
                        {
                            Datos[element].map((e) => (
                                <li id = {nocertificate++}><p>{e}</p></li>
                            ))
                        }
                    </ul>
                </div>
            );
    }

    return (
        <div className = 'couple '>
           {
                Object.keys(Datos).map((element) => (

                    (((element !== 'name&image') && (element !== 'data') && (element !== 'Skill')) ? 
                        <div >
                            {extractelement(element)}<br/>
                        </div> 
                    : null
                    )
                ))
           }
        </div>
    );
}

export default Rigth;