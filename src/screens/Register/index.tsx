import React, {useState} from "react";
import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { TransactionButton } from "../../components/Forms/TransactionButton";
import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from "./styles";

export function Register(){
    const [typeTransaction, setTypeTransaction] = useState('');

    function handleTransactionTypesSelect(type: 'up' | 'down'){
        setTypeTransaction(type);
    }

    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />
                    <TransactionTypes>
                        <TransactionButton type="up" title="Entrada" onPress={() => handleTransactionTypesSelect('up')} isActive={typeTransaction === 'up'}/>
                        <TransactionButton type="down" title="Saída" onPress={() => handleTransactionTypesSelect('down')} isActive={typeTransaction === 'down'}/>
                    </TransactionTypes>
                    
                </Fields>
                

                <Button title="Enviar" />
            </Form>
            
        </Container>
    );
}