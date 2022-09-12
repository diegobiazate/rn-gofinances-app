import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Cards } from '../../components/Cards';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { 
  Container,
  Header,
  UserWapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$15.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: '13/05/2020',
    },
    {
      id: '2',
      type: 'positive',
      title: 'Desenvolvimento de APP',
      amount: 'R$30.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: '16/05/2020',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Compra de PC',
      amount: 'R$6.000,00',
      category: {
        name: 'Compras',
        icon: 'shopping-bag'
      },
      date: '13/05/2020',
    },
    {
      id: '4',
      type: 'negative',
      title: 'Alimentação',
      amount: 'R$80,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: '13/05/2020',
    }
];

  return (
    <Container>
      <Header>
        <UserWapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/12459470?v=4'}} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Diego</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </UserWapper>
      </Header>

      <HighlightCards>
        <Cards title='Entradas' amount='R$ 4.000,00' lastTransaction='Dia 03 de Janeiro' type='up' />
        <Cards title='Saidas' amount='R$ 3.000,00' lastTransaction='Dia 05 de Janeiro' type='down' />
        <Cards title='Total' amount='R$ 1.000,00' lastTransaction='Dia 15 de Janeiro' type='total'/>
      </HighlightCards>

      <Transactions>
        <Title>Listagens</Title>

        <TransactionsList 
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <TransactionCard data={item} /> }
        />
        
      </Transactions>
    </Container>
  )
}
