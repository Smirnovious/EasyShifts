import React from 'react'
import './Table.css' 
import {supabase} from '../../supabaseClient'

export const Table = ({putWorkersToWork, deleteWorkersDatabase}) => {

  return (
    <>
    <table>
    <thead>
      <tr>
        <th scope="col">ראשון בוקר</th> 
        <th scope="col">שני בוקר</th>
        <th scope="col">שלישי בוקר</th>
        <th scope="col">רביעי בוקר</th>
        <th scope="col">חמישי בוקר</th>
        <th scope="col">שישי בוקר</th>
        <th scope="col">שבת בוקר</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td id="sundayM"></td>
        <td id="mondayM"></td>
        <td id="tuesdayM"></td>
        <td id="wednesdayM"></td>
        <td id="thursdayM"></td>
        <td id="fridayM"></td>
        <td id="saturdayM"></td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>ראשון צהריים</th>
        <th>שני צהריים</th>
        <th>שלישי צהריים</th>
        <th>רביעי צהריים</th>
        <th>חמישי צהריים</th>
        <th>שישי צהריים</th>
        <th>שבת צהריים</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td id="sundayA"></td>
        <td id="mondayA"></td>
        <td id="tuesdayA"></td>
        <td id="wednesdayA"></td>
        <td id="thursdayA"></td>
        <td id="fridayA"></td>
        <td id="saturdayA"></td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>ראשון לילה</th>
        <th>שני לילה</th>
        <th>שלישי לילה</th>
        <th>רביעי לילה</th>
        <th>חמישי לילה</th>
        <th>שישי לילה</th>
        <th>שבת לילה</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td id="sundayN"></td>
        <td id="mondayN"></td>
        <td id="tuesdayN"></td>
        <td id="wednesdayN"></td>
        <td id="thursdayN"></td>
        <td id="fridayN"></td>
        <td id="saturdayN"></td>
      </tr>
    </tbody>
    </table>

<form onSubmit={putWorkersToWork}>
<button type='submit' id="create" className='myButton'>צור משמרת אחמש + מוקדן</button>
</form>
<form onSubmit={deleteWorkersDatabase}>
<button type='submit' id="delete" className='myButton'>מחק משמרות</button>
</form>
</>
  )
}


