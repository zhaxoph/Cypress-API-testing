describe("Test all characters graphql call and evaluate the asserts with the Smith Family", () => {
  let smithFamily;
  before(() => {
    cy.fixture("/useCase.json").then((data) => {
      smithFamily = data.allCharactersUseCase.smithFamily; // get the smithFamily array from the fixture
    });
  });
  it("gets all characters with name Rick Sanchez and its status Alive", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query Characters($name: String, $status: String)
                    {characters(filter: {name: $name, status: $status}) {
                results {
                    id 
                    name 
                    status 
                    species
                location{
                    name
                }
                image
                }}}`,
        variables: {
          name: smithFamily[0].name, // get the name from the fixture
          status: smithFamily[0].status, // get the status from the fixture
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.characters.results[0].name).to.eq(
        smithFamily[0].name
      ); // assert the name of the character
      expect(response.body.data.characters.results[0].status).to.eq(
        smithFamily[0].status
      ); // assert the status of the character
    });
  });
  it("gets all characters with name Morty Smith and its status Alive", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query Characters($name: String, $status: String)
                    {characters(filter: {name: $name, status: $status}) {
                results {
                    id 
                    name 
                    status 
                    species
                location{
                    name
                }
                image
                }}}`,
        variables: {
          name: smithFamily[1].name, // get the name from the fixture
          status: smithFamily[1].status, // get the status from the fixture
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.characters.results[0].name).to.eq(
        smithFamily[1].name
      ); // assert the name of the character
      expect(response.body.data.characters.results[0].status).to.eq(
        smithFamily[1].status
      ); // assert the status of the character
    });
  });

  it("gets all characters with name Beth Smith and its status Alive", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query Characters($name: String, $status: String)
                    {characters(filter: {name: $name, status: $status}) {
                results {
                    id 
                    name 
                    status 
                    species
                location{
                    name
                }
                image
                }}}`,
        variables: {
          name: smithFamily[2].name, // get the name from the fixture
          status: smithFamily[2].status, // get the status from the fixture
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.characters.results[0].name).to.eq(
        smithFamily[2].name
      ); // assert the name of the character
      expect(response.body.data.characters.results[0].status).to.eq(
        smithFamily[2].status
      ); // assert the status of the character
    });
  });
  it("gets all characters with name Jerry Smith and its status Alive", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query Characters($name: String, $status: String)
                    {characters(filter: {name: $name, status: $status}) {
                results {
                    id 
                    name 
                    status 
                    species
                location{
                    name
                }
                image
                }}}`,
        variables: {
          name: smithFamily[3].name, // get the name from the fixture
          status: smithFamily[3].status, // get the status from the fixture
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.characters.results[0].name).to.eq(
        smithFamily[3].name
      ); // assert the name of the character
      expect(response.body.data.characters.results[0].status).to.eq(
        smithFamily[3].status
      ); // assert the status of the character
    });
  });
  it("gets all characters with name Summer Smith and its status Alive", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query Characters($name: String, $status: String)
                    {characters(filter: {name: $name, status: $status}) {
                results {
                    id 
                    name 
                    status 
                    species
                location{
                    name
                }
                image
                }}}`,
        variables: {
          name: smithFamily[4].name, // get the name from the fixture
          status: smithFamily[4].status, // get the status from the fixture
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.characters.results[0].name).to.eq(
        smithFamily[4].name
      ); // assert the name of the character
      expect(response.body.data.characters.results[0].status).to.eq(
        smithFamily[4].status
      ); // assert the status of the character
    });
  });
});
