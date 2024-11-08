export default function Nav({ step, nextStep, previousStep }) {
  if (step === 0) return <button onClick={nextStep}>{"Let's start!"}</button>;
}
