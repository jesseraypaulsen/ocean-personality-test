

export default function Domain(props) {
  const { i, result } = props;
  console.log(result);
  return (
    <div 
      key={i} 
      className={result.domain === 'N' ? "tab-pane fade show active" : "tab-pane fade"} 
      id={"nav-"+result.domain} 
      role="tabpanel" 
      aria-labelledby={"nav-"+result.domain+"-tab"}
    >
      <p style={{ marginTop: "20px" }}>
        <h2>{result.title}</h2>
      </p>
      <p>
        {result.shortDescription}
      </p>
      <p>
        You scored {result.score} based on {result.count} answer{result.count > 1 ? 's' : ''} to questions in this domain.
      </p>
      <p>
        {result.text}
      </p>

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", alignContent: "space-evenly", maxWidth: "1000px" }}>
       {result.facets ? result.facets.map((f, key) => 
          <div key={key} style={{ padding: "15px", border: "1px solid black", minWidth: "280px" }}>
            <h4>{f.title}</h4>
            <div>score: {f.score}</div>
            <div>{f.count} question{f.count > 1 ? 's' : ''}</div>
            <div>{f.scoreText}</div>
          </div>
        ) : null} 
      </div>
    </div>
  )
}