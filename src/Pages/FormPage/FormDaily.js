import React from 'react';
import './formDaily.css';
import { Animate, AnimateGroup,useAnimateGroup } from 'react-simple-animate';

import { connect } from 'react-redux';
import * as actionType from '../../Store/actions';
import StepWizard from 'react-step-wizard';
import Question from './Question';
import {questions} from './Questions';

const props = {
    start: { opacity: 0 },
    end: { opacity: 1 }
  };

function FormDaily() {
	
	const [currentStep, setStep] = React.useState(0);
	const [formData, setformData] = React.useState({
		question1:'',
		question2:'',
		question3:'',
		question4:'',
		question5:'',
		question6:'',
	});

	function onStepChange(info){
		console.log(info)
		setStep(info.activeStep-1)
	}
		
    function handleFormChange(data){
		setformData({...formData,['question'+currentStep]:data.target.value})
		//setStep(curr)
	}
    console.table(formData)

    const questionText = questions[currentStep].question.split()

    const { styles, play } = useAnimateGroup({
        sequences: questionText.map(() => ({
          start: { opacity: 1, transform: 'translateY(0)' },
          end: { opacity: 0, transform: 'translateY(-10px)' }
        }))
      })
      
		return (
            <div className="container">
                <div style={{display:'flex'}}>
                    <div >
                    <img src="/images/medical_question_small.png" alt="doctor"/>
                    </div>
                    
                    <div className="speech-bubble" style={{marginTop:'15px',width:'fit-content',color:'white'}}>
                    <AnimateGroup play>
                    {questionText.map((item, index) => <div key={item} style={styles[index]}>{item}</div>)}
                    </AnimateGroup>

                </div>
                </div>
                <StepWizard onStepChange={onStepChange}>
                    {questions.map((question,index)=>
                    <Question data={question} key={index} questionNumber={index} handleFormChange={handleFormChange} />
                    )}
                {/* <Question handleFormChange={handleFormChange} />
                <Question handleFormChange={handleFormChange} /> */}
            </StepWizard>
			<div className="formWrapper">
            
                {/* Radio button */}
                

                {/* input Temeture */}
                {/* <div className="basic tempeture">
                    <label>טמפרטורת גוף</label>
                    <input type="text" onChange={this.tempetureHandler}/>
                </div> */}

                {/* diagnostic type */}
                <div className="basic diagnostics">
                    <label>איזה סוג של דיאגנוסטיק לקורונה עשית</label>
                    <div>
                        <label>לא עשיתי בדיקה &nbsp;&nbsp;</label>
                        <input type='radio' name='diagnostics' value="no" onChange={handleFormChange} defaultChecked/>
                    </div>
                    <div>
                        <label>S &nbsp;&nbsp;</label>
                        <input type='radio' name='diagnostics' value="s" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>L &nbsp;&nbsp;</label>
                        <input type='radio' name='diagnostics' value="l" onChange={handleFormChange} defaultChecked/>
                    </div>
                    <div>
                        <label>הבדיקה יצאה חיובית  &nbsp;&nbsp;</label>
                        <input type='radio' name='diagnostics' value="yes" onChange={handleFormChange}/>
                    </div>
                </div>

                {/* General fealing */}
                <div className="basic generalFeeling">
                    <label>מה ההרגשה הכללית שלך</label>
                    <div>
                        <label>1 &nbsp;&nbsp;</label>
                        <input type='radio' name='g_feeling' value="1" onChange={handleFormChange} defaultChecked/>
                    </div>
                    <div>
                        <label>2 &nbsp;&nbsp;</label>
                        <input type='radio' name='g_feeling' value="2" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>3 &nbsp;&nbsp;</label>
                        <input type='radio' name='g_feeling' value="3" onChange={handleFormChange} defaultChecked/>
                    </div>
                    <div>
                        <label>4  &nbsp;&nbsp;</label>
                        <input type='radio' name='g_feeling' value="4" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>5  &nbsp;&nbsp;</label>
                        <input type='radio' name='g_feeling' value="5" onChange={handleFormChange}/>
                    </div>
                </div>


                {/* ADD LOGIC!!!!!!!! */}


                {/* Body Feeling */}
                <div className="basic bodyFeeling">
                    <label>איך הגוף שלך מרגיש</label>
                    <div>
                        <label>1 &nbsp;&nbsp;</label>
                        <input type='radio' name='b_feeling' value="1" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>2 &nbsp;&nbsp;</label>
                        <input type='radio' name='b_feeling' value="2" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>3 &nbsp;&nbsp;</label>
                        <input type='radio' name='b_feeling' value="3" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>4  &nbsp;&nbsp;</label>
                        <input type='radio' name='b_feeling' value="4" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>5  &nbsp;&nbsp;</label>
                        <input type='radio' name='b_feeling' value="5" onChange={handleFormChange}/>
                    </div>
                </div>

                {/* כמה כוסות תה שתית ב 24 השעות האחרונות */}
                <div className="basic capsOfTea">
                    <label>כמה כוסות תה שתית ב 24 השעות האחרונות</label>
                    <div>
                        <label>0 &nbsp;&nbsp;</label>
                        <input type='radio' name='tea' value="0" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>1-3 &nbsp;&nbsp;</label>
                        <input type='radio' name='tea' value="1-3" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>3-6 &nbsp;&nbsp;</label>
                        <input type='radio' name='tea' value="3-6" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>7+ &nbsp;&nbsp;</label>
                        <input type='radio' name='tea' value="7" onChange={handleFormChange}/>
                    </div>
                </div>

                {/* ingested  */}
                <div className="basic ingested">
                    <label>אלו מהדברים אכלת ב 24 השעות האחרונות</label>
                    <div className="ingestedDiv">
                        <div>
                            <label>בצל &nbsp;&nbsp;</label>
                            <input type='checkbox' name='ingested' value="onion" onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>שום &nbsp;&nbsp;</label>
                            <input type='checkbox' name='ingested' value="garlic" onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>תה &nbsp;&nbsp;</label>
                            <input type='checkbox' name='ingested' onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>אלכוהול &nbsp;&nbsp;</label>
                            <input type='checkbox' name='ingested' value="alcohol" onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>סיגריות &nbsp;&nbsp;</label>
                            <input type='checkbox' name='cigarettes' value="sigarets" onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>תרגול רוחני &nbsp;&nbsp;</label>
                            <input type='checkbox' name='ingested' value="speriat" onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>לימון &nbsp;&nbsp;</label>
                            <input type='checkbox' name='lemon' value="lemon" onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>דבש &nbsp;&nbsp;</label>
                            <input type='checkbox' name='honey' value="honey" onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>תרופה &nbsp;&nbsp;</label>
                            <input type='checkbox' name='medicine' value="medician" onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>3 אומגה &nbsp;&nbsp;</label>
                            <input type='checkbox' name='omega' value="3" onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>D ויטמין  &nbsp;&nbsp;</label>
                            <input type='checkbox' name='vitamin_d' value="d" onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>C ויטמין  &nbsp;&nbsp;</label>
                            <input type='checkbox' name='vitamin_c' value="c" onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>B12 ויטמין  &nbsp;&nbsp;</label>
                            <input type='checkbox' name='vitamin_b12' value="b12" onChange={handleFormChange}/>
                        </div>
                        <div>
                            <label>אחר ויטמין  &nbsp;&nbsp;</label>
                            <input type='radio' name='vitamin_other' value="else_v" onChange={handleFormChange}/>
                        </div>
                    </div>


                    <div className="basic ingestedInput">
                        <label>אחר</label>
                        <input type="text" onChange={handleFormChange}/>
                    </div>

                </div>


                 {/* Soscial */}
                 <div className="basic soscial">
                    <label>אילו אינטרקציות חברתיות היו לך</label>
                    <div>
                        <label>דיבור בטלפון &nbsp;&nbsp;</label>
                        <input type='checkbox' name='phone' onChange={handleFormChange} defaultChecked/>
                    </div>
                    <div>
                        <label>פגישה עם אנשים &nbsp;&nbsp;</label>
                        <input type='checkbox' name='person' value="people" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>עבודה &nbsp;&nbsp;</label>
                        <input type='checkbox' name='work' value="work" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>חופשה  &nbsp;&nbsp;</label>
                        <input type='checkbox' name='vacation' value="vacation" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>משגיח על הילדים  &nbsp;&nbsp;</label>
                        <input type='checkbox' name='kids' value="kids" onChange={handleFormChange}/>
                    </div>
                    <div>
                        <label>חיות מחמד  &nbsp;&nbsp;</label>
                        <input type='checkbox' name='pets' value="pets" onChange={handleFormChange}/>
                    </div>
                    <div className="basic ingestedInput">
                        <label>אחר</label>
                        <input type="text" onChange={handleFormChange}/>
                    </div>
                </div>
            </div>
            </div>
		);
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

export default connect(mapStateToProps, mapDispatchToProps)(FormDaily);