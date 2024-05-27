describe("Test CharactersByIds graphql call and evaluate the asserts", () => {
  let smithFamily; // declare a variable to store the smithFamily array from the fixture
  before(() => {
    cy.fixture("/useCase.json").then((data) => {
      smithFamily = data.allCharactersIDUseCase.smithFamily; // get the smithFamily array from the fixture
    });
  });
  it("Gets all characters by id 1 with name Rick Sanchez and its status Alive", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query CharactersbyIds($ids: [ID!]!)
                    {charactersByIds(ids: $ids) {
              
                    id 
                    name 
                    status 
                    species
                location{
                    name
                }
                image
                }}`,
        variables: {
          ids: smithFamily[0].id,
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.charactersByIds[0].id).to.eq(
        `${smithFamily[0].id}`
      ); // assert the id of the character
      expect(response.body.data.charactersByIds[0].name).to.eq(
        smithFamily[0].name
      ); // assert the name of the character
      expect(response.body.data.charactersByIds[0].status).to.eq(
        smithFamily[0].status
      );
    });
  });
  it("Gets all characters by id 2 with name Morty Smith and its status Alive", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query CharactersbyIds($ids: [ID!]!)
                    {charactersByIds(ids: $ids) {
                    id 
                    name 
                    status 
                    species
                location{
                    name
                }
                image
                }}`,
        variables: {
          ids: smithFamily[1].id,
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.charactersByIds[0].id).to.eq(
        `${smithFamily[1].id}`
      ); // assert the id of the character
      expect(response.body.data.charactersByIds[0].name).to.eq(
        smithFamily[1].name
      ); // assert the name of the character
      expect(response.body.data.charactersByIds[0].status).to.eq(
        smithFamily[1].status
      );
    });
  });

  it("Gets all characters by id 4 with name Beth Smith and its status Alive", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query CharactersbyIds($ids: [ID!]!)
                    {charactersByIds(ids: $ids) {
                    id 
                    name 
                    status 
                    species
                location{
                    name
                }
                image
                }}`,
        variables: {
          ids: smithFamily[2].id,
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.charactersByIds[0].id).to.eq(
        `${smithFamily[2].id}`
      ); // assert the id of the character
      expect(response.body.data.charactersByIds[0].name).to.eq(
        smithFamily[2].name
      ); // assert the name of the character
      expect(response.body.data.charactersByIds[0].status).to.eq(
        smithFamily[2].status
      );
    });
  });
  it("Gets all characters by id 5 with name Jerry Smith and its status Alive", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query CharactersbyIds($ids: [ID!]!)
                    {charactersByIds(ids: $ids) {
                    id 
                    name 
                    status 
                    species
                location{
                    name
                }
                image
                }}`,
        variables: {
          ids: smithFamily[3].id,
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.charactersByIds[0].id).to.eq(
        `${smithFamily[3].id}`
      ); // assert the id of the character
      expect(response.body.data.charactersByIds[0].name).to.eq(
        smithFamily[3].name
      ); // assert the name of the character
      expect(response.body.data.charactersByIds[0].status).to.eq(
        smithFamily[3].status
      );
    });
  });
  it("Gets all characters by id 3 with name Summer Smith and its status Alive", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query CharactersbyIds($ids: [ID!]!)
                    {charactersByIds(ids: $ids) {
                    id 
                    name 
                    status 
                    species
                location{
                    name
                }
                image
                }}`,
        variables: {
          ids: smithFamily[4].id,
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.charactersByIds[0].id).to.eq(
        `${smithFamily[4].id}`
      ); // assert the id of the character
      expect(response.body.data.charactersByIds[0].name).to.eq(
        smithFamily[4].name
      ); // assert the name of the character
      expect(response.body.data.charactersByIds[0].status).to.eq(
        smithFamily[4].status
      );
    });
  });
  it("Gets all characters by multiple ids and assert status as Alive, Human and not Aliens", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query CharactersbyIds($ids: [ID!]!)
                    {charactersByIds(ids: $ids) {
                    id 
                    name 
                    status 
                    species
                location{
                    name
                }
                image
                }}`,
        variables: {
          ids: [
            smithFamily[0].id,
            smithFamily[1].id,
            smithFamily[2].id,
            smithFamily[3].id,
            smithFamily[4].id,
          ],
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      let characters = response.body.data.charactersByIds; // get the characters array from the response
      characters.forEach((element) => {
        // loop through the characters array
        expect(element.status).to.eq("Alive"); // assert the status of the character
        expect(element.species).to.eq("Human"); // assert the species of the character
        expect(element.species).to.not.eq("Alien"); // assert the species of the character
      });
    });
  });
});
