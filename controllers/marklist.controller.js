import marklist from "../models/marklist.js";

export const MarksIndex = async (req, res) => {
    try {
        const marks = await marklist.find();
        res.json(marks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const MarksCreate = async (req, res) => {
    try {
      const marks = await marklist.create(req.body);
  
      const total = marks.Java + marks.DS + marks.OS + marks.FDS + marks.Oops;
  
      let grade;
      if (total >= 450) {
        grade = 'A';
      } else if (total >= 400) {
        grade = 'B';
      } else if (total >= 350) {
        grade = 'C';
      } else {
        grade = 'D';
      }
  
      marks.total = total;
      marks.grade = grade;
      await marks.save();
  
      return res.status(201).json(marks);
  
    } catch (error) {
    
      return res.status(400).json({ message: 'Failed to create marks entry' });
    }
  };

export const MarksDetails = async (req, res) => {
    try {
        const marks = await marklist.findById(req.params.id);
        if (marks == null) {
            return res.status(404).json({ message: "Cannot find marks" });
        } else {
            res.json(marks);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const MarksUpdate = async (req, res) => {
    try {
        const marks = await marklist.findByIdAndUpdate(req.params.id,    
            req.body,   
            { new: true }
        );
        res.status(200).json(marks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const MarksDelete = async (req, res) => {
    const marksId = req.params.id;

    try {
        await marklist.deleteOne({ _id: marksId });
        res.json({ message: "Marks entry deleted!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
