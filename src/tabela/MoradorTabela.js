import React from 'react'

const MoradorTabela = props => (
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>CPF</th>
        <th>DTNascimento</th>
        <th>Telefone</th>
      </tr>
    </thead>
    <tbody>
      {props.moradores.length > 0 ? (
        props.moradores.map(morador => (
          <tr key={morador.id}>
            <td>{morador.nome}</td>
            <td>{morador.cpf}</td>
            <td>{morador.DTNascimento}</td>
            <td>{morador.Telefone}</td>
            <td>
            <button
                onClick={() => {
                  props.editRow(morador)
                }}
                className="button muted-button"
              >
                Editar
              </button>
              <button
                onClick={() => props.deleteMorador(morador.id)}
                className="button muted-button"
              >
                Deletar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Sem moradores cadastrados</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default MoradorTabela
