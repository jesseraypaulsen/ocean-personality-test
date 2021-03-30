

export default function Header(props) {
  return (
    <div id="toggle-head" class="form-check form-switch" style={{ border: "none", minWidth: "200px", alignSelf: "flex-start", paddingTop: "20px", paddingBottom: "40px"}}>
      <input class="form-check-input" type="checkbox" id="toggle-results" onClick={props.toggleResults} style={{}}/>
      <label class="form-check-label" for="toggle-results">
        {props.toggler ? 'Return to the Test' : 'See Results'}
      </label>
    </div>
  );
}
