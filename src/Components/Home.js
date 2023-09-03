import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions/fetchData";
import { addToHistory } from "../redux/actions/history";
import { useParams } from "react-router-dom";
const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const {searchTerm} = useParams();
  let dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (searchTerm) {
      setSearchInput(searchTerm);
      dispatch(fetchData(searchTerm));
    }
  }, [searchTerm, dispatch]);

  function handleSearch() {

     if (searchInput) {
      dispatch(fetchData(searchInput));
      dispatch(addToHistory(searchInput));
      setSearchInput('');
    }
    }
 
    const shouldRenderSearchBox = !searchTerm;

  return (
    <div className="home">
     {
      shouldRenderSearchBox && (
        <div className="inputDiv">
        <input type="text" placeholder="Search for a word..."  value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      )
     }
      

      {loading && <div className="loader"></div>}
      {error && <div className="error" >Error: {error.message}</div>}
      {data && (
        <div className="resultContainer">
          {data.map((element, index) => {
            return (
              <div className="result" key={index}>
                <h1>{element.word}</h1>
                <ul className="audios">
                  {element.phonetics.map((item, index) => {
                    return (
                      <li key={index}>
                        <p>{item.text}</p>
                        {/* <audio controls>
                          <source src={item.audio} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio> */}
                        {item.audio ? (
                          <audio controls>
                            <source src={item.audio} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        ) : (
                          <p className="noAudio">Audio not available!</p>
                        )}
                      </li>
                    );
                  })}
                </ul>
                {/* ...... */}
                <ul className="meanings">
                  {element.meanings.map((item, index) => {
                    return (
                      <li key={index}>
                        <p className="partsOfSpeech"> {item.partOfSpeech}</p>
                        {item.antonyms.length > 0 && (
                          <div>
                            <h3>Antonyms :-</h3>
                            {item.antonyms.map((antonym, index) => (
                              <p key={index}>{antonym}</p>
                            ))}
                          </div>
                        )}
                        {item.definitions.map((definition, index) => (
                          <div key={index}>
                            <p>{definition.definition}</p>
                            {definition.antonyms.length > 0 && (
                              <div>
                                <h3>Antonyms :-</h3>
                                {definition.antonyms.map((antonym, index) => (
                                  <p key={index}>{antonym}</p>
                                ))}
                              </div>
                            )}
                            <li>
                              {definition.synonyms.length > 0 && (
                                <div>
                                  <h3>Synonyms :-</h3>
                                  {definition.synonyms.map((synonym, index) => (
                                    <p key={index}>{synonym}</p>
                                  ))}
                                </div>
                              )}
                            </li>
                          </div>
                        ))}

                        {item.synonyms.length > 0 && (
                          <div>
                            <h2>Synonyms :-</h2>
                            {item.synonyms.map((synonym, index) => (
                              <p key={index}>{synonym}</p>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
                {/* ....... */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
