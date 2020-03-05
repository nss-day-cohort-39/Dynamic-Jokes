const JokeHTML = (countryObject) => {
    return `
    <section class="oneJoke">
      <ul>
        <li>${countryObject.question}</li>
        <li>${countryObject.answer}</li>
      </ul>
    </section>
 `
}
export default JokeHTML