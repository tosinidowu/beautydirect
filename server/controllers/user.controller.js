import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export class UserController {
    static async registerUser(req, res) {
        try {
            // hash password
            if (!req.body.password) {
                return res
                    .status(400)
                    .json({ message: "Password is required" });
            }
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password, salt);
            const user = new User({
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: hashedPassword,
            });
            // check if email exists
            const existedUser = await User.findOne({ email: req.body.email });
            if (existedUser) {
                return res.status(400).json({ message: "User already exists" });
            }
            await user
                .save()
                .then((data) => {
                    data.password = undefined;
                    res.status(201).json(data);
                })
                .catch((err) => {
                    res.status(500).json({ message: err.message });
                });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async loginUser(req, res) {
        // check if password and email are provided
        if (!req.body.email || !req.body.password) {
            return res
                .status(400)
                .json({ message: "Email and password are required" });
        }
        // check if email exists
        const existedUser = await User.findOne({ email: req.body.email });
        if (!existedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        // check if password is correct
        const validPassword = bcrypt.compareSync(
            req.body.password,
            existedUser.password
        );
        if (!validPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }
        try {
            existedUser.password = undefined;
            res.status(200).json(existedUser);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async getSingleUser(req, res) {
        const existedUser = await User.findOne({ _id: req.params.id });
        if (!existedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        try {
            existedUser.password = undefined;
            res.status(200).json(existedUser);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async updateUser(req, res) {
        // check if the user exists
        const existedUser = await User.findOne({ _id: req.params.id });
        if (!existedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        try {
            if (req.body.password) {
                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(req.body.password, salt);
                existedUser.password = hashedPassword;
            }
            if (req.body.email) {
                console.log(req.body.email);
                existedUser.email = req.body.email;
            }
            if (req.body.firstName) {
                existedUser.firstName = req.body.firstName;
            }
            if (req.body.lastName) {
                existedUser.lastName = req.body.lastName;
            }
            existedUser.updatedAt = Date.now();
            await User.updateOne(
                { _id: req.params.id },
                {
                    $set: {
                        email: existedUser.email,
                        firstName: existedUser.firstName,
                        lastName: existedUser.lastName,
                        password: existedUser.password,
                        updatedAt: existedUser.updatedAt,
                    },
                }
            ).then((data) => {
                res.status(200).json(data);
            });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async deleteUser(req, res) {
        const existedUser = await User.findOne({ _id: req.params.id });
        if (!existedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        try {
            await User.deleteOne({ _id: req.params.id }).then((data) => {
                res.status(200).json(data);
            });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async getAllUsers(req, res) {
        try {
            const users = await User.find({}, { password: 0 });

            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}
