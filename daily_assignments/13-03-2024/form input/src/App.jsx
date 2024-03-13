import React, { useState } from "react";

//users array
const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    contactNo: "+91 1234567890",
    age: 32,
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@example.com",
    contactNo: "+91 9876543210",
    age: 28,
  },
  {
    id: 3,
    name: "Amit Singh",
    email: "amit@example.com",
    contactNo: "+91 7890123456",
    age: 35,
  },
  {
    id: 4,
    name: "Sneha Gupta",
    email: "sneha@example.com",
    contactNo: "+91 8765432109",
    age: 26,
  },
  {
    id: 5,
    name: "Kiran Reddy",
    email: "kiran@example.com",
    contactNo: "+91 7654321098",
    age: 40,
  },
];

function App() {
  const [userId, setUserId] = useState(""); //to get userid from input
  const [userDetails, setUserDetails] = useState(null); //to set user details on submit
  const [searched, setSearched] = useState(false); // to set if any search has been performed or not

  const handleSearch = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.id === parseInt(userId));
    setUserDetails(user);
    setSearched(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f0f0f0",
      }}
    >
      <div
        style={{
          padding: "20px",
          background: "#fff",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Search for user</h3>
        <form onSubmit={handleSearch}>
          <label
            htmlFor="userId"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Enter ID:
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <button
            type="submit"
            style={{
              background: "blue",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Search!
          </button>
        </form>

        {searched && !userDetails && (
          <p style={{ color: "red" }}>User not found.</p>
        )}

        {userDetails && (
          <div className="userDetails">
            <h3 style={{ color: "blue" }}>User Found:</h3>
            <strong>Name:</strong> {userDetails.name}
            <br />
            <strong>Email:</strong> {userDetails.email}
            <br />
            <strong>Contact No:</strong> {userDetails.contactNo}
            <br />
            <strong>Age:</strong> {userDetails.age}
            <br />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
