export type Resource = {
  title: string;
  url: string;
  description: string;
  category: "Primer" | "Simulation" | "Course" | "Paper" | "Community" | "Toolkit";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration?: string;
};

export const curatedResources: Resource[] = [
  {
    title: "Qubit by Qubit: Introduction to Quantum Computing",
    url: "https://www.qubitbyqubit.org/intro",
    description: "Accessible multi-week program designed for students entering quantum computing for the first time.",
    category: "Course",
    level: "Beginner",
    duration: "10 weeks"
  },
  {
    title: "IBM Quantum Composer",
    url: "https://quantum-computing.ibm.com/composer",
    description: "Drag-and-drop circuit builder with real device execution for experimenting with small qubit systems.",
    category: "Simulation",
    level: "Beginner"
  },
  {
    title: "Qiskit Textbook",
    url: "https://qiskit.org/textbook",
    description: "Interactive open-source textbook blending theory with hands-on code examples using Qiskit.",
    category: "Primer",
    level: "Intermediate"
  },
  {
    title: "PennyLane Demos",
    url: "https://pennylane.ai/qml/demos",
    description: "Collection of notebooks showcasing variational algorithms, quantum machine learning, and photonic circuits.",
    category: "Toolkit",
    level: "Intermediate"
  },
  {
    title: "Quantum Computing Stack Exchange",
    url: "https://quantumcomputing.stackexchange.com",
    description: "Active question and answer community for clarifying theory, math, and implementation details.",
    category: "Community",
    level: "Intermediate"
  },
  {
    title: "An Introduction to Quantum Computing",
    url: "https://arxiv.org/abs/0804.2278",
    description: "Classic arXiv survey paper covering the circuit model, algorithms, and error correction fundamentals.",
    category: "Paper",
    level: "Advanced"
  },
  {
    title: "Quantum Algorithm Zoo",
    url: "https://quantumalgorithmzoo.org",
    description: "Extensive catalog summarizing known quantum algorithms, the problems they solve, and resource estimates.",
    category: "Toolkit",
    level: "Advanced"
  }
];

type PracticePrompt = {
  title: string;
  teaser: string;
  tags: string[];
};

export const practicePrompts: PracticePrompt[] = [
  {
    title: "Map a classical Boolean function onto a quantum oracle",
    teaser:
      "Choose a simple three-bit function and show how it becomes a reversible oracle circuit using ancilla qubits.",
    tags: ["Reversible logic", "Oracle design", "Ancilla management"]
  },
  {
    title: "Design a mini error mitigation experiment",
    teaser:
      "Build a two-qubit entanglement circuit, sample noisy shots from a simulator, and apply readout error mitigation.",
    tags: ["Noise", "Error mitigation", "Measurement"]
  },
  {
    title: "Compare resource counts across hardware backends",
    teaser:
      "Write down how the same quantum Fourier transform circuit would map to superconducting versus photonic platforms.",
    tags: ["Hardware", "Resource estimation", "Fourier transform"]
  }
];
