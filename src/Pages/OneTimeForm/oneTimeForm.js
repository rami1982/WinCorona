import React from "react";
import "./oneTimeForm.css";

import { connect } from "react-redux";
import * as actionType from "../../Store/actions";

const OneTimeForm = props => {
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

  // BUTTONS HANDLERS

  return (
    <div className="formWrapper">
      {/* age */}
      <div className="basic age">
        <label>מה הגיל שלך</label>
        <input type="text" onChange={ageHandler} />
      </div>

      <div className="basic gender">
        <label>?בן? בת</label>
        <div>
          <label>בן &nbsp;&nbsp;</label>
          <input
            type="radio"
            name="a"
            onChange={genderHandler}
            defaultChecked
          />
        </div>
        <div>
          <label>בת &nbsp;&nbsp;</label>
          <input type="radio" name="a" onChange={genderHandler} />
        </div>
      </div>

      <div className="basic city">
        <label>מה הוא מקום המגורים שלך</label>
        <input type="text" onChange={cityHandler} />
      </div>

      <div className="basic diseases">
        <label>
          האם היה לך את אחת המחלות הבאות: סוכרת, בעיית יתר לחץ דם, מחלות לב או
          כלי דם או שבץ, מחלות ריאות כרוניות, סרטן, אי ספיקת כליות
        </label>
        <div>
          <label>כן &nbsp;&nbsp;</label>
          <input
            type="radio"
            name="a"
            onChange={diseasesHandler}
            defaultChecked
          />
        </div>
        <div>
          <label>לא &nbsp;&nbsp;</label>
          <input type="radio" name="a" onChange={diseasesHandler} />
        </div>
      </div>

      <div className="basic smokeing">
        <label>מה לגבי עישון</label>
        <div>
          <label>עישון יומיומי &nbsp;&nbsp;</label>
          <input
            type="radio"
            name="a"
            onChange={smokeingHandler}
            defaultChecked
          />
        </div>
        <div>
          <label>עישנתי בעבר, בחמש השנים האחרונות &nbsp;&nbsp;</label>
          <input type="radio" name="a" onChange={smokeingHandler} />
        </div>
        <div>
          <label>עישנתי בעבר, לפני יותר מחמש שנים &nbsp;&nbsp;</label>
          <input type="radio" name="a" onChange={smokeingHandler} />
        </div>
        <div>
          <label>אף פעם &nbsp;&nbsp;</label>
          <input type="radio" name="a" onChange={smokeingHandler} />
        </div>
      </div>

      <div className="basic isolation">
        <label>האם היית בבידוד</label>
        <div>
          <label>אני לא בבידוד &nbsp;&nbsp;</label>
          <input
            type="radio"
            name="a"
            onChange={isolationHandler}
            defaultChecked
          />
        </div>
        <div>
          <label>אני בבידוד כי חזרתי מחו"ל לאחרונה &nbsp;&nbsp;</label>
          <input type="radio" name="a" onChange={isolationHandler} />
        </div>
        <div>
          <label>אני בבידוד כי נחשפתי לחולה מאומת &nbsp;&nbsp;</label>
          <input type="radio" name="a" onChange={isolationHandler} />
        </div>
        <div>
          <label>אני נמצא בבידוד כי חוויתי תסמינים &nbsp;&nbsp;</label>
          <input type="radio" name="a" onChange={isolationHandler} />
        </div>
        <div>
          <label>אני נמצא בבידוד מרצוני החופשי &nbsp;&nbsp;</label>
          <input type="radio" name="a" onChange={isolationHandler} />
        </div>
        <div>
          <label>אני מאושפז &nbsp;&nbsp;</label>
          <input type="radio" name="a" onChange={isolationHandler} />
        </div>
      </div>

      <div className="basic feeling">
        <label>מה שלומך היום</label>
        <div>
          <label>מצויין &nbsp;&nbsp;</label>
          <input
            type="radio"
            name="a"
            onChange={feelingHandler}
            defaultChecked
          />
        </div>
        <div>
          <label>לא כל כך טוב &nbsp;&nbsp;</label>
          <input type="radio" name="a" onChange={feelingHandler} />
        </div>
      </div>

      <div className="basic people">
        <label>
          מה מספר האנשים השונים (לא כולל בני ביתך) ששהית בקרבתם מעל ל-5 דקות
          ביממה האחרונה
        </label>
        <input type="text" onChange={peopleHandler} />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OneTimeForm);
