

export default function Header(props) {
  return (
    <div id="toggle-head"  className="form-check form-switch" style={{ border: "none", minWidth: "200px", alignSelf: "flex-start", paddingTop: "20px", paddingBottom: "40px"}}>
      <input className="form-check-input" type="checkbox" id="toggle-results" onClick={props.toggleResults} style={{}}/>
      <label className="form-check-label" for="toggle-results">
        {props.toggler ? 'Return to the Test' : 'See Results'}
      </label>
    </div>
  );
}
