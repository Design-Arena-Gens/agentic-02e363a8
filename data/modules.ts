export type LearningArtifact = {
  heading: string;
  description: string;
  objective: string;
};

export type Lesson = {
  title: string;
  description: string;
  keyIdeas: string[];
  activity: string;
  artifact: LearningArtifact;
};

export type Module = {
  slug: string;
  title: string;
  tagline: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  summary: string;
  coverGradient: string;
  prerequisites: string[];
  outcomes: string[];
  conceptHighlights: string[];
  lessons: Lesson[];
};

export const modules: Module[] = [
  {
    slug: "quantum-fundamentals",
    title: "Quantum Fundamentals",
    tagline: "Build intuition for qubits, measurement, and probability amplitudes.",
    level: "Beginner",
    duration: "2.5 hours",
    summary:
      "Start with the mental models that make quantum mechanics feel less mysterious. Learn how qubits encode information, why measurement collapses a state, and how complex numbers capture probability amplitudes.",
    coverGradient: "linear-gradient(135deg, rgba(124,58,237,0.85), rgba(20,184,166,0.75))",
    prerequisites: [
      "Comfort with algebra and complex numbers",
      "Understanding of classical bits and binary",
      "Curiosity about how the physical world encodes information"
    ],
    outcomes: [
      "Explain the Bloch sphere representation of a single qubit",
      "Describe superposition, phase, and measurement in precise language",
      "Translate between state vector notation and intuitive descriptions"
    ],
    conceptHighlights: ["Qubit state vectors", "Amplitude and probability", "Bloch sphere"],
    lessons: [
      {
        title: "Qubits vs Classical Bits",
        description:
          "Contrast classical bits with quantum bits by exploring probability amplitudes and the idea of a basis state.",
        keyIdeas: [
          "Ket notation and basis states",
          "Complex probability amplitudes",
          "Measurement and collapse"
        ],
        activity: "Manipulate single qubit states in an interactive Bloch sphere demo.",
        artifact: {
          heading: "State Vector Cheat Sheet",
          description: "Summarize the |0⟩, |1⟩ basis, superposition states, and measurement probabilities.",
          objective: "Show you can reason about amplitudes and measurement outcomes."
        }
      },
      {
        title: "Visualizing the Bloch Sphere",
        description:
          "Use geometric intuition to map each qubit state to coordinates on the Bloch sphere and interpret rotations as quantum operations.",
        keyIdeas: [
          "Polar coordinates for qubit states",
          "Global vs relative phase",
          "Equators, poles, and amplitude magnitude"
        ],
        activity: "Sketch and label important states on the Bloch sphere using provided templates.",
        artifact: {
          heading: "Bloch Sphere Sketch",
          description: "Render |+⟩, |−⟩, and imaginary axis states with notes on their meaning.",
          objective: "Demonstrate directional reasoning about phase and amplitude."
        }
      }
    ]
  },
  {
    slug: "single-qubit-gates",
    title: "Single-Qubit Gates",
    tagline: "Master the core gates that rotate and reveal qubit states.",
    level: "Beginner",
    duration: "3 hours",
    summary:
      "Explore the Pauli matrices, the Hadamard gate, and how rotations about the X, Y, and Z axes manipulate qubit state vectors. Understand circuits as sequences of matrix multiplications applied to state vectors.",
    coverGradient: "linear-gradient(135deg, rgba(59,130,246,0.9), rgba(124,58,237,0.75))",
    prerequisites: [
      "Matrix multiplication and linear algebra",
      "Module: Quantum Fundamentals"
    ],
    outcomes: [
      "Interpret single-qubit gates as geometric rotations",
      "Compose simple circuits and reason about resulting states",
      "Explain how the Hadamard gate creates superposition"
    ],
    conceptHighlights: ["Pauli matrices", "Hadamard gate", "Rotation operators"],
    lessons: [
      {
        title: "Matrix Language for Quantum Operations",
        description:
          "Introduce how linear algebra provides the machinery for quantum gates. Translate between matrix notation and conceptual rotations.",
        keyIdeas: [
          "Unitary matrices",
          "Matrix multiplication as gate application",
          "Euler angle decomposition"
        ],
        activity: "Compute gate compositions using provided mini circuit puzzles.",
        artifact: {
          heading: "Gate Composition Walkthrough",
          description: "Document how a sequence of gates transforms an initial |0⟩ state step-by-step.",
          objective: "Prove fluency in converting between algebraic and intuitive descriptions."
        }
      },
      {
        title: "Hadamard and Phase Gates",
        description:
          "Dive into the H and phase family of gates as engines for interference. See interference patterns produce deterministic measurement outcomes.",
        keyIdeas: [
          "Constructive vs destructive interference",
          "Phase kickback intuition",
          "Circuit symmetries"
        ],
        activity: "Analyze a Mach-Zehnder interferometer analog using H and Z gates.",
        artifact: {
          heading: "Interference Notebook",
          description: "Explain how phase differences steer measurement probabilities in a two-path circuit.",
          objective: "Connect mathematical phase shifts to observed measurement statistics."
        }
      }
    ]
  },
  {
    slug: "entanglement-circuits",
    title: "Entanglement & Multi-Qubit Circuits",
    tagline: "Learn to create and diagnose entanglement, correlations, and measurement outcomes.",
    level: "Intermediate",
    duration: "3.5 hours",
    summary:
      "Construct multi-qubit states, apply controlled operations, and reason about entanglement entropy. Use truth tables and matrix tensor products to step through two-qubit circuits.",
    coverGradient: "linear-gradient(135deg, rgba(14,165,233,0.85), rgba(139,92,246,0.85))",
    prerequisites: [
      "Modules: Quantum Fundamentals & Single-Qubit Gates",
      "Familiarity with tensor products"
    ],
    outcomes: [
      "Determine whether a two-qubit state is separable or entangled",
      "Explain how CNOT and CZ gates generate correlations",
      "Predict measurement outcomes from Bell states"
    ],
    conceptHighlights: ["Tensor products", "CNOT mechanics", "Bell states"],
    lessons: [
      {
        title: "Tensor Products & State Construction",
        description:
          "Use tensor products to build multi-qubit states from single qubit components. Practice with Dirac notation and matrix representations.",
        keyIdeas: [
          "Kronecker products",
          "Basis ordering conventions",
          "Normalization in multi-qubit systems"
        ],
        activity: "Decompose arbitrary two-qubit states and check normalization.",
        artifact: {
          heading: "Tensor Toolkit",
          description: "Reference sheet explaining how to read and build multi-qubit Dirac expressions.",
          objective: "Demonstrate ease translating between representations."
        }
      },
      {
        title: "Creating and Measuring Bell States",
        description:
          "Walk through how controlled gates entangle qubits. Use measurement simulations to see correlated outcomes and entanglement swapping.",
        keyIdeas: [
          "Bell basis",
          "Entanglement entropy",
          "Measurement correlations"
        ],
        activity: "Map the probability distribution of Bell state measurements using small simulations.",
        artifact: {
          heading: "Bell State Decoder",
          description: "Flowchart explaining how to prepare and measure each Bell state.",
          objective: "Show comprehension of entanglement as more than classical correlation."
        }
      }
    ]
  },
  {
    slug: "quantum-algorithms",
    title: "Quantum Algorithms & Applications",
    tagline: "Bridge circuits and algorithms with real-world problem framing.",
    level: "Advanced",
    duration: "4 hours",
    summary:
      "Follow the journey from reversible computation to algorithms like Deutsch-Jozsa, Grover, and Quantum Phase Estimation. Explore why quantum accelerations matter and where they do not.",
    coverGradient: "linear-gradient(135deg, rgba(244,114,182,0.85), rgba(99,102,241,0.82))",
    prerequisites: [
      "Modules: Fundamentals, Gates, and Entanglement",
      "Exposure to algorithmic complexity"
    ],
    outcomes: [
      "Describe algorithmic speedups and their trade-offs",
      "Outline the structure of Grover and QPE circuits",
      "Evaluate when noise and decoherence limit algorithmic value"
    ],
    conceptHighlights: ["Oracle model", "Amplitude amplification", "Phase estimation"],
    lessons: [
      {
        title: "Deutsch-Jozsa and Oracle Thinking",
        description:
          "Use the promise problem setting to understand how superposition queries give global information with one circuit execution.",
        keyIdeas: [
          "Oracle black boxes",
          "Promise problems",
          "Interference as computation"
        ],
        activity: "Implement the Deutsch circuit in a browser-based simulator and analyze outputs.",
        artifact: {
          heading: "Oracle Reflection Log",
          description: "Document insights from altering the oracle and observing measurement patterns.",
          objective: "Show ability to reason about interference-driven algorithms."
        }
      },
      {
        title: "Grover and QPE Playbook",
        description:
          "Compare Grover's search with Quantum Phase Estimation to appreciate amplitude amplification vs phase kickback techniques.",
        keyIdeas: [
          "Diffusion operator",
          "Iterative vs standard QPE",
          "Fault-tolerance considerations"
        ],
        activity: "Simulate amplitude amplification steps and visualize probability spikes.",
        artifact: {
          heading: "Algorithm Comparison Grid",
          description: "Side-by-side breakdown of circuit blocks, complexity classes, and resource counts.",
          objective: "Capture algorithm structure in a format ready for quick recall."
        }
      }
    ]
  }
];

export const getModuleBySlug = (slug: string) =>
  modules.find((module) => module.slug === slug);
