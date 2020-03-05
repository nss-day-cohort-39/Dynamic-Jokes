import { useJokeData } from "./JokeDataProvider.js";
import JokeHTML from "./Joke.js"
// Target where data should appear
const contentTarget = document.querySelector(".jokeList")

export const JokeRender = () => {
const JokeArray = useJokeData()
// Add to the existing HTML in the content element    
    for (const joke of JokeArray){
    contentTarget.innerHTML+= JokeHTML(joke)
    }
}

export default JokeRender