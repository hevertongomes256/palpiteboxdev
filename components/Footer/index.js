import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: Heverton Gomes
                {' '} / <a className='hover:underline' target="_blank" href='https://www.linkedin.com/in/heverton-gomes-8221181a5/'>Linkedin</a>
                {' '} / <a className='hover:underline' href='https://github.com/hevertongomes' target="_blank">Github</a>
            </div>
        </div>       
    )
}

export default Footer