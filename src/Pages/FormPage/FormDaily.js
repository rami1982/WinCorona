import React from "react";
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

  //handle end callback from chatbots
  function handleEnd({ steps, values }) {
    // console.log(steps);
     console.log(values);
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
