import React, { useState } from 'react';

const Form = () => {
  const [currentKey, setCurrentKey] = useState('C');
  const [toBpm, setToBpm] = useState('');
  const [fromBpm, setFromBpm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const x = getCurrentKeyValue(currentKey);
    const y = parseFloat(toBpm);
    const z = parseFloat(fromBpm);

    const a = ((y / z) * x) - x;
    const b = a / (x / 12);

    setB(b.toFixed(2));
    console.log('B:', b);
  };

  const getCurrentKeyValue = (key) => {
    const keyValues = {
      C: 130.8,
      'C#': 138.6,
      D: 146.8,
      'D#': 155.6,
      E: 164.8,
      F: 174.6,
      'F#': 185.0,
      G: 196.0,
      'G#': 207.7,
      A: 220.0,
      'A#': 233.1,
      B: 246.9,
    };

    return keyValues[key];
  };
  const [b, setB] = useState('');
  return (
    <form onSubmit={handleSubmit} class="form-panel">
      <label>
        Current Key
        <select value={currentKey} onChange={(e) => setCurrentKey(e.target.value)}>
          <option value="C">C</option>
          <option value="C#">C#</option>
          <option value="D">D</option>
          <option value="D#">D#</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="F#">F#</option>
          <option value="G">G</option>
          <option value="G#">G#</option>
          <option value="A">A</option>
          <option value="A#">A#</option>
          <option value="B">B</option>
        </select>
      </label>
      <br />
      <label>
        To BPM
        <input type="number" step="0.01" value={toBpm} onChange={(e) => setToBpm(e.target.value)} />
      </label>
      <br />
      <label>
        From BPM
        <input type="number" step="0.01" value={fromBpm} onChange={(e) => setFromBpm(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
      <br />
      {b && <p>Adjust the audio by {b} semitones or {b * 100} cents</p>}
    </form>

  );
};

export default Form;






