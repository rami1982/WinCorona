import React, { Component } from 'react';
import './formDaily.css';

import { connect } from 'react-redux';
import * as actionType from '../../Store/actions';

export class FormPage extends Component {

    state = {

    }




    // BUTTONS HANDLERS

    radioFeverHandler = (e) => {
        console.log(e.target.value);
    }

    tempetureHandler = (e) => {
        console.log(e.target.value)
    }
    
    diagnosticTypeHandler = (e) => {
        console.log(e.target.value);
    }

    generalFeelingHandler = (e) => {
        console.log(e.target.value);
    }

    bodyFeelingHandler = (e) => {
        console.log(e.target.value);
    }

    capsOfTeaHandler = (e) => {
        console.log(e.target.value);
    }

    ingestedHandler = (e) => {
        console.log(e.target.value);
    }

    soscialHandler = (e) => {
        console.log(e.target.value);
    }

    

    // BUTTONS HANDLERS


	render() {
		return (
			<div className="formWrapper">

                {/* Radio button */}
                <div className="basic radioFever">
                    <label>האם יש לך חום</label>
                    <div>
                        <label>לא &nbsp;&nbsp;</label>
                        <input type='radio' name='fever' value="no" onChange={this.radioFeverHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>כן &nbsp;&nbsp;</label>
                        <input type='radio' name='fever' value="yes" onChange={this.radioFeverHandler}/>
                    </div>
                </div>

                {/* input Temeture */}
                <div className="basic tempeture">
                    <label>טמפרטורת גוף</label>
                    <input type="text" onChange={this.tempetureHandler}/>
                </div>

                {/* diagnostic type */}
                <div className="basic diagnostics">
                    <label>איזה סוג של דיאגנוסטיק לקורונה עשית</label>
                    <div>
                        <label>לא עשיתי בדיקה &nbsp;&nbsp;</label>
                        <input type='radio' name='diagnostics' value="no" onChange={this.diagnosticTypeHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>S &nbsp;&nbsp;</label>
                        <input type='radio' name='diagnostics' value="s" onChange={this.diagnosticTypeHandler}/>
                    </div>
                    <div>
                        <label>L &nbsp;&nbsp;</label>
                        <input type='radio' name='diagnostics' value="l" onChange={this.diagnosticTypeHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>הבדיקה יצאה חיובית  &nbsp;&nbsp;</label>
                        <input type='radio' name='diagnostics' value="yes" onChange={this.diagnosticTypeHandler}/>
                    </div>
                </div>

                {/* General fealing */}
                <div className="basic generalFeeling">
                    <label>מה ההרגשה הכללית שלך</label>
                    <div>
                        <label>1 &nbsp;&nbsp;</label>
                        <input type='radio' name='g_feeling' value="1" onChange={this.generalFeelingHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>2 &nbsp;&nbsp;</label>
                        <input type='radio' name='g_feeling' value="2" onChange={this.generalFeelingHandler}/>
                    </div>
                    <div>
                        <label>3 &nbsp;&nbsp;</label>
                        <input type='radio' name='g_feeling' value="3" onChange={this.generalFeelingHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>4  &nbsp;&nbsp;</label>
                        <input type='radio' name='g_feeling' value="4" onChange={this.generalFeelingHandler}/>
                    </div>
                    <div>
                        <label>5  &nbsp;&nbsp;</label>
                        <input type='radio' name='g_feeling' value="5" onChange={this.generalFeelingHandler}/>
                    </div>
                </div>


                {/* ADD LOGIC!!!!!!!! */}


                {/* Body Feeling */}
                <div className="basic bodyFeeling">
                    <label>איך הגוף שלך מרגיש</label>
                    <div>
                        <label>1 &nbsp;&nbsp;</label>
                        <input type='radio' name='b_feeling' value="1" onChange={this.bodyFeelingHandler}/>
                    </div>
                    <div>
                        <label>2 &nbsp;&nbsp;</label>
                        <input type='radio' name='b_feeling' value="2" onChange={this.bodyFeelingHandler}/>
                    </div>
                    <div>
                        <label>3 &nbsp;&nbsp;</label>
                        <input type='radio' name='b_feeling' value="3" onChange={this.bodyFeelingHandler}/>
                    </div>
                    <div>
                        <label>4  &nbsp;&nbsp;</label>
                        <input type='radio' name='b_feeling' value="4" onChange={this.bodyFeelingHandler}/>
                    </div>
                    <div>
                        <label>5  &nbsp;&nbsp;</label>
                        <input type='radio' name='b_feeling' value="5" onChange={this.bodyFeelingHandler}/>
                    </div>
                </div>

                {/* כמה כוסות תה שתית ב 24 השעות האחרונות */}
                <div className="basic capsOfTea">
                    <label>כמה כוסות תה שתית ב 24 השעות האחרונות</label>
                    <div>
                        <label>0 &nbsp;&nbsp;</label>
                        <input type='radio' name='tea' value="0" onChange={this.capsOfTeaHandler}/>
                    </div>
                    <div>
                        <label>1-3 &nbsp;&nbsp;</label>
                        <input type='radio' name='tea' value="1-3" onChange={this.capsOfTeaHandler}/>
                    </div>
                    <div>
                        <label>3-6 &nbsp;&nbsp;</label>
                        <input type='radio' name='tea' value="3-6" onChange={this.capsOfTeaHandler}/>
                    </div>
                    <div>
                        <label>7+ &nbsp;&nbsp;</label>
                        <input type='radio' name='tea' value="7" onChange={this.capsOfTeaHandler}/>
                    </div>
                </div>

                {/* ingested  */}
                <div className="basic ingested">
                    <label>אלו מהדברים אכלת ב 24 השעות האחרונות</label>
                    <div className="ingestedDiv">
                        <div>
                            <label>בצל &nbsp;&nbsp;</label>
                            <input type='checkbox' name='ingested' value="onion" onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>שום &nbsp;&nbsp;</label>
                            <input type='checkbox' name='ingested' value="garlic" onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>תה &nbsp;&nbsp;</label>
                            <input type='checkbox' name='ingested' onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>אלכוהול &nbsp;&nbsp;</label>
                            <input type='checkbox' name='ingested' value="alcohol" onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>סיגריות &nbsp;&nbsp;</label>
                            <input type='checkbox' name='cigarettes' value="sigarets" onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>תרגול רוחני &nbsp;&nbsp;</label>
                            <input type='checkbox' name='ingested' value="speriat" onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>לימון &nbsp;&nbsp;</label>
                            <input type='checkbox' name='lemon' value="lemon" onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>דבש &nbsp;&nbsp;</label>
                            <input type='checkbox' name='honey' value="honey" onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>תרופה &nbsp;&nbsp;</label>
                            <input type='checkbox' name='medicine' value="medician" onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>3 אומגה &nbsp;&nbsp;</label>
                            <input type='checkbox' name='omega' value="3" onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>D ויטמין  &nbsp;&nbsp;</label>
                            <input type='checkbox' name='vitamin_d' value="d" onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>C ויטמין  &nbsp;&nbsp;</label>
                            <input type='checkbox' name='vitamin_c' value="c" onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>B12 ויטמין  &nbsp;&nbsp;</label>
                            <input type='checkbox' name='vitamin_b12' value="b12" onChange={this.ingestedHandler}/>
                        </div>
                        <div>
                            <label>אחר ויטמין  &nbsp;&nbsp;</label>
                            <input type='radio' name='vitamin_other' value="else_v" onChange={this.ingestedHandler}/>
                        </div>
                    </div>


                    <div className="basic ingestedInput">
                        <label>אחר</label>
                        <input type="text" onChange={this.ingestedHandler}/>
                    </div>

                </div>


                 {/* Soscial */}
                 <div className="basic soscial">
                    <label>אילו אינטרקציות חברתיות היו לך</label>
                    <div>
                        <label>דיבור בטלפון &nbsp;&nbsp;</label>
                        <input type='checkbox' name='phone' onChange={this.soscialHandler} defaultChecked/>
                    </div>
                    <div>
                        <label>פגישה עם אנשים &nbsp;&nbsp;</label>
                        <input type='checkbox' name='person' value="people" onChange={this.soscialHandler}/>
                    </div>
                    <div>
                        <label>עבודה &nbsp;&nbsp;</label>
                        <input type='checkbox' name='work' value="work" onChange={this.soscialHandler}/>
                    </div>
                    <div>
                        <label>חופשה  &nbsp;&nbsp;</label>
                        <input type='checkbox' name='vacation' value="vacation" onChange={this.soscialHandler}/>
                    </div>
                    <div>
                        <label>משגיח על הילדים  &nbsp;&nbsp;</label>
                        <input type='checkbox' name='kids' value="kids" onChange={this.soscialHandler}/>
                    </div>
                    <div>
                        <label>חיות מחמד  &nbsp;&nbsp;</label>
                        <input type='checkbox' name='pets' value="pets" onChange={this.soscialHandler}/>
                    </div>
                    <div className="basic ingestedInput">
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