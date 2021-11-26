import React, { useState, useEffect } from 'react'

const EditMoradorForm = props => {
  const [ morador, setMorador ] = useState(props.moradorAtual)

  useEffect(
    () => {
      setMorador(props.moradorAtual)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setMorador({ ...morador, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateMorador(morador.id, morador)
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
      <button>Atualizar morador</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button"> 
        Cancelar
      </button>
    </form>
  )
}

export default EditMoradorForm