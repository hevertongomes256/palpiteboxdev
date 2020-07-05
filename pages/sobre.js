import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    return (
        <div>
            <PageTitle title='Sobre'/>
             <div className='text-center my-10'>
                <h1 className='font-bold text-2xl'>O restaurante XX </h1>
                <p className='text-justify my-5 mx-8 border p-4 mb-4'> 
                    O restaurante tem uma ótima sequência de fondue, 
                    tudo com muita qualidade (fondue com queijo, chocolate preto e branco; 
                    entre os de chocolate, o preto achei melhor). É ótimo fazer as fatias das
                    carnes (picanha, mignon, porco e frango) na pedra e misturar com os diversos
                    molhos (recomendo os molhos adocicados com a carne de porco). Atendimento ótimo, 
                    equipe solícita e muito simpática!
                </p>
                <div className='continer mx-auto text-center my-10'>
                    <span className='font-bold'>Entre nossos melhores pratos estão</span>
                    <ul className='list-disc my-5'>
                        <li>Pato</li>
                        <li>Porco</li>
                        <li>Carne</li>
                        <li>Arroz</li>
                        <li>Feijão</li>
                    </ul>
                </div>
            </div>  
        </div>
    )
}

export default Sobre