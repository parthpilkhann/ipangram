import React, { useEffect, useState } from 'react'
import "./MedicalPage.css"
import Temp from "../../components/form/Form"
import { useLocation, useNavigate } from "react-router-dom";

const Desc = () => {
    const [formValues, setFormValues] = useState([{
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
    }]);

    const nav = useNavigate();
    const loc = useLocation();
    useEffect(() => {
        if (loc.state) {
            setFormValues(loc.state)
        }
    }, [loc?.state])

    const addForm = () => {
        var initialValues = {
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "",
            q6: "",
            q7: "",
        }
        var tempForm = JSON.parse(JSON.stringify(formValues))
        tempForm.push(initialValues)
        setFormValues(tempForm);
    }

    const setFieldValueModified = (index, key, value) => {
        var tempForm = JSON.parse(JSON.stringify(formValues))
        var tempObj = tempForm[index]
        tempObj[key] = value
        console.log(tempObj);
        tempForm[index] = tempObj;
        console.log(tempForm);
        setFormValues(tempForm)
    }

    const handleSubmit = () => {
        nav('/display', { state: formValues })
    }
    console.log(formValues);

    return (
        <div className='desc' >
            {formValues?.map((item, index) => (
                <Temp key={index} index={index} values={formValues[index]} setFieldValue={setFieldValueModified} />
            ))}

            <div className="pageButtons">
                <button type="submit" className="btn btn-primary mt-3" onClick={addForm} >+</button>
                <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit} >Submit</button>
            </div>
        </div>
    )
}

export default Desc