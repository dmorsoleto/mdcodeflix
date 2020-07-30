import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
     const valoresIniciais = {
          nome: '',
          descricao: '',
          cor: ''
     }

     const [categorias, setCategorias] = useState([]);
     const [values, setValues] = useState(valoresIniciais);

     function setValue(chave, valor) {
          setValues({
               ...values,
               [chave]: valor
          })
     }

     function handleChange(event) {
          setValue(
               event.target.getAttribute('name'),
               event.target.value
          );
     }

     return (
          <PageDefault>
               <h1>Cadastro de Categoria: {values.nome}</h1>

               <form onSubmit={function handleSubmit(e) {
                         e.preventDefault();
                         setCategorias([
                              ...categorias,
                              values
                         ]);

                         setValues({valoresIniciais})
                    }}>
                    
                    <FormField 
                         label="Nome da Categoria:"
                         value={values.nome}
                         type="text"
                         name="nome"
                         onChange={handleChange}
                    />

                    <FormField 
                         label="Descrição:"
                         type="textarea"
                         value={values.descricao}
                         name="descricao"
                         onChange={handleChange}
                    />

                    <FormField 
                         label="Cor:"
                         value={values.cor}
                         type="color"
                         name="cor"
                         onChange={handleChange}
                    />

                    <button>
                         Cadastrar
                    </button>
               </form>

               <ul>
                    {categorias.map((categoria, index)=>{
                         return (
                              <li key={index}>
                                   {categoria.nome}
                              </li>
                         );
                    })}
               </ul>

               <Link to="/">
                    Ir para home
               </Link>
          </PageDefault>
     );
}

export default CadastroCategoria;