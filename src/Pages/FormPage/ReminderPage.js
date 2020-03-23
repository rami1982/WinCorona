import React, { Component } from 'react';
import './popupWapper.css';

export class FormPage extends Component {

    state = {
        
    }




    // BUTTONS HANDLERS

    radioFeverHandler = () => {
        console.log("radioFever");
    }

    tempetureHandler = () => {
        console.log("Tempeture")
    }

    diagnosticTypeHandler = () => {
        console.log("diagnosticTypeHandler");
    }

    generalFeelingHandler = () => {
        console.log("generalFeelingHandler");
    }

    

    // BUTTONS HANDLERS


	render() {
		return (
			<div className="formWrapper">

                {/* Radio button */}
                <div className="radioFever">
                    <label>האם יש לך חום</label>
                    <div>
                        <label>לא &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.radioFeverHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>כן &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.radioFeverHandler}/>
                    </div>
                </div>

                {/* input Temeture */}
                <div className="tempeture">
                    <label>טמפרטורת גוף</label>
                    <input type="text" onChange={this.tempetureHandler}/>
                </div>

                {/* diagnostic type */}
                <div className="diagnostics">
                    <label>איזה סוג של דיאגנוסטיק לקורונה עשית</label>
                    <div>
                        <label>לא עשיתי בדיקה &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.diagnosticTypeHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>S &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.diagnosticTypeHandler}/>
                    </div>
                    <div>
                        <label>L &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.diagnosticTypeHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>הבדיקה יצאה חיובית  &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.diagnosticTypeHandler}/>
                    </div>
                </div>

                {/* General fealing */}
                <div className="generalFeeling">
                    <label>מה ההרגשה הכללית שלך</label>
                    <div>
                        <label>1 &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.generalFeelingHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>2 &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.generalFeelingHandler}/>
                    </div>
                    <div>
                        <label>3 &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.generalFeelingHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>4  &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.generalFeelingHandler}/>
                    </div>
                    <div>
                        <label>5  &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.generalFeelingHandler}/>
                    </div>
                </div>
            </div>
		);
	}
}

export default FormPage;