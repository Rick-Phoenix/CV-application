export default function Header({ step }) {
  const content = [
    "Welcome to HireMe, your career building buddy. Click on the button below to start",
    "Let's start with some basic information about you.",
    "How would you describe yourself in a few words?",
    "What is your educational background?",
    "Tell me about your past professional experiences.",
    "Lastly, what are your favourite hobbies and passions?",
    "Well done! You will receive your new CV in a few seconds...",
  ];

  return <h1>{content[step]}</h1>;
}
