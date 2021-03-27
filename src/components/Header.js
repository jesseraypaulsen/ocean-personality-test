

export default function Header(props) {
  return (
    <div class="form-check form-switch" style={{ border: "1px solid white", backgroundColor: "white" }}>
      <input class="form-check-input" type="checkbox" id="toggle-results" onClick={props.toggleResults} />
      <label class="form-check-label" for="toggle-results">
        {props.toggler ? 'Return to the Test' : 'See Results'}
      </label>
    </div>
  );
}
