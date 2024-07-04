import { useState } from "react"
import "./FormExample.css"
export function FormExample() {
    const [formInput, setFormInput] = useState({
        textInput: '',
        numberInput: '',
        passwordInput:'',
        textAreaInput: '',
        selectBoxInput: '',
        checkBoxInput: true,
        radioButtonInput: '',
        selectedDate:''
    })
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const [showPassword, setShowPassword] = useState(false);
    const onInputChange = (e) => {
        const {name, value, checked, type} = e.target;
        console.log(name, value, checked, type)
        formInput[name] = type=="checkbox"? checked: value;
        console.log(formInput)
        setFormInput({...formInput})
    }
    return <div>
        <h1>Form Example</h1>
        <div>
            <label>
                <p>Text Input</p>
                <input name="textInput" placeholder="Text Input" value={formInput.textInput} onChange={onInputChange}></input>
            </label>
        </div>
        <div>
            <label>
                <p>Number Input</p>
                <input name="numberInput" type="number" placeholder="Number Input" value={formInput.numberInput} onChange={onInputChange}></input>
            </label>
        </div>
        <div>
            <label>
                <p>Password Input</p>
                <input name="passwordInput" type={showPassword?"text":"password"} placeholder="Password Input" value={formInput.passwordInput} onChange={onInputChange}></input>
                {showPassword?<button onClick={()=> setShowPassword(false)}>Hide</button>: <button onClick={()=> setShowPassword(true)}>Show</button>}
            </label>
        </div>
        <div>
            <label>
                <p>Textarea Input</p>
                <textarea name="textAreaInput" cols={20} rows={3} type={Text} placeholder="Description" value={formInput.textAreaInput} onChange={onInputChange}></textarea>
            </label>
        </div>
        <div>
            <label>
                <p>Select Box: </p>
                <select value={formInput.selectBoxInput} name="selectBoxInput" onChange={onInputChange}>
                    <option value="" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
        </div>
        <div>
            <label>
                <p>Checkbox Input</p>
                <input name="checkBoxInput" type="checkbox" checked={formInput.checkBoxInput} onChange={onInputChange}></input> I Agree
            </label>
        </div>
        <div>
            <label>
                <p> Radio Input</p>
                <input checked={formInput.radioButtonInput == 'male'} name="radioButtonInput" type="radio" value="male" onChange={onInputChange} /> Male
                <input checked={formInput.radioButtonInput == 'female'} name="radioButtonInput" type="radio" value="female" onChange={onInputChange}/> Female
            </label>
        </div>
        <div>
            <label>
            <p>File Input</p>
            <input type="file" onChange={handleFileChange}></input>
            <p>Selected File: {selectedFile?.name}</p>
            </label>
        </div>
        <div>
        </div>
    </div>
}