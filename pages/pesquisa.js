import React, {useState} from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {

    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0,
        Observacao: ''
    })

    const [sucess, setSucess] = useState(false)
    const [retorno, setRetorno] = useState({})

    const notas = [0, 1, 2, 3, 4, 5]

    const checkvalidate = () => {

        if(form.Nome.length < 1 || form.Email.length < 1 || form.Whatsapp.length < 1 || form.Nota.checked){
            return false
        }

        return true
    }

    const save = async() => {
        
        if(checkvalidate()){
            try{
                const response = await fetch('api/save', {
                    method: 'POST',
                    body: JSON.stringify(form)
                })
                const data = await response.json()
                setSucess(true)
                setRetorno(data)
            }catch(err){

            }
        }else{
            alert('Preencha os campos')
        }
    }

    const onChage = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div className='py-6'>
            <PageTitle title='Pesquisa'/>
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e Sugestões</h1>
            <p className='text-center mb-6'>
                O restaurante X sempre busca por atender melhor seus clientes.<br/> Por isso, estamos sempre abe
            </p>

            {!sucess && <div className='lg:w-1/5 sm:w-1/6 mx-auto'>
                <label className='font-bold'>Nome:</label>
                <input className='p-4 block shadow bg-blue-100 my-2 mx-auto rounded' required placeholder='Nome' onChange={onChage} name='Nome' value={form.Nome}/>
                <label className='font-bold'>Email:</label>
                <input className='p-4 block shadow bg-blue-100 my-2 mx-auto rounded' required type="email" placeholder='Email'  onChange={onChage} name='Email' value={form.Email}/>
                <label className='font-bold'>Whatsapp:</label>
                <input className='p-4 block shadow bg-blue-100 my-2 mx-auto rounded' required placeholder='Whatsapp'  onChange={onChage} name='Whatsapp' value={form.Whatsapp}/>
                <label className='font-bold'>Dê um nota:</label>
                <div className='flex py-6'>
                    { notas.map(nota => {
                        return (
                            <label className='block w-1/6 text-center'>
                                {nota} <br/>
                                <input type="radio" name='Nota' value={nota} onChange={onChage}/>
                            </label>)
                    })
                }
                </div>
                <label className='font-bold'> Deixe uma sugestão ou crítica</label>
                <input className='p-8 block shadow bg-blue-100 my-2 mx-auto rounded ' required placeholder='Obs!'  onChange={onChage} name='Observacao' value={form.Observacao}/>
                <button className = 'bg-green-400 px-4 py-2 font-bold rounded-lg shadow-lg hover:shadow'
                 onClick={save}>Salvar 
                </button>
            </div>}
        {sucess && 
            <div className='lg:w-1/5 sm:w-full mx-auto'>
                <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert"'>Obrigado pela sugestão ou crítica</p>
                {
                   retorno.showCoupom && <div className='text-center border p-4 mb-4'>
                       Seu cupom: <br />
                       <span className='font-bold text-2xl'>{retorno.Cupom}</span>
                   </div>
                }
                {
                   retorno.showCoupom && <div className='text-center border p-4 mb-4'>
                       <span className='font-bold block mb-2'>{retorno.Promo}</span>
                        <br/>
                        <span className='italic'>Tire um print ou foto e apresente na hora pagamento</span>
                   </div>
                }
            </div>
        }
        </div>
    )
}

export default Pesquisa