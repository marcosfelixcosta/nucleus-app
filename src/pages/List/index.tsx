import React, {useMemo, useState,useEffect} from "react";
//import Content from "../../components/Content";



import ContentHeader from "../../components/ContentHeader";

import SelectImput from "../../components/SelectImput";

import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import gains from '../../repositorie/gains';
import expenses from '../../repositorie/expenses';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';


import {Container, Content, Filters} from './styles';

interface IRouteParams {
  match: {
    params: {type: string;}
  }
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({match}) => {

  const [data,setData] = useState<IData[]>([]);

  const {type} = match.params;

  const title = useMemo(()=> {
    return type ==='entry-balance' ? 'Entradas' : 'Saidas'
 
  },[type]);

  const lineColor = useMemo(()=> {
    return type ==='entry-balance' ? '#F7931B' : '#E44C4E'
 
  },[type]);

  const listData = useMemo(() =>{
    return type ==='entry-balance' ? gains : expenses;

  },[type]);

  const months = [
    {value: 7, label:'Julho'},
    {value: 8, label:'Agosto'},
    {value: 9, label:'Setembro'}
  ];

  const years   = [
    {value: 2020, label:2020},
    {value: 2019, label:2019},
    {value: 2018, label:2018},
  ];

 useEffect(()=> {

  const response =listData.map(item =>{
    return {
      id: String (Math.random() * data.length),
      description: item.description,
      amountFormatted: formatCurrency(Number(item.amount)),
      frequency: item.frequency,
      dataFormatted: formatDate(item.date),
      tagColor: item.frequency === 'recorrente' ? '#E44C4E' : '#4E41F0'
    }
  })
 setData(response);

  },[]);


  return (
    <Container>

     <ContentHeader   title={title} lineColor={lineColor}>
      <SelectImput options={months} />
      <SelectImput options={years} />

     </ContentHeader>

     <Filters>
        <button type="button"
         className="tag-filter tag-filter-recurrent"
         >Recorrente</button>

        <button type="button" 
        className="tag-filter tag-filter-eventual"
        >Eventuais</button>

     </Filters>

     <Content>

       {

      data.map(item =>(
     <HistoryFinanceCard 
     key={item.id}
     tagColor={item.tagColor}
     title={item.description}
     subtitle={item.dataFormatted}
     amount={item.amountFormatted}
     />
     ))
       }

     </Content>
     
    </Container>
  );

 }
 export default List;
