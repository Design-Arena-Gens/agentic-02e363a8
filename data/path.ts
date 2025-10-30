export type PathMilestone = {
  step: number;
  title: string;
  description: string;
  focus: string[];
  deliverable: string;
};

export const learningPath: PathMilestone[] = [
  {
    step: 1,
    title: "Build Quantum Intuition",
    description:
      "Use visual metaphors to develop comfort with complex amplitudes, Bloch spheres, and measurement collapse.",
    focus: ["State vectors", "Measurement theory", "Probability"],
    deliverable: "Concept sketchbook documenting single-qubit states"
  },
  {
    step: 2,
    title: "Manipulate Single Qubits",
    description:
      "Practice applying the Pauli family, rotation gates, and Hadamard to steer state vectors and interference patterns.",
    focus: ["Unitary gates", "Circuit notation", "Interference"],
    deliverable: "Worked examples of gate compositions with measurement predictions"
  },
  {
    step: 3,
    title: "Engineer Entanglement",
    description:
      "Scale circuits to two qubits and beyond, using tensor products and controlled gates to create non-classical correlations.",
    focus: ["Tensor products", "Bell states", "Controlled operations"],
    deliverable: "Report analyzing entanglement metrics for prepared states"
  },
  {
    step: 4,
    title: "Prototype Algorithms",
    description:
      "Combine gate primitives into algorithmic blocks like oracles, diffusion operators, and phase estimation routines.",
    focus: ["Algorithm design", "Complexity", "Noise mitigation"],
    deliverable: "Algorithm storyboard connecting problem statement to quantum circuit"
  }
];
