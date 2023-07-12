import React, { useState, useEffect } from 'react';
import './FancyButton.css';
import './FancyButton2.css';
import './FancyButton3.css';
import './FancyButton4.css';
import './FancyButton5.css';
import './RadioButton.css';
import './Hero.css';
import ASHRAE1App from './ASHRAE1App';
import ASHRAE1cfmApp from './ASHRAE1cfmApp';
import ASHRAE2cfmApp from './ASHRAE2cfmApp';
import LANCET1cfmApp from './LANCET1cfmApp';
import HeatmapD3App from './HeatmapD3App';
import HeatmapD3_11App from './HeatmapD3_11App';
import HeatmapD3_111App from './HeatmapD3_111App';
import HeatmapD3_2App from './HeatmapD3_2App';
import HeatmapD3_3App from './HeatmapD3_3App';
import './Results.css';

const Hero = ({saveForComparison}) => {
  const [graphChoice, setGraphChoice] = useState("Filter Efficiency vs. Outdoor Air");
  const [unitChoice, setUnitChoice] = useState("cfm");
  const [occupancyCategory, setOccupancyCategory] = useState("Commercial");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [modes, setModes] = useState("IRMM");
  const [occupantNumber, setOccupantNumber] = useState(12);
  const [occupiedPeriod, setOccupiedPeriod] = useState(60);
  const [expiratoryActivity, setExpiratoryActivity] = useState("Voiced");
  const [physicalActivity, setPhysicalActivity] = useState("Standing");
  const [floorArea, setFloorArea] = useState(2000);
  const [height, setHeight] = useState(9);
  const [supplyAir, setSupplyAir] = useState(1800);
  const [outdoorAir, setOutdoorAir] = useState(240);
  const [merv, setMerv] = useState(0.86);
  const [filter, setFilter] = useState(0.86); 
  const [hvacUV, setHvacUV] = useState("0");
  const [hvacTreatment, setHvacTreatment] = useState(0);
  const [roomTreatment, setRoomTreatment] = useState(100);
  const [roomUV, setRoomUV] = useState(150);
  const [roomAC, setRoomAC] = useState(300);
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
  const [ASHRAE, setASHRAE] = useState(30);
  const [ASHRAE2, setASHRAE2] = useState(60);
  const [ASHRAE62p, setASHRAE62p] = useState("5");
  const [ASHRAE62ft, setASHRAE62ft] = useState("0.06");
  const [showSummary, setShowSummary] = useState(false);
  const [showBuilding, setShowBuilding] = useState(true);
  const [showInfector, setShowInfector] = useState(false);
  const [showHVAC, setShowHVAC] = useState(false);
  const [showInRoom, setShowInRoom] = useState(false);
  const [showNonEngineering, setShowNonEngineering] = useState(false);
  const [showVentilation, setShowVentilation] = useState(false);
  const [showFiltration, setShowFiltration] = useState(false);
  const [showDisinfection, setShowDisinfection] = useState(false);
  const [showMask, setShowMask] = useState(false);
  const [showOthers, setShowOthers] = useState(false);

  const handleAddSimulation2 = () => {
    // Handle the addition of a new simulation
    // Your logic to add a new simulation here

    // Get a reference to the #hero element
    const compareElement = document.getElementById('compare');

    // Scroll to the bottom of the #hero section
    compareElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  const handleSaveClick = (event) => {
    saveForComparison({ floorArea, occupantNumber });

  };

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

  const ASHRAEValues = {
    "Cell": 30,
    "Dayroom": 40,
    "Food and Beverage Facilities": 60,
    "Gym": 80,
    "Office": 30,
    "Retail": 40,
    "Transportation Waiting": 60,
    "Classroom": 40,
    "Lecture Hall": 50,
    "Manufacturing": 50,
    "Sorting, Packing, Light Assembly": 20,
    "Warehouse": 20, 
    "Exam Room": 40,
    "Group Treatment Area": 70,
    "Patient Room": 70,
    "Resident Room": 50,
    "Waiting Room": 90,
    "Auditorium": 50,
    "Place of Religious Workship": 50,
    "Museum": 60,
    "Convention": 60,
    "Spectator Area": 50,
    "Lobbies": 50,
    "Common Space": 50,
    "Dwelling Unit": 30

  };

  
  const ASHRAEValues2 = {
    "Cell": 30 * 2,
    "Dayroom": 40,
    "Food and Beverage Facilities": 60 * 2,
    "Gym": 80 * 2,
    "Office": 30 * 2,
    "Retail": 40 * 2,
    "Transportation Waiting": 60 * 2,
    "Classroom": 40 * 2,
    "Lecture Hall": 50 * 2,
    "Manufacturing": 50 * 2,
    "Sorting, Packing, Light Assembly": 20 * 2,
    "Warehouse": 20 * 2, 
    "Exam Room": 40 * 2,
    "Group Treatment Area": 70 * 2,
    "Patient Room": 70 * 2,
    "Resident Room": 50 * 2,
    "Waiting Room": 90 * 2,
    "Auditorium": 50 * 2,
    "Place of Religious Workship": 50 * 2,
    "Museum": 60 * 2,
    "Convention": 60 * 2,
    "Spectator Area": 50 * 2,
    "Lobbies": 50 * 2,
    "Common Space": 50 * 2,
    "Dwelling Unit": 30 * 2

  };

  


  const ASHRAEValuesp = {
    "Cell": 5,
    "Dayroom": 5,
    "Food and Beverage Facilities": 7.5,
    "Gym": 20,
    "Office": 5,
    "Retail": 7.5,
    "Transportation Waiting": 7.5,
    "Classroom": 10,
    "Lecture Hall": 7.5,
    "Manufacturing": 10,
    "Sorting, Packing, Light Assembly": 7.5,
    "Warehouse": 10, 
    "Exam Room": 7.5,
    "Group Treatment Area": 5,
    "Patient Room": 0,
    "Resident Room": 0,
    "Waiting Room": 0,
    "Auditorium": 5,
    "Place of Religious Workship": 5,
    "Museum": 7.5,
    "Convention": 5,
    "Spectator Area": 7.5,
    "Lobbies": 5,
    "Common Space": 7.5,
    "Dwelling Unit": 5

  };

  const ASHRAEValuesft = {
    "Cell": 0.12,
    "Dayroom": 0.06,
    "Food and Beverage Facilities": 0.18,
    "Gym": 0.18,
    "Office": 0.06,
    "Retail": 0.12,
    "Transportation Waiting": 0.06,
    "Classroom": 0.18,
    "Lecture Hall": 0.06,
    "Manufacturing": 0.18,
    "Sorting, Packing, Light Assembly": 0.12,
    "Warehouse": 0.06, 
    "Exam Room": 0.12,
    "Group Treatment Area": 0.06,
    "Patient Room": 0,
    "Resident Room": 0,
    "Waiting Room": 0,
    "Auditorium": 0.06,
    "Place of Religious Workship": 0.06,
    "Museum": 0.06,
    "Convention": 0.06,
    "Spectator Area": 0.06,
    "Lobbies": 0.06,
    "Common Space": 0,
    "Dwelling Unit": 0

  };
  
  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
    setASHRAE(ASHRAEValues[event.target.value]);
    setASHRAE2(ASHRAEValues2[event.target.value]);
    setASHRAE62p(ASHRAEValuesp[event.target.value]);
    setASHRAE62ft(ASHRAEValuesft[event.target.value]);
  };

  const handleRadioChange = (event) => {
    setRoomACQ(Number(event.target.value));
  };

  useEffect(() => {
    setRoomACQ(0);
  }, []);

  const handleRadioChange2 = (event) => {
    setRoomUVQ(Number(event.target.value));
  };

  useEffect(() => {
    setRoomUVQ(0);
  }, []);

  const handleRadioChange3 = (event) => {
    setRoomTreatmentQ(Number(event.target.value));
  };

  useEffect(() => {
    setRoomTreatmentQ(0);
  }, []);


  useEffect(() => {
    setSubcategories(subcategoriesOptions[occupancyCategory]);
    let defaultSubcategory;
    switch(occupancyCategory) {
      case "Correctional":
        defaultSubcategory = "Cell";
        break;
      case "Commercial":
        defaultSubcategory = "Office";
        break;
      case "Educational":
        defaultSubcategory = "Classroom";
        break;
      case "Industrial":
        defaultSubcategory = "Manufacturing";
        break;
      case "Healthcare":
        defaultSubcategory = "Exam Room";
        break;
      case "Public":
        defaultSubcategory = "Auditorium";
        break;
      case "Residential":
        defaultSubcategory = "Common Space";
        break;
      default:
        defaultSubcategory = subcategoriesOptions[occupancyCategory][0];
    }
    setSelectedSubcategory(defaultSubcategory);
    setASHRAE(ASHRAEValues[defaultSubcategory]);
    setASHRAE2(ASHRAEValues2[defaultSubcategory]);
    setASHRAE62p(ASHRAEValuesp[defaultSubcategory]);
    setASHRAE62ft(ASHRAEValuesft[defaultSubcategory]);
  }, [occupancyCategory]);

  
useEffect(() => {
  console.log(
    selectedSubcategory,
    floorArea,
    height,
    occupantNumber,
    occupiedPeriod,
    expiratoryActivity,
    physicalActivity,
    virusType,
    immunityProportion,
    infectorStatus,
    casesPerDay,
    infectiousPeriod,
    unreportedCases,
    infectorNumber,
    supplyAir,
    outdoorAir,
    merv,
    filter,
    hvacUV,
    hvacTreatment,
    roomTreatment,
    roomUV,
    roomAC,
    roomTreatmentQ,
    roomUVQ,
    roomACQ,
    maskInfector,
    maskSus
  );
}, [selectedSubcategory, floorArea, height, occupantNumber, occupiedPeriod, expiratoryActivity, physicalActivity, virusType, immunityProportion, infectorStatus, casesPerDay, infectiousPeriod, unreportedCases, infectorNumber, supplyAir, outdoorAir, merv, filter, hvacUV, hvacTreatment, roomTreatment, roomUV, roomAC, roomTreatmentQ, roomUVQ, roomACQ, maskInfector, maskSus]);


  const ASHRAEInputs = () => (
    <div className="input-container">
      <br/>


      <button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowBuilding(!showBuilding)}
      >
        {showBuilding ? 'Building and Occupancy' : 'Building and Occupancy'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>


<br/>

{showBuilding && (
  <div>
      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
  <label htmlFor="occupancyCategory" style={{ fontSize: '0.9rem'}}>Occupancy Category:</label>
  <select id="occupancyCategory" 
          value={occupancyCategory} 
          onChange={(e) => setOccupancyCategory(e.target.value)} 
          style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
    <option value="Correctional">Correctional Facilities</option>
    <option value="Commercial">Commercial/Retail</option>
    <option value="Educational">Educational Facilities</option>
    <option value="Industrial">Industrial</option>
    <option value="Healthcare">Healthcare</option>
    <option value="Public">Public Assembly/Sports & Entertainment</option>
  </select>
</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
  <label htmlFor="subcategories" style={{ fontSize: '0.9rem'}}>Subcategories:</label>
  <select id="subcategories" 
          value={selectedSubcategory} 
          onChange={handleSubcategoryChange} 
          style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
    {subcategories.map((subcategory, index) => (
      <option key={index} value={subcategory}>{subcategory}</option>
    ))}
  </select>
  <label htmlFor="modes" style={{ fontSize: '0.9rem' }}>Mode:</label>
  <select
    id="modes"
    value={modes}
    onChange={(e) => {
      setModes(e.target.value);
      if (e.target.value === "Normal") {
        setOccupantNumber(8);
      } else {
        setOccupantNumber(12);
      }
    }}
    style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '130px' }}
  >
    <option value="IRMM">IRMM</option>
    <option value="Normal">Normal</option>
  </select>
</div>


      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <label htmlFor="floorArea" style={{ fontSize: '0.9rem' }}>Floor Area (sqft): </label>
<input
  type="number"
  id="floorArea"
  value={floorArea}
  onChange={event => {
    const newFloorArea = event.target.value;
    const newSupplyAir = newFloorArea * 0.9; // Calculate the new supply air based on floor area
    setFloorArea(newFloorArea);
    setSupplyAir(newSupplyAir);
    const newOutdoorAir = (newFloorArea * ASHRAE62ft + occupantNumber * ASHRAE62p) / 0.75;
    setOutdoorAir(newOutdoorAir);
  }}
  min="1"
  max="100000"
  step="1"
  style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
/>
        <label htmlFor="height" style={{ fontSize: '0.9rem'}}>Height (ft): </label>
        <input type="number" id="height" value={height} onChange={event => setHeight(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px',}} />
      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="occupantNumber" style={{ fontSize: '0.9rem'}}>Occupant Number: </label>
        <input type="number" id="occupantNumber" value={occupantNumber} 
        min="1"
        max="200"
        onChange={event => {
          let newOccupantNumber = event.target.value;
          if (newOccupantNumber > 200) {
            newOccupantNumber = 200;
          }
          setOccupantNumber(newOccupantNumber);
          const newOutdoorAir = Math.round((floorArea * ASHRAE62ft + newOccupantNumber * ASHRAE62p) / 0.75 * 100) / 100;
          setOutdoorAir(newOutdoorAir);
        }}
        style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
        <label htmlFor="occupiedPeriod" style={{ fontSize: '0.9rem'}}>Occupied Period (min): </label>
        <input type="number" id="occupiedPeriod" value={occupiedPeriod} onChange={event => setOccupiedPeriod(event.target.value)} min="1" max="1440" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
      </div>

      
      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="expiratoryActivity" style={{ fontSize: '0.9rem'}}>Expiratory Activity:</label>
  <select id="expiratoryActivity" 
          value={expiratoryActivity} 
          onChange={(e) => setExpiratoryActivity(e.target.value)} 
          style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
    <option value="Breathing">Breathing</option>
    <option value="Whispered">Whispered Counting</option>
    <option value="Voiced">Voiced Counting</option>
    <option value="Speaking">Speaking</option>
    <option value="Unmodulated">Unmodulated Vocalization</option>
  </select>

        <label htmlFor="physicalActivity" style={{ fontSize: '0.9rem'}}>Physical Activity:</label>
  <select id="physicalActivity" 
          value={physicalActivity} 
          onChange={(e) => setPhysicalActivity(e.target.value)} 
          style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
    <option value="0.288">Resting</option>
    <option value="0.318">Standing</option>
    <option value="0.565">Standing+Light</option>
    <option value="0.812">Light Exercise</option>
    <option value="1.383">Moderate Exercise</option>
    <option value="1.942">Heavy Exercise</option>
  </select>
      </div>
      <br/>

      </div>
)}

<button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowInfector(!showInfector)}
      >
        {showInfector ? 'Infector Status and Immunity' : 'Infector Status and Immunity'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInfector && (
  <div>
<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

<label htmlFor="virusType" style={{ fontSize: '0.9rem'}}>Virus Type: </label>
<select value={virusType} onChange={event => setVirusType(event.target.value)} style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>'
    <option value="SARS-CoV-2">SARS-CoV-2</option>
        {/*
    <option value="Influenza A">Influenza A</option>
      */}

</select>

<label htmlFor="immunityProportion" style={{ fontSize: '0.9rem'}}>Immunity Proportion (%): </label>
        <input type="number" id="immunityProportion" value={immunityProportion} onChange={event => setImmunityProportion(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

  

                <label htmlFor="infectorStatus" style={{ fontSize: '0.9rem'}}>Infector Status: </label>
                <select
                    id="infectorStatus"
                    value={infectorStatus}
                    onChange={event => setInfectorStatus(event.target.value)}
                    style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}>
                    <option value="Regional Prevalence">Regional Prevalence</option>
                    <option value="Number of Infector">Number of Infector</option>
                </select>

                {infectorStatus === 'Regional Prevalence' && (
                <div>
                    <h style={{ color: 'green', fontSize: '0.9rem' }}>Calculates absolute result</h>
                </div>

            )}

            {infectorStatus === 'Number of Infector' && (
                <div>
                    <h style={{ color: 'green', fontSize: '0.9rem' }}>Calculates conditional result</h>
                </div>

            )}

            </div>


            <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

            {infectorStatus === 'Regional Prevalence' && (
                <div>
                    <label htmlFor="casesPerDay" style={{ fontSize: '0.9rem'}}>Cases per 100,000 per Day: </label>
                    <input type="number" id="casesPerDay" value={casesPerDay} onChange={event => setCasesPerDay(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
                </div>
            )}

            
{infectorStatus === 'Number of Infector' && (
                <div>
                    <label htmlFor="infectorNumber" style={{ fontSize: '0.9rem'}}>Infector Number: </label>
                    <input type="number" id="infectorNumber" value={infectorNumber} onChange={event => setInfectorNumber(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
                </div>

            )}


</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

{infectorStatus === 'Regional Prevalence' && (
                <div>
                    <label htmlFor="infectiousPeriod" style={{ fontSize: '0.9rem'}}>Infectious Period (days): </label>
                    <input type="number" id="infectiousPeriod" value={infectiousPeriod} onChange={event => setInfectiousPeriod(event.target.value)} min="1" max="365" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                    <label htmlFor="unreportedCases" style={{ fontSize: '0.9rem'}}>Unreported Cases (%): </label>
                    <input type="number" id="unreportedCases" value={unreportedCases} onChange={event => setUnreportedCases(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                </div>
            )}

</div>

</div>
)}


<br/>

<button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowHVAC(!showHVAC)}
      >
        {showHVAC ? 'Engineering Control - HVAC' : 'Engineering Control - HVAC'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showHVAC && (
  <div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
  <br/>
  <label htmlFor="supplyAir" style={{ fontSize: '0.9rem' }}>Supply Air (cfm): </label>
<input
  type="number"
  id="supplyAir"
  value={supplyAir}
  onChange={event => setSupplyAir(Number(event.target.value))}
  min="1"
  max="100000"
  step="1"
  style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>

<label htmlFor="outdoorAir" style={{ fontSize: '0.9rem' }}>Outdoor Air (cfm): </label>
<input
  type="number"
  id="outdoorAir"
  value={outdoorAir}
  onChange={event => setOutdoorAir(Number(event.target.value))}
  min="0"
  max="100000"
  step="1"
  style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>
</div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>

      <label htmlFor="merv" style={{ fontSize: '0.9rem'}}>Filter Rating:</label>
      <select
      id="merv"
     value={merv}
       onChange={(e) => {
       setMerv(e.target.value);
       setFilter(e.target.value);
     }}
    style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
    > 
  <option value="0">None</option>
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

  <label htmlFor="hvacUV" style={{ fontSize: '0.9rem'}}>UVC Inactivation (%): </label>
        <input type="number" id="hvacUV" value={hvacUV} onChange={event => setHvacUV(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

  </div>

  <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="hvacTreatment" style={{ fontSize: '0.9rem'}}>Air Treatment CADR (cfm): </label>
        <input type="number" id="hvacTreatment" value={hvacTreatment} onChange={event => setHvacTreatment(Number(event.target.value))} min="0" max={(supplyAir - outdoorAir) * (1 - filter) * (1 - hvacUV / 100)} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

        </div> 


</div>

)}

<br/>

<button
  className="fancy-button5"
  style={{
    display: 'block',
    margin: '0 auto',
    textAlign: 'center',
  }}
  onClick={() => setShowInRoom(!showInRoom)}
>
  {showInRoom ? 'Engineering Control - In Room' : 'Engineering Control - In Room'}
</button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInRoom && (
  <div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomACQ" style={{ fontSize: '0.9rem'}}>Air Cleaner</label>&nbsp;&nbsp;

        <div className="radio-buttons">
      {[0, 1, 2, 3, 4].map((value) => (
        <label key={value} className={`radio-button ${roomACQ === value ? 'selected' : ''}`}>
          <input
            type="radio"
            name="roomACQ"
            value={value}
            checked={roomACQ === value}
            onChange={handleRadioChange}
            style={{ display: 'none' }}
          />
          {value}
        </label>
      ))}
    </div>&emsp;

  <label htmlFor="roomAC" style={{ fontSize: '0.9rem'}}>Default CADR (cfm): </label>
        <input type="number" id="roomAC" value={roomAC} onChange={event => setRoomAC(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomUVQ" style={{ fontSize: '0.9rem'}}>In Room UV</label>&nbsp;&nbsp;

  <div className="radio-buttons">
    {[0, 1, 2, 3, 4].map(value => (
      <label key={value} className={`radio-button ${roomUVQ === value ? 'selected' : ''}`}>
        <input
          type="radio"
          name="roomUVQ"
          value={value}
          checked={roomUVQ === value}
          onChange={handleRadioChange2}
          style={{ display: 'none' }}
        />
        {value}
      </label>
    ))}
  </div>&emsp;

  <label htmlFor="roomUV" style={{ fontSize: '0.9rem'}}>Default CADR (cfm): </label>
        <input type="number" id="roomUV" value={roomUV} onChange={event => setRoomUV(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


      </div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomTreatmentQ" style={{ fontSize: '0.9rem', marginRight: '5px' }}>
    Air Treatment Device
  </label>
  <div className="radio-buttons">
    {[0, 1, 2, 3, 4].map((value) => (
      <label key={value} className={`radio-button ${roomTreatmentQ === value ? 'selected' : ''}`}>
        <input
          type="radio"
          name="roomTreatmentQ"
          value={value}
          checked={roomTreatmentQ === value}
          onChange={handleRadioChange3}
          style={{ display: 'none' }}
        />
        {value}
      </label>
    ))}
  </div>
  <label htmlFor="roomTreatment" style={{ fontSize: '0.9rem', marginRight: '5px', marginLeft: '10px' }}>
    Default CADR (cfm):
  </label>
  <input
    type="number"
    id="roomTreatment"
    value={roomTreatment}
    onChange={(event) => setRoomTreatment(event.target.value)}
    min="0"
    max="1000"
    step="1"
    style={{
      borderRadius: '5px',
      border: '1px solid #ccc',
      padding: '3px 10px',
      fontFamily: 'Arial',
      fontSize: '0.9rem',
    }}
  />
</div>
</div>
)}


<br/>

<button
        className="fancy-button5"
        style={{     display: 'block',
        margin: '0 auto',
        textAlign: 'center', }}
        onClick={() => setShowNonEngineering(!showNonEngineering)}
      >
        {showNonEngineering ? 'Non-engieering Controls' : 'Non-engieering Controls'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showNonEngineering && (
  <div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="maskInfector" style={{ fontSize: '0.9rem'}}>
            Mask Efficiency
            <br/>
            Infector (%): </label>
        <input type="number" id="maskInfector" value={maskInfector} onChange={event => setMaskInfector(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding:  '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />

<label htmlFor="maskSus" style={{ fontSize: '0.9rem'}}>
    Mask Efficiency
    <br/>
    Susceptible (%): </label>
<input type="number" id="maskSus" value={maskSus} onChange={event => setMaskSus(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />
</div>
</div>
)}


<br/>

{/*
<button className="fancy-button" style={{ fontSize: '14px', padding: '6px 20px', height: '40px', display: 'block', margin: '0 auto' }}>
Get Design Tips: AI Advisor
</button>
*/}

</div>


);

const LANCETInputs = () => (
  <div className="input-container">
    <br/>


    <button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowBuilding(!showBuilding)}
    >
      {showBuilding ? 'Building and Occupancy' : 'Building and Occupancy'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>


<br/>

{showBuilding && (
<div>
    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
<label htmlFor="occupancyCategory" style={{ fontSize: '0.9rem'}}>Occupancy Category:</label>
<select id="occupancyCategory" 
        value={occupancyCategory} 
        onChange={(e) => setOccupancyCategory(e.target.value)} 
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  <option value="Correctional">Correctional Facilities</option>
  <option value="Commercial">Commercial/Retail</option>
  <option value="Educational">Educational Facilities</option>
  <option value="Industrial">Industrial</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Public">Public Assembly/Sports & Entertainment</option>
</select>
</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
<label htmlFor="subcategories" style={{ fontSize: '0.9rem'}}>Subcategories:</label>
<select id="subcategories" 
        value={selectedSubcategory} 
        onChange={handleSubcategoryChange} 
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  {subcategories.map((subcategory, index) => (
    <option key={index} value={subcategory}>{subcategory}</option>
  ))}
</select>

</div>


    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
    <label htmlFor="floorArea" style={{ fontSize: '0.9rem' }}>Floor Area (sqft): </label>
<input
type="number"
id="floorArea"
value={floorArea}
onChange={event => {
  const newFloorArea = event.target.value;
  const newSupplyAir = newFloorArea * 0.9; // Calculate the new supply air based on floor area
  setFloorArea(newFloorArea);
  setSupplyAir(newSupplyAir);
  const newOutdoorAir = (newFloorArea * ASHRAE62ft + occupantNumber * ASHRAE62p) / 0.75;
  setOutdoorAir(newOutdoorAir);
}}
min="1"
max="100000"
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
/>
      <label htmlFor="height" style={{ fontSize: '0.9rem'}}>Height (ft): </label>
      <input type="number" id="height" value={height} onChange={event => setHeight(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px',}} />
    </div>

    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="occupantNumber" style={{ fontSize: '0.9rem'}}>Occupant Number: </label>
      <input type="number" id="occupantNumber" value={occupantNumber} 
      min="1"
      max="200"
      onChange={event => {
        let newOccupantNumber = event.target.value;
        if (newOccupantNumber > 200) {
          newOccupantNumber = 200;
        }
        setOccupantNumber(newOccupantNumber);
        const newOutdoorAir = Math.round((floorArea * ASHRAE62ft + newOccupantNumber * ASHRAE62p) / 0.75 * 100) / 100;
        setOutdoorAir(newOutdoorAir);
      }}
      style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
      <label htmlFor="occupiedPeriod" style={{ fontSize: '0.9rem'}}>Occupied Period (min): </label>
      <input type="number" id="occupiedPeriod" value={occupiedPeriod} onChange={event => setOccupiedPeriod(event.target.value)} min="1" max="1440" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
    </div>

    
    <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="expiratoryActivity" style={{ fontSize: '0.9rem'}}>Expiratory Activity:</label>
<select id="expiratoryActivity" 
        value={expiratoryActivity} 
        onChange={(e) => setExpiratoryActivity(e.target.value)} 
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  <option value="Breathing">Breathing</option>
  <option value="Whispered">Whispered Counting</option>
  <option value="Voiced">Voiced Counting</option>
  <option value="Speaking">Speaking</option>
  <option value="Unmodulated">Unmodulated Vocalization</option>
</select>

      <label htmlFor="physicalActivity" style={{ fontSize: '0.9rem'}}>Physical Activity:</label>
<select id="physicalActivity" 
        value={physicalActivity} 
        onChange={(e) => setPhysicalActivity(e.target.value)} 
        style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>
  <option value="Resting">Resting</option>
  <option value="Standing">Standing</option>
  <option value="Standing+Light">Standing+Light</option>
  <option value="Light">Light Exercise</option>
  <option value="Moderate">Moderate Exercise</option>
  <option value="Heavy">Heavy Exercise</option>
</select>
    </div>
    <br/>

    </div>
)}

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowInfector(!showInfector)}
    >
      {showInfector ? 'Infector Status and Immunity' : 'Infector Status and Immunity'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showInfector && (
<div>
<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

<label htmlFor="virusType" style={{ fontSize: '0.9rem'}}>Virus Type: </label>
<select value={virusType} onChange={event => setVirusType(event.target.value)} style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}}>'
  <option value="SARS-CoV-2">SARS-CoV-2</option>
      {/*
  <option value="Influenza A">Influenza A</option>
    */}

</select>

<label htmlFor="immunityProportion" style={{ fontSize: '0.9rem'}}>Immunity Proportion (%): </label>
      <input type="number" id="immunityProportion" value={immunityProportion} onChange={event => setImmunityProportion(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>



              <label htmlFor="infectorStatus" style={{ fontSize: '0.9rem'}}>Infector Status: </label>
              <select
                  id="infectorStatus"
                  value={infectorStatus}
                  onChange={event => setInfectorStatus(event.target.value)}
                  style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}>
                  <option value="Regional Prevalence">Regional Prevalence</option>
                  <option value="Number of Infector">Number of Infector</option>
              </select>

              {infectorStatus === 'Regional Prevalence' && (
              <div>
                  <h style={{ color: 'green', fontSize: '0.9rem' }}>Calculates absolute result</h>
              </div>

          )}

          {infectorStatus === 'Number of Infector' && (
              <div>
                  <h style={{ color: 'green', fontSize: '0.9rem' }}>Calculates conditional result</h>
              </div>

          )}

          </div>


          <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

          {infectorStatus === 'Regional Prevalence' && (
              <div>
                  <label htmlFor="casesPerDay" style={{ fontSize: '0.9rem'}}>Cases per 100,000 per Day: </label>
                  <input type="number" id="casesPerDay" value={casesPerDay} onChange={event => setCasesPerDay(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
              </div>
          )}

          
{infectorStatus === 'Number of Infector' && (
              <div>
                  <label htmlFor="infectorNumber" style={{ fontSize: '0.9rem'}}>Infector Number: </label>
                  <input type="number" id="infectorNumber" value={infectorNumber} onChange={event => setInfectorNumber(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
              </div>

          )}


</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>

{infectorStatus === 'Regional Prevalence' && (
              <div>
                  <label htmlFor="infectiousPeriod" style={{ fontSize: '0.9rem'}}>Infectious Period (days): </label>
                  <input type="number" id="infectiousPeriod" value={infectiousPeriod} onChange={event => setInfectiousPeriod(event.target.value)} min="1" max="365" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
                  <label htmlFor="unreportedCases" style={{ fontSize: '0.9rem'}}>Unreported Cases (%): </label>
                  <input type="number" id="unreportedCases" value={unreportedCases} onChange={event => setUnreportedCases(event.target.value)} min="1" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '80px'}} />
              </div>
          )}

</div>

</div>
)}


<br/>

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowVentilation(!showVentilation)}
    >
      {showVentilation ? 'Ventilation - HVAC' : 'Ventilation - HVAC'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showVentilation && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
<br/>
<label htmlFor="supplyAir" style={{ fontSize: '0.9rem' }}>Supply Air (cfm): </label>
<input
type="number"
id="supplyAir"
value={supplyAir}
onChange={event => setSupplyAir(Number(event.target.value))}
min="1"
max="100000"
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>

<label htmlFor="outdoorAir" style={{ fontSize: '0.9rem' }}>Outdoor Air (cfm): </label>
<input
type="number"
id="outdoorAir"
value={outdoorAir}
onChange={event => setOutdoorAir(Number(event.target.value))}
min="0"
max="100000"
step="1"
style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px', width: '100px' }}
/>
</div>


</div>

)}

<br/>

<button
className="fancy-button5"
style={{
  display: 'block',
  margin: '0 auto',
  textAlign: 'center',
}}
onClick={() => setShowFiltration(!showFiltration)}
>
{showFiltration ? 'Filtration' : 'Filtration'}
</button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showFiltration && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>

    <label htmlFor="merv" style={{ fontSize: '0.9rem'}}>HVAC Filter Rating:</label>
    <select
    id="merv"
   value={merv}
     onChange={(e) => {
     setMerv(e.target.value);
     setFilter(e.target.value);
   }}
  style={{ fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px' }}
  > 
  <option value="0">None</option>
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

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomACQ" style={{ fontSize: '0.9rem'}}>Air Cleaner</label>&nbsp;&nbsp;

      <div className="radio-buttons">
    {[0, 1, 2, 3, 4].map((value) => (
      <label key={value} className={`radio-button ${roomACQ === value ? 'selected' : ''}`}>
        <input
          type="radio"
          name="roomACQ"
          value={value}
          checked={roomACQ === value}
          onChange={handleRadioChange}
          style={{ display: 'none' }}
        />
        {value}
      </label>
    ))}
  </div>&emsp;

<label htmlFor="roomAC" style={{ fontSize: '0.9rem'}}>Default NADR (cfm): </label>
      <input type="number" id="roomAC" value={roomAC} onChange={event => setRoomAC(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>

</div>
)}

<br/>

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowDisinfection(!showDisinfection)}
    >
      {showDisinfection ? 'Disinfection' : 'Disinfection'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showDisinfection && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>

<label htmlFor="hvacUV" style={{ fontSize: '0.9rem'}}>HVAC In-duct GUV Distinfection (%): </label>
      <input type="number" id="hvacUV" value={hvacUV} onChange={event => setHvacUV(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />

</div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="roomUVQ" style={{ fontSize: '0.9rem'}}>GUV System</label>&nbsp;&nbsp;

<div className="radio-buttons">
  {[0, 1, 2, 3, 4].map(value => (
    <label key={value} className={`radio-button ${roomUVQ === value ? 'selected' : ''}`}>
      <input
        type="radio"
        name="roomUVQ"
        value={value}
        checked={roomUVQ === value}
        onChange={handleRadioChange2}
        style={{ display: 'none' }}
      />
      {value}
    </label>
  ))}
</div>&emsp;

<label htmlFor="roomUV" style={{ fontSize: '0.9rem'}}>Default NADR (cfm): </label>
      <input type="number" id="roomUV" value={roomUV} onChange={event => setRoomUV(event.target.value)} min="0" max="1000" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />


    </div>
</div>
)}


<br/>

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowMask(!showMask)}
    >
      {showMask ? 'Mask' : 'Mask'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showMask && (
<div>

<div className="graph-choice" style ={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <br/>
      <label htmlFor="maskInfector" style={{ fontSize: '0.9rem'}}>
          Mask Efficiency
          <br/>
          Infector (%): </label>
      <input type="number" id="maskInfector" value={maskInfector} onChange={event => setMaskInfector(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding:  '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />

<label htmlFor="maskSus" style={{ fontSize: '0.9rem'}}>
  Mask Efficiency
  <br/>
  Susceptible (%): </label>
<input type="number" id="maskSus" value={maskSus} onChange={event => setMaskSus(event.target.value)} min="0" max="100" step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '15px', marginRight: '20px'}} />
</div>
</div>
)}


<br/>

<button
      className="fancy-button5"
      style={{     display: 'block',
      margin: '0 auto',
      textAlign: 'center', }}
      onClick={() => setShowOthers(!showOthers)}
    >
      {showOthers ? 'Others' : 'Others'}
    </button>

    <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

{showOthers && (
<div>

<div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="hvacTreatment" style={{ fontSize: '0.9rem'}}>HVAC Air Treatment NADR (cfm): </label>
        <input type="number" id="hvacTreatment" value={hvacTreatment} onChange={event => setHvacTreatment(Number(event.target.value))} min="0" max={(supplyAir - outdoorAir) * (1 - filter) * (1 - hvacUV / 100)} step="1" style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '3px 10px', fontFamily: 'Arial', fontSize: '0.9rem', marginLeft: '5px', marginRight: '20px'}} />
</div>

      <div className="graph-choice" style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
        <br/>
        <label htmlFor="roomTreatmentQ" style={{ fontSize: '0.9rem', marginRight: '5px' }}>
    Air Treatment Device
  </label>
  <div className="radio-buttons">
    {[0, 1, 2, 3, 4].map((value) => (
      <label key={value} className={`radio-button ${roomTreatmentQ === value ? 'selected' : ''}`}>
        <input
          type="radio"
          name="roomTreatmentQ"
          value={value}
          checked={roomTreatmentQ === value}
          onChange={handleRadioChange3}
          style={{ display: 'none' }}
        />
        {value}
      </label>
    ))}
  </div>
  <label htmlFor="roomTreatment" style={{ fontSize: '0.9rem', marginRight: '5px', marginLeft: '10px' }}>
    Default NADR (cfm):
  </label>
  <input
    type="number"
    id="roomTreatment"
    value={roomTreatment}
    onChange={(event) => setRoomTreatment(event.target.value)}
    min="0"
    max="1000"
    step="1"
    style={{
      borderRadius: '5px',
      border: '1px solid #ccc',
      padding: '3px 10px',
      fontFamily: 'Arial',
      fontSize: '0.9rem',
    }}
  />
</div>


        
</div>

)}


<br/>

{/*
<button className="fancy-button" style={{ fontSize: '14px', padding: '6px 20px', height: '40px', display: 'block', margin: '0 auto' }}>
Get Design Tips: AI Advisor
</button>
*/}

</div>


);

let convertedOutdoorAir = outdoorAir;
let convertedSupplyAir = supplyAir;
let convertedHVACUV = hvacUV;
let convertedHVACTreatment = hvacTreatment;
let convertedRoomUV = roomUV * roomUVQ;
let convertedRoomAC = roomAC * roomACQ;
let convertedRoomTreatment = roomTreatment * roomTreatmentQ;
let totalCADR = convertedOutdoorAir + (convertedSupplyAir - convertedOutdoorAir) * filter + (convertedSupplyAir-convertedOutdoorAir) * (1 - filter) * hvacUV / 100 +
convertedHVACTreatment +
convertedRoomUV + convertedRoomAC + convertedRoomTreatment;

// Check the selected unit choice and perform conversions if necessary

if (unitChoice === "cfm") {
convertedOutdoorAir = outdoorAir.toFixed(0);
convertedSupplyAir = supplyAir.toFixed(0);
convertedHVACTreatment = hvacTreatment;
convertedRoomAC = (roomAC * roomACQ).toFixed(0);
convertedRoomUV = (roomUV * roomUVQ).toFixed(0);
convertedRoomTreatment = (roomTreatment * roomTreatmentQ).toFixed(0);
totalCADR = (totalCADR).toFixed(0);

} else if (unitChoice === "cfm/p") {
convertedOutdoorAir = (outdoorAir / occupantNumber).toFixed(1);
convertedSupplyAir = (supplyAir / occupantNumber).toFixed(1);
convertedHVACTreatment = (hvacTreatment / occupantNumber).toFixed(1);
convertedRoomAC = ((roomAC / occupantNumber) * roomACQ).toFixed(1);
convertedRoomAC = ((roomUV / occupantNumber) * roomUVQ).toFixed(1);
convertedRoomTreatment = ((roomTreatment / occupantNumber) * roomTreatmentQ).toFixed(1);
totalCADR = (totalCADR/occupantNumber).toFixed(1);

} else if (unitChoice === "cfm/ft²") {
convertedOutdoorAir = (outdoorAir / floorArea).toFixed(1);
convertedSupplyAir = (supplyAir / floorArea).toFixed(1);
convertedHVACTreatment = (hvacTreatment / floorArea).toFixed(1);
convertedRoomAC = ((roomAC / floorArea) * roomACQ).toFixed(1);
convertedRoomAC = ((roomUV / floorArea) * roomUVQ).toFixed(1);
convertedRoomTreatment = ((roomTreatment / floorArea) * roomTreatmentQ).toFixed(1);
totalCADR = (totalCADR/floorArea).toFixed(1);

} else if (unitChoice === "h⁻¹") {
convertedOutdoorAir = ((outdoorAir / (floorArea * height)) * 60).toFixed(1);
convertedSupplyAir = ((supplyAir / (floorArea * height)) * 60).toFixed(1);
convertedHVACTreatment = ((hvacTreatment / (floorArea * height)) * 60).toFixed(1);
convertedRoomAC = (((roomAC / (floorArea * height)) * 60) * roomACQ).toFixed(1);
convertedRoomAC = (((roomUV / (floorArea * height)) * 60) * roomUVQ).toFixed(1);
convertedRoomTreatment = (((roomTreatment / (floorArea * height)) * 60) * roomTreatmentQ).toFixed(1);
totalCADR = (totalCADR/(floorArea * height) * 60).toFixed(1);
}


const totalCADRR = (outdoorAir + 
(supplyAir - outdoorAir) * filter + 
(supplyAir - outdoorAir) * (1 - filter) * hvacUV / 100 +
hvacTreatment +
roomUV * roomUVQ + 
roomAC * roomACQ + 
roomTreatment * roomTreatmentQ)/occupantNumber;

const isCompliant = totalCADRR >= (expiratoryActivity === "Unmodulated" ? ASHRAE2 : ASHRAE);

const LANCET_ach = totalCADR/(floorArea * height) * 60;

const getLancetText = (LANCET_ach) => {
  if (LANCET_ach < 4) {
    return '✗';
  } else if (LANCET_ach >= 4 && LANCET_ach < 6) {
    return <> <em>Good</em>&nbsp;</>;
  } else if (LANCET_ach === 6) {
    return <> <em>Better</em>&nbsp;</>;
  } else {
    return <> <em>Best</em>&nbsp;</>;
  }
}

const LANCET_occ = totalCADR/(occupantNumber);

const getLancetText2 = (LANCET_occ) => {
  if (LANCET_occ < 21) {
    return '✗' ;
  } else if (LANCET_occ >= 21 && LANCET_occ < 30) {
    return <> <em>Good</em></>;
  } else if (LANCET_occ === 30) {
    return <> <em>Better</em></>;
  } else {
    return <> <em>Best</em></>;
  }
}

const getLancetText3 = (totalCADR) => {
  if (totalCADR < floorArea * (ASHRAE62ft + 0.75) + occupantNumber * ASHRAE62p) {
    return '✗';
  } else if (totalCADR >= floorArea * (ASHRAE62ft + 0.75) + occupantNumber * ASHRAE62p && totalCADR < floorArea * (ASHRAE62ft + 1) + occupantNumber * ASHRAE62p) {
    return <> <em>Good</em></>;
  } else if (totalCADR === floorArea * (ASHRAE62ft + 1) + occupantNumber * ASHRAE62p) {
    return <> <em>Better</em></>;
  } else {
    return <> <em>Best</em></>;
  }
}


return (
<div className="hero" id="hero">
<div className="container">
<div className="content">
<div className="card">
<div className="top-navbar" style={{ fontSize: '0.9rem'}}>
    <a href="#ASHRAE" style={{ color: selectedTab === "ASHRAE" ? 'rgb(7,114,185)' : 'inherit' }} onClick={() => setSelectedTab("ASHRAE")}>ASHRAE Standard 241</a>
    <a href="#LANCET" style={{ color: selectedTab === "LANCET" ? 'rgb(7,114,185)' : 'inherit' }} onClick={() => setSelectedTab("LANCET")}>LANCET</a>
    <a href="#REHVA" style={{ color: selectedTab === "REHVA" ? 'rgb(7,114,185)' : 'inherit' }} onClick={() => setSelectedTab("REHVA")}>REHVA</a>
    <a href="#Nordic" style={{ color: selectedTab === "Nordic" ? 'rgb(7,114,185)' : 'inherit' }} onClick={() => setSelectedTab("Nordic")}>Nordic Ventilation Group</a>
  </div>

  {selectedTab === "ASHRAE" && ASHRAEInputs()}
  {selectedTab === "LANCET" && LANCETInputs()}
  </div>

  <div className="graph-container">
  <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

  {selectedTab === "ASHRAE" && (
    <>
    <div className="card2">
      <div className={`result-container ${isCompliant ? 'compliant' : 'noncompliant'}`}>
        {isCompliant ? (
          <>
            <span>✓</span>&nbsp;
            Complies with ASHRAE Standard 241 (  ECAᵢ: {(expiratoryActivity === "Unmodulated" ? ASHRAE2 : ASHRAE)} cfm/p )
          </>
        ) : (
          <>
            <span>✗</span>&nbsp;
            Not Complies with ASHRAE Standard 241 ( {(expiratoryActivity === "Unmodulated" ? ASHRAE2 : ASHRAE)} cfm/person )
          </>
        )}
      </div>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
          color: isCompliant ? 'green' : '#B22222'
        }}
      >
        Total CADR: {totalCADR} {unitChoice}&emsp;Absolute Risk: 0.03% (3 people)&emsp;Relative Risk: 30%
      </span>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <button
        className={isCompliant ? "fancy-button2" : "fancy-button3"}
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? 'Hide Summary: Current Status' : 'Show Summary: Current Status'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showSummary && selectedTab === "ASHRAE" && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginLeft: '0px',
            fontFamily: 'Arial',
            fontSize: '0.9rem',
            color: 'rgb(50,50,50)'
          }}
        >
     <div>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         [ HVAC ]&emsp;OA: {convertedOutdoorAir} {unitChoice}&emsp;RA: {(convertedSupplyAir - convertedOutdoorAir).toFixed(1)} {unitChoice} ({((supplyAir - outdoorAir) / supplyAir * 100).toFixed(1)}%)&emsp;Filter: {filter*100}%
         <br/>&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;UVC Inactivation: {convertedHVACUV}%&emsp;Air Treatment: {convertedHVACTreatment} {unitChoice}
       </div>
       [ In Room ]&emsp;Air Cleaner: {convertedRoomAC} {unitChoice}&emsp;UVC: {convertedRoomUV} cfm&emsp;Air Treatment: {convertedRoomTreatment} {unitChoice} 
       <br/>
       [ Nonengineering ]&emsp;{maskInfector === "0" && maskSus === "0" ? "No Mask" : "Mask On"}
     </div>
   </span>
 )}
 </div>
</>
)}

{selectedTab === "LANCET" && (
    <>
    <div className="card2">
    <span style={{color: '#333333'}}>Compliance to Proposed NADR by LANCET </span>
    <table>
    <thead>
      <tr>
        <th style={{padding: '10px'}}>Equivalent Air Change Rate</th>
        <th style={{padding: '10px'}}>Number of Occupants</th>
        <th style={{padding: '10px'}}>Floor Area + Min ASHRAE</th>
        <th style={{padding: '10px'}}>Secondary Attack Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td style={{padding: '10px', color: getLancetText(LANCET_ach) === '✗' ? '#B22222' : 'green'}}> {getLancetText(LANCET_ach)}</td>
  <td style={{padding: '10px', color: getLancetText2(LANCET_occ) === '✗' ? '#B22222' : 'green'}}> {getLancetText2(LANCET_occ)}</td>
  <td style={{padding: '10px', color: getLancetText3(totalCADR) === '✗' ? '#B22222' : 'green'}}> {getLancetText3(totalCADR)}</td>
  <td style={{padding: '10px', color: getLancetText2(LANCET_occ) === '✗' ? '#B22222' : 'green'}}> {getLancetText2(LANCET_occ)}</td>
      </tr>
    </tbody>
  </table>


      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '0px',
          fontFamily: 'Arial',
          fontSize: '0.95rem',
          color: isCompliant ? 'green' : '#B22222'
        }}
      >
        Total NADR: {totalCADR} {unitChoice}&emsp;Absolute Risk: 0.03% (3 people)&emsp;Relative Risk: 30%
      </span>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      <button
        className={isCompliant ? "fancy-button2" : "fancy-button3"}
        style={{ fontSize: '14px', padding: '0 15px', height: '32px' }}
        onClick={() => setShowSummary(!showSummary)}
      >
        {showSummary ? 'Hide Summary: Current Status' : 'Show Summary: Current Status'}
      </button>

      <span style={{ lineHeight: '0.5' }}>&nbsp;</span>

      {showSummary && selectedTab === "LANCET" && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginLeft: '0px',
            fontFamily: 'Arial',
            fontSize: '0.9rem',
            color: 'rgb(50,50,50)'
          }}
        >
     <div>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
       [ Ventilation ]&emsp;HVAC OA: {convertedOutdoorAir} {unitChoice}&emsp;RA: {(convertedSupplyAir - convertedOutdoorAir).toFixed(1)} {unitChoice} ({((supplyAir - outdoorAir) / supplyAir * 100).toFixed(1)}%)
       </div>
       [ Filtration ]&emsp;HVAC Filter: {filter*100}%&emsp;Air Cleaner: {convertedRoomAC} {unitChoice}
       <br/>
       [ Disinfection ]&emsp;In-duct GUV Disinfection: {convertedHVACUV} {unitChoice}&emsp;GUV System: {convertedRoomUV} {unitChoice}
       <br/>
       [ Mask ]&emsp;{maskInfector === "0" && maskSus === "0" ? "No Mask" : "Mask On"}
       <br/>
       [ Others ]&emsp;HVAC Air Treatment: {convertedHVACTreatment} {unitChoice}&emsp;In-Room Air Treatment: {convertedRoomTreatment} {unitChoice}
     </div>
   </span>
 )}
 </div>
</>
)}

<br/>

    <div className="graph-choice">
      <label htmlFor="graphChoice" style={{fontSize: '0.9rem'}}> Graph: </label>
      <select
        id="graphChoice"
        value={graphChoice}
        onChange={(e) => setGraphChoice(e.target.value)}
        style={{ fontSize: '0.9rem', marginRight: '20px' }}
      >
        <option value="Filter Efficiency vs. Outdoor Air">
          Filter Efficiency vs. Outdoor Air
        </option>
        {/*
        <option value="Return Air vs. Outdoor Air">
          Return Air vs. Outdoor Air
        </option>
        */}


      </select>

      <label htmlFor="unitChoice" style={{ fontSize: '0.9rem'}}>Unit: </label>
<select
id="unitChoice"
value={unitChoice}
onChange={(e) => setUnitChoice(e.target.value)}
style={{ fontSize: '0.9rem', marginRight: '20px' }}
>
<option value="cfm">
cfm
</option>
{/*
<option value="cfm/p">
cfm/p
</option>
<option value="cfm/ft²">
cfm/ft²
</option>
<option value="h⁻¹">
h⁻¹
</option>
*/}
</select>
    </div>

    <div className="chart">

      {selectedTab === "ASHRAE" && graphChoice === "Filter Efficiency vs. Outdoor Air" && unitChoice === "cfm" && (
        <ASHRAE1cfmApp selectedSubcategory={selectedSubcategory} 
        floorArea={floorArea} 
        height={height} 
        occupantNumber={occupantNumber} 
        occupiedPeriod={occupiedPeriod} 
        expiratoryActivity={expiratoryActivity} 
        physicalActivity={physicalActivity}
        virusType={virusType} 
        immunityProportion={immunityProportion} 
        infectorStatus={infectorStatus} 
        casesPerDay={casesPerDay} 
        infectiousPeriod={infectiousPeriod} 
        unreportedCases={unreportedCases} 
        infectorNumber={infectorNumber}
        supplyAir={supplyAir} 
        outdoorAir={outdoorAir} 
        merv={merv} 
        filter={filter}
        hvacUV={hvacUV} 
        hvacTreatment={hvacTreatment}
        roomTreatment={roomTreatment} 
        roomUV={roomUV} 
        roomAC={roomAC} 
        roomTreatmentQ={roomTreatmentQ} 
        roomUVQ={roomUVQ} 
        roomACQ={roomACQ} 
        maskInfector={maskInfector} 
        maskSus={maskSus}
        ASHRAE={ASHRAE}
        ASHRAE2={ASHRAE2} />
      )}
      {selectedTab === "ASHRAE" && graphChoice === "Filter Efficiency vs. Outdoor Air" && unitChoice === "cfm/p" && (
        <ASHRAE1App occupantNumber={occupantNumber} floorArea={floorArea} height={height} />
      )}
      {selectedTab === "ASHRAE" && graphChoice === "Filter Efficiency vs. Outdoor Air" && unitChoice === "cfm/ft²" && (
        <ASHRAE1App occupantNumber={occupantNumber} floorArea={floorArea} height={height} />
      )}
      {selectedTab === "ASHRAE" && graphChoice === "Filter Efficiency vs. Outdoor Air" && unitChoice === "h⁻¹" && (
        <ASHRAE1App occupantNumber={occupantNumber} floorArea={floorArea} height={height} />
      )}
      
      {selectedTab === "LANCET" && graphChoice === "Filter Efficiency vs. Outdoor Air" && unitChoice === "cfm" && (
        <LANCET1cfmApp selectedSubcategory={selectedSubcategory} 
        floorArea={floorArea} 
        height={height} 
        occupantNumber={occupantNumber} 
        occupiedPeriod={occupiedPeriod} 
        expiratoryActivity={expiratoryActivity} 
        physicalActivity={physicalActivity}
        virusType={virusType} 
        immunityProportion={immunityProportion} 
        infectorStatus={infectorStatus} 
        casesPerDay={casesPerDay} 
        infectiousPeriod={infectiousPeriod} 
        unreportedCases={unreportedCases} 
        infectorNumber={infectorNumber}
        supplyAir={supplyAir} 
        outdoorAir={outdoorAir} 
        merv={merv} 
        filter={filter}
        hvacUV={hvacUV} 
        hvacTreatment={hvacTreatment}
        roomTreatment={roomTreatment} 
        roomUV={roomUV} 
        roomAC={roomAC} 
        roomTreatmentQ={roomTreatmentQ} 
        roomUVQ={roomUVQ} 
        roomACQ={roomACQ} 
        maskInfector={maskInfector} 
        maskSus={maskSus}
        ASHRAE={ASHRAE}
        ASHRAE2={ASHRAE2} />
      )}
      {selectedTab === "Target" && (
        <HeatmapD3_3App />
      )}
      
    </div>
    <br/>
    <br/>
    <br/>
    <button onClick={() => { handleSaveClick(); handleAddSimulation2(); }} className="fancy-button" style={{ fontSize: '14px', padding: '6px 20px', height: '40px', display: 'block', margin: '0 auto' }}>
  Save Result to Compare
</button>

  </div>
</div>
</div>
</div>
);
};

export default Hero;