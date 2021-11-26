import React, { useState, Fragment } from 'react'
import AddMorador from './forms/AddMoradorForm'
import MoradorTabela from './tabela/MoradorTabela'
import EditMoradorForm from './forms/EditMoradorForm'

const App = () => {
	
	const moradoresData = [
		{ id: 1, nome: 'Ricardo', cpf: '04281906932', DTNascimento: '23/01/1988', Telefone: '48999863041' }
	]

	 const initialFormState = { id: null, nome: '', cpf: '', DTNascimento: '', Telefone: '' }

	
	const [ moradores, setMoradores ] = useState(moradoresData)
	const [ moradorAtual, setMoradorAtual ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)



	const addMorador = morador => {
		morador.id = moradores.length + 1
		setMoradores([ ...moradores, morador ])
	}

	const updateMorador = (id, updateMorador) => {
		setEditing(false)

		setMoradores(moradores.map(morador => (morador.id === id ? updateMorador : morador)))
	}

	const deleteMorador = id => {
		

		setMoradores(moradores.filter(morador => morador.id !== id))
	}

	const editRow = morador => {
		setEditing(true) 

		setMoradorAtual({ id: morador.id, nome: morador.nome, cpf: morador.cpf, DTNascimento: morador.DTNascimento, Telefone: morador.Telefone })
	}


	return (
		<div className="container">
			
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<EditMoradorForm
								editing={editing}
								setEditing={setEditing}
								moradorAtual={moradorAtual}
								updateMorador={updateMorador}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Cadastrar morador</h2>
							<AddMorador addMorador={addMorador} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>Moradores</h2>
					<MoradorTabela moradores={moradores} editRow={editRow} deleteMorador={deleteMorador} />
				</div>
			</div>
		</div>
	)
}

export default App
