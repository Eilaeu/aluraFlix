import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  /*function handleChange(e){
    const{getAttribute,value} = e.target;
    setValue(
      getAttribute('name'),
      value
    );
  }*/

  function handleChange(e) {
    const { name, value } = e.target;
    setValue(name, value);
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: <span style={{color: values.cor}}> {values.nome}</span></h1>

      <form  onSubmit={function handleSubmit(e){
          e.preventDefault();
          console.log('enviar form');
          setCategorias([
            ...categorias,values
          ])
          setValues({valoresIniciais})
          
      }}>
        <div>
          <FormField
            label = "Nome da Categoria"
            type="text"
            value = {values.nome}
            name='nome'
            onChange = {handleChange}
          />
          <FormField
            label = "Descrição"
            type="textarea"
            value = {values.descricao}
            name='descricao'
            onChange = {handleChange}
          />
          <FormField
            label = "Cor"
            type="color"
            value = {values.cor}
            name='cor'
            onChange = {handleChange}
          />
         
        </div>

        <button>
          Cadastrar
        </button>
      </form>
      <ul>
        {categorias.map((categoria, indice)=>{
          return<li style={{color: categoria.cor}} key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
        })}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;