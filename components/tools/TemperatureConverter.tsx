import React, { useState } from 'react';

const TemperatureConverter: React.FC = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        setFahrenheit(((numValue * 9) / 5 + 32).toFixed(2));
      }
    }
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        setCelsius((((numValue - 32) * 5) / 9).toFixed(2));
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto text-slate-300 space-y-4">
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <label className="text-lg">°C</label>
      </div>
      <div className="flex items-center justify-center text-2xl font-bold">
        =
      </div>
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <label className="text-lg">°F</label>
      </div>
    </div>
  );
};

export default TemperatureConverter;