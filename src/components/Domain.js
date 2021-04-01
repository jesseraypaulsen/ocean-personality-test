

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
      <p>
        title: {result.title}
      </p>
      <p>
        score: {result.score}
      </p>
      <p>
        count: {result.count}
      </p>
      <p>
        scoreText: {result.scoreText}
      </p>
      <p>
        text: {result.text}
      </p>
      <p>
        shortDescription: {result.shortDescription}
      </p>
      <p>
        description: {result.description}
      </p>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
       {result.facets ? result.facets.map((f, key) => 
          <div key={key} style={{ padding: "15px", border: "1px solid black" }}>
            <div>title: {f.title}</div>
            <div>text: {f.text}</div>
            <div>score: {f.score}</div>
            <div>count: {f.count}</div>
            <div>scoreText: {f.scoreText}</div>
          </div>
        ) : null} 
      </div>
    </div>
  )
}