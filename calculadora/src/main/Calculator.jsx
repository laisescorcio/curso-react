import React, { Component } from "react";
import Button from '../components/Button'
import Display from '../components/Display'

import "./Calculator.css";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0 //valor do índice do array anterior
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    // limpar o display
    clearMemory() {
        this.setState({ ...initialState })
    }

    // setar qual operação 
    setOperation(operation) {
        console.log(operation)
    }

    // adicionar dígito
    addDigit(n) {
        // Não deixar incluir mais que um ponto
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        //quando o Display tiver '0' e for adicionar outro número 
        // OU
        // Display estiver com clearDisplay ativado
        // Limpar Display
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        // Se limpar o display o valor atual será vazio, se não aparecerá o valor no display
        const currentValue = clearDisplay ? '' : this.state.displayValue

        // o valor do display será o número atual do display mais o que for digitado
        const displayValue = currentValue + n

        // Mudar o estado do display
        this.setState({ displayValue, clearDisplay: false })

        // quando digitado valor que for diferente de '.'
        if ( n !== '.') {
            //armazenando o indice do array que estou mexendo, seja no indice 0 ou indice 1
            const i = this.state.currentconst 

            newValue = parseFloat(displayValue)
            
            // clonar pra um novo array
            const values = [ ...this.state.values ]

            // valor muda no indice que eu estiver
            values[i] = newValue

            // values vai ser substituído pelo novo valor
            this.setState({ values })
        }
    }


  render() {
    return <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemory} triple />
        <Button label="/" click={this.setOperation} operation />
        <Button label="7"click={this.addDigit}/>
        <Button label="8" click={this.addDigit}/>
        <Button label="9" click={this.addDigit}/>
        <Button label="*" click={this.setOperation} operation />
        <Button label="4" click={this.addDigit}/>
        <Button label="5" click={this.addDigit}/>
        <Button label="6" click={this.addDigit}/>
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigit}/>
        <Button label="2" click={this.addDigit}/>
        <Button label="3" click={this.addDigit}/>
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit}/>
        <Button label="=" click={this.setOperation} operation />
    </div>;
  }
}
