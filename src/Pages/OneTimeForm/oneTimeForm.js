import React, { useState, useEffect } from "react";
import "./oneTimeForm.css";

import { connect } from "react-redux";
import * as actionType from "../../Store/actions";
import api from "../../Store/api";

const OneTimeForm = (props) => {
  // state = {
  // }

  // BUTTONS HANDLERS

  const ageHandler = () => {
    console.log("ageHandler");
  };

  const genderHandler = () => {
    console.log("genderHandler");
  };

  const cityHandler = () => {
    console.log("cityHandler");
  };

  const diseasesHandler = () => {
    console.log("diseasesHandler");
  };

  const smokeingHandler = () => {
    console.log("smokeingHandler");
  };

  const isolationHandler = () => {
    console.log("capsOfTeaHandler");
  };

  const feelingHandler = () => {
    console.log("soscialHandler");
  };

  const peopleHandler = () => {
    console.log("peopleHandler");
  };

  const [questions, setQuestions] = React.useState([]);

  useEffect(() => {
    const postQuestions = async () => {
      const result = await api.post("functions/one_time_heb");
      setQuestions(result.data.result.questions);
    };
    postQuestions();
  }, []);

  const Question = ({ question, input }) => (
    <div className="basic">
      <label>{question}</label>
      {Object.entries(input).map((entry, i) => {
        if (entry[0] === "radio") {
          return entry[1].map((choice, j) => (
            <div>
              <label>{choice} &nbsp;&nbsp;</label>
              <input type="radio" name={choice} />
            </div>
          ));
        } else if (entry[0] === "freetext") {
          return (
            <div>
              <label>{entry[1]} &nbsp;&nbsp;</label>
              <input type="text" name={entry[1]} />
            </div>
          );
        }
      })}
    </div>
  );

  return (
    <div className="formWrapper">
      {questions.map((question, i) => (
        <Question question={question.question} input={question.input} key={i} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
    pageTitle: state.pageTitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchPageStatus: (page) =>
      dispatch({ type: actionType.CURRENT_PAGE, pageName: page }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OneTimeForm);
