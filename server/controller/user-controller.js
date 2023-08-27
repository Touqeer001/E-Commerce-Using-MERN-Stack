import User from "../Model/userSchema.js";

//this function is designed to handle user sign-up or registration. 
//It checks if a user with the provided username already exists, and if not, it creates a new user in the database and sends a success response. 
//If any errors occur, it sends an error response.
export const userSignUp = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });
    if (exist) {
      return response.status(401).json({ message: "User Already Exixt..." });
    }

    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// this function is designed to handle a user login request.
//It retrieves the username and password from the request body,
// attempts to find a matching user in the database, and then sends an appropriate response based on whether the login was successful or not. If any errors occur, it sends an error response.

export const userLogin = async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;

    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return response.status(200).json({data:user});
    } else {
      return response.status(401).json("Invalid Login");
    }
  } catch (error) {
    response.status(500).json("Error", error.message);

  }
};
