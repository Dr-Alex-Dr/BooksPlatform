import { Books } from "./data/books";

export default function handler(req, res) {
    res.status(200).json(Books)
}