import { useNavigate } from 'react'
import { useState } from 'react'
import Bloodservice from '../services/Bloodservice'


const BloodForm1 = () => {
    let navigate = useNavigate()

    let [bloodDetails, setbloodDetails] = useState({ donorname: "", address: "", bloodgroup: "", mobileno: "", gender: "" })

    const getblood = () => {
            Bloodservice.getBlood().then(() => {
                console.log(bloodDetails)
                navigate("/")
            }).catch((err) => {
                console.log("error occured" + JSON.stringify(err))
            })


        }

    return (
        <div>

            <form>
                <label htmlfor="donorname">DonorName</label>
                <input type="text" id="donorname" name="donorname" value={bloodDetails.donorname} onChange={(event) => { setbloodDetails({ ...this.bloodDetails, donorname: event.target.value }) }}></input>

                <label htmlfor="adress">Adress</label>
                <input type="text" id="adress" name="adress" value={bloodDetails.adress} onChange={(event) => { setbloodDetails({ ...this.bloodDetails, adress: event.target.value }) }}></input>

                <label htmlfor="bloodgroup">BloodGroup</label>
                <input type="text" id="bloodgroup" name="bloodgroup" value={bloodDetails.bloodgroup} onChange={(event) => { setbloodDetails({ ...this.bloodDetails, bloodgroup: event.target.value }) }}></input>

                <label htmlfor="mobileno">MobileNo</label>
                <input type="text" id="mobileno" name="mobileno" value={bloodDetails.mobileno} onChange={(event) => { setbloodDetails({ ...this.bloodDetails, mobileno: event.target.value }) }}></input>

                <label htmlfor="gender">Gender</label>
                <input type="text" id="gender" name="gender" value={bloodDetails.gender} onChange={(event) => { setbloodDetails({ ...this.bloodDetails, gender: event.target.value }) }}></input>
                <button type="button" id="btn" name="btn" value="btn" onClick={getblood} >Add Donor</button>


            </form>
        </div>
    )

}
export default BloodForm1;