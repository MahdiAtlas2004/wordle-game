const InfoModal = ({handleInfo}) => {
  return (
    <div className="info-modal">
      <div className="info-modal-content">
        <i className="bi bi-x-lg exit-icon" onClick={handleInfo}></i>
        <h1 className="how-to">How To Play</h1>
        <h2>Guess the Wordle in 6 tries.</h2>
        <ul>
          <li>Each guess must be a valid 5-letter word</li>
          <li>
            The color of the tiles will change to show how close your guess was
            to the word
          </li>
        </ul>
        <h3>Examples</h3>
        <div className="example">
          <div className="info-row">
            <div className="info-col" id="e1">W</div>
            <div className="info-col">E</div>
            <div className="info-col">A</div>
            <div className="info-col">R</div>
            <div className="info-col">Y</div>
          </div>
          <p>W is in the word and in the correct spot.</p>
        </div>

        <div className="example">
          <div className="info-row">
            <div className="info-col">P</div>
            <div className="info-col" id="e2">I</div>
            <div className="info-col">L</div>
            <div className="info-col">L</div>
            <div className="info-col">S</div>
          </div>
          <p>I is in the word but in the wrong spot.</p>
        </div>

        <div className="example">
          <div className="info-row">
            <div className="info-col">V</div>
            <div className="info-col">A</div>
            <div className="info-col">G</div>
            <div className="info-col" id="e3">U</div>
            <div className="info-col">E</div>
          </div>
          <p>U is not in the word in any spot.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
