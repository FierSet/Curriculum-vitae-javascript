function Left({ Datos, icons, text }) 
{
    let Skill = 'Skill';
    let data = 'data';
    return (
        <div className = 'couple'>
            <table className = 'long-text'>
            {
                Object.keys(Datos[data]).map((element) => 
                (
                    <tr>
                        <td>
                            <p id = 'icon'>{Datos[data][element][icons]}</p>
                        </td>
                        
                        <td>
                            <p>{Datos[data][element][text]}</p>
                        </td>
                    </tr>
                ))
            }
            </table>
            <hr/>
            <div>
                <h2>{Skill}.</h2>
                <ul>
                    {
                        Datos[Skill].map((element) =>(
                            <li><p>{element}</p></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Left;