import React, { useState, useEffect } from "react";
import { Card, Button, CardGroup } from "react-bootstrap";

function UserData() {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/data");
        const data = await response.json();
        setMenuData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <article>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {menuData.map((item, index) =>
            index % 3 === 0 ? (
              <CardGroup key={index / 3} style={{ marginTop: "15px" }}>
                {[0, 1, 2].map(
                  (i) =>
                    index + i < menuData.length && (
                      <Card
                        key={index + i}
                        style={{
                          width: "18rem",
                          marginRight: "10px",
                          textAlign: "center",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={`${
                            // src={`http://localhost:3001/${
                            menuData[index + i].photoName
                          }`}
                          alt={menuData[index + i].name}
                        />
                        <Card.Body>
                          <Card.Title>{menuData[index + i].name}</Card.Title>
                          <Card.Text>
                            {menuData[index + i].ingredients}
                          </Card.Text>
                          <Card.Text>
                            Price: ${menuData[index + i].price}
                          </Card.Text>
                          <Button variant="primary">Order Now</Button>
                        </Card.Body>
                      </Card>
                    )
                )}
              </CardGroup>
            ) : null
          )}
        </div>
      )}
    </article>
  );
}

export default UserData;
