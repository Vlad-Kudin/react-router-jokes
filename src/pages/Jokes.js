import JokeList from "../components/jokes/JokeList"

const DUMMY_JOKES = [
  {
    id: 'j1',
    topic: "Programming",
    text: 'How many programers does it take to chmge a light bulb? None - Its a hardware problem',
  },
  {
    id: 'j2',
    topic: "General",
    text: 'How many bones are in the human hand? A handful of them.',
  }
];

const Jokes = () => {
  return <JokeList jokes={DUMMY_JOKES} />
};

export default Jokes;