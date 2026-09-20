function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const typeLabels = {
  trace: '<span class="q-type q-type-trace">📊 Calculation & Trace</span>',
  compare: '<span class="q-type q-type-compare">⚖️ Comparative Analysis</span>',
  scenario: '<span class="q-type q-type-scenario">🎯 Scenario & Application</span>',
  concept: '<span class="q-type q-type-concept">💭 Concept & Fundamentals</span>',
  explain: '<span class="q-type q-type-explain">🔍 Engineering Synthesis</span>'
};

const lessonLabels = {
  L3: 'L3 Psychrometrics'
};

// =======================================================
// 12 TOPICS WITH HIGH-PRECISION SCADA ANIMATED SCHEMATICS
// =======================================================
const notesData = [
  {
    id: 't1', icon: '1', title: 'Moist Air Composition & Ideal Gas Law',
    titleZh: '濕空氣成分與理想氣體狀態方程',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(25, 20)">
        <rect x="0" y="25" width="340" height="215" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="170" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Dry Air Volumetric Composition (乾空氣體積百分比)</text>
        <rect x="25" y="45" width="290" height="30" fill="#2980b9" rx="3"/>
        <text x="35" y="65" font-size="11" fill="#fff" font-weight="bold">Nitrogen (N₂) : 78.08%</text>
        <rect x="25" y="85" width="290" height="30" fill="#27ae60" rx="3"/>
        <text x="35" y="105" font-size="11" fill="#fff" font-weight="bold">Oxygen (O₂) : 20.95%</text>
        <rect x="25" y="125" width="290" height="25" fill="#8e44ad" rx="3"/>
        <text x="35" y="142" font-size="10" fill="#fff">Argon (Ar) : 0.93%</text>
        <rect x="25" y="155" width="290" height="25" fill="#d35400" rx="3"/>
        <text x="35" y="172" font-size="10" fill="#fff">CO₂ : 0.03% | Others (Ne, He, H₂, SO₂) : 0.01%</text>
        <text x="170" y="215" text-anchor="middle" font-size="10.5" fill="#f1c40f" font-weight="bold">Water Vapour in Moist Air: 0 to 3% by mass (-10°C to 38°C)</text>
      </g>
      <g class="scada-unit" transform="translate(390, 20)">
        <rect x="0" y="25" width="325" height="215" fill="#243342" stroke="#1abc9c" stroke-width="2" rx="8"/>
        <text x="162" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Ideal Gas Governing Equation (理想氣體方程)</text>
        <rect x="20" y="50" width="285" height="50" fill="#1a252f" stroke="#34495e" rx="4"/>
        <text x="162" y="80" text-anchor="middle" font-size="16" fill="#f1c40f" font-family="Consolas" font-weight="bold">P · v = R · T  |  P · V = m · R · T</text>
        <text x="30" y="125" font-size="11" fill="#ecf0f1">• P = Absolute pressure (Pa)</text>
        <text x="30" y="145" font-size="11" fill="#ecf0f1">• v = Specific volume (m³/kg)</text>
        <text x="30" y="165" font-size="11" fill="#ecf0f1">• R = Specific gas constant (J/kg·K)</text>
        <text x="30" y="185" font-size="11" fill="#ecf0f1">• T = Absolute temperature (K = °C + 273.15)</text>
        <text x="30" y="205" font-size="11" fill="#ecf0f1">• m = Mass (kg) | V = Total volume (m³)</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 1: Volumetric chemical breakdown of dry atmospheric air and Ideal Gas Law mathematical formulation',
    sections: [
      {
        title: 'Definition of Psychrometrics & Moist Air / 濕度學與濕空氣定義',
        zh: '<p><strong>濕度學 (Psychrometrics)</strong> 係研究濕空氣熱力學性質嘅科學分支，廣泛用於分析、繪畫並計算所有建築空調系統嘅熱濕處理過程與熱力循環[cite: 3]。</p><p><strong>濕空氣 (Moist Air)</strong> 是乾空氣（包含微量雜質氣體）與水蒸氣的混合物[cite: 3]。在海平面標準狀態下，乾空氣體積組成為：<strong>氮氣 78.08%</strong>、<strong>氧氣 20.95%</strong>、<strong>氬氣 0.93%</strong>、<strong>二氧化碳 0.03%</strong> 及其他微量惰性氣體 0.01%[cite: 3]。在空調常見溫度範圍（-10°C 至 38°C），水蒸氣在濕空氣中的質量百分比約為 <strong>0 至 3%</strong>[cite: 3]。</p>',
        en: '<p><strong>Psychrometrics</strong> is the branch of engineering science analyzing the thermodynamic properties of moist air, used to illustrate and size air-conditioning cycles[cite: 3].</p><p><strong>Moist Air</strong> is a binary mixture of dry air and water vapour[cite: 3]. Dry air composition by volume: <strong>Nitrogen 78.08%</strong>, <strong>Oxygen 20.95%</strong>, <strong>Argon 0.93%</strong>, <strong>Carbon dioxide 0.03%</strong>, and trace gases 0.01%[cite: 3]. Water vapour varies from <strong>0 to 3% by mass</strong> between -10°C and 38°C[cite: 3].</p>'
      },
      {
        title: 'Ideal Gas Behaviour / 理想氣體狀態特性',
        zh: '<p>在正常大氣壓力及建築空調溫度工況下，乾空氣與水蒸氣的分壓均極低，其熱力學行為可精確視為<strong>理想氣體 (Ideal Gas)</strong>[cite: 3]：</p><div class="formula-block">P · v = R · T   或   P · V = m · R · T</div><p>其中 $P$ 為氣體絕對壓力 (Pa)，$v$ 為比容 ($m^3/kg$)，$T$ 為熱力學絕對溫度 (K)，$R$ 為氣體常數 ($J/kg\\cdot K$)[cite: 3]。</p>',
        en: '<p>At typical atmospheric pressures and HVAC temperatures, both dry air and water vapour closely follow the <strong>Ideal Gas Equation of State</strong>[cite: 3]:</p><div class="formula-block">P · v = R · T   or   P · V = m · R · T</div><p>where $P$ is pressure (Pa), $v$ is specific volume ($m^3/kg$), $T$ is absolute temperature in Kelvin, and $R$ is the gas constant ($J/kg\\cdot K$)[cite: 3].</p>'
      }
    ]
  },
  {
    id: 't2', icon: '2', title: 'Dalton\'s Law of Partial Pressures & Conservation of Mass',
    titleZh: '道爾頓分壓定律與質量守恆定律',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="220" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Dalton\'s Law of Partial Pressures in Moist Air (道爾頓分壓平衡)</text>
        <rect x="40" y="55" width="180" height="110" fill="#1b4f72" stroke="#3498db" stroke-width="1.5" rx="6"/>
        <text x="130" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#5dade2">Dry Air (乾空氣)</text>
        <text x="130" y="110" text-anchor="middle" font-size="11" fill="#fff">Partial Pressure = Pa</text>
        <text x="130" y="130" text-anchor="middle" font-size="10" fill="#bdc3c7">Mass = ma</text>
        <text x="245" y="115" text-anchor="middle" font-size="24" fill="#f1c40f" font-weight="bold">+</text>
        <rect x="270" y="55" width="180" height="110" fill="#145a32" stroke="#2ecc71" stroke-width="1.5" rx="6"/>
        <text x="360" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#2ecc71">Water Vapour (水蒸氣)</text>
        <text x="360" y="110" text-anchor="middle" font-size="11" fill="#fff">Partial Pressure = Pw</text>
        <text x="360" y="130" text-anchor="middle" font-size="10" fill="#bdc3c7">Mass = mw</text>
        <text x="475" y="115" text-anchor="middle" font-size="24" fill="#f1c40f" font-weight="bold">=</text>
        <rect x="500" y="55" width="170" height="110" fill="#641e16" stroke="#e74c3c" stroke-width="1.5" rx="6"/>
        <text x="585" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#f5b7b1">Moist Air (濕空氣)</text>
        <text x="585" y="110" text-anchor="middle" font-size="11" fill="#fff">Total Pat = Pa + Pw</text>
        <text x="585" y="130" text-anchor="middle" font-size="10" fill="#bdc3c7">Mass mm = ma + mw</text>
        <rect x="60" y="180" width="580" height="45" fill="#1a252f" stroke="#1abc9c" rx="4"/>
        <text x="350" y="200" text-anchor="middle" font-size="12" fill="#f1c40f" font-family="Consolas" font-weight="bold">Pat = Pa + Pw  (Standard Atmospheric Pressure = 101.325 kPa)</text>
        <text x="350" y="217" text-anchor="middle" font-size="10" fill="#ecf0f1">Total pressure equals sum of individual pressures exerted as if each occupied the volume alone.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 2: Dalton\'s law and mass conservation: Atmospheric pressure is the sum of dry air and water vapour partial pressures',
    sections: [
      {
        title: 'Dalton\'s Law of Partial Pressures / 道爾頓分壓定律',
        zh: '<p><strong>道爾頓分壓定律 (Dalton\'s Law)</strong> 表明：在給定溫度和體積下，氣體混合物的總壓力等於組成該混合物各成分單獨佔據該體積時所產生之<strong>分壓 (Partial Pressure)</strong> 總和[cite: 3]：</p><div class="formula-block">P_m = P_1 + P_2 + P_3 + ... + P_n</div><p>應用於濕空氣體系，總大氣壓力 $P_{at}$ 等於<strong>乾空氣分壓 ($P_a$)</strong> 與<strong>水蒸氣分壓 ($P_w$)</strong> 之和[cite: 3]：</p><div class="formula-block">P_{at} = P_a + P_w</div>',
        en: '<p><strong>Dalton\'s Law</strong> states that the total pressure of a gas mixture is equal to the sum of the partial pressures that each constituent gas would exert if it alone occupied the entire volume at the same temperature[cite: 3]:</p><div class="formula-block">P_m = P_1 + P_2 + P_3 + ... + P_n</div><p>Applied to moist air, total barometric pressure $P_{at}$ equals the sum of dry air partial pressure ($P_a$) and water vapour partial pressure ($P_w$)[cite: 3]:</p><div class="formula-block">P_{at} = P_a + P_w</div>'
      },
      {
        title: 'Conservation of Mass / 質量守恆定律',
        zh: '<p>濕空氣總質量等於乾空氣質量與水蒸氣質量之和[cite: 3]：</p><div class="formula-block">m_m = m_a + m_w</div><p>其中 $m_m$ 為濕空氣總質量 (kg)，$m_a$ 為乾空氣質量 (kg)，$m_w$ 為水蒸氣質量 (kg)[cite: 3]。</p>',
        en: '<p>Total moist air mass is the sum of the dry air mass and water vapour mass[cite: 3]:</p><div class="formula-block">m_m = m_a + m_w</div>'
      }
    ]
  },
  {
    id: 't3', icon: '3', title: 'Humidity Ratio Formulation',
    titleZh: '濕度比（含濕量）數學推導',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="225" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Derivation of Humidity Ratio Formula (濕度比公式推導步驟)</text>
        <rect x="30" y="45" width="310" height="70" fill="#1b4f72" stroke="#3498db" rx="4"/>
        <text x="40" y="68" font-size="11" fill="#fff" font-weight="bold">Dry Air: Pa · V = ma · Ra · T</text>
        <text x="40" y="88" font-size="10" fill="#d4e6f1">Gas Constant Ra = 0.2871 kJ/kg·K = 287.1 J/kg·K</text>
        <text x="40" y="103" font-size="10" fill="#5dade2">ma = (Pa · V) / (Ra · T)</text>
        <rect x="360" y="45" width="310" height="70" fill="#145a32" stroke="#2ecc71" rx="4"/>
        <text x="370" y="68" font-size="11" fill="#fff" font-weight="bold">Water Vapour: Pw · V = mw · Rw · T</text>
        <text x="370" y="88" font-size="10" fill="#abebc6">Gas Constant Rw = 0.4615 kJ/kg·K = 461.5 J/kg·K</text>
        <text x="370" y="103" font-size="10" fill="#2ecc71">mw = (Pw · V) / (Rw · T)</text>
        <rect x="30" y="130" width="640" height="105" fill="#1a252f" stroke="#f1c40f" rx="4"/>
        <text x="350" y="153" text-anchor="middle" font-size="12" fill="#fff">w = mw / ma = [ (Pw · V) / (Rw · T) ] / [ (Pa · V) / (Ra · T) ] = (Ra / Rw) · (Pw / Pa)</text>
        <text x="350" y="175" text-anchor="middle" font-size="11" fill="#bdc3c7">Ratio of Gas Constants: Ra / Rw = 0.2871 / 0.4615 = 0.62198</text>
        <text x="350" y="202" text-anchor="middle" font-size="15" fill="#f1c40f" font-family="Consolas" font-weight="bold">w = 0.62198 · [ Pw / (Pat - Pw) ]  (kg/kg dry air)</text>
        <text x="350" y="222" text-anchor="middle" font-size="9.5" fill="#ecf0f1">Since Pa = Pat - Pw (Dalton's Law), humidity ratio depends solely on Pw and atmospheric pressure Pat.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 3: Mathematical derivation of humidity ratio w: Ratio of gas constants Ra/Rw = 0.62198 substituted with Dalton\'s law',
    sections: [
      {
        title: 'Definition of Humidity Ratio / 濕度比定義',
        zh: '<p><strong>濕度比 (Humidity Ratio, $w$ 或含濕量 Moisture Content)</strong> 定義為濕空氣中所含水蒸氣質量 $m_w$ 與乾空氣質量 $m_a$ 之比值[cite: 3]：</p><div class="formula-block">w = \frac{m_w}{m_a} \quad \text{(kg 水蒸氣 / kg 乾空氣 或 g/kg)}</div>',
        en: '<p><strong>Humidity ratio ($w$)</strong>, also termed moisture content, is the ratio of the mass of water vapour ($m_w$) to the mass of dry air ($m_a$)[cite: 3]:</p><div class="formula-block">w = \frac{m_w}{m_a} \quad \text{(kg of water / kg of dry air)}</div>'
      },
      {
        title: 'Step-by-step Mathematical Derivation / 公式推導歷程',
        zh: '<p>利用理想氣體狀態方程分別表示乾空氣與水蒸氣[cite: 3]：</p><ol><li>乾空氣：$P_a V = m_a R_a T \implies m_a = \frac{P_a V}{R_a T}$，其中 $R_a = 0.2871\text{ kJ/kg}\cdot\text{K}$[cite: 3]。</li><li>水蒸氣：$P_w V = m_w R_w T \implies m_w = \frac{P_w V}{R_w T}$，其中 $R_w = 0.4615\text{ kJ/kg}\cdot\text{K}$[cite: 3]。</li><li>代入定義式：<br>$$w = \frac{m_w}{m_a} = \frac{P_w V / (R_w T)}{P_a V / (R_a T)} = \left(\frac{R_a}{R_w}\right) \left(\frac{P_w}{P_a}\right) = \left(\frac{0.2871}{0.4615}\right) \frac{P_w}{P_a} = 0.62198 \frac{P_w}{P_a}$$[cite: 3]</li><li>由道爾頓定律 $P_{at} = P_a + P_w \implies P_a = P_{at} - P_w$，得出終極工程計算式：<br>$$w = 0.62198 \frac{P_w}{P_{at} - P_w}$$[cite: 3]</li></ol>',
        en: '<p>Expressing dry air and water vapour through the ideal gas relationship[cite: 3]:</p><ol><li>Dry air: $P_a V = m_a R_a T \implies m_a = \frac{P_a V}{R_a T}$, where $R_a = 0.2871\text{ kJ/kg K}$[cite: 3].</li><li>Water vapour: $P_w V = m_w R_w T \implies m_w = \frac{P_w V}{R_w T}$, where $R_w = 0.4615\text{ kJ/kg K}$[cite: 3].</li><li>Ratio: $w = \frac{m_w}{m_a} = \frac{R_a}{R_w} \frac{P_w}{P_a} = \frac{0.2871}{0.4615} \frac{P_w}{P_a} = 0.62198 \frac{P_w}{P_a}$[cite: 3].</li><li>Substituting $P_a = P_{at} - P_w$ yields the classical psychrometric relation:<br>$$w = 0.62198 \frac{P_w}{P_{at} - P_w}$$[cite: 3]</li></ol>'
      }
    ]
  },
  {
    id: 't4', icon: '4', title: 'Dry-Bulb, Wet-Bulb & Dew-Point Temperatures',
    titleZh: '乾球溫度、濕球溫度與露點溫度',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(25, 20)">
        <rect x="0" y="25" width="215" height="225" fill="#243342" stroke="#e74c3c" stroke-width="2" rx="6"/>
        <text x="107" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#e74c3c">Dry Bulb (DBT / 乾球)</text>
        <rect x="95" y="45" width="25" height="120" fill="#ecf0f1" stroke="#bdc3c7" rx="12"/>
        <circle cx="107" cy="165" r="22" fill="#c0392b"/>
        <rect x="104" y="80" width="6" height="85" fill="#e74c3c"/>
        <text x="107" y="205" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Standard Thermometer</text>
        <text x="107" y="225" text-anchor="middle" font-size="9" fill="#bdc3c7">Measures true thermal state</text>
      </g>
      <g class="scada-unit" transform="translate(260, 20)">
        <rect x="0" y="25" width="220" height="225" fill="#243342" stroke="#1abc9c" stroke-width="2" rx="6"/>
        <text x="110" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#1abc9c">Wet Bulb (WBT / 濕球)</text>
        <rect x="98" y="45" width="25" height="120" fill="#ecf0f1" stroke="#bdc3c7" rx="12"/>
        <circle cx="110" cy="165" r="22" fill="#16a085"/>
        <rect x="107" y="100" width="6" height="65" fill="#1abc9c"/>
        <circle cx="110" cy="165" r="26" fill="none" stroke="#3498db" stroke-width="3.5" stroke-dasharray="4 2"/>
        <text x="110" y="169" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="bold">Wetted Wick</text>
        <path d="M 20 165 L 75 165" stroke="#3498db" stroke-width="3" class="flow-cold"/>
        <text x="45" y="155" font-size="8.5" fill="#3498db">Air 1-2 m/s</text>
        <text x="110" y="205" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Evaporative Equilibrium</text>
        <text x="110" y="225" text-anchor="middle" font-size="9" fill="#bdc3c7">Latent cooling depresses reading</text>
      </g>
      <g class="scada-unit" transform="translate(500, 20)">
        <rect x="0" y="25" width="215" height="225" fill="#243342" stroke="#3498db" stroke-width="2" rx="6"/>
        <text x="107" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#3498db">Dew Point (DPT / 露點)</text>
        <rect x="30" y="55" width="155" height="110" fill="#1b4f72" stroke="#5dade2" stroke-width="1.5" rx="5"/>
        <circle cx="65" cy="90" r="7" fill="#3498db"/>
        <circle cx="110" cy="120" r="9" fill="#3498db"/>
        <circle cx="145" cy="85" r="6" fill="#3498db"/>
        <text x="107" y="145" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Condensation Starts</text>
        <text x="107" y="160" text-anchor="middle" font-size="8.5" fill="#d4e6f1">Pw = Pwsat(Td)</text>
        <text x="107" y="205" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Saturation Threshold</text>
        <text x="107" y="225" text-anchor="middle" font-size="9" fill="#bdc3c7">DBT ≥ WBT ≥ DPT</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 4: Three critical air temperatures: Dry Bulb (DBT), Wet Bulb with wetted wick (1-2 m/s airflow), and Dew Point condensation temperature',
    sections: [
      {
        title: 'Temperature Definitions / 溫度三劍客定義',
        zh: '<ul><li><strong>乾球溫度 (Dry Bulb Temperature, DBT)</strong>：由暴露在空氣中但不受直接熱輻射影響的普通標準溫度計測得之空氣真實溫度[cite: 3]。</li><li><strong>濕球溫度 (Wet Bulb Temperature, WBT)</strong>：由包裹在濕潤紗布（棉芯）中的溫度計測得之溫度，該溫度計感溫包必須處於<strong>流速約 1 至 2 m/s</strong> 的快速流動氣流中[cite: 3]。紗布表面水分不斷蒸發帶走汽化潛熱，令讀數低於乾球溫度。</li><li><strong>露點溫度 (Dew Point Temperature, DPT, $T_d$)</strong>：濕空氣在保持大氣壓 $P_{at}$ 及含濕量 $w$ 不變的條件下冷卻至<strong>水分剛開始凝結 (condensation begins)</strong> 時之飽和溫度[cite: 3]。此時水蒸氣分壓 $P_w$ 等於該溫度下之飽和蒸氣壓 $P_{ws}$。</li></ul>',
        en: '<ul><li><strong>Dry Bulb (DBT)</strong>: Measured by a standard thermometer freely exposed to air[cite: 3].</li><li><strong>Wet Bulb (WBT)</strong>: Measured by a thermometer bulb wrapped in a wetted wick exposed to rapidly moving air at <strong>1–2 m/s</strong>[cite: 3]. Surface water evaporation depresses the temperature.</li><li><strong>Dew Point (DPT)</strong>: The temperature at which <strong>moisture condensation begins</strong> when moist air is cooled at constant pressure and humidity ratio[cite: 3].</li></ul>'
      },
      {
        title: 'Thermodynamic Invariant / 熱力學大小關係',
        zh: '<div class="key-point"><strong>核心規律：</strong> 對於未飽和空氣，永遠有 <strong>DBT &gt; WBT &gt; DPT</strong>。當空氣達到 100% 飽和狀態（相對濕度 100%）時，三者完全重合：<strong>DBT = WBT = DPT</strong>。</div>',
        en: '<div class="key-point"><strong>Fundamental Rule:</strong> For unsaturated moist air, <strong>DBT &gt; WBT &gt; DPT</strong>. At 100% saturation (RH = 100%), all three temperatures coincide: <strong>DBT = WBT = DPT</strong>.</div>'
      }
    ]
  },
  {
    id: 't5', icon: '5', title: 'Relative Humidity vs Degree of Saturation',
    titleZh: '相對濕度與飽和度的對比',
    diagram: `<svg viewBox="0 0 740 260" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(25, 20)">
        <rect x="0" y="25" width="330" height="210" fill="#243342" stroke="#3498db" stroke-width="2" rx="8"/>
        <text x="165" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#3498db">Relative Humidity (相對濕度, RH, φ)</text>
        <rect x="20" y="50" width="290" height="50" fill="#1a252f" stroke="#2980b9" rx="4"/>
        <text x="165" y="80" text-anchor="middle" font-size="16" fill="#f1c40f" font-family="Consolas" font-weight="bold">φ = Pw / Pwsat |t,p</text>
        <text x="30" y="125" font-size="11" fill="#ecf0f1">• Ratio of actual water vapour partial pressure (Pw)</text>
        <text x="30" y="145" font-size="11" fill="#ecf0f1">  to saturated vapour pressure (Pwsat) at same t.</text>
        <text x="30" y="170" font-size="11" fill="#5dade2">• Expressed in percentage (% RH).</text>
        <text x="30" y="195" font-size="11" fill="#bdc3c7">• Direct indicator of human comfort &amp; mold risk.</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="330" height="210" fill="#243342" stroke="#1abc9c" stroke-width="2" rx="8"/>
        <text x="165" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Degree of Saturation (飽和度, μ)</text>
        <rect x="20" y="50" width="290" height="50" fill="#1a252f" stroke="#16a085" rx="4"/>
        <text x="165" y="80" text-anchor="middle" font-size="16" fill="#f1c40f" font-family="Consolas" font-weight="bold">μ = w / ws |t,p</text>
        <text x="30" y="125" font-size="11" fill="#ecf0f1">• Ratio of actual humidity ratio (w) to the</text>
        <text x="30" y="145" font-size="11" fill="#ecf0f1">  saturated humidity ratio (ws) at same t &amp; Pat.</text>
        <text x="30" y="170" font-size="11" fill="#1abc9c">• Relation: μ = φ · [ (Pat - Pwsat) / (Pat - Pw) ]</text>
        <text x="30" y="195" font-size="11" fill="#bdc3c7">• At normal atmospheric temperatures, μ ≈ φ.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 5: Comparative definitions: Relative Humidity (vapour pressure ratio) vs Degree of Saturation (moisture content ratio)',
    sections: [
      {
        title: 'Relative Humidity (RH, $\\phi$) / 相對濕度',
        zh: '<p><strong>相對濕度 (Relative Humidity, $\\phi$ 或 RH)</strong> 定義為在相同溫度和總壓力下，空氣中實際水蒸氣分壓 $P_w$ 與其飽和水蒸氣分壓 $P_{ws}$ 之百分比[cite: 3]：</p><div class="formula-block">\phi = \frac{P_w}{P_{ws}} \times 100\%</div><p>RH 直接反映空氣的潮濕或乾燥程度，是人體熱舒適度與防霉防結露的核心監控指標[cite: 3]。</p>',
        en: '<p><strong>Relative Humidity ($\phi$)</strong> is the ratio of the actual water vapour partial pressure ($P_w$) to the saturation pressure of water vapour ($P_{ws}$) at the same dry bulb temperature and atmospheric pressure[cite: 3]:</p><div class="formula-block">\phi = \frac{P_w}{P_{ws}} \times 100\%</div>'
      },
      {
        title: 'Degree of Saturation ($\\mu$) / 飽和度',
        zh: '<p><strong>飽和度 (Degree of saturation, $\\mu$)</strong> 定義為實際含濕量 $w$ 與同溫同壓下飽和空氣含濕量 $w_s$ 之比值[cite: 3]：</p><div class="formula-block">\mu = \left. \frac{w}{w_s} \right|_{t, p} = \phi \left( \frac{P_{at} - P_{ws}}{P_{at} - P_w} \right)</div><p>在常溫常壓下，由於水蒸氣分壓極小（相對於 101.325 kPa），故數值上 $\\mu \\approx \\phi$。</p>',
        en: '<p><strong>Degree of Saturation ($\\mu$)</strong> is the ratio of actual humidity ratio $w$ to the saturated humidity ratio $w_s$ at the same dry-bulb temperature and barometric pressure[cite: 3]:</p><div class="formula-block">\mu = \left. \frac{w}{w_s} \right|_{t, p}</div>'
      }
    ]
  },
  {
    id: 't6', icon: '6', title: 'Specific Enthalpy of Moist Air & Reference Datums',
    titleZh: '濕空氣比焓公式與熱力學零點基準',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="225" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Specific Enthalpy Formulation &amp; Datums (比焓公式與零點基準)</text>
        <rect x="30" y="45" width="200" height="95" fill="#1b4f72" stroke="#3498db" rx="4"/>
        <text x="130" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Dry Air Enthalpy (hd)</text>
        <text x="130" y="90" text-anchor="middle" font-size="10" fill="#5dade2">Datum = -17.8°C (0°F)</text>
        <text x="130" y="110" text-anchor="middle" font-size="10" fill="#ecf0f1">Cpd = 1.005 kJ/kg·K</text>
        <text x="130" y="128" text-anchor="middle" font-size="11" fill="#f1c40f" font-weight="bold">hd = 1.005 · t</text>
        <text x="245" y="100" text-anchor="middle" font-size="22" fill="#fff" font-weight="bold">+</text>
        <rect x="260" y="45" width="410" height="95" fill="#145a32" stroke="#2ecc71" rx="4"/>
        <text x="465" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Water Vapour Enthalpy (w · hv)</text>
        <text x="465" y="88" text-anchor="middle" font-size="10" fill="#abebc6">Datum = 0°C liquid water | Latent Heat hfg(0°C) = 2501 kJ/kg</text>
        <text x="465" y="106" text-anchor="middle" font-size="10" fill="#ecf0f1">Cpv = Specific heat of water vapour = 1.87 kJ/kg·K</text>
        <text x="465" y="128" text-anchor="middle" font-size="11" fill="#f1c40f" font-weight="bold">w · hv = w · (2501 + 1.87 · t)</text>
        <rect x="30" y="155" width="640" height="75" fill="#1a252f" stroke="#e74c3c" stroke-width="2" rx="4"/>
        <text x="350" y="185" text-anchor="middle" font-size="16" fill="#f1c40f" font-family="Consolas" font-weight="bold">h = 1.005 · t + w · (2501 + 1.87 · t)   (kJ/kg dry air)</text>
        <text x="350" y="210" text-anchor="middle" font-size="10.5" fill="#ecf0f1">Enthalpy represents total heat content (Sensible Heat of Dry Air + Latent and Superheat of Vapour).</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 6: Psychrometric enthalpy breakdown: Dry air sensible component (1.005t) and water vapour latent plus superheat component w(2501 + 1.87t)',
    sections: [
      {
        title: 'Enthalpy Definition & Datums / 比焓定義與基準',
        zh: '<p><strong>比焓 (Specific Enthalpy, $h$)</strong> 代表濕空氣相對於人為約定零點基準所含的總熱量（單位：$kJ/kg\\text{ 乾空氣}$）[cite: 3]：</p><ul><li><strong>乾空氣零焓點基準</strong>：規定為 <strong>-17.8 °C</strong>（即 0 °F）[cite: 3]。</li><li><strong>水蒸氣零焓點基準</strong>：規定為 <strong>0 °C 的液態水</strong>[cite: 3]。</li></ul>',
        en: '<p><strong>Specific Enthalpy ($h$)</strong> indicates the total heat of moist air above an arbitrary datum (in $kJ/kg\\text{ dry air}$)[cite: 3]:</p><ul><li><strong>Dry air datum</strong>: <strong>-17.8 °C</strong> (0 °F)[cite: 3].</li><li><strong>Water vapour datum</strong>: <strong>0 °C liquid water</strong>[cite: 3].</li></ul>'
      },
      {
        title: 'Detailed Enthalpy Equation / 比焓完整展開式',
        zh: '<p>比焓為乾空氣顯熱與水蒸氣全熱之和[cite: 3]：</p><div class="formula-block">h = h_d + w \cdot h_v</div><p>其中乾空氣顯熱：$h_d = C_{pd} \cdot t = 1.005 \cdot t$（$C_{pd} = 1.005\text{ kJ/kg K}$）[cite: 3]；水蒸氣全熱包含 $0^\circ\text{C}$ 汽化潛熱及過熱顯熱：$h_v \cong h_{fg(0^\circ\text{C})} + C_{pv} \cdot t = 2501 + 1.87 \cdot t$（$h_{fg}=2501\text{ kJ/kg}$, $C_{pv}=1.87\text{ kJ/kg K}$）[cite: 3]。</p><div class="formula-block">h = 1.005 \cdot t + w \cdot (2501 + 1.87 \cdot t) \quad \text{(kJ/kg 乾空氣)}</div>',
        en: '<p>Enthalpy is expressed as[cite: 3]:</p><div class="formula-block">h = h_d + w \cdot h_v</div><p>With $h_d = C_{pd} t = 1.005 t$ and $h_v \cong h_{fg(0^\circ\text{C})} + C_{pv} t = 2501 + 1.87 t$, substituting physical constants yields[cite: 3]:</p><div class="formula-block">h = 1.005 t + w (2501 + 1.87 t) \quad \text{(kJ/kg dry air)}</div>'
      }
    ]
  },
  {
    id: 't7', icon: '7', title: 'The Psychrometric Chart Coordinate System',
    titleZh: '濕度圖結構與座標軸體系',
    diagram: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="250" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">CIBSE / ASHRAE Psychrometric Chart Skeleton (濕度圖骨架結構)</text>
        <path d="M 80 230 L 620 230" stroke="#ecf0f1" stroke-width="2"/>
        <text x="350" y="248" text-anchor="middle" font-size="11" fill="#e74c3c" font-weight="bold">Dry-Bulb Temperature (°C) ➔ (垂直直線)</text>
        <path d="M 620 230 L 620 50" stroke="#ecf0f1" stroke-width="2"/>
        <text x="635" y="140" font-size="11" fill="#2ecc71" transform="rotate(90 635 140)" font-weight="bold">Moisture Content w (kg/kg) ➔ (水平直線)</text>
        <path d="M 80 230 Q 180 200, 280 140 T 450 60 T 620 50" fill="none" stroke="#f1c40f" stroke-width="3"/>
        <text x="210" y="150" font-size="11" fill="#f1c40f" font-weight="bold">Saturation Curve (100% RH)</text>
        <line x1="120" y1="230" x2="250" y2="70" stroke="#3498db" stroke-width="1.5" stroke-dasharray="4 2"/>
        <line x1="220" y1="230" x2="350" y2="70" stroke="#3498db" stroke-width="1.5" stroke-dasharray="4 2"/>
        <line x1="320" y1="230" x2="450" y2="70" stroke="#3498db" stroke-width="1.5" stroke-dasharray="4 2"/>
        <text x="290" y="80" font-size="10" fill="#3498db" font-weight="bold">Enthalpy &amp; Wet Bulb Lines (斜線向左上)</text>
        <line x1="180" y1="230" x2="280" y2="60" stroke="#e67e22" stroke-width="1.5"/>
        <line x1="300" y1="230" x2="400" y2="60" stroke="#e67e22" stroke-width="1.5"/>
        <text x="400" y="110" font-size="10" fill="#e67e22">Specific Volume v (陡峭斜線)</text>
        <path d="M 120 230 Q 240 210, 360 170 T 520 120 T 620 110" fill="none" stroke="#9b59b6" stroke-width="1.5"/>
        <text x="500" y="150" font-size="10" fill="#9b59b6">Relative Humidity Curves (等 RH 曲線)</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 7: Standard CIBSE psychrometric chart structure: Dry bulb (vertical), Moisture content (horizontal), Enthalpy/WBT (diagonal left), and Saturation envelope',
    sections: [
      {
        title: 'Psychrometric Chart Coordinates / 濕度圖座標原理解析',
        zh: '<p><strong>濕度圖 (Psychrometric Chart)</strong> 係濕空氣熱力學性質與傳熱傳質過程的圖解工具（標準氣壓基準為 <strong>101.325 kPa</strong>）[cite: 3]。在圖上只需任意<strong>兩個獨立可測狀態參數</strong>，即可完全確定一個狀態點[cite: 3]：</p><ul><li>① 乾球與濕球溫度 (DBT + WBT)[cite: 3]；</li><li>② 乾球溫度與相對濕度 (DBT + RH)[cite: 3]。</li></ul>',
        en: '<p>The <strong>Psychrometric Chart</strong> provides a graphical representation of moist air properties and HVAC energy/mass balances at a barometric datum of <strong>101.325 kPa</strong>[cite: 3]. Any thermodynamic state point is pinned by combining two independent parameters (e.g., DBT &amp; WBT, or DBT &amp; RH)[cite: 3].</p>'
      },
      {
        title: 'Reading the Chart Lines / 各類等值線判讀方式',
        zh: '<ul><li><strong>乾球溫度線</strong>：垂直直線，向右數值遞增[cite: 3]。</li><li><strong>含濕量（濕度比）線</strong>：水平橫線，向上數值遞增[cite: 3]。</li><li><strong>飽和曲線 (Saturation Curve)</strong>：最左側包絡弧線，代表 100% 相對濕度[cite: 3]。</li><li><strong>比焓 / 濕球溫度線</strong>：向左上方傾斜之斜線[cite: 3]。</li><li><strong>比容線</strong>：向左上方陡峭傾斜的直線（單位 $m^3/kg$ 乾空氣）[cite: 3]。</li></ul>',
        en: '<ul><li><strong>Dry-bulb lines</strong>: Vertical straight lines[cite: 3].</li><li><strong>Humidity ratio lines</strong>: Horizontal straight lines[cite: 3].</li><li><strong>Saturation curve</strong>: Left-most boundary curve (100% RH)[cite: 3].</li><li><strong>Enthalpy &amp; Wet-bulb lines</strong>: Diagonally sloping upwards to the left[cite: 3].</li><li><strong>Specific volume lines</strong>: Steeply inclined lines ($m^3/kg$ dry air)[cite: 3].</li></ul>'
      }
    ]
  },
  {
    id: 't8', icon: '8', title: 'Sensible Heat Ratio (SHR) & Apparatus Dew Point (ADP)',
    titleZh: '顯熱比與冷盤管機器露點',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="230" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Room SHR Line &amp; Apparatus Dew Point (RSHR 與機器露點連線)</text>
        <path d="M 80 215 Q 180 185, 280 130 T 450 65 T 620 55" fill="none" stroke="#f1c40f" stroke-width="3"/>
        <text x="210" y="135" font-size="10" fill="#f1c40f">Saturation Curve</text>
        <circle cx="480" cy="140" r="6" fill="#e74c3c"/>
        <text x="495" y="135" font-size="11" fill="#e74c3c" font-weight="bold">Room State (24°C, 50% RH)</text>
        <text x="495" y="152" font-size="9.5" fill="#ecf0f1">Room Dew Point = 13°C</text>
        <circle cx="215" cy="165" r="6" fill="#3498db"/>
        <text x="140" y="160" font-size="11" fill="#3498db" font-weight="bold">Coil ADP = 11.3°C</text>
        <text x="140" y="175" font-size="9" fill="#bdc3c7">(機器露點 Apparatus Dew Point)</text>
        <line x1="480" y1="140" x2="215" y2="165" stroke="#e74c3c" stroke-width="3.5" class="flow-process"/>
        <text x="350" y="145" text-anchor="middle" font-size="11" fill="#f1c40f" font-weight="bold">RSHR Line (Slope = 0.85)</text>
        <rect x="50" y="200" width="600" height="40" fill="#1a252f" stroke="#1abc9c" rx="4"/>
        <text x="350" y="224" text-anchor="middle" font-size="11.5" fill="#f1c40f" font-family="Consolas" font-weight="bold">SHR = Q_sensible / (Q_sensible + Q_latent) = Qs / Qt</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 8: Room Sensible Heat Ratio line: Connecting room design state (24°C, 50% RH) with Cooling Coil ADP (11.3°C) along SHR = 0.85',
    sections: [
      {
        title: 'Sensible Heat Ratio (SHR & RSHR) / 顯熱比',
        zh: '<p>空氣熱負載可分為顯熱與潛熱。<strong>顯熱比 (Sensible Heat Ratio, SHR)</strong> 定義為顯熱負荷與總負荷（顯熱加潛熱）之比值[cite: 3]：</p><div class="formula-block">\text{SHR} = \frac{Q_s}{Q_s + Q_l} = \frac{\text{Sensible Heat}}{\text{Sensible Heat} + \text{Latent Heat}}</div><p><strong>室內顯熱比 (Room Sensible Heat Ratio, RSHR)</strong>：室內顯熱負荷與室內總熱負荷之比值，決定了送風狀態點在濕度圖上逼近室內點的角度走向[cite: 3]。</p>',
        en: '<p>The total heat load is split into sensible and latent heat. <strong>Sensible Heat Ratio (SHR)</strong> is the ratio of sensible heat to total heat[cite: 3]:</p><div class="formula-block">\text{SHR} = \frac{Q_s}{Q_s + Q_l}</div><p><strong>Room Sensible Heat Ratio (RSHR)</strong> dictates the slope of the room condition line on the psychrometric chart[cite: 3].</p>'
      },
      {
        title: 'Apparatus Dew Point (ADP) / 機器露點',
        zh: '<p><strong>機器露點 (Apparatus Dew Point, ADP)</strong> 是冷卻盤管表面平均溫度在濕度圖飽和曲線（100% RH）上的交點[cite: 3]。如講義圖示範例：室內狀態為 <strong>24 °C, 50% RH</strong>（露點 13 °C），沿 <strong>SHR = 0.85</strong> 狀態線向左延伸與飽和曲線相交於 <strong>ADP = 11.3 °C</strong>[cite: 3]。</p>',
        en: '<p>The <strong>Apparatus Dew Point (ADP)</strong> represents the effective surface temperature of the cooling coil, found where the condition line intersects the saturation curve[cite: 3]. Example: Room at <strong>24 °C &amp; 50% RH</strong> with <strong>SHR = 0.85</strong> gives a cooling coil <strong>ADP of 11.3 °C</strong>[cite: 3].</p>'
      }
    ]
  },
  {
    id: 't9', icon: '9', title: 'Cooling Coil Bypass Factor (BF) & Contact Factor',
    titleZh: '冷卻盤管旁通系數與接觸系數',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Cooling Coil Bypass Factor Model (冷卻盤管旁通模型)</text>
        <rect x="290" y="50" width="120" height="110" fill="#1a252f" stroke="#3498db" stroke-width="2" rx="4"/>
        <text x="350" y="75" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">Cooling Coil</text>
        <g stroke="#3498db" stroke-width="3">
          <line x1="320" y1="90" x2="320" y2="150"/>
          <line x1="350" y1="90" x2="350" y2="150"/>
          <line x1="380" y1="90" x2="380" y2="150"/>
        </g>
        <text x="350" y="145" text-anchor="middle" font-size="9" fill="#5dade2">Surface at ADP (ts)</text>
        <path d="M 40 105 L 290 105" stroke="#e74c3c" stroke-width="6" class="flow-hot"/>
        <text x="160" y="95" text-anchor="middle" font-size="11" fill="#e74c3c" font-weight="bold">Entering Mixed Air (tm, hm, wm)</text>
        <path d="M 410 80 L 660 80" stroke="#3498db" stroke-width="4.5" class="flow-cold"/>
        <text x="535" y="70" text-anchor="middle" font-size="10" fill="#3498db" font-weight="bold">Contacted Air (1 - BF) at ADP</text>
        <path d="M 410 130 L 660 130" stroke="#f39c12" stroke-width="3" stroke-dasharray="6 3"/>
        <text x="535" y="148" text-anchor="middle" font-size="10" fill="#f39c12">Bypassed Air (BF) Unchanged</text>
        <rect x="30" y="175" width="640" height="70" fill="#1a252f" stroke="#1abc9c" rx="4"/>
        <text x="350" y="198" text-anchor="middle" font-size="13.5" fill="#f1c40f" font-family="Consolas" font-weight="bold">Bypass Factor (BF) = (to - ts) / (tm - ts) = (ho - hs) / (hm - hs) = (wo - ws) / (wm - ws)</text>
        <text x="350" y="222" text-anchor="middle" font-size="10.5" fill="#ecf0f1">Contact Factor β = 1 - BF | BF decreases with more coil rows, denser fins, or lower air velocity (longer contact time).</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 9: Cooling coil bypass model: The air stream is split into conditioned air reaching coil surface ADP and uncontacted bypassed air',
    sections: [
      {
        title: 'Concept of Bypass Factor (BF) / 旁通系數概念',
        zh: '<p><strong>旁通系數 (Bypass Factor, BF)</strong> 是冷卻盤管物理與運行特性的函數，表示穿過冷盤管時<strong>完全未與換熱表面接觸、狀態保持不變</strong>的空氣比例[cite: 3]。</p><div class="formula-block">\text{BF} = \frac{t_o - t_s}{t_m - t_s} = \frac{h_o - h_s}{h_m - h_s} = \frac{w_o - w_s}{w_m - w_s}</div><p>其中 $t_o$ 為出盤管溫度 (off-coil)，$t_s$ 為機器露點 (ADP)，$t_m$ 為進盤管混合溫度 (entering/mixing)[cite: 3]。而真正與盤管接觸的空氣比例稱為<strong>接觸系數 (Contact Factor, $\\beta$)</strong>：$\\beta = 1 - \\text{BF}$。</p>',
        en: '<p>The <strong>Bypass Factor (BF)</strong> represents the fraction of air considered to pass completely through the cooling coil without contacting the fins or changing its state[cite: 3]:</p><div class="formula-block">\text{BF} = \frac{t_o - t_s}{t_m - t_s} = \frac{h_o - h_s}{h_m - h_s} = \frac{w_o - w_s}{w_m - w_s}</div><p>where $t_o$ = off-coil temperature, $t_s$ = apparatus dew point (ADP), $t_m$ = entering mixing temperature[cite: 3]. The <strong>Contact Factor</strong> is $\\beta = 1 - \\text{BF}$.</p>'
      },
      {
        title: 'Factors Affecting Bypass Factor / 影響旁通系數之因素',
        zh: '<ul><li><strong>換熱表面積減小 $\\implies$ BF 增大</strong>：盤管排數 (rows) 減少、翅片密度 (fins/cm) 降低或管間距過寬，均會增加旁通量[cite: 3]。</li><li><strong>通過風速降低 $\\implies$ BF 減小</strong>：迎風面風速降低使氣流在盤管內停留時間 (residence time) 增加，接觸更充分，旁通率下降[cite: 3]。</li></ul>',
        en: '<ul><li><strong>Reduced surface area increases BF</strong>: fewer rows, fewer fins per cm, and wider tube spacing[cite: 3].</li><li><strong>Lower air face velocity decreases BF</strong>: provides more residence time for the air to contact coil surfaces[cite: 3].</li></ul>'
      }
    ]
  },
  {
    id: 't10', icon: '10', title: 'Cooling & Dehumidification Process',
    titleZh: '冷卻除濕物理過程',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Cooling &amp; Dehumidification on Psychrometric Chart (冷卻除濕過程)</text>
        <path d="M 80 220 Q 180 190, 280 135 T 450 70 T 620 60" fill="none" stroke="#f1c40f" stroke-width="3"/>
        <text x="210" y="140" font-size="10" fill="#f1c40f">Saturation Line</text>
        <circle cx="560" cy="115" r="6" fill="#e74c3c"/>
        <text x="575" y="115" font-size="11" fill="#e74c3c" font-weight="bold">State 1 (T1, h1, w1)</text>
        <circle cx="280" cy="165" r="6" fill="#3498db"/>
        <text x="295" y="170" font-size="11" fill="#3498db" font-weight="bold">State 2 (T2, h2, w2)</text>
        <path d="M 560 115 L 280 165" stroke="#3498db" stroke-width="3.5" class="flow-cold"/>
        <line x1="560" y1="115" x2="560" y2="225" stroke="#bdc3c7" stroke-dasharray="3 3"/>
        <text x="560" y="240" text-anchor="middle" font-size="10" fill="#bdc3c7">T1 (DBT)</text>
        <line x1="280" y1="165" x2="280" y2="225" stroke="#bdc3c7" stroke-dasharray="3 3"/>
        <text x="280" y="240" text-anchor="middle" font-size="10" fill="#bdc3c7">T2 (&lt; Td)</text>
        <line x1="380" y1="148" x2="380" y2="225" stroke="#e67e22" stroke-dasharray="3 3"/>
        <text x="380" y="240" text-anchor="middle" font-size="10" fill="#e67e22">Td (Dew Point of State 1)</text>
        <line x1="560" y1="115" x2="650" y2="115" stroke="#bdc3c7" stroke-dasharray="3 3"/>
        <text x="655" y="118" font-size="9.5" fill="#bdc3c7">w1</text>
        <line x1="280" y1="165" x2="650" y2="165" stroke="#bdc3c7" stroke-dasharray="3 3"/>
        <text x="655" y="168" font-size="9.5" fill="#bdc3c7">w2 (&lt; w1)</text>
        <text x="420" y="195" text-anchor="middle" font-size="10.5" fill="#1abc9c" font-weight="bold">Air is cooled below initial Dew Point Td ➔ Moisture condenses out (w drops) ➔ Enthalpy drops (h2 &lt; h1)</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 10: Psychrometric pathway of cooling and dehumidification: Air temperature drops below initial dew point Td, reducing DBT, humidity ratio, and enthalpy',
    sections: [
      {
        title: 'Thermodynamic Mechanism / 熱力學原理',
        zh: '<p>當濕空氣流經表面溫度<strong>低於其露點溫度 ($T_d$)</strong> 的冷卻盤管時，空氣首先冷卻降溫至露點，隨後多餘水蒸氣在盤管表面凝結成冷凝水析出[cite: 3]。</p><ul><li>乾球溫度由 $T_1$ 降至 $T_2$ ($T_2 < T_d < T_1$)[cite: 3]；</li><li>含濕量由 $w_1$ 減至 $w_2$（完成除濕）[cite: 3]；</li><li>比焓由 $h_1$ 降至 $h_2$（釋放出顯熱與汽化潛熱）[cite: 3]。</li></ul>',
        en: '<p>When air passes over a cooling coil whose surface is maintained <strong>below the initial dew point ($T_d$)</strong>, condensation takes place on the coil fins[cite: 3]:</p><ul><li>Dry bulb temperature decreases ($T_2 < T_1$)[cite: 3];</li><li>Moisture content decreases ($w_2 < w_1$)[cite: 3];</li><li>Specific enthalpy decreases ($h_2 < h_1$)[cite: 3].</li></ul>'
      }
    ]
  },
  {
    id: 't11', icon: '11', title: 'Heating, Humidification & Reheat Cycles',
    titleZh: '加熱加濕、噴淋室效率與再熱循環',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="235" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Dehumidification with Reheat Cycle (冷卻除濕 + 重新加熱過程)</text>
        <path d="M 80 220 Q 180 190, 280 135 T 450 70 T 620 60" fill="none" stroke="#f1c40f" stroke-width="3"/>
        <circle cx="580" cy="115" r="6" fill="#e74c3c"/>
        <text x="595" y="115" font-size="11" fill="#e74c3c" font-weight="bold">Pt 1 (Room/Mix)</text>
        <circle cx="260" cy="165" r="6" fill="#3498db"/>
        <text x="185" y="160" font-size="11" fill="#3498db" font-weight="bold">Pt 2 (Off-Coil)</text>
        <path d="M 580 115 L 260 165" stroke="#3498db" stroke-width="3.5" class="flow-cold"/>
        <text x="430" y="130" font-size="9.5" fill="#5dade2">1➔2: Cooling + Dehumidification</text>
        <circle cx="420" cy="165" r="6" fill="#f39c12"/>
        <text x="435" y="160" font-size="11" fill="#f39c12" font-weight="bold">Pt 3 (Supply)</text>
        <path d="M 260 165 L 420 165" stroke="#e74c3c" stroke-width="3.5" class="flow-hot"/>
        <text x="340" y="185" text-anchor="middle" font-size="9.5" fill="#f5b7b1">2➔3: Sensible Reheat (w=const)</text>
        <rect x="40" y="195" width="620" height="50" fill="#1a252f" stroke="#1abc9c" rx="4"/>
        <text x="350" y="215" text-anchor="middle" font-size="11" fill="#ecf0f1">Spray Chamber Humidifier Effectiveness: <span style="color:#f1c40f;font-family:Consolas;font-weight:bold;">E = (h3 - h2) / (hs - h2)</span></text>
        <text x="350" y="233" text-anchor="middle" font-size="9.5" fill="#bdc3c7">Reheat avoids over-cooling space during periods of high humidity and low sensible heat gain.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 11: Psychrometric cycle of Cooling + Dehumidification (1 to 2) followed by Sensible Reheat (2 to 3) and spray chamber saturation effectiveness formula',
    sections: [
      {
        title: 'Sensible Heating & Humidification / 顯熱加熱與加濕',
        zh: '<p><strong>顯熱加熱 (Sensible Heating)</strong>：空氣流經加熱盤管，含濕量 $w$ 保持恆定，溫度上升（$T_1 \\to T_2$），比焓增加（$h_1 \\to h_2$），但<strong>相對濕度與飽和度降低</strong>[cite: 3]。</p><p><strong>加濕過程 (Humidification)</strong>：向氣流中噴入水霧或蒸汽，增加空氣中水蒸氣含量[cite: 3]。在噴淋室 (spray chamber) 中，空氣理論上可達到飽和，但實際操作受限於接觸效率，其<strong>加濕有效度 (Effectiveness, $E$)</strong> 定義為[cite: 3]：</p><div class="formula-block">E = \frac{h_3 - h_2}{h_s - h_2}</div>',
        en: '<p><strong>Sensible Heating</strong> raises temperature from $T_1$ to $T_2$ and enthalpy from $h_1$ to $h_2$ at constant humidity ratio $w$, causing relative humidity to decrease[cite: 3].</p><p><strong>Humidification</strong> introduces water or steam[cite: 3]. In a spray chamber, actual performance is characterized by <strong>effectiveness ($E$)</strong>[cite: 3]:</p><div class="formula-block">E = \frac{h_3 - h_2}{h_s - h_2}</div>'
      },
      {
        title: 'Cooling + Dehumidification + Reheat / 冷卻除濕加再熱循環',
        zh: '<p>高濕度而低顯熱負荷環境（如潮濕梅雨季節或手術室）下，若單純冷卻除濕會導致送風溫度過低引起室內過冷[cite: 3]。空調機組先將空氣深冷除濕至狀態點 2，再透過再熱盤管 (reheat coil) 進行等濕顯熱加熱至送風狀態點 3[cite: 3]。</p>',
        en: '<p>Under high ambient humidity and low sensible load, deep cooling to achieve required dehumidification yields too low a supply temperature[cite: 3]. The air is first cooled/dehumidified to State 2, then passed through a reheat coil to State 3 before delivery[cite: 3].</p>'
      }
    ]
  },
  {
    id: 't12', icon: '12', title: 'Evaporative Cooling & Adiabatic Air Mixing',
    titleZh: '絕熱蒸發冷卻與空氣混合槓桿定律',
    diagram: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="255" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Adiabatic Air Mixing &amp; Evaporative Cooling (絕熱混合槓桿與蒸發冷卻)</text>
        <path d="M 80 230 Q 180 200, 280 145 T 450 80 T 620 70" fill="none" stroke="#f1c40f" stroke-width="3"/>
        <circle cx="160" cy="210" r="6" fill="#3498db"/>
        <text x="120" y="200" font-size="10.5" fill="#5dade2" font-weight="bold">Pt 1: Outdoor Air</text>
        <text x="120" y="215" font-size="9" fill="#bdc3c7">(4°C, 2°C WB, m1=2.54 kg/s)</text>
        <circle cx="530" cy="120" r="6" fill="#e74c3c"/>
        <text x="545" y="115" font-size="10.5" fill="#f5b7b1" font-weight="bold">Pt 2: Return Air</text>
        <text x="545" y="130" font-size="9" fill="#bdc3c7">(25°C, 50% RH, m2=7.28 kg/s)</text>
        <line x1="160" y1="210" x2="530" y2="120" stroke="#ecf0f1" stroke-width="3"/>
        <circle cx="434" cy="143" r="7" fill="#f1c40f"/>
        <text x="410" y="165" font-size="11" fill="#f1c40f" font-weight="bold">Pt 3: Mixed (Tm=19.5°C)</text>
        <text x="410" y="180" font-size="9.5" fill="#fff">WBT = 14.6°C</text>
        <path d="M 434 143 L 310 173" stroke="#2ecc71" stroke-width="3" class="flow-moisture"/>
        <text x="340" y="160" font-size="8.5" fill="#2ecc71">Evaporative Cooling Along Constant WBT</text>
        <rect x="30" y="205" width="640" height="60" fill="#1a252f" stroke="#1abc9c" rx="4"/>
        <text x="350" y="225" text-anchor="middle" font-size="12" fill="#f1c40f" font-family="Consolas" font-weight="bold">Inverse Lever Rule: (Line 1-3) / (Line 1-2) = m_da2 / m_da3 = 7.284 / 9.819 = 0.742</text>
        <text x="350" y="245" text-anchor="middle" font-size="10" fill="#ecf0f1">Evaporative Cooling: Sensible heat removed while moisture added at constant wet bulb temperature (Ideal adiabatic saturation).</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 12: Psychrometric inverse lever rule for adiabatic air mixing (Example 2) and evaporative cooling along constant wet bulb lines',
    sections: [
      {
        title: 'Evaporative Cooling Process / 絕熱蒸發冷卻',
        zh: '<p><strong>蒸發冷卻 (Evaporative Cooling)</strong>：水在不加熱不冷卻的條件下循環噴淋，水溫保持恆定並等於空氣的<strong>濕球溫度 (WBT)</strong>[cite: 3]。空氣中的顯熱被用作蒸發水分的潛熱，空氣<strong>乾球溫度下降、含濕量增加，但全焓與濕球溫度基本不變</strong>，又稱「理想絕熱飽和過程 (Ideal Adiabatic Saturation Process)」[cite: 3]。</p>',
        en: '<p><strong>Evaporative Cooling</strong> removes sensible heat while simultaneously adding moisture as circulating spray water settles at the wet-bulb temperature line without external heat addition[cite: 3]. Termed the <strong>"Ideal Adiabatic Saturation Process"</strong>[cite: 3].</p>'
      },
      {
        title: 'Air Mixing & The Inverse Lever Rule / 空氣混合槓桿定律',
        zh: '<p>空調箱混合段中，室外新風 (1) 與室內回風 (2) 絕熱混合為混合點 (3)[cite: 3]：</p><ol><li>混合點 3 嚴格位於連接點 1 與點 2 的直線上[cite: 3]；</li><li>線段長度比例遵循<strong>反比槓桿定律 (Inverse Lever Rule)</strong>[cite: 3]：<br>$$\frac{\text{Line } 1-3}{\text{Line } 1-2} = \frac{\dot{m}_{da2}}{\dot{m}_{da3}} = \frac{\dot{m}_{da2}}{\dot{m}_{da1} + \dot{m}_{da2}}$$[cite: 3]</li></ol><p><strong>講義例題 2 驗證</strong>：$2\text{ m}^3\text{/s}$ 新風 (4°C DB, 2°C WB, $v_1=0.789\text{ m}^3\text{/kg} \implies \dot{m}_{da1}=2.535\text{ kg/s}$) 與 $6.25\text{ m}^3\text{/s}$ 回風 (25°C DB, 50% RH, $v_2=0.858\text{ m}^3\text{/kg} \implies \dot{m}_{da2}=7.284\text{ kg/s}$) 混合[cite: 3]。長度比例為 $7.284 / 9.819 = 0.742$，在圖上精確定位出混合狀態為 <strong>19.5 °C 乾球溫度</strong> 與 <strong>14.6 °C 濕球溫度</strong>[cite: 3]。</p>',
        en: '<p>In AHU mixing plenums, outdoor air (1) and return air (2) mix adiabatically at Point 3 on the straight tie-line between them[cite: 3]:</p><div class="formula-block">\frac{\text{Line } 1-3}{\text{Line } 1-2} = \frac{\dot{m}_{da2}}{\dot{m}_{da3}} = \frac{\dot{m}_{da2}}{\dot{m}_{da1} + \dot{m}_{da2}}</div><p><strong>Example 2 Demonstration</strong>: $2\text{ m}^3\text{/s}$ outdoor air ($\dot{m}_{da1}=2.535\text{ kg/s}$) mixed with $6.25\text{ m}^3\text{/s}$ return air ($\dot{m}_{da2}=7.284\text{ kg/s}$)[cite: 3]. Line ratio = $0.742$, yielding mixture at <strong>$19.5^\circ\text{C}$ DBT and $14.6^\circ\text{C}$ WBT</strong>[cite: 3].</p>'
      }
    ]
  }
];

// ==========================================
// 25 MULTIPLE CHOICE QUESTIONS (L03)
// ==========================================
const mcData = [
  {
    question: "According to Lecture 3, what is the volumetric percentage of NITROGEN in standard dry air?",
    options: ["20.95%", "78.08%", "0.93%", "0.03%"],
    answer: 1,
    explanation: "Slide 2 specifies dry air composition: Nitrogen is 78.08% by volume, Oxygen is 20.95%, Argon is 0.93%, and Carbon dioxide is 0.03%.",
    lesson: "L3"
  },
  {
    question: "Between -10°C and 38°C, the amount of water vapour in moist air varies within what range by mass?",
    options: ["0 to 1%", "0 to 3%", "1 to 5%", "3 to 10%"],
    answer: 1,
    explanation: "Slide 2 explicitly notes that water vapour exists in moist air varying from 0 to 3% by mass over the temperature range of -10°C to 38°C.",
    lesson: "L3"
  },
  {
    question: "What are the individual gas constants for dry air (Ra) and water vapour (Rw) used in the derivation of the humidity ratio?",
    options: [
      "Ra = 0.4615 kJ/kg·K, Rw = 0.2871 kJ/kg·K",
      "Ra = 0.2871 kJ/kg·K, Rw = 0.4615 kJ/kg·K",
      "Ra = 1.005 kJ/kg·K, Rw = 1.87 kJ/kg·K",
      "Ra = 8.314 kJ/kg·K, Rw = 0.622 kJ/kg·K"
    ],
    answer: 1,
    explanation: "Slide 6 states: Ra = 0.2871 kJ/kg·K (dry air constant) and Rw = 0.4615 kJ/kg·K (water vapour constant).",
    lesson: "L3"
  },
  {
    question: "The numerical constant 0.62198 in the humidity ratio formula w = 0.62198 · [Pw / (Pat - Pw)] originates from:",
    options: [
      "The ratio of specific heats Cpd / Cpv",
      "The ratio of gas constants Ra / Rw",
      "The standard barometric pressure ratio Pat / 100",
      "The molecular weight of nitrogen divided by oxygen"
    ],
    answer: 1,
    explanation: "Slide 6 shows that Ra / Rw = 0.2871 / 0.4615 = 0.62198 (which is also the ratio of molecular weights of water to dry air: 18.015 / 28.966).",
    lesson: "L3"
  },
  {
    question: "Dalton's Law applied to moist air establishes that total barometric pressure Pat is equal to:",
    options: ["Pa - Pw", "Pa · Pw", "Pa + Pw", "Pw / Pa"],
    answer: 2,
    explanation: "Slide 4 defines Dalton's law for moist air as Pat = Pa + Pw, where Pa is dry air partial pressure and Pw is water vapour partial pressure.",
    lesson: "L3"
  },
  {
    question: "To ensure accurate measurement of wet bulb temperature (WBT), what rapid air velocity should pass over the wetted wick?",
    options: ["0.1 to 0.2 m/s", "1 to 2 m/s", "5 to 10 m/s", "10 to 15 m/s"],
    answer: 1,
    explanation: "Slide 7 specifies that a wet bulb thermometer must be exposed to a current of rapidly moving air of around 1-2 m/s velocity.",
    lesson: "L3"
  },
  {
    question: "DEW POINT TEMPERATURE (DPT) is best defined as:",
    options: [
      "The temperature of dry air when cooled along a constant wet bulb line",
      "The temperature at which moisture condensation begins when air is cooled at constant Pat and w",
      "The temperature reached by evaporating pure water into unsaturated air",
      "The temperature measured by a standard shielded mercury thermometer"
    ],
    answer: 1,
    explanation: "Slide 7: Dew point temperature is the temperature at which condensation of moisture begins at the same atmospheric pressure Pat and humidity ratio w.",
    lesson: "L3"
  },
  {
    question: "RELATIVE HUMIDITY (RH) is mathematically defined as:",
    options: [
      "Actual water vapour partial pressure divided by saturated water vapour pressure at the same temperature",
      "Mass of water vapour divided by total volume of moist air",
      "Actual humidity ratio divided by saturated humidity ratio",
      "Ratio of sensible heat load to total heat load"
    ],
    answer: 0,
    explanation: "Slide 7 defines relative humidity as the ratio of actual water vapour pressure (partial pressure Pw) to the saturated water vapour pressure (Pws) at the same temperature.",
    lesson: "L3"
  },
  {
    question: "What is the formula for DEGREE OF SATURATION (μ)?",
    options: ["μ = Pw / Pws", "μ = w / ws", "μ = to / ts", "μ = Cpd / Cpv"],
    answer: 1,
    explanation: "Slide 8 defines degree of saturation as μ = w / ws at the same temperature and barometric pressure.",
    lesson: "L3"
  },
  {
    question: "In moist air enthalpy calculations, what are the arbitrary reference datums for DRY AIR and WATER VAPOUR respectively?",
    options: [
      "0°C for dry air; 100°C steam for water vapour",
      "-17.8°C (0°F) for dry air; 0°C liquid water for water vapour",
      "0 K for dry air; 273.15 K for water vapour",
      "20°C for dry air; 20°C saturated vapour for water vapour"
    ],
    answer: 1,
    explanation: "Slide 8 states: The datum for dry air is -17.8°C (0°F) and for water vapour is 0°C liquid water.",
    lesson: "L3"
  },
  {
    question: "What is the specific heat capacity of dry air (Cpd) in the temperature range of -10°C to 30°C?",
    options: ["0.287 kJ/kg·K", "1.005 kJ/kg·K", "1.87 kJ/kg·K", "2501 kJ/kg·K"],
    answer: 1,
    explanation: "Slide 8 gives Cpd = 1.005 kJ/kg·K at constant atmospheric pressure.",
    lesson: "L3"
  },
  {
    question: "The latent heat of vaporization of water at 0°C (hfg) used in the enthalpy equation is:",
    options: ["1005 kJ/kg", "1870 kJ/kg", "2257 kJ/kg", "2501 kJ/kg"],
    answer: 3,
    explanation: "Slide 9 states hfg(at 0°C) = 2501 kJ/kg.",
    lesson: "L3"
  },
  {
    question: "The specific heat capacity of superheated water vapour (Cpv) in the range 10°C to 30°C is taken as:",
    options: ["1.005 kJ/kg·K", "1.87 kJ/kg·K", "2.501 kJ/kg·K", "4.186 kJ/kg·K"],
    answer: 1,
    explanation: "Slide 9 specifies Cpv = 1.87 kJ/kg·K.",
    lesson: "L3"
  },
  {
    question: "Which of the following is the complete formula for the specific enthalpy of moist air (h in kJ/kg dry air)?",
    options: [
      "h = 1.87 t + w(2501 + 1.005 t)",
      "h = 1.005 t + w(2501 + 1.87 t)",
      "h = 2501 t + w(1.005 + 1.87 t)",
      "h = (1.005 + w) · (2501 + t)"
    ],
    answer: 1,
    explanation: "Slide 9 derives: h = Cpd·t + w(hfg + Cpv·t) = 1.005 t + w(2501 + 1.87 t).",
    lesson: "L3"
  },
  {
    question: "The SENSIBLE HEAT RATIO (SHR) is defined as:",
    options: [
      "Sensible heat / Latent heat",
      "Sensible heat / (Sensible heat + Latent heat)",
      "Latent heat / (Sensible heat + Latent heat)",
      "Room Sensible heat / Total coil load"
    ],
    answer: 1,
    explanation: "Slide 10: Sensible heat ratio = sensible heat / (sensible heat + latent heat).",
    lesson: "L3"
  },
  {
    question: "The standard CIBSE Psychrometric Chart in Lecture 3 is constructed based on a barometric pressure of:",
    options: ["100.000 kPa", "101.325 kPa", "103.000 kPa", "110.000 kPa"],
    answer: 1,
    explanation: "Slide 12: The CIBSE Psychrometric chart is explicitly based on standard barometric pressure of 101.325 kPa.",
    lesson: "L3"
  },
  {
    question: "In Example 1, for air at 40°C DBT and 20°C WBT, what is the humidity ratio (w) read from the chart?",
    options: ["3.2 g/kg", "6.4 g/kg", "11.3 g/kg", "14.6 g/kg"],
    answer: 1,
    explanation: "Slide 13: The intersection of 40°C DBT and 20°C WBT yields w = 6.4 g(water)/kg(dry air).",
    lesson: "L3"
  },
  {
    question: "In Example 1, what is the dew point temperature (Td) for the air state (40°C DBT, 20°C WBT)?",
    options: ["4°C", "7°C", "14°C", "20°C"],
    answer: 1,
    explanation: "Slide 13: Following the constant w = 6.4 g/kg line horizontally to the saturation curve gives Td = 7°C.",
    lesson: "L3"
  },
  {
    question: "Which of the following physical changes will INCREASE the Bypass Factor (BF) of a cooling coil?",
    options: [
      "Adding more rows to the coil",
      "Increasing the number of fins per cm",
      "Decreasing the air velocity through the coil",
      "Increasing the spacing between coil tubes"
    ],
    answer: 3,
    explanation: "Slide 17: Decreasing heat transfer surface area (less rows, less fins per cm, wider tube spacing) results in an INCREASE of Bypass Factor.",
    lesson: "L3"
  },
  {
    question: "What happens to the Bypass Factor (BF) if the air velocity across the cooling coil is DECREASED?",
    options: [
      "Bypass factor increases",
      "Bypass factor decreases",
      "Bypass factor remains exactly unchanged",
      "Bypass factor immediately reaches 1.0"
    ],
    answer: 1,
    explanation: "Slide 17: Decreasing air velocity provides more residence time for air to contact coil fins, resulting in a DECREASE in Bypass Factor.",
    lesson: "L3"
  },
  {
    question: "The formula for the Bypass Factor of a cooling coil in terms of temperatures is:",
    options: [
      "BF = (to - ts) / (tm - ts)",
      "BF = (tm - to) / (to - ts)",
      "BF = (tm - ts) / (to - ts)",
      "BF = (to - tm) / (tm - ts)"
    ],
    answer: 0,
    explanation: "Slide 18 defines BF = (to - ts) / (tm - ts), where to = off-coil temp, ts = apparatus dew point (ADP), and tm = entering mixing temp.",
    lesson: "L3"
  },
  {
    question: "During a cooling and dehumidification process, the cooling coil surface temperature must be:",
    options: [
      "Above the entering dry bulb temperature",
      "Between dry bulb and wet bulb temperature",
      "Below the dew point temperature of the entering moist air",
      "Equal to the room return air temperature"
    ],
    answer: 2,
    explanation: "Slide 19: Moisture can only condense out of moist air if the coil surface is cooled below the dew point temperature (Td) of the entering air.",
    lesson: "L3"
  },
  {
    question: "The effectiveness (E) of a spray chamber air washer is defined in Lecture 3 as:",
    options: [
      "E = (h3 - h2) / (hs - h2)",
      "E = (hs - h2) / (h3 - h2)",
      "E = (h3 - hs) / (h2 - hs)",
      "E = (h2 - h1) / (hs - h1)"
    ],
    answer: 0,
    explanation: "Slide 20 gives spray chamber effectiveness as E = (h3 - h2) / (hs - h2), where hs is enthalpy at saturation.",
    lesson: "L3"
  },
  {
    question: "An EVAPORATIVE COOLING process follows which line on the psychrometric chart?",
    options: [
      "Horizontal constant humidity ratio line",
      "Vertical constant dry bulb temperature line",
      "Sloping constant wet bulb temperature / enthalpy line",
      "Constant relative humidity line"
    ],
    answer: 2,
    explanation: "Slide 22 states that in evaporative cooling (ideal adiabatic saturation), water temperature remains constant, falling along the wet bulb temperature line.",
    lesson: "L3"
  },
  {
    question: "In Example 2, when outdoor air (4°C DB, 2°C WB) is mixed with return air (25°C DB, 50% RH), what is the resulting mixture dry bulb temperature?",
    options: ["14.6°C", "18.0°C", "19.5°C", "21.2°C"],
    answer: 2,
    explanation: "Slide 25 demonstrates using the inverse lever rule that the resulting mixture reaches t3 = 19.5°C dry-bulb and t3* = 14.6°C wet-bulb.",
    lesson: "L3"
  }
];

// ==========================================
// 5 SHORT ANSWER QUESTIONS (L03)
// ==========================================
const shortData = [
  {
    type: "explain",
    lesson: "L3",
    question: "Derive the humidity ratio formula w = 0.62198 · [Pw / (Pat - Pw)] from fundamental principles. Clearly state (a) the governing Ideal Gas equations for dry air and water vapour, (b) the numerical values of Ra and Rw, and (c) how Dalton's Law is incorporated.",
    modelAnswer: "Step 1: Write ideal gas equations for dry air and water vapour occupying volume V at temperature T:\n• For dry air: Pa · V = ma · Ra · T  ==>  ma = (Pa · V) / (Ra · T)\n• For water vapour: Pw · V = mw · Rw · T  ==>  mw = (Pw · V) / (Rw · T)\n\nStep 2: Substitute gas constants:\n• Ra = 0.2871 kJ/kg·K (gas constant for dry air)\n• Rw = 0.4615 kJ/kg·K (gas constant for water vapour)\n\nStep 3: Take the ratio defining humidity ratio w = mw / ma:\nw = [ (Pw · V) / (Rw · T) ] / [ (Pa · V) / (Ra · T) ] = (Ra / Rw) · (Pw / Pa)\nRatio of constants = 0.2871 / 0.4615 = 0.62198\nThus: w = 0.62198 · (Pw / Pa)\n\nStep 4: Incorporate Dalton's Law of partial pressures:\nPat = Pa + Pw  ==>  Pa = Pat - Pw\nSubstituting Pa into the equation yields the final formula:\nw = 0.62198 · [ Pw / (Pat - Pw) ]  (kg water vapour / kg dry air)",
    tips: "Be sure to state Ra = 0.2871, Rw = 0.4615, Ra/Rw = 0.62198, and show the Pa = Pat - Pw substitution clearly."
  },
  {
    type: "trace",
    lesson: "L3",
    question: "Moist air is at t = 28°C dry bulb with a humidity ratio w = 0.012 kg/kg dry air. (a) Calculate the specific enthalpy h using the formula h = 1.005 t + w(2501 + 1.87 t). (b) Identify how much enthalpy is contributed by the dry air vs the water vapour.",
    modelAnswer: "Step 1: Calculate the enthalpy of dry air (hd):\nhd = Cpd · t = 1.005 kJ/kg·K · 28°C = 28.14 kJ/kg dry air\n\nStep 2: Calculate the specific enthalpy of water vapour (hv):\nhv = hfg(0°C) + Cpv · t = 2501 + (1.87 · 28) = 2501 + 52.36 = 2553.36 kJ/kg water vapour\n\nStep 3: Multiply by humidity ratio w to get vapour contribution:\nw · hv = 0.012 · 2553.36 = 30.64 kJ/kg dry air\n\nStep 4: Compute total specific enthalpy (h):\nh = hd + w · hv = 28.14 + 30.64 = 58.78 kJ/kg dry air\n\nBreakdown:\n• Dry air sensible heat contribution = 28.14 kJ/kg (47.9%)\n• Water vapour enthalpy contribution = 30.64 kJ/kg (52.1%)",
    tips: "Calculate hd = 1.005·t and hv = 2501 + 1.87·t separately first, then sum up for total h."
  },
  {
    type: "scenario",
    lesson: "L3",
    question: "A cooling coil receives mixed air at tm = 27°C DBT and delivers off-coil air at to = 13.5°C DBT. The coil's apparatus dew point is ts = 10.0°C. (a) Calculate the Bypass Factor (BF) and Contact Factor (β). (b) Name THREE physical or operational modifications to the coil that would lower its Bypass Factor.",
    modelAnswer: "(a) Calculation:\n• Bypass Factor formula: BF = (to - ts) / (tm - ts)\n• Substituting values: BF = (13.5 - 10.0) / (27.0 - 10.0) = 3.5 / 17.0 = 0.2059 (approx. 20.6%)\n• Contact Factor: β = 1 - BF = 1 - 0.2059 = 0.7941 (approx. 79.4%)\n\n(b) Modifications to LOWER the Bypass Factor (increase contact efficiency):\n1. Increase the number of coil tube rows in the direction of airflow (e.g., from 4 rows to 6 or 8 rows).\n2. Increase the fin density (more fins per cm or per inch) to increase contact heat transfer surface area.\n3. Decrease the air face velocity across the cooling coil (which increases residence/contact time for the air passing through the coil fins).\n(Alternative valid point: Decrease tube spacing or use staggered fin geometry).",
    tips: "BF = (to - ts) / (tm - ts). Contact factor is 1 - BF. To lower BF, increase surface area or increase residence time."
  },
  {
    type: "trace",
    lesson: "L3",
    question: "Re-trace Example 2 from Lecture 3: Outdoor air (stream 1) at V1 = 2.0 m³/s (v1 = 0.789 m³/kg, t1 = 4°C DB) is adiabatically mixed with return air (stream 2) at V2 = 6.25 m³/s (v2 = 0.858 m³/kg, t2 = 25°C DB). (a) Calculate the dry air mass flow rate of each stream. (b) Calculate the resulting mixture dry bulb temperature (t3) by energy/mass balance.",
    modelAnswer: "Step 1: Calculate mass flow rate of dry air for each stream:\n• Stream 1 (Outdoor Air): m_da1 = V1 / v1 = 2.0 / 0.789 = 2.535 kg/s dry air\n• Stream 2 (Return Air): m_da2 = V2 / v2 = 6.25 / 0.858 = 7.284 kg/s dry air\n• Total dry air mass flow: m_da3 = m_da1 + m_da2 = 2.535 + 7.284 = 9.819 kg/s dry air\n\nStep 2: Conservation of Energy (sensible temperature balance):\nm_da1 · t1 + m_da2 · t2 = m_da3 · t3\nt3 = (m_da1 · t1 + m_da2 · t2) / m_da3\nt3 = (2.535 · 4.0 + 7.284 · 25.0) / 9.819\nt3 = (10.14 + 182.10) / 9.819 = 192.24 / 9.819 = 19.58°C (Slide 25 chart reading gives 19.5°C)\n\nStep 3: Lever Rule Check:\nLine 1-3 / Line 1-2 = m_da2 / m_da3 = 7.284 / 9.819 = 0.742\nt3 = t1 + 0.742 · (t2 - t1) = 4.0 + 0.742 · (25.0 - 4.0) = 4.0 + 15.58 = 19.58°C.",
    tips: "Always convert volume flow rates (m³/s) to dry air mass flow rates (kg/s) using specific volume v before taking the weighted average."
  },
  {
    type: "compare",
    lesson: "L3",
    question: "Compare (a) Cooling + Dehumidification + Reheat with (b) Evaporative Cooling (Adiabatic Saturation). Discuss for each: (1) path on psychrometric chart, (2) changes in DBT, WBT, and moisture content w, and (3) a typical engineering application.",
    modelAnswer: "1. Cooling + Dehumidification + Reheat:\n• Psychrometric Path: Air moves down and left below dew point toward the saturation curve (cooling and dehumidification), then horizontally to the right at constant w (sensible reheat).\n• Property Changes: DBT decreases then increases; Moisture content w decreases significantly; Enthalpy h decreases overall.\n• Application: Critical humidity-controlled environments with low sensible heat loads, such as operating theatres, cleanrooms, museums, and humid summer climates to prevent room over-cooling.\n\n2. Evaporative Cooling (Ideal Adiabatic Saturation):\n• Psychrometric Path: Moves upwards and to the left strictly along a constant Wet Bulb Temperature (WBT) / constant enthalpy line toward saturation.\n• Property Changes: DBT decreases (sensible cooling); WBT remains constant; Moisture content w increases (water evaporated into airstream); Enthalpy h remains practically constant.\n• Application: Hot and dry/arid climates, industrial workshops, and cooling towers where economical cooling is required without mechanical refrigeration compressors.",
    tips: "Structure with clear subheadings: Path on chart, Property changes (DBT/WBT/w), and Typical application."
  }
];

// ==========================================
// RENDER & DOM BINDINGS
// ==========================================
function renderNotes() {
  const c = document.getElementById('notesContainer');
  c.innerHTML = '';
  notesData.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.id = topic.id;
    let sectionsHTML = '';
    topic.sections.forEach(sec => {
      sectionsHTML += `
        <h3 style="margin-top:18px;margin-bottom:6px;color:#34495e;font-size:16px;border-bottom:1px dashed #dce1e6;padding-bottom:4px;">${escapeHtml(sec.title)}</h3>
        <div class="lang-pair">
          <div class="lang-cell zh">
            <div class="lang-label">中文重點 / Cantonese &amp; Chinese</div>
            ${sec.zh}
          </div>
          <div class="lang-cell en">
            <div class="lang-label">English Notes</div>
            ${sec.en}
          </div>
        </div>`;
    });
    let diagramHTML = '';
    if (topic.diagram) {
      diagramHTML = `
        <div class="diagram-block">
          <div class="diagram-title">⚡ SCADA Interactive Schematic / 工業級動態原理圖</div>
          ${topic.diagram}
          ${topic.diagramCaption ? '<div class="diagram-caption">' + escapeHtml(topic.diagramCaption) + '</div>' : ''}
        </div>`;
    }
    card.innerHTML = `
      <div class="topic-header">
        <div class="topic-icon">${topic.icon}</div>
        <div class="topic-title">
          <h2>${escapeHtml(topic.title)} <span style="color:#7f8c8d;font-weight:normal;font-size:14px;">/ ${escapeHtml(topic.titleZh)}</span></h2>
        </div>
      </div>
      ${sectionsHTML}
      ${diagramHTML}`;
    c.appendChild(card);
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledAnswers = {};
function renderMC() {
  const container = document.getElementById('mcContainer');
  container.innerHTML = '';
  mcData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = 'mc-q' + index;
    const indices = q.options.map((_, i) => i);
    shuffleArray(indices);
    const newAnswerIndex = indices.indexOf(q.answer);
    shuffledAnswers[index] = newAnswerIndex;
    let optionsHTML = '';
    indices.forEach((origIdx, displayIdx) => {
      const opt = q.options[origIdx];
      const safeOpt = escapeHtml(opt);
      optionsHTML += `
        <label id="mc-q${index}-opt${displayIdx}">
          <input type="radio" name="mc${index}" value="${displayIdx}" onchange="recordAnswer(${index}, ${displayIdx})">
          ${safeOpt}
        </label>`;
    });
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">Q${index + 1}</span>
        <span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>
      </div>
      <div class="q-text">${escapeHtml(q.question)}</div>
      <div class="options">${optionsHTML}</div>
      <div class="explanation" id="mc-exp${index}">
        <strong>Explanation / 詳細解釋：</strong>${escapeHtml(q.explanation)}
      </div>`;
    container.appendChild(card);
  });
}

function renderShort() {
  const c = document.getElementById('shortContainer');
  c.innerHTML = '';
  shortData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card short-q';
    card.id = 'short-q' + index;
    const typeTag = typeLabels[q.type] || '';
    const lessonTag = `<span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>`;
    const safeQuestion = escapeHtml(q.question).replace(/\n/g, '<br>');
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">S${index + 1}</span>
        ${typeTag}
        ${lessonTag}
      </div>
      <div class="q-text">${safeQuestion}</div>
      <textarea id="short-input${index}" placeholder="Type your calculation/reasoning here for practice / 喺度輸入你的計算或推導答案..."></textarea>
      <div class="answer-tips">💡 Tip / 提示：${escapeHtml(q.tips || 'Key engineering concepts')}</div>
      <div class="model-answer" id="short-ans${index}">
        <strong>📝 Model Answer / 規範參考答案：</strong>
        <pre></pre>
      </div>`;
    card.querySelector('pre').textContent = q.modelAnswer;
    c.appendChild(card);
  });
}

let userAnswers = {};
let timerInterval;
let timeLeft = 90 * 60;

function recordAnswer(qIndex, optIndex) {
  userAnswers[qIndex] = optIndex;
  updateStats();
}

function updateStats() {
  const answered = Object.keys(userAnswers).length;
  const total = mcData.length;
  document.getElementById('answeredCount').textContent = answered + '/' + total;
  const percent = (answered / total) * 100;
  document.getElementById('progressBar').style.width = percent + '%';
}

function showSection(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (section === 'notes') {
    document.getElementById('notesSection').classList.add('active');
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
  } else if (section === 'part1') {
    document.getElementById('part1Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
  } else if (section === 'part2') {
    document.getElementById('part2Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[2].classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function submitMC() {
  let correct = 0;
  let reviewHTML = '';
  mcData.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const correctDisplayAnswer = shuffledAnswers[index];
    const isCorrect = userAnswer === correctDisplayAnswer;
    const card = document.getElementById('mc-q' + index);
    const explanation = document.getElementById('mc-exp' + index);
    explanation.style.display = 'block';
    if (isCorrect) {
      correct++;
      card.classList.add('answered');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item correct">Q${index + 1} ✓ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    } else {
      card.classList.add('wrong');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('incorrect');
      document.getElementById('mc-q' + index + '-opt' + correctDisplayAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item wrong">Q${index + 1} ✗ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    }
  });
  const percent = Math.round((correct / mcData.length) * 100);
  document.getElementById('finalScore').textContent = percent + '%';
  document.getElementById('scoreCircle').style.setProperty('--percent', percent);
  let msg = '';
  if (percent >= 80) msg = '🎉 卓越！你已經徹底掌握濕度學與空氣處理過程嘅所有核心概念！';
  else if (percent >= 60) msg = '👍 做得好！請仔細閱讀答錯題目的詳細解釋與公式計算。';
  else if (percent >= 50) msg = '✅ 及格。建議重溫濕度比推導、比焓方程與冷卻除濕過程。';
  else msg = '📚 繼續努力！點擊 Notes 重新溫習相應主題後再試一次。';
  document.getElementById('resultMsg').textContent = msg;
  document.getElementById('scoreDisplay').textContent = percent + '%';
  document.getElementById('reviewSection').innerHTML = `<h3>MC Result: ${correct}/${mcData.length} (${percent}%)</h3><div>${reviewHTML}</div>`;
  document.getElementById('resultPanel').style.display = 'block';
  document.getElementById('resultPanel').scrollIntoView({ behavior: 'auto' });
  clearInterval(timerInterval);
}

function showAnswers() {
  shortData.forEach((q, index) => {
    document.getElementById('short-ans' + index).style.display = 'block';
  });
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    document.getElementById('timer').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    if (timeLeft <= 0) { clearInterval(timerInterval); alert('Time is up!'); submitMC(); }
    if (timeLeft <= 300) document.getElementById('timer').style.color = '#e74c3c';
  }, 1000);
}

document.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') setTimeout(() => e.target.blur(), 100);
});

window.onload = function() {
  renderNotes();
  renderMC();
  renderShort();
  startTimer();
  updateStats();
};

window.addEventListener('scroll', function() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  if (window.pageYOffset > 400) btn.classList.add('show');
  else btn.classList.remove('show');
});
