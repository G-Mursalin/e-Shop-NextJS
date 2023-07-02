const generateJWT = async (userInfo) => {
  try {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "context-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default generateJWT;
