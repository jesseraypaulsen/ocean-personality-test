import Question from './Question';

export default function Questions(props) {
  return (
    <div>
      {props.currentQuestions.map((item, index) => {
        return (
          <div key={item.id}>
            <Question 
              item={item} 
              pushAnswer={props.pushAnswer}
              getAnswers={props.getAnswers}
            />
          </div>
        )
      })}
    </div>
  )
}