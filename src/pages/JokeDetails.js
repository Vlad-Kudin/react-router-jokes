import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";

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

const JokeDetails = () => {
  const params = useParams();
  const joke = DUMMY_JOKES.find(joke => joke.id === params.jokeId);
  
  if (!joke) {
    return (
      <h1 className="centered">Joke not found</h1>
    )
  }
  return (
    <Fragment>
      <HighlightedJoke text={joke.text} topic={joke.topic} />
      <Route path={`/jokes/${params.jokeId}`} exact>
        <div className='centered'>
          <Link className='btn--empty' to={`/jokes/${params.jokeId}/comments`}>
            Show comments
          </Link>
        </div>
      </Route>
      <Route path={`/jokes/${params.jokeId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
  
  
};

export default JokeDetails;