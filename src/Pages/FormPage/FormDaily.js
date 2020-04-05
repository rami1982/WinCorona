import React, { useState } from "react";
import "./formDaily.css";
import { ThemeProvider } from 'styled-components';

import {questions} from './questions'
import { connect } from "react-redux";
import * as actionType from "../../Store/actions";
import ChatBot from 'react-simple-chatbot';

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

const FormPage = props => {

  const inputState = useState({
    id_1: '',
    id_2: '',
    id_3: '',
    id_4: '',
    id_5: '',
    id_6: '',
    id_7: '',
    id_8: '',
    id_9: '',
  });

  //handle end callback from chatbots
  function handleEnd({ steps, values }) {

    inputState.id_1 = values[0];
    inputState.id_2 = values[1];
    inputState.id_3 = values[2];
    inputState.id_4 = values[3];
    inputState.id_5 = values[4];
    inputState.id_6 = values[5];
    inputState.id_7 = values[6];
    inputState.id_8 = values[7];
    inputState.id_9 = values[8];

    alert(`Chat handleEnd callback! Number: ${values[0]}`);
  }


  return (

    <div style={{width:'100%',margin:'10px auto',maxWidth:'500px'}}>
      {/* Radio button */}
      <ThemeProvider theme={theme}>
      <ChatBot headerTitle=''
        width="100%"
        hideHeader
        botAvatar="/images/docFace.png"
        steps={questions}
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
