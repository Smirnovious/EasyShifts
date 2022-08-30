/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {Table} from '../Table/Table'
import {supabase} from '../../supabaseClient'



export const AdminDashboard = ({user}) => {
  const [mokdanim, setMokdanim] = useState({})
  const [ahmashim, setAhmashim] = useState({})

  useEffect(() => {
  async function getMokdanimFromAPI(e) {
    let { data: Shifts, error } = await supabase
    .from('Shifts')
    .select('*')
    .order('id', {ascending: true})
    setMokdanim(Shifts);
    console.log('Everything is ok!')
  }
  async function getAhmashimFromAPI(e) {
    let { data: Shifts, error } = await supabase
    .from('Shifts_Ahmashim')
    .select('*')
    .order('id', {ascending: true})
    setAhmashim(Shifts);
    console.log('Everything is ok2!')
  }
  getMokdanimFromAPI();
  getAhmashimFromAPI();
}, [])

  // const putWorkersToWork = (e) => {
  //   e.preventDefault();
  //   for(let i = 0; i < mokdanim.length; i++) {
  //     let mokdanIndex = Math.floor(Math.random() * mokdanim[i].WorkersArray.length);
  //       //console.log(`Mokdan working in Shift ${mokdanim[i].id} is ${mokdanim[i].WorkersArray[mokdanIndex]}`);
  //     let ahmashIndex = Math.floor(Math.random() * ahmashim[i].WorkersArray.length);
  //     //console.log(`Ahmash working in Shift ${ahmashim[i].id} is ${ahmashim[i].WorkersArray[ahmashIndex]}`);
  //     //const filterShift = mokdanim.filter(shift => shift[0].WorkersArray === mokdanim[i].id);
  //     console.log(mokdanim[i].id);
      
  //     if(i % 3 === 0) {
       
  //     }}}

  const deleteWorkersDatabase = async (e) => {
    e.preventDefault(); 
    for(let i = 0; i < 21; i++) {
    const { data, error } = await supabase
    .from('Shifts')
    .update({ WorkersArray: [] })
    .eq('id', `${i}`)
    console.log('Deleted Database');
    const { data2, error2 } = await supabase
    .from('Shifts_Ahmashim')
    .update({ WorkersArray: [] })
    .eq('id', `${i}`)
    console.log('Deleted Ahmashim');
  }
}
  return (
    <>
    <h1>שלום, {user?.name}</h1>
    <Table 
    // putWorkersToWork={putWorkersToWork}
    deleteWorkersDatabase={deleteWorkersDatabase}
    />
    </>
  )
}
