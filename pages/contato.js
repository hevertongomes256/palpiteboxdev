import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
    return (
        <div>
            <PageTitle title='Contato' />
            <h1 className='font-bold text-2xl text-center my-8'>Contatos</h1>
            <div className='mx-auto my-8 border-double border-4 border-gray-600 w-1/5'>
                <p className="text-center">
                    (84) 98866-3322 <br/>
                    retauranteXX@gmail.com
                </p>
            </div>
        </div>
    )
}

export default Contato