export type GlossaryEntry = {
  term: string;
  definition: string;
  context: string;
  related: string[];
};

export const glossary: GlossaryEntry[] = [
  {
    term: "Amplitude",
    definition:
      "Complex number associated with the probability of a quantum state. Its magnitude squared gives the probability of measuring that state.",
    context: "Appears whenever you convert between state vector notation and measurement probabilities.",
    related: ["State Vector", "Probability"]
  },
  {
    term: "Bloch Sphere",
    definition:
      "Geometric representation of a single qubit state as a point on the surface of a sphere, capturing phase and amplitude relationships.",
    context: "Useful for visualizing single-qubit gates as rotations.",
    related: ["Qubit", "Rotation"]
  },
  {
    term: "Entanglement",
    definition:
      "Quantum correlation where the state of one particle cannot be described independently of another, even when separated by large distances.",
    context: "Key resource for quantum teleportation, error correction, and non-classical correlations.",
    related: ["Bell State", "CNOT", "Non-locality"]
  },
  {
    term: "Hadamard Gate",
    definition:
      "Single-qubit gate that creates an equal superposition of |0⟩ and |1⟩ or converts superpositions back to computational basis states.",
    context: "Foundation for algorithms that rely on interference.",
    related: ["Superposition", "Interference", "Pauli Gates"]
  },
  {
    term: "Quantum Phase Estimation",
    definition:
      "Algorithm that retrieves the phase (eigenvalue) of a unitary operator, forming the core of many quantum algorithms.",
    context: "Used inside Shor's algorithm and for Hamiltonian simulation.",
    related: ["Fourier Transform", "Eigenvalue", "Controlled Unitary"]
  },
  {
    term: "Superposition",
    definition:
      "Principle allowing a quantum system to exist in multiple states simultaneously until measured.",
    context: "Creates the parallelism that algorithms exploit before measurement.",
    related: ["Amplitude", "Qubit", "Measurement"]
  }
];
