import db, { initializeDatabase } from './config/database.js';

// Initialize database
initializeDatabase();

console.log('Seeding database with JEE content...');

// Create Physics course
const physicsResult = db.prepare(`
  INSERT INTO courses (title, description, subject, difficulty)
  VALUES (?, ?, ?, ?)
`).run(
  'JEE Physics',
  'Complete Physics syllabus for JEE Main and Advanced covering all topics from Class 11 and 12',
  'Physics',
  'Advanced'
);

const physicsCourseId = physicsResult.lastInsertRowid;

// Create Modern Physics Module
const modernPhysicsResult = db.prepare(`
  INSERT INTO modules (course_id, title, description, order_index)
  VALUES (?, ?, ?, ?)
`).run(
  physicsCourseId,
  'Modern Physics',
  'Comprehensive coverage of Modern Physics including Dual Nature of Radiation, Photoelectric Effect, Bohr Model, de Broglie Wavelength, Nuclear Physics, and Semiconductors. High weightage chapter for JEE Advanced.',
  10
);

const modernPhysicsModuleId = modernPhysicsResult.lastInsertRowid;

// Lesson 1: Dual Nature of Radiation and Matter
const lesson1Content = `# Dual Nature of Radiation and Matter

## Introduction

One of the most revolutionary concepts in modern physics is that particles can exhibit wave-like properties and waves can exhibit particle-like properties. This dual nature fundamentally changed our understanding of the universe at the atomic scale.

## Historical Background

### Classical Wave Theory
Before the 20th century, light was understood purely as a wave phenomenon based on:
- Young's double-slit experiment (interference)
- Diffraction patterns
- Polarization
- Maxwell's electromagnetic theory

### Blackbody Radiation Problem

A **blackbody** is an ideal object that:
1. Absorbs all incident radiation (no reflection)
2. Emits radiation based only on its temperature

**Classical Rayleigh-Jeans Law** predicted that intensity should increase indefinitely with frequency, leading to the "ultraviolet catastrophe."

### Planck's Quantum Hypothesis (1900)

Max Planck resolved this by proposing:

**Energy is quantized**: E = nhν

Where:
- n = 1, 2, 3, ... (quantum number)
- h = Planck's constant = 6.626 × 10⁻³⁴ J·s
- ν (nu) = frequency of radiation

**Planck's formula**:
$$E = h\\nu = \\frac{hc}{\\lambda}$$

This explained the blackbody spectrum perfectly!

## Photoelectric Effect

### Experimental Observations (1887, Heinrich Hertz)

When light falls on certain metal surfaces, electrons are emitted. Key observations:

1. **Threshold Frequency (ν₀)**: Below a certain frequency, NO electrons are emitted regardless of intensity
2. **Instantaneous Emission**: Electrons are emitted immediately (< 10⁻⁹ s) even with dim light
3. **Kinetic Energy**: Maximum KE of emitted electrons increases linearly with frequency
4. **Intensity Effect**: Higher intensity → more electrons (not more energetic electrons)

### Classical Wave Theory Fails

Classical theory predicted:
- Electrons should be emitted at any frequency (given enough time)
- Brighter light should eject electrons with more energy
- Time delay for electron accumulation of energy

**None of these were observed!**

### Einstein's Photon Theory (1905)

Einstein proposed light consists of discrete packets called **photons**, each with energy:

$$E = h\\nu$$

**Einstein's Photoelectric Equation**:

$$KE_{max} = h\\nu - W_0$$

Where:
- KE_max = maximum kinetic energy of emitted electron
- hν = energy of incident photon
- W₀ = work function (minimum energy to remove electron)

**Alternative form**:
$$\\frac{1}{2}mv_{max}^2 = h\\nu - h\\nu_0$$

Where ν₀ is the threshold frequency: $W_0 = h\\nu_0$

### Key Insights

**Work Function (W₀)**: 
- Energy required to remove electron from metal surface
- Different for each metal
- Typical values: 2-5 eV

**Stopping Potential (V₀)**:
The minimum negative potential needed to stop the most energetic electrons:

$$eV_0 = KE_{max} = h\\nu - W_0$$

**Graph Analysis**:
- Plot: KE_max vs ν
- Slope = h (Planck's constant)
- Y-intercept = -W₀
- X-intercept = ν₀ (threshold frequency)

## Solved Examples

### Example 1: Basic Photoelectric Effect

**Problem**: Light of wavelength 400 nm falls on a metal surface with work function 2.0 eV. Calculate:
(a) Energy of incident photon
(b) Maximum KE of emitted electrons
(c) Stopping potential

**Solution**:

(a) Energy of photon:
$$E = \\frac{hc}{\\lambda} = \\frac{(6.626 \\times 10^{-34})(3 \\times 10^8)}{400 \\times 10^{-9}}$$
$$E = 4.97 \\times 10^{-19} \\text{ J} = \\frac{4.97 \\times 10^{-19}}{1.6 \\times 10^{-19}} = 3.1 \\text{ eV}$$

(b) Maximum KE:
$$KE_{max} = E - W_0 = 3.1 - 2.0 = 1.1 \\text{ eV}$$

(c) Stopping potential:
$$eV_0 = KE_{max}$$
$$V_0 = 1.1 \\text{ V}$$

### Example 2: Threshold Frequency

**Problem**: A metal has a threshold wavelength of 500 nm. What is the maximum KE of electrons when light of wavelength 300 nm is incident on it?

**Solution**:

First, find work function:
$$W_0 = \\frac{hc}{\\lambda_0} = \\frac{(6.626 \\times 10^{-34})(3 \\times 10^8)}{500 \\times 10^{-9}}$$
$$W_0 = 3.98 \\times 10^{-19} \\text{ J} = 2.49 \\text{ eV}$$

Energy of incident photon:
$$E = \\frac{hc}{\\lambda} = \\frac{(6.626 \\times 10^{-34})(3 \\times 10^8)}{300 \\times 10^{-9}}$$
$$E = 6.626 \\times 10^{-19} \\text{ J} = 4.14 \\text{ eV}$$

Maximum KE:
$$KE_{max} = 4.14 - 2.49 = 1.65 \\text{ eV}$$

## Practice Problems

1. Calculate the energy of a photon with wavelength 600 nm.
2. If the work function of sodium is 2.3 eV, what is its threshold frequency?
3. Light of wavelength 350 nm is incident on a surface. If stopping potential is 1.5 V, find the work function.

## Key Formulas Summary

| Formula | Description |
|---------|-------------|
| E = hν = hc/λ | Photon energy |
| KE_max = hν - W₀ | Einstein's photoelectric equation |
| W₀ = hν₀ | Work function |
| eV₀ = KE_max | Stopping potential relation |

## Important Constants

- h = 6.626 × 10⁻³⁴ J·s
- c = 3 × 10⁸ m/s
- e = 1.6 × 10⁻¹⁹ C
- 1 eV = 1.6 × 10⁻¹⁹ J
- hc = 1240 eV·nm (useful for calculations!)
`;

db.prepare(`
  INSERT INTO lessons (module_id, title, content, lesson_type, order_index, duration_minutes)
  VALUES (?, ?, ?, ?, ?, ?)
`).run(modernPhysicsModuleId, 'Dual Nature of Radiation and Matter', lesson1Content, 'theory', 1, 90);

// Lesson 2: Photoelectric Effect - Advanced Concepts
const lesson2Content = `# Photoelectric Effect - Advanced Concepts

## Experimental Setup

### Typical Photoelectric Apparatus

**Components**:
1. **Evacuated tube** (vacuum to prevent collisions)
2. **Photosensitive cathode** (emitter)
3. **Collecting anode** (collector)
4. **Variable voltage source**
5. **Microammeter** (current measurement)

### Experimental Procedure

1. Illuminate cathode with monochromatic light
2. Apply accelerating potential (positive to anode)
3. Measure photocurrent
4. Vary voltage and observe current changes
5. Apply retarding potential (negative to anode)
6. Find stopping potential when current becomes zero

## Detailed Analysis

### Current vs Voltage Characteristics

**Observations**:
1. **Saturation Current**: Beyond certain positive voltage, current doesn't increase (all emitted electrons collected)
2. **Cut-off Voltage**: Negative voltage at which current becomes zero
3. **Photocurrent**: Proportional to intensity of light (for ν > ν₀)

### Einstein's Explanation - Step by Step

1. **Photon Absorption**: Electron absorbs entire photon energy (all or nothing)
2. **Energy Distribution**:
   - Part used to overcome work function (W₀)
   - Remainder appears as kinetic energy
3. **One-to-One**: Each photon can eject at most one electron

### Important Graphs

**Graph 1: KE_max vs Frequency**
- Linear relationship
- Slope = h (Planck's constant)
- Same slope for all metals
- Different intercepts (different work functions)

**Graph 2: Stopping Potential vs Frequency**
- Also linear (V₀ = KE_max/e)
- Universal slope = h/e
- Different intercepts for different metals

**Graph 3: Photocurrent vs Intensity**
- Linear at constant frequency
- Higher intensity → more photons → more electrons
- Only when ν > ν₀

## Advanced Solved Examples

### Example 3: Two Metals Comparison

**Problem**: Two metals A and B have work functions 3 eV and 5 eV respectively. Light of wavelength 300 nm is incident on both. Find:
(a) Which metal will emit electrons?
(b) Stopping potential for the emitting metal

**Solution**:

Energy of incident photon:
$$E = \\frac{1240 \\text{ eV·nm}}{300 \\text{ nm}} = 4.13 \\text{ eV}$$

(a) Metal A: E = 4.13 eV > W₀ = 3 eV → **Emission occurs**
    Metal B: E = 4.13 eV < W₀ = 5 eV → **No emission**

(b) For metal A:
$$KE_{max} = 4.13 - 3 = 1.13 \\text{ eV}$$
$$V_0 = 1.13 \\text{ V}$$

### Example 4: Intensity and Photocurrent

**Problem**: In a photoelectric experiment, when intensity is doubled, the saturation current becomes 0.8 mA from 0.4 mA. If frequency is now increased by 20% (keeping intensity constant at new value), what happens to:
(a) Saturation current
(b) Stopping potential

**Solution**:

(a) Saturation current depends only on intensity (number of photons), not frequency.
**Answer**: Remains 0.8 mA

(b) Stopping potential increases because:
$$V_0' = V_0 + \\frac{h \\times 0.2\\nu}{e} = V_0 + 0.2 \\times \\frac{h\\nu}{e}$$

**Answer**: Increases

## Practice Problems

4. A photocell is illuminated by light of wavelength 500 nm. When a retarding potential of 0.6 V is applied, photocurrent becomes zero. Calculate the work function.

5. The threshold wavelength for a metal is 600 nm. What is the maximum speed of emitted electrons when light of wavelength 400 nm is used?

6. In a photoelectric experiment, the slope of the graph between stopping potential and frequency is found to be 4.14 × 10⁻¹⁵ V·s. Calculate Planck's constant.

## Applications of Photoelectric Effect

1. **Photoelectric cells**: Automatic doors, burglar alarms
2. **Solar panels**: Photovoltaic effect
3. **Image sensors**: Digital cameras, night vision devices
4. **Photomultiplier tubes**: Detect very low light levels
5. **Light meters**: Photography

## Common Misconceptions

❌ **Wrong**: More intensity means more energetic electrons
✅ **Correct**: More intensity means more electrons (not more energetic)

❌ **Wrong**: Given enough time, any frequency can eject electrons
✅ **Correct**: Below threshold frequency, no electrons are emitted regardless of time or intensity

❌ **Wrong**: Electron gradually absorbs energy from light wave
✅ **Correct**: Electron absorbs entire photon energy instantaneously
`;

db.prepare(`
  INSERT INTO lessons (module_id, title, content, lesson_type, order_index, duration_minutes)
  VALUES (?, ?, ?, ?, ?, ?)
`).run(modernPhysicsModuleId, 'Photoelectric Effect - Advanced Concepts', lesson2Content, 'theory', 2, 75);

// Lesson 3: de Broglie Wavelength
const lesson3Content = `# de Broglie Wavelength and Matter Waves

## Introduction

In 1924, Louis de Broglie made a revolutionary proposal: If waves can behave like particles (photons), then particles should behave like waves!

## de Broglie Hypothesis

**Every moving particle has an associated wave called matter wave.**

### de Broglie Wavelength Formula

$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$

Where:
- λ = de Broglie wavelength
- h = Planck's constant
- p = momentum of particle
- m = mass, v = velocity

### For Photons

Photons have zero rest mass, so:
$$p = \\frac{E}{c} = \\frac{h\\nu}{c} = \\frac{h}{\\lambda}$$

This gives: λ = h/p (consistent!)

## Experimental Verification

### Davisson-Germer Experiment (1927)

**Setup**:
- Beam of electrons directed at nickel crystal
- Detector measured scattered electron intensity at various angles
- Accelerating voltage could be varied

**Observations**:
- Diffraction pattern observed (like X-rays!)
- Maximum intensity at specific angles
- Pattern consistent with Bragg's law

**Bragg's Law**:
$$n\\lambda = 2d \\sin\\theta$$

This confirmed electrons exhibit wave nature!

### G.P. Thomson's Experiment

Passed electrons through thin metal foil and observed diffraction rings (similar to X-ray diffraction).

## Practical Calculations

### de Broglie Wavelength for Electrons

For an electron accelerated through potential V:

Kinetic energy gained: $KE = eV$

$$\\frac{1}{2}mv^2 = eV$$

$$v = \\sqrt{\\frac{2eV}{m}}$$

Momentum: $p = mv = \\sqrt{2meV}$

**de Broglie wavelength**:
$$\\lambda = \\frac{h}{\\sqrt{2meV}} = \\frac{12.27}{\\sqrt{V}} \\text{ Å}$$

(For V in volts, λ in Angstroms)

## Solved Examples

### Example 5: Electron Wavelength

**Problem**: An electron is accelerated through a potential difference of 100 V. Calculate its de Broglie wavelength.

**Solution**:

Method 1 - Direct formula:
$$\\lambda = \\frac{12.27}{\\sqrt{V}} = \\frac{12.27}{\\sqrt{100}} = 1.227 \\text{ Å}$$

Method 2 - From first principles:
$$KE = eV = (1.6 \\times 10^{-19})(100) = 1.6 \\times 10^{-17} \\text{ J}$$

$$v = \\sqrt{\\frac{2KE}{m}} = \\sqrt{\\frac{2 \\times 1.6 \\times 10^{-17}}{9.1 \\times 10^{-31}}} = 5.93 \\times 10^6 \\text{ m/s}$$

$$\\lambda = \\frac{h}{mv} = \\frac{6.626 \\times 10^{-34}}{(9.1 \\times 10^{-31})(5.93 \\times 10^6)} = 1.227 \\times 10^{-10} \\text{ m} = 1.227 \\text{ Å}$$

### Example 6: Comparing Wavelengths

**Problem**: Compare the de Broglie wavelengths of:
(a) An electron and proton with same kinetic energy
(b) An electron and proton with same momentum

**Solution**:

(a) Same kinetic energy:
$$\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mKE}}$$

$$\\frac{\\lambda_e}{\\lambda_p} = \\sqrt{\\frac{m_p}{m_e}} = \\sqrt{\\frac{1836}{1}} \\approx 43$$

**Electron has 43 times larger wavelength!**

(b) Same momentum:
$$\\lambda = \\frac{h}{p}$$

Since p is same: **λₑ = λₚ**

### Example 7: Photon vs Electron

**Problem**: A photon and an electron both have wavelength 1 Å. Compare their energies.

**Solution**:

For photon:
$$E_{photon} = \\frac{hc}{\\lambda} = \\frac{1240 \\text{ eV·nm}}{0.1 \\text{ nm}} = 12400 \\text{ eV}$$

For electron:
$$\\lambda = \\frac{h}{p}$$
$$p = \\frac{h}{\\lambda} = \\frac{6.626 \\times 10^{-34}}{10^{-10}} = 6.626 \\times 10^{-24} \\text{ kg·m/s}$$

$$E_{electron} = \\frac{p^2}{2m} = \\frac{(6.626 \\times 10^{-24})^2}{2 \\times 9.1 \\times 10^{-31}} = 2.4 \\times 10^{-17} \\text{ J} = 150 \\text{ eV}$$

**Photon energy >> Electron energy (for same wavelength)**

## Why We Don't See Macroscopic Matter Waves?

For a cricket ball (m = 0.15 kg, v = 30 m/s):
$$\\lambda = \\frac{6.626 \\times 10^{-34}}{(0.15)(30)} = 1.5 \\times 10^{-34} \\text{ m}$$

This is impossibly small to detect! Matter wave nature is significant only for microscopic particles.

## Practice Problems

7. Calculate the de Broglie wavelength of a proton accelerated through 1000 V.

8. An electron and a photon have the same momentum. Which has greater wavelength?

9. Find the kinetic energy of a neutron whose de Broglie wavelength is 1 Å.

## Key Insights

1. **Wave-Particle Duality**: All matter exhibits both wave and particle properties
2. **Size Matters**: Wavelength decreases with increasing mass and velocity
3. **Uncertainty Principle**: Wave nature implies fundamental limits on measurement precision
4. **Quantum Mechanics Foundation**: de Broglie's hypothesis led to Schrödinger's wave equation
`;

db.prepare(`
  INSERT INTO lessons (module_id, title, content, lesson_type, order_index, duration_minutes)
  VALUES (?, ?, ?, ?, ?, ?)
`).run(modernPhysicsModuleId, 'de Broglie Wavelength and Matter Waves', lesson3Content, 'theory', 3, 80);

console.log('Created 3 comprehensive theory lessons for Modern Physics');

// Now create questions for Modern Physics
const questions = [
  // MCQ Questions
  {
    question_text: "Light of wavelength 400 nm is incident on a metal surface with work function 2.0 eV. The maximum kinetic energy of emitted electrons is:",
    question_type: "MCQ",
    difficulty: "medium",
    marks: 4,
    options: JSON.stringify(["0.5 eV", "1.1 eV", "2.0 eV", "3.1 eV"]),
    correct_answer: "1.1 eV",
    explanation: "Energy of photon E = hc/λ = 1240/400 = 3.1 eV. Maximum KE = E - W₀ = 3.1 - 2.0 = 1.1 eV.",
    topic: "Photoelectric Effect"
  },
  {
    question_text: "In photoelectric effect, if the frequency of incident radiation is doubled, the stopping potential will:",
    question_type: "MCQ",
    difficulty: "medium",
    marks: 4,
    options: JSON.stringify(["Remain same", "Be doubled", "Increase but not double", "Become more than double"]),
    correct_answer: "Become more than double",
    explanation: "V₀ = (hν - W₀)/e. When frequency is doubled: V₀' = (2hν - W₀)/e > 2V₀ because work function term doesn't double.",
    topic: "Photoelectric Effect"
  },
  {
    question_text: "An electron is accelerated through 100 V. Its de Broglie wavelength is approximately:",
    question_type: "MCQ",
    difficulty: "easy",
    marks: 4,
    options: JSON.stringify(["0.12 Å", "1.23 Å", "12.3 Å", "123 Å"]),
    correct_answer: "1.23 Å",
    explanation: "Using formula λ = 12.27/√V = 12.27/√100 = 1.227 Å ≈ 1.23 Å",
    topic: "de Broglie Wavelength"
  },
  {
    question_text: "Which of the following has the largest de Broglie wavelength if all have equal velocity?",
    question_type: "MCQ",
    difficulty: "easy",
    marks: 4,
    options: JSON.stringify(["Electron", "Proton", "Alpha particle", "Neutron"]),
    correct_answer: "Electron",
    explanation: "λ = h/mv. For same velocity, wavelength is inversely proportional to mass. Electron has smallest mass, hence largest wavelength.",
    topic: "de Broglie Wavelength"
  },
  {
    question_text: "The threshold wavelength for a metal is 500 nm. The work function of the metal is:",
    question_type: "MCQ",
    difficulty: "medium",
    marks: 4,
    options: JSON.stringify(["1.24 eV", "2.48 eV", "3.72 eV", "4.96 eV"]),
    correct_answer: "2.48 eV",
    explanation: "W₀ = hc/λ₀ = 1240 eV·nm / 500 nm = 2.48 eV",
    topic: "Photoelectric Effect"
  },
  {
    question_text: "If the intensity of incident radiation in photoelectric effect is increased:",
    question_type: "MCQ",
    difficulty: "easy",
    marks: 4,
    options: JSON.stringify(["Stopping potential increases", "Work function increases", "Saturation current increases", "Threshold frequency decreases"]),
    correct_answer: "Saturation current increases",
    explanation: "Intensity affects only the number of photons, hence number of emitted electrons, thus saturation current. It doesn't affect stopping potential, work function, or threshold frequency.",
    topic: "Photoelectric Effect"
  },
  {
    question_text: "A photon and an electron have the same de Broglie wavelength. Which has greater energy?",
    question_type: "MCQ",
    difficulty: "hard",
    marks: 4,
    options: JSON.stringify(["Photon", "Electron", "Both have same energy", "Cannot be determined"]),
    correct_answer: "Photon",
    explanation: "For same λ: photon E = hc/λ; electron E = p²/2m = h²/2mλ². Since hc >> h²/2mλ² for any wavelength, photon has much greater energy.",
    topic: "de Broglie Wavelength"
  },
  {
    question_text: "In Davisson-Germer experiment, the wave nature of electrons was confirmed by observing:",
    question_type: "MCQ",
    difficulty: "medium",
    marks: 4,
    options: JSON.stringify(["Photoelectric effect", "Diffraction pattern", "Compton scattering", "Pair production"]),
    correct_answer: "Diffraction pattern",
    explanation: "Davisson-Germer observed electron diffraction from nickel crystal, confirming wave nature of electrons.",
    topic: "de Broglie Wavelength"
  },
  // Integer Type Questions
  {
    question_text: "Light of wavelength 300 nm is incident on a metal with work function 2 eV. The stopping potential in volts is ____. (Answer as integer)",
    question_type: "INTEGER",
    difficulty: "medium",
    marks: 4,
    options: null,
    correct_answer: "2",
    explanation: "E = 1240/300 = 4.13 eV. KE_max = 4.13 - 2 = 2.13 eV. V₀ = 2.13 V ≈ 2 V (integer)",
    topic: "Photoelectric Effect"
  },
  {
    question_text: "An electron is accelerated through a potential of 144 V. Its de Broglie wavelength in Angstrom is ____. (Round to nearest integer)",
    question_type: "INTEGER",
    difficulty: "medium",
    marks: 4,
    options: null,
    correct_answer: "1",
    explanation: "λ = 12.27/√144 = 12.27/12 = 1.02 Å ≈ 1 Å",
    topic: "de Broglie Wavelength"
  },
  // Assertion-Reason Questions
  {
    question_text: "Assertion (A): Photoelectric effect cannot be explained by wave theory of light.\nReason (R): In photoelectric effect, electrons are ejected instantaneously without time lag.",
    question_type: "ASSERTION_REASON",
    difficulty: "medium",
    marks: 4,
    options: JSON.stringify([
      "Both A and R are true and R is correct explanation of A",
      "Both A and R are true but R is not correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ]),
    correct_answer: "Both A and R are true and R is correct explanation of A",
    explanation: "Wave theory cannot explain instantaneous emission and threshold frequency. The instantaneous emission (reason) is one of the key observations that wave theory fails to explain.",
    topic: "Photoelectric Effect"
  },
  {
    question_text: "Assertion (A): de Broglie wavelength of electron is much larger than that of proton when both have same kinetic energy.\nReason (R): de Broglie wavelength is inversely proportional to square root of mass for particles with same KE.",
    question_type: "ASSERTION_REASON",
    difficulty: "hard",
    marks: 4,
    options: JSON.stringify([
      "Both A and R are true and R is correct explanation of A",
      "Both A and R are true but R is not correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ]),
    correct_answer: "Both A and R are true and R is correct explanation of A",
    explanation: "Since λ = h/√(2mKE), for same KE, λ ∝ 1/√m. Electron has much smaller mass than proton, hence larger wavelength.",
    topic: "de Broglie Wavelength"
  },
  // More MCQs for variety
  {
    question_text: "The slope of the graph between stopping potential and frequency in photoelectric effect gives:",
    question_type: "MCQ",
    difficulty: "medium",
    marks: 4,
    options: JSON.stringify(["h", "h/e", "e/h", "he"]),
    correct_answer: "h/e",
    explanation: "eV₀ = hν - W₀, so V₀ = (h/e)ν - W₀/e. Slope of V₀ vs ν graph is h/e.",
    topic: "Photoelectric Effect"
  },
  {
    question_text: "For which of the following particles will the de Broglie wavelength be maximum if all are moving with the same velocity?",
    question_type: "MCQ",
    difficulty: "easy",
    marks: 4,
    options: JSON.stringify(["Proton", "Electron", "Deuteron", "Alpha particle"]),
    correct_answer: "Electron",
    explanation: "λ = h/mv. For same v, λ is maximum for minimum mass. Electron has the smallest mass.",
    topic: "de Broglie Wavelength"
  },
  {
    question_text: "A photocell is illuminated by a small bright source placed 1 m away. When the same source is placed 2 m away, the number of electrons emitted by photocathode would:",
    question_type: "MCQ",
    difficulty: "medium",
    marks: 4,
    options: JSON.stringify(["Decrease by a factor of 4", "Decrease by a factor of 2", "Increase by a factor of 4", "Remain same"]),
    correct_answer: "Decrease by a factor of 4",
    explanation: "Intensity ∝ 1/r². When distance doubles, intensity becomes 1/4. Since number of electrons ∝ intensity, count reduces by factor of 4.",
    topic: "Photoelectric Effect"
  }
];

console.log(`Creating ${questions.length} questions for Modern Physics...`);

for (const q of questions) {
  db.prepare(`
    INSERT INTO questions (module_id, question_text, question_type, difficulty, marks, options, correct_answer, explanation, topic)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    modernPhysicsModuleId,
    q.question_text,
    q.question_type,
    q.difficulty,
    q.marks,
    q.options,
    q.correct_answer,
    q.explanation,
    q.topic
  );
}

console.log('Questions created successfully!');

// Create assessments for Modern Physics
// 1. Daily Practice Problem (DPP)
const dppResult = db.prepare(`
  INSERT INTO assessments (module_id, title, description, assessment_type, duration_minutes, total_marks)
  VALUES (?, ?, ?, ?, ?, ?)
`).run(
  modernPhysicsModuleId,
  'Modern Physics - DPP 1',
  'Daily Practice Problems covering Photoelectric Effect and de Broglie Wavelength. Contains 10 questions of varying difficulty.',
  'DPP',
  45,
  40
);

const dppId = dppResult.lastInsertRowid;

// Add 10 questions to DPP (first 10 from our questions)
const allQuestions = db.prepare('SELECT id FROM questions WHERE module_id = ? LIMIT 10').all(modernPhysicsModuleId);
allQuestions.forEach((q, index) => {
  db.prepare(`
    INSERT INTO assessment_questions (assessment_id, question_id, order_index)
    VALUES (?, ?, ?)
  `).run(dppId, q.id, index + 1);
});

console.log('Created DPP assessment');

// 2. Chapter Test
const chapterTestResult = db.prepare(`
  INSERT INTO assessments (module_id, title, description, assessment_type, duration_minutes, total_marks)
  VALUES (?, ?, ?, ?, ?, ?)
`).run(
  modernPhysicsModuleId,
  'Modern Physics - Chapter Test',
  'Comprehensive test on Modern Physics covering all topics: Photoelectric Effect, de Broglie Wavelength, and applications. 15 questions.',
  'CHAPTER_TEST',
  90,
  60
);

const chapterTestId = chapterTestResult.lastInsertRowid;

// Add all 15 questions to chapter test
const chapterQuestions = db.prepare('SELECT id FROM questions WHERE module_id = ?').all(modernPhysicsModuleId);
chapterQuestions.forEach((q, index) => {
  db.prepare(`
    INSERT INTO assessment_questions (assessment_id, question_id, order_index)
    VALUES (?, ?, ?)
  `).run(chapterTestId, q.id, index + 1);
});

console.log('Created Chapter Test assessment');

// 3. Mock Test
const mockTestResult = db.prepare(`
  INSERT INTO assessments (module_id, title, description, assessment_type, duration_minutes, total_marks)
  VALUES (?, ?, ?, ?, ?, ?)
`).run(
  modernPhysicsModuleId,
  'JEE Advanced - Modern Physics Mock Test',
  'Full-length mock test simulating JEE Advanced pattern. Contains advanced level questions on Modern Physics.',
  'MOCK_TEST',
  120,
  60
);

const mockTestId = mockTestResult.lastInsertRowid;

// Add questions to mock test
chapterQuestions.forEach((q, index) => {
  db.prepare(`
    INSERT INTO assessment_questions (assessment_id, question_id, order_index)
    VALUES (?, ?, ?)
  `).run(mockTestId, q.id, index + 1);
});

console.log('Created Mock Test assessment');

console.log('\n✅ Database seeded successfully!');
console.log('\nSummary:');
console.log('- 1 Course (Physics)');
console.log('- 1 Module (Modern Physics)');
console.log('- 3 Comprehensive Theory Lessons');
console.log(`- ${questions.length} Practice Questions (MCQ, Integer, Assertion-Reason)`);
console.log('- 3 Assessments (DPP, Chapter Test, Mock Test)');
console.log('\nDatabase ready for use!');
