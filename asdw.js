const mockData = [
  {
    name: "Iron Man",
    voteCount: 0,
  },
  {
    name: "Captain America",
    voteCount: 0,
  },
  {
    name: "Thor",
    voteCount: 0,
  },
  {
    name: "Spider Man",
    voteCount: 0,
  },
];

const endpoint = "https://67373d98aafa2ef222332359.mockapi.io/presidents";

const createRecords = async () => {
  for (const record of mockData) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      });
      if (!response.ok) {
        console.error(`Failed to create record: ${record.name}`);
      } else {
        console.log(`Successfully created record: ${record.name}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

// Run the function to create records
createRecords();
