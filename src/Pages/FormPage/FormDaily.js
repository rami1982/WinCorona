import React, { Component } from 'react';
import './formDaily.css';

import { connect } from 'react-redux';
import * as actionType from '../../Store/actions';

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

    bodyFeelingHandler = () => {
        console.log("bodyFeelingHandler");
    }

    capsOfTeaHandler = () => {
        console.log("capsOfTeaHandler");
    }

    ingestedHandler = () => {
        console.log("ingestedHandler");
    }

    soscialHandler = () => {
        console.log("soscialHandler");
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


                {/* ADD LOGIC!!!!!!!! */}


                {/* Body Feeling */}
                <div className="bodyFeeling">
                    <label>איך הגוף שלך מרגיש</label>
                    <div>
                        <label>1 &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.bodyFeelingHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>2 &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.bodyFeelingHandler}/>
                    </div>
                    <div>
                        <label>3 &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.bodyFeelingHandler}/>
                    </div>
                    <div>
                        <label>4  &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.bodyFeelingHandler}/>
                    </div>
                    <div>
                        <label>5  &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.bodyFeelingHandler}/>
                    </div>
                </div>

                {/* כמה כוסות תה שתית ב 24 השעות האחרונות */}
                <div className="capsOfTea">
                    <label>כמה כוסות תה שתית ב 24 השעות האחרונות</label>
                    <div>
                        <label>0 &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.capsOfTeaHandler}/>
                    </div>
                    <div>
                        <label>1-3 &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.capsOfTeaHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>3-6 &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.capsOfTeaHandler}/>
                    </div>
                    <div>
                        <label>7+ &nbsp;&nbsp;</label>
                        <input type='radio' name='a' onChange={this.capsOfTeaHandler}/>
                    </div>
                </div>

                {/* ingested  */}
                <div className="ingested">
                    <label>אלו מהדברים אכלת ב 24 השעות האחרונות</label>
                    <div className="ingestedDiv">
                        <div>
                            <label>בצל &nbsp;&nbsp;</label>
                            <input type='radio' name='onion' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>שום &nbsp;&nbsp;</label>
                            <input type='radio' name='garlic' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>תה &nbsp;&nbsp;</label>
                            <input type='radio' name='tea' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>אלכוהול &nbsp;&nbsp;</label>
                            <input type='radio' name='alcohol' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>סיגריות &nbsp;&nbsp;</label>
                            <input type='radio' name='cigarettes' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>תרגול רוחני &nbsp;&nbsp;</label>
                            <input type='radio' name='spiritual_practice' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>לימון &nbsp;&nbsp;</label>
                            <input type='radio' name='lemon' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>דבש &nbsp;&nbsp;</label>
                            <input type='radio' name='honey' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>תרופה &nbsp;&nbsp;</label>
                            <input type='radio' name='medicine' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>3 אומגה &nbsp;&nbsp;</label>
                            <input type='radio' name='omega' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>D ויטמין  &nbsp;&nbsp;</label>
                            <input type='radio' name='vitamin_d' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>C ויטמין  &nbsp;&nbsp;</label>
                            <input type='radio' name='vitamin_c' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>B12 ויטמין  &nbsp;&nbsp;</label>
                            <input type='radio' name='vitamin_b12' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>אחר ויטמין  &nbsp;&nbsp;</label>
                            <input type='radio' name='vitamin_other' onChange={this.ingestedHandler}/>
                        </div>
                    </div>


                    <div className="ingestedInput">
                        <label>אחר</label>
                        <input type="text" onChange={this.ingestedHandler}/>
                    </div>

                </div>


                 {/* Soscial */}
                 <div className="soscial">
                    <label>אילו אינטרקציות חברתיות היו לך</label>
                    <div>
                        <label>דיבור בטלפון &nbsp;&nbsp;</label>
                        <input type='radio' name='phone' onChange={this.soscialHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>פגישה עם אנשים &nbsp;&nbsp;</label>
                        <input type='radio' name='person' onChange={this.soscialHandler}/>
                    </div>
                    <div>
                        <label>עבודה &nbsp;&nbsp;</label>
                        <input type='radio' name='work' onChange={this.soscialHandler}/>
                    </div>
                    <div>
                        <label>חופשה  &nbsp;&nbsp;</label>
                        <input type='radio' name='vacation' onChange={this.soscialHandler}/>
                    </div>
                    <div>
                        <label>משגיח על הילדים  &nbsp;&nbsp;</label>
                        <input type='radio' name='kids' onChange={this.soscialHandler}/>
                    </div>
                    <div>
                        <label>חיות מחמד  &nbsp;&nbsp;</label>
                        <input type='radio' name='pets' onChange={this.soscialHandler}/>
                    </div>
                    <div className="ingestedInput">
                        <label>אחר</label>
                        <input type="text" onChange={this.soscialHandler}/>
                    </div>
                </div>
            </div>
		);
	}
}

const mapStateToProps = state => {
	return {
		page: state.page,
		pageTitle: state.pageTitle,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		switchPageStatus: (page) => dispatch({type: actionType.CURRENT_PAGE, pageName: page}),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);