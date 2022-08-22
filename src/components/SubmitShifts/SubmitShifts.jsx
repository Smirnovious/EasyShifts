import React, {useState, useEffect} from 'react'
import './SubmitShifts.css' 
import {supabase} from '../../supabaseClient'
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//Sweet Alert Library
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const SubmitShifts = () => {
const [user, setUser] = useState('')
const [workerPref, setWorkerPref] = useState([])
const [role, setRole] = useState('')


const handleSubmit = async (e) => { 
        e.preventDefault();
        if(user && workerPref.length >= 3 && role) { // First If...Else for Msg Success/Error
            // Loading.hourglass('מגיש אילוצים');
            // Loading.hourglass({
            // clickToClose: true,
            // svgSize: '19px',
            // });
            Notify.info('שולח אילוצים, אפשר להמשיך לגלוש', {
                ID: 'MKA',
                showOnlyTheLastOne: true,
                });
                
            for(let i = 0; i < workerPref.length; i++){
            let { data: Shifts, error } = await supabase
            .from(role === 'mokdan' ? "Shifts" : "Shifts_Ahmashim")
            .select('WorkersArray').eq('id', String(workerPref[i]))
            let newWorkersArray = Shifts[0].WorkersArray
            // if inside the first if...else to see if the worker is already in the array
            if (newWorkersArray === null){
                newWorkersArray = user
                const { data, error } = await supabase
                .from(role === 'mokdan' ? "Shifts" : "Shifts_Ahmashim")
                .insert([
                { id: String(workerPref[i]), WorkersArray: newWorkersArray },
                ])
            } else {
                    newWorkersArray.push(user)
                    const { data, error } = await supabase
                    .from(role === 'mokdan' ? "Shifts" : "Shifts_Ahmashim")
                    .update([
                    { id: String(workerPref[i]), WorkersArray: newWorkersArray },
                    ])
        }}; 
        Loading.remove();
        Notify.success('אילוצים נשלחו בהצלחה!');

        // Else of the first if...else for Msg Success/Error
        } else {
        Swal.fire({
            icon: 'error',
            title: 'שגיאה',
            text: 'אנא לכתוב שם פרטי + תפקיד ולהגיש 3 משמרות לפחות!',
            footer: '<a href="">להתקשר לרומן באמצע הלילה שיפתור את הבעיה</a>'
          })}
        };

const checkboxChecked = (e) => {
    let idOfCheckBox = e.target.value;
    setWorkerPref([...workerPref, idOfCheckBox])
    if(workerPref.includes(idOfCheckBox)){
        workerPref.filter(id => id !== idOfCheckBox)
    }
}


  return (
    <>
    <form onSubmit={handleSubmit}>
    <h2>אילוצים</h2>
        <h2>{user ? `שלום ${user}`: null}</h2>
        <input className='userInput' type="text" placeholder="מה שמך?" onChange={e => setUser(e.target.value)} />
        <div className='checkboxDiv'>
        <div>
            <input className='radioBtn' type="radio" id="ahmash" name="drone" value="ahmash"
                     onClick={()=> setRole('ahmash')}/>
            <label for="ahmash">אני אחמ"ש/ית</label>
        </div>
        <div>
            <input className='radioBtn' type="radio" id="mokdan" name="drone" value="mokdan" onClick={()=> setRole('mokdan')}/>
            <label for="mokdan">אני מוקדנ/ית</label>
        </div>
        </div>
        <div className='table'>

        <div className="flex">
            <div className="button">
                <label>
                <input type="checkbox" id= "0" value="0" name="sundayMorning" onChange={checkboxChecked}/><span>ראשון בוקר</span>
                </label>
            </div>
            <div className="button">
                <label>
                <input type="checkbox" value="3" name="mondayMorning" onChange={checkboxChecked}/><span>שני <br /> בוקר</span>
                </label>
            </div>
            <div className="button">
                <label>
                <input type="checkbox" value="6" name="tuesdayMorning" onChange={checkboxChecked}/><span>שלישי בוקר</span>
                </label>
            </div>
            <div className="button">
                <label>
                <input type="checkbox" value="9" name="wednesdayMorning" onChange={checkboxChecked}/><span>רביעי בוקר</span>
                </label>
            </div>
            <div className="button">
                <label>
                <input type="checkbox" value="12" name="thursdayMorning" onChange={checkboxChecked}/><span>חמישי בוקר</span>
                </label>
            </div>
            <div className="button">
                <label>
                <input type="checkbox" value="15" name="fridayMorning" onChange={checkboxChecked}/><span>שישי <br />בוקר</span>
                </label>
            </div>
            <div className="button">
                <label>
                <input type="checkbox" value="18" name="saturdayMorning" onChange={checkboxChecked}/><span>שבת <br />בוקר</span>
                </label>
            </div>
        </div>

        <div className="flex2">
            <div className="button">
                <label>
                <input type="checkbox" value="1" name="sundayAfternoon" onChange={checkboxChecked}/><span>ראשון צהריים</span>
                </label>
            </div>
            <div className="button">
                <label>
                <input type="checkbox" value="4" name="mondayAfternoon" onChange={checkboxChecked}/><span>שני צהריים</span>
                </label>
            </div>

            <div className="button">
                <label>
                <input type="checkbox" value="7" name="tuesdayAfternoon" onChange={checkboxChecked}/><span>שלישי צהריים</span>
                </label>
            </div>

            <div className="button">
                <label>
                <input type="checkbox" value="10" name="wednesdayAfternoon" onChange={checkboxChecked}/><span>רביעי צהריים</span>
                </label>
            </div>
            <div className="button">
                <label>
                <input type="checkbox" value="13" name="thursdayAfternoon" onChange={checkboxChecked}/><span>חמישי צהריים</span>
                </label>
            </div>
            <div className="button">
                <label>
                <input type="checkbox" value="16" name="fridayAfternoon" onChange={checkboxChecked}/><span>שישי צהריים</span>
                </label>
            </div>
            <div className="button">
                <label>
                <input type="checkbox" value="19" name="saturdayAfternoon" onChange={checkboxChecked}/><span>שבת צהריים</span>
                </label>
            </div>
        </div>

        <div className="flex3">
        <div className="button">
            <label>
            <input type="checkbox" value="2" name="sundayNight" onChange={checkboxChecked}/><span>ראשון לילה</span>
            </label>
            </div>
        <div className="button">
            <label>
            <input type="checkbox" value="5" name=" mondayNight" onChange={checkboxChecked}/><span>שני <br />לילה</span>
            </label>
        </div>
       
        <div className="button">
            <label>
            <input type="checkbox" value="8" name=" tuesdayNight" onChange={checkboxChecked}/><span>שלישי לילה</span>
            </label>
        </div>
        
        <div className="button">
            <label>
            <input type="checkbox" value="11" name="wednesdayNight" onChange={checkboxChecked}/><span>רביעי<br /> לילה</span>
            </label>
        </div>

        <div className="button">
            <label>
            <input type="checkbox" value="14" name="thursdayNight" onChange={checkboxChecked} /><span>חמישי לילה</span>
            </label>
        </div>

        <div className="button">
            <label>
            <input type="checkbox" value="17" name="fridayNight" onChange={checkboxChecked}/><span>שישי <br />לילה</span>
            </label>
        </div>
        
        <div className="button">
            <label>
            <input type="checkbox" value="20" name="saturdayNight" onChange={checkboxChecked}/><span>שבת<br /> לילה</span>
            </label>
    </div>
    </div> 
    </div>
    
    <button type="sumbit" className="submit myButton">הגש משמרות</button>
    </form>
    </>
  )
}
