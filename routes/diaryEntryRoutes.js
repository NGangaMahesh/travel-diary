const express = require('express');
const router = express.Router();
const DiaryEntry = require('../models/DiaryEntry');
const auth = require('../middleware/auth');

// Create a new diary
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, date, location, photos } = req.body;
    const diaryEntry = new DiaryEntry({
      title,
      description,
      date,
      location,
      photos,
      userId: req.user.id,
    });
    await diaryEntry.save();
    res.status(201).json(diaryEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a diary
router.get('/:id', auth, async (req, res) => {
  try {
    const diaryEntry = await DiaryEntry.findById(req.params.id);
    if (!diaryEntry) {
      return res.status(404).json({ message: 'Diary entry not found' });
    }
    res.json(diaryEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a diary
router.patch('/:id', auth, async (req, res) => {
  try {
    const diaryEntry = await DiaryEntry.findById(req.params.id);
    if (!diaryEntry) {
      return res.status(404).json({ message: 'Diary entry not found' });
    }
    if (diaryEntry.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You are not authorized to update this diary entry' });
    }
    const updatedDiaryEntry = await DiaryEntry.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.json(updatedDiaryEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a diary
router.delete('/:id', auth, async (req, res) => {
  try {
    const diaryEntry = await DiaryEntry.findById(req.params.id);
    if (!diaryEntry) {
      return res.status(404).json({ message: 'Diary entry not found' });
    }
    if (diaryEntry.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You are not authorized to delete this diary entry' });
    }
    await diaryEntry.remove();
    res.json({ message: 'Diary entry deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;