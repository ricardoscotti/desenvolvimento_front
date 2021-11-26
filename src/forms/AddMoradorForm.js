import React, { useState } from 'react'

const AddMorador = props => {
	const initialFormState = { id: null, nome: '', cpf: '', DTNascimento: '', Telefone: '' }
	const [ morador, setMorador ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setMorador({ ...morador, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!morador.nome || !morador.cpf) return

				props.addMorador(morador)
				setMorador(initialFormState)
			}}
		>
			<label>Nome</label>
			<input type="text" name="nome" value={morador.nome} onChange={handleInputChange} />
			<label>CPF</label>
			<input type="text" name="cpf" value={morador.cpf} onChange={handleInputChange} />
			<label>DTNascimento</label>
			<input type="text" name="DTNascimento" value={morador.DTNascimento} onChange={handleInputChange} />
			<label>Telefone</label>
			<input type="text" name="Telefone" value={morador.Telefone} onChange={handleInputChange} />
			<button>Adicionar morador</button>
		</form> 
	)
}

export default AddMorador
