import React, { useState } from "react";
import "./formDaily.css";
import { ThemeProvider } from 'styled-components';
import ChantbotJSON from './questions';
import { connect } from "react-redux";
import * as actionType from "../../Store/actions";
import ChatBot from 'react-simple-chatbot';
import api from '../../Store/api';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial',
  headerBgColor: '#1C8ACE',
  headerFontColor: 'white',
  headerFontSize: '15px',
  botBubbleColor: '#1C8ACE',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

// chatBot initialize.
let chatbot = new ChantbotJSON();

// question array * THIS IS WHERE YOU ADD/REMOVE QUESTIONS !!!
const jsonQuestions = [
  // 0
  {
    message: 'האם יש לך תסמינים של שפעת/וירוס/קורונה ',
    opt: [
      { value: 'yes', label: 'כן'},
      { value: 'no', label: 'לא'},
    ],
  },
  // 1
  {
    message:'?האם יש לך קורונה',
    opt: [
      { value: 'yes', label: 'כן'},
      { value: 'no', label: 'לא'},
    ],
  },
  // 2
  {
    message: 'האם אתה לוקח תרופות באופן קבוע',
    opt: [
      { value: 'yes', label: 'כן'},
      { value: 'no', label: 'לא'},
    ],
  },
  // 3
  {
    message: 'מה החום גוף הכי גבוהה שהיה לך בשבוע האחרון',
    opt: [
      { value: 'dont know', label: 'לא מדדתי' },
      { value: '37.9', label: '37.9' },
      { value: '38.5', label: '38.5' },
      { value: 'over 38.5', label: 'מעל 38.5' },
    ],
  },
  // 4
  {
    message: 'איך המצב הבריאותי שלך בשבוע האחרון?',
    opt: [
      { value: 'better', label: 'השתפר' },
      { value: 'worse', label: 'התדרדר' },
      { value: 'stable', label: 'נשאר יציב' },
    ],
  },
  // 5
  {
    message:'?איזה אוכל אתה אוכל',
    opt: [
      { value: 'all', label: 'הכל' },
      { value: 'vegan', label: 'טבעוני' },
      { value: 'veggie', label: 'צמחוני' },
      { value: 'non-gloten', label: 'ללא גלוטן' },
    ],
  },
  // 6
  {
    message:'?איזה פעילויות עשית בשבוע האחרון ',
    opt: [
      { value: 'sport', label: 'ספורט' },
      { value: 'yoga', label: 'יוגה' },
      { value: 'meditation', label: 'מדיטציה' },
      { value: 'prayer', label: 'תפילה' },
    ],
  },
  // 7
  {
    message:'?כמה שעות שינה בממוצע את/ה ישן ביום',
    opt: [
      { value: 'lessThan6', label: 'פחות מ- 6 שעות' },
      { value: '6to7', label: '6-7' },
      { value: '7-8', label: '7-8' },
      { value: 'over8', label: 'מעל 8' },
    ],
  },
  // 8
  {
    message:'?מה מצב הרוח שלך',
    opt: [
      { value: 'verygood', label: 'טוב מאוד' },
      { value: 'good', label: 'טוב' },
      { value: 'medium', label: 'בינוני' },
      { value: 'low', label: 'נמוך' },
      { value: 'verylow', label: 'נמוך מאוד' },
    ],
  },
  // 9
  {
    message:'?מה מצב האנרגיה והמוטיבציה שלך',
    opt: [
      { value: 'high', label: 'בעל מוטיבציה גבוהה' },
      { value: 'hodaya', label: 'בהודיה על החיים' },
      { value: 'tired', label: 'עייפות' },
      { value: 'anxiety', label: 'חרדה' },
      { value: 'nervous', label: 'עצבנות' },
      { value: 'sensitiv', label: 'רגישות' },
      { value: 'indifference', label: 'אדישות' },
    ],
  },
  // 10
  {
    message:'האם יש משהו מהתסמינים האלה?',
    opt: [
      { value: 'cough', label: 'שיעולים או נזלת' },
      { value: 'throat', label: 'כאבי גרון' },
      { value: 'breath', label: 'קוצר נשימה' },
      { value: 'pain', label: 'כאבים' },
      { value: 'diarrhea', label: 'שלשול' },
      { value: 'nausea', label: 'בחילה או הקאות' },
      { value: 'chills', label: 'צמרצורת' },
      { value: 'confusion', label: 'בלבול' },
      { value: 'tiredness', label: 'עייפות' },
      { value: 'infrmity', label: 'עייפות או חולשה' },
      { value: 'taste', label: 'איבדתי את חוש הטעם והריח' },
      { value: 'none', label: 'אף אחד מאלו' },
    ],
  },
  // 11
  {
    message:'גובה בס"מ',
  },
  // 12
  {
    message:'משקל בק"ג',
  },
]

// big-array of all question that is given to the ChatBot Component.
let arrQuestions = []

const count = jsonQuestions.length - 1;

// add's all questions from 'jsonQuestions' into 'arrQuestions'.
jsonQuestions.map((arr, index) => {
  if(arr.hasOwnProperty('opt')){
    arrQuestions.push(...chatbot.mulAns(arr));
  }else if(jsonQuestions.length - 1 === index){
    arrQuestions.push(...chatbot.singleAns(arr, true));
  }else{
    arrQuestions.push(...chatbot.singleAns(arr));
  }
})

const FormPage = props => {

  
  //handle end callback from chatbots
  function handleEnd({ steps, values }) {
    const jsonObject = new Object();
    values.map((v, index) => {
      const key = jsonQuestions[index].message
      jsonObject[key] = v;
    });
    // AXIOS
    api.post('http://localhost:3001/answers/daily', jsonObject).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    })

    console.log(values);
    alert(`תודה רבה על מילוי השאלון`);
  }


  return (
    <div style={{width:'100%',margin:'10px auto',maxWidth:'500px'}}>
      {/* Radio button */}
      <ThemeProvider theme={theme}>
      <ChatBot headerTitle=''
        width="100%"
        hideHeader
        botAvatar="/images/docFace.png"
        steps={arrQuestions}
        handleEnd={handleEnd}
        />
          </ThemeProvider>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    page: state.page,
    pageTitle: state.pageTitle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    switchPageStatus: page =>
      dispatch({ type: actionType.CURRENT_PAGE, pageName: page })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
