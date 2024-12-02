const mockData = [
  {
    name: "Ward",
    email: "ward@example.com",
    pass: "1234",
    type: "user",
  },
  {
    name: "Dania",
    email: "dania@example.com",
    pass: "1234",
    type: "admin",
  },
];

const endpoint = "https://6743a37eb7464b1c2a656fde.mockapi.io/user";

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
