export const getAllNotes = (req, res) => {
    res.status(200).send("you are amazing");
}

export const createNote = (req,res) => {
    res.status(201).json({message:"Note created successully!"})}

export const updateNote = (req,res) => {
    res.status(200).json({message:"Note updated successully!"})}

export const deleteNote = (req,res) => {
    res.status(200).json({message:"Note deleted successully!"})}