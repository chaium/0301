import React, { useState, useEffect } from 'react';
import './Hero.css';
import HeatmapD3App from './HeatmapD3App';
import HeatmapD3_11App from './HeatmapD3_11App';
import HeatmapD3_111App from './HeatmapD3_111App';
import HeatmapD3_2App from './HeatmapD3_2App';
import HeatmapD3_3App from './HeatmapD3_3App';

const Hero = () => {
  const [graphChoice, setGraphChoice] = useState("Filter Efficiency vs. Outdoor Air");
  const [valueChoice, setValueChoice] = useState("NADR");
  const [occupancyCategory, setOccupancyCategory] = useState("Commercial");
  const [selectedSubcategory, setSelectedSubcategory] = useState("Office");
  const [occupantNumber, setOccupantNumber] = useState(12);
  const [occupiedPeriod, setOccupiedPeriod] = useState(60);
  const [expiratoryActivity, setExpiratoryActivity] = useState("Voiced Counting");
  const [physicalActivity, setPhysicalActivity] = useState("Resting");
  const [floorArea, setFloorArea] = useState(2000);
  const [height, setHeight] = useState(9);
  const [supplyAir, setSupplyAir] = useState(1800);
  const [outdoorAir, setOutdoorAir] = useState(240);
  const [merv, setMerv] = useState("0.86");
  const [hvacUV, setHvacUV] = useState("0");
  const [hvacTreatment, setHvacTreatment] = useState("0");
  const [roomTreatment, setRoomTreatment] = useState("0");
  const [roomUV, setRoomUV] = useState("0");
  const [roomAC, setRoomAC] = useState("0");
  const [roomTreatmentQ, setRoomTreatmentQ] = useState("0");
  const [roomUVQ, setRoomUVQ] = useState("0");
  const [roomACQ, setRoomACQ] = useState("0");
  const [maskInfector, setMaskInfector] = useState("0");
  const [maskSus, setMaskSus] = useState("0");
  const [virusType, setVirusType] = useState("SARS-CoV-2");
  const [immunityProportion, setImmunityProportion] = useState("0");
  const [infectorStatus, setInfectorStatus] = useState("Regional Prevalence");
  const [casesPerDay, setCasesPerDay] = useState("10");
  const [infectiousPeriod, setInfectiousPeriod] = useState("7");
  const [unreportedCases, setUnreportedCases] = useState("50");
  const [infectorNumber, setInfectorNumber] = useState("1");
  const [selectedTab, setSelectedTab] = useState("ASHRAE");

  const subcategoriesOptions = {
    "Correctional": ["Cell", "Dayroom"],
    "Commercial": ["Food and Beverage Facilities", "Gym", "Office", "Retail", "Transportation Waiting"],
    "Educational": ["Classroom", "Lecture Hall"],
    "Industrial": ["Manufacturing", "Sorting, Packing, Light Assembly", "Warehouse"],
    "Healthcare": ["Exam Room", "Group Treatment Area", "Patient Room", "Resident Room", "Waiting Room"],
    "Public": ["Auditorium", "Place of Religious Workship", "Museum", "Convention", "Spectator Area", "Lobbies"],
    "Residential": ["Common Space", "Dwelling Unit"]
  };

  const [subcategories, setSubcategories] = useState(subcategoriesOptions[occupancyCategory]);

  useEffect(() => {
    setSubcategories(subcategoriesOptions[occupancyCategory]);
    if(occupancyCategory === "Commercial"){
      setSelectedSubcategory("Office");
    } else {
      setSelectedSubcategory(subcategoriesOptions[occupancyCategory][0]);
    }
  }, [occupancyCategory, subcategoriesOptions]);

  const ASHRAEInputs = () => (
    <div className="input-container">
      <br/>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<h style={{ color: 'rgb(7,114,185)' }}>Building and Occupancy</h>
</div>
<br/>
      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
  <label htmlFor="occupancyCategory">Occupancy Category:</label>
  <select id="occupancyCategory" 
          value={occupancyCategory} 
          onChange={(e) => setOccupancyCategory(e.target.value)} 
          style={{ fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}}>
    <option value="Correctional">Correctional Facilities</option>
    <option value="Commercial">Commercial/Retail</option>
    <option value="Educational">Educational Facilities</option>
    <option value="Industrial">Industrial</option>
    <option value="Healthcare">Healthcare</option>
    <option value="Public">Public Assembly/Sports & Entertainment</option>
  </select>
</div>
<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
  <label htmlFor="subcategories">Subcategories:</label>
  <select id="subcategories" 
          value={selectedSubcategory} 
          onChange={(e) => setSelectedSubcategory(e.target.value)} 
          style={{ fontSize: '1rem', marginLeft: '5px', marginRight: '20px', width: '373px'}}>
    {subcategories.map((subcategory, index) => (
      <option key={index} value={subcategory}>{subcategory}</option>
    ))}
  </select>
</div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <label htmlFor="floorArea">Floor Area (ft<sup>2</sup>): </label>
        <input type="number" id="floorArea" value={floorArea} onChange={event => setFloorArea(event.target.value)} min="1" max="10000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px',}} />

        <label htmlFor="height">Height (ft): </label>
        <input type="number" id="height" value={height} onChange={event => setHeight(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px',}} />
      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="occupantNumber">Occupant Number: </label>
        <input type="number" id="occupantNumber" value={occupantNumber} onChange={event => setOccupantNumber(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />

        <label htmlFor="occupiedPeriod">Occupied Period (min): </label>
        <input type="number" id="occupiedPeriod" value={occupiedPeriod} onChange={event => setOccupiedPeriod(event.target.value)} min="1" max="1440" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
      </div>

      
      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="expiratoryActivity">Expiratory Activity:</label>
  <select id="expiratoryActivity" 
          value={expiratoryActivity} 
          onChange={(e) => setExpiratoryActivity(e.target.value)} 
          style={{ fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}}>
    <option value="Breathing">Breathing</option>
    <option value="Whispered">Whispered Counting</option>
    <option value="Vocied">Voiced Counting</option>
    <option value="Speaking">Speaking</option>
    <option value="Unmodulated">Unmodulated Vocalization</option>
  </select>

        <label htmlFor="physicalActivity">Physical Activity:</label>
  <select id="physicalActivity" 
          value={physicalActivity} 
          onChange={(e) => setPhysicalActivity(e.target.value)} 
          style={{ fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}}>
    <option value="Resting">Resting</option>
    <option value="Standing">Standing</option>
    <option value="Standing+Light">Standing+Light</option>
    <option value="Light">Light Exercise</option>
    <option value="Moderate">Moderate Exercise</option>
    <option value="Heavy">Heavy Exercise</option>
  </select>
      </div>

      <br/>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<h style={{ color: 'rgb(7,114,185)' }}>Infector Status and Immunity</h>
</div>
<br/>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

<label htmlFor="virusType">Virus Type: </label>
<select value={virusType} onChange={event => setVirusType(event.target.value)} style={{ fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}}>'
    <option value="SARS-CoV-2">SARS-CoV-2</option>
    <option value="Influenza A">Influenza A</option>
</select>

<label htmlFor="immunityProportion">Immunity Proportion (%): </label>
        <input type="number" id="immunityProportion" value={immunityProportion} onChange={event => setImmunityProportion(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

  

                <label htmlFor="infectorStatus">Infector Status: </label>
                <select
                    id="infectorStatus"
                    value={infectorStatus}
                    onChange={event => setInfectorStatus(event.target.value)}
                    style={{ fontSize: '1rem', marginLeft: '5px', marginRight: '20px' }}>
                    <option value="Regional Prevalence">Regional Prevalence</option>
                    <option value="Number of Infector">Number of Infector</option>
                </select>

                {infectorStatus === 'Regional Prevalence' && (
                <div>
                    <h style={{ color: 'green', fontSize: '1rem' }}>Calculates absolute result</h>
                </div>

            )}

            {infectorStatus === 'Number of Infector' && (
                <div>
                    <h style={{ color: 'green', fontSize: '1rem' }}>Calculates conditional result</h>
                </div>

            )}

            </div>


            <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

            {infectorStatus === 'Regional Prevalence' && (
                <div>
                    <label htmlFor="casesPerDay">Cases per 100,000 per Day: </label>
                    <input type="number" id="casesPerDay" value={casesPerDay} onChange={event => setCasesPerDay(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />
                </div>
            )}

            
            {infectorStatus === 'Number of Infector' && (
                <div>
                    <label htmlFor="infectorNumber">Infector Number: </label>
                    <input type="number" id="infectorNumber" value={infectorNumber} onChange={event => setInfectorNumber(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />
                </div>

            )}


</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

{infectorStatus === 'Regional Prevalence' && (
                <div>
                    <label htmlFor="infectiousPeriod">Infectious Period (days): </label>
                    <input type="number" id="infectiousPeriod" value={infectiousPeriod} onChange={event => setInfectiousPeriod(event.target.value)} min="1" max="365" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />
                    <label htmlFor="unreportedCases">Unreported Cases (%): </label>
                    <input type="number" id="unreportedCases" value={unreportedCases} onChange={event => setUnreportedCases(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />
                </div>
            )}

</div>




<br/>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<h style={{ color: 'rgb(7,114,185)' }}>Mitigation Strategies - HVAC</h>
</div>
<br/>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="supplyAir">Supply Air (cfm): </label>
        <input type="number" id="supplyAir" value={supplyAir} onChange={event => setSupplyAir(event.target.value)} min="1" max="100000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />

        <label htmlFor="outdoorAir">Outdoor Air (cfm): </label>
        <input type="number" id="outdoorAir" value={outdoorAir} onChange={event => setOutdoorAir(event.target.value)} min="1" max="100000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />
      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>

      <label htmlFor="merv">Filter Rating:</label>
  <select id="merv" 
          value={merv} 
          onChange={(e) => setMerv(e.target.value)} 
          style={{ fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}}>
    <option value="0.16">MERV 4</option>
    <option value="0.24">MERV 5</option>
    <option value="0.28">MERV 6</option>
    <option value="0.36">MERV 7</option>
    <option value="0.49">MERV 8</option>
    <option value="0.54">MERV 9</option>
    <option value="0.57">MERV 10</option>
    <option value="0.67">MERV 11</option>
    <option value="0.77">MERV 12</option>
    <option value="0.86">MERV 13</option>
    <option value="0.93">MERV 14</option>
    <option value="0.94">MERV 15</option>
    <option value="0.97">MERV 16</option>
  </select>

  <label htmlFor="hvacUV">UVC Inactivation (%): </label>
        <input type="number" id="hvacUV" value={hvacUV} onChange={event => setHvacUV(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />

  </div>

  <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="hvacTreatment">Air Treatment CADR (cfm): </label>
        <input type="number" id="hvacTreatment" value={hvacTreatment} onChange={event => setHvacTreatment(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />

        </div> 

        <br/>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<h style={{ color: 'rgb(7,114,185)' }}>Mitigation Strategies - In Room</h>
</div>
<br/>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomTreatment">Air Treatment Device CADR (cfm): </label>
        <input type="number" id="roomTreatment" value={roomTreatment} onChange={event => setRoomTreatment(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />

        <label htmlFor="roomTreatmentQ">Quantity: </label>
        <input type="number" id="roomTreatmentQ" value={roomTreatmentQ} onChange={event => setRoomTreatmentQ(event.target.value)} min="0" max="10" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />
      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomUV">In Room UV CADR (cfm): </label>
        <input type="number" id="roomUV" value={roomUV} onChange={event => setRoomUV(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />

        <label htmlFor="roomUVQ">Quantity: </label>
        <input type="number" id="roomUVQ" value={roomUVQ} onChange={event => setRoomUVQ(event.target.value)} min="0" max="10" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />
      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomAC">Air Cleaner CADR (cfm): </label>
        <input type="number" id="roomAC" value={roomAC} onChange={event => setRoomAC(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />

        <label htmlFor="roomACQ">Quantity: </label>
        <input type="number" id="roomACQ" value={roomACQ} onChange={event => setRoomACQ(event.target.value)} min="0" max="10" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />
      </div>

 <br/>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<h style={{ color: 'rgb(7,114,185)' }}>Nonengineering Controls</h>
</div>

<br/>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="maskInfector">Mask Efficiency - Infector (%): </label>
        <input type="number" id="maskInfector" value={maskInfector} onChange={event => setMaskInfector(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />

        <label htmlFor="maskSus">Mask Efficiency - Susceptible (%): </label>
        <input type="number" id="maskSus" value={maskSus} onChange={event => setMaskSus(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '1rem', marginLeft: '5px', marginRight: '20px'}} />
      </div>

<br/>
 
    </div>

    
  );

const LANCETInputs = () => (
<div className="input-container">

    </div>
  );

return (
  <div className="hero" id="hero">
    <div className="container">
      <div className="content">
        <div className="card">
          <div className="top-navbar">
            <a href="#ASHRAE" onClick={() => setSelectedTab("ASHRAE")}>ASHRAE Standard 241</a>
            <a href="#LANCET" onClick={() => setSelectedTab("LANCET")}>LANCET</a>
            <a href="#REHVA" onClick={() => setSelectedTab("REHVA")}>REHVA</a>
            <a href="#Target" onClick={() => setSelectedTab("Target")}>Targeting Risk</a>
          </div>
          <div className="top-navbar">
            <a href="#Rebreathed" onClick={() => setSelectedTab("Rebreathed")}>Rebreathed Fraction (CO<sub>2</sub>)</a>
            <a href="#Short-range" onClick={() => setSelectedTab("Short-range")}>Short-range Analysis</a>
          </div>

          {selectedTab === "ASHRAE" && ASHRAEInputs()}
          {selectedTab === "LANCET" && LANCETInputs()}
          </div>


          <div className="graph-container">
            <div className="graph-choice">
              <label htmlFor="graphChoice"> Graph: </label>
              <select
                id="graphChoice"
                value={graphChoice}
                onChange={(e) => setGraphChoice(e.target.value)}
                style={{ fontSize: '1rem', marginRight: '20px' }}
              >
                <option value="Filter Efficiency vs. Outdoor Air">
                  Filter Efficiency vs. Outdoor Air
                </option>
                <option value="Return Air vs. Outdoor Air">
                  Return Air vs. Outdoor Air
                </option>
              </select>
            </div>

            <div className="chart">
              {selectedTab === "ASHRAE" && graphChoice === "Filter Efficiency vs. Outdoor Air" && (
                <HeatmapD3App occupantNumber={occupantNumber} floorArea={floorArea} height={height} />
              )}
              {selectedTab === "Target" && (
                <HeatmapD3_3App />
              )}
              {selectedTab === "ASHRAE" && graphChoice === "Return Air vs. Outdoor Air" && (
                <HeatmapD3_3App />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

    export default Hero;