import React from 'react'
import ReactDOM from 'react-dom'

const dataInit = {
  cep: "",
  logradouro: "",
  complemento: "", 
  bairro: "",
  localidade: "",
  uf: "",
  ibge: "",
  gia: "",
  ddd: "",
  siafi: "",
}
// eslint-disable-next-line no-undef
class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = { 
      data: dataInit
    }
  }
  url = () => {
    return `http://viacep.com.br/ws/${this.state.cep}/json/`;
  }
  handleChange = (event) => {
      const value = event.target.value;
      const name = event.target.name;    
      this.setState({ [name] : value }, () => {      
        this.buscarCep();
      });
  }

  buscarCep() {
      if(this.state.cep.length < 8) {
          return;
      } else {      
           fetch(this.url(), {mode: 'cors'})
            .then((res) => res.json())
            .then((data) => {
                if (data.hasOwnProperty("erro")) {
                    this.setState({data: dataInit});
                    alert('Cep não existente');
                } else {
                    this.setState({data});
                }
            })
            // eslint-disable-next-line no-undef
            .catch(err => consolelog(err));
      }
  }
    render() {
      return (
        <div>
          <label> Digite o cep:
            <input 
               name="cep" 
               maxlength={8}
               value={this.state.cep} 
               onChange={this.handleChange}
            />           
          </label>
          <div>Endereço/Rua: {this.state.data.logradouro}</div>
          <div>Complemento: {this.state.data.complemento}</div>
          <div>Bairro: {this.state.data.bairro}</div>
          <div>Cidade: {this.state.data.localidade}</div>
          <div>UF: {this.state.data.uf}</div>
        </div>
      )
    }
  }

ReactDOM.render( <App/> , document.getElementById('root'));

// eslint-disable-next-line no-unused-expressions
<div id="root"></div>