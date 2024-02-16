async function response() {
  let btn = document.getElementById("next");
  let input = document.getElementById("input");
  let image = document.getElementById("image");

  btn.addEventListener("click", async () => {
    try {
      let inputValue = input.value.toLowerCase();
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputValue}`
      );

      if (!response.ok) {
        image.style.backgroundImage = `url("1548784.png")`;
        throw new Error("Pokemon not found");
      }

      const data = await response.json();
      const pokemonsprite = data.sprites.front_default;

      image.style.backgroundImage = `url(${pokemonsprite})`;
    } catch (error) {
      console.error(error.message);
    }
  });
}

response();
