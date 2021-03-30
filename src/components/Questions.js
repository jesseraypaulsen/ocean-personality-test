import Question from './Question';

export default function Questions(props) {
  return (
    <div className="questions-container">
      {props.currentQuestions.map((item, index) => {
        return (
          <div key={item.id}>
            <Question 
              item={item} 
              pushAnswer={props.pushAnswer}
              storeAnswer={props.storeAnswer}
              getAnswers={props.getAnswers}
              setScore={props.setScore}
            />
          </div>
        )
      })}
    </div>
  )
}