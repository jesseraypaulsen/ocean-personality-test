export default function RadioSet(props) {

  let groupName = props.id;
  let handler = props.handler;
  let choices = props.choices;

  return (
    <div>
      {choices.map((choice, i) => 
        <div key={i} className="form-check">
          <input 
            className="form-check-input mt-0"
            type="radio" 
            id={i} 
            value={choice.score} 
            name={groupName}
            onClick={handler}
          ></input>
          <label for={i} className="form-check-label">{choice.text}</label>
        </div>)}
    </div>
  );
};