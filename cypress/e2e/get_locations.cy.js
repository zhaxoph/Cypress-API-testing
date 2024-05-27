describe("Test locations graphql calls and evaluate the asserts", () => {
  let locations; // declare a variable to store the locations array from the fixture
  before(() => {
    cy.fixture("/useCase.json").then((data) => {
      locations = data.dimensionLocations.c137; // get the locations array from the fixture
    });
  });
  it("Gets location 1 within the dimension C-137 and their location type", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query Location($locationId: ID!) {
            location(id: $locationId) {
              created
              dimension
              id
              name
              type
            }
          }`,
        variables: {
          locationId: locations[0].id,
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.location.dimension).to.eq("Dimension C-137"); // assert the dimension of the location
      expect(response.body.data.location.type).to.eq(locations[0].type); // assert the type of the location
      expect(response.body.data.location.id).to.eq(`${locations[0].id}`); // assert the id of the location
    });
  });
  it("Gets location 5 within the dimension C-137 and their location type", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query Location($locationId: ID!) {
            location(id: $locationId) {
              created
              dimension
              id
              name
              type
            }
          }`,
        variables: {
          locationId: locations[1].id,
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.location.dimension).to.eq("Dimension C-137"); // assert the dimension of the location
      expect(response.body.data.location.type).to.eq(locations[1].type); // assert the type of the location
      expect(response.body.data.location.id).to.eq(`${locations[1].id}`); // assert the id of the location
    });
  });
  it("Gets location 18 within the dimension C-137 and their location type", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query Location($locationId: ID!) {
            location(id: $locationId) {
              created
              dimension
              id
              name
              type
            }
          }`,
        variables: {
          locationId: locations[2].id,
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.location.dimension).to.eq("Dimension C-137"); // assert the dimension of the location
      expect(response.body.data.location.type).to.eq(locations[2].type); // assert the type of the location
      expect(response.body.data.location.id).to.eq(`${locations[2].id}`); // assert the id of the location
    });
  });
  it("Gets location 46 within the dimension C-137 and their location type", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query Location($locationId: ID!) {
            location(id: $locationId) {
              created
              dimension
              id
              name
              type
            }
          }`,
        variables: {
          locationId: locations[3].id,
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.location.dimension).to.eq("Dimension C-137"); // assert the dimension of the location
      expect(response.body.data.location.type).to.eq(locations[3].type); // assert the type of the location
      expect(response.body.data.location.id).to.eq(`${locations[3].id}`); // assert the id of the location
    });
  });
  it("Gets location 70 within the dimension C-137 and their location type", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query Location($locationId: ID!) {
            location(id: $locationId) {
              created
              dimension
              id
              name
              type
            }
          }`,
        variables: {
          locationId: locations[4].id,
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.location.dimension).to.eq("Dimension C-137"); // assert the dimension of the location
      expect(response.body.data.location.type).to.eq(locations[4].type); // assert the type of the location
      expect(response.body.data.location.id).to.eq(`${locations[4].id}`); // assert the id of the location
    });
  });

  it("Gets location 70 within the dimension C-137 and their location type", () => {
    cy.api({
      method: "POST",
      url: "https://rickandmortyapi.com/graphql",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `query Locations($filter: FilterLocation, $page: Int) {
          locations(filter: $filter, page: $page) {
            info {
              count
              next
              pages
              prev
            }
            results {
              created
              dimension
              id
              name
              type
            }
          }
        }`,
        variables: {
          filter: {
            dimension: "C-137",
          },
          page: 1,
        },
      }),
    }).then((response) => {
      expect(response.status).to.eq(200);
      let locations = response.body.data.locations.results;
      locations.forEach((element) => {
        expect(element.dimension).to.eq("Dimension C-137"); // assert the dimension of the location
      });
    });
  });
});
