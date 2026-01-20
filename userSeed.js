// Import the createUser function
const { createUser } = require("./src/models/User");

const userRegister = async () => {
  try {
    const result = await createUser({
      name: "Admin",
      email: "admin@gmail.com",
      password: "admin",
      role: "SUPER_ADMIN",
    });

    console.log("Admin user created successfully, ID:", result.insertId);
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      console.log("Admin user already exists");
    } else {
      console.log("Error creating admin user:", error);
    }
  } finally {
    process.exit();
  }
};

userRegister();
