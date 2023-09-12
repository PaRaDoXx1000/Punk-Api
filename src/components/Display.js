import React from "react";

const Display = (props) => {
  const { beers } = props;

  const ebcColour = (ebc) => {
    if (ebc <= 4) {
      return "#454335";
    } else if (ebc <= 6) {
      return "#F6F53D";
    } else if (ebc <= 8) {
      return "#827952";
    } else if (ebc <= 12) {
      return "#BEB963";
    } else if (ebc <= 16) {
      return "#F9BB2D";
    } else if (ebc <= 20) {
      return "#B08042";
    } else if (ebc <= 26) {
      return "#A7673A";
    } else if (ebc <= 33) {
      return "#F9BB2D";
    } else if (ebc <= 39) {
      return "#251B1B";
    } else if (ebc <= 47) {
      return "#F9BB2D";
    } else if (ebc <= 57) {
      return "#171312";
    } else if (ebc <= 69) {
      return "#0A0A0A";
    } else if (ebc <= 79) {
      return "#F9BB2D";
    } else if (ebc <= 138) {
      return "#141518";
    } else if (ebc > 138) {
      return "black";
    }
  };

  const shortenDescription = (description) => {
    return description.length < 235
      ? description
      : description.substring(0, 230) + "...";
  };

  return (
    <div className="display">
      {beers.length ? (
        beers.map((beer) => {
          return (
            <div className="beerCard" key={beer.id}>
              <div className="displayImage"><img src={beer.image_url} alt={beer.name} /></div>
              <section className="textArea">
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>{shortenDescription(beer.description)}</p>
                <section className="barArea">
                  <h3>IBU(Bitterness):</h3>
                  <div className="meter">
                    <span style={{ width: `${beer.ibu - 20}%` }}></span>
                  </div>
                </section>
                <h3>Colour:</h3>
                <div className="ebcMeter">
                  <span style={{ background:ebcColour(beer.id) }}></span>
                </div>
                <h3 className="abv">ABV: {beer.abv}%</h3>
              </section>
            </div>
          );
        })
      ) : (
        <p>There are no results</p>
      )}
    </div>
  );
};

export default Display;