import React from 'react';


function Question(props) {
	


		return (
            <div style={{width:"100%"}}>
                {props.data.type==='text'?
                    <div>
                        <input type="text" onChange={props.handleFormChange}/>
                    </div>
                :
                props.data.type==='radio'?
                    <div >
                    {props.data.options.map((optionText =>
                    <div>
                        <label>{props.data.question}</label>
                            <input type='radio' name={props.data.question} value={optionText} onChange={props.handleFormChange} />

                            </div>
                        ))}
                    </div>
                :
                    <div>nothing</div>
                }
            <div>
            <h2>Step {props.currentStep}</h2>
            <p>Total Steps: {props.totalSteps}</p>
            <p>Is Active: {props.isActive}</p>
            <p><button onClick={props.previousStep}>Previous Step</button></p>
            <p><button onClick={props.nextStep}>Next Step</button></p>
            <p><button onClick={()=>props.goToStep(2)}>Step 2</button></p>
            <p><button onClick={props.firstStep}>First Step</button></p>
            <p><button onClick={props.lastStep}>Last Step</button></p>
            </div>
            </div>
		);
	}



export default Question;